import Database from "better-sqlite3";

type UserRecord = {
  email: string;
};

const db = new Database("users.db");

export function initializeDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `);

  const existing = db
    .prepare("SELECT * FROM users WHERE email = ?")
    .get("admin@juice.com");

  if (!existing) {
    db.prepare("INSERT INTO users (email, password) VALUES (?, ?)").run(
      "admin@juice.com",
      "password",
    );
  }
}

export function findUserByCredentials(email: string, password: string) {
  // i made this part intentionally vulnerable so i can do SQL injection
  const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
  console.log("Running query:", query);

  return db.prepare(query).get() as UserRecord | undefined;
}
