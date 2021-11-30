import React, {useContext} from 'react';
import '../../../../index.css';
import ListaDeProtocolos from '../../info/protocolos/ListaDeProtocolos';

function ProtocolosInfoHeader ({selectProtocolo,selectedProtocolo,modalType,setModalType}) {
    
    return (
        <div id="groupProt" className="col-2 .container-fluid h-100" style={{height: '100%!important',border:'solid rgb(228, 228, 228) 2px',overflowY: 'auto',padding:0}}>
            <ListaDeProtocolos selectProtocolo={selectProtocolo} selectedProtocolo={selectedProtocolo} modalType={modalType} setModalType={setModalType}/>
        </div>
    )
}

export default ProtocolosInfoHeader