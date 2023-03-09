# User Management API

This is a RESTful API for managing users in a SQLite database.

## Getting Started

1. Clone the repository: 
```https://github.com/whilmarbitoco/node-rest-api.git```
2. Install dependencies: 
```npm install```
3. Start the server: 
```npm start```

## Endpoints

### `GET /users`

Returns a JSON array of all users in the database.

**Example Request:**

```
GET /users
```
## Example Response:

```
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 32,
    "gender": "male"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "age": 28,
    "gender": "female"
  }
]
```
### `GET /users/:id`

Returns a JSON object of the user with the specified ID.

**Example Request:**


``` 
GET /users/1 
```
Example Response:

```
{
  "id": 1,
  "name": "John Doe",
  "age": 32,
  "gender": "male"
}
```
### ` POST /users `
Adds a new user to the database. Requires name, age, and gender parameters in the request body.

Example Request:

### ` POST /users `


Content-Type: application/json
```
{
  "name": "Sara Smith",
  "age": 25,
  "gender": "female"
}
```
### Example Response:

```
{
  "message": "User successfully added"
}
```

### ` POST /users/:id `
Updates the user with the specified ID. Requires name, age, and gender parameters in the request body.

**Example Request:**

```
POST /users/1
```

### Body
```
Content-Type: application/json

{
  "name": "John Smith",
  "age": 33,
  "gender": "male"
}
```

### Example Response:

```
{
  "message": "User successfully updated"
}
```

### ` DELETE /users/:id `
Deletes the user with the specified ID.

**Example Request:**

```
DELETE /users/1
```
### Example Response:

```
{
  "message": "User successfully deleted"
}
```

Dependencies
- Express
- sqlite3
- body-parser


## This project is licensed under the MIT License.






