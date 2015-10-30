# node-gm

Environment: Docker image with both Node + GraphicsMagick running.
App: Node app returning a GraphicsMagick modified image as a HTTP response


## commands  

### configure environment

**1. install ansible roles**  
`ansible-galaxy install bencooling.node`

**2. Build Docker image with Node & GraphicsMagick**  
`docker build -t node-gm .`

### configure application

**install application dependencies**  
`cd app && npm install`

**run container, mount application as volume**  
```
docker run -d \
-v $(pwd):/var/www \
-p 3000:3000 \
node node-gm /var/www/server.js
```

## todo

- Figure out the role installation issue
