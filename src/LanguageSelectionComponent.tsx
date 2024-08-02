import React, { useState } from "react";
import './styles.css';

interface LanguageSelectionProps {
  items: {[key: string]: string}
}

const LanguageSelectionComponent: React.FC<LanguageSelectionProps> = ({ items }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [localTime, setLocalTime] = useState<string>("");

  const getTimeZoneFromLocale = (locale: string): string => {
    return items[locale] || "en-US";
  };
  
  const handleChangeLanguage = (language: string) => {
    if (!language) {
      setLocalTime("");
      setSelectedLanguage("");
      return;
    }
    setSelectedLanguage(language);
    const timeZone = getTimeZoneFromLocale(language);
    const now = new Date();
    const formattedTime = new Intl.DateTimeFormat(language, {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: timeZone,
    }).format(now);
    console.log(`Local time is: ${formattedTime}`);
    setLocalTime(formattedTime);
  };

  return (
    <div className="flex-container">
      <select
        onChange={(e) => handleChangeLanguage(e.target.value)}
        value={selectedLanguage}
      >
        <option value="">--Choose Timezone--</option>
        {Object.keys(items).map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      {localTime && <h3>Local Time: {localTime}</h3>}
    </div>
  );
};

export default LanguageSelectionComponent;
