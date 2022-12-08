import pyodbc

cxDados = (
    "DRIVER={MySQL ODBC 8.0 Driver};"
    "SERVER=localhost;"
    "DATABASE=bdpython;"
    "UID=root;"
    "PASSWORD=Xml@MySql78;"
)

cnxn = pyodbc.connect(cxDados)
print("Conexão Bem Sucedida!")
 
cursor = cnxn.cursor()

class Executar(self):
    cursor.execute(self)
    cursor.commit()
    print("Conexão Bem Sucedida!")