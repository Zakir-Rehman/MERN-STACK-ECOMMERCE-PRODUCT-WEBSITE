// let express = require('express')
let mongoose = require('mongoose')
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Nextfly');
}
let dataCarddSchema = mongoose.Schema({
    img:{type:String,require:true},
    title:String,
    realPrice:{type:String,default:'1'},
    discountPrice:String,
    category: { type: String, required: true }

})
let Model = mongoose.model('CardData',dataCarddSchema)
console.log('sas')
module.exports = Model