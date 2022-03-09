let javascriptLover = "Uwielbiam Javascript";
let greatProgrammer = "Jestem świetnym programistą";

function checkLength(string1, string2) {
    if (string1.length > string2.length) {
        return string1;
    } else {
        return string2;
    }
}

console.log(checkLength(javascriptLover, greatProgrammer));
