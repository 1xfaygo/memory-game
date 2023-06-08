
var pictures =[
    'foto/aarde.jpg',
    'foto/UK.png',
    'foto/usa.png',
    'foto/france.png',
    'foto/denmark.png',
    'foto/canada.png',
    'foto/australia.png',
    'foto/japan.png',
    'foto/nederland.png',
    'foto/zweden.png',
    'foto/duitsland.png',
]
    var foto = document.createElement('div');
    for(i = 0; i < 2; i ++){
        for(var x = 0; x < pictures.length -1 ; x++){
            var images = document.createElement('img');

            images.style.width = '100px';
            images.style.height = '100px';
            images.style.margin = '10px';
            images.setAttribute('onclick','change()');
            images.src = pictures[0];
            src = document.getElementById('spel');
            src.appendChild(images);
        } 
}
function change(){
    
} 
