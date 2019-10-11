var recorder, gumStream,onemoresong;


var recordButton = document.getElementById("recordButton");
recordButton.addEventListener("click", toggleRecording);
var pauseButton = document.getElementById("pauseButton");
pauseButton.addEventListener("click",StopRecord);

var uploadButton = document.getElementById("uploadButton");
uploadButton.addEventListener("click",uploadToServer)

var httprequest = new XMLHttpRequest();

function uploadToServer(){
    httprequest.onreadystatechange = alertResponse;
    httprequest.open("POST","http://localhost:49960/Api/Recorder/Upload");
        httprequest.send(onemoresong);
    
}

function alertResponse(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        alert("Ok")
    } else {
        alert("Bad request")
    }
}

function StopRecord(){
    recorder.stop();
    gumStream.getAudioTracks()[0].stop();
}

function toggleRecording() {
    
        navigator.mediaDevices.getUserMedia({
            audio: true
        }).then(function(stream) {
            gumStream = stream;
            recorder = new MediaRecorder(stream);
            recorder.ondataavailable = function(e) {
                onemoresong = e.data;
                var url = URL.createObjectURL(e.data);
                var preview = document.createElement('audio');
                preview.controls = true;
                preview.src = url;
                document.body.appendChild(preview);
            };
            recorder.start();
        });
}













// var recorder, gumStream;


// var recordButton = document.getElementById("recordButton");
// recordButton.addEventListener("click", toggleRecording);


// function toggleRecording() {
//     if (recorder && recorder.state == "recording") 
//     {
//         recorder.stop();
//         gumStream.getAudioTracks()[0].stop();
//     } 
//     else {
//         navigator.mediaDevices.getUserMedia({
//             audio: true
//         }).then(function(stream) {
//             gumStream = stream;
//             recorder = new MediaRecorder(stream);
//             recorder.ondataavailable = function(e) {
//                 var url = URL.createObjectURL(e.data);
//                 var preview = document.createElement('audio');
//                 preview.controls = true;
//                 preview.src = url;
//                 document.body.appendChild(preview);
//             };
//             recorder.start();
//         });
//     }
// }