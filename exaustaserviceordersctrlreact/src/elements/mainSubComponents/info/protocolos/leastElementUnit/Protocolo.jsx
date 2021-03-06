import React, {useContext} from 'react';
import { ProtocoloContext } from '../../../../contexts/ProtocoloContext';
import '../../../../../index.css';
import addUserImg from '../../../../../img/addUser.png'
import addNoteImg from '../../../../../img/addNote.png'
import finishProt from '../../../../../img/finishProt.png'
import ModalUserOrInfo from '../../../../modals/ModalUserOrInfo';
import { TarefaContext } from '../../../../contexts/TarefaContext';


function Protocolo({protocolo,showButtons,type,selectProtocolo,selectedProtocolo,modalType,setModalType}){
    const {protocolos, delProtocolo, addUser,addNote } = useContext(ProtocoloContext)
    const{setTarefas,setTasksFilter}=useContext(TarefaContext)
    
    const deletarProtocolo = (protocolo)=>{
        var just = prompt('Motivo da Exclusão')
        var obj = {...protocolo, just}
        delProtocolo(obj)
    }
    const deletarUser = (e) => {
        console.log(e)
        addUser(e)
    }
    const deletarNota = (e)=> {
        console.log(e)
        addNote(e)
    }
    const protocoloSelecionado = (value) => {
        var id = parseInt(value.split('_')[1])
        var filteredProtocolo = protocolos.filter(p => { return p.id === id})
        if(type==='excluidos'){
            selectProtocolo(null)
            var alertTimer = setInterval(() => {
                alert(`Motivo da exclusão: ${filteredProtocolo[0].just}`)
                clearInterval(alertTimer)
            }, 75);
        }else{
            console.log(filteredProtocolo[0].prot)
            selectProtocolo(filteredProtocolo[0])
        }
        setTarefas([])
        setTasksFilter(null)
    }
    const ativProt = type === 'excluidos' ? 'rgba(255, 164, 173,1)' : type === 'concluidos' ? 'rgba(253, 194, 146,1)' : 'rgba(181, 180, 245,1)'
    const bgColorSelectedProtocolo = selectedProtocolo===null ? ativProt : protocolo.prot===selectedProtocolo.prot ? 'rgba(204, 255, 153,1)' : ativProt
    const protId = `protId_${protocolo.id}`
    return (
        <div key={protId} id={protId} className="col-12 w-100 .container-fluid" style={{backgroundColor:bgColorSelectedProtocolo, minHeight:'30px',padding: 0,margin:'4px 0 0 0',textAlign:'start',fontWeight:700,border:'solid rgb(255, 255, 255) 2px'}}>
                
                <div className=".container-fluid mx-auto my-auto row w-100 text-center teste" style={{padding:'0px 8px',alignItems:'center',alignContent:'center'}}>
                    <a className='.container-fluid mx-auto my-auto text-center w-100' onClick={()=>{protocoloSelecionado(protId)}} style={{padding:'0',textDecoration:'none',color:'black',cursor:'pointer'}}>
                        <div className="col-12 h-100 my-auto" style={{fontFamily:'arial',fontSize:'16px',padding:0,textAlign:'center',alignContent:'center'}}>
                            {protocolo.prot}
                        </div>
                    </a>
                    {showButtons ? 
                        <>
                            <div className="col-3">
                                <a className="btn btn-outline-danger btn-sm" onClick={()=>{deletarProtocolo(protocolo)}} style={{padding:'0px 5px'}}>X</a>
                            </div>
                            <div className="col-3">
                                <a className="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#exampleModal" onClick={()=>{setModalType({type:'addNote',protId:protocolo.id,add:addNote,setType:setModalType})}} style={{padding:'0px 5px'}}><img style={{backgroundImage:addNoteImg,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'15px'}} src={addNoteImg} /></a>
                            </div>
                            <div className="col-3">
                                <a className="btn btn-outline-success btn-sm" data-toggle="modal" data-target="#exampleModal"  onClick={()=>{setModalType({type:'addUser',protId:protocolo.id,add:addUser,setType:setModalType})}} style={{padding:'0px 5px'}}><img style={{backgroundImage:addUserImg,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'15px'}} src={addUserImg} /></a>
                            </div>
                            <div className="col-3">
                                <a className="btn btn-outline-success btn-sm" data-toggle="modal" data-target="#exampleModal" onClick={()=>{setModalType({type:'finishProt',protId:protocolo.id,add:addUser,setType:setModalType,protocolo:protocolo.prot})}} style={{padding:'0px 5px'}}><img style={{backgroundImage:finishProt,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'15px'}} src={finishProt} /></a>
                            </div>
                        </>
                    :   
                    <></>
                    }
                    {type!=='excluidos' ?
                        protocolo.people.length > 0 ? 
                            <>
                                <div style={{fontSize:11,textAlign:'start'}}>Coobrigados</div>
                                <div className=".container-fluid mx-auto my-auto text-center row w-100" style={{maxHeight:'120px',padding: 0,margin:'0 5px',textAlign:'start',fontWeight:700,border:'solid black 1px',overflowY:'auto'}}>
                                    {protocolo.people.map((p,i)=> {
                                        var peopleId = `peoleNr${i+1}inProtId${protocolo.protId}`
                                        return (
                                            <div key={peopleId} className='.container-fluid mx-auto my-auto text-center row w-100'>
                                                <div className="col-1" style={{fontSize:9}}>
                                                    <div className='.container-fluid  my-auto row w-100 h-100' style={{textAlign:'start',alignContent:'start'}}>
                                                        <div className="col-12" style={{textAlign:'start',alignContent:'start'}}>{i+1}</div>
                                                    {showButtons ? 
                                                        <div className="col-12">
                                                            <button className="btn btn-outline-danger btn-sm" onClick={()=>{deletarUser({pessoaId:p.pessoaId,type:'delUser'})}} style={{padding:'0px 5px'}}>X</button>
                                                        </div>
                                                    :
                                                        <>
                                                        </>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="col-10" style={{fontSize:9}}>
                                                    <div className='.container-fluid mx-auto my-auto text-center row w-100 h-100'>
                                                        <div className="col-10">{p.name}</div>
                                                        <hr style={{margin:0,padding:0}}/>
                                                        <div className="col-10">{p.mci}</div>
                                                        <hr style={{margin:0,padding:0}}/>
                                                        <div className="col-10">{p.cpfCnpj}</div>
                                                    </div>
                                                </div>
                                                <hr style={{margin:0,padding:0}}/>
                                            </div>
                                            )
                                    })}
                                </div>
                            </>
                        :
                        <>
                        </>
                    :
                        <>
                        </>
                    }
                    {type!=='excluidos' ?
                        protocolo.observation.length > 0 ? 
                            <>
                                <div style={{fontSize:11,textAlign:'start'}}>Notas</div>
                                <div className=".container-fluid mx-auto my-auto text-center row w-100" style={{maxHeight:'120px',padding: 0,margin:'0 5px',textAlign:'start',fontWeight:700,border:'solid purple 1px',overflowY:'auto'}}>
                                    {protocolo.observation.map((p,i)=> {
                                        var obsId = `ObservationNr${i+1}inProtId${protocolo.protId}`
                                        return (
                                            <div key={obsId} className='.container-fluid mx-auto my-auto text-center row w-100'>
                                                <div className="col-1" style={{fontSize:9}}>
                                                    <div className='.container-fluid  my-auto row w-100 h-100' style={{textAlign:'start',alignContent:'start'}}>
                                                        <div className="col-12" style={{textAlign:'start',alignContent:'start'}}>{i+1}</div>
                                                        {showButtons ? 
                                                            <div className="col-12">
                                                                <button className="btn btn-outline-danger btn-sm" onClick={()=>{deletarNota({observationId:p.observationId,type:'delNote'})}} style={{padding:'0px 5px'}}>X</button>
                                                            </div>
                                                        :
                                                            <>
                                                            </>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col-10" style={{fontSize:9}}>
                                                    <div className='.container-fluid mx-auto my-auto text-center row w-100 h-100'>
                                                        <div className="col-10"><strong>{p.chave}</strong></div>
                                                        <hr style={{margin:0,padding:0}}/>
                                                        <div className="col-10">{p.value}</div>
                                                    </div>
                                                </div>
                                                <hr style={{margin:0,padding:0}}/>
                                            </div>
                                            )
                                    })}
                                </div>
                            </>
                        :
                        <>
                        </>
                        
                    :
                        <>
                        </>
                    }
                </div>
        </div>
    )
}

export default Protocolo