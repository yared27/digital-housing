FROM node:22.11.0 AS builder
WORKDIR /app

COPY package.json ./
RUN npm install -g npm
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]