
function bmiCalculator(weight,height){
    const bmi = weight/Math.pow(height,2);
    return Math.round(bmi);
}

let bmi=bmiCalculator(65, 1.8); 
console.log(bmi)

    // Alternative calculation:
    // const bmi = weight/(height*height);
    // const bmi = Math.round(weight/(height**2));