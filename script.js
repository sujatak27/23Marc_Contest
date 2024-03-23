document.addEventListener('DOMContentLoaded', function() {
    const decrementBtn = document.querySelector('#decrement');
    const incrementBtn = document.querySelector('#increment');
    const clearBtn = document.querySelector('#clear');
    const counter = document.querySelector('#counter');
    const errorMessage = document.querySelector('.error-message');
  
    let count = 0;
  
    function updateCounter() {
      counter.innerHTML = count;
      if (count <= 0) {
        decrementBtn.disabled = true;
        errorMessage.style.display = 'block';
      } else {
        decrementBtn.disabled = false;
        errorMessage.style.display = 'none';
      }
      clearBtn.style.display = count === 0 ? 'none' : 'block';
    }
  
    incrementBtn.addEventListener('click', function() {
      count++;
      updateCounter();
    });
  
    decrementBtn.addEventListener('click', function() {
      if (count > 0) {
        count--;
        updateCounter();
      }
    });
  
    clearBtn.addEventListener('click', function() {
      count = 0;
      updateCounter();
    });
  
    updateCounter();
  });