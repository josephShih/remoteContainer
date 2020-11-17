FROM node:12

RUN apt-get update \
        && apt-get install --no-install-recommends --no-install-suggests -y nginx \
        && rm -rf /var/lib/apt/lists/*

COPY ./init/nginx/ /etc/nginx
WORKDIR /usr/src/app

EXPOSE 8899 80 443
CMD ["nginx", "-g", "daemon off;"]
