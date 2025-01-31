

function generadorExcusa(){

    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    const chooseWho = who[Math.floor(Math.random() * who.length)];
    const chooseAction = action[Math.floor(Math.random() * action.length)];
    const chooseWhat = what[Math.floor(Math.random() * what.length)];
    const chooseWhen = when[Math.floor(Math.random() * when.length)];

    const excuse = `${chooseWho} ${chooseAction} ${chooseWhat} ${chooseWhen}.`; 

    document.getElementById("excuse").innerText=excuse;
}



document.addEventListener("DOMContentLoaded",generadorExcusa);







