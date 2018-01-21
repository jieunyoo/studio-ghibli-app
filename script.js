const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(logo);
app.appendChild(container);



var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {

        data.forEach(movie => {
        
            const card = document.createElement('div');
            card.setAttribute('class','card');
        
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;
            
            const p = document.createElement('p');
            shortmoviedescription = movie.description.substring(0,200);
            p.textContent=shortmoviedescription + '...';
            
            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        });

            //console.log(movie.title);});
    } else {
        //console.log('error');
        const errorMessage = document.createElement('error');
        errorMessage.textContent = 'error';
        app.appendChild(errorMessage);
    }
}

request.send();
