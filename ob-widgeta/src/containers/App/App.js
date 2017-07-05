import { connect } from 'react-redux';

import { fetching } from '../../data/ui/selectors';
import { outcomesSelector, allActiveOutcomesSelector } from '../../data/outcomes/selectors';
import { addOutcome } from '../../data/outcomes/actions';
import AppLayout from '../../components/AppLayout/AppLayout';

const mapStateToProps = state => ({
  outcomes: outcomesSelector(state),
  activeOutcomes: allActiveOutcomesSelector(state),
  fetching: fetching(state),
});

const mapDispatchToProps = {
  addOutcome,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
