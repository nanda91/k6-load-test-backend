# Welcome to Sirka K6 👋

## Build Setup

###### 1. Clone Repository

---

```bash
# with SSH
$ git clone git@github.com:fitpal-dcbi/k6-load-test-backend.git

# or with HTTPS
$ git clone https://github.com/fitpal-dcbi/k6-load-test-backend.git
```

###### 2. Install Dependency

---

```bash
# with npm
$ npm install

# or with yarn
$ yarn install
```

###### 3. Generate K6 Script From Postman

---

```bash
# with npm
$ npm api-user
$ npm api-food

# or with yarn
$ yarn api-user
$ yarn api-food
```

###### 4. Replace Variable option on `scripts/[script-file].js`

---

###### From :

```bash
export let options = {
   maxRedirects: 4,
};
```

###### To (For Stress Test) :

```bash
export const options = {
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
```

###### To (For Load Test) :

```bash
export const options = {
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
```

###### 5. Running Using Bash on Local Env

---

```bash
# run local api-user
$ sh run-local-api-user.sh

# run local api-food
$ sh run-local-api-food.sh

# run cloud api-user
$ sh run-cloud-api-user.sh

# run cloud api-food
$ sh run-cloud-api-food.sh
```

# Run K6 Load Testing to Sirka Grafana

```bash
# run run-to-sirka-grafana.sh <path to js script>
$ bash run-to-sirka-grafana.sh scripts/k6-script-api-food.js
```

Jadi nanti bakalan langsung tampil di grafana prod di [link ini](https://grafana.production.toolchain.sirka.io/d/eeENvI1Vk/sirka-k6-load-testing-results?orgId=1&var-Measurement=http_req_duration&var-name=All&from=now-5m&to=now). Silahkan diatur filter waktu , url dll sesuai yang diperlukan.
