class Carousel {
    constructor(carousel) {
        this.carousel = carousel //this carousel is assigned to DOM ref
        this.leftbutton = carousel.querySelector('.left-button') // Same for leftbutton
        console.log(this.leftbutton)
        this.rightbutton = carousel.querySelector('.right-button') // right button
        console.log(this.rightbutton)

        // node list of images
        this.allimages = carousel.querySelectorAll('.carousel-img')
        console.log(this.allimages)
        this.imageindex = Array.from(this.allimages)
        console.log(this.imageindex)
        this.currentimage = this.imageindex[0]
        console.log(this.currentimage)

        this.rightbutton.addEventListener('click', () => this.moveright())
        this.leftbutton.addEventListener('click', () => this.moveleft())
    }

    moveright() {
        let x = this.currentimage
        console.log(x)
        if (this.currentimage === carousel.querySelector(`.carousel-img[data-tab='4']`)) {
            this.currentimage = this.allimages[0]
            console.log('current image set')
            this.currentimage.style.display = 'flex'
        }

        else {
            this.currentimage = this.currentimage
        }

    }

    moveleft() {

    }

}

let carousel = document.querySelector('.carousel');
console.log(carousel)
function CarouselBuilder(name) {
    console.log('building Carousel')
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