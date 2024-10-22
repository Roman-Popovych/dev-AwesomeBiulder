


const floorPlan = () => {
    const flats = document.querySelectorAll('.flat')
    const flatInfo = document.querySelector('.information-list')
    console.log(flatInfo)

    const removeActiveClass = () => flats.forEach(item => item.classList.remove('active'))

    flats.forEach(flat => {
        flat.addEventListener('click', function() {
            removeActiveClass()
            flat.classList.add('active')
        })
    })
}

document.querySelector('.floor-plan') ? floorPlan() : null