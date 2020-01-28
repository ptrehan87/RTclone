const mongoose = require('mongoose')
const PrimaryObject = mongoose.model('PrimaryObject')
module.exports = {
    findAll:(req, res) => {
        PrimaryObject.find()
            .then(data => res.json({success:"successfully found something", data:data}))
            .catch(error => res.json({errorMsg:"You got fooled", data:error}));
    },
    create:(req, res) => {
        PrimaryObject.create(req.body)
            .then(data => res.json(data))
            .catch(error => res.json(error))
    },
    findOne:(req, res) => {
        PrimaryObject.findOne({_id:req.params.id})
            .then(data => res.json(data))
            .catch(error => res.json(error))
    },
    edit:(req, res) => {
        PrimaryObject.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true})
            .then(data => res.json(data))
            .catch(error => res.json(error))
    },
    delete:(req, res) => {
        PrimaryObject.findByIdAndDelete({_id:req.params.id})
            .then(data => res.json(data))
            .catch(error => res.json(error))
    },

}