// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

$.get( "/data/getPortfolioIndustry", function( data ) {
        $( ".result" ).html( data );
        alert( "Load was performed." );


// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Utilities", "Consumer Disretionary", "costumer Staples", "Energy", "Healthcare", "Industrial", "Technology",
            "Telecom", "Materials", "Real Estate", "Other"];
    datasets: [{
      data: [data.utilities, data.consumerDiscretionary,data.consumerStaples, data.energy, data.healthcare, data.industrial,
            data.telecom, data.materials, data.realEstate, data.other];
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', '#00ffff', '#ffff00', '#990000',
                        '#40caee', '#0000ff', '#20b2aa', '#ff7f50'],
    }],
  },
  options: {

    legend: {
      display: false
    }
  }
});
});
