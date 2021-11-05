import React, { useContext, useState } from 'react';
import '../../../../index.css';
import { ProtocoloContext } from '../../../contexts/ProtocoloContext';
import Protocolo from './leastElementUnit/Protocolo';
import ProtocoloAtivoHeading from './headers/ProtocoloAtivoHeading';
import ProtocoloConcluídosHeading from './headers/ProtocoloConcluídosHeading';
import ProtocoloExcluidosHeading from './headers/ProtocoloExcluidosHeading';
import ModalUserOrInfo from '../../../modals/ModalUserOrInfo';

function ListaDeProtocolos({selectProtocolo,selectedProtocolo}){
    const [modalType, setModalType] = useState('none')
    const { protocolos } = useContext(ProtocoloContext)
    const protocoloAtivos = protocolos.filter(p =>{
        return p.concluido ===0 && p.excluido === 0 
    })
    const protocoloConcluidos = protocolos.filter(p =>{
        return p.concluido === 1 && p.excluido === 0 
    })
    const protocolosExcluidos = protocolos.filter(p =>{
        return p.excluido === 1 
    })
    return (
        <div key="listProtocolo" id="listProtocolos" className=".container-fluid mx-auto my-auto text-center row w-100" style={{height: '100%!important',padding: 0,margin:0}}>
            <ModalUserOrInfo type={modalType} />
            <ProtocoloAtivoHeading key="headingProtocolosAtivos" protocolos={protocoloAtivos} />
            {protocoloAtivos.map(((p,index) => (
                <Protocolo key={'protAtivos_ID'+index} protocolo={p} showButtons={true} type={'ativos'} selectProtocolo={selectProtocolo} selectedProtocolo={selectedProtocolo} modalType={modalType} setModalType={setModalType}/>
            )))}
           <ProtocoloConcluídosHeading key="headingProtocolosConcluidos" protocolos={protocoloConcluidos}/>
            {protocoloConcluidos.map(((p,index) => (
                <Protocolo key={'protConcluidos_ID'+index} protocolo={p} showButtons={false} type={'concluidos'} selectProtocolo={selectProtocolo} selectedProtocolo={selectedProtocolo}/>
            )))}
            <ProtocoloExcluidosHeading key="headingProtocolosExcluidos" protocolos={protocolosExcluidos}/>
            {protocolosExcluidos.map(((p,index) => (
                <Protocolo key={'protExcluidos_ID'+index} protocolo={p} showButtons={false} type={'excluidos'} selectProtocolo={selectProtocolo} selectedProtocolo={selectedProtocolo}/>
            )))}
        </div>
    )
}

export default ListaDeProtocolos