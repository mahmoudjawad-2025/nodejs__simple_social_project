# Project: Simple Social Project API Documentation

## Table of Contents
1. [Auth Module](#auth-module)
2. [User Module](#user-module)
3. [Post Module](#post-module)

---

<h2 id="auth-module">1. Auth Module</h2>

Endpoints related to user authentication and registration.

**Base URL**: `{{base_url}}/auth`

### 1.1. Register User
- **Description:** Registers a new user.
- **URL:** `/register`
- **Method:** `POST`
- **Headers:** None
- **Request Body (JSON):**
  ```json
  {
      "name": "john_doe",
      "email": "johndoe@example.com",
      "password": "securepassword123",
      "age": 25
  }
  ```
- **Response:**
  ```json
  {
      "message": "success",
      "user": {
          "_id": "60d5ec49f1b2c4001f3e0123",
          "userName": "john_doe",
          "email": "johndoe@example.com",
          "age": 25,
          "createdAt": "2024-03-09T10:00:00.000Z",
          "updatedAt": "2024-03-09T10:00:00.000Z"
      }
  }
  ```

### 1.2. Register Save
- **Description:** Registers a new user using the mongoose `save` method.
- **URL:** `/registerSave`
- **Method:** `POST`
- **Headers:** None
- **Request Body (JSON):**
  ```json
  {
      "name": "jane_doe",
      "email": "janedoe@example.com",
      "password": "anotherpassword",
      "age": 22
  }
  ```
- **Response:** Same format as `/register`.

### 1.3. Register Many
- **Description:** Registers multiple users simultaneously.
- **URL:** `/registerMany`
- **Method:** `POST`
- **Headers:** None
- **Request Body (JSON Array):**
  ```json
  [
      {
          "name": "user_one",
          "email": "user1@example.com",
          "password": "password123",
          "age": 30
      },
      {
          "name": "user_two",
          "email": "user2@example.com",
          "password": "password123",
          "age": 28
      }
  ]
  ```
- **Response:** Returns an array of created user objects.
  ```json
  {
      "message": "success",
      "users": [ 
          { "_id": "...", "userName": "user_one", "email": "user1@example.com", "age": 30 },
          { "_id": "...", "userName": "user_two", "email": "user2@example.com", "age": 28 }
      ]
  }
  ```

### 1.4. Login User
- **Description:** Authenticates a user and returns a JWT token.
- **URL:** `/login`
- **Method:** `POST`
- **Headers:** None
- **Request Body (JSON):**
  ```json
  {
      "email": "johndoe@example.com",
      "password": "securepassword123"
  }
  ```
- **Response:**
  ```json
  {
      "message": "success",
      "token": "eyJhbGciOiJIUzI1NiIsInR5c... (virtual JWT token)"
  }
  ```

---

<h2 id="user-module">2. User Module</h2>

Endpoints related to user management.

**Base URL**: `{{base_url}}/users`

### 2.1. Get All Users
- **Description:** Retrieves all users in the system.
- **URL:** `/getAll_find`
- **Method:** `GET`
- **Headers:** None
- **Response:**
  ```json
  {
      "message": "success",
      "users": [ 
          {
             "_id": "60d5ec49f1b2c4001f3e0123",
             "userName": "john_doe",
             "email": "johndoe@example.com",
             "confirmEmail": false
          }
      ]
  }
  ```

### 2.2. Get Unconfirmed Users
- **Description:** Retrieves all users who haven't confirmed their email.
- **URL:** `/getAll_findByConfirmEmail`
- **Method:** `GET`
- **Response:** Same array format as `/getAll_find` containing only unconfirmed users.

### 2.3. Get User By ID (findOne)
- **Description:** Retrieves a specific user by their ID using `findOne`.
- **URL:** `/getUser_findOne/:id`
- **Method:** `GET`
- **URL Parameters:**
  - `id`: The unique ID of the user (e.g., `60d5ec49f1b2c4001f3e0123`)
- **Response:** Returns the user object directly.
  ```json
  {
      "_id": "60d5ec49f1b2c4001f3e0123",
      "userName": "john_doe",
      "email": "johndoe@example.com",
      "age": 25
  }
  ```

### 2.4. Get User By ID (findById)
- **Description:** Retrieves a specific user by their ID using `findById`.
- **URL:** `/getUser_findById/:id`
- **Method:** `GET`
- **URL Parameters:**
  - `id`: The unique ID of the user.
- **Response:** Returns the user object directly (same format as above).

### 2.5. Delete User (deleteOne)
- **Description:** Deletes a user by ID using `deleteOne`.
- **URL:** `/deleteUser/:id`
- **Method:** `DELETE`
- **URL Parameters:**
  - `id`: The unique ID of the user.
- **Response:** Returns an acknowledgment object.
  ```json
  {
      "acknowledged": true,
      "deletedCount": 1
  }
  ```

### 2.6. Delete User (findByIdAndDelete)
- **Description:** Deletes a user using `findByIdAndDelete`.
- **URL:** `/deleteUser_findByIdAndDelete/:id`
- **Method:** `DELETE`
- **URL Parameters:**
  - `id`: The unique ID of the user.
- **Response:** Returns the deleted user object.

### 2.7. Delete User (findOneAndDelete)
- **Description:** Deletes a user using `findOneAndDelete`.
- **URL:** `/deleteUser_findOneAndDelete/:id`
- **Method:** `DELETE`
- **URL Parameters:**
  - `id`: The unique ID of the user.
- **Response:** Returns the deleted user object.

### 2.8. Update User (updateOne)
- **Description:** Updates a user's details using `updateOne`.
- **URL:** `/updateUser/:id`
- **Method:** `PATCH`
- **URL Parameters:**
  - `id`: The unique ID of the user.
- **Request Body (JSON):**
  ```json
  {
      "userName": "new_username",
      "email": "new_email@example.com"
  }
  ```
- **Response:**
  ```json
  {
      "message": "success"
  }
  ```

### 2.9. Update Many Users (Confirm Emails)
- **Description:** Mass update operation to set all `confirmEmail: false` users to `true`.
- **URL:** `/updateUser_updateMany`
- **Method:** `PATCH`
- **Response:**
  ```json
  {
      "message": "success"
  }
  ```

### 2.10. Update User (findByIdAndUpdate)
- **Description:** Updates user details using `findByIdAndUpdate`.
- **URL:** `/updateUser_findByIdAndUpdate/:id`
- **Method:** `PATCH`
- **URL Parameters:**
  - `id`: The unique ID of the user.
- **Request Body (JSON):**
  ```json
  {
      "userName": "updated_username",
      "email": "updated@example.com"
  }
  ```
- **Response:** Returns the updated user object.

### 2.11. Update User (findOneAndUpdate)
- **Description:** Updates user details using `findOneAndUpdate`.
- **URL:** `/updateUser_findOneAndUpdate/:id`
- **Method:** `PATCH`
- **URL Parameters:**
  - `id`: The unique ID of the user.
- **Request Body (JSON):**
  ```json
  {
      "userName": "updated_username_2",
      "email": "updated2@example.com"
  }
  ```
- **Response:** Returns the updated user object.

---

<h2 id="post-module">3. Post Module</h2>

Endpoints related to user posts and interactions (comments/likes).

**Base URL**: `{{base_url}}/posts`

**Important Note:** All Post Module endpoints require an Authentication Token.

**Header Required:**
| Header | Value |
|--------|-------|
| `token`| `eyJhb... (your_jwt_token)`|

### 3.1. Get All Posts
- **Description:** Retrieves all posts along with their populated user details, likes, unlikes, and comments.
- **URL:** `/getAll`
- **Method:** `GET`
- **Headers:** Requires `token`
- **Response:**
  ```json
  {
      "message": "success",
      "posts": [
          {
              "_id": "post_id_here",
              "title": "My Post Title",
              "caption": "My Post Caption",
              "userId": {
                  "_id": "user_id_here",
                  "userName": "john_doe"
              },
              "like": [ ...users who liked... ],
              "unlike": [ ...users who unliked... ],
              "comments": [ ...comments linked virtually... ]
          }
      ]
  }
  ```

### 3.2. Create Post
- **Description:** Creates a new post. (The user ID is extracted from the authentication token).
- **URL:** `/createPost`
- **Method:** `POST`
- **Headers:** Requires `token`
- **Request Body (JSON):**
  ```json
  {
      "title": "My New Post Title",
      "caption": "This is the content of my post..."
  }
  ```
- **Response:**
  ```json
  {
      "message": "success",
      "post": {
          "_id": "new_post_id",
          "title": "My New Post Title",
          "caption": "This is the content of my post...",
          "userId": "user_id_from_token"
      }
  }
  ```

### 3.3. Like Post
- **Description:** Logs the user's positive vote (like) for a post. It adds to the likes array and removes the user from the unlikes array if present.
- **URL:** `/:id/likePost`
- **Method:** `PATCH`
- **Headers:** Requires `token`
- **URL Parameters:**
  - `id`: The unique ID of the post.
- **Response:**
  ```json
  {
      "message": "success",
      "post": {
          "_id": "post_id_here",
          "totalVote": 1,
          "like": ["user_id_here"],
          "unlike": []
      }
  }
  ```

### 3.4. Unlike Post
- **Description:** Logs the user's negative vote (unlike) for a post. It adds to the unlikes array and removes the user from the likes array if present.
- **URL:** `/:id/unlikePost`
- **Method:** `PATCH`
- **Headers:** Requires `token`
- **URL Parameters:**
  - `id`: The unique ID of the post.
- **Response:** Same format as the Like Post response but updating total votes negatively.

### 3.5. Create Comment
- **Description:** Adds a comment on a specific post.
- **URL:** `/:id/createComment`
- **Method:** `POST`
- **Headers:** Requires `token`
- **URL Parameters:**
  - `id`: The unique ID of the post.
- **Request Body (JSON):**
  ```json
  {
      "text": "This is a great post!"
  }
  ```
- **Response:**
  ```json
  {
      "message": "success",
      "comment": {
          "_id": "comment_id_here",
          "text": "This is a great post!",
          "userId": "user_id_from_token",
          "postId": "post_id_here",
          "createdAt": "2024-03-09T10:00:00.000Z"
      }
  }
  ```
