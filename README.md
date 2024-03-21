# Introduction

Hi! Welcome to this code. I will be explaining how the code functions. But what did I use it for. Well I used it on my job at CrowdCreate where I created a website so you can keep track of everything you have. Working on that project was a bit tough, but working on the graph was for me really fun. I enjoyed making this alot. Now back to the function of the code, if you paste this in your IDE or your text editor of choise, you might get something like this:

<img width="1440" alt="Ekran Resmi 2024-03-21 21 08 40" src="https://github.com/karandeniz/Simple-graph-with-HTML-CSS-and-JavaScript/assets/159159757/d136c82a-0561-4afc-b91e-b71781f503ee">

Pretty cool right? Now lets get to the interesting part: How the code works.

# Function

The languages that the system is using is mostly JavaScript and of course HTML. Lets start with the complicated part of the code: 

## The buttons

If you haven't noticed or realized, underneath the graph are 3 buttons: day, week and month. In our JavaScript we need to give these buttons a function so they can work. But how? Well lets start of by giving them a value. A day has 24 hours so 24 dots, a week has 7 days so we input 7 buttons and depending on the month that many days.

      function generateData(interval) {
            labels = [];
            data = [];
            data2 = [];
            let days;
            switch (interval) {
            case 'day':
            days = 24;
            break;
        case 'week':
          days = 7;
          break;
        case 'month':
          days = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
          break;
      }


(side note: like I said for month it changes depending on the month)

So we gave them values sure but now we need to input them into the graph. How is that gonna work? Don't worry functions and forloops are here to save you.
