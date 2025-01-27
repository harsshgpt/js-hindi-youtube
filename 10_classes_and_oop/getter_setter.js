class name  {
    constructor(username , pass){
     this.username = username,
     this.pass = pass
    }

    get pass(){
        return `${this._pass}Harsh`;
    }
    set pass(value){
        this._pass = value

    }
}
const user = new name("Harsh","abc@ybc")
console.log(user.pass)