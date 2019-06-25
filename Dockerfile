FROM php:7.3-fpm

RUN apt-get update

RUN apt-get install vim -y && \
    apt-get install openssl -y && \
    apt-get install libssl-dev -y && \
    apt-get install wget -y

RUN cd /tmp && wget https://pecl.php.net/get/swoole-4.3.4.tgz && \
    tar zxvf swoole-4.3.4.tgz && \
    cd swoole-4.3.4  && \
    phpize  && \
    ./configure  --enable-openssl && \
    make && make install

RUN touch /usr/local/etc/php/conf.d/swoole.ini && \
    echo 'extension=swoole.so' > /usr/local/etc/php/conf.d/swoole.ini

RUN mkdir -p /app/data

WORKDIR /app

COPY ./ /app

EXPOSE 8000
CMD ["/usr/local/bin/php", "artisan", "swoole:http", "start"]