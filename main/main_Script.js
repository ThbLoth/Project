function BMIcompute(){

    var weight = document.forms["BMIform"]["weightInput"].value;
    var height = (document.forms["BMIform"]["heightInput"].value)/100;
    var BMI

    if (weight==""){
        alert("Please enter a weight");
    }else if (height==""){
        alert("Please enter a height");
    }else{
        BMI= weight/(height*height)
        alert(BMI.toFixed(1))
    }


}