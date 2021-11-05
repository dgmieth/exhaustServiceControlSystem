//importing db connection

const db = require("./db_connection/db")

module.exports = class Info {
    constructor(){

    }

//CLASS methods
    static getProtocolos(){
       return db.query(`SELECT t.*, m.name,m.cpf_cnpj,m.mci,m.id as pessoaId, n.chave, n.value,n.id as observationId
                        FROM protocolos t 
                        LEFT JOIN (SELECT e.* FROM people e WHERE e.excluded = 0) m ON m.protocolo_fk = t.id
                        LEFT JOIN (SELECT x.* FROM protobservation x WHERE x.excluded = 0) n ON n.prot_fk = t.id
                        `)
    }
    static newProtocolo(prot){
        return db.query(`INSERT INTO protocolos (protocolos) VALUES (?)`,[`${prot}`])
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
}