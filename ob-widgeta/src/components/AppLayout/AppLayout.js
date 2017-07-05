import React from 'react';
import PropTypes from 'prop-types';

const AppLayout = ({ outcomes, activeOutcomes, addOutcome, fetching }) => {
  const handleOutcomeClick = ({ target }) => {
    const outcomeId = target.getAttribute('data-outcome');
    if (!isActive(outcomeId)) {
      addOutcome(outcomeId);
    }
  };

  const isActive = (id = null) => {
    return id && activeOutcomes.length > 0 && activeOutcomes.includes(id);
  };

  return (
    <article>
      <h2>Champions League 2018</h2>
      <h3>Winner</h3>
      {(outcomes.length &&
        outcomes.map(outcome =>
          <article key={outcome.id}>
            <button
              onClick={handleOutcomeClick}
              data-outcome={outcome.id}
              disabled={isActive(outcome.id)}
            >{`${outcome.name}-${outcome.price}`}</button>
          </article>
        )) ||
        <span>No outcomes</span>}
        {fetching && <span>fetching...</span>}
    </article>
  );
};

AppLayout.propTypes = {
  fetching: PropTypes.bool,
  activeOutcomes: PropTypes.arrayOf(PropTypes.string),
  outcomes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ),
  addOutcome: PropTypes.func.isRequired,
};

AppLayout.defaultProps = {
  activeOutcomes: [],
  outcomes: [],
  fetching: false,
};

export default AppLayout;
