const tasks = {
    tasks: [{
        text: 'groccery Shopping',
        completes: true
    }, {
        text: 'clean course',
        completes: false
    }, {
        text: 'file course',
        completes: false
    }],
    getTaskToDo() {
        return this.tasks.filter((task)=> task.completes === false)
    }
        
       
    
}

// function getTaskToDo(){
//      const z  = tasks.tasks.forEach()
//      k = z.completes
//         console.log(k)
// }
console.log(tasks.getTaskToDo())

// getTaskToDo()