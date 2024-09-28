FROM node:22-alpine3.19

RUN mkdir home/node/app/ && chown -R node:node home/node/app

COPY Production/manual/dist home/node/app/dist

COPY Production/manual/package.json home/node/app/package.json

COPY Production/manual/.env.production home/node/app/.env.production

WORKDIR /home/node/app

RUN npm install --production

CMD [ "npm", "run", "start:prod"]