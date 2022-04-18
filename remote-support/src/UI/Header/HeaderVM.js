import { makeAutoObservable } from "mobx";

class HeaderVM{
    constructor(rootstore){
        this.rootstore = rootstore;
        this.logged = rootstore.stateUIStore.logged;
        makeAutoObservable(this, {autoBind: true});
    }
}

export default HeaderVM;