FROM golang:1.19.4-alpine3.17

RUN apk add --no-cache --update bash make gcc

COPY entrypoint.sh /entrypoint.sh

ENV CGO_ENABLED=0

ENTRYPOINT ["/entrypoint.sh"]