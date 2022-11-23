function calcultion(){
    var a,b,c,choice;
    choice = document.getElementById("opertion").value;
    a = Number(document.getElementById("firstnumber").value);
    b = Number(document.getElementById("secoundNumber").value);
    
    if(choice == "Addition")
    {
        c = a+b;
        console.log(c);
        document.getElementById("answer").value = c;
    }
    else if(choice == "Subtraction")
    {
        c = a-b;
        document.getElementById("answer").value = c;
    }
    else if(choice == "division")
    {
        if (b == 0) {
            document.getElementById("answer").value = "Undefinite";
        }
        else{
        c = a/b;
        document.getElementById("answer").value = c;
        }
    }
    else if(choice == "multiplaction"){
        c = a*b;
        document.getElementById("answer").value = c;
    }
    else{
        document.getElementById("answer").value = "Invalid Choice"
    }
}
