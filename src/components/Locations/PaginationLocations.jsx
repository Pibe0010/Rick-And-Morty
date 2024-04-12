import { Button } from "../Button.jsx";

export const PaginationLocations = ({
  numberPages,
  addBackPage,
  addNextPage,
}) => {
  return (
    <section className="btn-page">
      <Button
        page={numberPages}
        onClick={addBackPage}
        disabled={numberPages === 1}>
        {numberPages > 1 ? `Page ${numberPages - 1}` : "Initial"}
      </Button>
      <Button
        page={numberPages}
        onClick={addNextPage}
        disabled={numberPages === 4}>
        {numberPages < 7 ? `Page ${numberPages + 1}` : "Finally"}
      </Button>
    </section>
  );
};
