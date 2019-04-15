var chartWhere,
    chartWhereOptions = {};


chartWhereOptions.chartP = {
    chart: {
        type: 'heatmap'
    },

    title: {
        text: 'Death Probability on the Chessboard'
    },

    xAxis: {
        categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        title: null
    },

    yAxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8'],
        title: null
    },
    tooltip: {
        formatter: function() {
            return '♙ has ' + Math.round(this.point.value * 10000)/100 + '% of death chance in this cell';
        }
    },

    colorAxis: {
        min: 0,
        minColor: '#c6ffdd',
        maxColor: '#f7797d',
        labels: {
            formatter: function() {
               return 100*this.value+"%";
            }
        }
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Super-Caneton/Chess-Survival/master/data/whereP.csv'
    }
};

chartWhereOptions.chartR = {
    chart: {
        type: 'heatmap'
    },

    title: {
        text: 'Death Probability on the Chessboard'
    },

    xAxis: {
        categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'G', 'H'],
        title: null
    },

    yAxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8'],
        title: null
    },
    tooltip: {
        formatter: function() {
            return '♖ has ' + Math.round(this.point.value * 10000)/100 + '% of death chance in this cell';
        }
    },

    colorAxis: {
        min: 0,
        minColor: '#c6ffdd',
        maxColor: '#f7797d',
        labels: {
            formatter: function() {
               return 100*this.value+"%";
            }
        }
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Super-Caneton/Chess-Survival/master/data/whereR.csv'
    }
};

chartWhereOptions.chartB = {
    chart: {
        type: 'heatmap'
    },

    title: {
        text: 'Death Probability on the Chessboard'
    },

    xAxis: {
        categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'G', 'H'],
        title: null
    },

    yAxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8'],
        title: null
    },
    tooltip: {
        formatter: function() {
            return '♗ has ' + Math.round(this.point.value * 10000)/100 + '% of death chance in this cell';
        }
    },

    colorAxis: {
        min: 0,
        minColor: '#c6ffdd',
        maxColor: '#f7797d',
        labels: {
            formatter: function() {
               return 100*this.value+"%";
            }
        }
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Super-Caneton/Chess-Survival/master/data/whereB.csv'
    }
};

chartWhereOptions.chartN = {
    chart: {
        type: 'heatmap'
    },

    title: {
        text: 'Death Probability on the Chessboard'
    },

    xAxis: {
        categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'G', 'H'],
        title: null
    },

    yAxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8'],
        title: null
    },
    tooltip: {
        formatter: function() {
            return '♘ has ' + Math.round(this.point.value * 10000)/100 + '% of death chance in this cell';
        }
    },

    colorAxis: {
        min: 0,
        minColor: '#c6ffdd',
        maxColor: '#f7797d',
        labels: {
            formatter: function() {
               return 100*this.value+"%";
            }
        }
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Super-Caneton/Chess-Survival/master/data/whereN.csv'
    }
};

chartWhereOptions.chartQ = {
    chart: {
        type: 'heatmap'
    },

    title: {
        text: 'Death Probability on the Chessboard'
    },

    xAxis: {
        categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'G', 'H'],
        title: null
    },

    yAxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8'],
        title: null
    },
    tooltip: {
        formatter: function() {
            return '♕ has ' + Math.round(this.point.value * 10000)/100 + '% of death chance in this cell';
        }
    },

    colorAxis: {
        min: 0,
        minColor: '#c6ffdd',
        maxColor: '#f7797d',
        labels: {
            formatter: function() {
               return 100*this.value+"%";
            }
        }
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Super-Caneton/Chess-Survival/master/data/whereQ.csv'
    }
};

document.addEventListener('DOMContentLoaded', function () {
    try {
      chartWhere = Highcharts.chart('chart-where', chartWhereOptions.chartP);
    }
    catch(err) {
      alert(err.message);
    }
    
});


function ChangeChart(ChartName){
    try {
      chartWhere = Highcharts.chart('chart-where', chartWhereOptions[ChartName]);
    }
    catch(err) {
      alert(err.message);
    }
    $('button').removeClass('chart-selected');
    $(document.getElementById(ChartName)).addClass('chart-selected');
}
