var count=1;

function fill(control)
{
    if(count<9)
    {
    if(count%2!=0)
    {  if(document.getElementById(control.id).innerHTML !="")return;
        
        document.getElementById(control.id).innerHTML="X";
        count++;
      
    }
    else
    {
        if(document.getElementById(control.id).innerHTML !="") return;
    document.getElementById(control.id).innerHTML="0";
    count++;
    }
    
    if(checkwin())
    {
        setTimeout(function(){
            if(count%2!=0){
            alert("0 is WINNER")}
            else
            alert("X is WINNER")
        reset();

    },400);
    }
    }
    else
    {
        
        alert("Match Draw");
        reset();
}
}
function reset(){
    for(var i=1;i<=9;i++){
        document.getElementById("div"+i).innerHTML=""; 
    }count=1;

}
function checkwin()
{
    if(checkcondition('div1','div2','div3')||checkcondition('div1','div4','div7')||checkcondition('div1','div5','div9')||
    checkcondition('div3','div5','div7')||checkcondition('div3','div6','div9')||checkcondition('div4','div5','div6')||
    checkcondition('div7','div8','div9')||checkcondition('div2','div5','div8'))
    {
        return true;
    }

}
function checkcondition(div1,div2,div3){
    if(getdata(div1)!="" && getdata(div2)!="" && getdata(div3)!="" && getdata(div1)==getdata(div2) &&
    getdata(div2)==getdata(div3) )
    {
        return true;
    }
}

function getdata(div)
{
   return document.getElementById(div).innerHTML;
}