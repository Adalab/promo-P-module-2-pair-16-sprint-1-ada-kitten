'use strict';
const section = document.querySelector(".js-new-form");
section.classList.remove("collapsed");
let sectionList = document.querySelector(".js-list");
let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");
card1.innerHTML = `<article>
<img
  class="card_img"
  src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"
  alt="gatito"
/>
<h3 class="card_title">Anastacio</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le
  moleste. Es una maravilla acariciarle!
</p>
</article>` ;

card2.innerHTML = `<img
class="card_img"
src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"
alt="gatito"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
Es una maravilla acariciarle!
</p>` ;

card3.innerHTML = `<img
class="card_img"
src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"
alt="gatito"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
Es una maravilla acariciarle!
</p>` ;

const kittenUrl1 = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" ;
const kittenName1 = "Anastacio".toUpperCase() ;

const kittenDesc1 = "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!" ;
const kittenUrl2 = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg" ;
const kittenName2 = "Fiona" ;
const kittenDesc2 = "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!" ;
const kittenUrl3 = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg alt=gatito" ;
const kittenName3 = "Cielo" ;
const kittenDesc3 = "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!" ;
card1.innerHTML = `<article>
<img
  class="card_img"
  src= ${kittenUrl1}
  alt="gatito"
/>
<h3 class="card_title"> ${kittenName1} </h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  ${kittenDesc1}
</p>
</article>` ;
card2.innerHTML = `<img
class="card_img"
src= ${kittenUrl2}
alt="gatito"
/>
<h3 class="card_title"> ${kittenName2} </h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
${kittenDesc2}
</p>` ;

card3.innerHTML = `<img
class="card_img"
src= ${kittenUrl3}
/>
<h3 class="card_title"> ${kittenName3} </h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
${kittenDesc3}
</p>` ;


const input_search_desc = document.querySelector('.js_in_search_desc') ;
input_search_desc.value = 'cariñoso';
const descrSearchText = input_search_desc.value;


/*if( kittenDesc1.includes(descrSearchText) ) {
    card1.innerHTML }
  */
  
  

   
if( kittenDesc1.includes(descrSearchText) ) {
  card1.classList.remove("hidden")
} else {
  card1.classList.add("hidden")
} ; 

if( kittenDesc2.includes(descrSearchText) ) {
  card2.classList.remove("hidden")
} else {
  card2.classList.add("hidden")
} ; 

if( kittenDesc1.includes(descrSearchText) ) {
  card3.classList.remove("hidden")
} else {
  card3.classList.add("hidden")
} ; 