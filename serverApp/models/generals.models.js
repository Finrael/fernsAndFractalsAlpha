const sql  = require('./fandf.db')


//constructor
const General = function(general){
    this.status = general.status;
    this.material = general.material;
    this.shape = general.shape;
    this.weight = general.weight;
    this.amountOne = general.amountOne;
    this.typeOne = general.typeOne;
    this.amountTwo = general.amountTwo;
    this.typeTwo = general.typeTwo;
    this.box = general.box;
    this.origin = general.origin;
    this.purchaseDate = general.purchaseDate
}


General.create =(newGeneral ,result)=>{
    sql.query(`INSERT INTO generals SET?`, newGeneral,
        (err,res)=>{
            if(err){
                console.log('error: ', err);
                result(err,null)
                return;
            }else {
                console.log('result: ',{id: res.insertId,...newGeneral})
                result(null,{id: res.insertId,...newGeneral})
            }
        }
    )
}

General.getAll =(result)=>{
    sql.query(`SELECT * FROM generals`, (err,res)=>{
        if(err){
                console.log('error: ', err);
                result(err,null)
                return;
            }else {
                console.log('result: ',res)
                result(null,res)
            }
    })

}

module.exports = General;