$(document).ready(function() {

  //List of variables
  var current_img = "1";

  //Creates the images
  function createImg(image) {
    $("#images img").remove();
    var img = new Image();
    var div = document.getElementById("images");
    img.onload = function() {
      div.appendChild(img);
    }
    img.src = image;
  };

  //Creates left arrow
  function createLeftArrow() {
    var img = new Image();
    var div = document.getElementById("left-arrow");
    img.onload = function() {
      div.appendChild(img);
    }
    img.src = "images/leftarrow.png";
  };

  //Creates right arrow
  function createRightArrow() {
    var img = new Image();
    var div = document.getElementById("right-arrow");
    img.onload = function() {
      div.appendChild(img);
    }
    img.src = "images/rightarrow.png";
  };

  //Creates image buttons functionality
  $("#frame1").on("click", function() {
    createImg("images/image1.jpg");
    current_img = "1";
  });

  $("#frame2").on("click", function() {
    createImg("images/image2.jpg");
    current_img = "2";
  });

  $("#frame3").on("click", function() {
    createImg("images/image3.jpg");
    current_img = "3";
  });

  $("#frame4").on("click", function() {
    createImg("images/image4.jpg");
    current_img = "4";
  });

  // Create left arrow functionality
  $("#left-arrow").on("click", function() {
    var new_image = Number(current_img) - 1;
      if (new_image === 0) {
        new_image = "4";
      }
      new_image = new_image.toString();
    switch(new_image) {
      case "1":
        createImg("images/image1.jpg");
        current_img = "1";
        break;
      case "2":
        createImg("images/image2.jpg");
        current_img = "2";
        break;
      case "3":
        createImg("images/image3.jpg");
        current_img = "3";
        break;
      case "4":
        createImg("images/image4.jpg");
        current_img = "4";
        break;
      default:
        return;
    }
  });

  // Create right arrow functionality
  $("#right-arrow").on("click", function() {
    var new_image = Number(current_img) + 1;
      if (new_image === 5) {
        new_image = "1";
      }
      new_image = new_image.toString();
    switch(new_image) {
      case "1":
        createImg("images/image1.jpg");
        current_img = "1";
        break;
      case "2":
        createImg("images/image2.jpg");
        current_img = "2";
        break;
      case "3":
        createImg("images/image3.jpg");
        current_img = "3";
        break;
      case "4":
        createImg("images/image4.jpg");
        current_img = "4";
        break;
      default:
        return;
    }
  });

  //Set auto cimter to continously switch slides
  function timer() {
    var timestart = setTimeout(function() {
      $("#right-arrow").click();
      timer();
    }, 5000);
  };

  //Initialize when page loads up.
  createImg("images/image1.jpg"); //default image
  createLeftArrow();
  createRightArrow();
  timer();

  //set timer to continously run
  //while (true) {
  //  clearTimeout();
  //  timer();
  //};


});
