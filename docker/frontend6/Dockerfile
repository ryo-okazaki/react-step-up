FROM node:18-alpine3.17

WORKDIR /app

COPY ./frontend6/package.json ./
COPY ./frontend6/package-lock.json ./

RUN npm install

EXPOSE 8085

CMD [ "npm", "run", "dev" ]