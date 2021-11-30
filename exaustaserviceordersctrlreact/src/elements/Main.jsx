import React from 'react';
import { useState, useEffect } from 'react';
import '../index.css';
import AcoesInfoHeader from './mainSubComponents/headers/acoes/AcoesInfoHeader';
import AnotacoesInfoHeader from './mainSubComponents/headers/anotacoes/AnotacoesInfoHeader';
import ColumnHeaders from './mainSubComponents/headers/ColumnHeaders';
import GrupoTarefasInfoHeader from './mainSubComponents/headers/grupoTarefas/GrupoTarefasInfoHeader';
import ProtocolosInfoHeader from './mainSubComponents/headers/protocolos/ProtocolosInfoHeader';
import TarefasInfoHeader from './mainSubComponents/headers/tarefas/TarefasInfoHeader';
import {ProtocoloContext} from './contexts/ProtocoloContext'
import {TarefaContext} from './contexts/TarefaContext'
import ModalUserOrInfo from './modals/ModalUserOrInfo'

function Main () {
    const method = 'POST'
    const headers = {'Content-type':'application/json'}
    /* =============================================================
                                PROTOCOLOS
       =============================================================
    */
    const[protocolos, setProtocolos] = useState([])
    const[addedDeletedProtocolo,addOrDelProtocolos] = useState('')
    const[updatedProtInformation,updateProtInformation] = useState('')
    const[selectedProtocolo, selectProtocolo] = useState(null)
    const addProtocolo = (value)=>{    
        addOrDelProtocolos(value)
    }
    const addUser = (value) => {
        updateProtInformation(value)
    }
    const addNote = (value) => {
        updateProtInformation(value)
    }
    const resetProtocolos = (value)=>{
        var protsR = []
        value.forEach(m => {
            protsR.push({prot: m.protocolos, 
                        id:m.id, concluido:m.concluido,excluido:m.excluido,just:m.excluidojustification,
                        people:m.people, observation:m.observation,insertedin:m.insertedin})
        })
        setProtocolos([...protsR]);
        addOrDelProtocolos('')
    }
    const delProtocolo = (value)  => {
        if(value.just===null||value.just===''){
            return
        }
        addOrDelProtocolos(`del_${value.id}_${value.just}`)
    }
    //updating protocolos
    useEffect(()=>{
        if(addedDeletedProtocolo===''){
            addOrDelProtocolos('')
            return
        }else if(addedDeletedProtocolo.match(/del_/)){
            fetch('/delProt',{method:method,headers:headers,body:JSON.stringify({id: addedDeletedProtocolo.split('_')[1],just:addedDeletedProtocolo.split('_')[2]})})
            .then(answer => answer.json())
            .then(response => {resetProtocolos(response)})
            .catch(err => {console.log(err)})
        }else {
            fetch('/insertProt',{method:method,headers:headers, body:JSON.stringify({prot:addedDeletedProtocolo})})
            .then(answer => answer.json())
            .then(response => {resetProtocolos(response)})
            .catch(err => {console.log(err)})
        }
    },[addedDeletedProtocolo])
    useEffect(()=>{
        if(updatedProtInformation.type==='addUser'){
            fetch('/insertInfoProt',{method:method,headers:headers,body:JSON.stringify(updatedProtInformation)})
            .then(answer => answer.json())
            .then(response => {resetProtocolos(response)})
            .catch(err => {console.log(err)})
        }else if(updatedProtInformation.type==='addNote'){
            fetch('/insertInfoProt',{method:method,headers:headers,body:JSON.stringify(updatedProtInformation)})
            .then(answer => answer.json())
            .then(response => {resetProtocolos(response)})
            .catch(err => {console.log(err)})
        }else if(updatedProtInformation.type==='delUser'){
            fetch('/delInfoProt',{method:method,headers:headers,body:JSON.stringify(updatedProtInformation)})
            .then(answer => answer.json())
            .then(response => {resetProtocolos(response)})
            .catch(err => {console.log(err)})
        }else if(updatedProtInformation.type==='delNote'){
            fetch('/delInfoProt',{method:method,headers:headers,body:JSON.stringify(updatedProtInformation)})
            .then(answer => answer.json())
            .then(response => {resetProtocolos(response)})
            .catch(err => {console.log(err)})
        }else if(updatedProtInformation.type==='finishProt'){
            fetch('/delInfoProt',{method:method,headers:headers,body:JSON.stringify(updatedProtInformation)})
            .then(answer => answer.json())
            .then(response => {resetProtocolos(response)})
            .catch(err => {console.log(err)})
        }
        updateProtInformation('')
    },[updatedProtInformation])
    //getting inicial list of protocolos
    useEffect(()=> {
        fetch('http://localhost:3001')
        .then(answer => answer.json())
        .then(response => {{resetProtocolos(response)}})
        .catch(err => {console.log(err)})
    },[])
    /* =============================================================
                                TAREFAS
       =============================================================
    */
       const[tarefas, setTarefas] = useState([])
       const[newTarefa, setNewTarefa] = useState(null)
       const[tasksFilter,setTasksFilter] = useState(null)
       useEffect(()=>{
           if(newTarefa===null){ return }
            fetch('/tasks',{method:method,headers:headers,body:JSON.stringify(newTarefa)})
            .then(answer => answer.json())
            .then(response => {setTasksFilter({protId:parseInt(newTarefa.protId),taskType:newTarefa.taskType})})
            .catch(err => {console.log(err)})
       },[newTarefa])
       useEffect(()=> {
            if(tasksFilter===null){ return }
            fetch(`/tasks?protId=${tasksFilter.protId}`)
            .then(answer => answer.json())
            .then(response => {{setNewTarefa(null);setTarefas(response.data.filter(d=>{if(d.grouptasks_fk===tasksFilter.filter){return true}}));}})
            .catch(err => {console.log(err)})
        },[tasksFilter])
    /* =============================================================
                                MODALS
       =============================================================
    */   
       const [modalType, setModalType] = useState('none')
    return (
        <div className=".container-fluid mx-auto my-auto main-background-color" style={{height: `${91}%`}}>
                <div className=".container-fluid mx-auto my-auto w-100" style={{height: `${5}%`}}>
                    <div className="row mx-auto my-auto h-100 w-100">
                        <div className="col-2 h4"><strong>Protocolo:</strong></div>
                        <div className="col-10 h4 text-left">{selectedProtocolo===null?'':selectedProtocolo.prot}</div>
                    </div>
                </div>
                <ProtocoloContext.Provider value={{protocolos,addProtocolo,delProtocolo,addUser,addNote}}>
                <ModalUserOrInfo type={modalType} />
                <div className=".container-fluid mx-auto my-auto text-center w-100" style={{height: `${95}%`}}>
                    <div className=".container-fluid row mx-auto my-auto h-100 w-100">
                        <div className=".container-fluid mx-auto my-auto w-100" style={{height: `${100}%`,padding: 0,margin:0}}>
                            <ColumnHeaders sendProtocoloToParent={addProtocolo} />
                            <div className=".container-fluid mx-auto my-auto text-center row w-100" style={{height: `${95}%`,padding: 0,margin:0}}>
                                <TarefaContext.Provider value={{tarefas,setTarefas,newTarefa,setNewTarefa,tasksFilter,setTasksFilter}}>
                                    <ProtocolosInfoHeader selectProtocolo={selectProtocolo} selectedProtocolo={selectedProtocolo} modalType={modalType} setModalType={setModalType} />
                                    <div className="col-10 h-100" style={{padding: 0,margin:0}}>
                                        <div className=".container-fluid mx-auto my-auto text-center row h-100" style={{padding: 0,margin:0}}>
                                            <GrupoTarefasInfoHeader selectedProtocolo={selectedProtocolo} modalType={modalType} setModalType={setModalType} />
                                            <TarefasInfoHeader />
                                            <AcoesInfoHeader />
                                            <AnotacoesInfoHeader />
                                        </div>
                                    </div>
                                </TarefaContext.Provider>
                            </div>
                        </div>
                    </div>
                </div>
                </ProtocoloContext.Provider>
            </div>
    )
}

export default Main