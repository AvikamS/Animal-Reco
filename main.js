//https://teachablemachine.withgoogle.com/models/WXgkQVE9j/
function soundClassification(){
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WXgkQVE9j/model.json',modelReady);

}
var dog = 0;
var cat=  0 ;
var lion = 0;
var monkey = 0;

function modelReady(){
classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;


        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + results[0].confidence;
        document.getElementById("result_label").style.color = "rgb("+ random_number_r +","+random_number_g +","+random_number_b+ ")";
        document.getElementById("result_confidence").style.color = "rgb("+ random_number_r +","+random_number_g +","+random_number_b+ ")";
        img= document.getElementById("Ear");
        if (results[0].label == "Dog Barking"){
            img.src = "Dog.png";
            dog = dog + 1;
    
        }

        else if (results[0].label == "Cat Meowing"){
            img.src = "Cat.jpg";
            cat = cat + 1;
    
        }
        else if (results[0].label == "Lion Roaring"){
            img.src = "Lion.png";
           lion = lion + 1;
    
        }
        else if (results[0].label == "Monkey Howling"){
            img.src = "Monkey.jpg";
           monkey = monkey + 1;
    
        }
        else {img.src = "Ear.png";
    }}}