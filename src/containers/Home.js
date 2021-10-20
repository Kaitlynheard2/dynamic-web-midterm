import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const TWITTER_API_KEY = `MFRmMIIjwGpm8sdBQrskD7uug`;
const TWITTER_API_SECTRET_KEY = `ikzSpUmDLhCIM3rZQWrVynMf12gxSj5ZcAawANWd1LfNY9qoZL`;
const QR_API_KEY = `398754163dmsh7d018b519309283p1664a1jsn2b50e89e89e1`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [tweet, setTweet] = useState();
  const [Qr, setQr] = useState();
  const BEARER_TOKEN = `AAAAAAAAAAAAAAAAAAAAAIZfUwEAAAAAmUXjvCgh%2Fux7VSX4tTwqOid4WSo%3D4Pd9V02o0zokvvmz9J7MSXH0FtRA8IrnuEXY4TQgqgnzYwwt34`;

  useEffect(() => {
    const tweetKey = query.get("tweet");
    setTweet(tweetWord);
  }, [query]);

  useEffect(() => {
    let config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    };
    let data = {
      HTTP_CONTENT_LANGUAGE: self.language,
    };
    if (tweet) {
      axios.get(URL, data, config).then();
    }
  });
  return <header>hi</header>;
}

export default Home;
