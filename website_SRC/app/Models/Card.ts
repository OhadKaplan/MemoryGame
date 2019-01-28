export class Card{

    public id:number;
    public imageName:string;
    public state:number; //1-Front 2- back 3- hidden

    

    constructor(id: number, imageName: string, state: number) {
        this.id = id;
        this.imageName = imageName;
        this.state = state;
    } 

}