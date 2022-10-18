const fs = require('fs')
const update = function(task,oldTask){

    const newTask = JSON.parse(oldTask).map(function(n,i){

        if(n,id = task.id){
            n.title = task.title
            n.body = task.body

        }
            return n
        

    })
    fs.writeFileSync('task.txt', JSON.stringify(newTask))
}

module.exports = update 