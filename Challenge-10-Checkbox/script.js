
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const labels = document.querySelectorAll('label');

let lastChecked;

function strikeIt(obj){

    var label = document.querySelector('label[for="' + obj.id + '"]');

    obj.checked ? label.classList.add('strike')
                :  label.classList.remove('strike');
    
}

function strikeHandler(event) {

    if (event.shiftKey && lastChecked) {
        let start = false;
        
        checkboxes.forEach((checkbox) => {
            
            if (checkbox === this || checkbox === lastChecked) {
                start = !start;
            }

            if (start) {
                checkbox.checked = this.checked;
                strikeIt(checkbox);
            }
        });
    }

    lastChecked = this;
    strikeIt(this);
}

checkboxes.forEach( (box) => {
    box.addEventListener( "click", strikeHandler );
} );