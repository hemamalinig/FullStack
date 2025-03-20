
var userName = "Hema";   // String
let userAge = 28;          // Number
const isDeveloper = true;   // Boolean
function updateVariables() {
    userName = "Hemamalini";
    userAge = 23;
    //isDeveloper = false;
    /*lab1.html:21 Uncaught TypeError: Assignment to constant variable.
    at updateVariables (lab1.html:21:24) at HTMLButtonElement.onclick (lab1.html:10:54)
    updateVariables	@	lab1.html:21 onclick	@	lab1.html:10 */
    console.log(userName);
    console.log(userAge);
    console.log(isDeveloper);
    var txt = document.getElementById("content");
    txt.innerHTML = "User Name: " + userName + "<br> User Age: " + userAge + "<br> Is Developer: " + isDeveloper;
}
