FROM node:22-alpine3.19

RUN mkdir /home/node/app/ && chown -R node:node /home/node/app

WORKDIR /home/node/app
COPY ./Production/dist /home/node/app/dist
COPY ./Production/package.json /home/node/app/package.json
COPY ./Production/.env.production /home/node/app/.env.production

RUN npm install --production

CMD npm run start:prod
