let generateButton = document.getElementById("generateButton")
let inputPassword = document.getElementById("inputPassword")
let imgCopy = document.getElementById("imgCopy")
let upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ` ;
let lowerCase = `abcdefghijklmnopqrstuvwxyz` ;
let number = `0123456789`
let symbol = `@#$%^&*()_+~|}{[]></-=`
let allChars = upperCase+lowerCase+number+symbol ;
let length = 12 ;

generateButton.onclick = ()=> {
   let password = '';
   password += upperCase[Math.floor(Math.random()*upperCase.length)]
   password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
   password += number[Math.floor(Math.random()*number.length)]
   password += symbol[Math.floor(Math.random()*symbol.length)]
   while (length > password.length) {
   password += allChars[Math.floor(Math.random()*allChars.length)]
   }
   inputPassword.value = password ;
}
imgCopy.onclick = () => {
   inputPassword.select()
   document.execCommand("copy")
}
