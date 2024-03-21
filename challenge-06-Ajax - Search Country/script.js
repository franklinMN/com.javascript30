console.log("Started");

let data = null;
let inputGot;
const initialLines = `
            <div class="country-holder center width-height">
                <span class="left addFlex">Country</span>
                <span class="right addFlex">Capital</span>
            </div>
`;

function findMatch(){

    const filteredData = data.filter(
        info =>  info.name.toLowerCase().includes(inputGot)
    );

    return filteredData;

}

let addLines_container = document.querySelector('.addLines');
function displayResult(){
    
    let result = findMatch();

    addLines_container.innerHTML = '';
    result.forEach(element => {
        let country = element.name;
        let capital = element.capital;
        

        const write = `
        <div class="country-holder center width-height">
            <span class="left addFlex">${country}</span>
            <span class="right addFlex">${capital}</span>
        </div>
    `;

        addLines_container.innerHTML += write;
    });
}


function mainActions(){
    
    const whatTyped = document.querySelector(".form-control");
    whatTyped.addEventListener( "input", (e) => {
        inputGot = e.target.value.trim().toLowerCase();
        if( inputGot != '' ){
            displayResult();
        }else{
            
            addLines_container.innerHTML = initialLines;
        }
        
    } );
}


fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(parsedData => {
    data = parsedData;
    console.log(parsedData)
    mainActions();
})



