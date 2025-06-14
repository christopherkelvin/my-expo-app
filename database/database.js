import * as SQLite from 'expo-sqlite';

export const openDb = async () => {
  const db = await SQLite.openDatabaseAsync('advisorApp.db');
  await db.execAsync(`PRAGMA journal_mode = WAL;`);
  return db;
};
