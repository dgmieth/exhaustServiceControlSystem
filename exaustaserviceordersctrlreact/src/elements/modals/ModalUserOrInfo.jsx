import React,{ useContext } from 'react';


function ModalUserOrInfo ({type}) {
    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(type.type)
        if(type.type=='addUser'){
            console.log('entrou addUser')
            if(document.getElementsByName('userName')[0].value===''|| 
            document.getElementsByName('userMci')[0].value==='' || 
            document.getElementsByName('userCpfCNPJ')[0].value === ''){
                alert('Nome, MCI e CPF/CNPJ devem ser informados')       
                return
            }else {
                type.add({name:document.getElementsByName('userName')[0].value,
                            mci: document.getElementsByName('userMci')[0].value,
                        cpfCnpj:document.getElementsByName('userCpfCNPJ')[0].value,
                    protId: type.protId,
                type:type.type})
            }
        }else if(type.type=='addNote'){
            console.log('entrou addNote')
            if(document.getElementsByName('userTitulo')[0].value===''|| 
            document.getElementsByName('userInformation')[0].value===''){
                alert('Você deve informar algo')       
                return
            }else{
                type.add(
                    {
                        titulo: document.getElementsByName('userTitulo')[0].value, 
                        information:document.getElementsByName('userInformation')[0].value,
                        protId: type.protId,
                        type:type.type
                    }
                )
            }
            
        }
        if(type.type==='none'){
            return
        }
    }
    return (
        <div className="modal show" id="exampleModal" aria-hidden="false" >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div className="modal-body">
                        {type.type === 'addUser' ?
                            <div className=".container-fluid mx-auto my-auto row text-center">
                                <div className="col-4">Nome:</div>
                                <div className="col-8"><input name="userName" type="text" /></div>
                                <div className="col-4">MCI:</div>
                                <div className="col-8"><input name="userMci"  type="number" maxLength="9" /></div>
                                <div className="col-4">CPF/CNPJ:</div>
                                <div className="col-8"><input name="userCpfCNPJ"  type="number" maxLength="21" /></div>
                            </div>
                        
                        : type.type ==='addNote' ?
                            <div className=".container-fluid mx-auto my-auto row text-center">
                                    <div className="col-4">Título:</div>
                                    <div className="col-8"><input name="userTitulo" type="text" /></div>
                                    <div className="col-4">Informação:</div>
                                    <div className="col-8"><input name="userInformation" type="text" /></div>
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