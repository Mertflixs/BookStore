#postgreSQL resmi imaj
FROM postgres:latest

#ortam degiskenleri ayarlandi
ENV POSTGRES_USER='postgres'
ENV POSTGRES_PASSWORD='123'
ENV POSTGRES_DB='book'

#calisma konumu
VOLUME /var/lib/postgresql/data