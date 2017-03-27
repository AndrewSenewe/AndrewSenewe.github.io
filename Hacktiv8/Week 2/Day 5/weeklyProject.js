var namaKita = {};

function starting() {
  var pengantar = "                        Mathematics Operation Quiz             \n";
  var welcome =
      "\n                               Welcome to MOQ\n    " +
      "\n\n\n"+
      "brought to you by Andrew Senewe\n\n" +
      "Press \'Ok\' to Start, press \'Cancel\' to abort.";
 alert(pengantar + welcome);
 introduction()
}
function introduction() {
  namaKita.sini = prompt("Your Name, please?");
  if(namaKita.sini === '' ||namaKita.sini === null) {
    empty();
}
  else {
    instruksi();
  }
}

function instruksi() {
  alert("Hi " + namaKita.sini + ", you are about to begin!\n\n" + "Press \"Ok\" to Start");
  alert("How to play:\n" + "- You should answer the question one by one, and as much as you can.\n" + "- The game ends only when you get the wrong answer or you are tired trying.\n\n" + "Press \"Ok\" to Start (this time for real)")
  operasi()
  }


function empty() {
  var nameLess = confirm("You have to insert your name.\n\n\n" + "Restart?");
  if (nameLess === true) {
    introduction();
  }
  else if (nameLess === false){
    alert("Good Bye!");
  }
}

function restart() {
  var ulang = confirm("Restart?");
  if (ulang === true) {
    operasi();
  }
  else if (ulang === false){
    alert("Good Bye!")
  }
}

function operasi () {
  var operators = [{
        sign: "+",
        method: function(a,b){ return a + b; }
    },{
        sign: "-",
        method: function(a,b){ return a - b; }
    },{
        sign: "*",
        method: function(a,b){ return a * b; }
    }];

  var selectOperator = Math.floor(Math.random()*operators.length);
  var number1 = Math.floor(Math.random()*100);
  var number2 = Math.floor(Math.random()*100);
  var simpanAngka = operators[selectOperator].method(number1, number2);
  var hasilOperasi = prompt(number1.toString() + " " + operators[selectOperator].sign + " " + number2.toString());  
  
  if (hasilOperasi == simpanAngka) {
    alert("You\'re right, press \"OK\" to proceed");
    operasi();
  }
  else if (hasilOperasi === null || hasilOperasi === '') {
    alert("I understand that you are tired.\n\n" + "Thank you " + namaKita.sini + " for playing.");
    restart();
  }
  else {
    alert("I'm sorry " + namaKita.sini + ", but you got it wrong.\n\n" + "Thanks for playing.");
    restart();
  }
}


//mulai
starting()