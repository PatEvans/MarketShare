const alpha = require('alphavantage')({ key: process.env.AV_API_KEY });

//Portfolio value function
function portfolioValue(/*pass dictionary of stock codes and quantities; daily CSV */)
{
    for(stock in portfolio)
    {
       // value += stock[closing price from close in CSV] * stock[qty];
    }
    return value;
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
function dispStockMetric(/*String stockCode, CSV file */)
{

}
