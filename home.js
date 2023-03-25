const icon = document.getElementById("icon")
const nama = document.getElementById("nama")
const bintang = document.getElementById("bintang")
const deskripsi = document.getElementById("deskripsi")
const prev = document.getElementById("prev")
const kiri = document.getElementById("kiri")
const kanan = document.getElementById("kanan")
const next = document.getElementById("next")
const belakang = document.getElementById("belakang")
const utama = document.getElementById("utama")
const circle = document.getElementById("circle")
const play = document.getElementById("play")

kanan.addEventListener("click", () =>{
    nama.innerHTML = 'Mika';
    icon.src = 'homeAsset/simbolMika.png'
    icon.style.width = "80%";
    bintang.style.display = "none";
    deskripsi.innerHTML = 'A young knight born to an ordinary family. He serves as a Front-Line Surveyor in his Company. He is a low-key and cautious character.'
    kiri.style.opacity = "0.5";
    kanan.style.opacity = 1;
    belakang.src = 'homeAsset/img-blkng2.png';
    utama.src = 'homeAsset/mainMika.png';
    circle.src = 'homeAsset/circle-img-mika.png';
    play.src = 'homeAsset/mikaTombolPlay.png';
})

next.addEventListener("click", () => {
    nama.innerHTML = 'Mika';
    icon.src = 'homeAsset/simbolMika.png'
    icon.style.width = "80%";
    bintang.style.display = "none";
    deskripsi.innerHTML = 'A young knight born to an ordinary family. He serves as a Front-Line Surveyor in his Company. He is a low-key and cautious character.'
    kiri.style.opacity = "0.5";
    kanan.style.opacity = 1;
    belakang.src = 'homeAsset/img-blkng2.png';
    utama.src = 'homeAsset/mainMika.png';
    circle.src = 'homeAsset/circle-img-mika.png';
    play.src = 'homeAsset/mikaTombolPlay.png';
})

kiri.addEventListener("click", () => {
    nama.innerHTML = 'Dehya';
    icon.src = 'homeAsset/simbolDehya.png';
    bintang.style.display = 1;
    deskripsi.innerHTML = 'A member of the Eremites, a mercenary organization that roams the sands of Sumeru. Valiant and powerful, she enjoys great fame amongst her fellow Eremites.';
    kiri.style.opacity = 1;
    kanan.style.opacity = "0.5";
    belakang.src = 'homeAsset/img-blkng.png';
    utama.src = 'homeAsset/mainDehya.png';
    circle.src = 'homeAsset/circle-img-dehya.png';
    play.src = 'homeAsset/dehya tombol play.png';
})

prev.addEventListener("click", () => {
    nama.innerHTML = 'Dehya';
    icon.src = 'homeAsset/simbolDehya.png';
    bintang.style.display = 1;
    deskripsi.innerHTML = 'A member of the Eremites, a mercenary organization that roams the sands of Sumeru. Valiant and powerful, she enjoys great fame amongst her fellow Eremites.';
    kiri.style.opacity = 1;
    kanan.style.opacity = "0.5";
    belakang.src = 'homeAsset/img-blkng.png';
    utama.src = 'homeAsset/mainDehya.png';
    circle.src = 'homeAsset/circle-img-dehya.png';
    play.src = 'homeAsset/dehya tombol play.png';
})

function openNav() {
    let bav = document.getElementById("dropdown");

    if(bav.className === "drop-down")
    {
        bav.className += " active"
    }else{
        bav.className = "drop-down"
    }

}