<?php error_reporting(E_ALL); ?>
<?php require_once 'config.php'; ?>
<?php require_once DBAPI; ?>
<?php include(HEADER_TEMPLATE); ?>
<?php
    //DEFINE O FUSO HORARIO COMO O HORARIO DE BRASILIA
	date_default_timezone_set('America/Sao_Paulo');
    //CRIA UMA VARIAVEL E ARMAZENA A HORA ATUAL DO FUSO-HORÀRIO DEFINIDO (BRASÍLIA)
	$dataLocal = date('d/m/Y H:i:s', time());
    //Session
    session_start();
    //O campo usuário e senha preenchido entra no if para validar
    if((isset($_POST['email'])) && (isset($_POST['senha']))){
    	//CRIA A VARIAVEL E ARMAZENA O LOGIN E SENHA 
		$email_login = $_POST['email'];
		$senha_login = $_POST['senha'];
		$senha_login = md5($senha_login);
    	//Incluindo a conexão com banco de dados   
	    include_once("conexao2.php");
	    //Buscar na tabela usuario o usuário que corresponde com os dados digitado no formulário
	    $sql = "SELECT * FROM usuarios WHERE email='$email_login' and senha='$senha_login'";
	    
		$resultado_usuario = mysqli_query($conexao, $sql);
        $resultado = mysqli_fetch_assoc($resultado_usuario);
        //Encontrado um usuario na tabela usuário com os mesmos dados digitado no formulário
        if(isset($resultado)){
            $_SESSION['usuarioId'] = $resultado['id'];
            $_SESSION['usuarioNome'] = $resultado['nome'];
            $_SESSION['usuarioEmail'] = $resultado['email'];
            $_SESSION['usuarioNiveisAcessoId'] = $resultado['niveis_acesso_id'];
            header("Location: home.php");
        }else{
            //Não foi encontrado um usuario na tabela usuário com os mesmos dados digitado no formulário   
            //Váriavel global recebendo a mensagem de erro
            $_SESSION['loginErro'] = "Usuário ou senha Inválido";
            //redireciona o usuario para a página de login 
            header("Location: index.php");
        }
    //O campo usuário e senha não preenchido entra no else e redireciona o usuário para a página de login
    }else{
        $_SESSION['loginErro'] = "Usuário ou senha inválido";
        header("Location: index.php");
    }
?>
<?php include(FOOTER_TEMPLATE); ?>