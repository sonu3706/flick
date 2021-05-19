FROM node:12.22.1-alpine3.10

RUN mkdir -p /flick-ui/dist/flick

WORKDIR /flick-ui

COPY package*.json ./

RUN npm install

COPY ./dist/flick ./dist/flick/

EXPOSE 4200

ENTRYPOINT ["npm", "start"]