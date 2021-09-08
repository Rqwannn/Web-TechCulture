navStatus=true;
    function toggleNav(){
        if(navStatus == true){
            document.getElementById('nav').style.left ="-250px";
            navStatus=false;
        }
        else if(navStatus == false){
            document.getElementById('nav').style.left ="0px";
            navStatus=true;
        }
    }