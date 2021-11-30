import React from 'react';
import { useContext } from 'react';
import '../../../../../index.css';
import Global from '../../../../GlobalVariables'
import { TarefaContext } from '../../../../contexts/TarefaContext';

function GroupTarefaHeader({name,action,grouping,type,selectedProtocolo,bgColor,motalType,setModalType}){
    const{tarefas,newTarefa,setNewTarefa,tasksFilter,setTasksFilter}=useContext(TarefaContext)
    const showButtons = selectedProtocolo === null ? false : selectedProtocolo.concluido === 1 ? false : true
    const showModal = () => {
        var globalVar = null
        if(type==='preSabe'){
            globalVar = Global.preSabe[grouping][action]
        }else if (type==='sabe'){
            globalVar = Global.sabe[grouping][action]
        }else {
            globalVar = Global.posSabe[grouping][action]
        }
        setModalType({
            type:'newTask',
            taskType:globalVar,
            protId:selectedProtocolo.id,
            add:setNewTarefa
        })
        setFilter()
    }
    const selectGroupTarefa = ()=>{setFilter()}
    const setFilter = ()=>{
        setTasksFilter({filter: Global[type][grouping][action],
                        protId:selectedProtocolo.id})
    }
    var selectedBold = '400'
    if(tasksFilter!=null){
        if(tasksFilter.filter===Global[type][grouping][action]){
            selectedBold = '700'
        }
    }
    return (
        <div className=".container-fluid mx-auto my-auto w-100 text-left row" style={{height:'25px',backgroundColor:bgColor,color:'black',textAlign:'left',padding:'0 15px',fontWeight:selectedBold}}>
            <div className='h-100 col-8'>
                <a onClick={selectGroupTarefa} style={{cursor:'pointer'}}>{name}</a>
            </div>
                <div className='h-100 col-4'>
                    {showButtons ?
                        <button className="btn"  data-toggle="modal" data-target="#exampleModal" style={{padding:'0 7px',cursor:'pointer',margin:0}} onClick={showModal}>+</button>
                    :
                     <>
                     </>
                    }
                </div>
            </div>
    )
}
export default GroupTarefaHeader
