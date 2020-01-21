export class Profile {
    constructor(private username: string, private password: string, private birthyear: number){
        this.username = username;
        this.password = password;
        this.birthyear = birthyear;
    }
}
