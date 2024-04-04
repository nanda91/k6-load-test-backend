// K6 Stress Test
export const optionsStressTest = {
  maxRedirects: 4,
  duration: "10m",
  vus: 50,
  ext: {
    loadimpact: {
      name: "[STRESS-TEST] Sirka Top Hit Endpoint",
      projectID: 3574111,
      staticIPs: false,
      distribution: {
        distributionLabel1: { loadZone: "amazon:sg:singapore", percent: 100 },
      },
      note: "Module User | Module Food | Module Progress",
    },
  },
};

// K6 Load Test
export const optionsLoadTest = {
  maxRedirects: 4,
  stages: [
    { duration: "1m", target: 30 },
    { duration: "3m", target: 20 },
    { duration: "1m", target: 0 },
  ],
  thresholds: {
    http_req_failed: ["rate<0.02"], // http errors should be less than 2%
    http_req_duration: ["p(95)<2000"], // 95% requests should be below 2s
  },
  vus: 50,
  ext: {
    loadimpact: {
      name: "[LOAD-TEST] Sirka Top Hit Endpoint",
      projectID: 3574111,
      staticIPs: false,
      distribution: {
        distributionLabel1: { loadZone: "amazon:sg:singapore", percent: 100 },
      },
      note: "Module User | Module Food | Module Progress",
    },
  },
};
