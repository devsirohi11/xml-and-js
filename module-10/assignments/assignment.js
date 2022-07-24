const clientId = `172cdbb8280c4c7298e0e13e3aa0aecb`;
const clientSecret = `f2e28530f1b547238db4e84e87bfc8da`;

const getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  return data.access_token;
};

const getGenres = async (token) => {
  const result = await fetch(
   // https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10
    `https://api.spotify.com/v1/browse/categories?locale=sv_US`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.categories.items;
};

const getPlaylistByGenre = async (token, genreId) => {
  const limit = 10;

  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.playlists.items;
};


const getTracksArtists = async (token, playlistUrl) => {
    const limit = 4;
    const result = await fetch(
      `${playlistUrl}?limit=${limit}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
  
    const data = await result.json();
    return data.items;
  };


const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  const list = document.getElementById(`genres`);
  genres.map(async ({ name, id, icons: [icon], href }) => {
    const playlists = await getPlaylistByGenre(token, id);
    const playlistsList = playlists.map(
        async ({ name, external_urls: { spotify }, images: [image], tracks: { href } }) => {
          const tracks = await getTracksArtists(token, href);
          const tracksList = tracks.map(({ track: { name, artists: [artist] } }) => {
            return `<p> ${name} , Artist: ${artist.name}</p>`
          })
          .join(``);
        return `
        <li>
          <a href="${spotify}" alt="${name}" target="_blank">
            <img src="${image.url}" width="180" height="180"/>
          </a>
           <div> 
           <ul>
            <a ${tracksList}>
            </a>
            </ul>
          </div>
        </li>`
      });

    listWithArtist = await Promise.all(playlistsList);
    listWithArtist = listWithArtist.join(``);

             

    if (playlists) {
      const html = `
      <article class="grid-container">
        
        <div>
          <h2>${name}</h2>
          <ol>
          <li> ${playlistsList}</li>
          </ol>
        </div>
        
        <div id="sub_div">     
        <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/> 
        <div>  
        <ol>
         <li> ${listWithArtist}</li>
        </ol>
      </div>
      </article>`;

      list.insertAdjacentHTML("beforeend", html);
    }
  });
};

loadGenres();
