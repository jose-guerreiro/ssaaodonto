export class Produtora {

  private id            : number;
  private name          : string;
  private logoPath      : string;
  private originCountry : string;

  public setID(id: number) : void{
    this.id = id;
  }
  public getID(id: number) {
    return this.id;
  }

  public setName(name: string) : void{
    this.name = name;
  }
  public getName(name: string) {
    return this.name;
  }

  public setLogoPath(logoPath: string) : void{
    this.logoPath = logoPath;
  }
  public getLogoPath(logoPath: string) {
    return this.logoPath;
  }

  public setOriginCountry(originCountry: string) : void{
    this.originCountry = originCountry;
  }
  public getOriginCountry(originCountry: string) {
    return this.originCountry;
  }
}
