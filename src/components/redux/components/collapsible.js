import React from 'react';

const Collapsible = function(props){
    return(
        <>
        {props.isOpen?props.children:null}
        </>
    )
}

export default Collapsible;