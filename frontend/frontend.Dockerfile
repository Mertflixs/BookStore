FROM node:16

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install -g npm@6

RUN npm install

COPY . .

EXPOSE 3000:3000

CMD ["npm", "start"]