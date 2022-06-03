function  startset(elm){
    if (elm.innerHTML==="Start") {
        document.getElementById("end").innerHTML="Stop";
        elm.innerHTML="set"
        times("start");
    }else if(elm.innerHTML==="set"){
        let div = document.createElement('p');
        div.innerHTML=`min:${min} second:${second} ms:${ms}`
        document.body.append(div);
    } 
}
function stop(str){
    if (str.innerHTML==="Stop") {
        times("stop")
        document.getElementById("startset").innerHTML="Start";
        str.innerHTML="Reset"
        
    }else if (str.innerHTML==="Reset") {
        ms=0;
        second=0;
        min=0;
        document.getElementById("min").innerHTML=`${min}`;
        document.getElementById("sec").innerHTML=`${second}`;
        document.getElementById("ms").innerHTML=`${ms}`;
    }
}
let ms=0;
let second=0;
let min=0;
function times(btn){

   if (btn=="start") {
    result =setInterval(()=>{
        ms+=1;
        if (ms==100) {
            second+=1;
            ms=0;
            
        }
        if (second==60) {
            min+=1;
            second=0;
        }
        document.getElementById("min").innerHTML=`${min}`
        document.getElementById("sec").innerHTML=`${second}`
        document.getElementById("ms").innerHTML=`${ms}`
        
    },10)
   }else if (btn=="stop") {
       clearTimeout(result)
   }
}

function set(set){
    if (set.innerHTML==="set") {
        console.log(min,second,ms);
    }
}