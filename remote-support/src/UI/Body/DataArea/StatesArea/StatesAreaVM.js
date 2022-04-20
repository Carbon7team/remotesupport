import { makeAutoObservable } from "mobx";

class StatesAreaVM {
    constructor(rootstore){
        this.rootstore = rootstore;
        this.datasetStore = rootstore.datasetStore;
        this.stateUIStore = rootstore.stateUIStore;
        this.options = [{value: "All", label: "All"},
                        {value: "Active", label: "Active"},
                        {value: "Not Active", label: "Not Active"}];
        this.filterValueStates = rootstore.stateUIStore.filterValueStates;
        this.jsonData = rootstore.stateUIStore.jsonData;
        makeAutoObservable(this, {rootstore: false, stateUIStore: false}, {autoBind: true});
    }

    handleChange(optionValue) {
        this.stateUIStore.setFilterValueStates(optionValue);
    }

    renderAllStates(jsonData) {
        try {

            this.datasetStore.alarmsFromJSON(JSON.parse(jsonData).states);

            return(
                this.datasetStore.states.forEach(
                    state => <li className={() => state.active === true ? "active-item" : "not-active-item"}>{state.code}: {state.name}</li>
                )
            );

        } catch (error) {

            this.datasetStore.resetStates();
            return(<p>Data not available!</p>);

        }
    }

    renderActiveStates(jsonData) {
        try {

            this.datasetStore.alarmsFromJSON(JSON.parse(jsonData).states);

            return(
                this.datasetStore.states.activeStates.forEach(
                    state => <li className="active-item">{state.code}: {state.name}</li>
                )
            );

        } catch (error) {

            this.datasetStore.resetStates();
            return(<p>Data not available!</p>);

        }
    }

    renderNotActiveStates(jsonData) {
        try {

            this.datasetStore.alarmsFromJSON(JSON.parse(jsonData).states);

            return(
                this.datasetStore.states.notActiveStates.forEach(
                    state => <li className= "not-active-item">{state.code}: {state.name}</li>
                )
            );

        } catch (error) {

            this.datasetStore.resetStates();
            return(<p>Data not available!</p>);

        }
    }
}

export default StatesAreaVM;