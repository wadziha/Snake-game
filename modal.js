// pri nacteni stranky nastav element modal do promnene 
var modal = document.getElementById("modal-dialog");

//funkce openModel,do stylu prvku modal v parametru 
//display nastavi na block (zobraz prvek) 
function openModal() {
    modal.style.display = "block";
}

function submitModal() {
    var jmeno_vstup = document.getElementById("jmeno_hrace");
    var jmeno = jmeno_vstup.value
    nastav_hrace(jmeno)
    closeModal()
}

//funkce CloseModal,do stylu prvku modal v parametru 
//display nastavi zpet na none(nezobrazuj prvek) 
function closeModal() {
    modal.style.display = "none";
}

// pri nascteni stranky 
openModal()
