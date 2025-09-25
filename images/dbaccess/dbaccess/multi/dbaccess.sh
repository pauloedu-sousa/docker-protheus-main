#!/bin/bash

# Inicia serviço do dbAccess.
export LC_ALL=C
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:.

sed 's/{{DB_Name}}/'"${DB_Name:-"ascendra"}"'/g'         -i /totvs/dbaccess/multi/dbaccess.ini
sed 's/{{DB_User}}/'"${DB_User:-"ascendra"}"'/g'         -i /totvs/dbaccess/multi/dbaccess.ini
sed 's/{{DB_Password}}/'"${DB_Password:-"ascendra"}"'/g' -i /totvs/dbaccess/multi/dbaccess.ini

cd /totvs/dbaccess/multi/

./dbaccess64
