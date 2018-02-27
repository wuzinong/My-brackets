'use strict';

function data(req,res){
    let arr_data = ["test1","test2","test3","test4","test5"];
    res.json(arr_data);
}

module.exports = {
    data:data
}