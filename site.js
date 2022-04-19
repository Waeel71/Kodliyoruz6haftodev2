let items = [];
let list = document.querySelector("#list");
let i = 0;
function save() {
    let input = document.querySelector("#task");
    items[i] = input.value;
    if (input.value == "") {
        var myToastEl = document.getElementById('liveToasterror');
        var myToast =new bootstrap.Toast(myToastEl);
        myToast.show();
    } else {
        var myToastEl = document.getElementById('liveToast');
        var myToast =new bootstrap.Toast(myToastEl);
        myToast.show();
        list.innerHTML += "<li class='listitem' id='iteml'>" + items[i] + "<span class = 'sil' id='delete'>X</span></li>"
    }
    input.value = "";
    i++;
}
let targt = [];
let j = 0;
list.addEventListener("click", function (e) {
    if (e.target.className != 'sil') {
        e.target.style = "text-decoration:  line-through;background-color: #276678;";
        targt[j] = e.target;
        console.log(targt[j]);
        j++;
    } else {
        targt.forEach(element => {
            element.remove();
        });
    }
});