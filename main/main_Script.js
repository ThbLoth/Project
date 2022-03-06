function BMIcompute(){

    var weight = document.forms["BMIform"]["weightInput"].value;
    var height = (document.forms["BMIform"]["heightInput"].value)/100;
    var BMI

    if (weight==""){
        alert("Please enter a weight");
    }else if (height==""){
        alert("Please enter a height");
    }else{
        BMI= weight/(height*height);

        if (BMI<18){
            alert(BMI.toFixed(1) + " Underweight");
        }else if (BMI>18 && BMI<24){
            alert(BMI.toFixed(1) + " Normal/Healthy");
        }else if (BMI>24 && BMI<29){
            alert(BMI.toFixed(1) + " Overweight");
        }else if(BMI>29 && BMI<39){
            alert(BMI.toFixed(1) + " Obese");
        }else{
            alert(BMI.toFixed(1) + " Extremely Obese");
        }
    }


}