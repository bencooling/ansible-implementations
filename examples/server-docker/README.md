# server docker

Setup a server for docker to run in
- Vagrant VM
- Digital Ocean (Coming soon... just need to edit ansible/hosts)
- AWS (Coming soon... just need to edit ansible/hosts)


## install  


### vagrant

**install ansible roles**  
`cd ansible && ansible-galaxy install -r requirements.yml`

**install vm**  
`cd ../ && vagrant up`

**ssh into VM**  
`vagrant ssh`

**start with hello-world**  
`docker run hello-world`
