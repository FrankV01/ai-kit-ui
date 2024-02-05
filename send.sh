docker build . -t ai-platform-ui:dev --target development #Add the environment vars here.
docker build . -t ai-platform-ui:latest -t ai-platform-ui:production --target production

docker tag ai-platform-ui:dev registry.digitalocean.com/tosu/ai-platform-ui:dev
docker tag ai-platform-ui:latest registry.digitalocean.com/tosu/ai-platform-ui:latest
docker tag ai-platform-ui:latest registry.digitalocean.com/tosu/ai-platform-ui:production
docker push --all-tags registry.digitalocean.com/tosu/ai-platform-ui
