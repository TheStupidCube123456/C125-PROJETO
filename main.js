leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(250, 250);
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
    canvas = createCanvas(800, 500)
    background("white");
}

function modelLoaded(){
    console.log("poseNet iniciou");
}

function gotPoses(results){
    console.log(results)
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    document.getElementById("status").innerHTML = "Tamanho do texto é " + difference + "."
}

function draw(){
    background("white");
    fill("black");
    textSize(difference);
    text("oi esse texto é um anúncio escolar por favor leve ele muito a serio", 10, 400);
    console.log("funcionou");
}

