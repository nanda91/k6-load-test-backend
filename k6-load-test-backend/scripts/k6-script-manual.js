import http from "k6/http";
import { check, sleep } from "k6";
import { Trend } from "k6/metrics";

// const getDetailUserErrorRate = new Rate("Get Detail User Errors");
const GetDetailUser = new Trend("Get Detail User");

export const options = {
  thresholds: {
    "Get Detail User": ["p(95)<2000"],
  },
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 1000,
      timeUnit: "1s", // 1000 iterations per second, i.e. 1000 RPS
      duration: "5m",
      preAllocatedVUs: 300, // how large the initial pool of VUs would be
      maxVUs: 500, // if the preAllocatedVUs are not enough, we can initialize more
    },
  },
};

export default function () {
  const baseUrl = "https://stg-api.sirka.io";
  const params = {
    headers: {
      Authorization: "token 71s029vsj9j1mdjxkke7e1acrrnpvywv3rhhuhok",
      "Content-Type": "application/json",
    },
  };

  const requests = {
    "Get Detail User": {
      method: "GET",
      url: `${baseUrl}/user/962`,
      params: params,
    },
  };

  const responses = http.batch(requests);
  const responseGetDetailUser = responses["Get Detail User"];

  check(responseGetDetailUser, {
    "status is 200": (r) => r.status === 200,
  });

  GetDetailUser.add(responseGetDetailUser.timings.duration);
  sleep(1);
}
