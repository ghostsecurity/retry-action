FROM alpine:3.15

RUN apk add --no-cache bash

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]