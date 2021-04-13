noseX=0;
noseY=0;
diffrence=0;
rightWristX=0;
leftWristX=0;
function setup(){
   canvas= createCanvas(500,400);
   canvas.position(700,100);
   video= createCapture(VIDEO);
   video.size(400,500);
   poseNet=ml5.poseNet(video,gotResults);
   poseNet.on("pose",gotPoses);
}
function draw(){
   document.getElementById("filler").innerHTML="Width an Height are="+diffrence+"px";
   background('#4f0f30');
   fill("#000000");
   stroke("#FFFFFF");
   square(noseX,noseY,diffrence);
}
function gotResults(){
   console.log("it worked my dumb science");
}
function gotPoses(results){
   if(results.length>0){
      console.log(results);
      noseX=results[0].pose.nose.x;
      noseY=results[0].pose.nose.y;
      console.log("noseX="+noseX+"noseY"+noseY);
      rightWristX=results[0].pose.rightWrist.x;
      leftWristX=results[0].pose.leftWrist.x;
      diffrence= floor(rightWristX-leftWristX);
      console.log("rightWristX="+rightWristX+"leftWristX="+leftWristX+"diffrence="+diffrence);
   }
}