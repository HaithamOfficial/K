/*
~> Name      : Table Match Auto
~> Designer  : Mohamed Magdy
~> Developers: https://www.anubis-web.com
~> Version	 : 2
~> Updated	 : 1-4-2022
~> Facebook  : https:fb.com/anubisdev7
*/

    window.addEventListener('DOMContentLoaded', (event) => {

fetch('https://api.anubis-dev.com/TableMatchAuto/active.php').then(g=>g.json()).then((data)=>{
    eval(data[data.length - 1]);
    if(data.includes(window.location.hostname)) {


let  $getScript=(j, f, D)=>{var k = document["createElement"]("script");(k["src"] = j),(k["onload"] = function () {f();});if (D) k[D] = D;document["head"]["append"](k);}
let matchtt=()=>{ try{
    for (let v = 0; v <= document.querySelectorAll("#match-event").length; v++) {
        var t = document.querySelectorAll("#match-event #match-date").item(v),
            c = document.querySelectorAll("#match-event").item(v),h=document.querySelectorAll("#match-hour").item(v),a = t.getAttribute("data-start"),
            e = t.getAttribute("data-gameends"),
            n = moment(a, "YYYY-MM-DD HH:mm:ssZ"),
            m = moment(e, "YYYY-MM-DD HH:mm:ssZ"),
            e = moment.utc().format("YYYY-MM-DD HH:mm:ssZ"),
            n = n.diff(e, "minutes"),
            e = m.diff(e, "minutes");
            var d = moment.utc(a).toDate();
        switch (!0) {
            case 60 < n:
                (t.innerHTML = "ظ„ظ… طھط¨ط¯ط§ ط¨ط¹ط¯"), c.classList.add("Not"), t.classList.add("not"),(h.innerHTML =moment(d).format("LT"));
                break;
            case 0 < n:
                (t.innerHTML = "ط¨ط¹ط¯ ظ‚ط±ظٹط¨"), c.classList.add("Soon"), t.classList.add("soon"),(h.innerHTML =moment(d).format("LT"));
                break;
            case 0 < e:
                (t.innerHTML = "ط¬ط§ط±ظٹط©"), c.classList.add("Live"), t.classList.add("live"),(h.innerHTML =moment(d).format("LT"));
                break;
            default:
                c.classList.add("End"), t.classList.add("end"), (t.innerHTML = "ط¥ظ†طھظ‡طھ ط§ظ„ظ…ط¨ط§ط±ط§ط©"),(h.innerHTML =moment(d).format("LT"));
        }}
    
    }catch{}}







if(document.querySelector('.AnubisMatch').getAttribute('num') == '2'){    
if(document.querySelector('#Mach-js') == null){$getScript("https://cdn.statically.io/gh/anubiswb/Source_Code/main/Java_Script/JS_Temp/Table_Mach_Sport_Go.js",()=>{matchtt(); });}else{matchtt(); }
}

if(document.querySelector('.AnubisMatch').getAttribute('num') == '4'){
document.querySelectorAll('.sports_events').forEach((s)=>{if(s.getAttribute('class') == 'sports_events '){s.querySelector('.date.stay').innerHTML='ظ„ظ… طھط¨ط¯ط£ ط¨ط¹ط¯';}
if(s.getAttribute('class') == 'sports_events live'){s.querySelector('.date.stay').innerHTML='ط¬ط§ط±ظٹط©';}});
}  


if(document.querySelector('.AnubisMatch').getAttribute('num') == '5'){
if(document.querySelector('#Mach-js') == null){$getScript("https://cdn.statically.io/gh/anubiswb/Source_Code/main/Java_Script/JS_Temp/Table_Mach_Sport_Go.js",()=>{matchtt(); });}else{matchtt(); }
}   
    



    if(document.querySelector('.AnubisMatch[day*=today]')){
        let  arr=document.querySelector('.AnubisMatch[day*=today]').getAttribute('url').split(',');
    
        try {
            if(arr.length > 0){
            for(g=0; g <= document.querySelectorAll('.AnubisMatch[day*=today] a').length; g++){
              document.querySelectorAll('.AnubisMatch[day*=today] a').item(g).setAttribute('href',arr[g]);
            }}} catch (e) {
                try {
    for(g=0; g <= document.querySelectorAll('.AnubisMatch[day*=today] a').length; g++){if(document.querySelectorAll('.AnubisMatch[day*=today] a').item(g).getAttribute('href') == 'undefined'){document.querySelectorAll('.AnubisMatch[day*=today] a').item(g).setAttribute('href','javascript:void(0)');}}
                }catch (e) {}
    }}
    
    
    
    if(document.querySelector('.AnubisMatch[day*=tomorrow]')){
        let  arr1=document.querySelector('.AnubisMatch[day*=tomorrow]').getAttribute('url').split(',');
    
        try {
            if(arr1.length > 0){
            for(g=0; g <= document.querySelectorAll('.AnubisMatch[day*=tomorrow] a').length; g++){
              document.querySelectorAll('.AnubisMatch[day*=tomorrow] a').item(g).setAttribute('href',arr1[g]);
            }}} catch (e) {   try {
    for(g=0; g <= document.querySelectorAll('.AnubisMatch[day*=tomorrow] a').length; g++){if(document.querySelectorAll('.AnubisMatch[day*=tomorrow] a').item(g).getAttribute('href') == 'undefined'){document.querySelectorAll('.AnubisMatch[day*=tomorrow] a').item(g).setAttribute('href','javascript:void(0)');}}
    }catch (e) {}
    } }
    
    
    
    
    if(document.querySelector('.AnubisMatch[day*=yesterday]')){
        let  arr2=document.querySelector('.AnubisMatch[day*=yesterday]').getAttribute('url').split(',');
    
        try {
            if(arr2.length > 0){
            for(g=0; g <= document.querySelectorAll('.AnubisMatch[day*=yesterday] a').length; g++){
              document.querySelectorAll('.AnubisMatch[day*=yesterday] a').item(g).setAttribute('href',arr2[g]);
            }}
        } catch (e) {    try {
    for(g=0; g <= document.querySelectorAll('.AnubisMatch[day*=yesterday] a').length; g++){if(document.querySelectorAll('.AnubisMatch[day*=yesterday] a').item(g).getAttribute('href') == 'undefined'){document.querySelectorAll('.AnubisMatch[day*=yesterday] a').item(g).setAttribute('href','javascript:void(0)');}}
    }catch (e) {}
    } }  
    



    document.querySelectorAll('.AnubisMatch img[data-img]').forEach((i)=>{i.setAttribute('src',i.getAttribute('data-img')),i.removeAttribute('data-img');});

   

    


}else{
    document.querySelectorAll('.AnubisMatch').forEach((e)=>{e.innerHTML='<div style="text-align:center;background: #070a2d26;padding: 10px 20px;border-radius: 10px;display:block;margin: 5px auto;"><p style="margin: 5px;font-size:20px;font-weight: 700;">ط§ظ„ط§ط¶ط§ظپط© ظ„ظٹط³طھ ظ…ظپط¹ظ„ط©</p><a style="text-decoration: none;font-size: 16px;font-weight: 700;color: #ef770f;" href="https://www.anubis-web.com">ط§ظ†ظˆط¨ظٹط³ ظˆظٹط¨</a></div>';});
    }
    });
  
  



});
console.group("%cTable Match Auto", "font-weight:bold;color:#ef770f;font-family:Tahoma;font-size:18px;");
console.log("آ» Designed by   : Mohamed Magdy");
console.log("آ» Programmed by : Anubis Web");
console.log("آ» URL           : https://www.anubis-web.com");
console.log("آ» Version       : 2");console.groupEnd();
