// let display = document.getElementById('display');

// let buttons = Array.from(document.getElementsByClassName('btn'));

// let display1="";

// buttons.forEach( btn => {
//     btn.addEventListener('click', (e) => {

//         display.innerText= display1 += e.target.innerText;
       
//     });
// });

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map( btn => {
    btn.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});