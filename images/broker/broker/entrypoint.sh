#!/usr/bin/env bash

set -e

sed -i 's/{{BROKER_SERVER_PORT}}/'"${BROKER_SERVER_PORT}"'/g' /totvs/broker/appsrvlinux.ini 
sed -i 's/{{REMOTE_SERVER_01_HOST}}/'"${REMOTE_SERVER_01_HOST}"'/g' /totvs/broker/appsrvlinux.ini 
sed -i 's/{{REMOTE_SERVER_01_PORT}}/'"${REMOTE_SERVER_01_PORT}"'/g' /totvs/broker/appsrvlinux.ini 
sed -i 's/{{REMOTE_SERVER_02_HOST}}/'"${REMOTE_SERVER_02_HOST}"'/g' /totvs/broker/appsrvlinux.ini 
sed -i 's/{{REMOTE_SERVER_02_PORT}}/'"${REMOTE_SERVER_02_PORT}"'/g' /totvs/broker/appsrvlinux.ini 

./appsrvlinux -balance_http
