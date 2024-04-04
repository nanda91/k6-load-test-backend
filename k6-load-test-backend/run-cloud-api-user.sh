echo "--------------------------------------------------------------------------------------"
echo "K6 Cloud Grafana dashboard https://app.k6.io/projects/3574111"
echo "--------------------------------------------------------------------------------------"
docker-compose -f docker-compose.cloud.yml run --rm k6 cloud /scripts/k6-script-api-user.js
