const imagePath = '/images/services/services-icons/'
export const services = {
    engineering: {
        url: 'engineering',
        title: 'Проектирование',
        description: 'Проверка гипотез, CustDev, изучение спроса. Полная аналитика по предстоящему проекту и готовый CJM.',
        disabled: false,
        imagePreview: {
            path: imagePath + 'engineering.svg',
            styleCard: {
                width: '205px',
                height: '195px',
                top: '0',
                right: '38px'
            },
            stylePage: {
                width: '361px',
                height: '364.25px',
                right: '152px',
                top: '15px'
            }
        },
        clients: ['гринвей', 'тануки', 'пик', 'тодес', 'оптбанк', 'finwave'],
        color: '#F0A9A7',
        gradient: ' linear-gradient(264.77deg, #F0A9A7 6.09%, #F0CAA7 81.25%)',
        text: '<p class=\"p-small\" style=\"font-weight: 300\"> Нет плохих идей, есть недостаток информации. Мы проводим предпроектные исследования, чтобы ваш IT-продукт стал актуальным, классным и прибыльным.<br><br></p>' +
            '<p class=\"p-small\" style=\"margin-bottom: 40px; font-weight: 300\"> Мы разработали модель market-business-clients (MBC). Она позволяет проанализировать проект на его ранних стадиях и сократить time-to-market. Сочетание agile-практик на этапе погружения в бизнес-задачи заказчика позволяет детально изучить функционал будущего IT-продукта в трех направлениях: востребованность на рынке, анализ бизнес-эффекта и моделирование пользовательского опыта.<br><br></p>' +
            '<p class=\"p-small\" style=\"margin-bottom: 26px; font-weight: 300\">В результате:</p>' +
            '<p class=\"p-small\" style=\"font-weight: 300\">Всего через 2–4 дня наш клиент знает все о том, насколько эффективным будет проект, сколько усилий и инвестиций потребуется для его воплощения и даже<br>с какими предполагаемыми проблемами он может столкнуться.</p>'
    },
    frontend: {
        url: 'frontend',
        title: 'Web-разработка',
        description: 'Понятный и легкий frontend для пользователя, надежный и продуманный backend для стабильной работы продукта',
        imagePreview: {
            path: imagePath + 'web.svg',
            styleCard: {
                width: '212px',
                height: '215px',
                top: '25px',
                right: '25px'
            },
            stylePage: {
                width: '415px',
                height: '429.11px',
                top: '18px',
                right: '176px'
            }
        },
        disabled: false,
        color: '#C4DBFB',
        gradient: 'linear-gradient(264.21deg, #C4DBFB 25.12%, #E6C4FB 118.24%)'
    },
    design: {
        url: 'design',
        title: 'UX / UI дизайн',
        description: 'UX-стратегия, цифровой брендинг, продуктовый дизайн — от аналитики до анимации интерфейсов',
        imagePreview: {
            path: imagePath + 'design.svg',
            styleCard: {
                width: '184px',
                height: '224.01px',
                top: '-3px',
                right: '32px'
            },
            stylePage: {
                width: '431px',
                height: '430.99px',
                top: '-30px',
                right: '176px'
            }
        },
        disabled: false,
        color: '#FFD46B',
        gradient: 'linear-gradient(267.75deg, #FFD46B 14.04%, #E8F5D0 116.46%)'
    },
    mobile: {
        url: 'mobile',
        title: 'Mobile - <br>разработка',
        description: 'Полный комплекс мобильных технологий и инструментов для решения ваших бизнес-задач',
        imagePreview: {
            path: imagePath + 'mobile.svg',
            styleCard: {
                width: '239px',
                height: '170px',
                top: '12px',
                right: '20px'
            },
            stylePage: {
                width: '414px',
                height: '296.15px',
                top: '7px',
                right: '99px'
            }
        },
        disabled: false,
        color: '#D9FF8E',
        gradient: 'linear-gradient(269.43deg, #D9FF8E 2.79%, #FFFA8E 126.87%)'
    },
    branding: {
        url: 'branding',
        title: 'Брендинг <br>& коммуникация',
        description: 'Анализ рынка, стратегия бренда и его позиционирование, фирменный стиль и носители,<br>в системе интегрированных коммуникаций',
        imagePreview: {
            path: imagePath + 'branding.svg',
            styleCard: {
                width: '190px',
                height: '168px',
                top: '12px',
                right: '20px'
            }
        },
        disabled: true,
        color: '#BEEFFF',
        gradient: ''
    },
    digital: {
        url: 'digital',
        title: 'Digital-<br>стратегия',
        description: 'План продвижения бренда или продукта через онлайн-каналы и интеграция с различными digital-инструментами',
        imagePreview: {
            path: imagePath + 'digital.svg',
            styleCard: {
                width: '218px',
                height: '238.24px',
                top: '-10px',
                right: '10px'
            }
        },
        disabled: true,
        color: '#D0C8FF',
        gradient: ''
    }
}