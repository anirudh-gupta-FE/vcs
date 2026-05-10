function bmi() {
  let height = document.getElementById("Height").value;
  console.log(height);
  let weight = document.getElementById("Weight").value;
  console.log(weight);
  let BMIValue = Number(weight) / (Number(height) * Number(height));
  let BMI = document.getElementById("BMI");
  BMI.value = BMIValue;
  let primeValue = BMIValue / 25;
  let prime = document.getElementById("Prime");
  prime.value = primeValue;
}
