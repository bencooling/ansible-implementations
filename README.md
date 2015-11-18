# configuration management examples

Uses Ansible, Docker and Vagrant to setup applications in containers or directly on VPS/bare metal servers.


## docker

**docker-ngnix-node**  
- nginx handles static assets, reverse proxies non asset requests to node
- nginx & node containers linked with docker-compose.

**docker-wordpress**  
- Quickly setup a local Wordpress development environment
- mariadb, phpmyadmin & apache(with php & wordpress) containers linked with docker-compose.

**docker-node-gm**  
- node app with single route returning an image modified by graphicsmagick.
- node + graphicsmagick Docker image built using Ansible playbook


## server

**server-docker**  
- Ansible playbook to build a fully provisioned server running Docker

**server**  
- Ansible playbooks to provision server + git deployment of sample node app
- Server provisioning:
  - firewall
  - intrusion prevention
  - ssl
  - timezone
  - additional config for local VM:
    - limit traffic
    - vagrant issues
    - generate self signed ssl certs


## todo  
- Add wordpress app to server
- Add Mongo + RabbitMQ to node app in server
