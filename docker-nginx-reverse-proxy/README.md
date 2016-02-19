# docker-ngnix-reverse-proxy  
Stand alone reverse proxy with http(s) support and environment variables for nginx configuration.  
Useful for https + localhost  

## Installation  

**Get osx ip address**  
Ignoring 127.0.0.1, IP address will be between ‘inet’ and ‘netmask’  
`ifconfig |grep inet`

**Get docker vm ip address**  
```
docker-machine ip default
> 192.168.99.100
```

**add docker vm to hosts file**  
```
vim /etc/hosts
192.168.99.100 local
```

**generate self-signed certificate**  
```
openssl req \
  -new \
  -newkey rsa:4096 \
  -days 365 \
  -nodes \
  -x509 \
  -subj "/C=AU/ST=Queensland/L=Brisbane/O=Dev/CN=local" \
  -keyout etc/nginx/ssl/local.key \
  -out etc/nginx/ssl/local.cert
```

**Build image**  
`docker build -t nginx .`

**Run container**  
`docker run -d -p 8443:443 -e PROXY_HOST=192.168.99.1 -e PROXY_PORT=5000 nginx`

**View reverse proxy in browser**  
`https://local:8433`


## Virtualhosts  
Add volumes for sites-available


## Resources  
- [nginx](https://hub.docker.com/_/nginx/)
- [OpenSSL without prompt](http://superuser.com/a/226229)
- [Ansible role automate SSL cert](bencooling/ansible-role-deploy)


## TODO  
- Update docker-ngnix-node with this implementation
- Automate the generate self signed certificate with env variables?
