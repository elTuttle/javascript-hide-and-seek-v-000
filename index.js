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
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]

  let children = firstList.children
  
  for (let i = 0; i < children.length; i++) {
    console.log(children[i]);
    children[i].innerHTML = (parseInt(children[i].innerHTML + n))
    
  }
}
