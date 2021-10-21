import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mispcs10.db');

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
        tx.executeSql(`CREATE TABLE IF NOT EXISTS mispcs (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          image TEXT NOT NULL,
          description TEXT NOT NULL,
          userId TEXT NOT NULL,
          lat FLOAT NOT NULL,
          lng FLOAT NOT NULL
        )`,
        [],
        () => resolve(),
        (_, err) => reject(err),
      )
    });
  });
}

export const insertMiPc = (
  title,
  image,
  description,
  userId,
  lat,
  lng
) => {

  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO mispcs (title, image, description,userId,lat,lng) VALUES (?,?,?,?,?,?)',
        [title, image,description,userId,lat,lng],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      )
    })
  })
}

export const fetchMispcs = (userId) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM mispcs WHERE userId="${userId}" `,
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      )
    })
  })
}


export const deleteAddress = (
  id
) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM mispcs WHERE id = ?',
        [id],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      )
    })
  })
}