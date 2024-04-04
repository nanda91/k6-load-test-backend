docker-compose -f docker-compose.local.yml up -d influxdb grafana
echo "--------------------------------------------------------------------------------------"
echo "K6 Local Grafana dashboard http://localhost:3000/d/k6/sirka-k6-load-testing-results"
echo "--------------------------------------------------------------------------------------"
docker-compose -f docker-compose.local.yml run --rm k6 run /scripts/k6-script-api-home-page-apps-prod.js
