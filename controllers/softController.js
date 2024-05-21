const Soft = require('../models/softModel');

async function getPresent(req, res){
    const allSoft = await Soft.getAll();

    if(!allSoft){
        return res.status(404).json({error: 'There is no soft present'});
    }
    else{
        const softPresented =[];
        for (const soft of allSoft){

            if(soft.onFunction){
                softPresented.push(soft);
            }
        }
        res.render('soft', {softList: softPresented});
    }
}

module.exports = {
    getPresent
}