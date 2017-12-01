var a = prompt('Podaj z ilu wierszy ma składać się choinka: '), 
    n = 0;

function drawTree (n){
    for (var i = 0; i <= n; i++){
        var star = '';
        for (var j = i; j < n; j++){
            star += ' ';
        }
        for( var k = 1; k <= (2 * i - 1); k++)
        {
            star += '*';
        }
    console.log(star);
    }
}

drawTree(a);