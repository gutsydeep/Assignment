const maxChecks = 1
let selectedCount = 0

document.querySelector('div').addEventListener('click', event => {
  if (event.target.type === 'checkbox') {
    selectedCount = event.target.checked
      ? selectedCount + 1
      : selectedCount - 1
  }

  if (selectedCount >= maxChecks) {
    document.querySelectorAll('input[type="checkbox"][name="gender"]:not(:checked)').forEach(input => input.disabled = true)
  } else {
    document.querySelectorAll('input').forEach(input => input.disabled = false)
  }
})

document.getElementById("surveyForm").addEventListener("submit", function (event) {
  
  const dobInput = document.getElementById("dob");
  const dobValue = new Date(dobInput.value);

  const currentDate = new Date();

  const formData = new FormData(event.target);
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    
    // Display a popup with the selected values
    const popupContent = Object.entries(formValues).map(([key, value]) => {
      return `${key}: ${value}`;
    }).join("\n");

  if (dobValue > currentDate) {
    alert("Date of Birth cannot be in the future. Please select a valid date.");
    dobInput.focus();
    event.preventDefault();
    return false;
  }

  if(dobValue < currentDate)
    alert("Selected Values:\n" + popupContent);
});

function resetForm() {
    document.getElementById("surveyForm").reset();
    selectedCount = 0;
  }

  document.getElementById("surveyForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Get form values

    // Reset the form
    resetForm();
  });
