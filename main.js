function selector(restriction,items){

  for(let i = 0; i<items.length; i++){

    if(items[i].innerHTML.indexOf(restriction) > -1){
      items[i].style.display= "";

    }else{
      items[i].style.display= "NONE!";

    }
  }
}

let input = document.getElementsByTagName("input");
  input[0].addEventListener("keyup",function(){
  let inputCase = input.value;
  let list = document.getElementsByTagName("li")
  console.log(list);
  selector(inputCase,list);

})