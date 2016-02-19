FROM nginx
MAINTAINER Ben Cooling <office@bcooling.com.au>
ADD etc/ /etc
EXPOSE 80 443
CMD [ "sh", "-c", "envsubst '$PROXY_HOST $PROXY_PORT' < /etc/nginx/nginx.tpl.conf > /etc/nginx/nginx.conf && nginx -g 'daemon off;'" ]
