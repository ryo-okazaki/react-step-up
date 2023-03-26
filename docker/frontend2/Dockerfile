FROM node:18-alpine3.17

WORKDIR /app

COPY ./frontend2/package.json ./
COPY ./frontend2/package-lock.json ./

RUN npm install

EXPOSE 8081

CMD [ "npm", "run", "dev" ]