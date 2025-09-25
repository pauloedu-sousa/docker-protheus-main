-- Criação do usuário ascendra
CREATE USER ascendra WITH LOGIN NOSUPERUSER INHERIT CREATEDB NOCREATEROLE NOREPLICATION CONNECTION LIMIT -1 PASSWORD 'ascendra';

-- Criação dos tablespaces
CREATE TABLESPACE ascendra_data OWNER ascendra LOCATION '/postgres/pgdata/ascendra/data';
CREATE TABLESPACE ascendra_index OWNER ascendra LOCATION '/postgres/pgdata/ascendra/index';

-- Criação do banco de dados utilizando o tablespace criado
CREATE DATABASE ascendra WITH OWNER = ascendra TEMPLATE = template0 ENCODING = 'WIN1252' LC_COLLATE = 'C' LC_CTYPE = 'C' TABLESPACE = ascendra_data CONNECTION LIMIT = -1;

