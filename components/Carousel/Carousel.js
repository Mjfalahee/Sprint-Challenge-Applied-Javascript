class Carousel {
    constructor(carousel) {
        this.carousel = carousel //this carousel is assigned to DOM ref
        this.leftbutton = carousel.querySelector('.left-button') // Same for leftbutton
        //console.log(this.leftbutton)
        this.rightbutton = carousel.querySelector('.right-button') // right button
        //console.log(this.rightbutton)

        // node list of images
        this.allimages = carousel.querySelectorAll('.carousel-img')
        //console.log(this.allimages)
        this.imageindex = Array.from(this.allimages)
        //console.log(this.imageindex)
        this.currentimage = this.imageindex[0]
        //console.log(this.currentimage)

        this.rightbutton.addEventListener('click', () => this.moveright())
        this.leftbutton.addEventListener('click', () => this.moveleft())
    }

    moveright() {
        let current = this.currentimage.dataset.number
        let reset = this.imageindex[0]
        console.log('current is: ' + current)

        this.imageindex.forEach(element => {
            element.classList.remove('active-img')
        })

        if (current != 4) {
            this.currentimage = this.imageindex[current]
            console.log(this.currentimage)
            this.currentimage.classList.add('active-img')
        }

        else {
            current = 0
            this.currentimage = this.imageindex[current]
            console.log(this.currentimage)
            this.currentimage.classList.add('active-img')
        }

    }

    moveleft() {
        let current = this.currentimage.dataset.number
        console.log('current is: ' + current)

        this.imageindex.forEach(element => {
            element.classList.remove('active-img')
        })

        

        // if (current != 1) {
        //     this.currentimage = this.imageindex[(4-current)]
        //     console.log(this.currentimage)
        //     this.currentimage.classList.add('active-img')
        // }

        // else {
        //     //current = 3
        //     this.currentimage = this.imageindex[current]
        //     console.log(this.currentimage)
        //     this.currentimage.classList.add('active-img')
        // }


    }

}

let carousel = document.querySelector('.carousel');
//console.log(carousel)
function CarouselBuilder(name) {
    //console.log('building Carousel')
    return new Carousel(name)
}

CarouselBuilder(carousel)
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/