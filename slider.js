document.addEventListener('DOMContentLoaded', function() {
    class Slider {
        constructor(sliderId) {
            this.slider = document.getElementById(sliderId);
            this.currentImageIndex = 0;
            this.totalImages = 0;
            this.images = [];
            this.prevButton = null;
            this.nextButton = null;

            this.init();
            this.setupButtons();
        }

        init() {
            if (this.slider) {
                this.images = Array.from(this.slider.querySelectorAll('img'));
                this.totalImages = this.images.length;
            }
        }

        setupButtons() {
            if (this.slider) {
                this.prevButton = this.slider.querySelector('#prevButton');
                this.nextButton = this.slider.querySelector('#nextButton');
                if (this.prevButton && this.nextButton) {
                    this.prevButton.addEventListener('click', () => this.prevImage());
                    this.nextButton.addEventListener('click', () => this.nextImage());
                }
            }
        }

        prevImage() {
            this.currentImageIndex = (this.currentImageIndex - 1 + this.totalImages) % this.totalImages;
            this.showImage(this.currentImageIndex);
        }

        nextImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.totalImages;
            this.showImage(this.currentImageIndex);
        }

        showImage(index) {
            this.images.forEach((image, i) => {
                image.style.display = (i === index) ? 'block' : 'none';
            });
        }
    }

    const slider = new Slider('slider');
});
