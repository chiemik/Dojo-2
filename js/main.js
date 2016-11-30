function runRoamnConvert(){
    
  var n = parseInt(document.querySelector('.rom-input').value) ;
  console.log(n);
  document.querySelector('.rom-input').innerHTML = convert(n);
  
  var romanKey = [
      
       ["","I", "II", "III", "IV", "V", "VI","VII","VIII","IX"],
       ["","X", "XX", "XXX", "XL", "L", "LX","LXX","LXXX","XC"],  
       ["","C", "CC", "CCC", "CD", "D", "DC","DCC","DCCC","CM"],  
       ["","M", "MC", "MCC", "MCD", "MD", "MDC","MDCC","MDCCC","MCM"],  
      
      ];
 
function convert(num) {
    var decimal ="";
    var convertNumber = num.toString().split("").reverse();
    
    for (var i = 0; i <convertNumber.length; i++){
        decimal = romanKey[i][parseInt(convertNumber[i])] + decimal;
    }
 
    return decimal;

  }  

}