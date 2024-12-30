import { BusinessCard } from "../objects/BusinessCard";
import { BusinessCardContactsAssetsPaths } from "../objects/BusinessCardAssetsPath";

class BusinessCardV1 extends BusinessCard {
  constructor() {
    super(BusinessCardContactsAssetsPaths.v1);
  }
}

export default BusinessCardV1;
