FROM bitnami/nginx:latest

ENV DIR_NGINX /opt/bitnami/nginx
ENV DIR_SERVER_BLOCKS ${DIR_NGINX}/conf/server_blocks
ENV DIR_LOCATION ${DIR_SERVER_BLOCKS}/locations
ENV DIR_HTML ${DIR_NGINX}/html

USER root
RUN apt-get update -y && \
    rm -rf ${DIR_HTML}/* && \
    mkdir -p ${DIR_LOCATION} && \
    chmod 775 -R ${DIR_SERVER_BLOCKS} && \
    chmod 775 -R ${DIR_LOCATION}

# setup entry point
COPY docker/entrypoint.sh /
RUN chmod +x /entrypoint.sh

COPY docker/locations/*.conf ${DIR_LOCATION}/
COPY docker/default.conf ${DIR_SERVER_BLOCKS}


# Copy applicaiton build
COPY build $DIR_HTML

# run
ENTRYPOINT ["/bin/bash", "/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

USER 1001