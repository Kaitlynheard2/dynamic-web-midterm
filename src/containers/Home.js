import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import AnalysisCard from "../components/AnalysisCard";

const TWITTER_API_KEY = `MFRmMIIjwGpm8sdBQrskD7uug`;
const TWITTER_API_SECTRET_KEY = `ikzSpUmDLhCIM3rZQWrVynMf12gxSj5ZcAawANWd1LfNY9qoZL`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [tweetData, setTweet] = useState();

  const BEARER_TOKEN = `AAAAAAAAAAAAAAAAAAAAAIZfUwEAAAAAmUXjvCgh%2Fux7VSX4tTwqOid4WSo%3D4Pd9V02o0zokvvmz9J7MSXH0FtRA8IrnuEXY4TQgqgnzYwwt34`;
  const twitterURL = `https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/users/1163912602931662848/tweets`;
  // cors anywhere link: https://cors-anywhere.herokuapp.com/corsdemo

  let query = useQuery();

  //useEffect(() => {
  //const tweetKey = query.get("tweet");
  //setTweet(tweetKey);
  //}, [query]);

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

  /*
  const {
    tweet1,
    tweet2,
    tweet3,
    tweet4,
    tweet5,
    tweet6,
    tweet7,
    tweet8,
    tweet9,
    tweet10,
  } = useMemo(() => {
    if (!tweet) return {};
    return {
      tweet1: tweet[0].text,
      tweet2: tweet[1].text,
      tweet3: tweet[2].text,
      tweet4: tweet[3].text,
      tweet5: tweet[4].text,
      tweet6: tweet[5].text,
      tweet7: tweet[6].text,
      tweet8: tweet[7].text,
      tweet9: tweet[8].text,
      tweet10: tweet[9].text,
    };
  }, [tweet]);
*/
  return (
    <div>
      {tweetData &&
        tweetData.map((tweet, i) => <AnalysisCard key={i} tweet={tweet} />)}
    </div>
  );
}

export default Home;
