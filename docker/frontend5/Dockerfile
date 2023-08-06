FROM node:18-alpine3.17

WORKDIR /app

COPY ./frontend5/package.json ./
COPY ./frontend5/package-lock.json ./

RUN npm install

EXPOSE 8084

CMD [ "npm", "run", "dev" ]