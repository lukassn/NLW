//Procurar o botao
document.querySelector("#add-time").addEventListener('click', cloneField);

// Quando clicar no botao
// Executar uma acao
function cloneField() {
    console.log("cheguei aqui");
    // Duplicar os campos. Quais campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);
    //limpar os campos. Quais campos?
    const fields = newFieldContainer.querySelectorAll("input");
    fields.forEach(function(field){
        field.value = "";
    })
    // Colocar na pagina. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer);
    
}
    
    

