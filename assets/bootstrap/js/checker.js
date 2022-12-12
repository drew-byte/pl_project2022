function getChecked() {
    var lexi = document.getElementById('lexi');
    var value = lexi.value;
    let array = value.split(" ");
    let val = 0;
    let finalArray = [];
    const choices = ["String", "int", "char", "double"];
    const x = 0;
    var method = "";

    array.forEach(element => {

        

        if (element.includes(choices[0]) || element.includes(choices[1]) || element.includes(choices[2]) || element.includes(choices[3])) {
            finalArray[x] = "<data_type>";

        }
        else if (element.includes("=")) {
            finalArray[x + 2] = "<assignment_operator>";

        }
        else if (element.includes(";")) {
            if (val == 0 && element.includes("\"") || element.includes(";")
                || element.includes("'")) {
                finalArray[x + 3] = "<value>";
                finalArray[x + 4] = "<delimiter>";

            } else if (element.includes(";")) {
                finalArray[x + 4] = "<delimiter>";

            }

        }
        else if (val == 0 && element.includes("\"") || element.includes("'")) {
            val++;
            finalArray[x + 3] = "<value>";

        } else {
            finalArray[x + 1] = "<identifier>";
        }

        method = finalArray;


    });

    const getSyntax = finalArray.join(" ");

    if(getSyntax==="<data_type> <identifier> <assignment_operator> <value> <delimiter>" || getSyntax==="<data_type> <identifier> <delimiter>")
    {
        const semanticDataType = array[0];
        const semanticVal = array[3];
        
            try {
                if (
                    semanticDataType === "int" &&
                    !semanticVal.includes(".") &&
                    !semanticVal.includes("'") &&
                    !semanticVal.includes('"')
                ) {
                    document.getElementById('cardOutput').textContent = finalArray;
                }
                else if (
                    (semanticDataType === "double" || semanticDataType === "float") &&
                    semanticVal.includes(".") &&
                    !semanticVal.includes("'") &&
                    !semanticVal.includes('"')
                ) {
                    document.getElementById('cardOutput').textContent = finalArray;
                }
                else if (semanticDataType === "String" && semanticVal.includes('"')) {
                    document.getElementById('cardOutput').textContent = finalArray;
                }
                else if (semanticDataType === "boolean" && (semanticVal.includes("true") || semanticVal.includes("false")) &&
                    !value.includes(".") &&
                    !value.includes("'") &&
                    !value.includes('"')
                ) {
                    document.getElementById('cardOutput').textContent = finalArray;
                }
                else if (semanticDataType === "char" && semanticVal.length === 3 && semanticVal.includes("'")) {
                    document.getElementById('cardOutput').textContent = finalArray;
                }
                else
                {
                    document.getElementById('cardOutput').textContent = "Semantically Error!";
                }
            }
            catch (e) {
                document.getElementById('cardOutput').textContent = "Semantically Error!";
            }
       
    }
    else
    {
        document.getElementById('cardOutput').textContent = "Syntax Error!";
        
    }




    
}












