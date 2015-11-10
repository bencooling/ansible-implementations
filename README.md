# configuration management

Configuration management examples with Ansible, Docker or Vagrant.


## Examples


### Docker

**[ngnix-node](https://github.com/bencooling/cm/tree/master/examples/ngnix-node)**  
- nginx handles static assets, reverse proxies non asset requests to node
- nginx & node containers linked with docker-compose.

**[wordpress](https://github.com/bencooling/cm/tree/master/examples/wordpress)**  
- Quickly setup a local Wordpress development environment
- mariadb, phpmyadmin & apache(with php & wordpress) containers linked with docker-compose.


### Docker + Ansible

**[node-gm](https://github.com/bencooling/cm/tree/master/examples/node-gm)**  
- node app single route that returns an image modified by graphicsmagick.
- node + graphicsmagick image built using ansible playbook.


## TODO

- [Deployment example](https://developer.rackspace.com/blog/dev-to-deploy-with-docker-machine-and-compose/)
