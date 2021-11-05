import React from 'react';
import '../../../../index.css';
import GroupTarefaHeader from './leastElement/GroupTarefaHeader';
import FamilyHeader from './headers/FamilyHeader'
import ClassificationHeader from './headers/ClassificationHeader';

function GrupoTarefasInfoHeader ({selectedProtocolo}) {

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
                            <GroupTarefaHeader key="preSabeImovelAnalise" name='Análise' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPreSabe}/>
                            <GroupTarefaHeader key="preSabeImovelAvaliacao" name='Avaliação' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPreSabe}/>
                        <ClassificationHeader key="preSabeMovel" classificationName='Móveis' bgColor={secondLevelPreSabe}/>        
                            <GroupTarefaHeader key="preSabeMovelAnalise" name='Análise' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPreSabe}/>
                            <GroupTarefaHeader key="preSabeMovelAvaliacao" name='Avaliação' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPreSabe}/>
                        <ClassificationHeader key="preSabeSemoventes" classificationName='Semoventes' bgColor={secondLevelPreSabe}/>
                            <GroupTarefaHeader key="preSabeSemoventesAnalise" name='Análise' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPreSabe}/>
                            <GroupTarefaHeader key="preSabeSemoventeslAvaliacao" name='Avaliação' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPreSabe}/>
                        <ClassificationHeader key="preSabeOnus" classificationName='Ônus' bgColor={secondLevelPreSabe}/>
                            <GroupTarefaHeader key="preSabeOnusAnalise" name='Análise' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPreSabe}/>
                            <GroupTarefaHeader key="preSabeOnuslAvaliacao" name='Avaliação' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPreSabe}/>

                    <hr style={{margin:'2px 0'}} />
                    <FamilyHeader key="sabe" familyName='Sabe' bgColor={firstLeveSabe}/>
                    <ClassificationHeader key="sabeImovel" classificationName='Imóveis' bgColor={secondLevelSabe}/>
                            <GroupTarefaHeader key="sabeImovelAnalise" name='Análise' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/>
                            <GroupTarefaHeader key="sabeImovelAvaliacao" name='Avaliação' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/>
                        <ClassificationHeader key="sabeMovel" classificationName='Móveis' bgColor={secondLevelSabe}/>        
                            <GroupTarefaHeader key="sabeMovelAnalise" name='Análise' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/>
                            <GroupTarefaHeader key="sabeMovelAvaliacao" name='Avaliação' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/>
                        <ClassificationHeader key="sabeSemoventes" classificationName='Semoventes' bgColor={secondLevelSabe}/>
                            <GroupTarefaHeader key="sabeSemoventesAnalise" name='Análise' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/>
                            <GroupTarefaHeader key="sabeSemoventeslAvaliacao" name='Avaliação' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/>
                        <ClassificationHeader key="sabeOnus" classificationName='Ônus' bgColor={secondLevelSabe}/>
                            <GroupTarefaHeader key="sabeOnusAnalise" name='Análise' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/>
                            <GroupTarefaHeader key="sabeOnuslAvaliacao" name='Avaliação' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelSabe}/>

                    <hr style={{margin:'2px 0'}} />
                    <FamilyHeader familyName='Pós Sabe' bgColor={firstLevePosSabe}/>
                        <ClassificationHeader classificationName='Relatórios' bgColor={secondLevelPosSabe}/>
                        <GroupTarefaHeader key="posSabeOnusSubirSecex" name='Subir SECEX' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPosSabe}/>
                        <GroupTarefaHeader key="posSabeOnusAssinar" name='Assinar' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPosSabe}/>
                        <GroupTarefaHeader key="posSabeOnusConcluir" name='Concluir' selectedProtocolo={selectedProtocolo} bgColor={thirdLevelPosSabe}/>
                </>
            }
                
            </div>
        </div>
    )
}

export default GrupoTarefasInfoHeader