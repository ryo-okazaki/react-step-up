FROM node:18-alpine3.17

WORKDIR /app

COPY ./frontend7/package.json ./
COPY ./frontend7/package-lock.json ./

RUN npm install

EXPOSE 8086

CMD [ "npm", "run", "dev" ]