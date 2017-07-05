import { connect } from 'react-redux';

// import { placeBet } from 'ob-sdk';

import { isFetching } from '../../data/ui/selectors';
import { outcomesSelector } from '../../data/outcomes/selectors';
import { deleteOutcome, deleteAllOutcomes } from '../../data/outcomes/actions';
import AppLayout from '../../components/AppLayout/AppLayout';

const mapStateToProps = state => ({
  outcomes: outcomesSelector(state),
  isFetching: isFetching(state),
});

const mapDispatchToProps = {
  deleteOutcome,
  deleteAllOutcomes,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
