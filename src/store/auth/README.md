# Auth module

Auth module is responsible for authenticating and invalidation of user's session.


## Auth actions

Module contains the following actions, which can be found in `action-types.js`

```
login
check-token
```


## Auth mutations

Module contains the following mutations, which can be found in `mutation-types.js`

```
set-user
```


## Queries

GraphQL queries a co-located under `queries` folder and is supposed to lower mental overhead required to understand authentication module.
