import { Genero } from "./genero";
import { Produtora } from "./produtora";

export class Filme {
  private id            : number;
  private backdropPath  : string;
  private originalTitle : string;
  private overview      : string;
  private posterPath    : string;
  private title         : string;
  private generos       : Array<Genero>;
  private produtoras    : Array<Produtora>;

  constructor(
    id? : number, backdropPath? : string, originalTitle? : string,
    overview? : string, posterPath? : string, title? : string
  ){
    this.setID(id);
    this.setBackdropPath(backdropPath);
    this.setOriginalTitle(originalTitle);
    this.setOverview(overview);
    this.setPosterPath(posterPath);
    this.setTitle(title);
  }

  public setID(id: number) : void{
    this.id = id;
  }
  public getID(id: number) {
    return this.id;
  }

  public setBackdropPath(backdropPath: string) : void{
    this.backdropPath = backdropPath;
  }
  public getBackdropPath(backdropPath: string) {
    return this.backdropPath;
  }

  public setOriginalTitle(originalTitle: string) : void{
    this.originalTitle = originalTitle;
  }
  public getOriginalTitle(originalTitle: string) {
    return this.originalTitle;
  }

  public setOverview(overview: string) : void{
    this.overview = overview;
  }
  public getOverview(overview: string) {
    return this.overview;
  }

  public setPosterPath(posterPath: string) : void{
    this.posterPath = posterPath;
  }
  public getPosterPath(posterPath: string) {
    return this.posterPath;
  }

  public setTitle(title: string) : void{
    this.title = title;
  }
  public getTitle(title: string) {
    return this.title;
  }

  // ---------------------------------------------------
  // Classes Principais PK 1 para Muitos (Generos)
  // ---------------------------------------------------
  public setGeneros(generos: Array<Genero>) : void{
    this.generos = generos;
  }
  public getGeneros(generos: Array<Genero>) {
    return this.generos;
  }
  public addGeneros(generos: Genero) {
    if(this.generos == null){
      this.generos = new Array<Genero>();
    }
    this.generos.push(generos);
  }
  // ---------------------------------------------------
  // Classes Principais PK 1 para Muitos (Produtoras)
  // ---------------------------------------------------
  public setProdutoras(produtoras: Array<Produtora>) : void{
    this.produtoras = produtoras;
  }
  public getProdutoras(produtoras: Array<Produtora>) {
    return this.produtoras;
  }
  public addProdutoras(produtoras: Produtora) {
    if(this.produtoras == null){
      this.produtoras = new Array<Produtora>();
    }
    this.produtoras.push(produtoras);
  }
}
