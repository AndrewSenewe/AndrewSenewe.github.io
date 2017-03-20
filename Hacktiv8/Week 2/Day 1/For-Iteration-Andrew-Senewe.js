// Ganjil-Genap
for(var counter = 1; counter <= 100; counter++) {
if(counter%2 == 0) {
  console.log(counter + " Genap");
}
else {
  console.log(counter +  " Ganjil");
}
}


//Counter-Add-2
var PertambahanCounter = 2;
for(var counter = 1; counter <= 100; counter+= 2) {
if(counter%3 == 0) {
  console.log(counter + " Kelipatan " + (PertambahanCounter+1));
}
  else {
    console.log("");
  }
}

//Counter-Add-5
var PertambahanCounter = 5;
for(var counter = 1; counter <= 100; counter+= 5) {
if(counter%6 == 0) {
  console.log(counter + " Kelipatan " + (PertambahanCounter+1));
}
  else {
    console.log("");
  }
}

//Counter-Add-9
var PertambahanCounter = 9;
for(var counter = 1; counter <= 100; counter+= 9) {
if(counter%10 == 0) {
  console.log(counter + " Kelipatan " + (PertambahanCounter+1));
}
  else {
    console.log("");
  }
}