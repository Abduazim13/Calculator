let output = document.querySelector(".output");
let oneBtn = document.querySelector(".one");
let twoBtn = document.querySelector(".two");
let threeBtn = document.querySelector(".three");
let fourBtn = document.querySelector(".four");
let fiveBtn = document.querySelector(".five");
let sixBtn = document.querySelector(".six");
let sevenBtn = document.querySelector(".seven");
let eightBtn = document.querySelector(".eight");
let nineBtn = document.querySelector(".nine");
let bolBtn = document.querySelector(".bol");
let kopBtn = document.querySelector(".kop");
let ayirBtn = document.querySelector(".ayir");
let tengBtn = document.querySelector(".teng");
let plusBtn = document.querySelector(".plus");
let clrBtn = document.querySelector(".clr");
let zeroBtn = document.querySelector(".zero")
let vergulBtn = document.querySelector(".vergul")
let foizBtn = document.querySelector(".foiz")

foizBtn.addEventListener('click', subNumber)
oneBtn.addEventListener('click', subNumber)
twoBtn.addEventListener('click', subNumber)
threeBtn.addEventListener('click', subNumber)
fourBtn.addEventListener('click', subNumber)
fiveBtn.addEventListener('click', subNumber)
sixBtn.addEventListener('click', subNumber)
sevenBtn.addEventListener('click', subNumber)
eightBtn.addEventListener('click', subNumber)
nineBtn.addEventListener('click', subNumber)
bolBtn.addEventListener('click', subNumber)
kopBtn.addEventListener('click', subNumber)
plusBtn.addEventListener('click', subNumber)
ayirBtn.addEventListener('click', subNumber)
zeroBtn.addEventListener('click', subNumber)
vergulBtn.addEventListener('click', subNumber)

function subNumber (e) {
    output.innerHTML += e.target.value;
}

clrBtn.addEventListener('click', () => {
    output.innerHTML = "";
})

tengBtn.addEventListener('click' , natija);

function natija() {
    let result = (eval(output.textContent));
    output.textContent = result;
}