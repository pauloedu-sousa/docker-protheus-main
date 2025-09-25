FROM oraclelinux:9

LABEL build="24.1.0.2"
LABEL description="TOTVS Dbaccess" 
LABEL maintainer="Israel Fernandes Silva <israel.silva@ascendra.com.br>"

RUN dnf -y update && \
    ACCEPT_EULA=Y dnf install -y unixODBC postgresql-odbc && \
    dnf clean all && rm -rf /var/cache/yum

WORKDIR /totvs/dbaccess

COPY dbaccess /totvs/dbaccess/

RUN chmod +x /totvs/dbaccess/multi/dbaccess.sh

EXPOSE 7890

CMD ["/totvs/dbaccess/multi/dbaccess.sh"]