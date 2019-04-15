var chartWho,
    chartWho2,
    chartWhoOptions = {};

chartWhoOptions.normal = {
    chart: {
        type: 'bar'
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Super-Caneton/Chess-Survival/master/data/who.csv'
    },
    title: {
        text: 'The diet of the pieces'
    },
    xAxis: {
        title: {
            text: ''
        },
        categories: [
            '♙',
            '♘',
            '♗',
            '♖',
            '♕',
            '♔'
          ],
        labels: {
            style: {fontWeight: 'bolder', fontSize: '25px'}
        }
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function() {
               return 100*this.value+"%";
            }
        },
        min: 0,
        max: 1
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: '#000',
                style: {fontWeight: 'bolder'},
                formatter: function() {return this.series.name},
                inside: true
            },
            pointPadding: 0.1,
            groupPadding: 0
        }
    },
    tooltip: {
        formatter: function() {
            return this.x + ' eat ' + Math.round(this.y * 100) + ' % of ' + this.series.name;
        }
    }
};

chartWhoOptions.chartP = {
    chart: {
        type: 'bar'
    },
    series: [{
        name: '♙',
        data: [0.71]
    },{
        name: '♘',
        data: [0.12]
    },{
        name: '♗',
        data: [0.12]
    },{
        name: '♕',
        data: [0.03]
    },{
        name: '♖',
        data: [0.03]
    }],
    title: {
        text: 'The diet of the Pawn'
    },
    xAxis: {
        title: {
            text: ''
        },
        categories: [
            '♙'
          ],
        labels: {
            style: {fontWeight: 'bolder', fontSize: '25px'}
        }
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function() {
               return 100*this.value+"%";
            }
        },
        min: 0,
        max: 1
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: '#000',
                style: {fontWeight: 'bolder'},
                formatter: function() {return this.series.name},
                inside: true
            },
            pointPadding: 0.1,
            groupPadding: 0
        }
    },
    tooltip: {
        formatter: function() {
            return this.x + ' eat ' + Math.round(this.y * 100) + ' % of ' + this.series.name;
        }
    }
};

chartWhoOptions.chartR = {
    chart: {
        type: 'bar'
    },
    series: [{
        name: '♙',
        data: [0.39]
    },{
        name: '♘',
        data: [0.09]
    },{
        name: '♗',
        data: [0.11]
    },{
        name: '♕',
        data: [0.08]
    },{
        name: '♖',
        data: [0.33]
    }],
    title: {
        text: 'The diet of the Rook'
    },
    xAxis: {
        title: {
            text: ''
        },
        categories: [
            '♖'
          ],
          labels: {
              style: {fontWeight: 'bolder', fontSize: '25px'}
          }
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function() {
               return 100*this.value+"%";
            }
        },
        min: 0,
        max: 1
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: '#000',
                style: {fontWeight: 'bolder'},
                formatter: function() {return this.series.name},
                inside: true
            },
            pointPadding: 0.1,
            groupPadding: 0
        }
    },
    tooltip: {
        formatter: function() {
            return this.x + ' eat ' + Math.round(this.y * 100) + ' % of ' + this.series.name;
        }
    }
};

chartWhoOptions.chartN = {
    chart: {
        type: 'bar'
    },
    series: [{
        name: '♙',
        data: [0.44]
    },{
        name: '♘',
        data: [0.29]
    },{
        name: '♗',
        data: [0.17]
    },{
        name: '♕',
        data: [0.04]
    },{
        name: '♖',
        data: [0.06]
    }],
    title: {
        text: 'The diet of the Knight'
    },
    xAxis: {
        title: {
            text: ''
        },
        categories: [
            '♘'
          ],
          labels: {
              style: {fontWeight: 'bolder', fontSize: '25px'}
          }
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function() {
               return 100*this.value+"%";
            }
        },
        min: 0,
        max: 1
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: '#000',
                style: {fontWeight: 'bolder'},
                formatter: function() {return this.series.name},
                inside: true
            },
            pointPadding: 0.1,
            groupPadding: 0
        }
    },
    tooltip: {
        formatter: function() {
            return this.x + ' eat ' + Math.round(this.y * 100) + ' % of ' + this.series.name;
        }
    }
};

chartWhoOptions.chartB = {
    chart: {
        type: 'bar'
    },
    series: [{
        name: '♙',
        data: [0.30]
    },{
        name: '♘',
        data: [0.33]
    },{
        name: '♗',
        data: [0.25]
    },{
        name: '♕',
        data: [0.04]
    },{
        name: '♖',
        data: [0.08]
    }],
    title: {
        text: 'The diet of the Bishop'
    },
    xAxis: {
        title: {
            text: ''
        },
        categories: [
            '♗'
          ],
          labels: {
              style: {fontWeight: 'bolder', fontSize: '25px'}
          }
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function() {
               return 100*this.value+"%";
            }
        },
        min: 0,
        max: 1
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: '#000',
                style: {fontWeight: 'bolder'},
                formatter: function() {return this.series.name},
                inside: true
            },
            pointPadding: 0.1,
            groupPadding: 0
        }
    },
    tooltip: {
        formatter: function() {
            return this.x + ' eat ' + Math.round(this.y * 100) + ' % of ' + this.series.name;
        }
    }
};

chartWhoOptions.chartQ = {
    chart: {
        type: 'bar'
    },
    series: [{
        name: '♙',
        data: [0.38]
    },{
        name: '♘',
        data: [0.13]
    },{
        name: '♗',
        data: [0.17]
    },{
        name: '♕',
        data: [0.21]
    },{
        name: '♖',
        data: [0.11]
    }],
    title: {
        text: 'The diet of the Queen'
    },
    xAxis: {
        title: {
            text: ''
        },
        categories: [
            '♕'
          ],
          labels: {
              style: {fontWeight: 'bolder', fontSize: '25px'}
          }
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function() {
               return 100*this.value+"%";
            }
        },
        min: 0,
        max: 1
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: '#000',
                style: {fontWeight: 'bolder'},
                formatter: function() {return this.series.name},
                inside: true
            },
            pointPadding: 0.1,
            groupPadding: 0
        }
    },
    tooltip: {
        formatter: function() {
            return this.x + ' eat ' + Math.round(this.y * 100) + ' % of ' + this.series.name;
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    chartWho = Highcharts.chart('chart-whoBar', chartWhoOptions.normal);
});

function HideWho () {
    chartWho.destroy();
    chartWho = Highcharts.chart('chart-whoBar', chartWhoOptions[currentPiece]);
}

function ShowCannibals(i){
    if(i < chartWho2.series.length){
        $(chartWho2.series).each(function(){
            this.setVisible(false, false);
        });
        $(chartWho2.series)[i].setVisible(true, false);
        document.getElementById("showcannibals").innerHTML = "Next ?";
        document.getElementById("showcannibals").setAttribute('onclick', 'ShowCannibals('+ (i+1) +')');
    }
    else{
        $(chartWho2.series).each(function(){
            this.setVisible(true, false);
        });
        document.getElementById("showcannibals").innerHTML = "Show me the cannibals !";
        document.getElementById("showcannibals").setAttribute('onclick', 'ShowCannibals(0)');
    }
    chartWho2.redraw();
}