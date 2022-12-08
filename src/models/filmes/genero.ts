export class Genero {

  private id   : number;
  private nome : string;

  public setID(id: number) : void{
    this.id = id;
  }
  public getID(id: number) {
    return this.id;
  }

  public setNome(nome: string) : void{
    this.nome = nome;
  }
  public getNome(nome: string) {
    return this.nome;
  }
}
