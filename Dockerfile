FROM nginx:1.10

RUN mkdir /app
ADD ./src/app/build /app

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /app
