const selectors = document.querySelectorAll("select");
const bnt = document.querySelector(".bnt");
let currencyFrom = document.querySelector(".from select");
let currencyTo = document.querySelector(".to select");
let change = document.querySelector(".msg");
let changeValue = document.querySelector(".bnt2");
let img1 = document.querySelector(".from img");
let img2 = document.querySelector(".to img");


for(let select of selectors ){
  for(counrtyCode in countryList){
     let newOption = document.createElement("option");
     newOption.innerText = counrtyCode;
     newOption.value = counrtyCode;
     if (select.name ==="GO" && counrtyCode ==="USD"){
      newOption.selected = "selected";
     } else if(select.name ==="To" && counrtyCode ==="INR"){
      newOption.selected = "selected";
     }
     select.append(newOption);
   }
   select.addEventListener("change",(evt)=>{
    flagUpdate(evt.target)
 });
 }
  

 const flagUpdate =(element)=>{
  let flagName =element.value;
  let flagCode = countryList[flagName];
  let newFlag = `https://flagsapi.com/${flagCode}/flat/64.png`;
  let flagIMG = element.parentElement.querySelector("img");
  flagIMG.src = newFlag;
 }

 
bnt.addEventListener("click", async (evt)=>{
  evt.preventDefault();
  let amount =document.querySelector(".enterAmount input");
  let amtval =amount.value;
 if (amtval === "" || amtval<1){
    amount.value=1;
  } 
 const URL = `https://api.frankfurter.app/latest?amount=${amtval}&from=${currencyFrom.value}&to=${currencyTo.value}`;
let b = currencyTo.value;
  let convert = await fetch(URL);
  let data = await convert.json();
      

let rate = data.rates[b];
change.innerText = `${amtval} ${currencyFrom.value} = ${rate} ${currencyTo.value}`;
});


changeValue.addEventListener("click", (event)=>{
  event.preventDefault();
let a=currencyFrom.value;
let b= currencyTo.value ;
for(let select of selectors ){
  for(counrtyCode in countryList){
     let newOption = document.createElement("option");
     newOption.innerText = counrtyCode;
     newOption.value = counrtyCode;
     if (select.name ==="GO" && counrtyCode === b){
      newOption.selected = "selected";
     } else if(select.name ==="To" && counrtyCode === a){
      newOption.selected = "selected";
     }
     select.append(newOption);
    }};
  let c = countryList[a];
   let d =countryList[b]; 
    img1.src = `https://flagsapi.com/${d}/flat/64.png`;
    img2.src =`https://flagsapi.com/${c}/flat/64.png`;
 });