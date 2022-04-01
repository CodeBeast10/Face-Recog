Webcam.set({
    width: 350,
    height: 325,
    image_format: 'png', 
    png_quality: 90 
}); 

camera= document.getElementById("camera"); 
Webcam.attach('#camera'); 
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured" src="'+data_uri+'"/>';
    });
    
}

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OATf31wlL/model.json',modelloaded); 

function modelloaded() {
    console.log("Model is Loaded");
}

function check() {
    img= document.getElementById("captured"); 
    classifier.classify(img,gotresult); 
}

function gotresult(error, results) {
    if (error) {
        console.error(error); 
    }
    else {
        console.log(results); 
        document.getElementById("result_name").innerHTML= results[0].label; 
        document.getElementById("result_accurate").innerHTML= results[0].confidence.toFixed(3);
    }
}