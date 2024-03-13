let pName=document.getElementById("pname");
let pQuantity=document.getElementById("pquantity");
let pRate=document.getElementById("prate");
let amount=document.getElementById("amt");
let print=document.getElementById("btn");
let tab=document.getElementById("tab");
let tbody=document.getElementById("tbody");
let image=document.getElementById("pimage");



let myData=[];

let calculate=()=>{
amount.value=parseInt(pQuantity.value)*parseInt(pRate.value);  
}
pRate.addEventListener("input",calculate);

print.addEventListener("click",()=>{
   let newData={
      pname:pName.value, 
      image:image.files[0],
      pquantity:pQuantity.value,
      prate:pRate.value,
      amount:amount.value
   }
   myData.push(newData)
   printValue()
})

let printValue =()=>{
   myData.map((value,index)=>{
      
      
    tbody.innerHTML +=`<tr>
    <td>${pName.value}</td>
    <td><img src="" id="img${index}" width="40px" height="40px"></td>
    <td>${pQuantity.value}</td>
    <td>${pRate.value}</td>
    <td>${amount.value}</td>
    <td><input type="button" value="remove" onclick="removeData(${index})" ></td>

    </tr>
    `;
    let reader = new FileReader();
      reader.readAsDataURL(value.image);
      reader.onloadend = function() {
         let img=document.getElementById(`img${index}`)
         console.log(img)
         img.src=reader.result;
      };
    
      pName.value="";
      pQuantity.value="";
      image.value="";
      pRate.value="";
      amount.value="";
   })
    
}



let removeData=(index)=>{
   myData.splice(index,1)
   printValue()
}