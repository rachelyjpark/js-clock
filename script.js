// function runClock() {
//     var now = new Date()

//     var hour = now.getHours() % 12
//     var min = now.getMinutes()
//     var sec= now.getSeconds()
//     var ms = now.getMilliseconds()

//     var clock = document.querySelector("div.clock")
//     var hourHand = clock.querySelector("div.hour")
//     var minHand = clock.querySelector("div.minute")
//     var secHand = clock.querySelector("div.second")

//     var hourRotation = 30 * hour + (0.5 * min)
//     var minRotation = 6 * min + (0.1 * sec)
//     var secRotation = 6 * sec + 0.006 * ms

//     hourHand.style.transform = "rotate(" + hourRotation + "deg)"
//     minHand.style.transform = "rotate(" + minRotation + "deg)"
//     secHand.style.transform = "rotate(" + secRotation + "deg)"
//     requestAnimationFrame(runClock)

// }

//     runClock()

    
// function clock() {
//     var hours = document.getElementById('hour');
//     var minutes = document.getElementById('minutes');
//     var seconds = document.getElementById('seconds');

//     var h = new Date().getHours();
//     var m = new Date().getMinutes();
//     var s = new Date().getSeconds();
//     let greeting;

// if (hour < 10) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// document.getElementById("demo").innerHTML = greeting;
  
//     var am = 'AM';

//     if (h > 12) {
//         h = h - 12;
//         // var am = 'PM';
//     }
//     hours.innerHTML = h;
//     minutes.innerHTML = m;
//     seconds.innerHTML = s;
//     if (h < 10) {
//         alert = "Good day";
//       }


//       if (hours < 10) {
//         document.body.style.background = "#00000";
//       } else {
//         document.body.style.background = "#D8307F";
//       }
      
// }


// var interval = setInterval(clock, 1000);

function runClock() {
    var now = new Date()


    let am = document.querySelector("div.am")
    let pm = document.querySelector("div.pm")
    var hour = now.getHours() % 12
    var min = now.getMinutes()
    var sec= now.getSeconds()
    var ms = now.getMilliseconds()

    var clock = document.querySelector("div.clock")
    var hourHand = clock.querySelector("div.hour")
    var minHand = clock.querySelector("div.minute")
    var secHand = clock.querySelector("div.second")

    var hourRotation = 30 * hour + (0.5 * min)
    var minRotation = 6 * min + (0.1 * sec)
    var secRotation = 6 * sec + 0.006 * ms

    hourHand.style.transform = "rotate(" + hourRotation + "deg)"
    minHand.style.transform = "rotate(" + minRotation + "deg)"
    secHand.style.transform = "rotate(" + secRotation + "deg)"
    requestAnimationFrame(runClock)

      

}

    runClock()


var bg = document.querySelector('body')
 
 var now = new Date();
    var hours = now.getHours();
    var ft = now.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true

    });
      if (5 <= hours && hours < 8) {//Morning
        document.getElement("time").style.color = "white";
                    document.querySelector(".clock").style.backgroundColor = "white";
                      document.querySelector("body").style.background = "linear-gradient(0.25turn, #2D1D7A, #573170, #804565, #AA585B, #D36C50, #FD8046)";   
        var type = "Morning";
    }
    if (8 <= hours && hours < 17) {//Day
document.getElementById("time").style.color = "white";
             document.querySelector(".clock").style.backgroundColor = "white";
              document.querySelector("body").style.background = "linear-gradient(0.25turn, #004996, #37aee0, #c5f1ff)";

        var type = "Daytime";
    }
    if (17 <= hours && hours < 19) {//Evening
       document.getElementById("time").style.color = "white";
             document.querySelector(".clock").style.backgroundColor = "white";
            document.querySelector("body").style.background = "linear-gradient(0.25turn, #152852, #FD5E53, #FFE373)";
        var type = "Evening";
    }
    if (19 <= hours && hours < 5) {//Night
    document.getElementById("time").style.color = "black";
                 document.querySelector(".clock").style.backgroundColor = "white";
               document.querySelector("body").style.background = "linear-gradient(0.25turn, #1761af, #0f1762, #100136)";
        var type = "Nighttime";


    }


document.getElementById("time").innerHTML = `${ft} ${type}`;