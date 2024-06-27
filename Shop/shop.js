const lista = document.getElementById('produse');
const buton = document.getElementById('pro');
const htmlInitial = buton.innerHTML;
const submenuList = document.querySelectorAll('.submenu');

buton.addEventListener('click' , function(e){
        e.preventDefault();
if (lista.style.display === 'none'){
    lista.style.display = 'inline-block';
    buton.textContent = "Inchide Meniul";
}
else{lista.style.display='none';
buton.innerHTML= htmlInitial;
}
});

submenuList.forEach(submenu => {
    const subsubmenu = submenu.querySelector('.subsubmenu'); 
    
submenu.addEventListener('mouseenter', function(){
    if(subsubmenu.style.display ==='none') {
        subsubmenu.style.display = 'grid';
      console.log('Mouse-ul a atins secțiunea:');
    }
    else{subsubmenu.style.display ='none';
        }
});
submenu.addEventListener('mouseleave', function() {
    subsubmenu.style.display = 'none';
});
});

const recompenseli =document.getElementById('recompenseLi');
const dietali =document.getElementById('dietaLi');
const hranali =document.getElementById('hranaLi');
const accesoriili =document.getElementById('accesoriiLi');
const ingrijireli =document.getElementById('ingrijireLi');
const kiturili =document.getElementById('kituriLi');
const produseRomanestili =document.getElementById('produseRomanestiLi');


const favorite = document.getElementById('favorite');
const hrana = document.getElementById('hrana');
const accesorii = document.getElementById('accesorii');
const kituri = document.getElementById('kituri');
const produseRomanesti = document.getElementById('produseRomanesti');
const recompense = document.getElementById('recompense');
const dieta=document.getElementById('dieta');
const ingrijire =document.getElementById('ingrijire')

function afiseazaDiv(id) {
    const divuri = ['recompense', 'dieta', 'ingrijire', 'hrana', 'accesorii', 'kituri', 'produseRomanesti'];
    divuri.forEach(function(divID) { 
        const div = document.getElementById(divID);
        div.style.display = 'none';
    });
    const divSelectat = document.getElementById(id);
        if (divSelectat){
            divSelectat.style.display = "block";
            favorite.style.display = "none";          
        }
};
dietali.addEventListener("click", function() {
    afiseazaDiv('dieta');
});
ingrijireli.addEventListener("click", function() {
    afiseazaDiv('ingrijire');
   
    
});
recompenseli.addEventListener("click", function() {
    afiseazaDiv('recompense');
});
hranali.addEventListener("click", function() {
    afiseazaDiv('hrana');
});
 dietali.addEventListener("click", function() {
    afiseazaDiv('dieta');
});
accesoriiLi.addEventListener("click", function() {
    afiseazaDiv('accesorii');
});
kiturili.addEventListener("click", function() {
    afiseazaDiv('kituri');
});
produseRomanestili.addEventListener("click", function() {
    afiseazaDiv('produseRomanesti');
});