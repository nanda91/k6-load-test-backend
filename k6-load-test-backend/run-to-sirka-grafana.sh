#!/bin/bash
# docker-compose -f docker-compose.local.yml up -d influxdb grafana
echo "--------------------------------------------------------------------------------------"
echo "K6 Local Grafana dashboard https://grafana.production.toolchain.sirka.io/d/eeENvI1Vk/sirka-k6-load-testing-results?orgId=1"
echo "--------------------------------------------------------------------------------------"
docker-compose -f docker-compose.sirka-grafana.yml run --rm k6 run /$1
