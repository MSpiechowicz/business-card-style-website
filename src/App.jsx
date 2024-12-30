import { useMemo } from "react";
import AppBusinessCardV1 from "./v1/AppBusinessCardV1";
import AppBusinessCardV2 from "./v2/AppBusinessCardV2";

const businessCardVersion = import.meta.env.VITE_APP_BUSINESS_CARD_VERSION;

console.log('businessCardVersion', businessCardVersion);

function App() {
  const businessCard = useMemo(() => {
    switch (businessCardVersion) {
      case "1":
        return <AppBusinessCardV1 />;
      case "2":
        return <AppBusinessCardV2 />;
      default:
        return <AppBusinessCardV1 />;
    }
  }, []);

  return <div className="app__container">{businessCard}</div>;
}

export default App;
