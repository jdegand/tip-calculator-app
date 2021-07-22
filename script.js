let tipValue = 0.15;

function reset() {
    document.getElementById("bill").value = '';
    document.getElementById("inputTip").value = '';
    document.getElementById("numPeople").value = '1';
    document.getElementById("tipAmount").textContent = '0.00';
    document.getElementById("totalAmount").textContent = '0.00';
}

document.querySelectorAll('.tipBtn').forEach(btn => btn.addEventListener('click',(e) => {
   
    const tips = {
        "15%": 0.15,
        "25%": 0.25,
        "10%": 0.10,
        "50%": 0.50,
        "5%": 0.05
    }

    document.querySelectorAll('.tipBtn').forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');
     
    tipValue = tips[btn.innerText];
    calculateTotal();
}))

document.getElementById("inputTip").addEventListener('input', (e)=> {
    customFunction(e)
})

function customFunction(e){
    const tip = e.target.value / 100;
    tipValue = tip;
}

function calculateTotal(){
    const people = document.getElementById('numPeople').value;
    const bill = document.getElementById("bill").value;

    if(people >= 1 && bill) {
        
        const t2 = parseFloat(bill) * tipValue;
       
        const total = parseFloat(bill) + parseFloat(t2);
    
        document.getElementById("tipAmount").innerText = ( t2 / people).toFixed(2);
        document.getElementById("totalAmount").innerText = (total / people).toFixed(2);
    } 
   
}

document.querySelector('.main').addEventListener('input', calculateTotal);