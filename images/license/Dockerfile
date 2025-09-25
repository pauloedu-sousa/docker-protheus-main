FROM oraclelinux:9-slim

LABEL build="3.6.3_1"
LABEL description="TOTVS license" 
LABEL maintainer="Israel Fernandes Silva <israel.silva@ascendra.com.br>"

WORKDIR /totvs

COPY totvslicense /totvs

EXPOSE 5555

CMD ["/totvs/license/bin/appserver/appsrvlinux"]