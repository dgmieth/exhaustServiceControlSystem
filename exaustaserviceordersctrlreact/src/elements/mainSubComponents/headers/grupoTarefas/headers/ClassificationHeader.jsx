import React from 'react';
import '../../../../../index.css';

function ClassificationHeader({classificationName,bgColor}){
    return(
        <div className=".container-fluid mx-auto my-auto w-100 text-left" style={{height:'25px',backgroundColor:bgColor,color:'white',textAlign:'left',padding:'0 15px'}}><p><strong>{classificationName}</strong></p></div>
    )
}

export default ClassificationHeader







