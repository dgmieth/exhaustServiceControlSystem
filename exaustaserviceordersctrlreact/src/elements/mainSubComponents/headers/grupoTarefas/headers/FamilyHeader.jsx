import React from 'react';
import '../../../../../index.css';

function FamilyHeader({familyName,bgColor}){
    return(
        <div className=".container-fluid mx-auto my-auto w-100 text-left" style={{height:'25px',backgroundColor:bgColor,color:'white',textAlign:'left',padding:'0 5px'}}><p><strong>{familyName}</strong></p></div>
    )
}

export default FamilyHeader


