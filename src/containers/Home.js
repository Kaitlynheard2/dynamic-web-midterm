import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import AnalysisCard from "../components/AnalysisCard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [tweetData, setTweet] = useState();
  const [ID, setID] = useState();
  const BasiID = `1163912602931662848`;
  const BasiLink = `/?ID=${BasiID}`;
  const SeungID = `1245909029630742534`;
  const SeungLink = `/?ID=${SeungID}`;

  const BEARER_TOKEN = `AAAAAAAAAAAAAAAAAAAAAIZfUwEAAAAAmUXjvCgh%2Fux7VSX4tTwqOid4WSo%3D4Pd9V02o0zokvvmz9J7MSXH0FtRA8IrnuEXY4TQgqgnzYwwt34`;

  let query = useQuery();

  useEffect(() => {
    const IDValue = query.get("ID");
    setID(IDValue);
  }, [query]);

  useEffect(() => {
    let config = {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    };

    if (ID) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/users/${ID}/tweets`,
          config
        )
        .then(function (response) {
          console.log(response);
          setTweet(response.data.data);
        })
        .catch(function (error) {
          console.warn(error);
        });
    }
  }, [ID]);

  function Title(ID_input) {
    if (ID_input == BasiID) {
      return "The Book of Basi";
    }
    if (ID_input == SeungID) {
      return "Seung's Soliloquy";
    }
  }

  return (
    <div className="Wrapper">
      <nav className="NavigationBarStyle">
        <a className="NavigationBarLinkStyle" href={BasiLink}>
          The Book of Basi
        </a>
        <a className="NavigationBarLinkStyle" href={SeungLink}>
          Seung's Soliloquy
        </a>
      </nav>
      <header className="HeaderStyle">
        <p className="H1Style">{Title(ID)}</p>
        <div className="TweetButtonCORSStyle">
          <a
            className="TweetButtonLinkStyle"
            href="https://cors-anywhere.herokuapp.com/corsdemo"
          >
            Enable CORS
          </a>
        </div>
      </header>
      <div>
        <div className="PolarityKeyCard">
          <p className="PolarityTitle">Polarity Key</p>
          <div className="PolarityCategory">
            <p>P+ (Strong Positive)</p>
            <div className="PPlusStyle"></div>
          </div>
          <div className="PolarityCategory">
            <p>P (Positive)</p>
            <div className="PStyle"></div>
          </div>
          <div className="PolarityCategory">
            <p>NEU (Neutral)</p>
            <div className="NEUStyle"></div>
          </div>
          <div className="PolarityCategory">
            <p>N (Negative)</p>
            <div className="NStyle"></div>
          </div>
          <div className="PolarityCategory">
            <p>N+ (Strong Negative)</p>
            <div className="NPlusStyle"></div>
          </div>
          <div className="PolarityCategory">
            <p>NONE (Without Polarity)</p>
            <div className="NonPolarStyle"></div>
          </div>
        </div>
      </div>
      <div className="ContentWrapper">
        {tweetData &&
          tweetData.map((tweetInfo, i) => (
            <AnalysisCard key={i} ID={ID} tweetInfo={tweetInfo} />
          ))}
      </div>
    </div>
  );
}

export default Home;
