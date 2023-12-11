FROM node:lts-slim as development

LABEL name="poems-ui"
LABEL version="1.6.20231211"
LABEL description="API for the Poems App"
LABEL author="Frank Villasenor"

ENV PORT=3001
EXPOSE 3001

ENV TOPIC=Debug

ENV API_KEY=bcrypt_hased_api_key_from_api_server__not_used_yet
ENV API_URL=http://localhost:3000

WORKDIR /usr/src/app
COPY . .

# Build the TypeScript project
RUN npm install
RUN npm run build

CMD [ "npm", "run", "start" ]

FROM --platform=linux/amd64 node:lts-slim as production

LABEL name="poems-ui"
LABEL version="1.2.20231201"
LABEL description="API for the Poems App"
LABEL author="Frank Villasenor"

ENV PORT=3001
EXPOSE 3001

ENV TOPIC=Debug

ENV API_KEY=bcrypt_hased_api_key_from_api_server__not_used_yet
ENV API_URL=http://localhost:3000

COPY --from=development /usr/src/app /usr/src/app
WORKDIR /usr/src/app

CMD [ "npm", "run", "start" ]