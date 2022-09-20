const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const microphone = new Microphone();

class Figure {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 8;
    }

    draw () {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}


function animate(){
    if (microphone.initialized){
       const samples = microphone.getSamples();
        
    }
    requestAnimationFrame(animate);
}

animate();