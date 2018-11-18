const alpha = require('alphavantage')({ key: process.env.AV_API_KEY });
var AlphaVantageAPI = require('alpha-vantage-cli').AlphaVantageAPI; ;
var alphaVantageAPI = new AlphaVantageAPI(process.env.AV_API_KEY, 'compact', true);

//Function to calculate total invested
const initialInvestment = (/*PortfolioID from database*/) =>
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

};

//Portfolio value function
const portfolioValueChanges = (/*userID.PortfolioID from database*/) =>
{
    var portfolioValues = [];
    var dates = [];
    for(var i = 0; i < 30; i++)
    {
         //for loop to be edited when database is incorporated
        for(stock in portfolio)
       {
        alphaVantageAPI.getDailyData(stock)
        .then(dailyData => 
        {
            value += dailyData[i].Close * Qty; 
        })
        .catch(err => {
        console.error(err);
        });
        }
        portfolioValues[i] = value;
        dates[i] = dailyData[i].Timestamp;
    }
    var portfolioValuesData = {
        x: dates,
        y: portfolioValues,
        mode: 'lines+markers'
      };
      
      var data = [portfolioValuesData];
      
      var layout = {
        title: 'Line and Scatter Plot'
      };
      
      Plotly.newPlot('myDiv', data, layout);

      return portfolioValues;
};

const getPrice = (stockCode) =>
{
    alphaVantageAPI.getDailyData(stockCode)
        .then(dailyData => 
        {
            return dailyData[0].Close; 
        })
        .catch(err => {
        console.error(err);
        });
}
//Function for calculating the profit that could be earned on a given date
const profit = (/*userID.PortfolioID from database*/) =>
{
    values = portfolioValue();
    investment = initialInvestment();
    profits = []; 
    for(var i = 0; i < 30; i++)
    {
        profits[i] = (values[i] - investment) / investment * 100;

    }
    var profitValuesData = {
        x: dates,
        y: profits,
        mode: 'lines+markers'
      };
      
      var data = [profitValuesData];
      
      var layout = {
        title: 'Line and Scatter Plot'
      };
      
      Plotly.newPlot('myDiv', data, layout);

    return profits;
};

//Function for calculating best performing stock compared to previous month
const hotStock = (/*userID.PortfolioID from database*/) =>
{
    var max = (alphaVantageAPI.getMonthlyData(stock))[0].Close - (alphaVantageAPI.getMonthlyData(stock))[1].Close / (alphaVantageAPI.getMonthlyData(stock))[1].Close * 100;
    var value;
    for(stock in portfolio)
    {
        alphaVantageAPI.getMonthlyData(stock)
        .then(monthlyData => 
        {
            value = (monthlyData[0].Close - monthlyData[1].Close) /monthlyData[1].Close * 100;
            if(value > max)
            {
                max = value;
                hotStock = stock;
            }
        })
        .catch(err => {
        console.error(err);
        });
    }

    return hotStock;
};

//Function for calculating worst performing stock compared to previous month
const coldStock = (/*userID.PortfolioID from database*/) =>
{
    var min = (alphaVantageAPI.getMonthlyData(stock))[0].Close - (alphaVantageAPI.getMonthlyData(stock))[1].Close / (alphaVantageAPI.getMonthlyData(stock))[1].Close * 100;
    var value;
    for(stock in portfolio)
    {
        alphaVantageAPI.getMonthlyData(stock)
        .then(monthlyData => 
        {
            value = (monthlyData[0].Close - monthlyData[1].Close) /monthlyData[1].Close * 100;
            if(value < min)
            {
                min = value;
                coldStock = stock;
            }
        })
        .catch(err => {
        console.error(err);
        });
    }

    return coldStock;
};

//Plot pie chart for industry break down
const dispPortfolioPie = (/*user data from database */) =>
{

};

//Update porfolio value scatter plot by adding new plot
const updateGraph = (portfolioValue) =>
{

};

//Display graph of individual stock
const dispStockMetric = (Stock) =>
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

};

module.exports = { initialInvestment, portfolioValue, profit, dispPortfolioPie, updateGraph, dispStockMetric };
