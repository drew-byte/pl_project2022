function getChecked() {
    var lexi = document.getElementById('lexi');
    var value = lexi.value;
    let array = value.split(" ");
    let val = 0;
    let finalArray = [];
    const choices = ["String", "int", "char", "double"];
    const x = 0;

    if (array.length === 5 || array.length === 4) {

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

            const getSyntax = finalArray.join(" ");
            document.getElementById("lexiBG").style.backgroundColor = "green";
            if (getSyntax === "<data_type> <identifier> <assignment_operator> <value> <delimiter>" || getSyntax === "<data_type> <identifier> <delimiter>") {
                const semanticDataType = array[0];
                const semanticVal = array[3];
                document.getElementById("synBG").style.backgroundColor = "green";

                try {
                    if (
                        semanticDataType === "int" &&
                        !semanticVal.includes(".") &&
                        !semanticVal.includes("'") &&
                        !semanticVal.includes('"')
                    ) {
                        document.getElementById('cardOutput').textContent = finalArray;
                        document.getElementById("semBG").style.backgroundColor = "green";
                    }
                    else if (
                        (semanticDataType === "double" || semanticDataType === "float") &&
                        semanticVal.includes(".") &&
                        !semanticVal.includes("'") &&
                        !semanticVal.includes('"')
                    ) {
                        document.getElementById('cardOutput').textContent = finalArray;
                        document.getElementById("semBG").style.backgroundColor = "green";
                    }
                    else if (semanticDataType === "String" && semanticVal.includes('"')) {
                        document.getElementById('cardOutput').textContent = finalArray;
                        document.getElementById("semBG").style.backgroundColor = "green";
                    }
                    else if (semanticDataType === "boolean" && (semanticVal.includes("true") || semanticVal.includes("false")) &&
                        !value.includes(".") &&
                        !value.includes("'") &&
                        !value.includes('"')
                    ) {
                        document.getElementById('cardOutput').textContent = finalArray;
                        document.getElementById("semBG").style.backgroundColor = "green";
                    }
                    else if (semanticDataType === "char" && semanticVal.length === 3 && semanticVal.includes("'")) {
                        document.getElementById('cardOutput').textContent = finalArray;
                        document.getElementById("semBG").style.backgroundColor = "green";
                    }
                    else {
                        document.getElementById('cardOutput').textContent = "Semantically Error!";
                        document.getElementById("semBG").style.backgroundColor = "red";
                    }
                }
                catch (e) {
                    document.getElementById('cardOutput').textContent = "Semantically Error!";
                    document.getElementById("semBG").style.backgroundColor = "red";
                }


            }
            else {
                document.getElementById('cardOutput').textContent = "Syntax Error!";
                document.getElementById("synBG").style.backgroundColor = "red";

            }

        });
    }
    else if (array.length === 2 || array.length === 3) {
        array.forEach(element => {
            if (element.includes(choices[0]) || element.includes(choices[1]) || element.includes(choices[2]) || element.includes(choices[3])) {
                finalArray[x] = "<data_type>";

            }
            else if (element.includes(";")) {
                if (!element.includes("\"") || element.includes(";")
                    || !element.includes("'")) {
                    finalArray[x + 1] = "<identifier>";
                    finalArray[x + 2] = "<delimiter>";

                } else if (element.includes(";")) {
                    finalArray[x + 2] = "<delimiter>";

                }

            }
            else {
                finalArray[x + 1] = "<identifier>";
            }
            const getSyntax = finalArray.join(" ");
            document.getElementById("lexiBG").style.backgroundColor = "green";
            if (getSyntax === "<data_type> <identifier> <assignment_operator> <value> <delimiter>" || getSyntax === "<data_type> <identifier> <delimiter>") {
                const semanticDataType = array[0];
                document.getElementById("synBG").style.backgroundColor = "green";

                try {
                    if (semanticDataType === "int") {
                        document.getElementById('cardOutput').textContent = finalArray;
                        document.getElementById("semBG").style.backgroundColor = "green";
                    }
                    else if (semanticDataType === "double" || semanticDataType === "float")
                     {
                        document.getElementById('cardOutput').textContent = finalArray;
                        document.getElementById("semBG").style.backgroundColor = "green";
                    }
                    else if (semanticDataType === "String") {
                        document.getElementById('cardOutput').textContent = finalArray;
                        document.getElementById("semBG").style.backgroundColor = "green";
                    }
                    else if (semanticDataType === "boolean") {
                        document.getElementById('cardOutput').textContent = finalArray;
                        document.getElementById("semBG").style.backgroundColor = "green";
                    }
                    else if (semanticDataType === "char") {
                        document.getElementById('cardOutput').textContent = finalArray;
                        document.getElementById("semBG").style.backgroundColor = "green";
                    }
                    else {
                        document.getElementById('cardOutput').textContent = "Semantically Error!";
                        document.getElementById("semBG").style.backgroundColor = "red";
                    }
                }
                catch (e) {
                    document.getElementById('cardOutput').textContent = "Semantically Error!";
                    document.getElementById("semBG").style.backgroundColor = "red";
                }


            }
            else {
                document.getElementById('cardOutput').textContent = "Syntax Error!";
                document.getElementById("synBG").style.backgroundColor = "red";

            }
        });



    }
    else {
        document.getElementById('cardOutput').textContent = "Lexical Error!";
        document.getElementById("lexiBG").style.backgroundColor = "red";
    }
}















