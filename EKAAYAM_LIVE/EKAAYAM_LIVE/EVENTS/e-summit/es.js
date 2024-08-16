const Marketing_Marathon = document.querySelector('#Marketing_Marathon');
Marketing_Marathon.addEventListener('click', function() {
    //alert('Marketing_Marathon clicked!');
    window.location.href = './details.html';
  });

  const Ideathon = document.querySelector('#Ideathon');
  Ideathon.addEventListener('click', function() {
    //alert('Ideathon clicked!');
    window.location.href = './details.html';
  });

  const Hackathon = document.querySelector('#Hackathon');
  Hackathon.addEventListener('click', function() {
    //alert('Hackathon clicked!');
    window.location.href = './details.html';
  });

  const Mentorship = document.querySelector('#Mentorship');
  Mentorship.addEventListener('click', function() {
    //alert('Participation clicked!');
    window.location.href = './details.html';
  });

  const Speakers_Note = document.querySelector('#Speakers_Note');
  Speakers_Note.addEventListener('click', function() {
    //alert('Participation clicked!');
    window.location.href = './details.html';
  });

  const Workshop = document.querySelector('#Workshop');
  Workshop.addEventListener('click', function() {
    //alert('Participation clicked!');
    window.location.href = './details.html';
  });
  
  const Success_Story = document.querySelector('#Success_Story');
  Success_Story.addEventListener('click', function() {
    //alert('Participation clicked!');
    window.location.href = './details.html';
  });
  
  const Panel_Discussion = document.querySelector('#Panel_Discussion');
  Panel_Discussion.addEventListener('click', function() {
    //alert('Participation clicked!');
    window.location.href = './details.html';
  });
  
  const Startup_Marketing = document.querySelector('#Startup_Marketing');
  Startup_Marketing.addEventListener('click', function() {
    //alert('Participation clicked!');
    window.location.href = './details.html';
  });
  
  const Podcast = document.querySelector('#Podcast');
  Podcast.addEventListener('click', function() {
    //alert('Participation clicked!');
    window.location.href = './details.html';
  });

  // Countdown Timer
  const countdownElement = document.getElementById('countdown');
  const register_close = new Date('2024-04-06'); // Replace with the actual birthday in ISO format

  function updateCountdown() {
      const now = new Date().getTime();
      const timeUntilBirthday = register_close - now;

      const days = Math.floor(timeUntilBirthday / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeUntilBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeUntilBirthday % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeUntilBirthday % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `Registration Closes: ${days}d ${hours}h ${minutes}m ${seconds}s`;

      if (timeUntilBirthday < 0) {
          countdownElement.innerHTML = 'Registration Closed!';
      }
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  //acordion
  var acc = document.getElementsByClassName("accordion");
      var i;
      
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var pane1 = this.nextElementSibling;
          if (pane1.style.display === "block") {
            pane1.style.display = "none";
          } else {
            pane1.style.display = "block";
          }
        });
      }

      /*=============== HIDE INSPECT ===============*/
document.onkeydown=function(e)
{
    if(event.keyCode == 123)
    {
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))
    {
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0))
    {
        return false;
    }

    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
    {
        return false;
    }
}