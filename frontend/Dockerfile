FROM node:12-alpine
WORKDIR /app

ARG REACT_APP_HOST_IP_ADDRESS

ENV REACT_APP_HOST_IP_ADDRESS $REACT_APP_HOST_IP_ADDRESS

COPY package.json /app/package.json
RUN npm install --only=prod
COPY ./public /app/public
COPY ./src /app/src
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]