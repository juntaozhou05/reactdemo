import {connect} from 'react-redux';
import Test from "../components/Test.js"  

const mapStateToProps = (state) => ({  
    value: state.count  
}) 


const TestCon = connect(  
    mapStateToProps,  
)(Test)  
  
export default TestCon;