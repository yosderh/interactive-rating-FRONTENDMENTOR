const option = document.querySelectorAll('.selection');
const submit = document.getElementById('submit');
let contador = 0;

const boxPrincipal= document.querySelector('.box-principal');
const createBoxPrincipal = ()=>{ //creacion de el BOX principal
    const arr = [1, 2, 3, 4, 5];
    const figure = document.createElement('figure');
            figure.classList.add('icon-header');
    const starImg = document.createElement('img');
            starImg.src = "./images/icon-star.svg";
    const question = document.createElement('h1');
            question.classList.add('question');
            question.innerText = `How did we do?`
    const p = document.createElement('p');
            p.classList.add('parraph');
            p.innerText= ` Please let us know how we did with your support request. All feedback is appreciated 
                        to help us improve our offering!`;
    const ul = document.createElement('ul');
            ul.classList.add('list-evaluation');

            arr.forEach(item =>{
                const li = document.createElement('li');
                        li.classList.add('icon-header');
                const span = document.createElement('span');
                        span.innerText = `${item}`;
                        li.appendChild(span);
                        ul.appendChild(li);

                        li.addEventListener('click', ()=>{
                            let as = document.querySelectorAll('li');
                                as.forEach(num=>{
                                    if(num.classList.contains('active')){
                                        num.classList.remove('active');
                                    }
                                })
                            li.classList.add('active');
                        });
            });

            const button = document.createElement('button');
                    button.setAttribute('class','btn-submit');
                    button.innerText = `Submit`;

                    button.addEventListener('click', ()=>{
                        let select = document.querySelector('.active');
                        newBox(select.innerText);
                    
                    });

            //agregar al html
        boxPrincipal.appendChild(figure);
            figure.appendChild(starImg);
        boxPrincipal.appendChild(question);
        boxPrincipal.appendChild(p);
        boxPrincipal.appendChild(ul);
        boxPrincipal.appendChild(button);

            
}

createBoxPrincipal();


function newBox(opcion){ // crea el BOX segundario
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
    
    // newBox(2);