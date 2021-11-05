import React from 'react';
import '../../../../../index.css';

function ProtocoloExcluidosHeading({protocolos}){
    const lengthGreaterThanZero = protocolos.length > 0 ? true : false
    console.log(protocolos.length)    
      return (
          <>
            {lengthGreaterThanZero ? 
                <div key="protocolosExcluidosHeader" className="col-12 w-100 .container-fluid text-center" style={{padding: 0,margin:0,textAlign:'start',fontWeight:700,border:'solid rgb(255, 255, 255) 1px', backgroundColor: 'rgba(220, 53, 69,1)',color:'white'}}>Excluídos</div>
            : 
                <>
                </>
            }
          </>
        
    )
}

export default ProtocoloExcluidosHeading