function myFunction() {
    document.getElementById("myDropdown2").classList.toggle("show2");
}


function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown2");
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
    if (!event.target.matches(".dropbtn2")) {
        var dd = document.getElementsByClassName("dropdown-content2")
        for (var i = 0; i < dd.length; i++) {
            var x = dd[i];
            if (x.classList.contains("show2")) { x.classList.remove("show2") }
        }
    }
}