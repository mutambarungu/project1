let slideIndex2 = 0;
const slides = [1, 2, 3]
let timeOut;

animateSlides();

function animateSlides() {
    const prevElement = document.getElementById(`slide-${slideIndex2}`)
    if (slideIndex2 !== 0) {
        const prevCircleElement = document.getElementById(`slide-circle-${slideIndex2}`)
        const prevTextElement = document.getElementById(`text-${slideIndex2}`)
        if (!prevCircleElement || !prevTextElement) return;
        prevCircleElement.classList.remove('active-circle')
        prevTextElement.classList.remove('active-text')
        prevTextElement.classList.remove('text-fade')
        prevElement.classList.remove('fade')
        prevElement.classList.remove('active-image-slider')
    }
    slideIndex2++;
    if (slideIndex2 > 3) {
        slideIndex2 = 1;
    }
    const element = document.getElementById(`slide-${slideIndex2}`)
    const newCircleElement = document.getElementById(`slide-circle-${slideIndex2}`)
    const newTextElement = document.getElementById(`text-${slideIndex2}`)
    if (!newCircleElement || !newTextElement) return;
    newCircleElement.classList.add('active-circle')
    newTextElement.classList.add('active-text')
    newTextElement.classList.add('text-fade')
    element.classList.add('fade')
    element.classList.add('active-image-slider')
    timeOut = setTimeout(animateSlides, 8000); // Change image every 8 seconds
}

function showSlide(number) {
    const element = document.getElementById(`slide-${number}`)
    const toRemove = slides.filter((slide) => slide !== number)
    toRemove.forEach((tr) => {
        const prevCircleElement = document.getElementById(`slide-circle-${tr}`)
        const prevTextElement = document.getElementById(`text-${tr}`)
        const prevElement = document.getElementById(`slide-${tr}`)
        prevCircleElement?.classList.remove('active-circle')
        prevTextElement?.classList.remove('active-text')
        prevTextElement?.classList.remove('text-fade')
        prevElement.classList.remove('active-image-slider')
        prevElement.classList.remove('fade')
    })
    const newCircleElement = document.getElementById(`slide-circle-${number}`)
    const newTextElement = document.getElementById(`text-${number}`)
    newCircleElement?.classList.add('active-circle')
    newTextElement?.classList.add('active-text')
    newTextElement?.classList.add('text-fade')
    element.classList.add('fade')
    element.classList.add('active-image-slider')
    slideIndex2 = number
    window.clearTimeout(timeOut)
    timeOut = setTimeout(animateSlides, 8000);
}
