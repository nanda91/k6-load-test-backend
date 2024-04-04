// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import "./libs/shim/urijs.js";
import "./libs/shim/expect.js";

export let options = { maxRedirects: 4 };

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
  environment: {
    base_url: "localhost:5001",
    staff_token: "token dcbce66093301d4d6f53baf31a007d10dd8e6e56",
    client_token: "token 71s029vsj9j1mdjxkke7e1acrrnpvywv3rhhuhok",
    superuser_token: "token dcbce66093301d4d6f53baf31a007d10dd8e6e56",
    coach_token: "token 902d6f32e070c77f83bd567afa0f542983eada06",
    token_type: "Bearer",
    token_value:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYwNzdBNzkyMERFNDM1NDQ5QkUxNEEwNTI5QkZFNjQxNUEzOTZFRjgiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJZSGVua2cza05VU2I0VW9GS2JfbVFWbzVidmcifQ.eyJuYmYiOjE2NDMyNTg1MDgsImV4cCI6MTY0MzM0NDkwOCwiaXNzIjoiaHR0cHM6Ly9vYXV0aC5mYXRzZWNyZXQuY29tIiwiYXVkIjoiYmFzaWMiLCJjbGllbnRfaWQiOiIyNzcwMTcyODVmZmU0MTc2ODFhZDdhOWE5NzBmNDdmMSIsInNjb3BlIjpbImJhc2ljIl19.auns1tGSKco5rjOcq4_PddlCfONJh7ImWHSl9Ew0yqrUUqX7yYGwBxW6riVSg69MWZ3v0ZGjkr7mO9qQBlh2hHmKepJhTJuxqiTezlAOCnqC6PfDBYowmydWAkm3bM0lF6I3kN_nT2x01oC6U3aag9tGyzCJj9Wn1yDOkNcsgXAStpNAgnHFLOwRIbL0B2wrZ754uWrLX4M0A2n0sUCh6LDhsiVn-_JFWeCtMBjEuIbrjDTjcwo6U-ydyjgVK1IruM6vIEGFWvdIV9O1QqxHoQedcEzsrK284fbo6WWqXpf45-4IOpuD6885B1O4kZioDW_gh6JY1AWDcL6UhPF_2iP0khQk6jDU5CbSB-HptB8qYoEIAX6Zp89uMuUX_XLnILTx0BvRLeK7_umm7WgoxL3y8CHEJdMoQ2km_PbgZhRW42C1IuvSqcXyhEmpOaxlpBOp1yoZbYIfOOevYEnVfRllY8Q5vP9Fx34oxGfUEeIGClvq-xxQYvyF48ZWgV-n1htw9RY1F6Q0h6H4xuXZIQAlTvEKs3PvFsn8BlgRrizjcd4T2rDUNBvRnRKplUYIfknB2ArS4Odwi3RymGz-KXCBIbX2NUAYBoFi8YFc_owk-svxerCWWtw5gBDsnIgZGYl9hBgDvaWkvTR0XfCdx3-GiDUf_g98vnlPsU9Usrw",
    "random-response::task-simplified.id": 1,
    "random-response::task-simplified":
      '{"id":2610,"date":"2022-02-10","answer":false,"description":"Tugas malam jum\'at","end_date":"March 10, 2022","category":null,"link":null}',
    "random-response::client-booking":
      '{"id":47,"start_time":"11:00:00","end_time":"11:30:00","coach_id":508,"coach_name":"Coach Sirkawan","date":"2022-07-13","is_first_call":false,"client_id":962,"client_name":"Muhammad Luthfi","status":"PENDING","coach_remark":null,"description":"Next call"}',
    "random-request::client-booking.date": "2022-04-14",
    "random-request::client-booking.start_time": "10:00",
    "random-request::client-booking.end_time": "10:30",
    "random-request::whitelist-by_email": "",
    "request-path:user_id": "",
    "response-body:get-user": "",
    token_user_stg: "token f0buksemdkap9e9j8mj9pvjxtvelmrstsnxerx5d",
    base_url_stg: "https://stg-api.sirka.io",
    base_url_prod: "https://api.sirka.io",
    admin_token_prod: "token 8736b799487aba237c72adbab8c01a194eb7cd65",
    base_url_prev: "https://prev-api.sirka.io",
    "client_token.mario": "token 234e190c1e48e224082ebc422cc88900c6cf19a1",
    base_url_scraping_meal_log_prod: "https://sirka-external-meallog.sirka.io",
    base_url_scraping_meal_log_stg:
      "https://sirka-staging-sirka-external-meallog.sirka.io",
    user_id: 1420,
    food_id: "",
    client_token_manual: "token hskpat4fqsdgpjyxxtpmdeb2s7shmxu5kdd8pujg",
    client_token_manual_stg: "token f0buksemdkap9e9j8mj9pvjxtvelmrstsnxerx5d",
    id_user_stg: "2235",
    skr: "2023-04-18",
    token_user_prod: "token lwddkp0dwjvdgs1ifalwr64l88jl73um001ol9bk",
    id_user_prod: "4678"
  }
});

export default function() {
  postman[Request]({
    name: "assessment status",
    id: "099614b2-6f40-4e27-8da8-ee6c88bb17da",
    method: "GET",
    address: "{{base_url_prod}}/assessment/check",
    headers: {
      Authorization: "{{token_user_prod}}"
    },
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);
      });
    }
  });

  postman[Request]({
    name: "voucher general",
    id: "69e039b4-52f0-46a4-b957-e0ad4a8fdcf7",
    method: "GET",
    address:
      "{{base_url_prod}}/vouchers/general?platform=apps&page=1&page_size=1",
    headers: {
      Authorization: "{{token_user_prod}}"
    },
    post(response) {
      pm.test("status code is 200", function() {
        pm.response.to.have.status(200);
      });
    }
  });

  postman[Request]({
    name: "subscription status",
    id: "3d197a17-ff4b-422c-af03-9aebe4583a44",
    method: "GET",
    address: "{{base_url_prod}}/user/{{id_user_prod}}/subscription-status",
    headers: {
      Authorization: "{{token_user_prod}}"
    },
    post(response) {
      pm.test("status code is 200", function() {
        pm.response.to.have.status(200);
      });

      pm.test("Response should have", function() {
        const resp = pm.response.json();
        pm.expect(resp).to.have.property("subscription_count");
        //pm.expect(resp.subscription_count).exist;
      });
    }
  });

  postman[Request]({
    name: "client coach",
    id: "daaca1b7-0f7b-4c11-8a5f-6df5c6ab0f31",
    method: "GET",
    address: "{{base_url_prod}}/user/client/coach",
    headers: {
      Authorization: "{{token_user_prod}}"
    },
    post(response) {
      pm.test("status code should be 200", () => {
        pm.response.to.have.status(200);
      });

      pm.test("Response should have field like below", () => {
        pm.expect(pm.response.json()).to.have.property("coach_id");
        pm.expect(pm.response.json()).to.have.property("coach_name");
        pm.expect(pm.response.json()).to.have.property("coach_gender");
        pm.expect(pm.response.json()).to.have.property("coach_avatar");
      });
    }
  });

  postman[Request]({
    name: "sirkapedia module",
    id: "a05fc84e-f774-4a35-887d-178115b0832a",
    method: "GET",
    address:
      "{{base_url_prod}}/sirkapedia/module?client_id=2235&get_by=clientId",
    headers: {
      Authorization: "{{token_user_stg}}"
    },
    post(response) {
      pm.test("status code should be 200", () => {
        pm.response.to.have.status(200);
      });
    }
  });

  postman[Request]({
    name: "user progress",
    id: "47247e34-5ae4-4876-871d-226b5a77a523",
    method: "GET",
    address: "{{base_url_prod}}/user/progress",
    headers: {
      Authorization: "{{token_user_prod}}"
    },
    post(response) {
      pm.test("status code should be 200", () => {
        pm.response.to.have.status(200);
      });
    }
  });

  postman[Request]({
    name: "client not read",
    id: "8dcc1d5b-cb8a-4c6a-8ec4-206ca69ab471",
    method: "GET",
    address: "{{base_url_prod}}/sirkapedia/client/not-read",
    headers: {
      Authorization: "{{token_user_prod}}"
    },
    post(response) {
      pm.test("status code should be 200", () => {
        pm.response.to.have.status(200);
      });
    }
  });

  postman[Request]({
    name: "food recall message",
    id: "1efdf23d-679e-4217-a417-173bfa79318b",
    method: "GET",
    address: "{{base_url_prod}}/meallogs/client/food-recall/message",
    headers: {
      Authorization: "{{token_user_prod}}"
    },
    post(response) {
      pm.test("status code should be 200", () => {
        pm.response.to.have.status(200);
      });
    }
  });

  postman[Request]({
    name: "weight entries",
    id: "7da726a9-b673-4eb0-b0dd-de4f646577af",
    method: "GET",
    address: "{{base_url_prod}}/progress/journal/weight_entries?date={{skr}}",
    headers: {
      Authorization: "{{token_user_prod}}"
    },
    post(response) {
      pm.test("status code should be 200", () => {
        pm.response.to.have.status(200);
      });
    }
  });

  postman[Request]({
    name: "is active biometric",
    id: "f2b2a6f5-100a-4490-aadd-47c7e0b9ff3c",
    method: "GET",
    address: "{{base_url_prod}}/biometric",
    headers: {
      Authorization: "{{token_user_prod}}"
    },
    post(response) {
      pm.test("status code should be 200", () => {
        pm.response.to.have.status(200);
      });

      pm.test("response should have field is_active", () => {
        pm.expect(pm.response.json()).to.have.property("is_active");
      });
    }
  });

  postman[Request]({
    name: "home banner",
    id: "9fa67bc5-8fe7-4e8d-bda2-f1b5034625c0",
    method: "GET",
    address: "{{base_url_prod}}/banner/home/",
    headers: {
      Authorization: "{{token_user_prod}}"
    },
    post(response) {
      pm.test("status code should be 200", () => {
        pm.response.to.have.status(200);
      });
    }
  });

  postman[Request]({
    name: "booking next call",
    id: "b76e3597-1879-4b3a-961b-c12fdad3d0fb",
    method: "GET",
    address: "{{base_url_prod}}/user/client/booking/next-call",
    headers: {
      Authorization: "{{token_user_prod}}"
    },
    post(response) {
      pm.test("status code should be 200", () => {
        pm.response.to.have.status(200);
      });
    }
  });

  postman[Request]({
    name: "food journal",
    id: "112e3d62-8d6b-4376-844b-9f8cf392e0fd",
    method: "GET",
    address:
      "{{base_url_prod}}/food_journal/food_repository?meal_time&page=1&page_size=4",
    headers: {
      Authorization: "{{token_user_prod}}"
    },
    post(response) {
      pm.test("status code should be 200", () => {
        pm.response.to.have.status(200);
      });
    }
  });

  postman[Request]({
    name: "profile",
    id: "1785dc2e-c360-4066-a222-0011545aa67b",
    method: "GET",
    address: "{{base_url_prod}}/user/status/profile/{{id_user_prod}}",
    headers: {
      Authorization: "{{token_user_prod}}"
    },
    post(response) {
      pm.test("status code should be 200", () => {
        pm.response.to.have.status(200);
      });
    }
  });

  postman[Request]({
    name: "referrals code",
    id: "7d916047-9b2c-403d-be15-3d641892b31b",
    method: "GET",
    address: "{{base_url_prod}}/vouchers/referrals/code",
    headers: {
      Authorization: "{{token_user_prod}}"
    },
    post(response) {
      pm.test("status code should be 200", () => {
        pm.response.to.have.status(200);
      });
    }
  });

  postman[Request]({
    name: "user progress",
    id: "682d8c2a-8916-43e8-87bf-083762132eee",
    method: "GET",
    address: "{{base_url_prod}}/onboarding/user-progress",
    headers: {
      Authorization: "{{token_user_prod}}"
    },
    post(response) {
      pm.test("status code should be 200", () => {
        pm.response.to.have.status(200);
      });
    }
  });

  postman[Request]({
    name: "intake budget calorie",
    id: "8b0ac478-bd61-4581-b436-9b766841f1fb",
    method: "GET",
    address: "{{base_url_prod}}/budget-calorie/intake?date={{skr}}",
    headers: {
      Authorization: "{{token_user_prod}}"
    },
    post(response) {
      pm.test("status code is 200", () => {
        pm.response.to.have.status(200);
      });
    }
  });
}
