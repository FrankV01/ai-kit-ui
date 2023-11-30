ARG PORT=3001
ARG TOPIC=debug

ARG API_KEY=bcrypt_hased_api_key_from_api_server__not_used_yet
ARG API_URL=http://localhost:3000/api/v1

ARG lblName="poems-ui"
ARG lblVersion="1.0.20232911"
ARG lblDescription="API for the Poems App"
ARG lblAuthor="Frank Villasenor"

FROM node:lts-slim as development

LABEL name=$lblName
LABEL version=$lblVersion
LABEL description=$lblDescription
LABEL author=$lblAuthor

ENV PORT=$PORT
EXPOSE 3001

ENV TOPIC=$TOPIC

ENV API_KEY=$API_KEY
ENV API_URL=$API_URL

WORKDIR /usr/src/app
COPY . .

# Build the TypeScript project
RUN npm install
RUN npm run build

CMD [ "npm", "run", "start" ]

FROM --platform=linux/amd64 node:lts-slim as production

LABEL name=$lblName
LABEL version=$lblVersion
LABEL description=$lblDescription
LABEL author=$lblAuthor

ENV PORT=$PORT
EXPOSE 3001

ENV TOPIC=$TOPIC

ENV API_KEY=$API_KEY
ENV API_URL=$API_URL

COPY --from=development /usr/src/app /usr/src/app
WORKDIR /usr/src/app

CMD [ "npm", "run", "start" ]