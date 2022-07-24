import mysql from 'mysql2/promise';
import connection from "../../utility/connection";

export default async function handler(req, res) {
    const page = req.query.page;
    const [result, fields] = await connection.query('SELECT b.title, b.genre_id, g.name FROM book b LEFT JOIN genre g ON g.genre_id = b.genre_id WHERE b.genre_id = ?', [{page}]);
    //Grazinti knygas, kuriu genre_id = 38
    //Jei padaret, padarykit, kad butu galima nurodyti genre_id per URL parametra ( /api/books-genre?genre=10 )
    res.status(200).json(result);
}
  