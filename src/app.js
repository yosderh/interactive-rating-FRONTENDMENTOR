const option = document.querySelectorAll('.selection');
const submit = document.getElementById('submit');
let contador = 0;

 function prueba(item) {
    const id = option[item].id;
    const etiqueta = document.getElementById(id);

    if(contador===1){
        const b = document.querySelector('.active');
        b.classList.remove("active");
    }
    etiqueta.classList.add("active");
    contador=1;

    console.log(etiqueta.innerText);
    
}
    function seleccion (){
        const etiqueta= document.querySelector('.active');
        return etiqueta.innerText;
    }


function newDiv(opcion){
    const main = document.querySelector('main');
    const secondBox = document.createElement('DIV');
    secondBox.classList.add('box-principal');
    secondBox.classList.add('box-secundary');
    const figura = document.createElement('FIGURE');
    const img = document.createElement('IMG');
    img.src= './images/illustration-thank-you.svg';
    const textSelected = document.createElement('P');
    textSelected.innerText= `You selected ${opcion} out of 5`;
    const divTextSelected = document.createElement('DIV');
    divTextSelected.classList.add('text-selected');
    const h2 = document.createElement('H2');
    h2.innerText = 'Thank you!'
    h2.classList.add('box-second-title')
    const p1 = document.createElement('P');
    p1.innerText= '  We appreciate you taking the time to give a rating. If you ever need more support, dont hesitate to get in tou';
    p1.classList.add('p1');
    const boxPrincipal= document.querySelector('.box1');
        boxPrincipal.classList.add('box-hidden');
    
        figura.appendChild(img);
        secondBox.appendChild(figura);
        secondBox.appendChild(textSelected);
        divTextSelected.appendChild(textSelected);
        secondBox.appendChild(divTextSelected);
        secondBox.appendChild(h2);
        secondBox.appendChild(p1);
        main.appendChild(secondBox);
    }
    
    submit.onclick =()=> newDiv(seleccion());