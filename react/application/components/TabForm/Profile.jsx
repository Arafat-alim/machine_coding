const Profile = ({ data, setData }) => {
  const { name, age, email } = data;

  const handleProfileForm = (e, name) => {
    setData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  return (
    <div className="name-form">
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => handleProfileForm(e, "name")}
        />
        <br />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={(e) => handleProfileForm(e, "age")}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => handleProfileForm(e, "email")}
        />
      </form>
    </div>
  );
};

export default Profile;
