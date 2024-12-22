FROM node:22-alpine3.19

RUN mkdir home/node/app/ && chown -R node:node home/node/app

COPY ./Production/dist home/node/app/dist

COPY ./package.json home/node/app/package.json

COPY ./Production/.env home/node/app/.env

COPY ./estatics home/node/app/estatics

WORKDIR /home/node/app

RUN npm install --production

CMD [ "npm", "run", "start:prod" ]