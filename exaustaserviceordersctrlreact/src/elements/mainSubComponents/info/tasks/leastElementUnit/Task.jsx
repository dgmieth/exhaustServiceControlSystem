import React, {useContext} from 'react';
import '../../../../../index.css';
import Global from '../../../../GlobalVariables'



function Task({task}){
    
    return (
        <div className="col-12 w-100 .container-fluid" style={{minHeight:'30px',padding: 0,margin:'4px 0 0 0',textAlign:'start',border:'solid rgb(255, 255, 255) 2px'}}>
                <div className=".container-fluid mx-auto my-auto row w-100 text-center teste" style={{padding:'0px 8px',alignItems:'center',alignContent:'center'}}>
                    <a className='.container-fluid mx-auto my-auto text-center w-100' onClick={()=>{}} style={{padding:'0',textDecoration:'none',color:'black',cursor:'pointer'}}>
                        <div className="col-12 h-100 my-auto" style={{fontFamily:'arial',fontSize:'1rem',padding:0,textAlign:'center',alignContent:'center'}}>
                            {task}
                        </div>
                    </a>
                    {/* {showButtons ? 
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
                    } */}
                </div>
        </div>
    )
}

export default Task