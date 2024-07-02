const baseUrl = 'https://jsonplaceholder.typicode.com';
const albumContainer = document.getElementById('container');

const getAlbums = async()=>{
    const albumdata = await fetch(`${baseUrl}/albums/1/photos`, {
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }).then(async (response) => {
        const result = await response.json();
        return result;

    })
    .catch(error => {
        throw new Error(error.message)
    });
    console.log({albumdata});

    albumdata.forEach(item => {
        const container = document.createElement('div');
        container.setAttribute('key', item.id);
        container.setAttribute('class', 'single-album-container')
        const title = document.createElement('h3');
        title.innerHTML = item.title;
        const image = document.createElement('img');
        image.setAttribute('alt','album-image');
        image.src = item.url;
        container.appendChild(image);
        container.appendChild(title)
        albumContainer.appendChild(container);
    });
}
document.addEventListener('DOMContentLoaded', getAlbums)
