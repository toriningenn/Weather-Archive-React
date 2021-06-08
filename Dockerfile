FROM node:12 AS build
WORKDIR /weatherinmoscowreact
COPY package* yarn.lock ./
RUN yarn install
COPY public ./public
COPY src ./src
RUN yarn run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /weatherinmoscowreact/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]