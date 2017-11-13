/*var ul = document.getElementsByTagName('ul') [0] ;
var ul = document.querySelectorAll ('ul') [0];
var ul  = document.querySelector('ul');
var ul  = document.getElementById('ul-id');
var ul  = document.getElementsByClassName('ul-class')[0];*/

/*
var ul  = document.getElementsByName('ul-name')[0] ;
for ( var i = 0; i < ul.children.length; i++)
  console.log(ul.children[i].textContent) ;

var padre = ul.firstElementChild.parentElement;
var hijo  = document.createElement('li');
hijo.textContent = 'item denuevo';

/*padre.appendChild(hijo) ; */
/*padre.insertBefore(hijo ,padre.firstChild ); */

/*var ul = document.querySelector('ul')*/

/*Opción uno*/






/*Opción dos*/
var ul = document.querySelector('ul');
var padre = ul.firstElementChild.parentElement;
var hijo = document.createElement('li');
hijo.textContent = 'item nuevo';
var hermano = padre.firstElementChild.nextElementSibling.nextElementSibling;
padre.appendChild(hijo);
padre.insertBefore(hijo, hermano)
