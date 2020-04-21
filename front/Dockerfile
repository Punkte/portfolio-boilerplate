# Build stage
FROM node:latest as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Deployment stage
FROM nginx

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY ./conf /etc/nginx/conf.d

WORKDIR /usr/share/nginx/html

COPY  --from=build /app/build  .

EXPOSE 80
