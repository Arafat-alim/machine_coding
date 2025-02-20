import { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Setting from "./Setting";
import "./TabForm.css";

const TabForm = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interests: [],
    theme: "dark",
  });

  const tabs = [
    { id: 1, name: "Profile", component: Profile },
    { id: 2, name: "Interest", component: Interest },
    { id: 3, name: "Setting", component: Setting },
  ];

  const ActiveTabComponent = tabs[tabIndex].component;
  const handleNext = () => {
    setTabIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setTabIndex((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Called__");
  };
  return (
    <div>
      <div className="heading-container">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className="heading"
            onClick={() => setTabIndex(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent
          data={data}
          setData={setData}
          handleSubmit={handleSubmit}
          //   className={`${tabIndex === index ? "active" : ""}`}
        />
      </div>
      <div>
        <button disabled={tabIndex === 0} onClick={handlePrev}>
          Prev
        </button>
        <button disabled={tabIndex === tabs.length - 1} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TabForm;
