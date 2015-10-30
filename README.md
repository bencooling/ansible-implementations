# ansible-implementations

Playbooks for common environments with example applications.


## examples

### node-gm

**Node + graphicsmagick**  
- Simple Node application that return a graphicsmagick modified image as a HTTP response
- Run from a Docker container


## Gotchas
- Issue with url_get module not finding service [Containers cannot resolve DNS if docker host uses 127.0.0.1 as resolver](https://github.com/docker/docker/issues/541). Seems to be an issue when changing wireless to wired networks. Run this to solve the issue:
`docker-machine default restart`
