FROM node:lts-slim as development

LABEL name="poems-ui"
LABEL version="1.49.20240103"
LABEL description="API for the Poems App"
LABEL author="Frank Villasenor"

ENV PORT=3001
EXPOSE 3001

ENV TOPIC=Debug

ENV API_KEY=bcrypt_hased_api_key_from_api_server__not_used_yet
ENV API_URL=http://localhost:3000

ENV NEXT_PUBLIC_GA_MEASUREMENT_ID=g-xxxxxxx
ENV GOOGLE_CLIENT_ID=887064451860-ss7bdivntgf7vlp1j7pstgqui2f0aup4.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=SET--THIS
ENV NEXTAUTH_SECRET=DEVELOPMENT_SECRET


ENV NEXTAUTH_URL=http://localhost:3001

WORKDIR /usr/src/app
COPY . .

# Build the TypeScript project
RUN npm install
RUN npm run lint
RUN npm run build

CMD [ "npm", "run", "start" ]

FROM --platform=linux/amd64 node:lts-slim as production

LABEL name="poems-ui"
LABEL version="1.49.20240103"
LABEL description="API for the Poems App"
LABEL author="Frank Villasenor"

ENV PORT=3001
EXPOSE 3001

ENV TOPIC=Production

ENV API_KEY=bcrypt_hased_api_key_from_api_server__not_used_yet
ENV API_URL=https://poems.theopensourceu.org

ENV NEXT_PUBLIC_GA_MEASUREMENT_ID=G-BWCTMTSQR4

ENV GOOGLE_CLIENT_ID=887064451860-r1fak9nplopl5cqteo946k1ihk3e5ph1.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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

ENV NEXTAUTH_SECRET=HDAwavDaVM2mtdEQ7NAXFH98Kio2dGKKBsWNnHnuAGHQTeVAemtar86gwLRAHCCbDe7qivE2zj39AfrYu4NMesFEFEcpg2CqjFmv


COPY --from=development /usr/src/app /usr/src/app
WORKDIR /usr/src/app

CMD [ "npm", "run", "start" ]