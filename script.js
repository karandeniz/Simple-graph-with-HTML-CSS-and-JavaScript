document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const dayBtn = document.getElementById('dayBtn');
    const weekBtn = document.getElementById('weekBtn');
    const monthBtn = document.getElementById('monthBtn');                //consts for our line graph
    let labels = [];
    let data = [];
    let data2 = [];
    let interval = 'day';
  
  
    function generateData(interval) {
      labels = [];
      data = [];
      data2 = [];
      let days;
      switch (interval) {
        case 'day':
          days = 24; //amount of hours in the day
          break;
        case 'week':
          days = 7; //ammount of days in the week
          break;
        case 'month':
          days = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(); //amount of days depending on the month
          break;
      }
      for (let i = 0; i < days; i++) { //for loop to help make the math work for the ammount of hours and days
        const date = new Date();
        switch (interval) {
          case 'day':
            date.setHours(date.getHours() - i);
            labels.unshift(date.toLocaleTimeString());
            data.unshift(Math.floor(Math.random() * 100));
            data2.unshift(Math.floor(Math.random() * 100));     //can change math.random if you want a stable combination of a number
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
  
    generateData('day');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Data 1',//name for lines
          data: data,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',//colors
          borderWidth: 1
        }, {
          label: 'Data 2',//name for lines
          data: data2,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)', //colors
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Time'          //showing us info when pressing balls
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      }
    });
  
    dayBtn.addEventListener('click', function() { //onclick function for clicking on the small balls (Day)
      interval = 'day';
      generateData(interval);
      myChart.data.labels = labels;
      myChart.data.datasets[0].data = data;
      myChart.data.datasets[1].data = data2;
      myChart.options.scales.x.title.text = 'Time';
      myChart.update();
    });
  
    weekBtn.addEventListener('click', function() { //onclick function for clicking on the small balls (Week)
      interval = 'week';
      generateData(interval);
      myChart.data.labels = labels;
      myChart.data.datasets[0].data = data;
      myChart.data.datasets[1].data = data2;
      myChart.options.scales.x.title.text = 'Date';
      myChart.update();
    });
  
    monthBtn.addEventListener('click', function() { //onclick function for clicking on the small balls (Month)
      interval = 'month';
      generateData(interval);
      myChart.data.labels = labels;
      myChart.data.datasets[0].data = data;
      myChart.data.datasets[1].data = data2;
      myChart.options.scales.x.title.text = 'Date';
      myChart.update();
    });
  });
