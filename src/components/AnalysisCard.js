import React, { useEffect, useState } from "react";
import axios from "axios";

function AnalysisCard(tweet) {
  const [analysisData, setAnalysisData] = useState({});
  const ANAYLSIS_API_KEY = `74f9282a0e925cc02721212041e7bc84`;

  useEffect(() => {
    //if (tweetData) {
    axios
      .get(
        `https://api.meaningcloud.com/sentiment-2.1?key=${ANAYLSIS_API_KEY}&lang=auto&txt=${tweetData.text}`
      )
      .then(function (response) {
        console.log(response);
        setAnalysisData(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
    //}
  }, [tweetInfo]);

  return (
    <div>
      <p>{tweetInfo.text}</p>
    </div>
  );
}

export default AnalysisCard;
