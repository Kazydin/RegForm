// Глобальные переменные для отслеживания мучений пользователя
let failedAttempts = 0;
let captchaAttempts = 0;
let formSubmissions = 0;
let lastMouseMove = Date.now();
let lastModalTime = Date.now();

// Массив путей к мемам
const memeImages = [
    'img/98783-meme-dank-free-download-image.png',
    'img/98777-meme-dank-free-download-png-hq.png',
    'img/97892-meme-face-lenny-download-hq.png',
    'img/97899-meme-face-lenny-download-free-image.png',
    'img/98791-meme-picture-dank-free-photo.png',
    'img/98789-meme-pic-dank-free-clipart-hq.png',
    'img/98795-meme-picture-dank-free-download-image.png',
    'img/98240-meme-photos-angry-no-face.png',
    'img/97958-me-meme-gusta-hq-image-free.png',
    'img/98213-meme-angry-face-download-hq.png',
    'img/97710-meme-photos-frog-download-hq.png',
    'img/97699-meme-frog-hd-image-free.png',
    'img/97715-meme-frog-hd-image-free.png',
    'img/97728-meme-frog-free-clipart-hd.png',
    'img/29069-4-lol-clipart.png',
    'img/97941-me-meme-gusta-download-hq.png',
    'img/97580-meme-photos-doge-hd-image-free.png',
    'img/29115-6-lol-image.png',
    'img/97703-meme-frog-free-hd-image.png',
    'img/3-2-troll-face-meme-png.png'
];

// Массив раздражающих сообщений
const annoyingMessages = [
    { title: "🎉 ПОЗДРАВЛЯЕМ!", message: "Вы только что выиграли iPhone 15 Pro Max!" },
    { title: "⚠️ ВНИМАНИЕ!", message: "Ваш компьютер заражен 69 вирусами!" },
    { title: "💰 ВАУ!", message: "Вы 1,000,000-й посетитель нашего сайта!" },
    { title: "🔥 СРОЧНО!", message: "Горячее предложение! Осталось 5 секунд!" },
    { title: "🎮 ИГРЫ!", message: "Хотите поиграть в увлекательную игру?" },
    { title: "📢 ВАЖНО!", message: "Вы не поверите, что сейчас произойдет!" },
    { title: "🌟 ВЫ ОСОБЕННЫЙ!", message: "Вы избранный пользователь!" },
    { title: "🔔 УВЕДОМЛЕНИЕ!", message: "У вас 10 непрочитанных сообщений!" },
    { title: "🎵 МУЗЫКА!", message: "Хотите послушать любимую песню?" },
    { title: "🎁 ПОДАРОК!", message: "Вам доступен специальный приз!" }
];

let chaosLevel = 0;
let lastChaosUpdate = Date.now();
const chaosInterval = 5000; // 5 секунд между уровнями хаоса

// Функция для создания случайных рекламных баннеров с новыми сообщениями
function createRandomAd() {
    const ad = document.createElement('div');
    ad.className = 'ad';
    ad.style.top = Math.random() * window.innerHeight + 'px';
    ad.style.left = Math.random() * window.innerWidth + 'px';
    ad.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    
    const randomMessage = annoyingMessages[Math.floor(Math.random() * annoyingMessages.length)];
    
    ad.innerHTML = `
        <h3>${randomMessage.title}</h3>
        <p>${randomMessage.message}</p>
        <button onclick="this.parentElement.style.zIndex++">Закрыть (но не закроется)</button>
    `;
    document.getElementById('ads-container').appendChild(ad);
}

// Функция для создания плавающей модалки
function createFloatingModal(title, message) {
    const modal = document.createElement('div');
    modal.className = 'floating-modal';
    
    // Случайная начальная позиция
    modal.style.left = Math.random() * (window.innerWidth - 400) + 'px';
    modal.style.top = Math.random() * (window.innerHeight - 300) + 'px';
    
    // Заголовок и сообщение
    modal.innerHTML = `
        <h2>${title}</h2>
        <p>${message}</p>
    `;
    
    // Создаем несколько кнопок закрытия в случайных местах
    const buttonCount = Math.floor(Math.random() * 3) + 2; // 2-4 кнопки
    const buttonStyles = ['btn-style-1', 'btn-style-2', 'btn-style-3', 'btn-style-4'];
    
    for (let i = 0; i < buttonCount; i++) {
        const button = document.createElement('button');
        button.className = `modal-close-btn ${buttonStyles[Math.floor(Math.random() * buttonStyles.length)]}`;
        button.textContent = ['×', '✖', '❌', '🚫'][Math.floor(Math.random() * 4)];
        
        // Случайное положение кнопки
        button.style.left = Math.random() * 100 + '%';
        button.style.top = Math.random() * 100 + '%';
        
        // Случайный размер
        button.style.transform = `scale(${0.8 + Math.random() * 0.4})`;
        
        // При наведении кнопка убегает
        button.addEventListener('mouseover', (e) => {
            if (Math.random() > 0.3) { // 70% шанс что кнопка убежит
                const newLeft = Math.random() * 100;
                const newTop = Math.random() * 100;
                button.style.left = `${newLeft}%`;
                button.style.top = `${newTop}%`;
            }
        });
        
        // Закрытие модалки при клике
        button.addEventListener('click', () => {
            if (Math.random() > 0.5) { // 50% шанс что модалка закроется
                modal.remove();
            } else {
                // Иначе модалка перемещается в случайное место
                modal.style.left = Math.random() * (window.innerWidth - 400) + 'px';
                modal.style.top = Math.random() * (window.innerHeight - 300) + 'px';
                showNotification('Упс!', 'Не удалось закрыть окно, попробуйте еще раз!', 'error');
            }
        });
        
        modal.appendChild(button);
    }
    
    // Делаем модалку перетаскиваемой
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    
    modal.addEventListener('mousedown', (e) => {
        isDragging = true;
        initialX = e.clientX - modal.offsetLeft;
        initialY = e.clientY - modal.offsetTop;
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            modal.style.left = currentX + 'px';
            modal.style.top = currentY + 'px';
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    document.body.appendChild(modal);
    
    // Добавляем случайное движение
    if (chaosLevel > 2) {
        setInterval(() => {
            if (!isDragging && Math.random() > 0.7) {
                const currentLeft = parseInt(modal.style.left);
                const currentTop = parseInt(modal.style.top);
                
                modal.style.left = (currentLeft + (Math.random() * 40 - 20)) + 'px';
                modal.style.top = (currentTop + (Math.random() * 40 - 20)) + 'px';
            }
        }, 1000);
    }
}

// Обновляем функцию showRandomModal
function showRandomModal() {
    const now = Date.now();
    if (now - lastModalTime > 3000) { // Показываем новую модалку каждые 3 секунды
        lastModalTime = now;
        const message = annoyingMessages[Math.floor(Math.random() * annoyingMessages.length)];
        createFloatingModal(message.title, message.message);
    }
}

// Функция для генерации случайной капчи
function generateCaptcha() {
    const canvas = document.getElementById('captchaCanvas');
    const ctx = canvas.getContext('2d');
    const captchaText = Math.random().toString(36).substring(2, 8).toUpperCase();
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Рисуем текст капчи с случайными искажениями
    for (let i = 0; i < captchaText.length; i++) {
        ctx.font = `${Math.random() * 20 + 20}px Comic Sans MS`;
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        ctx.rotate(Math.random() * 0.5 - 0.25);
        ctx.fillText(
            captchaText[i],
            30 + i * 30,
            50 + Math.random() * 20
        );
    }
    
    // Добавляем шум
    for (let i = 0; i < 100; i++) {
        ctx.fillStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
        ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
    }
    
    return captchaText;
}

// Функция для проверки силы пароля
function checkPasswordStrength(password) {
    const hasEmoji = /[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(password);
    const hasChinese = /[\u4e00-\u9fa5]/.test(password);
    const hasLength = password.length >= 20;
    
    if (!hasEmoji) {
        return 'Добавьте хотя бы 5 эмодзи! 😡';
    }
    if (!hasChinese) {
        return 'Нужно минимум 3 иероглифа! 漢字';
    }
    if (!hasLength) {
        return 'Слишком короткий пароль! Нужно минимум 20 символов!';
    }
    
    return 'Пароль подходит (но это не точно)';
}

// Функция для создания уведомления
function showNotification(title, message, type = 'info', duration = 3000) {
    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    notification.innerHTML = `
        <div class="notification-title">${title}</div>
        <div class="notification-message">${message}</div>
        <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    container.appendChild(notification);
    
    // Добавляем класс show после небольшой задержки для анимации
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Если форма в режиме хаоса, добавляем случайные эффекты
    if (chaosLevel > 0) {
        notification.style.transform += ` rotate(${Math.random() * 10 - 5}deg)`;
        if (Math.random() > 0.5) {
            notification.style.animation = `shake ${0.1 + Math.random() * 0.4}s infinite`;
        }
    }
    
    // Удаляем уведомление через указанное время
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, duration);
}

// Функция для создания плавающего мема
function createFloatingMeme() {
    const meme = document.createElement('img');
    meme.className = 'floating-meme';
    meme.src = memeImages[Math.floor(Math.random() * memeImages.length)];
    
    // Случайная позиция
    meme.style.left = Math.random() * window.innerWidth + 'px';
    meme.style.top = Math.random() * window.innerHeight + 'px';
    
    // Случайный размер
    const size = 50 + Math.random() * 100;
    meme.style.width = size + 'px';
    
    // Случайная скорость и направление
    const duration = 5 + Math.random() * 10;
    meme.style.animation = `float ${duration}s infinite ease-in-out`;
    meme.style.animationDelay = `-${Math.random() * duration}s`;
    
    document.getElementById('memes-container').appendChild(meme);
    
    // Плавное появление
    setTimeout(() => {
        meme.style.opacity = '0.7';
    }, 100);
}

// Функция для применения эффектов хаоса
function applyChaosEffects() {
    const now = Date.now();
    if (now - lastChaosUpdate < chaosInterval) return;
    
    lastChaosUpdate = now;
    chaosLevel++;
    
    const body = document.body;
    const container = document.querySelector('.container');
    const form = document.getElementById('registrationForm');
    const inputs = document.querySelectorAll('.form-control');
    
    // Показываем уведомление о новом уровне хаоса
    const message = annoyingMessages[Math.floor(Math.random() * annoyingMessages.length)];
    showNotification(message.title, message.message, 
        ['info', 'warning', 'error', 'success'][Math.floor(Math.random() * 4)]);
    
    switch(chaosLevel) {
        case 1:
            body.style.backgroundColor = '#000';
            container.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            body.classList.add('chaos-mode');
            setInterval(() => {
                if (Math.random() > 0.7) {
                    const message = annoyingMessages[Math.floor(Math.random() * annoyingMessages.length)];
                    showNotification(message.title, message.message, 
                        ['info', 'warning', 'error', 'success'][Math.floor(Math.random() * 4)]);
                }
            }, 3000);
            setInterval(createFloatingMeme, 2000);
            createFloatingMeme();
            break;
            
        case 2:
            body.style.animation = 'backgroundChange 2s infinite';
            container.style.backdropFilter = 'blur(5px)';
            break;
            
        case 3:
            inputs.forEach(input => {
                input.style.animation = 'shake 0.5s infinite';
            });
            break;
            
        case 4:
            setInterval(() => {
                inputs.forEach(input => {
                    if (Math.random() > 0.7) {
                        input.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 90%)`;
                    }
                });
            }, 1000);
            break;
            
        case 5:
            inputs.forEach(input => {
                input.addEventListener('mouseover', (e) => {
                    if (Math.random() > 0.5) {
                        const x = Math.random() * 50 - 25;
                        const y = Math.random() * 50 - 25;
                        e.target.style.transform = `translate(${x}px, ${y}px)`;
                    }
                });
            });
            break;
    }
}

// Инициализация формы
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const inputs = document.querySelectorAll('.moving-input');
    const submitBtn = document.getElementById('submitBtn');
    let currentCaptcha = generateCaptcha();
    
    // Создаем рекламу каждые 3 секунды (вместо 5)
    setInterval(createRandomAd, 3000);
    
    // Показываем случайные модалки
    setInterval(showRandomModal, 5000);
    
    // Более агрессивное изменение размеров полей
    setInterval(() => {
        inputs.forEach(input => {
            if (Math.random() > 0.5) {
                const width = 50 + Math.random() * 100;
                const height = 20 + Math.random() * 60;
                const marginLeft = Math.random() * 20 - 10;
                input.style.width = `${width}%`;
                input.style.height = `${height}px`;
                input.style.marginLeft = `${marginLeft}%`;
                input.style.transform += ` skew(${Math.random() * 20 - 10}deg)`;
            }
        });
    }, 200);

    // Менее частое изменение цвета фона
    setInterval(() => {
        // Изменяем только цвета полей ввода, не трогая фон
        inputs.forEach(input => {
            input.style.backgroundColor = `rgb(
                ${Math.random() * 255},
                ${Math.random() * 255},
                ${Math.random() * 255}
            )`;
            input.style.color = `rgb(
                ${Math.random() * 255},
                ${Math.random() * 255},
                ${Math.random() * 255}
            )`;
            input.style.borderWidth = `${1 + Math.random() * 5}px`;
            input.style.borderStyle = Math.random() > 0.5 ? 'dotted' : 'dashed';
        });
    }, 100);

    // Плавное изменение цвета фона (реже)
    let hue = 0;
    setInterval(() => {
        hue = (hue + 1) % 360;
        document.body.style.backgroundColor = `hsl(${hue}, 70%, 60%)`;
    }, 1000); // Изменение каждую секунду
    
    // Отключаем звук (закомментировано)
    // const audio = document.getElementById('annoying-sound');
    // audio.volume = 0.5;
    
    // Обработка движения мыши
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastMouseMove > 100) {
            // audio.play(); // отключаем звук
            lastMouseMove = now;
            
            inputs.forEach(input => {
                if (Math.random() > 0.8) {
                    const rect = input.getBoundingClientRect();
                    const mouseX = e.clientX;
                    const mouseY = e.clientY;
                    
                    const deltaX = (rect.left + rect.width/2) - mouseX;
                    const deltaY = (rect.top + rect.height/2) - mouseY;
                    
                    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                    const repulsion = Math.max(0, 1 - distance/200);
                    
                    // Добавляем случайное изменение размера при отталкивании
                    const scale = 0.8 + Math.random() * 0.6; // от 0.8 до 1.4
                    
                    input.style.transform = `
                        translate(${deltaX * repulsion}px, ${deltaY * repulsion}px)
                        rotate(${Math.random() * 360}deg)
                        scale(${scale})
                    `;
                    
                    // Добавляем мерцание при приближении курсора
                    if (distance < 100) {
                        input.style.filter = `hue-rotate(${Math.random() * 360}deg) brightness(${1 + Math.random()})`;
                    }
                }
            });
        }
    });
    
    // Валидация телефона (должен быть в двоичном формате)
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', (e) => {
        const value = e.target.value.replace(/[^01]/g, '');
        e.target.value = value;
        
        if (!/^[01]+$/.test(value)) {
            showNotification('Ошибка', 'Только двоичные цифры! Переведите свой номер в двоичный формат!', 'error');
        }
    });
    
    // Проверка пароля
    const passwordInput = document.getElementById('password');
    const strengthDiv = document.getElementById('password-strength');
    
    passwordInput.addEventListener('input', () => {
        const message = checkPasswordStrength(passwordInput.value);
        strengthDiv.textContent = message;
        strengthDiv.style.backgroundColor = message.includes('подходит') ? '#00ff00' : '#ff0000';
    });
    
    // Проверяем уровень хаоса каждую секунду
    setInterval(applyChaosEffects, 1000);
    
    // Обработка отправки формы
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formSubmissions++;
        
        const captchaInput = document.getElementById('captchaInput');
        if (captchaInput.value !== currentCaptcha) {
            captchaAttempts++;
            createFloatingModal('Ошибка!', 'Неверная капча! Попробуйте еще раз!');
            currentCaptcha = generateCaptcha();
            captchaInput.value = '';
            return;
        }
        
        if (formSubmissions < 3) {
            createFloatingModal('Ошибка!', 'Форма отправлена слишком быстро! Подождите и попробуйте снова!');
            return;
        }
        
        // Показываем случайное сообщение об ошибке
        if (Math.random() > 0.1) { // 90% шанс ошибки
            failedAttempts++;
            const errorMessage = annoyingMessages[Math.floor(Math.random() * annoyingMessages.length)];
            createFloatingModal(errorMessage.title, errorMessage.message);
            return;
        }
        
        // Показываем модальное окно успеха
        createFloatingModal('🎉 Поздравляем!', 'Регистрация успешно завершена! Наверное...');
        
        // Сбрасываем форму через 2 секунды
        setTimeout(() => {
            form.reset();
            currentCaptcha = generateCaptcha();
        }, 2000);
    });
    
    // Генерируем новую капчу при каждом клике на canvas
    document.getElementById('captchaCanvas').addEventListener('click', () => {
        currentCaptcha = generateCaptcha();
    });
});

// Запрещаем правый клик
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showNotification('Ошибка', 'Правый клик запрещен! Используйте левый клик!', 'error');
});

// Запрещаем копирование
document.addEventListener('copy', (e) => {
    e.preventDefault();
    showNotification('Ошибка', 'Копирование запрещено! Вводите все вручную!', 'error');
});

// Запрещаем вставку
document.addEventListener('paste', (e) => {
    e.preventDefault();
    showNotification('Ошибка', 'Вставка запрещена! Вводите все вручную!', 'error');
}); 