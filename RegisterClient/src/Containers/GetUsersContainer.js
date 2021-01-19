import { connect } from 'react-redux';
import ShowUsers from '../Components/ShowUsers';

const mapStateToProps = state => ({
    userList: state.userList
})

export default connect(mapStateToProps)(ShowUsers)