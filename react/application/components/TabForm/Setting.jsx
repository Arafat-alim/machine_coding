const Setting = ({ data, setData, handleSubmit }) => {
  const { theme } = data;
  const handleFormSetting = (e) => {
    setData((prev) => ({ ...prev, theme: e.target.name }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dark">
          <input
            type="radio"
            id="dark"
            name="dark"
            checked={theme === "dark"}
            onChange={handleFormSetting}
          />
          Dark
        </label>
        <br />
        <label htmlFor="light">
          <input
            type="radio"
            id="light"
            name="light"
            checked={theme === "light"}
            onChange={handleFormSetting}
          />
          Light
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Setting;
