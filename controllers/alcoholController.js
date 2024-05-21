const Alcohol = require('../models/alcoholModel');

async function getPresent(req, res, next){
    const allAlcohol = await Alcohol.getAll();

    if(!allAlcohol){
        return res.status(404).json({error: 'There is no alcohol present'});
    }
    else{
        const alcoholPresented =[];
        for (const alcohol of allAlcohol){
            if(alcohol.onFunction){
                alcoholPresented.push(alcohol);
            }
        }
        res.render('alcohol', {alcoholList: alcoholPresented});
    }
}

module.exports = {
    getPresent
}