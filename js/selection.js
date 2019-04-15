var currentPiece;

$(function () {
    $(document).on('click', '.piece-selector', function() {
        
        $(this).addClass('piece-selected');
        if ($("button.piece-selected").length > 1){ 
            $('button').removeClass('piece-selected');
        }
        $(this).addClass('piece-selected');

        document.getElementById('hidden').style.display = "block";

        if(this.value == "Q"){
            currentPiece = 'chartQ';
            document.getElementById('chosen-piece').innerHTML = "You have chosen the Queen !";
            document.getElementById('text-where').innerHTML = "For the Queens ♕, they tend to die on their thrones : the D1 and D8 cells. Poor Queens...";
            document.getElementById('text-when').innerHTML = "The death chance of Queens is rather homogeneous compared to the other piece. The maximum occurs mid-game arround the move N°43.";
            document.getElementById('text-whoBar').innerHTML = "Queens are quite omnivorous. They tend to eat everything in the same proportions. With a preference for Pawns and... Queens.";
            ChangeChart('chartQ');
        }
        if(this.value == "R"){
            currentPiece = 'chartR';
            document.getElementById('chosen-piece').innerHTML = "You have chosen the Rook !";
            document.getElementById('text-where').innerHTML = "Rooks ♖ have a danger zone in their respective rows (first for the white, last for the black). It is explained by their difficulty to move. They have the highest chance to die at the D1 and D8 cells, mostly because of a Queen-side castling to benefit of a clear column to unleash their power. But they also become vulnerable.";
            document.getElementById('text-when').innerHTML = "Rooks have tiny chance to die early-game, but a higher chance of death late-game, between move N°29 to move N°90.";            
            document.getElementById('text-whoBar').innerHTML = "Rooks' diet have 2 main components : Pawns (39%) and other Rooks (33%). They complete their diet with the other pieces.";
            ChangeChart('chartR');
        }
        if(this.value == "B"){
            currentPiece = 'chartB';
            document.getElementById('chosen-piece').innerHTML = "You have chosen the Bishop !";
            document.getElementById('text-where').innerHTML = "Bishops ♗ have a more spread danger zone. But we can notice that they have a highest chance to die in the C3, F3, C6 and F6 cells, like the ones for the Knights. That's because in some openings, Bishops captures the Knights before they can make some harms, especially for the F6 cell.";
            document.getElementById('text-when').innerHTML = "Bishops as the Knight tend to have a higher death rate early game.";
            document.getElementById('text-whoBar').innerHTML = "Bishops tend to eat 3 types of pices : Pawns, Knights and other Bishop without preference. The rest of their diet is composed of Rooks and Queens.";
            ChangeChart('chartB');
        }
        if(this.value == "N"){
            currentPiece = 'chartN';
            document.getElementById('chosen-piece').innerHTML = "You have chosen the Knight !";
            document.getElementById('text-where').innerHTML = "Knighs ♘ have special danger zone : the C3, F3, C6 and F6 cells, which are the prefered first move for Knights, and the D4, E4, D5 and E5 central cells, which are generally first agression zone. Most of the time, Knights are thrown in the middle of the battle to capture the central Pawns that occupy the central cells.";
            document.getElementById('text-when').innerHTML = "Knighs as the Bishop tend to have a higher death rate early game. They have the smallest death chance in the late game.";
            document.getElementById('text-whoBar').innerHTML = "Knights as the Bishop, prefer Panws, Bishops and other Knights in their diet. But they have a large preference for Pawns.";
            ChangeChart('chartN');
        }
        if(this.value == "P"){
            currentPiece = 'chartP';
            document.getElementById('chosen-piece').innerHTML = "You have chosen the Pawn !";
            document.getElementById('text-where').innerHTML = "Pawns ♙ tend to stay on the same column. And on rare occasions go to a side column to capture a piece. They mostly go in a straight line. We have seen that the center is a true bloodbath, so the center Pawns have a horrible fate, they will be sacrified once they reach the center of the chessboard. Hopefully, for the side Panws, they have lesser chance to die.";
            document.getElementById('text-when').innerHTML = "Pawns are thrown into the battle really early-game. And most of the time they are the first to die. There is a death chance spike arround move N°6 and N°7. Then the death chance decrease slowly, and is rather uniform between the middle-game and the late-game.";
            document.getElementById('text-whoBar').innerHTML = "Pawns' diet is mainly composed of... other Pawns : arround 71% of their diet. They are the most cannibals of the pieces. Then, their diet is composed of 12% of Knights and 12% of Bishops. And 3% of Rooks and 3% of Queens.";
            ChangeChart('chartP');
        }

        HideWho();
        HideWhen();
        DrawGraph();
        chartWho2 = Highcharts.chart('chart-whoBar2', chartWhoOptions.normal);
  });
});

$(function() {

    $(document.getElementById('show-all')).click(function() {
        $(chartWhen.series).each(function(){
            this.setVisible(true, false);
        });
        chartWhen.redraw();
    });
  });