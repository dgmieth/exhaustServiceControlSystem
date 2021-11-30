import '../../../../index.css';
import { useState } from 'react';
import GroupTarefaHeader from './leastElement/GroupTarefaHeader';
import FamilyHeader from './headers/FamilyHeader'
import ClassificationHeader from './headers/ClassificationHeader';
import ModalUserOrInfo from '../../../modals/ModalUserOrInfo';

function GrupoTarefasInfoHeader ({selectedProtocolo,modalType,setModalType}) {
    //const [modalType, setModalType] = useState('none')

    const firstLevePreSabe = 'rgba(52,116,64,1)'
    const secondLevelPreSabe = 'rgba(52,116,64,.6)'
    const thirdLevelPreSabe = 'rgba(52,116,64,.3)'

    const firstLeveSabe = 'rgba(0,36,104,1)'
    const secondLevelSabe = 'rgba(0,36,104,.6)'
    const thirdLevelSabe = 'rgba(0,36,104,.3)'

    const firstLevePosSabe = 'rgba(165,150,40,1)'
    const secondLevelPosSabe = 'rgba(165,150,40,.6)'
    const thirdLevelPosSabe = 'rgba(165,150,40,.3)'
    
    return (
        <div id="groupTasks" className=".container-fluid col-2 text-left h-100" style={{height: '100%!important',border:'solid rgb(228, 228, 228) 2px',overflowY: 'auto',padding: 0,margin:0}}>
            <div className=".container-fluid text-left h-100 w-100" style={{overflowY:'auto'}}>
            {selectedProtocolo===null ?
                <>
                </>
            :
                <>
                    <FamilyHeader key="preSabe" familyName='Pré Sabe' bgColor={firstLevePreSabe}/>
                        <ClassificationHeader key="preSabeImovel" classificationName='Imóveis' bgColor={secondLevelPreSabe}/>
                            <GroupTarefaHeader key="preSabeImovelAnalise" modal={{modalType,setModalType}} name='Análise' action="analise" grouping='imovel' type='preSabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPreSabe} />
                            <GroupTarefaHeader key="preSabeImovelAvaliacao" modal={{modalType,setModalType}} name='Avaliação' action="avalia"  grouping='imovel'  type='preSabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPreSabe}/>
                        <ClassificationHeader key="preSabeMovel" classificationName='Móveis' bgColor={secondLevelPreSabe}/>        
                            <GroupTarefaHeader key="preSabeMovelAnalise" modal={{modalType,setModalType}} name='Análise' action="analise"  grouping='movel'  type='preSabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPreSabe}/>
                            <GroupTarefaHeader key="preSabeMovelAvaliacao" modal={{modalType,setModalType}} name='Avaliação' action="avalia"  grouping='movel'  type='preSabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPreSabe}/>
                        <ClassificationHeader key="preSabeSemoventes" classificationName='Semoventes'  bgColor={secondLevelPreSabe}/>
                            <GroupTarefaHeader key="preSabeSemoventesAnalise" modal={{modalType,setModalType}} name='Análise' action="analise"  grouping='semovente'  type='preSabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPreSabe}/>
                            <GroupTarefaHeader key="preSabeSemoventeslAvaliacao" modal={{modalType,setModalType}} name='Avaliação' action="avalia" grouping='semovente'  type='preSabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPreSabe}/>
                        {/* <ClassificationHeader key="preSabeOnus" classificationName='Ônus' bgColor={secondLevelPreSabe}/>
                            <GroupTarefaHeader key="preSabeOnusAnalise" modal={{modalType,setModalType}} name='Análise' action="analise"  grouping='onus'  type='preSabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPreSabe}/>
                            <GroupTarefaHeader key="preSabeOnuslAvaliacao" modal={{modalType,setModalType}} name='Avaliação' action="avalia"  grouping='onus'  type='preSabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPreSabe}/> */}

                    <hr style={{margin:'2px 0'}} />
                    <FamilyHeader key="sabe" familyName='Sabe' bgColor={firstLeveSabe}/>
                    <ClassificationHeader key="sabeImovel" classificationName='Imóveis' bgColor={secondLevelSabe}/>
                            {/* <GroupTarefaHeader key="sabeImovelAnalise" modal={{modalType,setModalType}} name='Análise' action="analise"  grouping='imovel' type='sabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/>
                            <GroupTarefaHeader key="sabeImovelAvaliacao" modal={{modalType,setModalType}} name='Avaliação' action="avalia"  grouping='imovel' type='sabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/> */}
                            <GroupTarefaHeader key="sabeImovelAnalise" modal={{modalType,setModalType}} name='Atualizar' action="atualiza"  grouping='imovel' type='sabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/>
                        <ClassificationHeader key="sabeMovel" classificationName='Móveis' bgColor={secondLevelSabe}/>        
                            {/* <GroupTarefaHeader key="sabeMovelAnalise" modal={{modalType,setModalType}} name='Análise' action="analise"  grouping='movel' type='sabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/>
                            <GroupTarefaHeader key="sabeMovelAvaliacao" modal={{modalType,setModalType}} name='Avaliação' action="avalia"  grouping='movel' type='sabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/> */}
                            <GroupTarefaHeader key="sabeMovelAnalise" modal={{modalType,setModalType}} name='Atualizar' action="atualiza"  grouping='movel' type='sabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/>
                        <ClassificationHeader key="sabeSemoventes" classificationName='Semoventes' bgColor={secondLevelSabe}/>
                            {/* <GroupTarefaHeader key="sabeSemoventesAnalise" modal={{modalType,setModalType}} name='Análise' action="analise"  grouping='semovente' type='sabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/>
                            <GroupTarefaHeader key="sabeSemoventeslAvaliacao" modal={{modalType,setModalType}} name='Avaliação' action="avalia"  grouping='semovente' type='sabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/> */}
                            <GroupTarefaHeader key="sabeSemoventesAnalise" modal={{modalType,setModalType}} name='Atualizar' action="atualiza"  grouping='semovente' type='sabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/>
                        <ClassificationHeader key="sabeOnus" classificationName='Ônus' bgColor={secondLevelSabe}/>
                            {/* <GroupTarefaHeader key="sabeOnusAnalise" modal={{modalType,setModalType}} name='Análise' action="analise"  grouping='onus' type='sabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/>
                            <GroupTarefaHeader key="sabeOnuslAvaliacao" modal={{modalType,setModalType}} name='Avaliação' action="avalia"  grouping='onus' type='sabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/> */}
                            <GroupTarefaHeader key="sabeOnusAnalise" modal={{modalType,setModalType}} name='Atualizar' action="atualiza"  grouping='onus' type='sabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/>

                    <hr style={{margin:'2px 0'}} />
                    <FamilyHeader familyName='Pós Sabe' bgColor={firstLevePosSabe}/>
                        <ClassificationHeader classificationName='Relatórios' bgColor={secondLevelPosSabe}/>
                            <GroupTarefaHeader key="posSabeOnusSubirSecex" modal={{modalType,setModalType}} name='Subir SECEX' action="subirSecex"  grouping="relatorio" type='posSabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPosSabe}/>
                            <GroupTarefaHeader key="posSabeOnusAssinar" modal={{modalType,setModalType}} name='Assinar' action="assinatura"  grouping="relatorio" type='posSabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPosSabe}/>
                            <GroupTarefaHeader key="posSabeOnusConcluir" modal={{modalType,setModalType}} name='Concluir' action="concluirProtocolo"  grouping="relatorio" type='posSabe' modalType={modalType} setModalType={setModalType} selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPosSabe}/>
                </>
            }
                
            </div>
        </div>
    )
}

export default GrupoTarefasInfoHeader