// get all the elements necessary
const imageCarousel = document.getElementById('image-carousel');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');
let imagesArray = imageCarousel.getElementsByTagName('div');
// default variables
let imagesIndex = 0;
let isInUse = false;

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

function nextImage() {
    // only works while not already in use
    if (!isInUse) {
        isInUse = true;
        let prevImgElement = imagesArray[imagesIndex];
        let nextImgElement;

        // loop around to 0 if index is at end of list
        if (imagesIndex+1 == imagesArray.length) {
            imagesIndex = 0;
            nextImgElement = imagesArray[imagesIndex];
        } else {
            // otherwise normally increment
            imagesIndex++;
            nextImgElement = imagesArray[imagesIndex];
        }

        // slide previous one out, new one in to middle (towards left)
        imgSlideLeftOut(prevImgElement);
        imgSlideLeftIn(nextImgElement)
    }
}

function prevImage() {
    // only works while not already in use
    if (!isInUse) {
        isInUse = true;
        let prevImgElement = imagesArray[imagesIndex];
        let nextImgElement;

        // loop around to end if index is 0
        if (imagesIndex == 0) {
            imagesIndex = imagesArray.length-1;
            nextImgElement = imagesArray[imagesIndex];
        } else {
            // otherwise normally decrement
            imagesIndex--;
            nextImgElement = imagesArray[imagesIndex];
        }

        // slide previous one out, new one in to middle (towards right)
        imgSlideRightOut(prevImgElement);
        imgSlideRightIn(nextImgElement);
    }
}

function imgSlideLeftOut(image) {
    // move to outside left bounds (it is already in middle)
    image.style.left = '-100%';
    // image doesn't disappear until after transition
    // and carousel will be marked out of use once it is over
    setTimeout(() => {
        image.style.display = 'none';
        isInUse = false;
    }, 2000)
    
}

function imgSlideLeftIn(image) {
    // start from outside right bounds
    image.style.display = 'flex';
    image.style.left = '200%';
    // transition to middle
    setTimeout(() => {image.style.left = '50%'}, 0)
}

function imgSlideRightOut(image) {  
    // move to outside right bounds (it is already in middle)
    image.style.left = '200%';
    // image doesn't disappear until after transition 
    // and carousel will be marked out of use once it is over
    setTimeout(() => {
        image.style.display = 'none'
        isInUse = false;
    }, 2000)
}

function imgSlideRightIn(image) {
    // start from oustide left bounds
    image.style.left = '-100%';
    image.style.display = 'flex';
    // transition to middle
    setTimeout(() => {image.style.left = '50%'}, 0)
}