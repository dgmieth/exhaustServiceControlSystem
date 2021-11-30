import React, { useContext, useState } from 'react';
import '../../../../index.css';
import { TarefaContext } from '../../../contexts/TarefaContext';
import Task from '../../info/tasks/leastElementUnit/Task';

function TarefasInfoHeader () {
    const{tarefas,newTarefa,setNewTarefa,tasksFilter,setTasksFilter}=useContext(TarefaContext)
    var ativas = tarefas.filter(d => {if(d.excluded===0&&d.finished===0){return true}})
    var concluidas = tarefas.filter(d => {if(d.excluded===0&&d.finished===1){return true}})
    var excluidas = tarefas.filter(d => {if(d.excluded===1){return true}})
    console.log(concluidas.length,excluidas.length,ativas.length)
    const ativBGColor = 'rgba(13, 10, 253,1)'
    const concBGcolor = 'rgba(253, 126, 20,1)'
    const excBGColor = 'rgba(220, 53, 69,1)'

    return (
        <div id="groupTasks" className="col-2" style={{height: '100%!important',border:'solid rgb(228, 228, 228) 2px',overflowY: 'auto',padding: 0,margin:0}}>
            {ativas.map((p,index) => (
                <>
                    {index === 0 ?
                        <div key="protocolosAtivosHeader" className="col-12 w-100 .container-fluid" style={{padding: '0',margin:'0',}}>
                                <div className=".container-fluid" style={{height: '28px', padding: '1px 0px 0 7px',margin:'8px 5px 5px 5px',textAlign:'start',fontWeight:700,border:'solid rgb(255, 255, 255) 1px', backgroundColor: ativBGColor,color:'white',fontSize:'1.0rem'}}>
                                Ativas
                            </div>    
                        </div>    
                        : 
                        <></>
                    }
                    <Task key={'tasksAtivas_ID'+index} task={p.value}/>
                </>
            ))}
            {concluidas.length > 0 
            }
            {concluidas.map((p,index) => (
                <>
                    {index === 0 ? 
                    <div key="protocolosAtivosHeader" className="col-12 w-100 .container-fluid" style={{padding: '0',margin:'0',}}>
                        <div className=".container-fluid" style={{height: '28px', padding: '1px 0px 0 7px',margin:'8px 5px 5px 5px',textAlign:'start',fontWeight:700,border:'solid rgb(255, 255, 255) 1px', backgroundColor: concBGcolor,color:'white',fontSize:'1.0rem'}}>
                        Concluidas
                        </div>    
                    </div>    
                    : <></>
                    }
                    <Task key={'tasksAtivas_ID'+index} task={p.value}/>
                </>
            ))}
            {excluidas.map((p,index) => (
                <>
                {index === 0 ? 
                <div key="protocolosAtivosHeader" className="col-12 w-100 .container-fluid" style={{padding: '0',margin:'0',}}>
                    <div className=".container-fluid" style={{height: '28px', padding: '1px 0px 0 7px',margin:'8px 5px 5px 5px',textAlign:'start',fontWeight:700,border:'solid rgb(255, 255, 255) 1px', backgroundColor: excBGColor,color:'white',fontSize:'1.0rem'}}>
                    Excluidas
                    </div>    
                </div>    
                : <></>
                }
                <Task key={'tasksAtivas_ID'+index} task={p.value}/>
                </>
            ))}

        </div>
    )
}

export default TarefasInfoHeader