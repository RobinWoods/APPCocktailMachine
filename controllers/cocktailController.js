const Soft = require('../models/softModel');
const Alcohol = require('../models/alcoholModel');
const mqtt = require('mqtt');



async function getAllPresent(req, res){
    const allSoft = await Soft.getAll();
    const allAlcohol = await Alcohol.getAll();

    if(!allSoft || !allAlcohol){
        return res.status(404).json({error: 'There is no soft or no alcohol present'});
    }
    else{
        const softPresented =[];
        for (const soft of allSoft){

            if(soft.onFunction){
                softPresented.push(soft);
            }
        }
        const alcoholPresented =[];
        for (const alcohol of allAlcohol){
            if(alcohol.onFunction){
                alcoholPresented.push(alcohol);
            }
        }
        res.render('index', {softList: softPresented, alcoholList: alcoholPresented});
    }
}

async function sendRecipeWithMQTT(req, res){
    const client = mqtt.connect('mqtt://coloc.derenty.net', {
        port: 62810,
        username: 'ha-mqtt',
        password: 'ha-mqtt',
    });

    client.on("connect", ()=>{
        console.log("Connected to MQTT");
        client.subscribe('test', () => {
        })
        client.publish('test', JSON.stringify(req.body), (error) => {
            if (error) {
                console.error(error)
            }
            else{res.json({message: 'Successfully published'});}
        })
    })
}

module.exports = {
    getAllPresent,
    sendRecipeWithMQTT
}