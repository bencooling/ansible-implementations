# nginx-node

2 containers:
1. nginx (reverse proxy for node + static asset server with cors enabled)
2. node


## Installation

**1. Run containers**  
`docker-compose up -d`

**1. View in website**  
`http://<docker-machine IP address>:5001`


## Test cors

**Install http-server globally if not available already**  
`npm install http-server -g`

**Run the font-demo locally**  
`http-server ./font-demo -p 5002`

**View font files delivered container with cors**  
`localhost:5002`
