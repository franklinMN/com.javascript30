const target_spacing = document.getElementById("spacing");
const target_blur = document.getElementById("blur");
const target_colorPicker = document.getElementById("color-picker");

const imageContainer = document.querySelector(".image-container");
const spacingRange = document.getElementById("spacing");


// function getImageContainerWidth() {
//     const computedStyle = window.getComputedStyle(imageContainer);
//     return parseFloat(computedStyle.getPropertyValue('width'));
// }
// spacingRange.min = 0;
// spacingRange.max = getImageContainerWidth();

function spaceAction(e){
    document.documentElement.style.setProperty('--spacing', e.target.value + 'px');
}

function blurAction(e){
    document.documentElement.style.setProperty('--blur', e.target.value + 'px');
}

function colorPickerAction(e){
    document.documentElement.style.setProperty('--color-pick', e.target.value);
}

target_spacing.addEventListener("change", spaceAction);
target_blur.addEventListener("change", blurAction);
target_colorPicker.addEventListener("change", colorPickerAction);

target_spacing.addEventListener( "mousemove", spaceAction);
target_blur.addEventListener("mousemove", blurAction);
target_colorPicker.addEventListener("mousemove", colorPickerAction);


