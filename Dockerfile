FROM golang:1.19.4-alpine3.17

RUN apk add --no-cache --update bash make

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]