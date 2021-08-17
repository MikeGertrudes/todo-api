# Todo API
Uses GraphQL and Prisma and connects to an AWS RDS Postgres database to store and update `User` and `Todo` models.

## Query Example(s)
```
query($id: Int!) {
  user(id: $id) {
    firstName
    todos {
      title
      status
    }
  }
}
```

### Variables
```
{
  "id": 2
}
```