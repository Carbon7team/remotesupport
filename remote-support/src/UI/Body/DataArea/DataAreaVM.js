import { makeAutoObservable } from "mobx";

// Da controllare se le modifiche dei setter funzionano
class DataAreaVM{
    constructor(rootstore){
        this.rootstore = rootstore;
        this.availabilityTech = rootstore.stateUIStore.availabilityTech;
        this.callAccepted = rootstore.stateUIStore.callAccepted;
        this.callEnded = rootstore.stateUIStore.callEnded;
        makeAutoObservable(this, {autoBind: true});
    }

    declineCall = () => {

      this.rootstore.stateUIStore.setIdUserClient(null);
      this.rootstore.stateUIStore.setNameClient(null);
      this.rootstore.stateUIStore.setSurnameClient(null);
      this.rootstore.stateUIStore.setCompanyClient(null);
      this.rootstore.stateUIStore.setRequestReceived(false);


    }

}

export default DataAreaVM;