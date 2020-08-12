docker network create webproxy

docker network create kong_network

docker-compose -f kong.yml up -d