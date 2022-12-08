<?php
// variáveis para conexão em LOCALHOST
    $servidor = "localhost";
    $usuario = "root";
    $senha = "spider";
    $dbname = "polo2";
    
    //Criar a conexao
    //$conn = new PDO("mysql:host=localhost;dbname=polo", "root", "spider")    
    $conexao = mysqli_connect($servidor, $usuario, $senha, $dbname);
    if(!$conexao){
        die("Falha na conexao: " . mysqli_connect_error());
    }else{
        echo "Conexao realizada com sucesso";
    }      
?>