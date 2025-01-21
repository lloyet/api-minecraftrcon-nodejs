FROM node:22.13.0-alpine3.21 AS build

WORKDIR /usr/src/app

COPY ./package.json ./package-lock.json /usr/src/app/

RUN npm ci

COPY . .

RUN npm run build

FROM node:22.13.0-alpine3.21

WORKDIR /app

COPY --from=build /usr/src/app/node_modules /app/node_modules
COPY --from=build /usr/src/app/build /app

ENTRYPOINT ["node", "--unhandled-rejections=strict", "index.js"]
