import { BusinessCard } from "../objects/BusinessCard";
import { BusinessCardContactsAssetsPaths } from "../objects/BusinessCardAssetsPath";

class BusinessCardV2 extends BusinessCard {
  constructor() {
    super(BusinessCardContactsAssetsPaths.v2);
  }
}

export default BusinessCardV2;
