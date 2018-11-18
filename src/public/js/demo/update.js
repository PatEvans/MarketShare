function update(){
  var typeFirst;
  var typeSecond;
  var typeThird;
  var typeFourth;
  var typeFifth;
  var backgroundColor = document.getElementById("colour1");;
  var content = document.getElementById("action1");;
  var title = document.getElementById("title1");
  var photo =

  var updates = [typeFirst, typeSecond, typeThird, typeFourth, typeFifth];
  var i;
  for(i=0; i<5; i++){
    switch(updates[i]){
      case "profit":
        title = "Overall profit";
        background = "royalblue";
        content = "<canvas id="myAreaChart" width="100%" height="30"></canvas>";
        break;
      case "lose":
        title= "Recent lost";
        background = "lightpink";
        content =
        break;
      case "win":
        title = "Recent benefit!"
        background = "palegreen";
        content =
        break;
      case "buy stocks":
        title = "Purchase of stock";
        background ="royalblue";
        break;
      case "sell stocks":
        title = "Sold of stock"
        background ="royalblue";
        break;
    }
  }

}
