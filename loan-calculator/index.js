document.getElementById('loan-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);
});

function calculateResults() {
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthly = document.getElementById('monthly-payment');
  const total = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calcInterest = parseFloat(interest.value) / 100 / 12;
  const calcPayments = parseFloat(years.value) * 12;

  const mnthPayments = Math.pow(1 + calcInterest, calcPayments);
  const mnthly = (principal * mnthPayments * calcInterest) / (mnthPayments-1);

  if (isFinite(mnthly)) {
    monthly.value = mnthly.toFixed(2);
    total.value = (mnthly * calcPayments).toFixed(2);

    totalInterest.value = ((mnthly * calcPayments) - principal).toFixed(2);

    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'block';
  } else {
    showError('Please fill all input fields with numbers');
  }
}

function showError(error) {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('results').style.display = 'none';

  const div = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  div.className = 'alert alert-danger';
  div.appendChild(document.createTextNode(error));

  card.insertBefore(div, heading);

  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector('.alert').remove();
}