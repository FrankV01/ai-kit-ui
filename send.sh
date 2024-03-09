docker build . -t ai-kit-ui:dev --target development #Add the environment vars here.
docker build . -t ai-kit-ui:latest -t ai-kit-ui:production --target production

docker tag ai-kit-ui:dev registry.digitalocean.com/tosu/ai-kit-ui:dev
docker tag ai-kit-ui:latest registry.digitalocean.com/tosu/ai-kit-ui:latest
docker tag ai-kit-ui:latest registry.digitalocean.com/tosu/ai-kit-ui:production
docker push --all-tags registry.digitalocean.com/tosu/ai-kit-ui


## doctl registry login