import { useMemo } from "react";
import AppBusinessCardV1 from "./v1/AppBusinessCardV1";
import AppBusinessCardV2 from "./v2/AppBusinessCardV2";
import AppBusinessCardV3 from "./v3/AppBusinessCardV3";
import AppBusinessCardV4 from "./v4/AppBusinessCardV4";

const businessCardVersion = import.meta.env.VITE_APP_BUSINESS_CARD_VERSION;

function App() {
  const businessCard = useMemo(() => {
    switch (businessCardVersion) {
      case "1":
        return <AppBusinessCardV1 />;
      case "2":
        return <AppBusinessCardV2 />;
      case "3":
        return <AppBusinessCardV3 />;
      case "4":
        return <AppBusinessCardV4 />;
      default:
        return <AppBusinessCardV1 />;
    }
  }, []);

  return <div className="app__container">{businessCard}</div>;
}

export default App;
