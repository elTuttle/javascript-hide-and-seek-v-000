function getFirstSelector(selector){
  const selectorValue = document.querySelector(selector)
  return selectorValue
}

function nestedTarget(){
  const div = document.querySelector("div.nested, div.target")
  return div
}

function deepestChild(){
  const div = document.querySelector('#grand-node div div div div')
  return div
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  console.log(lis.innerHTML)

  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i]) + 1)
  }
}
