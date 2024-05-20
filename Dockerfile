FROM --platform=linux/arm64/v8,linux/amd64 node:slim

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

CMD ["npm", "start"]