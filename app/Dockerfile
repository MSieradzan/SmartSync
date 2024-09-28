FROM node:17

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ENV CHOKIDAR_USEPOLLING=true
ENV CHOKIDAR_INTERVAL=100

EXPOSE 3000

CMD ["npm", "start"]