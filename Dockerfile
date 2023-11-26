#
# [Push images to Docker CLI](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/#push-to-your-registry)
#
FROM node:lts-alpine as build-stage

ENV NODE_ENV=production
ENV TOPIC="Docker's"

WORKDIR /usr/share/poems-ui
COPY . /usr/share/poems-ui
RUN npm run clean
RUN npm install
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /usr/share/poems-ui/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]