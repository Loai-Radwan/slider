
let sliderImages = Array.from(document.querySelectorAll('.slider-container img'))
let sliderCount = sliderImages.length
let currentIndex = 1
let sliderNumber = document.querySelector('.slider-number')
let prevButton = document.querySelector('.prev')
let nextButton = document.querySelector('.next')

prevButton.addEventListener('click' , prevSlid)
nextButton.addEventListener('click' , nextSlid)

var pagination = document.createElement('ul')
pagination.setAttribute('id','pagination')

for (let i = 1; i <= sliderCount ; i++){
    var li = document.createElement('li')
    li.innerHTML = i
    li.setAttribute('data-index' , i)

    if (i === currentIndex){
        li.classList.add('active')
    }
    pagination.appendChild(li)
}

document.querySelector('.indicators').appendChild(pagination)

let paginationUl = document.getElementById('pagination')
checker()
function checker(){
    console.log(currentIndex)
    sliderNumber.textContent = `Slide #${currentIndex} of ${sliderCount}`
    sliderImages.forEach(img => {
        img.classList.remove('active')
    })

    sliderImages[currentIndex - 1].classList.add('active')

    if (currentIndex === 1){
        prevButton.classList.add('disabled')
    }
    else{
        prevButton.classList.remove('disabled')
    }
    if (currentIndex === sliderCount){
        nextButton.classList.add('disabled')
    }else{
        nextButton.classList.remove('disabled')
    }
    Array.from(paginationUl.children).forEach(li =>{
        li.classList.remove('active')
        if (li.dataset.index == currentIndex){
            li.classList.add('active')
        }
    })
}
Array.from(paginationUl.children).forEach(num => {
    num.addEventListener('click' , function(){
        currentIndex = Number(num.dataset.index) ;
        checker()
    })
})

function nextSlid(){
    if (currentIndex < sliderCount){
        currentIndex++
        checker()
    }
}

function prevSlid(){
    if (currentIndex > 1){
        currentIndex--
        checker()
    }
}