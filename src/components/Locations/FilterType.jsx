export const FilterType = ({ value, onChange }) => {
  return (
    <select className="filters" value={value} onChange={onChange}>
      <option value="">Type</option>
      <option value="planet">Planet</option>
      <option value="space station">Space station</option>
      <option value="unknown">Unknown</option>
      <option value="fantasy town">Fantasy town</option>
      <option value="dream">Dream</option>
      <option value="dimension">Dimension</option>
      <option value="resort">Resort</option>
      <option value="microverse">Microverse</option>
      <option value="customs">Customs</option>
      <option value="daycare">Daycare</option>
      <option value="dwarf planet (Celestial Dwarf)">
        Dwarf planet (Celestial Dwarf)
      </option>
      <option value="miniverse">Miniverse</option>
      <option value="Teenyverse">Teenyverse</option>
      <option value="box">Box</option>
      <option value="spacecraft">Spacecraft</option>
      <option value="machine">Machine</option>
      <option value="artificially generated world">
        Artificially generated world
      </option>
      <option value="arcade">Arcade</option>
      <option value="spa">Spa</option>
      <option value="quadrant">Quadrant</option>
      <option value="quasar">Quasar</option>
      <option value="mount">Mount</option>
      <option value="liquid">Liquid</option>
      <option value="convention">Convention</option>
      <option value="woods">Woods</option>
      <option value="diegesis">Diegesis</option>
      <option value="nightmare">Nightmare</option>
      <option value="non-diegetic alternative reality">
        Non-Diegetic Alternative Reality
      </option>
      <option value="asteroid">Asteroid</option>
      <option value="acid Plant">Acid Plant</option>
      <option value="reality">Reality</option>
      <option value="spacecraft">Spacecraft</option>
      <option value="death star">Death Star</option>
      <option value="elemental rings">Elemental Rings</option>
      <option value="human">Human</option>
      <option value="police department">Police Department</option>
      <option value="human">Human</option>
      <option value="country">Country</option>
      <option value="consciousness">Consciousness</option>
      <option value="memory">Memory</option>
    </select>
  );
};
