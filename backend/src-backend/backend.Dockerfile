FROM node:16

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install -g npm@6

RUN npm install

RUN npm rebuild bcrypt 

COPY . .

EXPOSE 3001

CMD ["npm", "start"]