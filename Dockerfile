FROM node:10.16.3
RUN mkdir -p /usr/src

RUN mkdir app

WORKDIR /app

ADD . /app

RUN yarn install

EXPOSE 8002
