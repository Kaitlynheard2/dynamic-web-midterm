import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const TWITTER_API_KEY = `MFRmMIIjwGpm8sdBQrskD7uug`;
const TWITTER_API_SECTRET_KEY = `ikzSpUmDLhCIM3rZQWrVynMf12gxSj5ZcAawANWd1LfNY9qoZL`;
const ANAYLSIS_API_KEY = `74f9282a0e925cc02721212041e7bc84`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [tweet, setTweet] = useState();
  const [Qr, setQr] = useState();
  const BEARER_TOKEN = `AAAAAAAAAAAAAAAAAAAAAIZfUwEAAAAAmUXjvCgh%2Fux7VSX4tTwqOid4WSo%3D4Pd9V02o0zokvvmz9J7MSXH0FtRA8IrnuEXY4TQgqgnzYwwt34`;
  const twitterURL = `https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/users/1163912602931662848/tweets`;
  const analysisURL = `https://api.meaningcloud.com/sentiment-2.1`;
  // cors anywhere link: https://cors-anywhere.herokuapp.com/corsdemo

  let query = useQuery();

  useEffect(() => {
    const tweetKey = query.get("tweet");
    setTweet(tweetKey);
  }, [query]);

  useEffect(() => {
    let config = {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    };
    axios
      .get(twitterURL, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <header>hi</header>;
}

export default Home;
