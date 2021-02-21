///book image link, book genre, book level, #pages 
//books: 1)The Hardy Boys(M),2)Percy Jackson(FK), 3)Hunger Games(F), 4)Maze Runner(F), 5)Sisters(NF), 6)Barack Obama-Audacity of Hope(B), 7)The Mysterious Benedict Society(M)
var userAge;
var userLevel;
var userGenre;





function openPage(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function displayRadioValue() {
  var ele = document.getElementsByName('age');
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      if (ele[i].value == "young") {
        userAge = "K";
        document.getElementById("result").innerHTML = "Stored!"
      } else {
        userAge = " ";
        document.getElementById("result").innerHTML = "Stored!"
      }


    }
  }
}

function displayLevel() {
  var multiple = document.getElementsByName('level');
  for (j = 0; j < multiple.length; j++) {
    if (multiple[j].checked) {
      if (multiple[j].value == 'low') {
        userLevel = "low";
        document.getElementById("finish").innerHTML = "Stored!"
      } else if (multiple[j].value == 'medium') {
        userLevel = "medium";
        document.getElementById("finish").innerHTML = "Cool!"
      } else {
        userLevel = "high";
        document.getElementById("finish").innerHTML = "You're an outstanding reader!"
      }
    }
  }
}

function displayGenre() {
  var done = document.getElementsByName('genre');
  for (j = 0; j < done.length; j++) {
    if (done[j].checked) {
      if (done[j].value == 'mystery') {
        userGenre = "mystery";
        document.getElementById("done").innerHTML = "I love mystery too!"
      } else if (done[j].value == 'fantasy') {
        userGenre = "fantasy";
        document.getElementById("done").innerHTML = "I love fantasy too! Press "
      } else if (done[j].value == 'nonfiction') {
        userGenre = "nonfiction";
        document.getElementById("done").innerHTML = "Nonfiction is fun to read about!"
      } else if (done[j].value == 'bio') {
        userGenre = "bio";
        document.getElementById("done").innerHTML = "Interesting!"
      } else {
        userGenre = "sports";
        document.getElementById("done").innerHTML = "Sports are fun to read about!"
      }
    }
  }
}



function giveBook() {

    var book_link = ["https://live.staticflickr.com/4017/4678209693_869435518f_b.jpg", "https://live.staticflickr.com/7201/7015164945_074d6f9881.jpg", "https://live.staticflickr.com/5587/13679008623_2c7071a143_b.jpg", "https://live.staticflickr.com/8479/8231437275_38559829a9.jpg", "https://live.staticflickr.com/5560/15094833408_cd3a88c693_b.jpg",
   "https://live.staticflickr.com/3277/2818612899_042ee14613_b.jpg", "https://live.staticflickr.com/2595/3860129663_ac6c2d5d8d.jpg"];

  //K means for kids and teens, noK means only for teens
  var genre = ["mysteryK", "fantasyK", "fantasy ", "fantasy ", "nonfictionK", "bioK", "mysteryK"];
  var level = ["high", "medium", "medium", "medium", "low", "high", "medium"];
  var yt = ["https://www.youtube.com/watch?v=BxHrKU7OM6w", "https://www.youtube.com/watch?v=MkXnKTQB3DE&list=PLz-Vg9eRuMquBSlk2ovMOS7NLqRgcJX2p", "https://www.youtube.com/watch?v=HApQGDqkSN8", "https://www.youtube.com/watch?v=OdcV2Ft8IVg", "https://www.youtube.com/watch?v=r2Sw4hu63d0", "https://www.youtube.com/watch?v=vqmr1A2I1jY", "https://www.youtube.com/watch?v=dk9rykV5j-M&list=PLjbBwHOoj4i0z4aBNXVHYsGhYz6m25ee8"];

  var indexes = [];
  for (i = 0; i < book_link.length; i++) {
    var counter = 0;
    if (userAge === genre[i].charAt(genre[i].length - 1)) {
      counter = counter + 1;
    }
    if (userLevel === level[i]) {
      counter = counter + 2;
    }
    if (userGenre === genre[i].substring(0, genre[i].length)) {
      counter = counter + 2;
    }
    if (counter >= 2) {
      var img = document.createElement("img");
      img.src = book_link[i];
      img.height = 500;
      img.width = 500;
      var src = document.getElementById("x");
      src.appendChild(img);
      document.getElementById("y").innerHTML = yt[i];
    }

  }
  

}



