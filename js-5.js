const div = document.createElement('div');

const coloresCircle = ['lightgreen', 'aqua', 'red', 'blue', 'yellow', 'purple', 'black'];

function coloresForCircle() {
    const getColorRand = Math.floor(Math.random() * coloresCircle.length);
    return coloresCircle[getColorRand];
}

function randElem(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}


function circle() {
    const circleDiv = document.createElement('div');
    const randSize = randElem(50, 200)/2;
    circleDiv.style.border = 1 + 'px' + " ,solid";
    circleDiv.style.borderColor = coloresForCircle();
    circleDiv.style.color = coloresForCircle();
    circleDiv.style.backgroundColor = coloresForCircle();
    circleDiv.style.position = 'relative';
    circleDiv.style.width = randSize + 'px';
    circleDiv.style.height = randSize + 'px';
    circleDiv.style.borderRadius = 50 + '%';
    circleDiv.style.top = randElem(0, 500) + 'px';
     circleDiv.style.bottom = randElem(0, 500) + 'px';
    return circleDiv;
}

function drawCircles(count) {
    const container = document.createElement('div');
    container.className = "container";
    container.style.width = 1024 + 'px';
    container.style.height = 768 + 'px';
    container.style.display = 'flex';
    container.style.margin = "0 auto";

    for (let i = 0; i < count; i++){
        container.append(circle());
    }
    document.body.append(container);
}







