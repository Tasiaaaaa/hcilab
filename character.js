const charName1 = document.getElementById('character-name1')
const charDesc1 = document.getElementById('character-desc1')
const charPhoto1 = document.getElementById('character-photo1')
const slider1 = document.getElementById("slider1") 
const potraits1 = document.querySelectorAll(".potrait1")
const potrait1_1 = document.querySelector("#potrait1-1 img") 
const potrait1_2 = document.querySelector("#potrait1-2 img") 
const potrait1_3 = document.querySelector("#potrait1-3 img")

let charactersDesc1 = [
    'A bard that seems to have arrived on some unknown wind — sometimes sings songs as old as the hills, and other times recites poems fresh and new.',
    'As the Acting Grand Master of the Knights Jean has always been devoted to her duties and maintaining peace in Mondstadt.',
    'As the wealthiest gentleman in Mondstadt, the ever-dapper Diluc always presents himself as the epitome of perfection. '
]

let charactersName1 = [
    'JEAN', 'AMBER', 'LISA'
]

let charactersPhoto1 = [
    'character/monstadt/jeanPhoto.png',
    'character/monstadt/amberPhoto.png',
    'character/monstadt/lisaPhoto.png'
]

let characterPotrait1 = [
    ['character/monstadt/jean_potraitChosen.png',
    'character/monstadt/amber_potrait.png',
    'character/monstadt/lisa_potrait.png',],
    ['character/monstadt/jean_potrait.png',
    'character/monstadt/amber_potraitChosen.png',
    'character/monstadt/lisa_potrait.png',],
    ['character/monstadt/jean_potrait.png',
    'character/monstadt/amber_potrait.png',
    'character/monstadt/lisa_potraitChosen.png',]
]

//Set Default
charName1.innerHTML = charactersName1[0]
charDesc1.innerHTML = charactersDesc1[0]
charPhoto1.style.backgroundImage = 'url(' + charactersPhoto1[0] + ')'
potrait1_1.src=characterPotrait1[0][0]
potrait1_2.src=characterPotrait1[0][1]
potrait1_3.src=characterPotrait1[0][2]

slider1.addEventListener("click", () =>{
    potraits1.forEach((potrait1, index) => {
        potrait1.addEventListener("click", () => {
            charName1.innerHTML = charactersName1[index]
            charDesc1.innerHTML = charactersDesc1[index]
            charPhoto1.style.backgroundImage = 'url(' + charactersPhoto1[index] + ')'
            potrait1_1.src=characterPotrait1[index][0]
            potrait1_2.src=characterPotrait1[index][1]
            potrait1_3.src=characterPotrait1[index][2]
        })
    })
})

function choosePotrait1_1(){
    console.log(1)
    charName1.innerHTML = charactersName1[0]
    charDesc1.innerHTML = charactersDesc1[0]
    charPhoto1.style.backgroundImage = 'url(' + charactersPhoto1[0] + ')'
    potrait1_1.src=characterPotrait1[0][0]
    potrait1_2.src=characterPotrait1[0][1]
    potrait1_3.src=characterPotrait1[0][2]
}

function choosePotrait1_2(){
    console.log(2)
    charName1.innerHTML = charactersName1[1]
    charDesc1.innerHTML = charactersDesc1[1]
    charPhoto1.style.backgroundImage = 'url(' + charactersPhoto1[1] + ')'
    potrait1_1.src=characterPotrait1[1][0]
    potrait1_2.src=characterPotrait1[1][1]
    potrait1_3.src=characterPotrait1[1][2]
}

function choosePotrait1_3(){
    console.log(3)
    charName1.innerHTML = charactersName1[2]
    charDesc1.innerHTML = charactersDesc1[2]
    charPhoto1.style.backgroundImage = 'url(' + charactersPhoto1[2] + ')'
    potrait1_1.src=characterPotrait1[2][0]
    potrait1_2.src=characterPotrait1[2][1]
    potrait1_3.src=characterPotrait1[2][2]
}

potrait1_1.addEventListener('click', choosePotrait1_1());
potrait1_2.addEventListener('click', choosePotrait1_2());
potrait1_3.addEventListener('click', choosePotrait1_3());

const charName2 = document.getElementById('character-name2')
const charDesc2 = document.getElementById('character-desc2')
const charPhoto2 = document.getElementById('character-photo2')
const slider2 = document.getElementById("slider2") 
const potraits2 = document.querySelectorAll(".potrait2")
const potrait2_1 = document.querySelector("#potrait2-1 img") 
const potrait2_2 = document.querySelector("#potrait2-2 img") 
const potrait2_3 = document.querySelector("#potrait2-3 img")

let charactersDesc2 = [
    'Wangsheng Funeral Parlor mysterious consultant. Handsome, elegant, and surpassingly learned.',
        'Owner of the Jade Chamber in the skies above Liyue, there are stories abound about Ningguang, with her elegance and mysterious smile.',
        'There are those who say she can split mountains and part the sea. Others say she draws lightning through her sword. Some say that even the mightiest of sea beasts are no match for her.'
]

let charactersName2 = [
    'XIAO', 'BEIDOU', 'NINGGUANG'
]

let charactersPhoto2 = [
    'character/liyue/xiaoPhoto.png',
    'character/liyue/beidouPhoto.png',
    'character/liyue/ningguangPhoto.png'
]

let characterPotrait2 = [
    ['character/liyue/xiao_potraitChosen.png',
    'character/liyue/beidou_potrait.png',
    'character/liyue/ningguang_potrait.png'],
    ['character/liyue/xiao_potrait.png',
    'character/liyue/beidou_potraitChosen.png',
    'character/liyue/ningguang_potrait.png'],
    ['character/liyue/xiao_potrait.png',
    'character/liyue/beidou_potrait.png',
    'character/liyue/ningguang_potraitChosen.png']
]

//Set Default
charName2.innerHTML = charactersName2[0]
charDesc2.innerHTML = charactersDesc2[0]
charPhoto2.style.backgroundImage = 'url(' + charactersPhoto2[0] + ')'
potrait2_1.src=characterPotrait2[0][0]
potrait2_2.src=characterPotrait2[0][1]
potrait2_3.src=characterPotrait2[0][2]

slider2.addEventListener("click", () =>{
    potraits2.forEach((potrait2, index) => {
        potrait2.addEventListener("click", () => {
            charName2.innerHTML = charactersName2[index]
            charDesc2.innerHTML = charactersDesc2[index]
            charPhoto2.style.backgroundImage = 'url(' + charactersPhoto2[index] + ')'
            potrait2_1.src=characterPotrait2[index][0]
            potrait2_2.src=characterPotrait2[index][1]
            potrait2_3.src=characterPotrait2[index][2]
        })
    })
})

function choosePotrait2_1(){
    console.log(1)
    charName2.innerHTML = charactersName2[0]
    charDesc2.innerHTML = charactersDesc2[0]
    charPhoto2.style.backgroundImage = 'url(' + charactersPhoto2[0] + ')'
    potrait2_1.src=characterPotrait2[0][0]
    potrait2_2.src=characterPotrait2[0][1]
    potrait2_3.src=characterPotrait2[0][2]  
}

function choosePotrait2_2(){
    console.log(2)
    charName2.innerHTML = charactersName2[1]
    charDesc2.innerHTML = charactersDesc2[1]
    charPhoto2.style.backgroundImage = 'url(' + charactersPhoto2[1] + ')'
    potrait2_1.src=characterPotrait2[1][0]
    potrait2_2.src=characterPotrait2[1][1]
    potrait2_3.src=characterPotrait2[1][2]
}

function choosePotrait2_3(){
    console.log(3)
    charName2.innerHTML = charactersName2[2]
    charDesc2.innerHTML = charactersDesc2[2]
    charPhoto2.style.backgroundImage = 'url(' + charactersPhoto2[2] + ')'
    potrait2_1.src=characterPotrait2[2][0]
    potrait2_2.src=characterPotrait2[2][1]
    potrait2_3.src=characterPotrait2[2][2]
}

potrait2_1.addEventListener('click', choosePotrait2_1());
potrait2_2.addEventListener('click', choosePotrait2_2());
potrait2_3.addEventListener('click', choosePotrait2_3());

const charName3 = document.getElementById('character-name3')
const charDesc3 = document.getElementById('character-desc3')
const charPhoto3 = document.getElementById('character-photo3')
const slider3 = document.getElementById("slider3") 
const potraits3 = document.querySelectorAll(".potrait3")
const potrait3_1 = document.querySelector("#potrait3-1 img") 
const potrait3_2 = document.querySelector("#potrait3-2 img") 
const potrait3_3 = document.querySelector("#potrait3-3 img")

let charactersDesc3 = [
    'The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate.',
    'Daughter of the Yashiro Commissions Kamisato Clan from Inazuma. Dignified and elegant, wise and determined.',
    ' Beneath a youthful and carefree demeanor lies a heart that hides a great many burdens from the past. Seemingly easygoing, Kazuha has his own code of conduct.'
]

let charactersName3 = [
    'KAMISATO AYAKA', 'KAEDEHARA', 'YOIMIYA'
]

let charactersPhoto3 = [
    'character/inazuma/kamisato.png',
    'character/inazuma/kaedehara.png',
    'character/inazuma/yoimiya.png',
]

let characterPotrait3 = [
    ['character/inazuma/kamisato_potraitChosen.png',
    'character/inazuma/kaedehara_potrait.png',
    'character/inazuma/yoimiya_potrait.png'],
    ['character/inazuma/kamisato_potrait.png',
    'character/inazuma/kaedehara_potraitChosen.png',
    'character/inazuma/yoimiya_potrait.png'],
    ['character/inazuma/kamisato_potrait.png',
    'character/inazuma/kaedehara_potrait.png',
    'character/inazuma/yoimiya_potraitChosen.png']
]

//Set Default
charName3.innerHTML = charactersName3[0]
charDesc3.innerHTML = charactersDesc3[0]
charPhoto3.style.backgroundImage = 'url(' + charactersPhoto3[0] + ')'
potrait3_1.src=characterPotrait3[0][0]
potrait3_2.src=characterPotrait3[0][1]
potrait3_3.src=characterPotrait3[0][2]

slider3.addEventListener("click", () =>{
    potraits3.forEach((potrait3, index) => {
        potrait3.addEventListener("click", () => {
            charName3.innerHTML = charactersName3[index]
            charDesc3.innerHTML = charactersDesc3[index]
            charPhoto3.style.backgroundImage = 'url(' + charactersPhoto3[index] + ')'
            potrait3_1.src=characterPotrait3[index][0]
            potrait3_2.src=characterPotrait3[index][1]
            potrait3_3.src=characterPotrait3[index][2]
        })
    })
})

function choosePotrait3_1(){
    console.log(1)
    charName3.innerHTML = charactersName3[0]
    charDesc3.innerHTML = charactersDesc3[0]
    charPhoto3.style.backgroundImage = 'url(' + charactersPhoto3[0] + ')'
    potrait3_1.src=characterPotrait3[0][0]
    potrait3_2.src=characterPotrait3[0][1]
    potrait3_3.src=characterPotrait3[0][2]
}

function choosePotrait3_2(){
    console.log(2)
    charName3.innerHTML = charactersName3[1]
    charDesc3.innerHTML = charactersDesc3[1]
    charPhoto3.style.backgroundImage = 'url(' + charactersPhoto3[1] + ')'
    potrait3_1.src=characterPotrait3[1][0]
    potrait3_2.src=characterPotrait3[1][1]
    potrait3_3.src=characterPotrait3[1][2]
}

function choosePotrait3_3(){
    console.log(3)
    charName3.innerHTML = charactersName3[2]
    charDesc3.innerHTML = charactersDesc3[2]
    charPhoto3.style.backgroundImage = 'url(' + charactersPhoto3[2] + ')'
    potrait3_1.src=characterPotrait3[2][0]
    potrait3_2.src=characterPotrait3[2][1]
    potrait3_3.src=characterPotrait3[2][2]
}

potrait3_1.addEventListener('click', choosePotrait3_1());
potrait3_2.addEventListener('click', choosePotrait3_2());
potrait3_3.addEventListener('click', choosePotrait3_3());

const charName4 = document.getElementById('character-name4')
const charDesc4 = document.getElementById('character-desc4')
const charPhoto4 = document.getElementById('character-photo4')
const slider4 = document.getElementById("slider4") 
const potraits4 = document.querySelectorAll(".potrait4")
const potrait4_1 = document.querySelector("#potrait4-1 img") 
const potrait4_2 = document.querySelector("#potrait4-2 img") 
const potrait4_3 = document.querySelector("#potrait4-3 img")

let charactersDesc4 = [
    'Lesser Lord Kusanali dwells deep in the Sanctuary of Surasthana, and has never really been in the limelight, nor has she even been mentioned much.',
        'The General Mahamatra of the Akademiya, leader of all the Matras. He has a unique sense of humor that never fails to leave a deep impression.',
        'Star of the Zubayr Theater. Her dance is as graceful as a water lily in first bloom, pure and pristine.'
]

let charactersName4 = [
    'TIGHNARI', 'COLLEI', 'DORI'
]

let charactersPhoto4 = [
    'character/sumeru/tighnariPhoto.png',
    'character/sumeru/colleiPhoto.png',
    'character/sumeru/doriPhoto.png',
]

let characterPotrait4 = [
    ['character/sumeru/tighnari_potraitChosen.png',
    'character/sumeru/collei_potrait.png',
    'character/sumeru/dori_potrait.png'],
    ['character/sumeru/tighnari_potrait.png',
    'character/sumeru/collei_potraitChosen.png',
    'character/sumeru/dori_potrait.png'],
    ['character/sumeru/tighnari_potrait.png',
    'character/sumeru/collei_potrait.png',
    'character/sumeru/dori_potraitChosen.png']
]

//Set Default
charName4.innerHTML = charactersName4[0]
charDesc4.innerHTML = charactersDesc4[0]
charPhoto4.style.backgroundImage = 'url(' + charactersPhoto4[0] + ')'
potrait4_1.src=characterPotrait4[0][0]
potrait4_2.src=characterPotrait4[0][1]
potrait4_3.src=characterPotrait4[0][2]

slider4.addEventListener("click", () =>{
    potraits4.forEach((potrait4, index) => {
        potrait4.addEventListener("click", () => {
            charName4.innerHTML = charactersName4[index]
            charDesc4.innerHTML = charactersDesc4[index]
            charPhoto4.style.backgroundImage = 'url(' + charactersPhoto4[index] + ')'
            potrait4_1.src=characterPotrait4[index][0]
            potrait4_2.src=characterPotrait4[index][1]
            potrait4_3.src=characterPotrait4[index][2]
        })
    })
})

function choosePotrait4_1(){
    console.log(1)
    charName4.innerHTML = charactersName4[0]
    charDesc4.innerHTML = charactersDesc4[0]
    charPhoto4.style.backgroundImage = 'url(' + charactersPhoto4[0] + ')'
    potrait4_1.src=characterPotrait4[0][0]
    potrait4_2.src=characterPotrait4[0][1]
    potrait4_3.src=characterPotrait4[0][2]
}

function choosePotrait4_2(){
    console.log(2)
    charName4.innerHTML = charactersName4[1]
    charDesc4.innerHTML = charactersDesc4[1]
    charPhoto4.style.backgroundImage = 'url(' + charactersPhoto4[1] + ')'
    potrait4_1.src=characterPotrait4[1][0]
    potrait4_2.src=characterPotrait4[1][1]
    potrait4_3.src=characterPotrait4[1][2]
}

function choosePotrait4_3(){
    console.log(3)
    charName4.innerHTML = charactersName4[2]
    charDesc4.innerHTML = charactersDesc4[2]
    charPhoto4.style.backgroundImage = 'url(' + charactersPhoto4[2] + ')'
    potrait4_1.src=characterPotrait4[2][0]
    potrait4_2.src=characterPotrait4[2][1]
    potrait4_3.src=characterPotrait4[2][2]
}

potrait4_1.addEventListener('click', choosePotrait4_1());
potrait4_2.addEventListener('click', choosePotrait4_2());
potrait4_3.addEventListener('click', choosePotrait4_3());