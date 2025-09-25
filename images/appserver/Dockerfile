FROM oraclelinux:8.10

LABEL release="12.1.2410"
LABEL build="24.3.0.4"
LABEL description="TOTVS Aplication Server Protheus" 
LABEL maintainer="Israel Fernandes Silva <israel.silva@ascendra.com.br>"

WORKDIR /totvs

# Atualiza o sistema e instala utilitários necessários
RUN yum update -y && \
    yum install -y unzip curl && \
    yum clean all

# Criação dos diretórios necessários
RUN mkdir -p /totvs/appserver/ \
    /totvs/protheus/apo \
    /totvs/protheus/protheus_data/system \
    /totvs/protheus/protheus_data/systemload

RUN cd /totvs/protheus/protheus_data/systemload && \
    echo "Baixando helps.zip..." && \
    curl -o helps.zip "https://download.totvs.com/DownloadCentral/DownloadCentral?file=%2FFTPTOTVSPROTHEUS%2FPROTHEUS%2FP1212410%2FHELPDECAMPO%2FPERGUNTA%2FTODOS%2FMULTI%2F24-10-07-BRA-HELPS_COMPL_12_1_2410.ZIP&bro=true" && \
    echo "Descompactando helps.zip..." && \
    unzip -o helps.zip && \
    rm helps.zip  

RUN cd /totvs/protheus/protheus_data/systemload && \
    echo "Baixando dicionario.zip..." && \
    curl -o dicionario.zip "https://download.totvs.com/DownloadCentral/DownloadCentral?file=%2FFTPTOTVSPROTHEUS%2FPROTHEUS%2FP1212410%2FDICIONARIOSDEDADOS%2FTODOS%2FMULTI%2F24-10-07-BRA-DICIONARIOS_COMPL_12_1_2410.ZIP&bro=true" && \
    echo "Descompactando dicionario.zip..." && \
    unzip -o dicionario.zip && \
    rm dicionario.zip
    
RUN cd /totvs/protheus/protheus_data/system && \
    echo "Baixando menus.zip..." && \
    curl -o menus.zip "https://download.totvs.com/DownloadCentral/DownloadCentral?file=%2FFTPTOTVSPROTHEUS%2FPROTHEUS%2FP1212410%2FMENUDEMODULO%2FTODOS%2FMULTI%2F24-10-07-BRA-MENUS_12_1_2410.ZIP&bro=true" && \
    echo "Descompactando menus.zip..." && \
    unzip -o menus.zip && \
    rm menus.zip

RUN echo "Baixando apo..." && \
    cd /totvs/protheus/apo && \
    curl -o tttm120.rpo "https://download.totvs.com/DownloadCentral/DownloadCentral?file=%2FFTPTOTVSPROTHEUS%2FPROTHEUS%2FP1212410%2FREPOSITORIODEOBJETOS%2FTOPCONNECT%2F24-10-10-REPOSITORIO_DE_OBJETOS_BRASIL_12_1_2410_TTTM120.RPO&bro=true"

# Copia os arquivos da aplicação para o container
COPY appserver /totvs/appserver/

EXPOSE 8080 1234

CMD ["/totvs/appserver/appsrvlinux"]