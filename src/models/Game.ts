export class Game{
    id: number;
    name: string;
    released: string;
    background_image: string;
  
    constructor(id: number, name: string, released: string, background_image: string) { 
      this.id=id;
      this.name=name;
      this.released=released;
      this.background_image=background_image;
    }

    setGameId(id: number){
      this.id = id;
    }

    getGameId(){
      return this.id;
    }

    setGameTitle(name: string){
      this.name = name;
    }

    getGameTitle(){
      return this.name;
    }

    setGameReleaseDate(releasedate: string){
      this.released = releasedate;
    }

    getGameReleaseDate(){
      return this.released;
    }

    setGameImage(image: string){
      this.background_image = image;
    }

    getGameImage(){
      return this.background_image;
    }
}