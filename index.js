function getFirstSelector(selector){
  const selectorValue = document.querySelector(selector)
  return selectorValue
}

function nestedTarget(){
  const div = document.querySelector("div.nested, div.target")
  return div
}

function deepestChild(){

}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (lis[i] + 1).toString()
  }
}
