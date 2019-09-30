#  How to run tests
## 1. Download and install NodeJS.           
https://nodejs.org/en/download/

## 2. Load the project from the GitHub.       
https://github.com/so1ji/SamolazovProject

## 3. In project go to the root and perform command: 
```
npm install
```

## 4. Run: 

###  4.1 To run all tests in Electron
```
npx cypress run
```

###  4.2 To run all tests in Chrome: 
```
npx cypress run -b chrome
```

## 5. To record runs use:   
```
npx cypress run -b chrome --record --key c21525ba-f260-4a95-ae31-2278911df66d
```

**--record means** that transfer results to the Cypress Dashboard is on.  **--key parameter followed by value
 c21525ba-f260-4a95-ae31-2278911df66d** is used for access to project in the Cypress Dashboard.

## 6. To run single test use:  
```
npx cypress open
```

##  7.1 Choose a test and click on him.

## 8. Results are loaded into the Cypress Dashboard 
https://dashboard.cypress.io/#/projects/gd3x2a/runs
