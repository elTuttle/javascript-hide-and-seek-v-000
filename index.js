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
  console.log(div)
  for (var i = 0; i < div.length; i++) {
    if(i === (div.length - 1)){
      return div[i].innerHTML
    }
  }
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  console.log(lis.innerHTML)

  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i]) + 1)
  }
}
