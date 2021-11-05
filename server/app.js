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
    console.log('passed')
    next()
})
// insert new protocolo
app.post('/insertProt',(req,res,next)=>{
    Info.newProtocolo(req.body.prot)
    .then(([data,meta])=>{
        if(data){
            Info.getProtocolos()
            .then(([data,meta])=> {
                //console.log(data)
                res.json(sortProtocolos(data))
            })
        }else{
            res.json({error: 'Not possible to save protocol'})
        }
    })
    .catch(err => [
        res.json({error: err})
    ])
})
app.post('/delProt',(req,res,next)=>{
    console.log(req.body)
    Info.deleteProtocolo(req.body.id, req.body.just)
    .then(([data,meta])=>{
        if(data){
            Info.getProtocolos()
            .then(([data1,meta])=> {
                // console.log(data1)
                res.json(sortProtocolos(data1))
            })
            .catch(err => {
                res.json({error: err})
            })
        }else{
            res.json({error: 'Not possible to save protocol'})
        }
    })
    .catch(err => [
        res.json({error: err})
    ])
})
app.post('/insertInfoProt',(req,res,next)=> {
    console.log(req.body)
    if(req.body.type==='addUser'){
        Info.insertUser(req.body.protId,req.body.name,req.body.mci,req.body.cpfCnpj)
        .then(([data,meta])=>{
            if(data){
                Info.getProtocolos()
                .then(([data1,meta])=> {
                    //console.log(data1)
                    res.json(sortProtocolos(data1))
                })
                .catch(err => {
                    res.json({error: err})
                })
            }
        })
        .catch(err => {
            res.json({error: err})
        })
    }else if (req.body.type==='addNote'){
        console.log(123)
        Info.insertNote(req.body.protId,req.body.titulo,req.body.information)
        .then(([data,meta])=>{
            console.log(data)
            if(data){
                Info.getProtocolos()
                .then(([data1,meta])=> {
                    //console.log(data1)
                    res.json(sortProtocolos(data1))
                })
                .catch(err => {
                    res.json({error: err})
                })
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
    console.log(req.body)
    if(req.body.type==='delUser'){
        Info.deletetUser(req.body.pessoaId)
        .then(([data,meta])=>{
            if(data){
                Info.getProtocolos()
                .then(([data1,meta])=> {
                    //console.log(data1)
                    res.json(sortProtocolos(data1))
                })
                .catch(err => {
                    res.json({error: err})
                })
            }
        })
        .catch(err => {
            res.json({error: err})
        })
    }else if (req.body.type==='delNote'){
        Info.delNote(req.body.observationId)
        .then(([data,meta])=>{
            if(data){
                Info.getProtocolos()
                .then(([data1,meta])=> {
                    //console.log(data1)
                    res.json(sortProtocolos(data1))
                })
                .catch(err => {
                    res.json({error: err})
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.json({error: err})
        })
    }
})
//get allProtocolos
app.get('/',(req,res,next)=>{
    Info.getProtocolos()
    .then(([data,meta])=> {
        //console.log(data)
        console.log(sortProtocolos(data))
        res.json(sortProtocolos(data))
    })
    .catch(err => {
        res.json({error: err})
    })
})

app.listen(3001,()=>{
    console.log('server on port 3001')
})

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
                just:p.excluidojustification
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
            console.log(observation)
        }
    })
    return returnData
}