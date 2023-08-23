import React, { useState } from 'react';
import Input from './input';
import Button from './button';
import Card from './card';
import Select from './select';
import Table from './table';

function App() {
  
  const tableData = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
  ];

  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <h1>React Dynamic Components Example</h1>

      <Input value={inputValue} onChange={handleInputChange} />

      <Button
        label="Click Me"
        onClick={() => alert('Button Clicked!')}
      />

      <Card title="Card Title" content="Card Content" />

      <Select
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        value={selectedOption}
        onChange={handleSelectChange}
      />

      <Table data={tableData} />
    </div>
  );
}

export default App;