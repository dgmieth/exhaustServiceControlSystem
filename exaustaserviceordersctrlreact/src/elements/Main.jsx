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

function Main () {
    const method = 'POST'
    const headers = {'Content-type':'application/json'}
    const[protocolos, setProtocolos] = useState([])
    const[addedDeletedProtocolo,addOrDelProtocolos] = useState('')
    const[addedDeletedUser,addOrDelUser] = useState('')
    const[addedDeletedNote,addOrDelNote] = useState('')
    const[selectedProtocolo, selectProtocolo] = useState(null)
    const addProtocolo = (value)=>{    
        addOrDelProtocolos(value)
    }
    const addUser = (value) => {
        addOrDelUser(value)
    }
    const addNote = (value) => {
        addOrDelNote(value)
    }
    const resetProtocolos = (value)=>{
        console.log('resetProtocolos', value)
        var protsR = []
        value.forEach(m => {
            protsR.push({prot: m.protocolos, 
                        id:m.id, concluido:m.concluido,excluido:m.excluido,just:m.excluidojustification,
                        people:m.people, observation:m.observation})
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
            fetch('/insertProt',{method:method,headers:headers, body:JSON.stringify(addedDeletedProtocolo)})
            .then(answer => answer.json())
            .then(response => {resetProtocolos(response)})
            .catch(err => {console.log(err)})
        }
    },[addedDeletedProtocolo])
    useEffect(()=>{
        console.log(addedDeletedNote)
        console.log(addedDeletedUser)
        if(addedDeletedUser.type==='addUser'){
            fetch('/insertInfoProt',{method:method,headers:headers,body:JSON.stringify(addedDeletedUser)})
            .then(answer => answer.json())
            .then(response => {resetProtocolos(response)})
            .catch(err => {console.log(err)})
            console.log(addedDeletedUser)
        }else if(addedDeletedNote.type==='addNote'){
            fetch('/insertInfoProt',{method:method,headers:headers,body:JSON.stringify(addedDeletedNote)})
            .then(answer => answer.json())
            .then(response => {resetProtocolos(response)})
            .catch(err => {console.log(err)})
            console.log(addedDeletedNote)
        }else if(addedDeletedUser.type==='delUser'){
            console.log(addedDeletedUser)
            fetch('/delInfoProt',{method:method,headers:headers,body:JSON.stringify(addedDeletedUser)})
            .then(answer => answer.json())
            .then(response => {resetProtocolos(response)})
            .catch(err => {console.log(err)})
        }else if(addedDeletedNote.type==='delNote'){
            console.log(addedDeletedNote)
            fetch('/delInfoProt',{method:method,headers:headers,body:JSON.stringify(addedDeletedNote)})
            .then(answer => answer.json())
            .then(response => {resetProtocolos(response)})
            .catch(err => {console.log(err)})
        }
        addOrDelNote('')
        addOrDelUser('')
    },[addedDeletedUser,addedDeletedNote])
    //getting inicial list of protocolos
    useEffect(()=> {
        fetch('http://localhost:3001')
        .then(answer => answer.json())
        .then(response => {{resetProtocolos(response)}})
        .catch(err => {console.log(err)})
    },[])

    return (
        <div className=".container-fluid mx-auto my-auto main-background-color" style={{height: `${91}%`}}>
                <div className=".container-fluid mx-auto my-auto w-100" style={{height: `${5}%`}}>
                    <div className="row mx-auto my-auto h-100 w-100">
                        <div className="col-2 h4"><strong>Protocolo:</strong></div>
                        <div className="col-10 h4 text-left">{selectedProtocolo===null?'':selectedProtocolo.prot}</div>
                    </div>
                </div>
                <ProtocoloContext.Provider value={{protocolos,addProtocolo,delProtocolo,addUser,addNote}}>
                <div className=".container-fluid mx-auto my-auto text-center w-100" style={{height: `${95}%`}}>
                    <div className=".container-fluid row mx-auto my-auto h-100 w-100">
                        <div className=".container-fluid mx-auto my-auto w-100" style={{height: `${100}%`,padding: 0,margin:0}}>
                            <ColumnHeaders sendProtocoloToParent={addProtocolo} />
                            <div className=".container-fluid mx-auto my-auto text-center row w-100" style={{height: `${95}%`,padding: 0,margin:0}}>
                                <ProtocolosInfoHeader selectProtocolo={selectProtocolo} selectedProtocolo={selectedProtocolo} />
                                <div className="col-10 h-100" style={{padding: 0,margin:0}}>
                                    <div className=".container-fluid mx-auto my-auto text-center row h-100" style={{padding: 0,margin:0}}>
                                        <GrupoTarefasInfoHeader selectedProtocolo={selectedProtocolo} />
                                        <TarefasInfoHeader />
                                        <AcoesInfoHeader />
                                        <AnotacoesInfoHeader />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </ProtocoloContext.Provider>
            </div>
    )
}

export default Main