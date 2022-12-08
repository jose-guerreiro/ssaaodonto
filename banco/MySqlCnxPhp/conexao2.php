<?php
// variáveis para conexão em LOCALHOST
    $servidor = "localhost";
    $usuario = "root";
    $senha = "Xml@MySql78";
    $dbname = "ssaa_bd";

    //Criar a conexao
    //$conn = new PDO("mysql:host=localhost;dbname=polo", "root", "spider")
    $conexao = mysqli_connect($servidor, $usuario, $senha, $dbname);
    if(!$conexao){
        die("Falha na conexao: " . mysqli_connect_error());
    }else{
        echo "Conexao realizada com sucesso";
    }
?>
