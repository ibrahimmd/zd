.RECIPEPREFIX +=


docker-build:
 @echo building docker image
 cd src ; \
 docker build -t ibrahim/app:0.1 .

start-app:
 docker-compose up --remove-orphans -d

stop-app:
 docker-compose down

nginx-logs:
 cat docker-data/nginx/var/log/nginx/access.log

clean-docker-data:
 sudo rm -rf docker-data


test-start:
 docker-compose -f docker-compose.test.yml