FROM php:7.2-apache

# Set proxy's if set in .env
ARG http_proxy
ARG https_proxy
RUN if [ "$http_proxy" != "" ] ; then \
    export http_proxy=$http_proxy ; else \
    unset http_proxy ; \
fi
RUN if [ "$https_proxy" != "" ] ; then \
    export http_proxys=$https_proxy ; else \
    unset https_proxy ; \
fi

# Install Memcached
# RUN apt-get update && apt-get install -y libz-dev libmemcached-dev
# RUN pecl install memcached
# RUN echo extension=memcached.so >> /usr/local/etc/php/conf.d/memcached.ini

# Install Memcache # Doesn't seem to work on php 7+
# RUN apt-get update && apt-get install -y --no-install-recommends zlib1g-dev && rm -rf /var/lib/apt/lists/*
# RUN pecl install memcache-3.0.8 && docker-php-ext-enable memcache

RUN apt-get -y update --fix-missing
RUN apt-get upgrade -y

# Install useful tools
RUN apt-get -y install apt-utils nano wget dialog

# Install important libraries
RUN apt-get -y install --fix-missing apt-utils build-essential git curl libcurl4 libcurl3-dev zip openssl

# Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install xdebug
# RUN pecl install xdebug-2.6.0     # Trying to run this command on our production server causes an error
# RUN docker-php-ext-enable xdebug  # 'No releases available for package "pecl.php.net/xdebug"'

# Install redis
# RUN pecl install redis-4.0.1
# RUN docker-php-ext-enable redis

# Install Php Redis Extension
    RUN curl 'http://pecl.php.net/get/redis-4.1.1.tgz' -o redis-4.1.1.tgz \
    && pecl install redis-4.1.1.tgz \
    && rm -rf redis-4.1.1.tgz \
    && rm -rf /tmp/pear \
    && docker-php-ext-enable redis

# Other PHP7 Extensions

RUN apt-get -y install libsqlite3-dev libsqlite3-0 mariadb-client
RUN docker-php-ext-install pdo_mysql
# RUN docker-php-ext-install pdo_sqlite # Get "Warning" "is already loaded!"
RUN docker-php-ext-install mysqli

# RUN docker-php-ext-install curl       # Get "Warning" "is already loaded!"
# RUN docker-php-ext-install tokenizer  # Get "Warning" "is already loaded!"
# RUN docker-php-ext-install json       # Get "Warning" "is already loaded!"
RUN docker-php-ext-install sockets

RUN apt-get -y install zlib1g-dev
RUN docker-php-ext-install zip

RUN apt-get -y install libicu-dev
RUN docker-php-ext-install -j$(nproc) intl

# RUN docker-php-ext-install mbstring   # Get "Warning" "is already loaded!"
RUN docker-php-ext-install gettext

RUN apt-get install -y libfreetype6-dev libjpeg62-turbo-dev libpng-dev

# BUG FIX? (HOPEFULLY STOP the "freetype" BELOW FROM ERRORING...)
# RUN apt-get update && apt-get install -y pkg-config patch
# ADD https://git.archlinux.org/svntogit/packages.git/plain/trunk/freetype.patch?h=packages/php /tmp/freetype.patch
# RUN docker-php-source extract; \
#     cd /usr/src/php; \
#     patch -p1 -i /tmp/freetype.patch; \
#     rm /tmp/freetype.patch

RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/
RUN docker-php-ext-install -j$(nproc) gd

# Enable apache modules
RUN a2enmod rewrite headers