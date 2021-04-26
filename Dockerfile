FROM node:15-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

EXPOSE 80

COPY . .

CMD ["npm", "start"]