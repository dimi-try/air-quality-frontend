# Информационная система "Мониторинг качества воздуха"

💻 Languages and Tools : ![Технологии](https://skillicons.dev/icons?i=js,html,css,react)
Deploy status: [![Netlify Status](https://api.netlify.com/api/v1/badges/a7085ba0-5dcb-481c-ac9c-2c8e2b4447fd/deploy-status)](https://app.netlify.com/sites/stylua/deploys)

## Струтктура проекта
```
weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   └── Footer/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Map/
│   │   ├── Forecast/
│   │   ├── Notifications/
│   │   └── SafeLevels/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   ├── config.js
│   ├── index.js
├── package.json
└── README.md
```

## Описание проекта

Air Quality App - онлайн-сервис, где пользователи могут посмотреть текущее состояние воздуха в своем городе, прогноз загрязнений воздуха, узнать допустимые и не допустимые нормы загрязнений, а так же подписаться на рассылку, которая оповещает пользователя о будущих загрязнениях.

## Инструкции

На данный момент сервис обращается к API бекенда, расположенного на stylua.ru
Исходный код бекенда можно найти [здесь](https://github.com/nuafirytiasewo/air-pollution-backend)

Уведомления пользователям реализованы через бота в Telegram.
Установить редирект на своего бота, а так-же другие настройки можно поменять в `config.js`

## Запуск проекта
1. Склонируйте репозиторий
2. Установите все зависимости
3. Запустите проект командой `npm start`
