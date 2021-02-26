const wrapper = document.querySelector('.wrapper')  
const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.prev')
const items = document.querySelectorAll('.carousel__item')

const visibleItems = Math.round(document.querySelector('.carousel').clientWidth / items[0].clientWidth) 

let lastItem = visibleItems

/* 
    added 16px for the given margin.
    another type of animation is:
    (items[0].clientWidth + 16) * visibleItems
    need some modifications.
*/
nextButton.addEventListener('click', () => {
    if(items[lastItem] === void 0) return
    wrapper.style.transform += `translateX(-${items[0].clientWidth + 16}px)`
    ++lastItem
})

prevButton.addEventListener('click', () => {
    if(lastItem === visibleItems) return
    wrapper.style.transform += `translateX(${items[0].clientWidth + 16}px)`
    --lastItem
})