var dis = document.getElementById("money_text");
var money = 0;
var total = document.getElementById("total");
var dps = 0;
var moneyAllTime = 0;
function makeMoney(number) {
  var damount1 = amount1 * 2;
  var damount2 = amount2 * 4;
  var damount3 = amount3 * 8;
  var damount4 = amount4 * 16;
  var damount5 = amount5 * 32;
  var damount6 = amount6 * 64;
  dps = damount1 + damount2 + damount3 + damount4 + damount5 + damount6;
  document.getElementById("persec").innerHTML = dps;
  if(moneyAllTime >= 1) {
    document.getElementById("achv1").setAttribute("class", "done");
    document.getElementById("pic1").innerHTML = "!!";
  } 
  if (moneyAllTime >= 100) {
    document.getElementById("achv2").setAttribute("class", "done");
    document.getElementById("pic2").innerHTML = "!!";
  }
  if (moneyAllTime >= 1000) {
    document.getElementById("achv3").setAttribute("class", "done");
    document.getElementById("pic3").innerHTML = "!!";
  }
  if (moneyAllTime >= 100000) {
    document.getElementById("achv4").setAttribute("class", "done");
    document.getElementById("pic4").innerHTML = "!!";
  }
  if (moneyAllTime >= 1000000) {
    document.getElementById("achv5").setAttribute("class", "done");
    document.getElementById("pic5").innerHTML = "!!";
  }
  if (moneyAllTime >= 1000000000) {
    document.getElementById("achv6").setAttribute("class", "done");
    document.getElementById("pic6").innerHTML = "!!";
  }
  if (moneyAllTime >= 100000000000) {
    document.getElementById("achv7").setAttribute("class", "done");
    document.getElementById("pic7").innerHTML = "!!";
  }
  if (moneyAllTime >= 1000000000000) {
    document.getElementById("achv8").setAttribute("class", "done");
    document.getElementById("pic8").innerHTML = "!!";
  }
  if (moneyAllTime >= 1000000000000000) {
    document.getElementById("achv9").setAttribute("class", "done");
    document.getElementById("pic9").innerHTML = "!!";
  }
  if (moneyAllTime >= 1000000000000000000) {
    document.getElementById("achv10").setAttribute("class", "done");
    document.getElementById("pic10").innerHTML = "!!";
  }
  if (dps >= 100) {
    document.getElementById("achv11").setAttribute("class", "done");
    document.getElementById("pic11").innerHTML = "!!";
  }
  if (dps >= 1000) {
    document.getElementById("achv12").setAttribute("class", "done");
    document.getElementById("pic12").innerHTML = "!!";
  }
  if (dps >= 100000) {
    document.getElementById("achv13").setAttribute("class", "done");
    document.getElementById("pic13").innerHTML = "!!";
  }
  if (dps >= 1000000) {
    document.getElementById("achv14").setAttribute("class", "done");
    document.getElementById("pic14").innerHTML = "!!";
  }
  if (dps >= 1000000000) {
    document.getElementById("achv15").setAttribute("class", "done");
    document.getElementById("pic15").innerHTML = "!!";
  }
  if (amount1 >= 1) {
    document.getElementById("achv16").setAttribute("class", "done");
    document.getElementById("pic16").innerHTML = "!!";
  }
  money = money + number;
  dis.innerHTML = "$ " + money;
  total.innerHTML = "$ " + money;
  moneyAllTime = moneyAllTime + number;
  document.getElementById("alltime").innerHTML = "$ " + moneyAllTime;
}

var amount1 = 0;
function buyItem1() {
  var itemOnePrice = Math.floor(15 * Math.pow(1.1, amount1));
  if (money >= itemOnePrice) {
    amount1 += 1;
    money = money - itemOnePrice;
    document.getElementById("item1-amount").innerHTML = amount1;
    dis.innerHTML = "$ " + money;
  }
  var nextCost = Math.floor(15 * Math.pow(1.1, amount1));
  document.getElementById("item1-price").innerHTML = nextCost;
}
window.setInterval(function(){
  makeMoney(amount1);
}, 500);

var amount2 = 0;
function buyItem2() {
  var itemTwoPrice = Math.floor(100 * Math.pow(1.1, amount2));
  if (money >= itemTwoPrice) {
    amount2 += 1;
    money = money - itemTwoPrice;
    document.getElementById("item2-amount").innerHTML = amount2;
    dis.innerHTML = "$ " + money;
  }
  var nextCost2 = Math.floor(100 * Math.pow(1.1, amount2));
  document.getElementById("item2-price").innerHTML = nextCost2;
}
window.setInterval(function(){
  makeMoney(amount2);
}, 250);


var amount3 = 0;
function buyItem3() {
  var itemThreePrice = Math.floor(500 * Math.pow(1.1, amount3));
  if (money >= itemThreePrice) {
    amount3 += 1;
    money = money - itemThreePrice;
    document.getElementById("item3-amount").innerHTML = amount3;
    dis.innerHTML = "$ " + money;
  }
  var nextCost3 = Math.floor(500 * Math.pow(1.1, amount3));
  document.getElementById("item3-price").innerHTML = nextCost3;
}
window.setInterval(function(){
  makeMoney(amount3);
}, 125);

var amount4 = 0;
function buyItem4() {
  var itemFourPrice = Math.floor(5000 * Math.pow(1.1, amount4));
  if (money >= itemFourPrice) {
    amount4 += 1;
    money = money - itemFourPrice;
    document.getElementById("item4-amount").innerHTML = amount4;
    dis.innerHTML = "$ " + money;
  }
  var nextCost4 = Math.floor(5000 * Math.pow(1.1, amount4));
  document.getElementById("item4-price").innerHTML = nextCost4;
}
window.setInterval(function(){
  makeMoney(amount4);
}, 62.5);

var amount5 = 0;
function buyItem5() {
  var itemFivePrice = Math.floor(20000 * Math.pow(1.1, amount5));
  if (money >= itemFivePrice) {
    amount5 += 1;
    money = money - itemFivePrice;
    document.getElementById("item5-amount").innerHTML = amount5;
    dis.innerHTML = "$ " + money;
  }
  var nextCost5 = Math.floor(20000 * Math.pow(1.1, amount5));
  document.getElementById("item5-price").innerHTML = nextCost5;
}
window.setInterval(function(){
  makeMoney(amount5);
}, 31.25);

var amount6 = 0;
function buyItem6() {
  var itemSixPrice = Math.floor(100000 * Math.pow(1.1, amount6));
  if (money >= itemSixPrice) {
    amount6 += 1;
    money = money - itemSixPrice;
    document.getElementById("item6-amount").innerHTML = amount6;
    dis.innerHTML = "$ " + money;
  }
  var nextCost6 = Math.floor(100000 * Math.pow(1.1, amount6));
  document.getElementById("item6-price").innerHTML = nextCost6;
}
window.setInterval(function(){
  makeMoney(amount6);
}, 15.625);
if(money >= itemOnePrice) {
    document.getElementById("item1").style.borderColor = "white";
}