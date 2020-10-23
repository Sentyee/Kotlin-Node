create table db_software.software
(
    id        int auto_increment
        primary key,
    name      varchar(255) not null,
    version   varchar(255) not null,
    `release` varchar(255) null
);


