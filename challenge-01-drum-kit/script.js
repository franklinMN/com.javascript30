// const keyData = {
//     '65': '65',  // 'A' key
//     '83': '83',  // 'S' key
//     '68': '68',  // 'D' key
//     '70': '70',  // 'F' key
//     '71': '71',  // 'G' key
//     '72': '72',  // 'H' key
//     '74': '74',  // 'J' key
//     '75': '75',  // 'K' key
//     '76': '76'   // 'L' key
// };



window.addEventListener( 'keydown', function(e){


    const audio = document.querySelector( `audio[data-key="${e.keyCode}"]` );
    const key = document.querySelector( `.key[data-key="${e.keyCode}"]` );

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('key-clicked');

    key.addEventListener('transitionend', function() {
        key.classList.remove('key-clicked');
    });
} );


