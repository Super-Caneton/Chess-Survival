var chartWhen;

document.addEventListener('DOMContentLoaded', function () {
    chartWhen = Highcharts.chart('chart-when', {
        data: {
            csvURL: 'https://raw.githubusercontent.com/Super-Caneton/Chess-Survival/master/data/when.csv'
        },
        title: {
            text: 'Death Probability over Time'
        },
        xAxis: {
            title: {
                text: 'N° of Move'
            }
        },
        yAxis: {
            title: {
                text: 'Probability'
            },
            labels: {
                formatter: function() {
                   return 100*this.value+"%";
                }
            }
        },
        tooltip: {
            formatter: function() {
                return this.series.name + ' has ' + Math.round(this.y * 10000)/100 + '% of death chance in move N°' + this.x;
            }
        },
        
        series:[{
            name: "Pawn",
            type: 'areaspline'
        },{
            name: "Knight",
            type: 'areaspline'
        },{
            name: "Bishop",
            type: 'areaspline'
        },{
            name: "Queen",
            type: 'areaspline'
        },{
            name: "Rook",
            type: 'areaspline'
        }]
    });
});

function ShowWhen(){
    $(chartWhen.series).each(function(){
        this.setVisible(true, false);
    });
    chartWhen.redraw();
    
    document.getElementById("showallwhen").innerHTML = "Hide Others";
    document.getElementById("showallwhen").setAttribute('onclick', 'HideWhen()');
}

function HideWhen(){
    var i = 0;
    $(chartWhen.series).each(function(){
        this.setVisible(false, false);
    });
    if(currentPiece == "chartN"){i=1};
    if(currentPiece == "chartB"){i=2};
    if(currentPiece == "chartQ"){i=3};
    if(currentPiece == "chartR"){i=4};
    $(chartWhen.series)[i].setVisible(true, false);
    chartWhen.redraw();

    document.getElementById("showallwhen").innerHTML = "Show All";
    document.getElementById("showallwhen").setAttribute('onclick', 'ShowWhen()');
}