
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on("event1", (fileName) => {
    console.log("Start message" + fileName);
})

eventEmitter.on("event2", (taskName) => {  
    console.log("End message" + taskName);
})

eventEmitter.emit("event1", "file.txt");
eventEmitter.emit("event2", "task");
