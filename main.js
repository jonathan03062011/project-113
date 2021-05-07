function preload(){
}

function setup()
{
canvas=createCanvas(400,460);
canvas.position(150,150);
video=createCapture(VIDEO);
video.hide();
}

function draw()
{
 image(video,0,0,400,400);
        fill('#00FF00');
        stroke('#00FFFF');
        rect(90,40,220,15);
        rect(90,425,220,15);
        rect(45,60,15,450);
        rect(350,40,15,450);
    
        fill('#00FFFF');
        stroke('#00FF00');
        circle(50,50,80);
        circle(350,50,80);
        circle(50,430,80);
        circle(350,430,80);
        
    }
    function take_snapshot()
{
    save('jonathan.png');
}


 
