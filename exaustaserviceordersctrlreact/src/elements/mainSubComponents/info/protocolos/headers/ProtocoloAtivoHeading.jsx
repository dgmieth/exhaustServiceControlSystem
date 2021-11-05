import React from 'react';
import '../../../../../index.css';

function ProtocoloAtivoHeading({protocolos}){
    const lengthGreaterThanZero = protocolos.length > 0 ? true : false
    console.log(protocolos.length)    
      return (
          <>
            {lengthGreaterThanZero ? 
                <div key="protocolosAtivosHeader" className="col-12 w-100 .container-fluid text-center" style={{padding: 0,margin:0,textAlign:'start',fontWeight:700,border:'solid rgb(255, 255, 255) 1px', backgroundColor: 'rgba(13, 10, 253,1)',color:'white'}}>Ativos</div>
            : 
                <>
                </>
            }
          </>
        
    )
}

export default ProtocoloAtivoHeading