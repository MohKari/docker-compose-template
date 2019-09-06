# Overview

This project contains everything you need to quickly get a "Dev" environment up and running with Docker.

## Stack

* PHP 7.2
* Apache 2.4
* MySQL 5.7
* phpMyAdmin
* Redis

## Configuration

Make a copy of the `.env.sample` file and call it `.env` in your root directory.
```shell
cp .env.sample .env
```
You can then modify any of the default variables to suit your needs.

## Connect To Apache Container

You can connect to web server using `docker exec` command to perform various operation on it. Use below command to login to container via ssh.

```shell
docker exec -it webserver bash
```
or on windows
```shell
winpty docker exec -it webserver bash
```

## Modify "hosts" file

On windows, press Win+R to open Run and enter the following:
```
C:\Windows\System32\drivers\etc\hosts
```

You want to add the following to the hosts file
``` shell
127.0.0.1 dev.app.com
localhost dev.app.com
```

## Credits

Docker Compose code originally forked from https://github.com/sprintcube/docker-compose-lamp/tree/7.2.x
