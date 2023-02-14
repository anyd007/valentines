const bacgroundBody = document.querySelector("body")

const createSquare =() =>{
    const square = document.createElement("span")
    square.classList.add("span-heart")

    let size = 40;

    square.style.width = 20 + size + "px";
    square.style.height = 20 + size + "px";
    square.style.top = Math.random() * innerHeight + "px";
    square.style.left = Math.random() * innerWidth + "px";

    // const bg = colors[Math.floor(Math.random() * colors.length)]
    square.style.background = "url('assets/images/heart.png')"
    square.style.backgroundRepeat = "no-repeat"
    square.style.backgroundSize = 'cover'

    bacgroundBody.appendChild(square)

    setTimeout(() => {
        square.remove()
    }, 5000);
}

setInterval(createSquare, 150)

var typed = new Typed(".auto-type", {
    strings:["Kochana Mariolo, z okazji Walentynek chcę Ci podziękować za to, że jesteś ze mną i że dzielimy ze sobą miłość, radość i trudne chwile. Nie wyobrażam sobie życia bez Ciebie. Kocham Cię bardzo i zawsze będę Cię kochał!"],
    typeSpeed: 100,
    backSpeed: 150,
    loop: false,
    shuffle: true,
})