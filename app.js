window.onload = function() {  
   
    var checkboxContainer = document.getElementById('ingredients');

    checkboxContainer.addEventListener('click', function(event) {
      if (event.target.type === 'checkbox') {
        var label = event.target.nextElementSibling;

        if (event.target.checked) {
          label.style.textDecoration = 'line-through';
        } else {
          label.style.textDecoration = 'none';
        }
      }
    });
  }