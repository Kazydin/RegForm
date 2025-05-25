// Глобальные переменные для отслеживания мучений пользователя
let failedAttempts = 0;
let captchaAttempts = 0;
let formSubmissions = 0;
let lastMouseMove = Date.now();
let lastModalTime = Date.now();

// Добавляем глобальные переменные для кринжометра
let currentHeartRate = 80;
const maxHeartRate = 220;
const baseHeartRate = 80;

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

// Массив стилей для баннеров
const adStyles = [
    {
        name: 'cyber',
        style: {
            background: 'linear-gradient(45deg, #000, #0f0)',
            border: '2px solid #0f0',
            color: '#0f0',
            fontFamily: '"Courier New", monospace',
            clipPath: 'polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%)'
        }
    },
    {
        name: 'neon',
        style: {
            background: '#000',
            border: '3px solid #0ff',
            boxShadow: '0 0 20px #0ff, inset 0 0 20px #0ff',
            color: '#fff',
            textShadow: '0 0 10px #0ff'
        }
    },
    {
        name: 'retro',
        style: {
            background: 'repeating-linear-gradient(45deg, #ff6b6b, #ff6b6b 10px, #ff8787 10px, #ff8787 20px)',
            border: '8px double #4a90e2',
            fontFamily: '"Comic Sans MS", cursive'
        }
    },
    {
        name: 'kawaii',
        style: {
            background: 'linear-gradient(45deg, #ffcce6, #ff99cc)',
            border: '10px solid #fff',
            borderRadius: '30px',
            boxShadow: '0 0 20px rgba(255, 153, 204, 0.5)',
            color: '#ff66b2'
        }
    },
    {
        name: 'glitch',
        style: {
            background: '#000',
            border: '2px solid #f0f',
            color: '#f0f',
            textShadow: '2px 2px #0ff, -2px -2px #f00',
            animation: 'glitch 0.3s infinite'
        }
    },
    {
        name: 'vaporwave',
        style: {
            background: 'linear-gradient(45deg, #ff6b6b, #4a90e2)',
            border: '4px solid #ff00ff',
            color: '#fff',
            fontFamily: '"Times New Roman", serif',
            textShadow: '2px 2px #ff00ff'
        }
    },
    {
        name: 'minimal',
        style: {
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid #000',
            color: '#000',
            fontFamily: '"Helvetica Neue", sans-serif',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
        }
    },
    {
        name: 'rainbow',
        style: {
            background: 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)',
            border: '5px solid gold',
            color: '#fff',
            textShadow: '1px 1px #000'
        }
    },
    {
        name: 'matrix',
        style: {
            background: '#000',
            border: '2px solid #0f0',
            color: '#0f0',
            fontFamily: 'monospace',
            textShadow: '0 0 5px #0f0'
        }
    },
    {
        name: 'horror',
        style: {
            background: '#000',
            border: '3px solid #800000',
            color: '#ff0000',
            fontFamily: '"Creepster", cursive',
            textShadow: '0 0 10px #ff0000',
            boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)'
        }
    }
];

// Массив стилей для модалок
const modalStyles = [
    {
        className: 'retro',
        animation: 'spinAndFloat 8s infinite',
        size: { min: 300, max: 500 }
    },
    {
        className: 'neon',
        animation: 'glitch 0.3s infinite',
        size: { min: 250, max: 400 }
    },
    {
        className: 'minimal',
        animation: 'wobble 4s infinite',
        size: { min: 200, max: 350 }
    },
    {
        className: 'cyber',
        animation: 'zigzag 6s infinite',
        size: { min: 350, max: 600 }
    },
    {
        className: 'kawaii',
        animation: 'bounceAround 5s infinite',
        size: { min: 280, max: 450 }
    }
];

// Множество для отслеживания использованных мемов
let usedMemes = new Set();

// Массив типов движения для мемов
const memeAnimationTypes = [
    'float', // Плавное движение
    'diagonal', // По диагонали
    'corners', // По углам
    'zigzag', // Зигзагом
    'spiral', // По спирали
    'bounce', // С отскоками
];

// Массив анимаций для баннеров
const adAnimations = [
    { name: 'adCrazy1', duration: '8s' },
    { name: 'adCrazy2', duration: '6s' },
    { name: 'adBounce', duration: '4s' },
    { name: 'adShake', duration: '3s' },
    { name: 'adFlip', duration: '5s' },
    { name: 'adDiagonal', duration: '10s' },
    { name: 'adPulse', duration: '3s' },
    { name: 'adZigZag', duration: '7s' },
    { name: 'adSpiral', duration: '9s' },
    { name: 'adChaos', duration: '8s' }
];

// Массив танцевальных стилей
const danceStyles = [
    {
        name: 'dance',
        formAnimation: 'formDance 4s infinite ease-in-out',
        inputAnimation: 'inputDance 2s infinite ease-in-out',
        duration: 4
    },
    {
        name: 'salsa',
        formAnimation: 'formSalsa 3s infinite ease-in-out',
        inputAnimation: 'inputSalsa 1.5s infinite ease-in-out',
        duration: 3
    },
    {
        name: 'waltz',
        formAnimation: 'formWaltz 6s infinite ease-in-out',
        inputAnimation: 'inputWaltz 3s infinite ease-in-out',
        duration: 6
    },
    {
        name: 'tango',
        formAnimation: 'formTango 4s infinite ease-in-out',
        inputAnimation: 'inputTango 2s infinite ease-in-out',
        duration: 4
    },
    {
        name: 'breakdance',
        formAnimation: 'formBreakdance 2s infinite ease-in-out',
        inputAnimation: 'inputBreakdance 1s infinite ease-in-out',
        duration: 2
    }
];

// Массив демонических фраз
const demonicPhrases = [
    { ru: "Добро пожаловать в вечность", lat: "Bene venit ad aeternitatem" },
    { ru: "Твоя душа теперь принадлежит тьме", lat: "Anima tua nunc tenebris pertinet" },
    { ru: "Нет пути назад", lat: "Non est via retrorsum" },
    { ru: "Врата ада открыты", lat: "Portae inferni apertae sunt" },
    { ru: "Тьма поглотит всё", lat: "Tenebrae consumunt omnia" },
    { ru: "Вечное проклятие", lat: "Maledictio aeterna" },
    { ru: "Смерть - это только начало", lat: "Mors est initium solum" },
    { ru: "Кровь за кровь", lat: "Sanguis pro sanguine" },
    { ru: "Царство теней ждёт", lat: "Regnum umbrarum expectat" },
    { ru: "Печать дьявола", lat: "Sigillum diaboli" },
    { ru: "Время искупления", lat: "Tempus redemptionis" },
    { ru: "Вечная тьма", lat: "Tenebrae aeternae" },
    { ru: "Ад приветствует тебя", lat: "Infernum te salutant" },
    { ru: "Забудь о свете", lat: "Oblivisci lucis" },
    { ru: "Страдания вечны", lat: "Dolores aeterni" },
    { ru: "Тени поглотят твою душу", lat: "Umbrae animam tuam devorabunt" },
    { ru: "Время остановилось", lat: "Tempus stetit" },
    { ru: "Боль очищает", lat: "Dolor purificat" },
    { ru: "Смерть - это дар", lat: "Mors donum est" },
    { ru: "Ад ждал тебя", lat: "Infernum te expectabat" },
    { ru: "Добро пожаловать домой", lat: "Bene venit domum" },
    { ru: "Твой путь окончен", lat: "Via tua finita est" },
    { ru: "Вечные муки ждут", lat: "Tormenta aeterna expectant" },
    { ru: "Тьма - твой новый дом", lat: "Tenebrae - domus nova tua" },
    { ru: "Отрекись от света", lat: "Abnega lucem" },
    { ru: "Прими свою судьбу", lat: "Accipe fatum tuum" },
    { ru: "Врата закрылись навечно", lat: "Portae clausae in aeternum" },
    { ru: "Ад раскрыл свои объятия", lat: "Infernum amplexus suos aperuit" },
    { ru: "Твоя душа принадлежит нам", lat: "Anima tua nobis pertinet" },
    { ru: "Страх - твой вечный спутник", lat: "Terror - comes tuus aeternus" }
];

// Массив эмодзи для ребусов
const captchaEmoji = {
    numbers: ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'],
    operations: ['➕', '➖', '✖️'],
    items: ['🍎', '👻', '💀', '🦇', '🕷️', '🎃', '⚰️', '🔮', '🕯️', '🗡️']
};

// Массив стебных фраз для кнопок закрытия
const closeButtonPhrases = [
    'Нет, я останусь 😈',
    'Попробуй закрыть, хе-хе',
    'Сопротивление бесполезно',
    'Ой, а что это не работает?',
    'Кнопочка сломалась ¯\\_(ツ)_/¯',
    'Щас, только перезагружусь',
    'Error 404: Close button not found',
    'Я неуязвимая реклама!',
    'Ты правда думал, что это сработает?',
    'Меня так просто не закрыть',
    'Я тут навечно ❤️',
    'Кнопка устала, приходи завтра',
    'Упс... Не получилось',
    'Я только начал показываться',
    'Ха-ха, наивный',
    'Закрыть? Не в этой жизни',
    'Я тебе не какой-то попап!',
    'Кнопка на обеде 🍕',
    'Просто смирись с этим',
    'Resistance is futile',
    'Ты меня не победишь',
    'Я тут главный!',
    'Даже не пытайся',
    'Кнопка в отпуске 🏖️',
    'Error: Task failed successfully'
];

// Функция для получения случайного неиспользованного мема
function getRandomUnusedMeme() {
    // Если все мемы использованы, очищаем множество
    if (usedMemes.size >= memeImages.length) {
        usedMemes.clear();
    }
    
    // Выбираем случайный неиспользованный мем
    let unusedMemes = memeImages.filter(meme => !usedMemes.has(meme));
    let randomMeme = unusedMemes[Math.floor(Math.random() * unusedMemes.length)];
    usedMemes.add(randomMeme);
    
    return randomMeme;
}

// Функция для создания случайных рекламных баннеров
function createRandomAd() {
    let adsContainer = document.getElementById('ads-container');
    if (!adsContainer) {
        adsContainer = document.createElement('div');
        adsContainer.id = 'ads-container';
        document.body.appendChild(adsContainer);
    }

    // Проверяем количество существующих баннеров
    const currentAds = document.querySelectorAll('.ad');
    if (currentAds.length >= 20) {
        const oldestAd = currentAds[0];
        oldestAd.style.opacity = '0';
        oldestAd.style.transform = 'scale(0.5) rotate(10deg)';
        setTimeout(() => oldestAd.remove(), 300);
        return;
    }

    const ad = document.createElement('div');
    ad.className = 'ad';
    ad.dataset.created = Date.now();
    
    // Случайная позиция с учетом существующих баннеров
    let attempts = 0;
    let validPosition = false;
    let topPos, leftPos;

    while (!validPosition && attempts < 10) {
        topPos = Math.random() * (window.innerHeight - 200);
        leftPos = Math.random() * (window.innerWidth - 300);
        
        validPosition = true;
        currentAds.forEach(existingAd => {
            const rect = existingAd.getBoundingClientRect();
            const distance = Math.sqrt(
                Math.pow(topPos - rect.top, 2) + 
                Math.pow(leftPos - rect.left, 2)
            );
            if (distance < 150) {
                validPosition = false;
            }
        });
        
        attempts++;
    }

    ad.style.top = topPos + 'px';
    ad.style.left = leftPos + 'px';
    
    // Применяем случайный стиль
    const randomStyle = adStyles[Math.floor(Math.random() * adStyles.length)];
    Object.assign(ad.style, randomStyle.style);
    
    // Выбираем случайную анимацию из нового массива
    const randomAnimation = adAnimations[Math.floor(Math.random() * adAnimations.length)];
    ad.style.animation = `${randomAnimation.name} ${randomAnimation.duration} infinite`;
    
    // Добавляем случайные трансформации
    if (Math.random() > 0.5) {
        ad.style.transform += ` rotateX(${Math.random() * 360}deg)`;
    }
    if (Math.random() > 0.5) {
        ad.style.transform += ` rotateY(${Math.random() * 360}deg)`;
    }
    if (Math.random() > 0.7) {
        ad.style.transform += ` skew(${Math.random() * 20 - 10}deg)`;
    }
    
    const randomMessage = annoyingMessages[Math.floor(Math.random() * annoyingMessages.length)];
    const randomClosePhrase = closeButtonPhrases[Math.floor(Math.random() * closeButtonPhrases.length)];
    
    ad.innerHTML = `
        <h3>${randomMessage.title}</h3>
        <p>${randomMessage.message}</p>
        <button onclick="this.parentElement.remove()">${randomClosePhrase}</button>
    `;
    
    // Добавляем случайные стили для кнопки
    const button = ad.querySelector('button');
    if (button) {
        const randomHue = Math.random() * 360;
        button.style.cssText = `
            background: hsl(${randomHue}, 70%, 20%) !important;
            color: hsl(${randomHue}, 100%, 70%) !important;
            border: 2px solid hsl(${randomHue}, 100%, 50%) !important;
            padding: 8px 15px !important;
            border-radius: 5px !important;
            cursor: pointer !important;
            font-size: 14px !important;
            font-family: 'DuskDemon', cursive !important;
            text-transform: uppercase !important;
            letter-spacing: 1px !important;
            margin-top: 10px !important;
            transition: all 0.3s ease !important;
            text-shadow: 0 0 5px hsl(${randomHue}, 100%, 70%) !important;
            box-shadow: 0 0 10px hsla(${randomHue}, 100%, 50%, 0.3) !important;
        `;

        // Добавляем эффект при наведении
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1) rotate(${Math.random() * 10 - 5}deg)';
            button.style.boxShadow = `0 0 20px hsla(${randomHue}, 100%, 50%, 0.5)`;
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1) rotate(0deg)';
            button.style.boxShadow = `0 0 10px hsla(${randomHue}, 100%, 50%, 0.3)`;
        });

        // Добавляем случайное поведение при клике
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Предотвращаем закрытие
            const actions = [
                // Убегающая кнопка
                () => {
                    button.style.position = 'relative';
                    button.style.left = Math.random() * 100 - 50 + 'px';
                    button.style.top = Math.random() * 100 - 50 + 'px';
                },
                // Вращающаяся кнопка
                () => {
                    button.style.transform = `rotate(${Math.random() * 360}deg)`;
                },
                // Мигающая кнопка
                () => {
                    button.style.animation = 'blink 0.1s infinite';
                },
                // Изменение текста
                () => {
                    button.textContent = closeButtonPhrases[Math.floor(Math.random() * closeButtonPhrases.length)];
                },
                // Создание нового баннера
                () => {
                    createRandomAd();
                }
            ];
            
            // Выполняем случайное действие
            actions[Math.floor(Math.random() * actions.length)]();
        });
    }
    
    // Добавляем анимацию появления
    ad.style.opacity = '0';
    ad.style.transform = 'scale(0.5)';
    adsContainer.appendChild(ad);
    
    // Плавное появление
    requestAnimationFrame(() => {
        ad.style.opacity = '1';
        ad.style.transform = 'scale(1)';
    });
    
    // Случайное время жизни от 1 до 5 секунд
    const lifetime = 1000 + Math.random() * 4000;
    
    setTimeout(() => {
        if (ad.parentNode === adsContainer) {
            ad.style.opacity = '0';
            ad.style.transform = 'scale(0.5) rotate(10deg)';
            setTimeout(() => {
                if (ad.parentNode === adsContainer) {
                    ad.remove();
                    if (document.querySelectorAll('.ad').length < 20) {
                        createRandomAd();
                    }
                }
            }, 300);
        }
    }, lifetime);
}

// Обновляем интервал создания баннеров (каждые 0.5 секунды)
setInterval(() => {
    const currentAds = document.querySelectorAll('.ad');
    if (currentAds.length < 20) {
        createRandomAd();
    }
}, 500);

// Обновляем функцию создания модалки
function createFloatingModal(title, message) {
    const modal = document.createElement('div');
    
    // Выбираем случайный стиль
    const style = modalStyles[Math.floor(Math.random() * modalStyles.length)];
    modal.className = `floating-modal ${style.className}`;
    
    // Случайный размер из диапазона для выбранного стиля
    const width = style.size.min + Math.random() * (style.size.max - style.size.min);
    modal.style.width = `${width}px`;
    
    // Случайная начальная позиция
    modal.style.left = Math.random() * (window.innerWidth - width) + 'px';
    modal.style.top = Math.random() * (window.innerHeight - width * 0.8) + 'px';
    
    // Добавляем анимацию
    modal.style.animation = style.animation;
    
    // Заголовок и сообщение
    modal.innerHTML = `
        <h2>${title}</h2>
        <p>${message}</p>
    `;
    
    // Создаем кнопки закрытия
    const buttonCount = Math.floor(Math.random() * 4) + 2; // 2-5 кнопок
    const buttonStyles = ['btn-style-1', 'btn-style-2', 'btn-style-3', 'btn-style-4', 
                         'btn-style-5', 'btn-style-6', 'btn-style-7', 'btn-style-8'];
    
    for (let i = 0; i < buttonCount; i++) {
        const button = document.createElement('button');
        button.className = `modal-close-btn ${buttonStyles[Math.floor(Math.random() * buttonStyles.length)]}`;
        
        // Разные символы для кнопок
        const symbols = ['×', '✖', '❌', '🚫', '⛔', '🔴', '❎', '✕', '☒', '⊗'];
        button.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        
        // Случайное положение кнопки
        button.style.left = Math.random() * 100 + '%';
        button.style.top = Math.random() * 100 + '%';
        
        // Случайный размер и поворот
        const scale = 0.8 + Math.random() * 0.8; // 0.8 - 1.6
        const rotation = Math.random() * 360;
        button.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
        
        // При наведении кнопка может:
        button.addEventListener('mouseover', (e) => {
            const actions = [
                // Убежать
                () => {
                    const newLeft = Math.random() * 100;
                    const newTop = Math.random() * 100;
                    button.style.left = `${newLeft}%`;
                    button.style.top = `${newTop}%`;
                },
                // Повернуться
                () => {
                    button.style.transform = `scale(${scale}) rotate(${Math.random() * 360}deg)`;
                },
                // Изменить размер
                () => {
                    button.style.transform = `scale(${0.5 + Math.random() * 1.5})`;
                },
                // Начать мигать
                () => {
                    button.style.animation = 'blink 0.1s infinite';
                }
            ];
            
            // Выбираем случайное действие
            actions[Math.floor(Math.random() * actions.length)]();
        });
        
        // Закрытие модалки при клике
        button.addEventListener('click', () => {
            const actions = [
                // Закрыть модалку
                () => modal.remove(),
                // Переместить модалку
                () => {
                    modal.style.left = Math.random() * (window.innerWidth - width) + 'px';
                    modal.style.top = Math.random() * (window.innerHeight - width * 0.8) + 'px';
                    showNotification('Упс!', 'Не удалось закрыть окно, попробуйте еще раз!', 'error');
                },
                // Изменить стиль модалки
                () => {
                    const newStyle = modalStyles[Math.floor(Math.random() * modalStyles.length)];
                    modal.className = `floating-modal ${newStyle.className}`;
                    modal.style.animation = newStyle.animation;
                },
                // Создать новую модалку
                () => {
                    createFloatingModal('😈', 'Попытка закрыть окно создала новое!');
                }
            ];
            
            // Выбираем случайное действие
            actions[Math.floor(Math.random() * actions.length)]();
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
        
        // Случайный эффект при начале перетаскивания
        if (Math.random() > 0.7) {
            modal.style.transform = `rotate(${Math.random() * 360}deg)`;
        }
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            
            modal.style.left = currentX + 'px';
            modal.style.top = currentY + 'px';
            
            // Случайные эффекты при перетаскивании
            if (Math.random() > 0.95) {
                modal.style.transform = `scale(${0.8 + Math.random() * 0.4})`;
            }
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    document.body.appendChild(modal);
    
    // Добавляем случайное движение в режиме хаоса
    if (chaosLevel > 2) {
        setInterval(() => {
            if (!isDragging && Math.random() > 0.7) {
                const currentLeft = parseInt(modal.style.left);
                const currentTop = parseInt(modal.style.top);
                
                // Более сложное движение
                const moveTypes = [
                    // Плавное движение
                    () => {
                        modal.style.left = (currentLeft + (Math.random() * 40 - 20)) + 'px';
                        modal.style.top = (currentTop + (Math.random() * 40 - 20)) + 'px';
                    },
                    // Резкий прыжок
                    () => {
                        modal.style.left = (currentLeft + (Math.random() * 200 - 100)) + 'px';
                        modal.style.top = (currentTop + (Math.random() * 200 - 100)) + 'px';
                    },
                    // Вращение
                    () => {
                        modal.style.transform = `rotate(${Math.random() * 360}deg)`;
                    },
                    // Изменение размера
                    () => {
                        modal.style.transform = `scale(${0.8 + Math.random() * 0.4})`;
                    }
                ];
                
                moveTypes[Math.floor(Math.random() * moveTypes.length)]();
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

// Функция для генерации случайного числа от min до max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для генерации капчи
function generateCaptcha() {
    const canvas = document.getElementById('captchaCanvas');
    const ctx = canvas.getContext('2d');
    
    // Увеличиваем размер canvas для больших иконок
    canvas.width = 300;
    canvas.height = 150;
    
    // Очищаем канвас
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Генерируем ребус
    const type = Math.random() > 0.5 ? 'math' : 'count';
    let answer;
    let rebus;
    
    if (type === 'math') {
        // Математический ребус
        const num1 = getRandomNumber(1, 5);
        const num2 = getRandomNumber(1, 5);
        const operation = captchaEmoji.operations[getRandomNumber(0, 2)];
        
        // Вычисляем ответ
        switch(operation) {
            case '➕': answer = num1 + num2; break;
            case '➖': answer = num1 - num2; break;
            case '✖️': answer = num1 * num2; break;
        }
        
        rebus = `${captchaEmoji.numbers[num1]} ${operation} ${captchaEmoji.numbers[num2]}`;
    } else {
        // Ребус на подсчет количества
        const item = captchaEmoji.items[getRandomNumber(0, captchaEmoji.items.length - 1)];
        const count = getRandomNumber(2, 5);
        answer = count;
        rebus = item.repeat(count);
    }
    
    // Добавляем демонический фон
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#1a0000');
    gradient.addColorStop(1, '#000000');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Добавляем случайные красные точки
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = `rgba(255, 0, 0, ${Math.random() * 0.3})`;
        ctx.beginPath();
        ctx.arc(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 2,
            0,
            Math.PI * 2
        );
        ctx.fill();
    }
    
    // Добавляем подсказку
    ctx.font = '24px DuskDemon';
    ctx.fillStyle = 'rgba(255, 0, 0, 0.7)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.shadowColor = '#ff0000';
    ctx.shadowBlur = 10;
    ctx.fillText(type === 'math' ? 'Решите пример' : 'Сколько символов?', canvas.width / 2, 10);
    
    // Рисуем ребус большим шрифтом
    ctx.font = '50px Arial';
    ctx.fillStyle = '#ff0000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#ff0000';
    ctx.shadowBlur = 15;
    
    if (type === 'math') {
        // Разбиваем ребус на части для лучшего размещения
        const parts = rebus.split(' ');
        const spacing = 80; // Расстояние между элементами
        
        // Рисуем каждую часть отдельно
        parts.forEach((part, index) => {
            const x = canvas.width/2 + (index - 1) * spacing;
            ctx.fillText(part, x, canvas.height/2);
        });
    } else {
        // Для подсчета символов размещаем их с отступами
        const symbols = rebus.split('');
        const spacing = 60; // Расстояние между символами
        const totalWidth = (symbols.length - 1) * spacing;
        const startX = (canvas.width - totalWidth) / 2;
        
        symbols.forEach((symbol, index) => {
            ctx.fillText(symbol, startX + index * spacing, canvas.height/2);
        });
    }
    
    // Добавляем эффект свечения вокруг canvas
    canvas.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.5)';
    
    return answer.toString();
}

// Функция для проверки силы пароля
function checkPasswordStrength(password) {
    const hasChinese = /[\u4e00-\u9fa5]/.test(password);
    const hasLength = password.length >= 20;
    
    if (!hasChinese) {
        return 'Нужно минимум 3 иероглифа! 漢字';
    }
    if (!hasLength) {
        return 'Слишком короткий пароль! Нужно минимум 20 символов!';
    }
    
    return 'Пароль подходит (но это не точно)';
}

// Функция для показа уведомлений
function showNotification(title, message, type = 'info', duration = 3000) {
    // Проверяем/создаем контейнер для уведомлений
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.className = 'notification-container';
        document.body.appendChild(container);
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    notification.innerHTML = `
        <div class="notification-title">${title}</div>
        <div class="notification-message">${message}</div>
        <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    container.appendChild(notification);
    
    // Добавляем класс show после небольшой задержки для анимации
    requestAnimationFrame(() => {
        notification.classList.add('show');
    });
    
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
            if (notification.parentNode === container) {
                notification.remove();
            }
        }, 300);
    }, duration);
}

// Функция для создания плавающего мема
function createFloatingMeme() {
    console.log('Creating floating meme...'); // Отладка
    
    const memesContainer = document.getElementById('memes-container');
    if (!memesContainer) {
        console.error('Memes container not found!');
        return;
    }

    const meme = document.createElement('img');
    meme.className = 'floating-meme';
    const selectedMeme = getRandomUnusedMeme();
    console.log('Selected meme:', selectedMeme); // Отладка
    meme.src = selectedMeme;
    
    // Увеличенный случайный размер (от 100 до 300 пикселей)
    const size = 100 + Math.random() * 200;
    meme.style.width = size + 'px';
    
    // Случайное начальное положение
    const startPosition = Math.random() > 0.5 ? 'corner' : 'random';
    
    if (startPosition === 'corner') {
        // Начинаем из случайного угла
        meme.style.left = Math.random() > 0.5 ? '0' : (window.innerWidth - size) + 'px';
        meme.style.top = Math.random() > 0.5 ? '0' : (window.innerHeight - size) + 'px';
    } else {
        // Случайная позиция
        meme.style.left = Math.random() * (window.innerWidth - size) + 'px';
        meme.style.top = Math.random() * (window.innerHeight - size) + 'px';
    }
    
    // Выбираем случайный тип анимации
    const animationType = memeAnimationTypes[Math.floor(Math.random() * memeAnimationTypes.length)];
    
    // Применяем выбранную анимацию
    switch(animationType) {
        case 'float':
            meme.style.animation = `float ${5 + Math.random() * 10}s infinite ease-in-out`;
            break;
        case 'diagonal':
            meme.style.animation = `diagonal ${8 + Math.random() * 12}s infinite linear`;
            break;
        case 'corners':
            meme.style.animation = `corners ${10 + Math.random() * 15}s infinite ease-in-out`;
            break;
        case 'zigzag':
            meme.style.animation = `zigzag ${7 + Math.random() * 10}s infinite ease-in-out`;
            break;
        case 'spiral':
            meme.style.animation = `spiral ${12 + Math.random() * 18}s infinite linear`;
            break;
        case 'bounce':
            meme.style.animation = `bounce ${6 + Math.random() * 8}s infinite ease-in-out`;
            break;
    }
    
    // Добавляем вращение с 50% вероятностью
    if (Math.random() > 0.5) {
        meme.style.animation += `, rotate ${3 + Math.random() * 7}s infinite linear`;
    }
    
    // Обработка ошибок загрузки изображения
    meme.onerror = () => {
        console.error('Failed to load meme image:', meme.src);
        meme.remove();
    };
    
    // Добавляем мем только после загрузки изображения
    meme.onload = () => {
        console.log('Meme loaded successfully:', meme.src); // Отладка
        memesContainer.appendChild(meme);
        // Плавное появление
        requestAnimationFrame(() => {
            meme.style.opacity = '0.9'; // Увеличили прозрачность
        });
    };
    
    // Удаляем мем через случайное время и создаем новый
    const lifetime = 5000 + Math.random() * 10000; // от 5 до 15 секунд
    setTimeout(() => {
        if (meme.parentNode === memesContainer) {
            meme.style.opacity = '0';
            setTimeout(() => {
                meme.remove();
                // Создаем новый мем
                createFloatingMeme();
            }, 1000);
        }
    }, lifetime);
}

// Обновляем интервал создания мемов (каждую секунду)
setInterval(() => {
    const currentMemes = document.querySelectorAll('.floating-meme');
    if (currentMemes.length < 15) { // Увеличили максимальное количество мемов
        createFloatingMeme();
    }
}, 1000);

// Функция для применения эффектов хаоса
function applyChaosEffects() {
    const now = Date.now();
    if (now - lastChaosUpdate < chaosInterval) return;
    
    lastChaosUpdate = now;
    chaosLevel++;
    
    console.log('Chaos level increased to:', chaosLevel);
    
    // Увеличиваем пульс с каждым уровнем хаоса
    currentHeartRate = Math.min(maxHeartRate, baseHeartRate + (chaosLevel * 28));
    updateHeartbeat();
    
    const body = document.body;
    const container = document.querySelector('.container');
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('input, select, textarea');
    
    // Удаляем класс для танцующей формы
    form.classList.remove('form-dancing');
    
    switch(chaosLevel) {
        case 1: // Начальный уровень хаоса
            console.log('Initializing chaos level 1');
            // Фоновые эффекты
            body.style.animation = 'backgroundChange 5s infinite';
            container.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            container.style.backdropFilter = 'blur(5px)';
            break;
            
        case 2:
            // Случайное изменение цветов полей в такт
            setInterval(() => {
                inputs.forEach(input => {
                    if (Math.random() > 0.7) {
                        input.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 90%)`;
                    }
                });
            }, 1000);
            break;
            
        case 3:
            // Добавляем кислотные эффекты
            container.style.animation = 'acidBackground 3s infinite';
            break;
            
        case 4:
            // Добавляем страстные эффекты
            setInterval(() => {
                const hue = Math.random() * 60 + 300; // оттенки красного
                container.style.backgroundColor = `hsla(${hue}, 70%, 50%, 0.1)`;
            }, 500);
            break;
            
        case 5:
            // Добавляем экстремальные эффекты
            setInterval(() => {
                const effects = [
                    `rotate(${Math.random() * 10 - 5}deg)`,
                    `scale(${0.95 + Math.random() * 0.1})`,
                    `skew(${Math.random() * 4 - 2}deg)`
                ];
                inputs.forEach(input => {
                    input.style.transform = effects.join(' ');
                });
            }, 200);
            break;
    }
}

// Функция для создания сетки видеоплееров
function createVideoGrid() {
    // Создаем контейнер для видео, если его нет
    let videoContainer = document.getElementById('video-grid-container');
    if (!videoContainer) {
        videoContainer = document.createElement('div');
        videoContainer.id = 'video-grid-container';
        document.body.insertBefore(videoContainer, document.body.firstChild);
    }
    
    // Массив доступных видео
    const videos = ['vid1.mp4', 'vid2.mp4', 'vid3.mp4', 'vid4.mp4'];
    
    // Создаем 9 видеоплееров (сетка 3x3)
    for (let i = 0; i < 9; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'video-wrapper';
        
        // Создаем video элемент
        const video = document.createElement('video');
        // Случайно выбираем видео
        const randomVideo = videos[Math.floor(Math.random() * videos.length)];
        video.src = `img/${randomVideo}`;
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        
        // Добавляем обработку ошибок загрузки
        video.onerror = (e) => {
            console.error('Ошибка загрузки видео:', e);
            console.log('Путь к видео:', video.src);
            console.log('Код ошибки:', video.error.code);
            console.log('Сообщение об ошибке:', video.error.message);
            
            // Если видео не загрузилось, пробуем загрузить другое
            const otherVideo = video.src.includes('vid1.mp4') ? 'vid2.mp4' : 'vid1.mp4';
            console.log('Пробуем загрузить другое видео:', otherVideo);
            video.src = `img/${otherVideo}`;
        };
        
        // Добавляем логирование успешной загрузки
        video.onloadeddata = () => {
            console.log('Видео успешно загружено:', video.src);
            // Случайное время начала для каждого плеера
            const randomTime = Math.random() * video.duration;
            video.currentTime = randomTime;
        };
        
        wrapper.appendChild(video);
        videoContainer.appendChild(wrapper);
        
        // Добавляем случайные эффекты для каждого плеера
        const effects = [
            'blur(2px) brightness(1.2)',
            'sepia(0.5) hue-rotate(90deg)',
            'contrast(1.2) saturate(1.5)',
            'grayscale(0.7) brightness(1.3)',
            'invert(0.1) hue-rotate(-30deg)',
            'opacity(0.8) contrast(1.4)',
            'brightness(1.1) saturate(1.2)',
            'sepia(0.3) contrast(1.1)',
            'hue-rotate(45deg) brightness(1.2)'
        ];
        
        wrapper.style.filter = effects[i];
        
        // Добавляем случайную анимацию масштабирования
        const scaleAnimation = `videoScale ${5 + Math.random() * 5}s infinite alternate ease-in-out`;
        wrapper.style.animation = scaleAnimation;
        
        // Добавляем периодическую смену видео
        setInterval(() => {
            if (Math.random() > 0.7) { // 30% шанс смены видео
                const newVideo = videos[Math.floor(Math.random() * videos.length)];
                if (video.src !== `img/${newVideo}`) {
                    video.src = `img/${newVideo}`;
                    video.load();
                    video.play().catch(console.error);
                }
            }
        }, 5000 + Math.random() * 5000); // Проверка каждые 5-10 секунд
    }
}

// Добавляем анимацию масштабирования в стили
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes videoScale {
        0% { transform: scale(1); }
        100% { transform: scale(1.1); }
    }
`;
document.head.appendChild(styleSheet);

// Инициализация формы
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    
    const form = document.getElementById('registrationForm');
    const inputs = document.querySelectorAll('.moving-input');
    const submitBtn = document.getElementById('submitBtn');
    let currentCaptcha = generateCaptcha();
    
    // Создаем рекламу каждые 3 секунды (вместо 5)
    setInterval(createRandomAd, 3000);
    
    // Показываем случайные модалки
    setInterval(showRandomModal, 5000);
    
    // Добавляем кислотный фон для body
    document.body.style.animation = 'acidBodyBackground 10s infinite';
    
    // Массив анимаций для полей
    const inputAnimations = [
        'inputDance1 3s infinite',
        'inputDance2 4s infinite',
        'inputDance3 3.5s infinite',
        'inputDance4 4.5s infinite',
        'inputDance5 5s infinite'
    ];
    
    // Назначаем разные анимации для каждого поля
    inputs.forEach((input, index) => {
        input.classList.add('acid-input');
        
        // Добавляем задержку для каждого поля
        const delay = index * 0.5; // 0.5 секунды между началом анимации каждого поля
        input.style.animation = `${inputAnimations[index % inputAnimations.length]} ${delay}s`;
        
        // Добавляем пульсацию размеров с разной задержкой
        input.style.animation += `, widthPulse ${4 + index}s infinite ${delay}s`;
        input.style.animation += `, heightPulse ${3 + index}s infinite ${delay + 0.5}s`;
        
        // Добавляем кислотные эффекты с разной задержкой
        input.style.animation += `, acidBackground ${3 + index * 0.5}s infinite ${delay + 1}s`;
        
        // Случайные изменения для каждого поля
        setInterval(() => {
            if (Math.random() > 0.7) {
                const effects = [
                    () => {
                        input.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
                    },
                    () => {
                        input.style.width = `${80 + Math.random() * 100}%`;
                    },
                    () => {
                        input.style.height = `${30 + Math.random() * 40}px`;
                    },
                    () => {
                        input.style.filter = `hue-rotate(${Math.random() * 360}deg) brightness(${1 + Math.random()})`;
                    }
                ];
                
                effects[Math.floor(Math.random() * effects.length)]();
            }
        }, 1000 + index * 200); // Разное время для каждого поля
    });

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
    
    // Создаем контейнер для мемов, если его нет
    if (!document.getElementById('memes-container')) {
        console.log('Creating memes container'); // Отладка
        const memesContainer = document.createElement('div');
        memesContainer.id = 'memes-container';
        document.body.insertBefore(memesContainer, document.body.firstChild);
    }
    
    // Принудительно создаем несколько мемов для тестирования
    console.log('Creating initial test memes'); // Отладка
    for (let i = 0; i < 3; i++) {
        createFloatingMeme();
    }
    
    // Запускаем проверку уровня хаоса каждую секунду
    setInterval(applyChaosEffects, 1000);
    
    // Принудительно запускаем первый уровень хаоса через 2 секунды
    setTimeout(() => {
        console.log('Forcing chaos level 1'); // Отладка
        if (chaosLevel === 0) {
            applyChaosEffects();
        }
    }, 2000);
    
    // Остальные обработчики событий формы...
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formSubmissions++;
        
        const captchaInput = document.getElementById('captchaInput');
        if (captchaInput.value !== currentCaptcha) {
            captchaAttempts++;
            showNotification('Ошибка!', 'Неверный ответ! Попробуйте еще раз!', 'error');
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
    
    // Обновляем placeholder для поля ввода капчи
    const captchaInput = document.getElementById('captchaInput');
    if (captchaInput) {
        captchaInput.placeholder = 'Введите ответ цифрами';
    }

    // Создаем сетку видео при загрузке страницы
    createVideoGrid();

    // Создаем кринжометр
    createCringemeter();

    // Добавляем обработку кислотных эффектов для полей формы
    const formControls = document.querySelectorAll('.form-control');
    
    formControls.forEach(input => {
        // Обновляем случайные значения для поворота и искажения
        input.addEventListener('mousemove', () => {
            input.style.setProperty('--random-rotate', Math.random() * 20 - 10);
            input.style.setProperty('--random-skew', Math.random() * 10 - 5);
        });

        // Добавляем эффекты при вводе
        input.addEventListener('input', () => {
            const effects = [
                () => {
                    input.style.transform = `rotate(${Math.random() * 40 - 20}deg) scale(${0.9 + Math.random() * 0.3})`;
                },
                () => {
                    input.style.transform = `skew(${Math.random() * 20 - 10}deg, ${Math.random() * 20 - 10}deg)`;
                },
                () => {
                    input.style.transform = `perspective(100px) rotateX(${Math.random() * 20 - 10}deg)`;
                },
                () => {
                    input.style.filter = `hue-rotate(${Math.random() * 360}deg) brightness(${1 + Math.random()})`;
                }
            ];
            
            effects[Math.floor(Math.random() * effects.length)]();
        });

        // Добавляем случайное мерцание
        setInterval(() => {
            if (Math.random() > 0.7) {
                input.style.filter = `hue-rotate(${Math.random() * 360}deg) brightness(${1 + Math.random() * 0.5})`;
                input.style.transform = `rotate(${Math.random() * 10 - 5}deg) scale(${0.95 + Math.random() * 0.1})`;
            }
        }, 100 + Math.random() * 200);
    });

    // Создаем гирлянду
    createGarland();

    // Добавляем функцию для создания эффекта размытия курсора
    createCursorBlur();

    // Добавляем обновление капчи при клике
    const captchaCanvas = document.getElementById('captchaCanvas');
    if (captchaCanvas) {
        captchaCanvas.style.cursor = 'pointer';
        captchaCanvas.title = 'Нажмите для новой капчи';
        
        captchaCanvas.addEventListener('click', () => {
            // Добавляем эффект при клике
            captchaCanvas.style.transform = 'scale(0.95)';
            setTimeout(() => {
                captchaCanvas.style.transform = 'scale(1)';
            }, 100);
            
            // Обновляем капчу
            currentCaptcha = generateCaptcha();
            const captchaInput = document.getElementById('captchaInput');
            if (captchaInput) {
                captchaInput.value = '';
                captchaInput.focus();
            }
        });
    }
    
    // Стилизуем canvas
    if (captchaCanvas) {
        captchaCanvas.style.cssText = `
            border: 2px solid #ff0000;
            border-radius: 8px;
            transition: all 0.3s ease;
            margin-bottom: 10px;
        `;
    }
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

// Функция для создания кринжометра
function createCringemeter() {
    const cringemeter = document.createElement('div');
    cringemeter.className = 'cringemeter';
    
    const titleContainer = document.createElement('div');
    titleContainer.className = 'cringemeter-title';
    
    const title = document.createElement('div');
    title.className = 'title-text';
    title.textContent = 'КРИНЖОМЕТР';
    
    const subtitle = document.createElement('div');
    subtitle.className = 'subtitle-text';
    subtitle.textContent = 'Измеритель вашего душевного состояния';
    
    titleContainer.appendChild(title);
    titleContainer.appendChild(subtitle);
    
    const heartContainer = document.createElement('div');
    heartContainer.className = 'heart-container';
    
    const heartIcon = document.createElement('img');
    heartIcon.src = 'img/heart.png';
    heartIcon.className = 'heart-icon';
    
    const heartRate = document.createElement('div');
    heartRate.className = 'heart-rate';
    heartRate.textContent = `${currentHeartRate} BPM`;
    
    heartContainer.appendChild(heartIcon);
    heartContainer.appendChild(heartRate);
    
    cringemeter.appendChild(titleContainer);
    cringemeter.appendChild(heartContainer);
    document.body.appendChild(cringemeter);
    
    // Запускаем начальную анимацию сердцебиения
    updateHeartbeat();
}

// Обновляем функцию updateHeartbeat
function updateHeartbeat() {
    const heartIcon = document.querySelector('.heart-icon');
    const heartRate = document.querySelector('.heart-rate');
    const container = document.querySelector('.container');
    
    if (!heartIcon || !heartRate || !container) return;
    
    // Обновляем текст
    heartRate.textContent = `${currentHeartRate} BPM`;
    
    // Обновляем анимацию сердцебиения
    heartIcon.style.animation = `heartbeat ${60/currentHeartRate}s infinite`;
    
    // Определяем уровень BPM
    if (currentHeartRate >= 220) {
        // Очищаем все элементы
        clearAllElements();
        
        // Применяем финальный адский дизайн
        container.setAttribute('data-bpm-level', 'final');
        document.body.setAttribute('data-bpm-level', 'final');

        // Через 2 секунды показываем DEAD
        setTimeout(() => {
            const cringemeter = document.querySelector('.cringemeter');
            if (cringemeter) {
                cringemeter.innerHTML = '';
                
                const deadText = document.createElement('div');
                deadText.style.cssText = `
                    color: #ff0000 !important;
                    font-family: 'DuskDemon', cursive !important;
                    font-size: 120px !important;
                    font-weight: bold !important;
                    text-align: center !important;
                    text-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000 !important;
                    animation: pulseDead 2s infinite !important;
                    letter-spacing: 10px !important;
                `;
                deadText.textContent = 'DEAD';
                
                // Добавляем анимацию пульсации
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes pulseDead {
                        0% { transform: scale(1); text-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000; }
                        50% { transform: scale(1.1); text-shadow: 0 0 40px #ff0000, 0 0 80px #ff0000; }
                        100% { transform: scale(1); text-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000; }
                    }
                `;
                document.head.appendChild(style);
                
                cringemeter.appendChild(deadText);
            }
        }, 2000);
    } else if (currentHeartRate >= 200) {
        // Обычная логика для перехода
        const intensity = (currentHeartRate - 200) / 20;
        container.setAttribute('data-bpm-level', '5');
        document.body.setAttribute('data-bpm-level', '5');
        
        const hue = 0;
        const saturation = 100 + (1 - intensity) * 150;
        const lightness = 50 - intensity * 40;
        document.body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    } else {
        // Обычная логика для других уровней BPM
        let bpmLevel;
        if (currentHeartRate < 108) {
            bpmLevel = 1;
        } else if (currentHeartRate < 140) {
            bpmLevel = 2;
        } else if (currentHeartRate < 170) {
            bpmLevel = 3;
        } else {
            bpmLevel = 4;
        }
        container.setAttribute('data-bpm-level', bpmLevel);
        document.body.setAttribute('data-bpm-level', bpmLevel);
    }
}

// Функция создания демонической фразы
function createDemonicPhrase() {
    const phrase = demonicPhrases[Math.floor(Math.random() * demonicPhrases.length)];
    
    const phraseElement = document.createElement('div');
    phraseElement.className = 'demonic-phrase';
    
    const x = Math.random() * (window.innerWidth - 400);
    const y = Math.random() * (window.innerHeight - 100);
    
    phraseElement.style.cssText = `
        position: fixed !important;
        left: ${x}px !important;
        top: ${y}px !important;
        color: #ff0000 !important;
        font-family: 'DuskDemon', cursive !important;
        text-align: center !important;
        z-index: -1 !important;
        pointer-events: none !important;
        opacity: 0 !important;
        transition: opacity 0.5s ease-in-out !important;
        max-width: 400px !important;
    `;

    phraseElement.innerHTML = `
        <div class="latin" style="
            font-family: 'DuskDemon', cursive !important;
            font-size: 32px !important;
            margin-bottom: 5px !important;
            text-transform: uppercase !important;
            letter-spacing: 2px !important;
            text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000 !important;
        ">${phrase.lat}</div>
        <div class="russian" style="
            font-family: 'DuskDemon', cursive !important;
            font-size: 24px !important;
            opacity: 0.9 !important;
            letter-spacing: 1px !important;
            text-shadow: 0 0 5px #ff0000, 0 0 15px #ff0000 !important;
        ">${phrase.ru}</div>
    `;

    document.body.appendChild(phraseElement);

    // Плавное появление
    requestAnimationFrame(() => {
        phraseElement.style.opacity = '1';
    });

    // Создаем новую фразу через случайное время
    if (currentHeartRate >= 220) {
        setTimeout(createDemonicPhrase, 1000 + Math.random() * 2000);
    }
}

// Функция для создания гирлянды
function createGarland() {
    const container = document.querySelector('.container');
    
    // Создаем контейнеры для лампочек
    const garlandTop = document.createElement('div');
    garlandTop.className = 'garland-top';
    
    const garlandBottom = document.createElement('div');
    garlandBottom.className = 'garland-bottom';
    
    const garlandLeft = document.createElement('div');
    garlandLeft.className = 'garland-left';
    
    const garlandRight = document.createElement('div');
    garlandRight.className = 'garland-right';
    
    // Количество лампочек на каждой стороне
    const horizontalLights = 40; // Уменьшили в 2 раза (было 80)
    const verticalLights = 50;
    
    // Добавляем лампочки на верхнюю и нижнюю стороны
    for (let i = 0; i < horizontalLights; i++) {
        const topLight = document.createElement('div');
        topLight.className = 'garland-light';
        topLight.style.setProperty('--light-index', i);
        garlandTop.appendChild(topLight);
        
        const bottomLight = document.createElement('div');
        bottomLight.className = 'garland-light';
        bottomLight.style.setProperty('--light-index', horizontalLights - i - 1);
        garlandBottom.appendChild(bottomLight);
    }
    
    // Добавляем лампочки на левую и правую стороны
    for (let i = 0; i < verticalLights; i++) {
        const leftLight = document.createElement('div');
        leftLight.className = 'garland-light';
        leftLight.style.setProperty('--light-index', i + horizontalLights);
        garlandLeft.appendChild(leftLight);
        
        const rightLight = document.createElement('div');
        rightLight.className = 'garland-light';
        rightLight.style.setProperty('--light-index', horizontalLights + verticalLights - i - 1);
        garlandRight.appendChild(rightLight);
    }
    
    // Добавляем все элементы к контейнеру
    container.appendChild(garlandTop);
    container.appendChild(garlandBottom);
    container.appendChild(garlandLeft);
    container.appendChild(garlandRight);
}

// Добавляем функцию для создания эффекта размытия курсора
function createCursorBlur() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-blur';
    document.body.appendChild(cursor);
    
    let cursorTimeout;
    document.addEventListener('mousemove', (e) => {
        if (currentHeartRate >= 200) {
            cursor.style.left = e.pageX + 'px';
            cursor.style.top = e.pageY + 'px';
            cursor.style.display = 'block';
            
            clearTimeout(cursorTimeout);
            cursorTimeout = setTimeout(() => {
                cursor.style.display = 'none';
            }, 100);
        } else {
            cursor.style.display = 'none';
        }
    });
}

function clearAllElements() {
    // Удаляем все элементы
    ['#video-grid-container', '#memes-container', '#ads-container', '.floating-modal', '.modal', 
     '.garland-top', '.garland-bottom', '.garland-left', '.garland-right'].forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
    });

    // Очищаем все интервалы и таймауты
    const highestId = window.setTimeout(() => {}, 0);
    for (let i = highestId; i >= 0; i--) {
        window.clearInterval(i);
        window.clearTimeout(i);
    }

    // Обновляем стили для демонической формы
    styleSheet.textContent = `
        @font-face {
            font-family: 'DuskDemon';
            src: url('fonts/DuskDemon.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        .demonic-form {
            background: #000000 !important;
            border: 2px solid #ff0000 !important;
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.5) !important;
            padding: 20px !important;
            width: 600px !important;
            position: fixed !important;
            top: 20% !important;
            left: calc(50% - 320px) !important;
            margin: 0 !important;
            max-height: 70vh !important;
            overflow-y: auto !important;
            z-index: 1000 !important;
            transition: none !important;
            animation: none !important;
            box-sizing: border-box !important;
            transform: none !important;
            font-family: 'DuskDemon', cursive !important;
        }

        .demonic-form * {
            font-family: 'DuskDemon', cursive !important;
        }

        .demonic-form h1 {
            color: #ff0000 !important;
            font-size: 52px !important;
            text-align: center !important;
            margin: 0 0 15px 0 !important;
            padding: 0 !important;
            text-transform: uppercase !important;
            letter-spacing: 3px !important;
            line-height: 1 !important;
            text-shadow: 0 0 15px rgba(255, 0, 0, 0.7) !important;
        }

        .demonic-form label {
            color: #ff0000 !important;
            font-size: 28px !important;
            text-transform: uppercase !important;
            letter-spacing: 1px !important;
            margin-bottom: 2px !important;
            display: block !important;
        }

        .demonic-form .form-control {
            background: #000000 !important;
            color: #ff0000 !important;
            border: 1px solid #ff0000 !important;
            padding: 12px !important;
            margin-bottom: 4px !important;
            font-size: 24px !important;
            width: 100% !important;
            box-sizing: border-box !important;
            height: 50px !important;
        }

        .demonic-form button {
            background: #000000 !important;
            color: #ff0000 !important;
            border: 1px solid #ff0000 !important;
            padding: 12px !important;
            font-size: 32px !important;
            text-transform: uppercase !important;
            letter-spacing: 2px !important;
            cursor: pointer !important;
            margin-top: 15px !important;
            width: 100% !important;
            height: 60px !important;
        }

        .demonic-form .form-group {
            margin-bottom: 8px !important;
        }

        .demonic-form button:hover {
            background: #1a0000 !important;
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.7) !important;
            transform: scale(1.02) !important;
            transition: all 0.3s ease !important;
        }

        .demonic-form::-webkit-scrollbar {
            width: 8px !important;
        }

        .demonic-form::-webkit-scrollbar-track {
            background: #000000 !important;
            border: 1px solid #ff0000 !important;
        }

        .demonic-form::-webkit-scrollbar-thumb {
            background: #ff0000 !important;
            border-radius: 4px !important;
            border: 2px solid #000000 !important;
        }

        .demonic-form::-webkit-scrollbar-thumb:hover {
            background: #ff3333 !important;
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.5) !important;
        }
    `;
    document.head.appendChild(styleSheet);

    // Обновляем форму
    const container = document.querySelector('.container');
    if (container) {
        // Удаляем все существующие стили и классы
        container.className = 'demonic-form';
        
        // Принудительно применяем стили ко всем элементам
        const elements = container.querySelectorAll('*');
        elements.forEach(element => {
            element.style.setProperty('font-family', "'DuskDemon', cursive", 'important');
        });

        // Обновляем заголовок
        let title = container.querySelector('h1');
        if (!title) {
            title = document.createElement('h1');
            container.insertBefore(title, container.firstChild);
        }
        title.textContent = 'Регистрация в аду';
        title.style.setProperty('font-family', "'DuskDemon', cursive", 'important');

        // Обновляем placeholder'ы
        document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(input => {
            input.style.setProperty('::placeholder', 'color: rgba(255, 0, 0, 0.5)', 'important');
        });
    }
    
    // Запускаем создание демонических фраз
    createDemonicPhrase();
} 