var express = require('express');
var app = express();

/*app.get('/calc', (req, res) => {
    res.status(200).send({
        message: 'ok'
    })
});*/

app.get('/calc/:equation', function (req, res) {
    var equation = req.params.equation;
    var calculation = equation.match(/\d+|[^0-9]/g);
    var result;

    for (var i = 0; i < calculation.length; i++) {
        if (i ==0) {
            result = parseInt(calculation[i]);
        }
        else {
            if (!isNaN(calculation[i])) {
                switch (calculation[i - 1]) {
                    case "-":
                        result -= parseInt(calculation[i]);
                        break;
                    case "+":
                        result += parseInt(calculation[i]);
                        break;
                    case "*":
                        result *= parseInt(calculation[i]);
                        break;
                }
            }
        }
    }
    res.send(result.toString());
})

app.get('/', function (req, res) {
    res.send('hello world!')
})

app.listen(process.env.PORT || 8080, function () {
    console.log('currently running calculator API')
})