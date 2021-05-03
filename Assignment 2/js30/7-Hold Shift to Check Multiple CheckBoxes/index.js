

document.addEventListener("keydown", function (e) {

    if (e.keyCode === 16) {
       
        var count = 1;
        var a = new Array();
        for (var i = 1; i <= 6; i++) {

            if (document.querySelector(`#i${i}`).checked) {
                a[count] = i;
                count++;
            }


        }

        for(var j=a[1] ; j<=a[2] ; j++){
            document.querySelector(`#i${j}`).checked = true;
        }


    }




})