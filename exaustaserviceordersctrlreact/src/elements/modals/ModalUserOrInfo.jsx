import React,{ useContext } from 'react';

function ModalUserOrInfo ({type}) {
    var modalTitle = ''
    if(type.type=='addUser'){
        modalTitle = 'Novo coobrigado'
    }else if(type.type=='addNote'){
        modalTitle = 'Nova nota'
    }else if (type.type === 'finishProt'){
        modalTitle = 'Terminar protocolo'
    }else if (type.type === 'newTask'){
        modalTitle = 'Nova tarefa'
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        if(type.type=='addUser'){
            console.log('entrou addUser')
            if(document.getElementsByName('userName')[0].value===''|| 
            document.getElementsByName('userMci')[0].value==='' || 
            document.getElementsByName('userCpfCNPJ')[0].value === ''){
                alert('Nome, MCI e CPF/CNPJ devem ser informados')       
                return
            }else {
                type.name = document.getElementsByName('userName')[0].value
                type.mci = document.getElementsByName('userMci')[0].value
                type.cpfCnpj = document.getElementsByName('userCpfCNPJ')[0].value
                document.getElementsByName('userName')[0].value = ''
                document.getElementsByName('userMci')[0].value = ''
                document.getElementsByName('userCpfCNPJ')[0].value = ''
                type.add({name:type.name,mci:type.mci,cpfCnpj:type.cpfCnpj,protId: type.protId,type:type.type})
            }
        }else if(type.type=='addNote'){
            console.log('entrou addNote')
            if(document.getElementsByName('userTitulo')[0].value===''|| 
            document.getElementsByName('userInformation')[0].value===''){
                return alert('Você deve informar algo')       
            }else{
                type.titulo = document.getElementsByName('userTitulo')[0].value
                type.nformation = document.getElementsByName('userInformation')[0].value
                document.getElementsByName('userTitulo')[0].value = ''
                document.getElementsByName('userInformation')[0].value = ''
                type.add({titulo: type.titulo, information:type.information, protId: type.protId,type:type.type})
            }
        }else if (type.type === 'finishProt'){
            console.log('entrou finishProt')
            type.add(
                {
                    protId: type.protId,
                    type:type.type
                }
            )
        }else if (type.type === 'newTask'){
            if(document.getElementsByName('taksInfo')[0].value===null ||
            document.getElementsByName('taksInfo')[0].value === ''){
                alert('Informação não pode ser nula')
            }else {
                type.info = document.getElementsByName('taksInfo')[0].value
                document.getElementsByName('taksInfo')[0].value = ''
                type.add(type)
            }
        }else if(type.type==='none'){
            
        }

    }
    return (
        <div className="modal show" id="exampleModal" aria-hidden="false" >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{modalTitle}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div id="modalBody" className="modal-body">
                        {type.type === 'addUser' ?
                            <div className=".container-fluid mx-auto my-auto row text-center">
                                <div className="col-4">Nome:</div>
                                <div className="col-8"><input name="userName" type="text" /></div>
                                <div className="col-4">MCI:</div>
                                <div className="col-8"><input name="userMci"  type="number" maxLength="9" /></div>
                                <div className="col-4">CPF/CNPJ:</div>
                                <div className="col-8"><input name="userCpfCNPJ"  type="text" maxLength="21" 
                                                   onInput={()=>{
                                                       let val = document.getElementsByName('userCpfCNPJ')[0].value
                                                       document.getElementsByName('userCpfCNPJ')[0].value = val.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')
                                                    }}/></div>
                            </div>
                        
                        : type.type ==='addNote' ?
                            <div className=".container-fluid mx-auto my-auto row text-center">
                                    <div className="col-4">Título:</div>
                                    <div className="col-8"><input name="userTitulo" type="text" /></div>
                                    <div className="col-4">Informação:</div>
                                    <div className="col-8"><input name="userInformation" type="text" /></div>
                            </div>
                        : type.type === 'finishProt' ?
                            <div className=".container-fluid mx-auto my-auto text-center">
                                <h5>Tem certeza que deseja finalizar o protocolo {type.protocolo}</h5>
                            </div>
                        : type.type === 'newTask' ?
                            <div className=".container-fluid mx-auto my-auto text-center">
                                <h5>Informe uma nova tarefa para o protocolos {type.protocolo}</h5>
                                <div className=".container-fluid mx-auto my-auto row text-center">
                                    <div className="col-4">Informação:</div>
                                    <div className="col-8"><input defaultValue="" name="taksInfo" type="text" /></div>
                                </div>
                            </div>
                    :
                            <>
                            </>
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" onClick={handleSubmit} data-dismiss="modal" className="btn btn-primary" >Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalUserOrInfo 