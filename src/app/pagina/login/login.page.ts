import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Produto } from 'src/models/produtos/produto.model';
//import { throwError } from 'rxjs';
//import { map } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email : string = "";
  senha : string = "";
  apiURL: string = "";

  constructor(private alertCtrl: AlertController, private http : HttpClient) {
    this.apiURL == 'http://localhost:3000';
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!' + this.email + this.senha,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async logar() {
    if(this.email == '' || this.senha == ''){
      const alert = await this.alertCtrl.create({
        header: 'Atenção!',
        subHeader: 'Erro de Aesso.',
        message: "Preencha todos os campos!",
        buttons: ["Ok"]
      });
      await alert.present();
    } else {

    }
  }

  NewCadastro(){
  }

  NewSenha(){
  }

  listarTodosProdutos() {
    this.http.get(`${ this.apiURL }/produtos`)
             .subscribe(resultado => console.log(resultado));
  }

  listarProdutoPorId1() {
    this.http.get(`${ this.apiURL }/produtos/1`)
              .subscribe(resultado => console.log(resultado));
  }

  listarProdutoPorId() {
    this.http.get(`${ this.apiURL }/produtos/99`)
              .subscribe(
                resultado =>
                  console.log(resultado)
              );
  }

  adicionarProduto() {
    var produto = { nome : "" };

    this.http.post(`${ this.apiURL }/produtos`, produto)
              .subscribe(
                resultado =>
                  console.log(resultado)
              );
  }

  alterarProduto() {
    var produto = { id : 1, nome : "Smart TV 50 Polegadas" };

    this.http.put(`${ this.apiURL }/produtos/1`, produto)
              .subscribe(
                resultado =>
                  console.log('Produto alterado com sucesso.')
              );
  }

  excluirProduto() {
    this.http.delete(`${ this.apiURL }/produtos/1`)
              .subscribe(
                resultado =>
                  console.log('Produto excluído com sucesso.')
              );
  }

  listarTodosProdutos1() {
    this.http.get<Produto[]>(`${ this.apiURL }/produtos`)
              .subscribe(
                resultado =>
                  console.log(resultado)
              );
  }

  adicionarProdutoTp() {
    var produto = new Produto();
    produto.nome = "Cadeira Gamer";

    this.http.post<Produto>(`${ this.apiURL }/produtos`, produto)
    .subscribe(
      resultado =>
        console.log(resultado)
    );
  }

}
