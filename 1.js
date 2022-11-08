const startingMinutes =15;
let time=startingMinutes*60;

const countdownEl=document.getElementById('countdown');
b=setInterval(updateCountdown, 1000);
a=setInterval(fun1,900000);

function updateCountdown(){
    const minutes=Math.floor(time/60);
    let seconds= time % 60;
    seconds=seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML=minutes+":"+seconds;
    time--;
}  
var res=0;

function fun(){
    if(document.getElementById('4').checked){
     res = res + 2
     

    }
    if(document.getElementById('5').checked){
     res = res + 2
    }
    if(document.getElementById('11').checked){
     res = res + 2
    }
    if(document.getElementById('16').checked){
     res = res + 2
    }
    if(document.getElementById('17').checked){
     res = res + 2
    }
    if(document.getElementById('21').checked){
     res = res + 2
    }
    if(document.getElementById('27').checked){
     res = res + 2
    }
    if(document.getElementById('32').checked){
     res = res + 2
    }
    if(document.getElementById('33').checked){
     res = res + 2
    }
    if(document.getElementById('37').checked){
     res = res + 2
    }
    alert("Moving to the second round...");
    alert(res)
}


function fun3(){
    
     
    if(document.getElementById('62').checked){
     res = res + 2
    }
    if(document.getElementById('67').checked){
     res = res + 2
    }
    if(document.getElementById('71').checked){
     res = res + 2
    }
    if(document.getElementById('76').checked){
     res = res + 2
    }
    if(document.getElementById('80').checked){
     res = res + 2
    }
    // console.log(res)
    alert("Moving to the third round...");
    alert(res)
}

function fun6(){
      
    if(document.getElementById('44').checked){
        res = res + 2
       }
       if(document.getElementById('47').checked){
        res = res + 2
       }
       if(document.getElementById('50').checked){
        res = res + 2
       }
       if(document.getElementById('53').checked){
        res = res + 2
       }
       if(document.getElementById('57').checked){
        res = res + 2
       }
       
       alert(res)

}



function fun5(){
    if(document.getElementById('4').checked){
        // alert("hi")
         document.getElementById("a2").innerHTML = "<span style='color: red;'>Kangaroo Rat</span>"
   
       }

       if(document.getElementById('5').checked){
        // alert("hi")
         document.getElementById("a3").innerHTML = "<span style='color: red;'>Protoplasm</span>"
   
       }
       if(document.getElementById('11').checked){
        // alert("hi")
         document.getElementById("a4").innerHTML = "<span style='color: red;'>Kangaroo Rat</span>"
   
       }
       if(document.getElementById('16').checked){
        // alert("hi")
         document.getElementById("a5").innerHTML = "<span style='color: red;'>Kangaroo Rat</span>"
   
       }
       if(document.getElementById('17').checked){
        // alert("hi")
         document.getElementById("a6").innerHTML = "<span style='color: red;'>Kangaroo Rat</span>"
   
       }
       if(document.getElementById('21').checked){
        // alert("hi")
         document.getElementById("a7").innerHTML = "<span style='color: red;'>Kangaroo Rat</span>"
   
       }
       if(document.getElementById('27').checked){
        // alert("hi")
         document.getElementById("a8").innerHTML = "<span style='color: red;'>Kangaroo Rat</span>"
   
       }
       if(document.getElementById('32').checked){
        // alert("hi")
         document.getElementById("a9").innerHTML = "<span style='color: red;'>Kangaroo Rat</span>"
   
       }
       if(document.getElementById('33').checked){
        // alert("hi")
         document.getElementById("a10").innerHTML = "<span style='color: red;'>Kangaroo Rat</span>"
   
       }
       if(document.getElementById('37').checked){
        // alert("hi")
         document.getElementById("a11").innerHTML = "<span style='color: red;'>Kangaroo Rat</span>"
   
       }
}