function myFunction() {
    document.getElementById("myDropdown_ece3").classList.toggle("show_ece3");
}


function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput_ece3");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown_ece3");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
window.onclick = function(event) {
    if (!event.target.matches(".dropbtn_ece3")) {
        var dd = document.getElementsByClassName("dropdown-content_ece3")
        for (var i = 0; i < dd.length; i++) {
            var x = dd[i];
            if (x.classList.contains("show_ece3")) { x.classList.remove("show_ece3") }
        }
    }
}