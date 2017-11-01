//This variable will store our url string which we will use to make our GET request
var url;

//This will be used to store the data we get from the photon GET request
var particleMess;


// This is used to set the color of our canvas
// values will be from 0-255
var colorValue = 0;

function setup() {
    //lets create a canvas, whose background color we will be able to set
    createCanvas(200, 200);

    // Here is where we create the url string
    // It will be used to make a GET request from our photon
    // The results of hat request will be returned in JSON (javaScript Object Notation)
            //The first part will always be the same |
    url = 'https://api.particle.io/v1/devices/' +
    '24003c000651353530373132/' +    //your deviceID  (found in the particel console)
    'value' +                       // the variable you would like to get (This is set in the particle program)
    '?access_token=0a8b763710c4db33921b0c94d3c994ec2a979146'; //your access token (found in the Particle Settings)


    //Once we make our url string, we can use it in the function loadJSON, which is what makes the request
    // and parses it into JSON
    //Once the GET is complete adn loaded, that data gets stored into out variable particleMess,
    //and a callback function is automatically called (executed)
    // particleMess = loadJSON(url, function(data) {
    //
    //     //This is what the callback function executes
    //     //Here, we log to out javascript console (in out web browser) the entire contents of what
    //     //is stored in particleMess.  This only happens the FIRST TIME WE LOAD THE PAGE
    //     console.log(particleMess);
    // });

    httpGet(url,'json', function(data) {
        console.log(data);
    });
}

function draw() {
    //the only thing we update in our draw function is the background of our canvas,
    //which is set by our variable colorValue,
    background(colorValue);

    //colorValue itself will be set by the value that is sent over from the photon
}

//This makes a timer that calls the function getData every 1000 milliseconds
let myTimer = setInterval(getData, 2000);

//This function makes a GET request (just like in setup)
//but it is executed every second
function getData() {
        /*same thing as in setup but
            but instead of logging the entire JSON object, we parse out the value we want
            which is the variable 'value' from our photon program
            we find this out by looking at the contents of particleMess (which was printed out in setup)
            looking at it in out console, we find--
                name:"value"
                result:109
            what we want to access is 'filed' under the name 'result'
        */
    httpGet(url, 'json', function(data) {
        console.log(data.result);
        colorValue = data.result;
    });
}
