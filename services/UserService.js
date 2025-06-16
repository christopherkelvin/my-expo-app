import { openDb } from 'database/database';


export const LoginUser = async (email, password) => {
  try {
    const db = await openDb();
    const user = await db.getAllAsync(`SELECT * FROM User WHERE email = ? AND password = ?`, [
      email,
      password,
    ]);
    if (user) {
      console.log('User logged in successfully:', user);
      return user;
    }
  } catch (error) {}
};

export const deleteUserTable = async () => {
  try {
    const db = await openDb(); // make sure this is working correctly
    await db.execAsync(`DROP TABLE IF EXISTS user;`);
    console.log('🗑️ User table deleted successfully');
  } catch (error) {
    console.error('❌ Failed to delete user table:', error);
  }
};

//  id INTEGER PRIMARY KEY AUTOINCREMENT,
//         firstname TEXT NOT NULL,
//         lastname TEXT NOT NULL,
//         email TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL,
//         phonenumber TEXT,
//         isActive INTEGER DEFAULT 1
