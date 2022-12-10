function getLexi() {
    var lexi = document.getElementById('lexi');
    var value = lexi.value;

    let array = value.split(" ");
    const choices = ["String", "int", "char", "double"];
    let val = 0;
    let finalArray = [];

    array.forEach(element => {

        if (element.includes(choices[0]) || element.includes(choices[1]) || element.includes(choices[2]) || element.includes(choices[3])) {
            finalArray[0] = "<data_type>";

        }
        else if (element.includes("=")) {
            finalArray[2] = "<assignment_operator>";

        }
        else if (element.includes(";")) {
            if (val == 0 && element.includes("\"") || element.includes(";")
                || element.includes("'")) {
                finalArray[3] = "<value>";
                finalArray[4] = "<delimiter>";

            } else if (element.includes(";")) {
                finalArray[4] = "<delimiter>";

            }

        }
        else if (val == 0 && element.includes("\"") || element.includes("'")) {
            val++;
            finalArray[3] = "<value>";

        } else {
            finalArray[1] = "<identifier>";
        }


    });
    document.getElementById('cardOutput').innerHTML = finalArray;
    alert(finalArray);

}


