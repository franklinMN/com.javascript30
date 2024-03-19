
const allPanels = document.querySelectorAll(".image-panel");

function toggleGrow(event){
    console.log(event);
    this.classList.toggle("panel-grow");
}

function toggleAddText(event){
    if(event.propertyName.includes('flex') ){
        this.classList.toggle("open");
    }
}

allPanels.forEach( panel => {
    panel.addEventListener( "click", toggleGrow );
    panel.addEventListener( "touchstart", toggleGrow );
} );
allPanels.forEach( panel => panel.addEventListener( "transitionend", toggleAddText ) );