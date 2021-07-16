FROM node:14.17.3-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm i
RUN npm run compile
