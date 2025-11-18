## POST /users/register

Description
-
Creates a new user account and returns the created user and an authentication token.

Endpoint
-
- URL: `/users/register`
- Method: `POST`

Request body (JSON)
-
The endpoint expects a JSON body with the following shape. Fields marked as required must be present.

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "PlainTextPassword123"
}
```

Field requirements / validation
-
- `fullname.firstname` (required): string, minimum length 3
- `fullname.lastname` (optional): string, minimum length 3 when provided
- `email` (required): string, minimum length 5, must be unique across users
- `password` (required): string (will be hashed before storing)

Notes about validation and implementation
-
- The controller uses `express-validator` to validate the incoming request. If validation fails the endpoint responds with HTTP 400 and a JSON payload containing the errors array.
- The password is hashed using the model helper `userModel.hashPassword()` which uses `bcrypt` with a salt rounds of 10.
- The `User` schema sets `password.select = false` so the password is not returned in queries by default.

Environment requirements
-
- `JWT_SECRET` must be set in your environment. The code calls `user.generateAuthToken()` which will throw if `JWT_SECRET` is missing.

Responses
-
- Success (201 Created)

  - Body: JSON object containing the created user object and a JWT token.

  Example (201):

  ```json
  {
    "user": {
      "_id": "64a1f5ee...",
      "fullname": { "firstname": "John", "lastname": "Doe" },
      "email": "john@example.com",
      "socketId": null,
      "__v": 0
    },
    "token": "eyJhbGciOi..."
  }
  ```

  Full HTTP response example (201 Created):

  ```http
  HTTP/1.1 201 Created
  Content-Type: application/json; charset=utf-8

  {
    "user": {
      "_id": "64a1f5ee...",
      "fullname": { "firstname": "John", "lastname": "Doe" },
      "email": "john@example.com",
      "socketId": null,
      "__v": 0
    },
    "token": "eyJhbGciOi..."
  }
  ```

- Validation error (400 Bad Request)

  - Body shape: `{ "errors": [ { msg, param, location, ... } ] }` from `express-validator`.

  Example (400):

  ```json
  {
    "errors": [
      { "msg": "Invalid value", "param": "email", "location": "body" }
    ]
  }
  ```

  Full HTTP response example (400 Bad Request):

  ```http
  HTTP/1.1 400 Bad Request
  Content-Type: application/json; charset=utf-8

  {
    "errors": [
      { "msg": "Invalid value", "param": "email", "location": "body" }
    ]
  }
  ```

- Duplicate email (409 Conflict) — Mongoose will raise a duplicate key error (code `11000`) if the email is already in use. The repository/service/controller layer should catch that and return a 409 response. If not caught, Mongoose will return a 500; handle 11000 explicitly for a nicer client response.

  Example (409):

  ```json
  { "error": "Email already exists" }
  ```

  Full HTTP response example (409 Conflict):

  ```http
  HTTP/1.1 409 Conflict
  Content-Type: application/json; charset=utf-8

  { "error": "Email already exists" }
  ```

- Server error (500 Internal Server Error)

  - Body: `{ "error": "..." }`

Implementation notes (flow)
-
1. `user.controller.registerUser` runs request validation (`express-validator`). If validation fails it returns 400.
2. Controller extracts `{ fullname, email, password }` from `req.body`.
3. Controller hashes the password using `userModel.hashPassword(password)`.
4. Controller calls `userService.createUser({ firstname, lastname, email, password: hashed })` where `firstname` and `lastname` are taken from `fullname`.
5. `user.service.createUser` uses the model to create and persist the new user document.
6. Controller calls `user.generateAuthToken()` on the created user to produce a JWT (expires in 7 days) and returns `201` with `{ user, token }`.

Example curl request
-
```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{"fullname": {"firstname":"John","lastname":"Doe"}, "email":"john@example.com", "password":"MyStrongPass123"}'
```

Developer tips
-
- Ensure `JWT_SECRET` is present in your `.env` or environment before starting the server.
- The schema's `password` field is stored hashed and not selected by default. If you need to compare a plaintext password with the stored hash, use `user.comparePassword(plaintext)` which calls `bcrypt.compare`.
- Consider returning a sanitized user object (omit internal fields like `__v`, `socketId` when not needed) for production APIs.

File references
-
- Controller: `controllers/user.controller.js` (calls validation, hashes password, issues token)
- Service: `services/user.service.js` (creates the model instance)
- Model: `models/user.model.js` (mongoose schema, `hashPassword`, `comparePassword`, `generateAuthToken`)

---

## Captain Routes

This section documents the captain-facing endpoints implemented in `backend/routes/captain.routes.js`.

### POST /captain/register

Description
-
Registers a new captain (driver) with vehicle details and returns the created captain and a JWT token.

Request body (JSON with comments for constraints)
-
```json
{
  "fullname": {
    "firstname": "Raj",
    "lastname": "Kumar"
  },
  "email": "captain@example.com",
  "password": "PlainTextPassword123",
  "vehicle": {
    "color": "Blue",
    "plate": "ABC-1234",
    "capacity": 4,
    "vehicleType": "car" // allowed: 'bike', 'car', 'auto'
  }
}
```

// Comments above indicate constraints used by validation middleware: `firstname`/`lastname` min length 3, `email` must be valid, `password` min 6 chars, `vehicle.capacity` integer >=1, `vehicle.vehicleType` one of ['bike','car','auto'].

Success response (201 Created)
-
```json
{
  "captain": {
    "_id": "64b2f5aa...",
    "fullname": { "firstname": "Raj", "lastname": "Kumar" },
    "email": "captain@example.com",
    "vehicle": { "color": "Blue", "plate": "ABC-1234", "capacity": 4, "vehicleType": "car" },
    "__v": 0
  },
  "token": "eyJhbGciOi..."
}
```

Errors
-
- Validation error (400): `{ "errors": [ ... ] }`
- Duplicate email (409): `{ "error": "Email already exists" }`

### POST /captain/login

Description
-
Authenticates a captain and returns a JWT token with the captain object.

Request body (JSON)
-
```json
{
  "email": "captain@example.com",
  "password": "PlainTextPassword123"
}
```

Success response (200 OK)
-
```json
{
  "captain": {
    "_id": "64b2f5aa...",
    "fullname": { "firstname": "Raj", "lastname": "Kumar" },
    "email": "captain@example.com",
    "vehicle": { "color": "Blue", "plate": "ABC-1234", "capacity": 4, "vehicleType": "car" },
    "__v": 0
  },
  "token": "eyJhbGciOi..."
}
```

Errors
-
- Validation error (400): `{ "errors": [ ... ] }`
- Invalid credentials (401): `{ "error": "Invalid email or password" }`

### GET /captain/profile

Description
-
Returns the authenticated captain's profile. Requires `Authorization: Bearer <token>` header.

Request headers
-
```
Authorization: Bearer <JWT_TOKEN>
```

Success response (200 OK)
-
```json
{
  "captain": {
    "_id": "64b2f5aa...",
    "fullname": { "firstname": "Raj", "lastname": "Kumar" },
    "email": "captain@example.com",
    "vehicle": { "color": "Blue", "plate": "ABC-1234", "capacity": 4, "vehicleType": "car" },
    "__v": 0
  }
}
```

Errors
-
- Missing/invalid token (401): `{ "error": "Unauthorized" }`

### GET /captain/logout

Description
-
Logs out the authenticated captain by blacklisting their JWT token (24-hour TTL). Requires `Authorization` header.

Request headers
-
```
Authorization: Bearer <JWT_TOKEN>
```

Success response (200 OK)
-
```json
{ "message": "Logged out successfully" }
```

Developer tips
-
- Validation rules are implemented in `backend/routes/captain.routes.js` using `express-validator`.
- The create flow uses `backend/services/captain.service.js` to persist the captain. The service enforces presence checks and calls the captain model to create the document.
- Protect profile/logout routes with the `authMiddleware.authCaptain` middleware which should validate the token and check blacklist state.
- Use `models/blacklistToken.model.js` to store blacklisted tokens (24-hour TTL) and check it in your auth middleware.


## POST /users/login

Description
-
Authenticates an existing user and returns an authentication token plus the (sanitized) user object.

Endpoint
-
- URL: `/users/login`
- Method: `POST`

Request body (JSON)
-
The endpoint expects a JSON body with the following shape:

```json
{
  "email": "john@example.com",
  "password": "PlainTextPassword123"
}
```

Field requirements / validation
-
- `email` (required): must be a valid email string
- `password` (required): string (presence required)

Notes about validation and implementation
-
- The route uses `express-validator` to validate input; validation failures respond with HTTP 400 and the `errors` array from `express-validator`.
- The controller should find the user by email and use the model's `comparePassword(plaintext)` helper (which wraps `bcrypt.compare`) to verify credentials.
- On successful authentication the controller calls `user.generateAuthToken()` to create a JWT (commonly valid for 7 days) and returns it to the client.
- The `User` schema stores the hashed password and typically sets `password.select = false`, so be careful to explicitly select the password hash when verifying credentials.

Responses
-
- Success (200 OK)

  - Body: JSON object containing the authenticated user object (sanitized) and a JWT token.

  Example (200):

  ```json
  {
    "user": {
      "_id": "64a1f5ee...",
      "fullname": { "firstname": "John", "lastname": "Doe" },
      "email": "john@example.com",
      "socketId": null,
      "__v": 0
    },
    "token": "eyJhbGciOi..."
  }
  ```

- Validation error (400 Bad Request)

  - Body shape: `{ "errors": [ { msg, param, location, ... } ] }` from `express-validator`.

- Invalid credentials (401 Unauthorized)

  - Body: `{ "error": "Invalid email or password" }` (or similar message)

- Server error (500 Internal Server Error)

  - Body: `{ "error": "..." }`

Developer tips
-
- Ensure `JWT_SECRET` is set in your environment; `generateAuthToken()` will throw if the secret is missing.
- Do not return the password hash in responses. Return a sanitized user object instead (omit `password`, internal fields where appropriate).
- Consider adding rate limiting or brute-force protection on the login endpoint to reduce abuse.

File references
-
- Controller: `controllers/user.controller.js` (performs validation, compares password, issues token)
- Service: `services/user.service.js` (optional: contains user lookup/creation logic)
- Model: `models/user.model.js` (schema, `comparePassword`, `generateAuthToken`)


GET example — retrieve a user by id
-
This project does not include an explicit `GET /users/:id` handler in the attachments you provided, but many apps expose a read endpoint for users. Below is a suggested request + response example you can add to your API docs. It demonstrates the typical shape of a returned user object (password omitted) and an auth-protected request.

Request (curl):

```bash
curl -X GET http://localhost:3000/users/64a1f5ee1234567890abcdef \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

Example JSON body (200 OK):

```json
{
  "_id": "64a1f5ee1234567890abcdef",
  "fullname": { "firstname": "John", "lastname": "Doe" },
  "email": "john@example.com",
  "socketId": null,
  "__v": 0
}
```

Full HTTP response example (200 OK):

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "_id": "64a1f5ee1234567890abcdef",
  "fullname": { "firstname": "John", "lastname": "Doe" },
  "email": "john@example.com",
  "socketId": null,
  "__v": 0
}
```

Full HTTP response example (404 Not Found):

```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8

{
  "error": "User not found"
}
```

Notes
- If the endpoint is protected, include an `Authorization` header bearing the JWT token issued at registration. If your implementation returns the user object under a `user` key instead of top-level (e.g., `{ user: { ... } }`), adjust examples accordingly.

If you'd like, I can also add a small example GET route implementation (controller + route) that returns the user by id (with authentication middleware) so the example matches working code in your repo.

If you want, I can also add an example request/response test (supertest) or expand this README with example error cases and typical troubleshooting steps.

---

## GET /users/profile

Description
-
Retrieves the authenticated user's profile information. Requires a valid JWT token in the Authorization header.

Endpoint
-
- URL: `/users/profile`
- Method: `GET`
- Authentication: Required (Bearer token in `Authorization` header)

Request headers
-
```
Authorization: Bearer <JWT_TOKEN>
```

Request body
-
None. The user ID is extracted from the decoded JWT token by the authentication middleware.

Notes about validation and implementation
-
- The `authMiddleware.authUser` middleware validates the JWT token and attaches the decoded user object to `req.user`.
- If the token is invalid, expired, or missing, the middleware responds with HTTP 401 (Unauthorized).
- If the token is blacklisted (logged out), the middleware should reject it. See `/users/logout` for blacklist handling.
- The controller retrieves the authenticated user from `req.user` and returns the sanitized user object.

Responses
-
- Success (200 OK)

  - Body: JSON object containing the authenticated user's profile (sanitized; password omitted).

  Example (200):

  ```json
  {
    "user": {
      "_id": "64a1f5ee...",
      "fullname": { "firstname": "John", "lastname": "Doe" },
      "email": "john@example.com",
      "socketId": null,
      "__v": 0
    }
  }
  ```

  Full HTTP response example (200 OK):

  ```http
  HTTP/1.1 200 OK
  Content-Type: application/json; charset=utf-8

  {
    "user": {
      "_id": "64a1f5ee...",
      "fullname": { "firstname": "John", "lastname": "Doe" },
      "email": "john@example.com",
      "socketId": null,
      "__v": 0
    }
  }
  ```

- Missing/invalid token (401 Unauthorized)

  - Body: `{ "error": "Unauthorized" }` or `{ "error": "Token not provided" }`

  Example (401):

  ```json
  { "error": "Unauthorized" }
  ```

- Expired token (401 Unauthorized)

  - Body: `{ "error": "Token expired" }`

- Server error (500 Internal Server Error)

  - Body: `{ "error": "..." }`

Example curl request
-
```bash
curl -X GET http://localhost:3000/users/profile \
  -H "Authorization: Bearer eyJhbGciOi..."
```

Developer tips
-
- Store the JWT token returned from `/users/register` or `/users/login` on the client and include it in the `Authorization: Bearer <token>` header for authenticated requests.
- Ensure the middleware correctly decodes and attaches the user to `req.user` before the controller is called.
- Return only sanitized fields (omit `password`, internal fields like `__v` if not needed).

File references
-
- Middleware: `middlewares/auth.middleware.js` (validates token, attaches user to `req.user`)
- Controller: `controllers/user.controller.js` (returns authenticated user profile)
- Model: `models/user.model.js` (user schema)

---

## GET /users/logout

Description
-
Logs out the authenticated user by blacklisting their JWT token. Requires a valid JWT token in the Authorization header. After logout, the token can no longer be used for authenticated requests.

Endpoint
-
- URL: `/users/logout`
- Method: `GET`
- Authentication: Required (Bearer token in `Authorization` header)

Request headers
-
```
Authorization: Bearer <JWT_TOKEN>
```

Request body
-
None. The token is extracted from the Authorization header and blacklisted.

Notes about validation and implementation
-
- The `authMiddleware.authUser` middleware validates the JWT token and attaches the decoded user object to `req.user`.
- The controller extracts the token from the `Authorization` header (typically with format `Bearer <token>`).
- The token is added to the `BlacklistToken` collection with a TTL of 24 hours; MongoDB automatically deletes the document after 24 hours.
- If the token is already expired or invalid, the middleware rejects it before the controller runs (401 response).
- After logout, the client should discard the token and request a new one by logging in again.

Responses
-
- Success (200 OK)

  - Body: JSON object confirming logout.

  Example (200):

  ```json
  { "message": "Logged out successfully" }
  ```

  Full HTTP response example (200 OK):

  ```http
  HTTP/1.1 200 OK
  Content-Type: application/json; charset=utf-8

  { "message": "Logged out successfully" }
  ```

- Missing/invalid token (401 Unauthorized)

  - Body: `{ "error": "Unauthorized" }`

  Example (401):

  ```json
  { "error": "Unauthorized" }
  ```

- Server error (500 Internal Server Error)

  - Body: `{ "error": "..." }`

Example curl request
-
```bash
curl -X GET http://localhost:3000/users/logout \
  -H "Authorization: Bearer eyJhbGciOi..."
```

Developer tips
-
- After a successful logout (200 response), the client should remove/discard the stored JWT token.
- The token is blacklisted for 24 hours; trying to use it within that window should return 401 (Unauthorized).
- The authentication middleware should check the blacklist on every request and reject blacklisted tokens.
- Consider adding a refresh-token mechanism for longer sessions; logout would then invalidate both the access token and any refresh tokens.

File references
-
- Middleware: `middlewares/auth.middleware.js` (validates token, checks blacklist)
- Controller: `controllers/user.controller.js` (extracts token, adds to blacklist)
- Model: `models/blacklistToken.model.js` (stores blacklisted tokens with 24-hour TTL)
