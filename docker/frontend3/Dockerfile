FROM node:18-alpine3.17

WORKDIR /app

COPY ./frontend3/package.json ./
COPY ./frontend3/package-lock.json ./

RUN npm install

EXPOSE 8082

CMD [ "npm", "run", "dev" ]