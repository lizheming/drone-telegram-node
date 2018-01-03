FROM mhart/alpine-node:8.9.3

LABEL maintainer="lizheming <i@imnerd.org>" \
  org.label-schema.name="Drone Telegram Node" \
  org.label-schema.vendor="lizheming" \
  org.label-schema.schema-version="1.0"
  
WORKDIR /telegram-node
COPY package.json /telegram-node/package.json
RUN npm install

COPY src/ /telegram-node/src
ENTRYPOINT [ "node", "/telegram-node/src/index.js" ]
