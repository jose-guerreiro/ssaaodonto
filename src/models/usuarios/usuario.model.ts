export class Usuario {

  private id     : number;
  private nome   : string;
  private cpf    : string;
  private email  : string;
  private senha  : string;
  private status : string;
  private nivel  : string;
  //private datacad : string;
  //private dataalt : string;

  public setId(id: number) : void {
    this.id = id;
  }
  public getId(id: number) {
    return this.id;
  }

  public setNome(nome: string) : void {
    this.nome = nome;
  }
  public getNome(nome: string) {
    return this.nome;
  }

  public setCpf(cpf: string) : void {
    this.cpf = cpf;
  }
  public getCpf(cpf: string) {
    return this.cpf;
  }

  public setEmail(email: string) : void {
    this.email = email;
  }
  public getEmail(email: string) {
    return this.email;
  }

  public setSenha(senha: string) : void {
    this.senha = senha;
  }
  public getSenha(senha: string) {
    return this.senha;
  }

  public setStatus(status: string) : void {
    this.status = status;
  }
  public getStatus(status: string) {
    return this.status;
  }

  public setNivel(nivel: string) : void {
    this.nivel = nivel;
  }
  public getNivel(nivel: string) {
    return this.nivel;
  }
}
