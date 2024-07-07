FROM node:20.15.0 AS Development

RUN npm install -g nodemon

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 5000

CMD ["npm", "run", "dev"]