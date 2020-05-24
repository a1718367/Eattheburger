const orm = require("../config/orm");

const burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    add: function(col,val,cb){
        orm.insertone("burgers",col,val,function(res){
            cb(res);
        });
    },
    update: function(id,col,val,cb){
        orm.updateone("burgers",id,col,val,function(res){
            cb(res);
        })
    },
    delete: function(id,cb){
        orm.delete("burgers",id,function(res){
            cb(res);
        })
    }
}

module.exports = burger;