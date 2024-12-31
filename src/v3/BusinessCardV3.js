import { BusinessCard } from "../objects/BusinessCard.js";
import { BusinessCardContactsAssetsPaths } from "../objects/BusinessCardAssetsPath.js";

class BusinessCardV3 extends BusinessCard {
  constructor() {
    super();

    this.leaf = `${BusinessCardContactsAssetsPaths.v3}/leaf.svg`;
    this.backgroundImage = `${BusinessCardContactsAssetsPaths.v3}/backgroundImage.svg`;
  }
}

export default BusinessCardV3;
