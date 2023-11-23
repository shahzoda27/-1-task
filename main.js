const TotalNumber = ()=>{
    let aSon = +document.getElementById("aSon").value
    let bSon = +document.getElementById("bSon").value
    let amal = document.getElementById("amal").value
    let result = 0
    if (amal === '-') {
        result = aSon - bSon
    }else  if (amal === '+') {
        result = aSon + bSon
    }else  if (amal === '/') {
        result = aSon / bSon
    }else  if (amal === '*') {
        result = aSon * bSon
    }else{
        alert("amalni to'g'ri kirit")
    }
    document.getElementById("result").innerText = result;
}
