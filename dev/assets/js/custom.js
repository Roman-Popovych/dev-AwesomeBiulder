const buildItem = document.querySelectorAll('.build-item')
const informationAddress = document.querySelector('#information-address')
const informationFloors = document.querySelector('#information-floors')
const informationFlatsAll = document.querySelector('#information-flats-all')
const informationFlatsFree = document.querySelector('#information-flats-free')
const informationFlatsAction = document.querySelector('#information-flats-action')
const informationFlatsReservation = document.querySelector('#information-flats-reservation')

buildItem.forEach(build => {
    build.addEventListener('mouseover', function(){
        // console.log('mouseover')
        const buildAddress = build.getAttribute('data-address')
        const buildFloors = build.getAttribute('data-floors')
        const buildFlatsAll = build.getAttribute('data-flats-all')
        const buildFlatsFree = build.getAttribute('data-flats-free')
        const buildFlatsAction = build.getAttribute('data-flats-action')
        const buildFlatsReservation = build.getAttribute('data-flats-reservation')


        informationAddress.innerHTML = buildAddress
        informationFloors.innerHTML = buildFloors
        informationFlatsAll.innerHTML = buildFlatsAll
        informationFlatsFree.innerHTML = buildFlatsFree
        informationFlatsAction.innerHTML = buildFlatsAction
        informationFlatsReservation.innerHTML = buildFlatsReservation
    })
})