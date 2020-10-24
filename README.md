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

## TODO

- Use Ansible for config management
- Use certbot for SSL certs (valid domain name required)
- Unit testing
