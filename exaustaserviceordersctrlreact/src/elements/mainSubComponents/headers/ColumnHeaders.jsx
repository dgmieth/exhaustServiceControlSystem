import React,{ useContext } from 'react';
import '../../../index.css';
import { ProtocoloContext } from '../../contexts/ProtocoloContext';


function ColumnHeaders ({sendProtocoloToParent}) {
    const {protocolos,addProtocolo} = useContext(ProtocoloContext)
    const newProtocolo = ()=>{
        var prot = prompt('Novo protocolo')
        addProtocolo(prot)
    }
    
    return (
        <>
            <div className=".container-fluid mx-auto my-auto text-center row" style={{height:`${5}%`,padding: 0,margin:0}}>
                <div className="col-2" style={{backgroundColor: 'rgb(228, 228, 228)',border: 'solid rgb(228, 228, 228) 2px'}}>
                    <div className=".container-fluid mx-auto my-auto text-center row" style={{height:`${5}%`,padding: 0,margin:0}}>
                        <div className="col-8"><strong>Protocolos</strong></div>
                        <div className="col-4 text-center"><a className="btn btn-outline-primary btn-sm" onClick={newProtocolo} style={{padding:'0px 8px'}}>+</a></div>
                    </div>
                </div>
                <div className="col-10" style={{backgroundColor: 'rgb(228, 228, 228)',border: 'solid rgb(228, 228, 228) 2px',padding: 0,margin:0}}>
                    <div className=".container-fluid mx-auto my-auto text-center row" style={{padding: 0,margin:0}}>
                        <div className="col-2" style={{backgroundColor: 'rgb(228, 228, 228)',border: 'solid rgb(228, 228, 228) 2px'}}><strong>Grupo tarefas</strong></div>
                        <div className="col-2" style={{backgroundColor: 'rgb(228, 228, 228)',border: 'solid rgb(228, 228, 228) 2px'}}><strong>Tarefas</strong></div>
                        <div className="col-2" style={{backgroundColor: 'rgb(228, 228, 228)',border: 'solid rgb(228, 228, 228) 2px'}}><strong>Ações</strong></div>
                        <div className="col-6" style={{backgroundColor: 'rgb(228, 228, 228)',border: 'solid rgb(228, 228, 228) 2px'}}><strong>Anotações</strong></div>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default ColumnHeaders