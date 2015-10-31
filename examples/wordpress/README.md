# wordpress

## commands

1. Replace `<local absolute path>` in docker-compose.yml with absolute path to local wordpress files
1. Run `docker-compose up -d`
1. docker exec -i db mysql -uroot -proot wordpress < latest.sql
1. docker exec -i wp chmod 777 /var/www/
