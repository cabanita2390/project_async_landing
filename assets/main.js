// const axios = require('axios');

// const options = {
//     method: 'GET',
//     url: 'https://youtube-v31.p.rapidapi.com/captions',
//     params: {
//       part: 'snippet',
//       videoId: 'M7FIvfx5J10'
//     },
//     headers: {
//       'X-RapidAPI-Key': '4b665e1e70mshb6b8f4cbf97d299p176761jsn33ab2171226b',
//       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }
//   };

// async function data() {
//     try {
//         const response = await axios.request(options);
//         console.log(response.data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// data();

console.log('Hola Mundo');

const content = null || document.getElementById('content')

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b665e1e70mshb6b8f4cbf97d299p176761jsn33ab2171226b',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json()
    // console.log(data.items[0].snippet);
    return data;
}

(async ()=> {
    try {
        const videos = await fetchData(API);
        let view = `${videos.items.map(video => `
                <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
                </div>
                </div>
            `).slice(0,4).join('')}
        `;
        content.innerHTML = view
    } catch (error) {
        console.log(error);
    }
})();

//TODO Hacer una función que mapee toda la data y la convierta a HTML

fetchData(API)


