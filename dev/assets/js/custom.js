const installGenplan = () => {
    const buildItem = document.querySelectorAll('.build-item')
    const informationAddress = document.querySelector('#information-address')
    const informationFloors = document.querySelector('#information-floors')
    const informationFlatsAll = document.querySelector('#information-flats-all')
    const informationFlatsFree = document.querySelector('#information-flats-free')
    const informationFlatsAction = document.querySelector('#information-flats-action')
    const informationFlatsReservation = document.querySelector('#information-flats-reservation')

    buildItem.forEach(build => {
        build.addEventListener('mouseover', function(){
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

        const buildFree = build.getAttribute('data-flats-free')

        if(Number(buildFree) === 0) {
            build.classList.add('build-sold')
        }

        build.addEventListener('click', function(event) {
            if(build.classList.contains('build-sold')) {
                event.preventDefault();
            }
        })
    })

}

const installBuildItem = () => {
    const floorItem = document.querySelectorAll('.floor-item')
    const floorInformationFlatsFree = document.querySelector('#floor-information-flats-free')
    const floorInformationFlatsAction = document.querySelector('#floor-information-flats-action')
    const floorInformationFlatsReservation = document.querySelector('#floor-information-flats-reservation')

    floorItem.forEach(floor => {
        const floorFree = floor.getAttribute('data-flats-free')
        if (Number(floorFree) === 0) {
            floor.classList.add('floor-sold')
        }

        floor.addEventListener('click', function(event) {
            if (floor.classList.contains('floor-sold')) {
                event.preventDefault();
            }

        })

        floor.addEventListener('mouseover', function(){
            const floorFlatsFree = floor.getAttribute('data-flats-free')
            const floorFlatsAction = floor.getAttribute('data-flats-action')
            const floorFlatsReservation = floor.getAttribute('data-flats-reservation')


            floorInformationFlatsFree.innerHTML = floorFlatsFree
            floorInformationFlatsAction.innerHTML = floorFlatsAction
            floorInformationFlatsReservation.innerHTML = floorFlatsReservation
        })
    })

}


document.querySelector('.genplan') ? installGenplan() : null
document.querySelector('.page-build-item') ? installBuildItem() : null
