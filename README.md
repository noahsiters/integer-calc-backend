## Setting Up & Running
First you need to clone this project onto your local machine, which can be done with:
```
git clone git@github.com:noahsiters/integer-calc-backend.git
```

After cloning, you can then navigate into the directory and run `node .` which will start the service.

Afetr running, you should see the following message: "currently running calculator API".

## Additional Info
### Testing
The app should be running on [http://localhost:8080](http://localhost:8080), this is the port that the Front End React App will be sending requests to. You can test to see if the back end is running by going to that link in your browser. You should see a "hello world!' message on screen. You can also submit equations to this address but adding `/calc/{EQUATION}` onto the URL.

For example, submitting:
```
http://localhost:8080/calc/2+2
```
Should get you a result of:
```
4
```
### About
This application was built using Node.js and the Express web app framework.
