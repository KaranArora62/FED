async function searchGiphy() {
    const apiKey = 'dhD1841AcnPNhgqrTPfPp8ZDw8DJJOsp';
    const searchQuery = document.getElementById('searchInput').value.trim();
    const url = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${apiKey}&limit=10`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayGifs(data.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayGifs(gifs) {
    const gifContainer = document.getElementById('gifContainer');
    gifContainer.innerHTML = '';

    gifs.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.original.url;
        img.alt = gif.title;
        img.classList.add('gif');
        gifContainer.appendChild(img);
    });
}
