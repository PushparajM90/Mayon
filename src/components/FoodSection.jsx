export function FoodSection({ menuItems, selectedDishIds, onToggleDish }) {
  return (
    <section className="menu-section" id="menu">
      <div className="section-heading">
        <p className="eyebrow">Featured foods</p>
        <h2>Fresh picks for a smooth order</h2>
        <p>
          Choose one dish or build a table-ready basket. Each item carries a
          stable dish ID for future backend and Google Sheets tracking.
        </p>
      </div>

      <div className="food-grid">
        {menuItems.map((item) => {
          const isSelected = selectedDishIds.includes(item.id)

          return (
            <article className="food-card" key={item.id}>
              <div className="food-image">
                <img src={item.image} alt={item.name} loading="lazy" />
                <span>{item.badge}</span>
              </div>
              <div className="food-card-body">
                <div>
                  <p className="dish-id">{item.id}</p>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="food-card-footer">
                  <strong>₹{item.price}</strong>
                  <button
                    type="button"
                    className={isSelected ? 'selected-button' : ''}
                    onClick={() => onToggleDish(item.id)}
                    aria-pressed={isSelected}
                  >
                    {isSelected ? 'Added' : 'Add'}
                  </button>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
