FROM golang:1.18.4-alpine3.16 as builder

WORKDIR /app

COPY . .

RUN cd ./src && CGO_ENABLED=0 go build -o ../backend  

FROM scratch


WORKDIR /app


COPY --from=builder /app/backend /backend


ENTRYPOINT [ "/backend" ]


