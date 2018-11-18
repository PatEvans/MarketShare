// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


// Pie Chart Example

var ctxAll = document.getElementById("myPieChartAll");
if(ctx != null){

  var dataAll = $.get( "/data/getAll", function(_dataAll){
    console.log(_dataAll.dataAll.financial);
    var myPieChart = new Chart(ctxAll, {
      type: 'pie',
      data: {
        labels: ["Financial", "Utilities", "Consumer Disretionary", "costumer Staples", "Energy", "Healthcare", "Industrial", "Technology",
                "Telecom", "Materials", "Real Estate", "Other"],
        datasets: [{
          data: [_dataAll.dataAll.financial, _dataAll.dataAll.utilities, _dataAll.dataAll.consumerDiscretionary,_dataAll.dataAll.consumerStaples,
                _dataAll.dataAll.energy, _dataAll.dataAll.healthcare, _dataAll.dataAll.industrial,
                _data.data.technology, _data.data.telecom, _data.AlldataAll.materials, _dataAll.dataAll.realEstate, _dataAll.dataAll.other],
          backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', '#00ffff', '#ffff00', '#990000',
                            '#40caee', '#0000ff', '#20b2aa', '#ff7f50', '#000000'],
        }],
      },
      options: {

        legend: {
          display: false
        }
      }
    });
  });
}
var ctx = document.getElementById("myPieChart");
if(ctx != null){
  var data = $.get( "/data/getPortfolioIndustry", function(_data) {

  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Financial", "Utilities", "Consumer Disretionary", "costumer Staples", "Energy", "Healthcare", "Industrial", "Technology",
              "Telecom", "Materials", "Real Estate", "Other"],
      datasets: [{
        data: [_data.data.financial, _data.data.utilities, _data.data.consumerDiscretionary,_data.data.consumerStaples,
              _data.data.energy, _data.data.healthcare, _data.data.industrial,
              _data.data.technology, _data.data.telecom, _data.data.materials, _data.data.realEstate, _data.data.other],
        backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', '#00ffff', '#ffff00', '#990000',
                          '#40caee', '#0000ff', '#20b2aa', '#ff7f50', '#000000'],
      }],
    },
    options: {

      legend: {
        display: false
      }
    }
  });
  });
}
