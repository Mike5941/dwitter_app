FROM --platform=linux/arm64 node:alpine

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

CMD ["npm", "start"]