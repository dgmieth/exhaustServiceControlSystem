require('dotenv').config()
//nodejs modules
const path = require('path')
//npm modules
const express = require('express')
//customed modules
const db = require('./model/db_connection/db')
const Info = require('./model/Info')
//express app
const app = express()
//express app middlewares
app.use((req,res,next)=> {
    res.setHeader('Access-Control-Allow-Origin','*')
    next()
})
app.use(express.urlencoded());
app.use(express.json())
app.use((req,res,next)=> {
    next()
})
// insert new protocolo
app.post('/insertProt',(req,res,next)=>{
    Info.newProtocolo(req.body.prot)
    .then(([data,meta])=>{
        if(data){
            returnAllProts(req,res,next)
        }else{
            res.json({error: 'Not possible to save protocol'})
        }
    })
    .catch(err => [
        res.json({error: err})
    ])
})
app.post('/delProt',(req,res,next)=>{
    Info.deleteProtocolo(req.body.id, req.body.just)
    .then(([data,meta])=>{
        if(data){
            returnAllProts(req,res,next)
        }else{
            res.json({error: 'Not possible to save protocol'})
        }
    })
    .catch(err => [
        res.json({error: err})
    ])
})
app.post('/insertInfoProt',(req,res,next)=> {
    if(req.body.type==='addUser'){
        Info.insertUser(req.body.protId,req.body.name,req.body.mci,req.body.cpfCnpj)
        .then(([data,meta])=>{
            if(data){
                returnAllProts(req,res,next)
            }
        })
        .catch(err => {
            res.json({error: err})
        })
    }else if (req.body.type==='addNote'){
        Info.insertNote(req.body.protId,req.body.titulo,req.body.information)
        .then(([data,meta])=>{
            if(data){
                returnAllProts(req,res,next)
            }
        })
        .catch(err => {
            console.log(err)
            res.json({error: err})
        })
    }
})
//
app.post('/delInfoProt',(req,res,next)=> {
    if(req.body.type==='delUser'){
        Info.deletetUser(req.body.pessoaId)
        .then(([data,meta])=>{
            if(data){
                returnAllProts(req,res,next)
            }
        })
        .catch(err => {
            res.json({error: err})
        })
    }else if (req.body.type==='delNote'){
        Info.delNote(req.body.observationId)
        .then(([data,meta])=>{
            if(data){
                returnAllProts(req,res,next)
            }
        })
        .catch(err => {
            console.log(err)
            res.json({error: err})
        })
    }else if (req.body.type==='finishProt'){
        Info.finishProtocolo(req.body.protId)
        .then(([data,meta])=>{
            if(data){
                returnAllProts(req,res,next)
            }
        })
        .catch(err => {
            console.log(err)
            res.json({error: err})
        })
    }
})
app.get('/tasks',(req,res,next)=>{
    console.log(req.query)
    console.log('GET -> you reached /tasks')
    Info.getTasks(parseInt(req.query.protId))
    .then(([tasks,tasksMeta])=>{
        if(tasks){
            return res.json({data:sortTasks(tasks)})
        }else{
            return res.json({error:'not possible to retrieve information'})
        }
    })
    .catch(err => {
        console.log(err)
        return res.json({error:'not possible to retrieve information'})
    })
})
app.post('/tasks',(req,res,next)=>{
    console.log('POST -> you reached /tasks')
    console.log(req.body)
    if(req.body.type==='newTask'){
        Info.newTask(req.body.protId,req.body.taskType,req.body.info)
        .then(([newTask, newTaskMetada])=>{
            res.json(newTask)
        })
        .catch(err => {
            res.json({error:err})
        })
    }else{
        res.json({sucess:'you reached /tasks'})
    }
})
//get allProtocolos
app.get('/',(req,res,next)=>{
    returnAllProts(req,res,next)
})

app.listen(3001,()=>{
    console.log('server on port 3001')
})
/*========================================
            PROTOCOLOS
  ========================================
*/
function sortProtocolos(data){
    var returnData = []
    var protId = 0
    data.forEach(p => {
        if(protId!==p.id){
            protId = p.id
            var object = {
                protocolos: p.protocolos, 
                id:p.id, 
                concluido:p.concluido,
                excluido:p.excluido,
                just:p.excluidojustification,
                insertedin:p.insertedin
            }
            var pdFiltered = data.filter(pr => {
                if(pr.id === protId){
                    return true
                }
            })
            var people = []
            var observation = []
            var checkId = 0
            pdFiltered.sort((a,b)=> a.pessoaId - b.pessoaId)
            pdFiltered.forEach(t => {
                if(t.pessoaId!==checkId){
                    checkId = t.pessoaId
                    if(t.mci === null && t.name === null && t.cpf_cnpj === null){
                        return
                    }
                     people.push({
                         mci: t.mci,
                         name: t.name,
                         cpfCnpj: t.cpf_cnpj,
                         pessoaId: t.pessoaId
                     })
                }
            })
            pdFiltered.sort((a,b)=> a.observationId - b.observationId)
            var checkId = 0
            pdFiltered.forEach(t=>{
                if(t.observationId!==checkId){
                    checkId = t.observationId
                    if(t.value === null && t.value === null){
                        return
                    }
                    observation.push({
                        chave: t.chave,
                        value: t.value,
                        observationId: t.observationId
                    })
                }
            })
            //if(people)
            object['people'] = people
            object['observation'] = observation
            returnData.push(object)
        }
    })
    return returnData
}
function returnAllProts(req,res,next) {
    Info.getProtocolos()
    .then(([data1,meta])=> {
        res.json(sortProtocolos(data1))
    })
    .catch(err => {
        res.json({error: err})
    })
}
/*========================================
            TASKS
  ========================================
*/
function sortTasks(data){
    var taskId = 0
    var returnArray = []
    data.forEach(d => {
        if(d.id !== taskId){
            taskId = d.id
            var people = []
            var filtered = data.filter(d=> {if(d.id === taskId){return true}})
            filtered.forEach(d => {
                people.push({
                    peopleName:	d.peopleName,
                    peopleMci:d.peopleMci,
                    peopleCpfCnpj: 	d.peopleCpfCnpj,
                    assetownershipratio:d.assetownershipratio
                })
            })
            returnArray.push({
                familyGroup:d.familyGroup,
                familyGroupId:d.familyGroupId,
                classificationGroup	:d.classificationGroup,
                classificationGroupId	:d.classificationGroupId,
                id	:d.id,
                grouptasks_fk	:d.grouptasks_fk,
                protocolo_fk	:d.protocolo_fk,
                people_fk	:d.people_fk,
                value	:d.value,
                createdin	:d.createdin,
                excluded	:d.excluded,
                excludedin	:d.excludedin,
                exckludedjustification	:d.exckludedjustification,
                finished	:d.finished,
                finishedin	:d.finishedin,
                people:people
            })
        }
    })
    return returnArray
}