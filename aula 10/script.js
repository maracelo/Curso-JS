var a=window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', mouseemcima)
a.addEventListener('mouseout', mousesaiu)

function clicar() {
    var a=window.document.getElementById('area')//var a = window.document.body.querySelector('div#area')//
    a.innerText = 'clicou!' 
    a.style.background='red'
  }

function mouseemcima() {
    var a=window.document.getElementById('area')
    a.innerText = 'vai clica'
  }

  function mousesaiu() {
      var a=window.document.getElementById('area')
      a.innerText='clica'
      a.style.background='rgb(114, 209, 19)'
  }