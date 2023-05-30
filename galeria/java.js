const fulImgbox = document.getElementById("fulImgBox");
fulImg = document.getElementById("fulImg");

function closeImg(){
    fulImgbox.style.display = "none";
}

function openFullImg(referencia){
    fulImgbox.style.display = "flex";
    fulImg.src = referencia;

}