const fs = require('fs')

let del = function(id, oldTask){
    let newTask = JSON.parse(oldTask).filter(function(n,i){

    return n.id !== id
})
fs.writeFileSync('task.txt', JSON.stringify(newTask))

}


module.exports = del