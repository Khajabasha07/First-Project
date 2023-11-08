
import React, {useState} from 'react'

import Button from './button'


function ProductDetails(props){
    let badgeClass = 'badge-margin badge '
    badgeClass += props.isAvailable ? 'bg-success':'bg-danger'
    let [count, updateCount] = useState(0)
    let incrementEventHandler = function(){
        updateCount(++count)
        console.log(count)
    }
    let decrementEventHandler = function(){
        updateCount(--count)
        console.log(count)
    }
    return(
        <div className="d-flex align-items-cente justify-content-start mt-1">
                    <h6 className="font-weight-bold my-2" style={{'margin-right':30}}>{props.price}</h6>
                    <Button eventHandler = {decrementEventHandler}>-</Button>
                    <span style={{padding:'8px 14px', 'font-size':13}}>{count}</span>
                    <Button eventHandler = {incrementEventHandler}>+</Button>
                    <span className={badgeClass}>{props.isAvailable?'Available':'Not Available'}</span>
                </div>
    )
}

export default ProductDetails;