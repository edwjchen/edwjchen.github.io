---
layout: page
permalink: /photography/
title: 
---

<html>
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial;
}

.header {
  text-align: center;
  padding: 32px;
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}
</style>
<body>

<!-- Photo Grid -->
<div class="row"> 
  <div class="column">
    <img src="/images/photography/matt_chair.jpg" style="width:100%">
    <img src="/images/photography/hannah_garden.jpg" style="width:100%">
    <img src="/images/photography/ballet.jpg" style="width:100%">
    <img src="/images/photography/nyc_wide.jpg" style="width:100%">
    <img src="/images/photography/erin_phipps.jpg" style="width:100%">
  </div>
  <div class="column">
    <img src="/images/photography/chinese_traditional.jpg" style="width:100%">
    <img src="/images/photography/brian_sitting.jpg" style="width:100%">
    <img src="/images/photography/alice_night.jpg" style="width:100%">
    <img src="/images/photography/fireworks.jpg" style="width:100%">
    <img src="/images/photography/dejene.jpg" style="width:100%">
  </div>  
  <div class="column">
    <img src="/images/photography/hon_apple.jpg" style="width:100%">
    <img src="/images/photography/clytze.jpg" style="width:100%">
    <img src="/images/photography/forest.jpg" style="width:100%">
    <img src="/images/photography/harrison_pascal.jpg" style="width:100%">

  </div>  
  <div class="column">
    <img src="/images/photography/cherry_blossom.jpg" style="width:100%">
    <img src="/images/photography/clover_grad.jpg" style="width:100%">
    <img src="/images/photography/stanley_chair.jpg" style="width:100%">
    <img src="/images/photography/hokage.jpg" style="width:100%">
    <img src="/images/photography/skywalk.jpg" style="width:100%">
  </div>  
</div>



</body>
</html>
