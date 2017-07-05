import { connect } from 'react-redux';

import { isFetching } from '../../data/ui/selectors';
import { allOutcomesSelector, activeOutcomesSelector } from '../../data/outcomes/selectors';
import { addOutcome } from '../../data/outcomes/actions';
import AppLayout from '../../components/AppLayout/AppLayout';

const mapStateToProps = state => ({
  allOutcomes: allOutcomesSelector(state),
  activeOutcomes: activeOutcomesSelector(state),
  isFetching: isFetching(state),
});

const mapDispatchToProps = {
  addOutcome,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
