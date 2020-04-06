import interfaceModel, { InterfaceModel } from "./interface/interfaceModel";

export interface StoreModel {
  interface: InterfaceModel;
}

const storeModel: StoreModel = {
  interface: interfaceModel,
};

export default storeModel;
