# Juice Shop Login Demo

I implemented a basic Juice Shop login demo built with vanilla HTML, CSS, and JavaScript on the frontend and an Express server written in TypeScript on the backend. The frontend is a simple form with an email and password, with performs the client-side validations as directed and sends the form data to the server. On the backend, Express receives the request and stores user records in a SQLite database. The server side contains the same simple validations for the email and passwords fields. However, I
intentionally didn't use prepared statement for all of the SQL queries on the backend, which will
pose an issue.

## Running the Server

```bash
cd server
npm i
npm run dev
```
