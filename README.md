# Информационная система "Мониторинг качества воздуха"

Air Quality App - приложение, где пользователи могут посмотреть текущее состояние воздуха в своем городе, прогноз загрязнений воздуха, узнать допустимые и не допустимые нормы загрязнений, а так же подписаться на рассылку, которая оповещает пользователя о будущих загрязнениях. Данные берутся из OpenWeather. Это учебный проект.

## 🛠 Используемые технологии
[![Technologies](https://skillicons.dev/icons?i=js,html,css,react)](https://skillicons.dev)

## Струтктура проекта
```
air-quality-frontend/
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
---

## 🔧 Установка проекта  

### 📋 Настройка .env
Скопируйте `.env.sample`, переименуйте в `.env` и добавьте свои данные.

Укажите свои значения переменных в `.env`.  

### 📥 Установка зависимостей  
```sh
npm install
```
## 🚀 Запуск проекта

```sh
npm start
```

Приложение будет доступно по адресу:  
📍 `http://localhost:3000`

---

## 🌍 Деплой

Доступны два способа:

### Вариант 1: Docker Compose вручную

1.  Проверьте `docker-compose.yml`
    
2.  Выполните сборку и пуш:
    

```sh
docker compose build
```
```sh
docker compose up -d
```
```sh
docker push <your-dockerhub>
```

### Вариант 2: Автоматически через GitHub Actions

1.  В файле `.github/workflows/docker-deploy.yml` уже всё готово
    
2.  При пуше в `main` ветку произойдёт автоматическая сборка и публикация образа в DockerHub
    

На прод-сервере можете использовать `docker-compose-server.yml` из [репозитория backend](https://github.com/dimi-try/air-quality-backend). Скопируйте `.env.example`, переименуйте в `.env` и добавьте свои данные.

---

## 🔧 Полезные команды  

##### 📌 Установка зависимостей  
```sh
npm install
```
##### 🚀 Запуск в продакшене  
```sh
npm run build
```
##### 🔄 Линтинг кода  
```sh
npm run lint
```
##### 🧹 Очистка кэша  
```sh
npm cache clean --force
```
##### 🗑 Очистка node_modules  
```sh
Get-ChildItem -Path . -Recurse -Directory -Filter "node_modules" | Remove-Item -Recurse -Force #windows
```

---

## 💡 Обратная связь  

Если у вас есть предложения или вопросы, создавайте **issue** в репозитории! 🚀
