import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state){
    return{
        posts : state.posts,
        comments : state.comments
    }
}

//pass all action creators as props

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);

}

//connect : inject data from the store at what level we need 
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;