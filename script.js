// Глобальные переменные для отслеживания мучений пользователя
let failedAttempts = 0;
let captchaAttempts = 0;
let formSubmissions = 0;
let lastMouseMove = Date.now();

// Функция для создания случайных рекламных баннеров
function createRandomAd() {
    const ad = document.createElement('div');
    ad.className = 'ad';
    ad.style.top = Math.random() * window.innerHeight + 'px';
    ad.style.left = Math.random() * window.innerWidth + 'px';
    ad.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    ad.innerHTML = `
        <h3>🎉 ПОЗДРАВЛЯЕМ! ВЫ ВЫИГРАЛИ! 🎉</h3>
        <p>Кликните здесь, чтобы получить приз!</p>
        <button onclick="this.parentElement.style.zIndex++">Закрыть (не работает)</button>
    `;
    document.getElementById('ads-container').appendChild(ad);
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

// Инициализация формы
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const inputs = document.querySelectorAll('.moving-input');
    const submitBtn = document.getElementById('submitBtn');
    let currentCaptcha = generateCaptcha();
    
    // Добавляем раздражающий звук
    const audio = document.getElementById('annoying-sound');
    audio.volume = 0.5;
    
    // Создаем рекламу каждые 5 секунд
    setInterval(createRandomAd, 5000);
    
    // Обработка движения мыши
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastMouseMove > 100) {
            audio.play();
            lastMouseMove = now;
            
            // Двигаем все поля ввода при движении мыши
            inputs.forEach(input => {
                if (Math.random() > 0.7) {
                    input.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
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
            alert('Только двоичные цифры! Переведите свой номер в двоичный формат!');
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
    
    // Обработка отправки формы
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formSubmissions++;
        
        const captchaInput = document.getElementById('captchaInput');
        if (captchaInput.value !== currentCaptcha) {
            captchaAttempts++;
            alert('Неверная капча! Попробуйте еще раз!');
            currentCaptcha = generateCaptcha();
            captchaInput.value = '';
            return;
        }
        
        if (formSubmissions < 3) {
            alert('Форма отправлена слишком быстро! Подождите и попробуйте снова!');
            return;
        }
        
        if (Math.random() > 0.3) {
            failedAttempts++;
            alert('Произошла случайная ошибка! Попробуйте еще раз!');
            return;
        }
        
        // Показываем модальное окно успеха
        const modal = document.getElementById('success-modal');
        modal.style.display = 'block';
        
        // Закрываем модальное окно через 2 секунды
        setTimeout(() => {
            modal.style.display = 'none';
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
    alert('Правый клик запрещен! Используйте левый клик!');
});

// Запрещаем копирование
document.addEventListener('copy', (e) => {
    e.preventDefault();
    alert('Копирование запрещено! Вводите все вручную!');
});

// Запрещаем вставку
document.addEventListener('paste', (e) => {
    e.preventDefault();
    alert('Вставка запрещена! Вводите все вручную!');
}); 