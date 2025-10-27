const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollToDivProject");
  const targetDiv = document.getElementById("targetDivProject");

  scrollButton.addEventListener("click", function () {
    targetDiv.scrollIntoView({
      behavior: "smooth", // Makes the scroll animation smooth
      block: "start", // Aligns the top of the element with the top of the scroll area
    });
  });
});

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// ============ Validator ==============

// Contructor
function Validator(options) {
  function validate(inputElement, rule) {
    var errorMessage = rule.test(inputElement.value);
    var errorElement =
      inputElement.parentElement.querySelector(".form-message");

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }

    return !errorMessage;
  }

  var formElement = document.querySelector(options.form);

  if (formElement) {
    formElement.onsubmit = function (e) {
      e.preventDefault();

      var isFormValid = true;

      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (!isValid) isFormValid = false;
      });

      if (isFormValid) {
        var fullname = formElement.querySelector("#fullname").value;
        var email = formElement.querySelector("#email").value;
        var message = formElement.querySelector("#message").value;

        var contactData = {
          fullname: fullname,
          email: email,
          message: message,
        };

        localStorage.setItem("contactForm", JSON.stringify(contactData));
      }
    };

    options.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };
      }
    });
  }
}

// Make rules

Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(value)
        ? undefined
        : "Vui lòng nhập đúng định dạng email";
    },
  };
};
