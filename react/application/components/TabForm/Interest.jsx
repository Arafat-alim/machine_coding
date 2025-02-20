import React from "react";

const Interest = ({ data, setData }) => {
  const { interests } = data;
  const handleInterestFormData = (e) => {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div>
      <form>
        <label htmlFor="coding">
          <input
            type="checkbox"
            id="coding"
            name="coding"
            checked={interests?.includes("coding")}
            onChange={handleInterestFormData}
          />
          Coding
        </label>
        <br />
        <label htmlFor="music">
          <input
            type="checkbox"
            id="music"
            name="music"
            checked={interests?.includes("music")}
            onChange={handleInterestFormData}
          />
          Music
        </label>
        <br />
        <label htmlFor="cricket">
          <input
            type="checkbox"
            id="cricket"
            name="cricket"
            checked={interests?.includes("cricket")}
            onChange={handleInterestFormData}
          />
          Cricket
        </label>
      </form>
    </div>
  );
};

export default Interest;
