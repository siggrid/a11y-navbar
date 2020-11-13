var navButtons = Array.prototype.slice.call(
  document.querySelectorAll(".navigation__btn")
);
var navDropdowns = Array.prototype.slice.call(
  document.querySelectorAll(".navigation__btn + .dropdown-list")
);

function openDropdown(navBtn) {
  var navEl = navBtn.nextElementSibling;

  if (navEl) {
    navBtn.setAttribute("aria-expanded", "true");
    navEl.parentElement.classList.add("is-active");
  }
}

function closeDropdown(navBtn) {
  var navEl = navBtn.nextElementSibling;

  if (navEl) {
    navBtn.setAttribute("aria-expanded", "false");
    navEl.parentElement.classList.remove("is-active");
  }
}

function closeAllDropdowns() {
  navButtons.forEach(function (button) {
    closeDropdown(button);
  });
}

function toggleButtonState(button) {
  var isExpanded = button.getAttribute("aria-expanded") === "true";
  if (isExpanded) {
    closeDropdown(button);
  } else {
    closeAllDropdowns();
    openDropdown(button);
  }
}

// event handlers
function handleButtonClick(event) {
  toggleButtonState(event.currentTarget);
}

function handleButtonKeyDown(event) {
  if (event.key === "Escape" || event.key === "Esc") {
    closeDropdown(this);
  }
}

function handleNavKeyDown(event) {
  if (event.key === "Escape" || event.key === "Esc") {
    button = this.previousElementSibling;
    closeDropdown(button);
    button.focus();
  }
}

function handleNavFocusOut(event) {
  var navContainsFocus = this.contains(event.relatedTarget);
  if (!navContainsFocus) {
    var button = this.querySelector(".navigation__btn");
    button && closeDropdown(button);
  }
}

// event listeners

navButtons.forEach(function (button) {
  button.addEventListener("click", handleButtonClick);
  button.addEventListener("keydown", handleButtonKeyDown);
});

navDropdowns.forEach(function (navDropdown) {
  navDropdown.addEventListener("keydown", handleNavKeyDown);
});

// focusout listener to the container of both navigation__btn and dropdown-list
var dropdownContainers = Array.prototype.slice.call(
  document.querySelectorAll(".navigation__item")
);
dropdownContainers.forEach(function (dropdownContainer) {
  dropdownContainer.addEventListener("focusout", handleNavFocusOut);
});

// delay the immediate closing of dropdowns when the mouse leaves the navigation item area
var navItems = Array.prototype.slice.call(
  document.querySelectorAll(".navigation__item")
);

navItems.forEach(function (el, i) {
  el.addEventListener("mouseover", function (event) {
    this.className = "navigation__item is-active";
    clearTimeout(timer);
  });
  el.addEventListener("mouseout", function (event) {
    timer = setTimeout(function (event) {
      document.querySelector(".navigation__item.is-active").className =
        "navigation__item";
    }, 1000);
  });
});
