const express = require("express");
const cors = require('cors');
const routes = require('./routes');
const app = express();

//Controlar quem acessa e de onde é o acesso da aplicação
app.use(cors());
//Converter Json em objeto javascript
app.use(express.json());

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação do back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recurco
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
   */

   /**
    * SQL: MySQL, SQLite, PostgresSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc...
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */
/*app.post('/users' ,(request, response) => {
    // Request params
    // const params = request.query;
    // const params = request.params;

    /**Request Body 
    const body = request.body;

    console.log(body);
    
    return response.json({
        cidade: "Caxias",
        nome: "Francisco Sousa"
    });
});*/

app.use(routes);

app.listen(3333);