FROM node:lts-slim as development

LABEL name="ai-kit-ui"
LABEL version="3.0.20240308"
LABEL description="AI Kit UI"
LABEL author="Frank Villasenor"

ENV NODE_ENV=production
ENV NEXTAUTH_SECRET=DEVELOPMENT_SECRET
ENV NEXTAUTH_URL=http://localhost:3001

ENV API_URL=http://localhost:3000

ENV GOOGLE_CLIENT_ID=887064451860-ss7bdivntgf7vlp1j7pstgqui2f0aup4.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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


WORKDIR /usr/src/app
COPY . .

# Build the TypeScript project
RUN npm install
RUN npm run lint
RUN npm run build

CMD [ "npm", "run", "start" ]

FROM --platform=linux/amd64 node:lts-slim as production

LABEL name="ai-kit-ui"
LABEL version="3.0.20240308"
LABEL description="AI Kit UI"
LABEL author="Frank Villasenor"

ENV NODE_ENV=production
ENV NEXTAUTH_SECRET=DEVELOPMENT_SECRET
ENV NEXTAUTH_URL=http://localhost:3001

ENV API_URL=http://localhost:3000

ENV GOOGLE_CLIENT_ID=887064451860-ss7bdivntgf7vlp1j7pstgqui2f0aup4.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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


COPY --from=development /usr/src/app /usr/src/app
WORKDIR /usr/src/app

CMD [ "npm", "run", "start" ]