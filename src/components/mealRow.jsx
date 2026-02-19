function MealRow({ meal }) {
  return (
    <div className="meal-row">

      {/* LEFT SIDE */}
      <div className="meal-left">
        <img src="/meal-icon.png" className="meal-icon" alt="icon" />
        <div className="meal-time">
          {meal.name} {meal.time}
        </div>
      </div>

      {/* MIDDLE */}
      <div className="meal-middle">
        {meal.items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="meal-right">
        <span className="badge">Thursday</span>

        <button className="btn-select">
          Select
        </button>
      </div>

    </div>
  );
}

export default MealRow;
