const display = document.getElementById('output');
let out = "";
console.log(out);

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    if(button.id!='AC' && button.id!='backspace' && button.id!='equal'){
        button.addEventListener('click', function() {
            out+=this.textContent;
            display.textContent=out;
            const buttonValue = this.textContent;
            console.log("Button clicked: " + buttonValue);
        });
    }
});

const ac=document.getElementById('AC');
const backspace=document.getElementById('backspace');
const equal=document.getElementById('equal');

ac.addEventListener('click', ()=>{
    out='';
    display.textContent='';
    const buttonValue = this.textContent;
    console.log("Button clicked: " + buttonValue);
})

backspace.addEventListener('click',()=>{
    if(out.length>0){
        out=out.substring(0,out.length-1);
        display.textContent=out;
    }
    const buttonValue = this.textContent;
    console.log("Button clicked: " + buttonValue);
})

equal.addEventListener('click', ()=>{
    let res=eval(out);
    console.log(out);
    if(isNaN(res)){
        display.textContent='not defined';
    }else{
        res=parseFloat(res.toFixed(5));
        display.textContent=res;
    }

    out=res.toString();
    if(!isJSONString(out)){
        out="";
    }

    const buttonValue = this.textContent;
    console.log("Button clicked: " + '=');
})

function isJSONString(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
}
