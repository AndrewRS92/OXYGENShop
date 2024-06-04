class Slider {
    constructor(sliderId, intervalTime = 5000) {
        this.slider = document.getElementById(sliderId);
        this.currentImageIndex = 0;
        this.totalImages = 0;
        this.images = [];
        this.prevButton = null;
        this.nextButton = null;
        this.intervalTime = intervalTime;
        this.autoSlideInterval = null;

        this.init();
        this.setupButtons();
        this.startAutoSlide();
    }

    init() {
        if (this.slider) {
            this.images = this.slider.querySelectorAll('.slides-container img');
            this.totalImages = this.images.length;
            this.setupButtons();
            this.showImage(this.currentImageIndex);
        }
    }

    setupButtons() {
        this.prevButton = this.slider.querySelector('#prevButton');
        this.nextButton = this.slider.querySelector('#nextButton');
        if (this.prevButton && this.nextButton) {
            this.prevButton.addEventListener('click', () => this.prevImage());
            this.nextButton.addEventListener('click', () => this.nextImage());
        }

        

        const buttonsContainer = this.slider.querySelector('.buttons-container');
        buttonsContainer.innerHTML = ''; 
        for (let i = 0; i < this.totalImages; i++) {
            const button = document.createElement('button');
            button.classList.add('image-button');
            button.dataset.index = i;
            button.addEventListener('click', (event) => {
                const index = parseInt(event.target.dataset.index);
                this.showImage(index);
            });
            buttonsContainer.appendChild(button);
        }
    }

    showImage(index) {
        
        this.images.forEach((image, i) => {
            image.style.display = (i === index) ? 'block' : 'none';
        });
    }

    prevImage() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.totalImages) % this.totalImages;
        this.showImage(this.currentImageIndex);
    }

    nextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.totalImages;
        this.showImage(this.currentImageIndex);
    }

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.nextImage();
        }, this.intervalTime);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const slider = new Slider('slider', 5000);
});
