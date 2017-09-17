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
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankedLists.length; i++) {
    console.log(children[i]);
    rankedLists[i].innerHTML = (parseInt(rankedLists[i].innerHTML + n))

  }
}
