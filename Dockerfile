FROM ubuntu:22.04
RUN apt update && apt install -y nodejs && apt install -y npm
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
EXPOSE 3000
CMD node -v && node ./server.js