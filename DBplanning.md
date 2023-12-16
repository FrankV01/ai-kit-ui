# Database Planning 

Quick planning file for database layout.

## current tables:

### `poems`
- id
- title
- poem 
- createdDate
- hidden
- prompt
- poem_raw
- use_for_training (0, unrated; 1-10 rating)

```sql
CREATE TABLE `poems` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `poem` text NOT NULL,
  `createdDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `hidden` tinyint(1) NOT NULL DEFAULT '0',
  `prompt` text,
  `poem_raw` text,
  `use_for_training` tinyint NOT NULL DEFAULT '0' COMMENT '1-10 training rating system; higher rating more valuable for training training',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```

### `prompt_queue` 
Used for user submitted requests to be queued up and sent 
at a time I choose. 

- id
- prompt
- source
- approved
- hidden
- created_date
- approved_date

```sql
CREATE TABLE `prompt_queue` (
`id` int NOT NULL AUTO_INCREMENT,
`prompt` text NOT NULL,
`source` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
`approved` bit(1) NOT NULL DEFAULT b'0',
`hidden` bit(1) NOT NULL DEFAULT b'1',
`created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
`approved_date` timestamp NULL DEFAULT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```

### `tagged_poems`

- poem_id
- tag_id

```sql
create table tagged_poems
(
    poem_id int not null,
    tag_id  int not null,
primary key (poem_id, tag_id)
);
```


### `tags`

- id
- tag

```sql
CREATE TABLE `votes` (
`poem_id` int NOT NULL,
`user_id` int NOT NULL,
`value` smallint NOT NULL DEFAULT '0',
PRIMARY KEY (`poem_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```


### `users`

- id
- expires
- user.email
- user.image
- user.name
- permission {admin, registered_user, banned, disabled}
- 
```sql
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `expires` datetime NOT NULL,
  `email` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `user_name` varchar(1000) NOT NULL,
  `image_url` varchar(1000) DEFAULT NULL,
  `permission` enum('admin','registered_user','banned','disabled') NOT NULL DEFAULT 'registered_user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_uindex` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

```

### `votes`

_Comment_: I do want to track poem votes by user
rather than just +1 on the poem. That way, it can 
be personalized and aggregates can be recalculated.

- poem_id
- user_id
- +1 or -1 or 0 (neutralize vote)
- created_date
- updated_date

```sql
CREATE TABLE `votes` (
`poem_id` int NOT NULL,
`user_id` int NOT NULL,
`value` smallint NOT NULL DEFAULT '0',
PRIMARY KEY (`poem_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```




