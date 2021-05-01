function insertNum(number) {
    var existingNum = $('#input').val();
     $('#input').val(existingNum+number);

}
function clear1() {


    $('#input').val('');

}
function calculate() {
var result = eval($('#input').val())
    $('#input').val(result);

}