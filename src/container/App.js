import {connect} from 'react-redux';  
import Counter from '../components/Counter';  
import {increaseAction, decreaseAction, increaseActionOn, increaseActionOff} from '../store/action/index.js';  
  
const mapStateToProps = (state) => ({  
    value: state.setCounter.count  
})  
  
const mapDispatchToProps = (dispatch) => ({  
    onIncreaseClick: () => dispatch(increaseAction),  
    onDecreaseClick: () => dispatch(decreaseAction) ,
    onIncreaseClickOn: () => dispatch(increaseActionOn),  
    onDecreaseClickOff: () => dispatch(increaseActionOff) ,
})  
  
const App = connect(  
    mapStateToProps,  
    mapDispatchToProps  
)(Counter)  
  
export default App;