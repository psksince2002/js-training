//single line comment
//variable types are
//1) var
//2) let
//3) const

/* multi line comment

var has function scope
let has block scope
const variable has block scope and does not have any other assignmenst except the fisrt one
*/

{
    {
        var a=20;
        let b=20;
        const c=30;
        c=40
    }
    console.log(a)
    console.log(b)
    console.log(c)
}