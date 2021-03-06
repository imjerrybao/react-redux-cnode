import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { footerClick, logout, fetchTopicContent, fetchUserInfo } from '../actions/actionCreators';
import ProfilePage from '../components/ProfilePage';

function mapStateToProps(state) {
    return {
        profile: state.profilePage,
        footer: state.footer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        footerClick: bindActionCreators(footerClick, dispatch),
        logout: bindActionCreators(logout, dispatch),
        fetchTopicContent: bindActionCreators(fetchTopicContent, dispatch),
        fetchUserInfo: bindActionCreators(fetchUserInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)