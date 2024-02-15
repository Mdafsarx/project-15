

const cards=document.querySelectorAll('.card');
const cardInnerText=document.getElementsByClassName('CardInnerText');


let list=1;
let total=0;

for(let i=0;i<cards.length;i++){

const card=cards[i];
const cardText=cardInnerText[i].innerHTML;
let taka=cardInnerText[i].nextElementSibling.innerText;
taka=taka.split(' ');
taka=taka[0];
taka=parseInt(taka);

const totalElement=getElementById('totalprice');

card.addEventListener('click',function(){

  const element=getElementById('container');
  const p=document.createElement('p');
  p.innerText=list+' '+cardText;
  element.appendChild(p);
total=taka+total;
totalElement.innerText=' '+total;
list++
})


function Apply(){

if(total<200){
  return alert('first you have to shop more then equal 200')
}

else if(total>=200){

  const element=getElementById('Apply');
  element.style.background='red'
  let value=getElementById('Input').value;
  value=value.toLowerCase();
if(value=='sell200'){

  const discountTaka=parseInt(total * 0.2);
  const discount=total-discountTaka;
const discountId=getElementById('Discount');
discountId.innerText=discountTaka;
getElementById('DiscountTotal').innerText=discount;
 
}


}





// ///////// start here
}




}






