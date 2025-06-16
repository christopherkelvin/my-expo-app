import { openDb } from '../database/database';

export const initUserTable = async () => {
  try {
    const db = await openDb();

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS User (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        isActive INTEGER DEFAULT 1
      );
    `);
    console.log('✅ User table created successfully');
  } catch (error) {
    console.error('❌ Failed to create user table:', error);
  }
};
