
const add = require('./add')
const read = require('./read')
const write = require('./write')
const del = require('./del')
const update = require('./update')
const present = require('./present')

const data = process.argv
var task = {}

if(data[2] == 'add'){
    task = {
        id: data[3],
        title: data[4],
        body: data[5]
    }




    var oldTask = read()

    add(task,oldTask)
}
//console.log(task)



if(data[2] == 'read'){
   present(read())

}

if(data[2] == 'delete'){
    const oldTask = read()
    const id = data[3]

    
    del(id, oldTask)

    present(read())
    
    
}
 
var task = {}
if (data[2] == 'update'){
    let task = {
        id : data [3],
        title : data [4],
        body : data [5]
        }

    
    var oldTask = read()

    update(task, oldTask)
    
}
