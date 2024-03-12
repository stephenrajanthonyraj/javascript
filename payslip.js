let basicPay=document.getElementById("pay");
let hra=document.getElementById("hra");
let da=document.getElementById("da");
let travelling=document.getElementById("travel");
let pf=document.getElementById("pf");
let grossSalary=document.getElementById("gross");
let netSalary=document.getElementById("net");
let print=document.getElementById("print");
let cal=document.getElementById("calculate");
let table=document.getElementById("table");
let tbody=document.getElementById("tbody")

let calculate =(e)=>{
    e.preventDefault()
    hra.value=parseInt(basicPay.value)*(15/100);
    da.value=parseInt(basicPay.value)*(5/100);
    travelling.value=parseInt(basicPay.value)*(15/100);
    pf.value=parseInt(basicPay.value)*(15/100);
    grossSalary.value=parseInt(basicPay.value)+hra+da+travelling+pf;
    netSalary.value=parseInt(grossSalary.value)-parseInt(pf.value);

    hra.value=parseInt(hra.value);
    da.value=parseInt(da.value);
    travelling.value=parseInt(travelling.value);
    pf.value=parseInt(pf.value);
    grossSalary.value=parseInt(grossSalary.value);
    netSalary.value=parseInt(netSalary.value)
}
let key=document.getElementById("pay")
cal.addEventListener("click",calculate);

print.addEventListener('click',(e)=>{
    e.preventDefault()
    if(basicPay.value!=''){
    tbody.innerHTML+=`<tr>
    <td>${basicPay.value}</td>
    <td>${hra.value}</td>
    <td>${da.value}</td>
    <td>${travelling.value}</td>
    <td>${pf.value}</td>
    <td>${grossSalary.value}</td>
    <td>${netSalary.value}</td>
    
    </tr>`
    table.style.visibility="visible"
    }
    else{
    alert("Enter Basic Pay value")
    }})
