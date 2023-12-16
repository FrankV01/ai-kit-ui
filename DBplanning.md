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

### `tagged_poems`

- poem_id
- tag_id

### `tags`

- id
- tag


#### Needed

need a users table
Need a permissions set. 
From google we get three fields.
- expires
- user.email
- user.image
- user.name

Need a table for user permissions.
Make it an enum and not a bit.

- registered_user (default)
- admin  (me) 

We don't need much beyond that, 


