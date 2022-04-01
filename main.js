var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run (event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    var Content = content.toLowerCase();
    console.log(Content);
    if(Content == "selfie")
    {
        console.log("taking your selfie");
        speak();
    }
    if(Content == "selfie.")
    {
        console.log("taking your selfie");
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach("#camera");
    setTimeout(function()
    {
        take_snapshot1();
    }, 5000);
    setTimeout(function()
    {
        take_snapshot2();
    }, 10000);
    setTimeout(function()
    {
        take_snapshot3();
    }, 15000);
}

Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90
});
function take_snapshot1()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result1").innerHTML = "<img id='selfie_image' src='"+data_uri+"'>";
    });
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function take_snapshot2()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result2").innerHTML = "<img id='selfie_image' src='"+data_uri+"'>";
    });
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 15 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function take_snapshot3()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result3").innerHTML = "<img id='selfie_image' src='"+data_uri+"'>";
    });
}