import { BusinessCard } from "../objects/BusinessCard.js";
import { BusinessCardContactsAssetsPaths } from "../objects/BusinessCardAssetsPath.js";

class BusinessCardV1 extends BusinessCard {
  constructor() {
    super();

    this.backgroundImage = `${BusinessCardContactsAssetsPaths.v1}/backgroundImage.svg`;
  }
}

export default BusinessCardV1;
