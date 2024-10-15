let lengthslider=document.getElementById('lengthSlider');
let slidervalue=document.getElementById('sliderValue');


lengthSlider.addEventListener("input",()=>{

 
slidervalue.textContent=lengthslider.value;
});

let checkboxes=document.querySelectorAll('.checkbox');

  Array.from(checkboxes).forEach(Element=>{
    Element.addEventListener('click',(e)=>{
        if(e.target.innerText == 'radio_button_unchecked'){
         e.target.innerText='task_alt'
         e.target.nextElementSibling.nextElementSibling.checked=true;
        }
        
        else{
           e.target.innerText='radio_button_unchecked'
           e.target.nextElementSibling.nextElementSibling.checked=false;
        }
    })
})

let includes=document.querySelectorAll('.row label')


Array.from(includes).forEach(Element=>{
  Element.addEventListener('click',(e)=>{
      if(e.target.previousElementSibling.innerText == 'radio_button_unchecked'){
       e.target.previousElementSibling.innerText='task_alt'
      }

      else{
         e.target.previousElementSibling.innerText='radio_button_unchecked' 
      }
  })
})

let generateBtn=document.getElementById('generateBtn');
let password=document.getElementById('password');

generateBtn.addEventListener('click',function(){
  let length=lengthSlider.value

  let uppercase=document.getElementById('uppercase').checked
  let lowercase=document.getElementById('lowercase').checked
  let symbols=document.getElementById('Characters').checked
  let numbers=document.getElementById('numbers').checked
  let pass=generatepaa(length,uppercase,lowercase,Characters,numbers)
  password.value=pass;
})

function generatepaa(length,uppercase,lowercase,Characters,numbers){

  let charset=""
  let str=""

  if(uppercase){
    charset+="ABCDEFIJKLMNOPQRSTUVWXYZ"
  }
  if(lowercase){
    charset+="abcdefijklmnopqrstuvwxyz"
  }
  if(numbers){
    charset+="0987654321"
  }
  if(uppercase){
    charset+="!@#$%^&,*?"
  }
 
  for(let i=0;i<length;i++){
    str+=charset.charAt(Math.floor(Math.random()*charset.length))

  }
  return str;

}
 
let copy=document.getElementById('copyIcon')

copy.addEventListener("click",()=>{
  if(password.value!=""){
    password.select();
    document.execCommand("copy");

    copy.innerText='check'

    setTimeout(()=>{
      copy.innerText='content_copy'
    },2000)
 
  }
  else{
    copy.innerText='content_copy'
  }
  
})