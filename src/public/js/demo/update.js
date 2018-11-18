function update(){
  var typeFirst;
  var typeSecond;
  var typeThird;
  var typeFourth;
  var typeFifth;
  var backgroundColor;
  var content;
  var title

  var updates = [typeFirst, typeSecond, typeThird, typeFourth, typeFifth];
  var i;
  for(i=0; i<5; i++){
    case(updates[i]){
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
