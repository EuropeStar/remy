import {observable} from 'mobx';


export class LoginStore {
    @observable username: string = "";
    @observable password: string = "";

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

}

const store = new LoginStore("", "");

export default store;