FROM node:22-alpine3.19

RUN mkdir home/node/app/ && chown -R node:node home/node/app

COPY package.json home/node/app/package.json

COPY .env.development home/node/app/.env.development

WORKDIR /home/node/app

RUN npm install

CMD [ "npm", "run", "start:dev"]