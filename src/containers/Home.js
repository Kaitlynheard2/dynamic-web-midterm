import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import AnalysisCard from "../components/AnalysisCard";

//const TWITTER_API_KEY = `MFRmMIIjwGpm8sdBQrskD7uug`;
//const TWITTER_API_SECTRET_KEY = `ikzSpUmDLhCIM3rZQWrVynMf12gxSj5ZcAawANWd1LfNY9qoZL`;

function Home() {
  const [tweetData, setTweet] = useState();

  const BEARER_TOKEN = `AAAAAAAAAAAAAAAAAAAAAIZfUwEAAAAAmUXjvCgh%2Fux7VSX4tTwqOid4WSo%3D4Pd9V02o0zokvvmz9J7MSXH0FtRA8IrnuEXY4TQgqgnzYwwt34`;
  // cors anywhere link: https://cors-anywhere.herokuapp.com/corsdemo

  useEffect(() => {
    let config = {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    };
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/users/1163912602931662848/tweets`,
        config
      )
      .then(function (response) {
        console.log(response);
        setTweet(response.data.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, []);

  return (
    <div className="Wrapper">
      <header className="HeaderStyle">The Book Of Basi</header>
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
            <AnalysisCard key={i} tweetInfo={tweetInfo} />
          ))}
      </div>
    </div>
  );
}

export default Home;
