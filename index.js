const express = require('express');
const request = require("request");

const app = express();
app.disable('x-powered-by');

// Show 404 function
function show404(req, res) {
    res.status(404);
    res.send("404 Not Found");
}


app.get('/image_search/:barcode(\\d+)', (req, res) => {

    var barcode = req.params.barcode;

    request("https://world.openfoodfacts.org/api/v0/product/" + barcode + ".json", function(error, response, body) {
        var open_food_facts_data = JSON.parse(body);

        if(open_food_facts_data.status === 1) {

            var dataObject = new Object();
            dataObject.images = open_food_facts_data.product.selected_images;

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(dataObject));
        } else {
            if(open_food_facts_data.status_verbose === "product not found") {
                show404(req, res);
            } else {
                // TODO: Not tested yet!
                res.status(500);
                res.send('{"error": "500 Internal Server Error"}');
            }
        }
    });
});

app.use((req, res) => show404(req, res));

if (app.get('env') !== 'test') {
    const port = process.env.PORT || 5000;

    app.listen(port, () => {
      console.log('Listening on port ' + port);
    });
}