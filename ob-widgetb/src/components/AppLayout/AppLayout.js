import React from 'react';
import PropTypes from 'prop-types';

const AppLayout = ({ outcomes, removeOutcome, removeAllOutcomes, isFetching }) => {
  const handleRemoveOutcome = ({ target }) => {
    const outcomeId = target.getAttribute('data-outcome');
    removeOutcome(outcomeId);
  };

  return (
    <article>
      <h2>Betslip</h2>
      <button onClick={removeAllOutcomes} disabled={!outcomes.length}>Clear Slip</button>
      {(outcomes.length &&
        outcomes.map(outcome =>
          <article key={outcome.id}>
            <span>{outcome.name}</span>
            <button onClick={handleRemoveOutcome} data-outcome={outcome.id}>x</button>
          </article>
        )) ||
        <div>Empty slip</div>}
        {isFetching && <div>fetching...</div>}
    </article>
  );
};

AppLayout.propTypes = {
  isFetching: PropTypes.bool,
  outcomes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ),
  removeOutcome: PropTypes.func.isRequired,
};

AppLayout.defaultProps = {
  outcomes: [],
  isFetching: false,
};

export default AppLayout;
