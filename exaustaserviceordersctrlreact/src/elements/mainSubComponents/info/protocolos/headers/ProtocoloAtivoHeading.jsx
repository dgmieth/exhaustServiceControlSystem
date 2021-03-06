import React from 'react';
import '../../../../../index.css';

function ProtocoloAtivoHeading({protocolos}){
    const lengthGreaterThanZero = protocolos.length > 0 ? true : false
      return (
          <>
            {lengthGreaterThanZero ? 
                <div key="protocolosAtivosHeader" className="col-12 w-100 .container-fluid" style={{padding: '0',margin:'0',}}>
                    <div className=".container-fluid" style={{height: '35px', padding: '1px 0px 0 7px',margin:'8px 5px 5px 5px',textAlign:'start',fontWeight:700,border:'solid rgb(255, 255, 255) 1px', backgroundColor: 'rgba(13, 10, 253,1)',color:'white',fontSize:'1.2rem'}}>
                    Ativos
                    </div>    
                </div>
            : 
                <>
                </>
            }
          </>
        
    )
}

export default ProtocoloAtivoHeading