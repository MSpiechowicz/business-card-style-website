import { BusinessCard } from "../objects/BusinessCard.js";
import { BusinessCardContactsAssetsPaths } from "../objects/BusinessCardAssetsPath.js";

class BusinessCardV4 extends BusinessCard {
  constructor() {
    super();

    this.dot = `${BusinessCardContactsAssetsPaths.v4}/dot.svg`;
    this.user = `${BusinessCardContactsAssetsPaths.v4}/user.svg`;
  }
}

export default BusinessCardV4;
