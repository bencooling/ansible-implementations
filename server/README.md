# server

Setup a web server on:
- Vagrant VM
- Digital Ocean

Monolithic application playbooks:
- node (Node + NGINX + Mongo + RabbitMQ)
- wordpress (Apache + PHP FPM + Wordpress + MariaDB + PHPmyAdmin)

To be used as a staging type server, not for application development
  - use host OS or Docker
  - No shared folders, deploy from remote scm repo


## install  

**install ansible roles**  
`cd ansible && ansible-galaxy install -r requirements.yml`

**install vm**  
`cd ../ && vagrant up`

**Deploy application!**  
`ansible-playbook ansible/deploy.yml -i ansible/hosts -e 'host_key_checking=False'`

**View deployed web app**  
`http://192.168.22.81`


## gotchas

**Host Key verification failure**  
If you get this message `fatal: [127.0.0.1] => SSH Error: Host key verification failed.`  
Remove entry from known_hosts with: `ssh-keygen -R [127.0.0.1]:2222`


## todo
- finish porting node tls & RabbitMQ and MongoDB
