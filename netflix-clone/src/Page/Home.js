import React from 'react';
import Row from "../component/Row";
import requests from "../utils/firestore";

function Home() {
  return (
    <div>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Horror" fetchUrl={requests.fetchHorror} />
      <Row title="Action" fetchUrl={requests.fetchAction} />
      <Row title="Romance" fetchUrl={requests.fetchRomance} />
      <Row title="Comedy" fetchUrl={requests.fetchComedy} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default Home

