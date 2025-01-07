import { BusinessCard } from "../objects/BusinessCard.js";
import { BusinessCardContactsAssetsPaths } from "../objects/BusinessCardAssetsPath.js";

class BusinessCardV3 extends BusinessCard {
  constructor() {
    super();

    this.leaf = `${BusinessCardContactsAssetsPaths.v4}/leaf.svg`;
    this.backgroundImage = `${BusinessCardContactsAssetsPaths.v4}/backgroundImage.svg`;
  }
}

export default BusinessCardV3;
