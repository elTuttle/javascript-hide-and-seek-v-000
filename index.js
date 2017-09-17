function getFirstSelector(selector){
  const selectorValue = document.querySelector(selector)
  return selectorValue
}

function nestedTarget(){
  const div = document.querySelector("div.nested, div.target")
  return div
}

function deepestChild(){
  const div = document.querySelectorAll('div.grand-node')
  for (var i = 0; i < div.length; i++) {
    if(i === (div.length - 1)){
      return div[i]
    }
  }
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  console.log(lis.innerHTML)

  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (lis[i] + 1).toString()
  }
}
