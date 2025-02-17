import { useState } from "react";

const SortingAndSearchableList = () => {
  const users = [
    { id: 1, name: "Arafat", age: 24 },
    { id: 2, name: "Asif", age: 14 },
    { id: 3, name: "Imran", age: 34 },
    { id: 4, name: "Ganga", age: 54 },
    { id: 5, name: "Varun", age: 94 },
    { id: 6, name: "Iyer", age: 11 },
    { id: 7, name: "Mahboob", age: 4 },
    { id: 8, name: "Kanish", age: 2 },
  ];
  const [userData, setUserData] = useState(() => users);
  const [inputText, setInputText] = useState("");
  const [sortedBy, setSortedBy] = useState(null);
  const [sortedOrder, setSortedOrder] = useState(null);

  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  const handleSort = (field) => {
    if (sortedBy === field) {
      setSortedOrder(sortedOrder === "asc" ? "desc" : "asc");
    } else {
      setSortedBy(field);
      setSortedOrder("asc");
    }
  };

  const sortedUser = [...userData].sort((a, b) => {
    if (!sortedBy) return 0;

    const orderMultiplier = sortedOrder === "asc" ? 1 : -1;

    if (sortedBy === "name") {
      return a.name.localeCompare(b.name) * orderMultiplier;
    } else if (sortedBy === "age") {
      return (a.age - b.age) * orderMultiplier;
    }
  });

  const Users = () => {
    const filteredUser = sortedUser.filter((user) =>
      user.name.toLowerCase().includes(inputText.toLowerCase())
    );

    return (
      <ul>
        {filteredUser.map((user) => (
          <li key={user.id}>
            Name: {user.name}, Age: {user.age}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div>
      <h1>Searching Sorting</h1>
      <button onClick={() => handleSort("name")}>SortBy Name</button>
      <button onClick={() => handleSort("age")}>SortBy Age</button>
      <input type="text" value={inputText} onChange={handleInputText} />
      <Users />
    </div>
  );
};

export default SortingAndSearchableList;
