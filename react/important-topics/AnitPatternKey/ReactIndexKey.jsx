import { useState } from "react";

const InputContainer = ({ item, keyUsed }) => {
  return (
    <div>
      <p>label: {item}</p>
      <p>Key= {keyUsed}</p>
      <input type="number" />
    </div>
  );
};

const ReactIndexKey = () => {
  const [label, setLabel] = useState([]);

  const handleAddAtBegin = () => {
    // Adding element at the beginning, demonstrating index shifting
    setLabel([label.length + 1, ...label]);
  };
  const handleAddAtEnd = () => {
    setLabel([...label, label.length + 1]);
  };

  return (
    <div>
      <h1>List Rendering with Index as Key</h1>
      <button onClick={handleAddAtBegin}>Add element at beginning</button>
      <button onClick={handleAddAtEnd}>Add element at end</button>

      {label.map((item, index) => (
        <InputContainer item={item} key={index} keyUsed={index} />
      ))}
    </div>
  );
};

export default ReactIndexKey;
