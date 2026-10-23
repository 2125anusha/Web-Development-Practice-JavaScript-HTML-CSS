let command = prompt("Enter a Command, Choose from 'start', 'stop', 'pause', 'resume' :  ").toLowerCase();
let message;

switch (command) {
    case "start":
        message="System starting";
        break;
    case "stop":
        message="System stopping";
        break;
    case "pause":
        message="System paused"
        break;
    case "resume":
        message="System resuming";
        break;
    default:
        message="Unknown command";
}
console.log(message);