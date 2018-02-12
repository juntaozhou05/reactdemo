import React from 'react';  
// import PropTypes from 'prop-types';
import TestCon from "../container/TestCon.js"
  
class Counter extends React.Component {  
    render() {  
        const { onIncreaseClick,onDecreaseClick} = this.props 
        return (  
            <div>  
                <TestCon />
                <br />  
                <button type="button" onClick={onIncreaseClick}>Increase</button>  
                <button type="button" onClick={onDecreaseClick}>Decrease</button> 
            </div>  
        )  
    }  
}  
  
// Counter.propTypes = {  
//     value: PropTypes.number.isRequired,  
//     onIncreaseClick: PropTypes.func.isRequired,  
//     onDecreaseClick: PropTypes.func.isRequired,
// }  
  
export default Counter; 