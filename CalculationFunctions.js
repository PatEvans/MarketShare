const alpha = require('alphavantage')({ key: process.env.AV_API_KEY });
var AlphaVantageAPI = require('alpha-vantage-cli').AlphaVantageAPI; ;
var alphaVantageAPI = new AlphaVantageAPI(process.env.AV_API_KEY, 'compact', true);

///
//Function to calculate total invested
function initialInvestment(/*PortfolioID from database*/)
{
    var investment = 0;
    var i;
    for(stock in portfolio)
    {
        i = 0;
        while((alphaVantageAPI.getDailyData(stock))[i].Timestamp != dateBought)
        {
          i++;
        }
        investment += dailyData[i].Close * Qty;
    }

    return investment;

}
//Portfolio value function
function portfolioValue(/*userID.PortfolioID from database*/)
{
    var value = 0;
    //for loop to be edited when database is incorporated
    for(stock in portfolio)
    {
        alphaVantageAPI.getDailyData(stock)
        .then(dailyData => 
        {
            value += dailyData[0].Close * Qty; 
        })
        .catch(err => {
        console.error(err);
        });
    }
    return value;
}

//Function for calculating the profit that could be earned on a given date
function profit(/*userID.PortfolioID from database*/)
{
    value = portfolioValue();
    investment = initialInvestment();

    return (value - investment) / investment *100;
}

//Plot pie chart for industry break down
function dispPortfolioPie(/*user data from database */)
{

}

//Update porfolio value scatter plot by adding new plot
function updateGraph(portfolioValue)
{

}

//Display graph of individual stock
function dispStockMetric(Stock)
{   
    var date = [];
    var open = [];
    var high = [];
    var low = [];
    var close = [];
    var adjClose = [];
    var volume = [];

    alphaVantageAPI.getDailyData(stock)
    .then(dailyData => 
    {
        for(var i = 0; i < 30; i++)
        {
            date.push(dailyData[0].Timestamp);
            open.push(dailyData[0].Open);
            high.push(dailyData[0].High);
            low.push(dailyData[0].Low);
            close.push(dailyData[0].Close);
            adjClose.append(dailyData[0].AdjClose);
        }
    })
    .catch(err => {
    console.error(err);
    });
   
    var openData = {
        x: date,
        y: open,
        mode: 'lines+markers'
    };
    var highData = {
        x: date,
        y: high,
        mode: 'lines+markers'
      };
      
      var lowData = {
        x: date,
        y: low,
        mode: 'lines+markers'
      };

      var closeData = {
        x: date,
        y: close,
        mode: 'lines+markers'
      };

      var adjCloseData = {
        x: date,
        y: adjClose,
        mode: 'lines+markers'
      };
      
      var data = [ openData, highData, lowData, closeData, adjCloseData ];
      
      var layout = {
        title: 'Line and Scatter Plot'
      };
      
      Plotly.newPlot('myDiv', data, layout);

}
