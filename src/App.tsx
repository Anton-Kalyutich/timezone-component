import React from 'react';
import './styles.css';
import LanguageSelectionComponent from './LanguageSelectionComponent';

const App: React.FC = () => {
  const items: { [key: string]: string } = {
    "en-US": "America/New_York",
    "en-GB": "Europe/London",
    "pt-BR": "America/Sao_Paulo",
  };

  return (
    <div className="App">
      <LanguageSelectionComponent items={items} />
    </div>
  );
}

export default App;