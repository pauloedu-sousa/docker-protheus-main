FROM oraclelinux:9

LABEL build="24.3.0.4"
LABEL description="TOTVS Broker" 
LABEL maintainer="Israel Fernandes Silva <israel.silva@ascendra.com.br>"

WORKDIR /totvs/broker

RUN yum update -y && \
    yum clean all

RUN mkdir -p /totvs/broker/ 

COPY broker /totvs/broker/

RUN chmod +x entrypoint.sh

ENV BROKER_SERVER_PORT=8000
ENV REMOTE_SERVER_01_HOST=appserver
ENV REMOTE_SERVER_01_PORT=8181
ENV REMOTE_SERVER_02_HOST=appserver2
ENV REMOTE_SERVER_02_PORT=8282

EXPOSE 8000

CMD ["./entrypoint.sh"]