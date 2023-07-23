const PersDetails = ({ onChangeDetails }) => {
  return (
    <>
      <label>
        Pet’s name
        <input
          onChange={onChangeDetails}
          type="text"
          name="name"
          placeholder="Type name pet"
        />
      </label>
      <label>
        Date of birth
        <input
          onChange={onChangeDetails}
          type="text"
          name="date"
          placeholder="Type date of birth"
        />
      </label>
      <label>
        Type
        <input
          onChange={onChangeDetails}
          type="text"
          name="type"
          placeholder="Type of pet"
        />
      </label>
    </>
  );
};

export default PersDetails;
