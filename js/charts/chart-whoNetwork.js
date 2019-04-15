function DrawGraph(){
    
    var G = new jsnx.DiGraph();
     
    G.addNodesFrom([["♔", {color: '#FF0800'}],
                    ["♕", {color: '#FF0800'}], 
                    ["♖", {color: '#FFBF00'}], 
                    ["♗", {color: '#FFBF00'}], 
                    ["♘", {color: '#FFBF00'}], 
                    ["♙", {color: '#0064C7'}]]);
    G.addEdgesFrom([
                    ["♔", "♕", {weight: 0}],
                    ["♔", "♖", {weight: 0.19}], 
                    ["♔", "♗", {weight: 0.17}], 
                    ["♔", "♘", {weight: 0}], 
                    ["♔", "♙", {weight: 0.46}],
    
                    ["♕", "♕", {weight: 0.21}], 
                    ["♕", "♖", {weight: 0.11}], 
                    ["♕", "♗", {weight: 0.17}], 
                    ["♕", "♘", {weight: 0.13}], 
                    ["♕", "♙", {weight: 0.38}], 
    
                    ["♖", "♕", {weight: 0}], 
                    ["♖", "♖", {weight: 0.33}], 
                    ["♖", "♗", {weight: 0}], 
                    ["♖", "♘", {weight: 0}], 
                    ["♖", "♙", {weight: 0.39}], 
    
                    ["♗", "♕", {weight: 0}], 
                    ["♗", "♖", {weight: 0}], 
                    ["♗", "♗", {weight: 0.25}], 
                    ["♗", "♘", {weight: 0.33}], 
                    ["♗", "♙", {weight: 0.30}], 
    
                    ["♘", "♕", {weight: 0}], 
                    ["♘", "♖", {weight: 0}], 
                    ["♘", "♗", {weight: 0.17}], 
                    ["♘", "♘", {weight: 0.29}], 
                    ["♘", "♙", {weight: 0.43}], 
    
                    ["♙", "♕", {weight: 0}], 
                    ["♙", "♖", {weight: 0}], 
                    ["♙", "♗", {weight: 0}], 
                    ["♙", "♘", {weight: 0}], 
                    ["♙", "♙", {weight: 0}]
    
                ]);
     
    jsnx.draw(G, {
        element: '#chart-whoNetwork', 
        withLabels: true, 
        edgeOffset: 20,
        layoutAttr: {
            linkDistance: 200
        },
        nodeAttr: {
            r : 15
        },
        nodeStyle: {
            fill: function(d) { 
                return d.data.color; 
            }
        }, 
        edgeStyle: {
            'stroke-width': function(d){
                return 15*d.data.weight
            }
        },
        labelStyle: {
            'font-weight': 'bold',
            'font-size': '25px',
            fill: 'black'
        },
        panZoom: {
            enabled: false
        }
    });
}
