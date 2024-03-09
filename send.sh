#docker build . -t ai-platform-ui:dev --target development #Add the environment vars here.
#docker build . -t ai-platform-ui:latest -t ai-platform-ui:production --target production
#
#docker tag ai-platform-ui:dev registry.digitalocean.com/tosu/ai-platform-ui:dev
#docker tag ai-platform-ui:latest registry.digitalocean.com/tosu/ai-platform-ui:latest
#docker tag ai-platform-ui:latest registry.digitalocean.com/tosu/ai-platform-ui:production
#docker push --all-tags registry.digitalocean.com/tosu/ai-platform-ui


docker build . -t poems-ui:dev --target development #Add the environment vars here.
docker build . -t poems-ui:latest -t poems-ui:production --target production

docker tag poems-ui:dev registry.digitalocean.com/tosu/poems-ui:dev
docker tag poems-ui:latest registry.digitalocean.com/tosu/poems-ui:latest
docker tag poems-ui:latest registry.digitalocean.com/tosu/poems-ui:production
docker push --all-tags registry.digitalocean.com/tosu/poems-ui

## doctl registry login