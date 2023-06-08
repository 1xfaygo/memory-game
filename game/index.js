var pictures =[
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
    for(x = 0; x < 2; x ++){
        for(var x = 0; x < pictures.length; x++){
            var images = document.createElement('img');
            images.style.width = '100px';
            images.style.height = '100px';
            images.style.margin = '10px';   
            images.src = pictures[x];
            src = document.getElementById('spel');
            src.appendChild(images);
        } 
}