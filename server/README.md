# server

Setup a web server on:
- VM (Vagrant)
- VPS (Digital Ocean, AWS et al)

Monolithic app playbooks:  
- node (Node + NGINX)
- wordpress (Apache + PHP FPM + Wordpress + MariaDB + PHPmyAdmin)

To be used as a staging type server. For application development use host OS or Docker. No explicit shared folders, deploy from remote scm repo.


## install  

**install ansible roles**  
`cd ansible && ansible-galaxy install -r requirements.yml`

**install vm**  
`cd ../ && vagrant up`

**Deploy application!**  
`ansible-playbook ansible/node.yml -i ansible/hosts -e 'host_key_checking=False'`


## test security  

**SSH into server**  
`vagrant ssh server`

**Watch for the ban!**  
`sudo tail -f /var/log/fail2ban.log`

**SSH into attacker**  
`vagrant ssh attacker or ssh vagrant@attacker -i .vagrant/machines/attacker/virtualbox/private_key`

**Attack!**  
`ssh 192.168.22.81`


## simulate slow connections



## gotchas

**Host Key verification failure**  
If you get this message `fatal: [127.0.0.1] => SSH Error: Host key verification failed.`  
Remove entry from known_hosts with: `ssh-keygen -R [127.0.0.1]:2222`
