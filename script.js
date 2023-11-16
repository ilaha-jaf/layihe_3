const accessKey = 'a6162dd16049f19def6d087365f65d36';
const valute1=document.querySelectorAll('.valute1');
const valute2=document.querySelectorAll('.valute2');
const value2=document.querySelector('.value2');
const value1=document.querySelector('.value1');
const rub1=document.querySelector('.rub1');
const usd1=document.querySelector('.usd1');
const eur1=document.querySelector('.eur1');
const azn1=document.querySelector('.azn1');
const rub2=document.querySelector('.rub2');
const usd2=document.querySelector('.usd2');
const eur2=document.querySelector('.eur2');
const azn2=document.querySelector('.azn2');
const btn=document.querySelectorAll('button');
const change1=document.querySelector('.change1');
const change2=document.querySelector('.change2');

function updateValue2(result) {
  const parsedResult = parseFloat(result);
  if(bool){
    if (!isNaN(parsedResult)) {
    value2.value = parsedResult; 
  } 
  }
  else{
    if (!isNaN(parsedResult)) {
      value1.value = parsedResult; 
    } 
  }
  
}


valute1.forEach(btn => {
  let previousButton = null;
  btn.addEventListener('click', (event) => {
    if (previousButton !== null) {
      previousButton.style.color = '';
      previousButton.style.background = '';
    }
    event.target.style.background = 'blueviolet';
    event.target.style.color = 'white';
    previousButton = event.target;
  });
});

valute2.forEach(btn => {
  let previousButton = null;
  btn.addEventListener('click', (event) => {
    if (previousButton !== null) {
      previousButton.style.color = '';
      previousButton.style.background = '';
    }
    event.target.style.background = 'blueviolet';
    event.target.style.color = 'white';
    previousButton = event.target;
  });
});

let from="RUB";
let to="USD";
let bool=true;
function handleCurrencyConversion() {
    let amount;
    if(bool){
      amount=parseFloat(value1.value.replace(/\s/g, '').replace(',', '.'));
    }
    else{
      amount=parseFloat(value2.value.replace(/\s/g, '').replace(',', '.'));
    }
    if (!isNaN(amount)) {
      let url
      if(bool){
        
        url=` https://v6.exchangerate-api.com/v6/0eb0385c0d4d881af25085a3/latest/USD?from=${from}`;
      }
      else{
        url=`https://v6.exchangerate-api.com/v6/0eb0385c0d4d881af25085a3/latest/USD?from=${to}`;
      }
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          change1.textContent=`1${from}=${data.conversion_rates[to]} ${to}`;
          change2.textContent=`1${to}=${(1/data.conversion_rates[to]).toFixed(4)}${from}`;
          if(bool){
            updateValue2((data.conversion_rates[to]*amount).toFixed(4));
          }
          else{
             updateValue2((data.conversion_rates[from]*amount).toFixed(4));
          }
          
         
        })
        .catch((err) => {
          console.log(err);
        });
    } 
    
  };


azn1.addEventListener('click', ()=>{
  from="AZN";
  handleCurrencyConversion()
});
rub1.addEventListener('click', ()=>{
  from="RUB";
  handleCurrencyConversion()
});
usd1.addEventListener('click', ()=>{
  from="USD";
  handleCurrencyConversion()
});
eur1.addEventListener('click', ()=>{
  from="EUR";
  handleCurrencyConversion()
});

azn2.addEventListener('click', ()=>{
  to="AZN";
  handleCurrencyConversion()
});
rub2.addEventListener('click', ()=>{
  to="RUB";
  handleCurrencyConversion()
});
usd2.addEventListener('click', ()=>{
  to="USD";
  handleCurrencyConversion()
});
eur2.addEventListener('click', ()=>{
  to="EUR";
  handleCurrencyConversion()
});

value1.addEventListener('input',()=>{
  if(azn1.style.background=='blueviolet'){
    handleCurrencyConversion();
   
 }
 if(rub1.style.background=='blueviolet'){
   handleCurrencyConversion();
   
 }
 if(eur1.style.background=='blueviolet'){
   handleCurrencyConversion();
   
 }
 if(usd1.style.background=='blueviolet'){
   handleCurrencyConversion();
   
 }
 bool=true;
})


value2.addEventListener('input',()=>{
  if(azn2.style.background=='blueviolet'){
    handleCurrencyConversion();
   
 }
 if(rub2.style.background=='blueviolet'){
   handleCurrencyConversion();
   
 }
 if(eur2.style.background=='blueviolet'){
   handleCurrencyConversion();
   
 }
 if(usd2.style.background=='blueviolet'){
   handleCurrencyConversion();
   
 }
 bool=false;
})

window.onload = rub1.click();
window.onload = usd2.click();
