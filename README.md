# Juice Shop Login Demo

I implemented a basic Juice Shop login demo built with vanilla HTML, CSS, and JavaScript on the frontend and an Express server written in TypeScript on the backend. The frontend is a simple form with an email and password, which performs the client-side validations as directed and sends the form data to the server. On the backend, Express receives the `POST /login` request and stores user records in a SQLite database. The server uses the same input validations for the email and password fields. Passwords are hashed using bcrypt before being stored, and all database queries use prepared statements to prevent SQL injection.

## Running the Server

```bash
cd server
npm i
npm run dev
```
