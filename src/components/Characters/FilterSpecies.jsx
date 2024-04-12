export const FilterSpecies = ({ value, onChange }) => {
  return (
    <select className="filters" value={value} onChange={onChange}>
      <option value="">Species</option>
      <option value="human">Human</option>
      <option value="alien">Alien</option>
      <option value="unknown">Unknown</option>
    </select>
  );
};
