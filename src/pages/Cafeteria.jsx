import meals from "../data/meals";
import MealRow from "../components/MealRow";

function Cafeteria() {
  return (
    <div>

      {/* PAGE HEADER */}
      <div className="page-header">
        <h3 className="page-title">Cafeteria</h3>

        <div className="page-info">
          19-Feb-2026 · Today · Ground Floor
        </div>
      </div>

      {/* QR STRIP */}
      <div className="qr-strip">
        <div>
          🍽️ Do you want to generate a reusable permanent QR code?
        </div>

        <div>
          <button className="btn-outline">
            Show my reusable QR code
          </button>

          <button className="btn-green">
            Regenerate my reusable QR code
          </button>
        </div>
      </div>

      {/* MEALS */}
      <div className="meals-wrapper">
        {meals.map((meal) => (
          <MealRow key={meal.id} meal={meal} />
        ))}
      </div>

    </div>
  );
}

export default Cafeteria;
