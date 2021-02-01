import axios from "axios";

const infoUrl = "https://api.achan.dev/sp500-info";
const timeSeriesUrl = "https://api.achan.dev/sp500-time-series";

export const getSp500Data = async () => {
  let res = {};

  const { data: infoData } = await axios.get(infoUrl);

  res = infoData;

  const { data: timeSeriesData } = await axios.get(timeSeriesUrl);

  Object.keys(res).forEach((tickerSymbol) => {
    if (!res[tickerSymbol]) {
      res[tickerSymbol] = {};
    }
    res[tickerSymbol]["TIME_SERIES"] = timeSeriesData[tickerSymbol];
  });

  return res;
};
