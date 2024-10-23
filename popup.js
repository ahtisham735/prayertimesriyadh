
document.addEventListener('DOMContentLoaded', ()=>{
    // Format the current date as DD-MM-YYYY
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = today.toLocaleDateString('en-US', options);
    
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = today.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    
    // API URL with dynamic date
    const apiUrl = `https://api.aladhan.com/v1/timingsByCity/${formattedDate}?city=riyadh&country=Saudia%20arab&method=4`;

    // Fetch prayer times from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const timings = data.data.timings;
            
            // Update the table with the prayer times
            document.getElementById('fajr').textContent = timings.Fajr;
            document.getElementById('sunrise').textContent = timings.sunrise;
            document.getElementById('sunrise').textContent = timings.Sunrise;
            document.getElementById('dhuhr').textContent = timings.Dhuhr;
            document.getElementById('asr').textContent = timings.Asr;
            document.getElementById('maghrib').textContent = timings.Maghrib;
            document.getElementById('isha').textContent = timings.Isha;
        })
        .catch(error => {
            console.error('Error fetching prayer times:', error);
        });
  })
