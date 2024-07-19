nose_x = 0
nose_y = 0

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload()
{

}
    

function draw() 
{
   //image(variable name, x, y, width, height)
   image(video, 0, 0, 300, 300)
}

function take_snapshot() {
    save('myFilterImage.png')
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x
        nose_y = results[0].pose.nose.y
        console.log("nose x = " + nose_x);
        console.log("nose y = " + nose_y);
    }
}