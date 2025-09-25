FROM postgres:15

RUN mkdir -p /postgres/pgdata/ascendra/data /postgres/pgdata/ascendra/index \
    && chown -R postgres:postgres /postgres/pgdata/ascendra

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
