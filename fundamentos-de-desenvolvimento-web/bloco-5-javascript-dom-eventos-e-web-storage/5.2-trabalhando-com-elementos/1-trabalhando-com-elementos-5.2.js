console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

/*
No console do navegador: primeiro, foi selecionado o elemento div utilizando o seu id , 'start'. Na sequência, aplicadas as propriedades nextSibling e nextElementSibling . Você pode ver que, nextSibling retornará o texto "nó" que representa o próximo nó do DOM a partir da div , enquanto que, nextElementSibling retornará o próximo elemento propriamente, ou seja, o elemento <p> .
*/