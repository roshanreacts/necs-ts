import React, { useState, useEffect } from "react";

import Button from "@/components/Button/Button";

function useFetchFilms() {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    setStatus("loading");

    fetch("https://swapi.dev/api/films/")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        setStatus("success");
        setData(data.results);
      })
      .catch(() => {
        setStatus("error");
      });
  }, []);

  return {
    status,
    data,
  };
}

export function App() {
  const { status, data: films } = useFetchFilms();

  if (status === "loading") {
    return <p>Fetching Star Wars data...</p>;
  }

  if (status === "error") {
    return <p>Could not fetch Star Wars data</p>;
  }

  return (
    <div className="films-grid">
      {films.map(
        (film: {
          episode_id: number;
          title: string;
          opening_crawl: string;
        }) => (
          <article key={film.episode_id} className="film-card">
            <h4 className="film-title">{film.title}</h4>
            <Button>{film.opening_crawl}</Button>
          </article>
        )
      )}
    </div>
  );
}
