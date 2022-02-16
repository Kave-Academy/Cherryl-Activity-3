function run(num) {
    let param = document.getElementById("input_number").value;


    if (param % 2 === 0){

        document.getElementById("output").innerHTML = param + "  Not Prime Number ";
       
    } else {
        document.getElementById("output").innerHTML = param + " Prime Number ";
    }
}
    
    
