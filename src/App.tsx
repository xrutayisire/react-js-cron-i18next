import { useState } from "react";
import Cron from "react-js-cron";
import { useTranslation } from "react-i18next";
import "antd/dist/antd.css";

function App() {
  const { t } = useTranslation();
  const [value, setValue] = useState("");

  return (
    <div className="App">
      {t("Something")}
      <Cron value={value} setValue={setValue} />
    </div>
  );
}

export default App;
