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
  const lis = document.querySelectorAll('ul.ranked-list li')

  for (var i = 0; i < lis.length; i++) {
    console.log(lis[i].innerHTML = (i + 1).toString())
  }
}
