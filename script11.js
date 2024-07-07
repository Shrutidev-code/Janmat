// Get the input fields and verify button
const aadharInput = document.getElementById('aadhar');
const pinInput = document.getElementById('pin');
const verifyButton = document.getElementById('verify');

// Add event listener to Aadhaar card input field
aadharInput.addEventListener('input', function () {
  const aadharValue = aadharInput.value.trim();

  // Check if the Aadhaar card is valid
  if (/^\d{12}$/.test(aadharValue)) {
    
    aadharInput.parentNode.querySelector('.icon').innerHTML = '';
    aadharInput.parentNode.querySelector('.status').innerHTML = '';

    
  } else {
    aadharInput.parentNode.querySelector('.icon').innerHTML = '&#10060;';
    aadharInput.parentNode.querySelector('.status').innerHTML = 'Wrong';

  }
});

// Add event listener to Pin code input field
pinInput.addEventListener('input', function () {
  const pinValue = pinInput.value.trim();

  // Check if the Pin code is valid
  if (/^\d{6}$/.test(pinValue)) {
    pinInput.parentNode.querySelector('.icon').innerHTML = '';
    pinInput.parentNode.querySelector('.status').innerHTML = '';

  } else {
    pinInput.parentNode.querySelector('.icon').innerHTML = '&#10060;';
    pinInput.parentNode.querySelector('.status').innerHTML = 'Wrong';

  }
});

// Add event listener to Verify button
function myFunction() {
  const aadharValue = aadharInput.value.trim();
  const pinValue = pinInput.value.trim();

  // Check if both fields are valid
  if (/^\d{12}$/.test(aadharValue) && /^\d{6}$/.test(pinValue)) {
    aadharInput.parentNode.classList.add('valid');
    aadharInput.parentNode.querySelector('.icon').innerHTML = '&#10004;';
    aadharInput.parentNode.querySelector('.status').innerHTML = 'Valid';
    
    // pinInput.parentNode.classList.remove("wrong");
    pinInput.parentNode.classList.add('valid');
    pinInput.parentNode.querySelector('.icon').innerHTML = '&#10004;';
    pinInput.parentNode.querySelector('.status').innerHTML = 'Valid';
  }
}
