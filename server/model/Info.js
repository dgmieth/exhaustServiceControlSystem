//importing db connection

const db = require("./db_connection/db")

module.exports = class Info {
    constructor(){

    }

//CLASS methods
    static getProtocolos(){
       return db.query(`SELECT t.*, m.name,m.cpf_cnpj,m.mci,m.id as pessoaId, 
                                n.chave, n.value,n.id as observationId
                        FROM protocolos t 
                        LEFT JOIN (SELECT e.* FROM people e WHERE e.excluded = 0) m ON m.protocolo_fk = t.id
                        LEFT JOIN (SELECT x.* FROM protobservation x WHERE x.excluded = 0) n ON n.prot_fk = t.id
                        ORDER BY t.insertedin DESC
                        `)
    }
    static newProtocolo(prot){
        return db.query(`INSERT INTO protocolos (protocolos) VALUES (?)`,[`${prot}`])
    }
    static finishProtocolo(prot){
        return db.query(`UPDATE protocolos 
                            SET 
                                concluido = 1,
                                concluidoem = current_timeStamp()
                            WHERE id = ?`,[`${prot}`])
    }
    static deleteProtocolo(protId,justification){
        return db.query(`UPDATE protocolos
                        SET 
                            excluido = 1,
                            excluidoem = CURRENT_TIMESTAMP(),
                            excluidojustification = ?
                        WHERE id = ?
                            `,[`${justification}`,`${protId}`])
    }
    static insertUser(protId,name,mci,cpfCnpj){
        return db.query(`INSERT INTO people(protocolo_fk,name,cpf_cnpj,mci)
                            VALUES(?,?,?,?)`,[`${protId}`,`${name}`,`${cpfCnpj}`,`${mci}`])
    }
    static deletetUser(pessoaId){
        return db.query(`UPDATE people
                        SET
                            excluded = 1,
                            excludedin = CURRENT_TIMESTAMP()
                        WHERE id = ?`,[`${pessoaId}`])
    }
    static insertNote(protId,titulo,information){
        return db.query(`INSERT INTO protobservation(prot_fk,chave,value)
                            VALUES(${protId},?,?)`,[`${titulo}`,`${information}`])
    }
    static delNote(observationId){
        return db.query(`UPDATE protobservation
                            set excluded = 1,
                                excludedin = current_timeStamp()
                            WHERE id = ?
                            `,[observationId])
    }
    static newTask(protId,taksGroupId,value){
        return db.query(`INSERT INTO tasks(grouptasks_fk,protocolo_fk,value) 
                            VALUES(?,?,?)`,[`${taksGroupId}`,`${protId}`,`${value}`])
    }
    static getTasks(protocolo){
        return db.query(`
        SELECT 
            f.name as familyGroup,
            f.id as familyGroupId,
            ct.nome as classificationGroup,
            ct.id as classificationGroupId,
            p.name as peopleName,
            p.mci as peopleMci,
            p.cpf_cnpj as peopleCpfCnpj,
            t.*
        FROM exaustaoservice.tasks t 
        left join exaustaoservice.taskgroup tg on tg.id = t.grouptasks_fk 
        left join exaustaoservice.people p on p.id = t.people_fk 
        left join exaustaoservice.classificationtasks ct on ct.id = tg.classification_fk 
        left join exaustaoservice.familiatasks f on f.id = tg.family_fk 
        where t.protocolo_fk = ?`,[`${protocolo}`])
    }
}