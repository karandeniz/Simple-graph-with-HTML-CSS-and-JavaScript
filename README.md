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

So we gave them values sure but now we need to input them into the graph. How is that gonna work? Don't worry functions and forloops are here to save you. This code will help you switch numbers depending on the "date". In the code it alos says Math.random, you can change that and just keep it as a number so it stays like that forever. In my job at CrowdCreate I used some const to make variables for the thing you bought.

      for (let i = 0; i < days; i++) {
             const date = new Date();
        switch (interval) {
          case 'day':
            date.setHours(date.getHours() - i);
            labels.unshift(date.toLocaleTimeString());
            data.unshift(Math.floor(Math.random() * 100));
            data2.unshift(Math.floor(Math.random() * 100));
            break;
          case 'week':
            date.setDate(date.getDate() - i);
            if (i < 7) {
              labels.unshift(date.toDateString());
              data.unshift(Math.floor(Math.random() * 100));
              data2.unshift(Math.floor(Math.random() * 100));
            }
            break;
          case 'month':
            date.setDate(date.getDate() - i);
            labels.unshift(date.toDateString());
            data.unshift(Math.floor(Math.random() * 100));
            data2.unshift(Math.floor(Math.random() * 100));
            break;
        }
      }
    }

Now lets get to my favourite part :

## Styling

In my code I just use JavaScript to make it easier but you could use CSS if you would like. Now I didn't style my buttons since they aren't really important in this project but it still is there so you could just use some JS syntax like changeColor() or if you want the hover feature onclick. Above the graph you also see text that says:"Data 1 and Data 2" above the graph. We can also change that if we want to in label. But yeah here is the code: 

      const myChart = new Chart(ctx, {
            type: 'line',
            data: {
            labels: labels,
        datasets: [{
          label: 'Price 2',
          data: data,
          borderColor: 'rgba(75, 192, 192, 1)', 
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 1
        }, {
          label: 'Price 1',
          data: data2,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderWidth: 1
        }]
      }

Alright that is basically it about this code! With this similair JS code you can make different types of graphs too like circle graphs or block graphs. You can check for more detail inside of the code itself. Thank you for reading, bye👋


