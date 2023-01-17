function display(data) {
    // result.value=result.value+data
    result.value+=data
}
function clearData() {
    result.value=" "
}
function deletes() {
    data=result.value
    result.value=data.slice(0,-1)
}
function calculate() {
    datas=result.value
    res=eval(datas)
    result.value = res
}
