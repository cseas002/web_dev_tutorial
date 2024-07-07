FROM node:20.15.0 AS Development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD ["npm", "run", "start"]