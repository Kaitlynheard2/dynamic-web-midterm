import React, { useEffect, useState } from "react";
import axios from "axios";

function AnalysisCard({ tweetInfo }) {
  const [analysisData, setAnalysisData] = useState({});
  const ANAYLSIS_API_KEY = `74f9282a0e925cc02721212041e7bc84`;

  useEffect(() => {
    if (tweetInfo) {
      axios
        .get(
          `https://api.meaningcloud.com/sentiment-2.1?key=${ANAYLSIS_API_KEY}&lang=auto&txt=${tweetInfo.text}`
        )
        .then(function (response) {
          console.log(response);
          setAnalysisData(response);
        })
        .catch(function (error) {
          console.warn(error);
        });
    }
  }, [tweetInfo]);

  const analysisColorString = AnalysisColor(analysisData);
  const TweetID = tweetInfo.id;

  return (
    <div className="DataWrapper">
      <div
        className="AnalysisStyle"
        style={{
          backgroundColor: analysisColorString,
        }}
      ></div>
      <p className="TextStyle">{tweetInfo.text}</p>
      <div className="TweetButtonStyle">
        <a
          className="TweetButtonLinkStyle"
          id="link"
          href="https://twitter.com/statuses/"
        >
          Go To Tweet
        </a>
      </div>
    </div>
  );
}

export function AnalysisColor(Analysis) {
  if (!Analysis.data) {
    return null;
  }
  switch (Analysis.data.score_tag) {
    case "P+":
      return `rgb(${29}, ${161}, ${242})`;
    case "P":
      return `rgb(${25}, ${140}, ${212})`;
    case "NEU":
      return `rgb(${21}, ${115}, ${173})`;
    case "N":
      return `rgb(${15}, ${81}, ${122})`;
    case "N+":
      return `rgb(${10}, ${57}, ${87})`;
    default:
      return `rgb(${101}, ${119}, ${134})`;
  }
}

export default AnalysisCard;
