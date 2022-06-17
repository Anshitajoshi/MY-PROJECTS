

function insert(num){
    var text = document.form.textinput.value
    document.form.textinput.value = text + num
}
function clean(){
    document.form.textinput.value = ""
}
     
function calculate(){
    var text = document.form.textinput.value
    document.form.textinput.value = eval(text)
}
     
function back(){
     var text = document.form.textinput.value
     document.form.textinput.value = text.substring(0,text.length-1)
}
     
function calcsin(){
     var text = document.form.textinput.value
     if (selection == "rad"){
       document.form.textinput.value = Math.sin(text)
     } else if (selection == "deg"){
       document.form.textinput.value = Math.sin(text * (Math.PI / 180))
     }
   }
     
function calccos(){
   var text = document.form.textinput.value
   if (selection == "rad"){
     document.form.textinput.value = Math.cos(text)
   } else if (selection == "deg"){
     document.form.textinput.value = Math.cos(text * (Math.PI / 180))
   }
 }
     
function calctan(){
   var text = document.form.textinput.value
   if (selection == "rad"){
     document.form.textinput.value = Math.tan(text)
   } else if (selection == "deg"){
     document.form.textinput.value = Math.tan(text * (Math.PI / 180))
   }
 }
 
 function calcsqrt(){
 var text = document.form.textinput.value
 document.form.textinput.value = Math.sqrt(text)
 }
 
 function calcper(){
 var text = document.form.textinput.value
 document.form.textinput.value = text/100
 }
 
 function change_label_selection(){
   var label = document.getElementById("info")
   label.innerHTML = "<b>"+selection.toUpperCase()+"</b>"
 }
 
 function calcdeg(){
   var element = document.getElementById("deg")
   element.style = "border: solid red"
   var element2 = document.getElementById("rad")
   element2.style = "border solid"
   
   selection = "deg" //Set selection to deg
   change_label_selection()
 }
 
 function calcrad(){
   var element2 = document.getElementById("rad")
   element2.style = "border: solid red"
   var element = document.getElementById("deg")
   element.style = "border: solid"
   
   selection = "rad" //Set selection to rad
   change_label_selection()
 }
 
 function calclog(){
    var text = document.form.textinput.value
    document.form.textinput.value = Math.log(text)
 }
 
 function calcexp(){
    var text = document.form.textinput.value
    document.form.textinput.value = Math.exp(text)
 }