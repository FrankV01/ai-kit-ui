docker build . -t poems-ui:dev --target development #Add the environment vars here.
docker build . -t poems-ui:latest -t poems-ui:production --target production

docker tag poems-ui:dev registry.digitalocean.com/tosu/poems-ui:dev
docker tag poems-ui:latest registry.digitalocean.com/tosu/poems-ui:latest
docker tag poems-ui:latest registry.digitalocean.com/tosu/poems-ui:production
docker push --all-tags registry.digitalocean.com/tosu/poems-ui
