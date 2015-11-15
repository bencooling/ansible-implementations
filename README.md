# configuration management examples

Uses Ansible, Docker and Vagrant to setup application environments in containers or within full server operating systems.


## Examples

Application environments are either

1. A fully provisioned server  
2. Linux containers

### Docker

**docker-ngnix-node**  
- nginx handles static assets, reverse proxies non asset requests to node
- nginx & node containers linked with docker-compose.

**docker-wordpress**  
- Quickly setup a local Wordpress development environment
- mariadb, phpmyadmin & apache(with php & wordpress) containers linked with docker-compose.

**docker-node-gm**  
- node app with single route returning an image modified by graphicsmagick.
- node + graphicsmagick Docker image built using Ansible playbook


### Server

**server-docker**
- Ansible playbook to build a fully provisioned server running Docker

**server (Coming soon)**  
- Ansible playbook to provision server + deploy applications (Dockerised and monolithic)
- Sample node & wordpress app


## TODO

- [Add deployment ansible playbook, roles](https://developer.rackspace.com/blog/dev-to-deploy-with-docker-machine-and-compose/)
