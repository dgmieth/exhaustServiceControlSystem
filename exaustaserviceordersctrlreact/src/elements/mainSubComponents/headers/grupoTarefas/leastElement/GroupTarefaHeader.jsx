import React from 'react';
import '../../../../../index.css';
import Global from '../../../../GlobalVariables'

function GroupTarefaHeader({name,selectedProtocolo,bgColor}){
    const showButtons = selectedProtocolo === null ? false : selectedProtocolo.concluido === 1 ? false : true
    const printInfo = () => {
        console.log(name,selectedProtocolo)
        console.log(Global.sabe)
    }
    const selectGroupTarefa = ()=>{
        console.log('selected')
    }
    return (
        <div className=".container-fluid mx-auto my-auto w-100 text-left row" style={{height:'25px',backgroundColor:bgColor,color:'black',textAlign:'left',padding:'0 15px'}}>
            <div className='h-100 col-8'>
                <a onClick={selectGroupTarefa} style={{cursor:'pointer'}}>{name}</a>
            </div>
                <div className='h-100 col-4'>
                    {showButtons ?
                        <button className="btn" style={{padding:'0 7px',cursor:'pointer',margin:0}} onClick={printInfo}>+</button>
                    :
                     <>
                     </>
                    }
                </div>
            </div>
    )
}
export default GroupTarefaHeader
