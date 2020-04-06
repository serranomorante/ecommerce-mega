import { Action, action } from "easy-peasy";

export interface InterfaceModel {
  navbarItemsVisible: boolean;
  setNavbarItemsVisible: Action<InterfaceModel>;
}

const interfaceModel: InterfaceModel = {
  navbarItemsVisible: false,
  setNavbarItemsVisible: action((state) => {
    state.navbarItemsVisible = !state.navbarItemsVisible;
  }),
};

export default interfaceModel;
