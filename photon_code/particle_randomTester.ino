//create a varible to store a random value
int randomValue = 0;

//lets create timer that will all a function every second
Timer timer(1000, every_second);

void setup() {
    //This creates a variable that is 'seeable' (able to be seen) by the 'cloud' and able to
    // be accessed by GET requests
    // out variable randomValue will be seen as 'value' over the cloud
    Particle.variable("value", randomValue);

    //start our timer
    timer.start();

}

//this function creates a new random number everytime it is called
//and stores it in the variable randomValue

void every_second() {
    randomValue = random(256);

}
//Why did I do it this way?  so I didnt have to use delay()

void loop() {


}
