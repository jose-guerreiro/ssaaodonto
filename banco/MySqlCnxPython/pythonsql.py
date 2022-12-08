import pyodbc

cxDados = (
    "DRIVER={MySQL ODBC 8.0 Driver};"
    "SERVER=localhost;"
    "DATABASE=bdpython;"
    "UID=root;"
    "PASSWORD=Xml@MySql78;"
)
#print(cxDados)
cnxn = pyodbc.connect(cxDados)
print("Conexão Bem Sucedida!")
 
cursor = cnxn.cursor()

# Variáveis
id = 4
cliente = 'José dos Anjois'
produto = 'Apartamento Novo'
preco = 1000
qtd = 2

# f = função no início da Sql
comando = f"""INSERT INTO tb_vendas (id_venda, cliente, produto, preco, quantidade, data_venda)
             VALUES ({id}, '{cliente}', '{produto}', {preco}, {qtd}, now())"""

cursor.execute(comando)
cursor.commit()