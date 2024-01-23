import React, { useState } from 'react';

const DropdownExample = () => {
  const [selectedText, setSelectedText] = useState('Amazon');

  const changeText = (text) => {
    setSelectedText(text);
  };

  return (
    <div className="dropdown ms-4">
      <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        {selectedText}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li className="dropdown-item" onClick={() => changeText('Amazon')}>Amazon</li>
        <li className="dropdown-item" onClick={() => changeText('Etsy')}>Etsy</li>
        <li className="dropdown-item" onClick={() => changeText('Allegro')}>Allegro</li>
        <li className="dropdown-item" onClick={() => changeText('Trendyol')}>Trendyol</li>
        <li className="dropdown-item" onClick={() => changeText('Emag')}>Emag</li>
        <li className="dropdown-item" onClick={() => changeText('Walmart')}>Walmart</li>
      </ul>
    </div>
  );
};

export default DropdownExample;
