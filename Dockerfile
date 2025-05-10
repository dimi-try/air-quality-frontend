# 1. Используем официальный Node.js образ как базовый для сборки
FROM node:18-alpine AS build

# 2. Задаем рабочую директорию в контейнере
WORKDIR /app

# 3. Копируем package.json и package-lock.json в контейнер
COPY package*.json ./

# 4. Устанавливаем зависимости
RUN npm install

# 5. Копируем весь проект в контейнер
COPY . .

# 6. Задаём build-time аргументы (получаем из CI/CD)
ARG REACT_APP_BACKEND_URL
ARG REACT_APP_TELEGRAM_BOT_USERNAME

# 7. Устанавливаем переменные окружения (для use в build step)
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL
ENV REACT_APP_TELEGRAM_BOT_USERNAME=$REACT_APP_TELEGRAM_BOT_USERNAME

# 8. Собираем приложение, пробрасываем переменные окружения в build
RUN npm run build

# 9. Используем nginx образ для финального рантайма
FROM nginx:1.23-alpine

# 10. Копируем собранное приложение из предыдущего stage
COPY --from=build /app/build /usr/share/nginx/html

# 11. Копируем кастомную конфигурацию nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 12. Открываем порт
EXPOSE 80

# 13. Запускаем nginx в фореграунд режиме
CMD ["nginx", "-g", "daemon off;"]
