# wordpress

**Environment:** MariaDB, Wordpress + phpmyadmin linked containers from DockerHub images.  
**App:** If you do no mount a volume with a local install, the Wordpress container will copy a fresh install for you.

## commands

**1. Configure docker-compose.yml**  
Replace `<local absolute path>` in `docker-compose.yml` with absolute path to local wordpress files

**1. Build containers**  
Run `docker-compose up -d`

**1. Fix Apache 403 Error**  
- Try either generous perms:
`docker exec -i wp chmod 777 /var/www/`
- or modifying user from 1000 to www-data
`usermod -u 1000 www-data && apachectl restart`

**1. (Optional) import existing data into mysql**  
`docker exec -i db mysql -uroot -proot wordpress < latest.sql`
