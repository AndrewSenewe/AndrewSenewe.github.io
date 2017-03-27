<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2017 by SmoakAndrew (http://jsbin.com/kevorax/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<style id="jsbin-css">
* {
  
  background-origin: ;
  margin: 0;
}

header {
  background-color: #fff;
  width: 100%;
  height: 25px
 }

img {
  width: 50%;
  float: left;
  display: block;
  height: 100%;
}

nav {
  border:  1px solid rgba(0, 0, 0, 0.2);
  font-family: 'roboto' sans-serif;
  font-size: 14px
  float: right;
  width: 30rem;
}

li {
	display: inline-block;
	margin: 0 0.3rem;
}
</style>

<script id="jsbin-javascript">
// Tugas 1
var nama= ("Andrew");
var angkaPembilang= ("10");
var angkaPenyebut= ("10");

var hasilBagi= (angkaPembilang / angkaPenyebut);

console.log("Halo " + nama + ", " + angkaPembilang + " dibagi " + angkaPenyebut + " adalah sama dengan " + hasilBagi);

// Tugas 2
var alas= ("6");
var tinggi= ("7");
var luasSegitiga=(alas * tinggi / 2);
console.log("Luas Segitiga: " + luasSegitiga);

// Tugas 3
var tahun= 2012;
if (tahun%4 == 0) {
  if (tahun%100 != 0) {
    console.log( tahun + " adalah tahun kabisat");
  }
  else {
    if (tahun%400 != 0) {
      console.log(tahun + " adalah tahun kabisat");
    }
    else {
      console.log(tahun + " adalah bukan tahun kabisat");
    }
  }
}
else {
   console.log(tahun + " adalah bukan tahun kabisat");
}
</script>