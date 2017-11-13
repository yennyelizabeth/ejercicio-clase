var count () {
 /*  var textarea = document.getElementById('textarea');
  textarea.addEventListener('keyup', function(e)); */
  var numLetters= document.form.fieldset.text.value.length;
  document.form.numLetters.value=numLetters;
};

/* función summit relacionada al botón summit  */
var summit= function() {
  var btn = document.getElementById('btn');
  btn.addEventListener('click', addTwitter);
};

/* función addTwitter relacionada al evento click del botón summit*/
var addTwitter = function() {
  var PanelTwitterText = document

};


function calcLong(txt, dst, form, maximo) {
  var largo;
  largo = form[txt].value.length ;
  if (largo > maximo) ;
    form[txt].value = form[txt].value.substring(0,maximo);
    form[dst].value = form[txt].value.length;
  };

summit();
count();
