#!/usr/bin/bash

docker run -d --name saladadev-db -v /percona/work/testing/docker_local:/data/db \
       -e MONGO_INITDB_ROOT_USERNAME=saladadev \
       -e MONGO_INITDB_ROOT_PASSWORD="OHm7cERiAUTtrnR+lyGC1U5aGdw=" \
       -p 0.0.0.0:27017:27017 \
       percona/percona-server-mongodb:latest --replSet=rs0 --keyFile=/data/db/bunda
