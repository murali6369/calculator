function add(){
    let a=document .getElementById('num1').value
    let b=document .getElementById('num2').value
    let res=document.getElementById('para')
    let sum=parseFloat(a)+parseFloat(b)
    res.innerHTML=sum
}
function sub(){
    let a=document .getElementById('num1').value
    let b=document .getElementById('num2').value
    let res=document.getElementById('para')
    let sub=parseFloat(a)-parseFloat(b)
    res.innerHTML=sub
}
function mul(){
    let a=document .getElementById('num1').value
    let b=document .getElementById('num2').value
    let res=document.getElementById('para')
    let mul=parseFloat(a)*parseFloat(b)
    res.innerHTML=mul
}
function div(){
    let a=document .getElementById('num1').value
    let b=document .getElementById('num2').value
    let res=document.getElementById('para')
    let div=parseFloat(a)/parseFloat(b)
    res.innerHTML=div
}