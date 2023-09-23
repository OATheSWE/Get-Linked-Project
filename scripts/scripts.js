/* Aside Bar */

const openAside = document.querySelector(".fa-bars");
const closeAside = document.querySelector(".close-aside");
const aside = document.querySelector(".aside");
const asideLinks = document.querySelectorAll(".aside-links");

function sideNav() {
  openAside.addEventListener("click", function () {
    aside.classList.add("show-aside");
  });

  closeAside.addEventListener("click", function () {
    aside.classList.remove("show-aside");
  });

  for (let y = 0; y < asideLinks.length; y++) {
    asideLinks[y].addEventListener("click", function () {
      aside.classList.remove("show-aside");
    });
  }
}
sideNav();

// For the select inputs

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
        and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

// Code for Submitting of Contact message

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("contact-form");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent the default form submission behavior

//     // Serialize the form data into a JSON object
//     const formData = new FormData(form);

//     // Make an AJAX request to your PHP script
//     fetch("http://localhost:8000/contact.php", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.text()) // Assuming the response is plain text
//       .then((message) => {
//         // Handle the response from the server
//         if (message.includes("successful")) {
//           // If the message indicates success, display the success message
//           showOverlay();
//         } else {
//           // If there was an error, you can display an error message here
//           console.error("Error:", message);
//         }
//       })
//       .catch((error) => {
//         // Handle any network or request errors here
//         console.error("Request error:", error);
//       });
//   });
// });

// Code for Submitting of Registration Data

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("registration-form");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent the default form submission behavior

//     // Serialize the form data into a JSON object
//     const formData = new FormData(form);

//     // Make an AJAX request to your PHP script
//     fetch("http://localhost:8000/register.php", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.text()) // Assuming the response is plain text
//       .then((message) => {
//         // Handle the response from the server
//         if (message.includes("successful")) {
//           // If the message indicates success, display the success message
//           showOverlay();
//         } else {
//           // If there was an error, you can display an error message here
//           console.error("Error:", message);
//         }
//       })
//       .catch((error) => {
//         // Handle any network or request errors here
//         console.error("Request error:", error);
//       });
//   });
// });

// Overlay component
const overlay = document.querySelector(".overlay-container");
const overlayContent = document.querySelector(".content");

// Function to show the overlay
function showOverlay() {
  overlay.classList.add("overlay-show");
  overlayContent.classList.add("content-show");
}

// Function to hide the overlay
function hideOverlay() {
  overlay.classList.remove("overlay-show");
  overlayContent.classList.remove("content-show");
}

/* CODE FOR ANIMATIONS ON SCROLL */

const scrollElement1 = document.querySelectorAll(".js-scroll1");
const scrollElement2 = document.querySelectorAll(".js-scroll2");
const scrollElement3 = document.querySelectorAll(".js-scroll3");
const scrollElement4 = document.querySelectorAll(".js-scroll4");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement1 = (element) => {
  element.classList.add("scrolled1");
};

const hideScrollElement1 = (element) => {
  element.classList.remove("scrolled1");
};

const displayScrollElement2 = (element) => {
  element.classList.add("scrolled2");
};

const hideScrollElement2 = (element) => {
  element.classList.remove("scrolled2");
};

const displayScrollElement3 = (element) => {
  element.classList.add("scrolled3");
};

const hideScrollElement3 = (element) => {
  element.classList.remove("scrolled3");
};

const displayScrollElement4 = (element) => {
  element.classList.add("scrolled4");
};

const hideScrollElement4 = (element) => {
  element.classList.remove("scrolled4");
};

const handleScrollAnimation1 = () => {
  scrollElement1.forEach((el) => {
    if (elementInView(el, 0.1)) {
      displayScrollElement1(el);
    } else if (elementOutView(el)) {
      hideScrollElement1(el);
    }
  });

  scrollElement2.forEach((el) => {
    if (elementInView(el, 0.1)) {
      displayScrollElement2(el);
    } else if (elementOutView(el)) {
      hideScrollElement2(el);
    }
  });

  scrollElement3.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement3(el);
    } else if (elementOutView(el)) {
      hideScrollElement3(el);
    }
  });

  scrollElement4.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement4(el);
    } else if (elementOutView(el)) {
      hideScrollElement4(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation1();
});

// Assuming you have a select element with the id "mySelect"
const select = document.getElementById("categorySelect");


  // Add an event listener to the select element
  select.addEventListener("click", function () {
    // Get the selected option
    const selectedOption = select.options[select.selectedIndex];

    // Get the value of the selected option
    const selectedValue = selectedOption.value;

    // Now, you can use the selectedValue in your JavaScript code
    console.log("Selected Value:", selectedValue);
  });

