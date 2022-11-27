import React, { useEffect, useState } from "react";
import { LangResponse } from "../../../service/interface/langResponse";

function Language() {
  const [availableLanguages, setAvailableLanguages] = useState<LangResponse>({
    availableLang: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3000/language");
      const response = await data.json();
      setAvailableLanguages(response);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <React.Fragment>
      <h1>Select the language</h1>
      {availableLanguages.availableLang.map((lang, index) => {
        return <div>{lang}</div>;
      })}
    </React.Fragment>
  );
}

export default Language;
