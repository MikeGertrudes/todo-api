# Todo API
Uses GraphQL and Prisma and connects to an AWS RDS Postgres database to store and update `User` and `Todo` models.

## Query Example(s)
### Get all todos for a user
```
// Query
query($userId: Int!) {
  user(userId: $id) {
    firstName
    todos {
      title
      status
    }
  }
}
```

```
// Variables
{
  "id": 2
}
```

### Create todo
```
// Query
mutation($userId: Int!, $title: String!, $description: String) {
  createTodo(userId: $userId, title: $title, description: $description) {
    id
    title
    description
    status
  }
}
```

```
// Variables
{
  "userId": 2,
  "title": "This is a new todo created from GraphQL",
  "description": "Some description for this."
}
```

### Update todo
```
// Query
mutation($userId: Int!, $title: String!, $description: String) {
  createTodo(userId: $userId, title: $title, description: $description) {
    id
    title
    description
    status
  }
}
```

```
// Variables
{
  "userId": 2,
  "todoId": 10,
  "title": "Gotta get this done as well",
  "description": "Some description for this."
}
```

### Delete todo
```
// Query
mutation($userId: Int!, $todoId: Int!) {
  deleteTodo(userId: $userId, todoId: $todoId) {
    id
  }
}
```

```
// Variables
{
  "userId": 2,
  "todoId": 10
}
```
