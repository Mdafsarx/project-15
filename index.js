

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


}







function Apply(){

  const element=getElementById('Apply');
  element.style.background='red'
  const value=getElementById('Input').value;
  console.log(value)
  console.log(InputValue)

}