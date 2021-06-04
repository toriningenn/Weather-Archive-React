FROM node:12 AS build
WORKDIR /weatherinmoscowreact
COPY package* yarn.lock ./
RUN yarn install
COPY public ./public
COPY src ./src
RUN yarn run build

FROM nginx:alpine
COPY --from=build /weatherinmoscowreact/build /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]
