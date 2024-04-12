export const FilterStatus = ({ value, onChange }) => {
  return (
    <select className="filters" value={value} onChange={onChange}>
      <option value="">Status</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  );
};
