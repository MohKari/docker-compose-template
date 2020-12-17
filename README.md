
# Overview

This project contains everything you need to quickly get a "Dev" environment up and running with Docker.

## Stack

* PHP 7.2
* Apache 2.4
* MySQL 5.7
* phpMyAdmin
* Redis

## Getting started

### Clone Repository
Be sure to replace "project-name" with your project's name.
```shell
git clone https://mohkari-plumbase@bitbucket.org/mohkari-plumbase/docker-compose-lamp-stack.git docker-compose-lamp-stack-project-name
```

### Duplicate Sample Environment File
Make a copy of the `.env.sample` file and call it `.env` in your root directory.
```shell
cp .env.sample .env
```
You can then modify any of the default variables to suit your needs.

### Modify "Hosts" File

On windows, press Win+R to open Run and enter the following:
```
C:\Windows\System32\drivers\etc\hosts
```

You want to add the following lines to the hosts file, these allow you to talk to the application on those urls.
``` shell
127.0.0.1 dev.app.com
localhost dev.app.com
```
### Start Application
To start the application, run the following command.
```shell
docker-compose up -d
```
You should now be able to navigate to http://dev.app.com and https://dev.app.com

## Connect To The Apache Container

You can connect to the web-server using a `docker exec` command. Use the command below to login to the web-server container via ssh.

```shell
docker exec -it webserver bash
```
or on windows
```shell
winpty docker exec -it webserver bash
```
## Connect To The Redis Server

You can connect to the redis-server using a `docker exec` command. Use the command below to login to the redis-server cli via ssh.

```shell
docker exec -it redis redis-cli
```
or on windows
```shell
winpty docker exec -it redis redis-cli
```

## Connect To PHPMyAdmin

http://dev.app.com:8080
Username: docker
Password: docker

## Credits

Docker Compose code originally forked from https://github.com/sprintcube/docker-compose-lamp/tree/7.2.x
