
// 1 - Importar o sequelize
const sequelize = require("sequelize");
// 2 - Elencar os dados para conexão com o BD (usuario, senha, porta, endereco...)
const config = {
    "username": "root",
    "password": "",
    "host" :"localhost",
    "port" :"3306",
    "dialect": "mysql",
    "database": "escola"
}
// 3 - Criar a conexão com o banco de dados
const conexao = new sequelize(config);
// 4 - Executar uma consulta contra o BD (SELECT * FROM alunos);
const promise = conexao.query(
    'SELECT * FROM alunos',
    sequelize.QueryTypes.SELECT
);

//4- levantar as turmas do bd

const promiseTurmas = conexao.query(
    'SELECT * FROM turmas',
    sequelize.QueryTypes.SELECT
);
 
const promiseAlunos = conexao.query(
    'SELECT * FROM turmas',
    sequelize.QueryTypes.SELECT
);
//4.1 quando a promise for cumprida, executar a funcao passada para ,tnen;

const promiseTotal = Promise.all([promiseAlunos, promiseTurmas]);
    //4.2 quando a promessa falhar executar a funcao passada para .catch;

    promiseTotal.then(
        dados => {
            console.log(dados[0], dados[1]);
            conexao.close()
        }
    )

        


