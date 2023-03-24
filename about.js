const btn_next = document.getElementById("next")
const btn_prev = document.getElementById("prev")
const gambar_slider = document.querySelector("#img")
// const gambar_slider = document.getElementById("img_background")


let gambar = [
    'assets/features1.jpg',
    'assets/features2.jpg',
    'assets/features3.jpg',
    'assets/features4.jpg',
    'assets/features5.jpg'
]

// console.log(gambar[4])
// gambar_slider.style.backgroundImage = 'url('+gambar[1]+')';

gambar_slider.src = gambar[0]

let position = 0;

const right  = () => {
    if(position >= gambar.length - 1){
        position = 0;
        gambar_slider.src = gambar[position];
        return;
    }
    gambar_slider.src = gambar[position + 1];
    position++;
}

const left = () => {
    if(position < 1){
        position = gambar.length - 1;
        gambar_slider.src = gambar[position];
        return;
    }
    gambar_slider.src = gambar[position - 1];
    position--;
}

btn_next.addEventListener("click", right)
btn_prev.addEventListener("click", left)

function openNav() {
    let bav = document.getElementById("dropdown");

    if(bav.className === "drop-down")
    {
        bav.className += " active"
    }else{
        bav.className = "drop-down"
    }

}