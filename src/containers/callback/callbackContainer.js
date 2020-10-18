import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setToken } from '../../state/actions/token';
import { fetchUser } from '../../state/actions/user';
import CallBack from './callback';

const mapStateToProps = state => ({
  token: state.token ? state.token.token : '',
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		setToken,
		fetchUser
	}, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(CallBack);