

function preload(){
     
}

function setup(){
    canvas = createCanvas(200, 200)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(200, 200);
    video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function take_snapshot(){
    
}