status="";
img="";
objects=[];
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded()
{
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function preload()
{
   img=document.getElementById("image_1").value;
}
function draw()
{
    image(img,0,0,640,420);
    if(status!="")
    {
        for(i=0;i<objects.length;i++)
        {
            document.getElementById("status").innerHTML="status: Object Detected ";
            fill("#E6E6FA");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+" % ",objects[i].x,objects[i].y);
            noFill();
            stroke("#FFFFFF");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            
        }
    }
}

function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects=results;
}