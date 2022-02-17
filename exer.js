//Function to check number
function run() {

    let param, i, bool = true;

    //get the value from input text - DOM
    param = document.getElementById("input_number").value;

    for (i=2; i < param ; i++)
            if(param % i == 0){
                bool = false;
                break;
                
            }

            //Check and display in UI
            if (bool == true)
            document.getElementById("output").innerHTML = param + " Prime Number ";
            else 
            document.getElementById("output").innerHTML = param + " Not Prime Number ";
}
// } https://www.geeksforgeeks.org/check-a-number-is-prime-or-not-using-javascript/#:~:text=A%20prime%20number%20is%20a,alert%20message%20on%20the%20screen.
    
