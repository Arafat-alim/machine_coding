import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ReactUniqueKey = () => {
  const [label, setLabel] = useState([]);
  const handleAtElementAtFront = () => {
    setLabel([{ id: uuidv4(), label: label.length + 1 }, ...label]);
  };
  const handleAtElementAtEnd = () => {
    setLabel([...label, { id: uuidv4(), label: label.length + 1 }]);
  };
  return (
    <div>
      <button onClick={handleAtElementAtEnd}>At Element at the end</button>
      <button onClick={handleAtElementAtFront}>At Element at the front</button>
      {label.map((item) => (
        <InputContainer label={item.label} keyUsed={item.id} key={item.id} />
      ))}
    </div>
  );
};

const InputContainer = ({ label, keyUsed }) => {
  return (
    <div>
      <p>Label: {label}</p>
      <p>keyUsed: {keyUsed}</p>
      <input type="number" />
    </div>
  );
};

export default ReactUniqueKey;
