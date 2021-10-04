let navStatus = true;

if(window.innerWidth <= 1150){
    navStatus = false
}

function toggleNav(){
    if(navStatus == true){
        document.querySelector('.sidebar').style.left ="-250px";
        navStatus=false;
    }else if(navStatus == false){
        document.querySelector('.sidebar').style.left ="0px";
        navStatus=true;
    }
}