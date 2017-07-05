import { connect } from 'react-redux';

// import { placeBet } from 'ob-sdk';

import { isFetching } from '../../data/ui/selectors';
import { outcomesSelector } from '../../data/outcomes/selectors';
import { removeOutcome, removeAllOutcomes } from '../../data/outcomes/actions';
import AppLayout from '../../components/AppLayout/AppLayout';

const mapStateToProps = state => ({
  outcomes: outcomesSelector(state),
  isFetching: isFetching(state),
});

const mapDispatchToProps = {
  removeOutcome,
  removeAllOutcomes,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
