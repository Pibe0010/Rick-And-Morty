export const FilterGender = ({ value, onChange }) => {
  return (
    <select className="filters" value={value} onChange={onChange}>
      <option value="">Gender</option>
      <option value="female">Female</option>
      <option value="male">Male</option>
      <option value="genderless">Genderless</option>
      <option value="unknown">Unknown</option>
    </select>
  );
};
