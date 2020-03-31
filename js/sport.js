// Collapse

document.addEventListener('DOMContentLoaded', function () {
  const toKnowBtns = document.querySelectorAll('.toKnow');
  toKnowBtns.forEach(function (toKnowBtn) {
    toKnowBtn.addEventListener('click', function (event) {
      const titleElement = event.target.closest('.blocSport').firstChild;
      const boxBodyElement = titleElement.parentNode.lastElementChild;

      const boxBodyClassAttribute = boxBodyElement.className;
      const boxBodyClassesArray = boxBodyClassAttribute.split(' ');

      const boxBodyIsCollapsed = boxBodyClassesArray.indexOf('collapsed') !== -1;

      if (boxBodyIsCollapsed) {
        boxBodyElement.className = 'box-body';
      } else {
        boxBodyElement.className = 'box-body collapsed';
      }
    });
  });
});

// MODAL Sondage
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
