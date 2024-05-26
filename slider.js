class Slider{
    constructor(sliderId){
        this.slider = document.getElementById(sliderId);
        
        this.init();
    }
    
    
    init(){
        this.images = this.slider.querySelectorAll('img');
        this.totalImages = this.images.length;
        this.currentImageIndex = 0;
   
    }
    
    setupButtons() {
        this.prevButton = this.slider.querySelector('.prevButton');
        this.nextButton = this.slider.querySelector('.nextButton');
        this.prevButton.addEventListener('click', () => this.prevImage());
        this.nextButton.addEventListener('click', () => this.nextImage());
    }

    prevImage(){

    }

    nextImage(){

    }


}
const slider = new slider('slider');