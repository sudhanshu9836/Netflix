  // JavaScript to handle the hover effect
  document.getElementById('he').addEventListener('mouseover', function() {
    document.querySelector('.list-container').style.display = 'block';
});

document.getElementById('he').addEventListener('mouseout', function() {
    document.querySelector('.list-container').style.display = 'none';
});

