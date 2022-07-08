let slideInterval;
let slideCounter = 0;
const MAX_FOTO = 13;

window.addEventListener('load', () => {
    startSlides();
    document.querySelector('.sldImages').addEventListener('mouseover', stopSlides);
    document.querySelector('.sldImages').addEventListener('mouseout', startSlides);
    document.querySelector(".drp").addEventListener('mouseover', stopSlides);
    document.querySelector(".drp").addEventListener('mouseout', startSlides);
    document.querySelector('.btnNext').addEventListener('click', () => {
        if (slideCounter > MAX_FOTO - 1) {
            slideCounter = 1;
        } else {
            slideCounter++
        }
        let elementButton = document.querySelector('#drp' + slideCounter);
        let allElementButton = document.querySelectorAll(".drops > button");
        for (let slideCounter = 0; slideCounter < allElementButton.length; slideCounter++) {
            const elementButton = allElementButton[slideCounter];
            elementButton.style.backgroundColor = '';
        }
        document.querySelector('#drp' + slideCounter).style.backgroundColor = 'rgba(0, 0, 0, 0.253)';
        document.querySelector('.sldImages').style.backgroundImage = `url(images/${slideCounter}.jpg)`;
    });

    document.querySelector('.btnPrev').addEventListener('click', () => {
        if (slideCounter <= 1) {
            slideCounter = MAX_FOTO;
        } else {
            slideCounter--
        }
        let elementButton = document.querySelector('#drp' + slideCounter);
        let allElementButton = document.querySelectorAll(".drops > button");
        for (let slideCounter = 0; slideCounter < allElementButton.length; slideCounter++) {
            const elementButton = allElementButton[slideCounter];
            elementButton.style.backgroundColor = '';
        }
        document.querySelector('#drp' + slideCounter).style.backgroundColor = 'rgba(0, 0, 0, 0.253)';
        document.querySelector('.sldImages').style.backgroundImage = `url(images/${slideCounter}.jpg)`;
    });

    document.querySelector('.btnNext').addEventListener('mouseover', stopSlides);
    document.querySelector('.btnPrev').addEventListener('mouseover', stopSlides);
    document.querySelector('.btnNext').addEventListener('mouseout', startSlides);
    document.querySelector('.btnPrev').addEventListener('mouseout', startSlides);

    let allCircles = document.querySelectorAll('.drp');
    for (let nextCircleIndex = 0; nextCircleIndex < allCircles.length; nextCircleIndex++) {
        const circle = allCircles[nextCircleIndex];
        circle.addEventListener("click", () => {
            stopSlides();
            let activeButtonId = parseInt(window.event.target.id.split("drp")[1]);
            let allElementButton = document.querySelectorAll(".drops > button");
            for (let n = 0; n < allElementButton.length; n++) {
                const elementButton = allElementButton[n];
                if (n == activeButtonId) {
                    elementButton.style.backgroundColor = 'rgba(0, 0, 0, 0.253)';
                } else {
                    elementButton.style.backgroundColor = '';
                }
            }
            document.querySelector('.sldImages').style.backgroundImage = `url(images/${activeButtonId}.jpg)`;
        });
    }
});
function stopSlides() {
    clearInterval(slideInterval);
};
function startSlides() {
    slideInterval = setInterval(nextSlide, 2000);
};
function nextSlide() {
    if (slideCounter >= MAX_FOTO) {
        slideCounter = 1;
    } else {
        slideCounter++
    }
    let allElementButton = document.querySelectorAll(".drops > button");
    for (let slideCounter = 0; slideCounter < allElementButton.length; slideCounter++) {
        const elementButton = allElementButton[slideCounter];
        elementButton.style.backgroundColor = '';
    }
    document.querySelector('#drp' + slideCounter).style.backgroundColor = 'rgba(0, 0, 0, 0.253)';
    document.querySelector('.sldImages').style.backgroundImage = `url(images/${slideCounter}.jpg)`;
}
