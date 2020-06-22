const today = new Date();
const gradDate = new Date('06/19/2020');
const diffTime = Math.abs(today - gradDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
document.getElementById('dayCounter').innerHTML = diffDays.toString();
