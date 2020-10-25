# test

test app

## Deploy

- Clone project
```
git clone https://github.com/ibrahimmd/zd.git
```

- Switch directory
```
cd zd
```

- Build docker image
```
make docker-build
```

- Start docker containers using `docker-compose`
```
make start-app
```

- Stop docker containers
```
make stop-app
```

- View nginx logs
```
make nginx-logs
```

## Test app
- Set user
```
curl -sv 'http://localhost:8080/set?username=johnd&name=john&lastname=doe'
```

- Query user
```
curl -sv 'http://localhost:8080/get?username=johnd'
```

## Unit testing
 For unit testing, `docker-compose.test.yml` is used to startup only the mysql db and node is started up on local node. nginx is not used.

 - Clear temporary docker data
 ```
sudo rm -rf docker-data
 ```

 - Start db
 ```
docker-compose -f docker-compose.test.yml up
 ```

 - Start node
 ```
cd src ; npm install; npm run teststart
 ```

 - Start test
 ```
cd src; npm test
 ```

- Stop db
 ```
docker-compose -f docker-compose.test.yml down
 ```

## TODO

- Use Ansible for config management
- Use certbot for SSL certs (valid domain name required)

