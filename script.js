//console. log( 'Hello World!')
//var prompt = prompt 'What is your name?')
//console.log(prompt)



function verifyAge(age){
  var age = prompt('What is your age?');
  console.log(age)

  if(age <18) {
    alert('you are a minor')
  } else if (age >= 18 && age <= 60) {
    alert('you are an adult')
  } else {
    alert('you are a senior citizen!')
  }
}