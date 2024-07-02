let counterPucii = 1;
let counterHappy = 1;

function schimbaImaginePucii() {
  document.querySelector('.Pucii .img.view').classList.remove('view')
  const img = document.querySelector(`.Pucii .img-${counterPucii}`)
  img.classList.add('view');
  counterPucii++
  if (counterPucii > 14) {
      counterPucii = 1
  }
}

function schimbaImagineHappy() {
  document.querySelector('.Happy .img.views').classList.remove('views');
  const img = document.querySelector(`.Happy .img-${counterHappy}`);
  img.classList.add('views');
  counterHappy ++
  if (counterHappy >14 ){
      counterHappy =1;
    }
  }
  setInterval(schimbaImaginePucii, 3000);
  setInterval(schimbaImagineHappy, 3000); 
/*let counter=1;
setInterval(()=>{
  document.querySelector('.img.view').classList.remove('view')
    const img = document.querySelector(`.img-${counter}`)
    img.classList.add('view')
    counter++
    if (counter >14){
        counter = 1
    }
},3000)*/

function openForm(event){
  event.preventDefault()
  document.getElementById("form").style.display= "block";
 
}
function closeForm(event){
  event.preventDefault()
  document.getElementById("form").style.display= "none";
  
}
