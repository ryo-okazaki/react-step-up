FROM node:18-alpine3.17

WORKDIR /app

COPY ./frontend4/package.json ./
COPY ./frontend4/package-lock.json ./

RUN npm install

EXPOSE 8083

CMD [ "npm", "run", "dev" ]