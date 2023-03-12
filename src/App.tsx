import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Playlist from "./components/Playlist";
import Loader from "./components/Loader";

const CLIENT_ID = "9febfbae1ac840ecb8c9daf6d1f9a3a0";
const CLIENT_SECRET = "f7cb78f744854446a7909ae6c65082c6";

function App() {
  const [token, setToken] = useState(null);
  // Encode the client ID and secret key as base64
  const base64Credentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

  // Set up the request headers
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${base64Credentials}`,
  };

  // Set up the request body
  const body = "grant_type=client_credentials";

  useEffect(() => {
    const getToken = async () => {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: headers,
        body: body,
      });
      const data = await response.json();
      const accessToken = data.access_token;
      console.log(accessToken);
      setToken(accessToken);
    };
    getToken();
  }, []);

  const [newReleases, setNewReleases] = useState(null);
  const [featuredPlaylists, setFeaturedPlaylists] = useState(null);
  const [categories, setCategories] = useState(null);

  async function getPlaylist(path: string) {
    const response = await fetch(`https://api.spotify.com/v1/browse/${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Do something with the data returned by the Spotify Web API
    //console.log(data);
    return response.json();
  }

  useEffect(() => {
    const getPlaylists = async () => {
      const newReleases = await getPlaylist("new-releases");
      const featuredPlaylists = await getPlaylist("featured-playlists");
      const categories = await getPlaylist("categories");
      setNewReleases(newReleases?.albums.items);
      setFeaturedPlaylists(featuredPlaylists?.playlists.items);
      setCategories(categories?.categories.items);
    };

    if (token) {
      getPlaylists();
    }
  }, [token]);

  if (!token)
    return (
      <div className="App min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );

  return (
    <>
      <div className="App flex flex-start overflow-hidden">
        <Sidebar />
        <Content>
          {newReleases && (
            <Playlist playlistTitle={"RELEASED THIS WEEK"} data={newReleases} />
          )}
          {featuredPlaylists && (
            <Playlist
              playlistTitle={"FEATURED PLAYLISTS"}
              data={featuredPlaylists}
            />
          )}
          {categories && (
            <Playlist playlistTitle={"BROWSE"} data={categories} />
          )}
        </Content>
      </div>
    </>
  );
}

export default App;

/**/
