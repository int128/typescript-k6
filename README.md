# typescript-k6 [![test](https://github.com/int128/typescript-k6/actions/workflows/test.yaml/badge.svg)](https://github.com/int128/typescript-k6/actions/workflows/test.yaml)

Write your [grafana/k6](https://k6.io) test with TypeScript, and run the test in GitHub Actions.

## Getting Started

### Run in GitHub Actions

Create a pull request and then k6 will run.

### Run locally

```console
% k6 run src/http-get.ts

         /\      Grafana   /‾‾/
    /\  /  \     |\  __   /  /
   /  \/    \    | |/ /  /   ‾‾\
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/

     execution: local
        script: src/http-get.ts
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 35s max duration (incl. graceful stop):
              * default: 10 looping VUs for 5s (gracefulStop: 30s)


     data_received..................: 504 kB 87 kB/s
     data_sent......................: 7.3 kB 1.3 kB/s
     http_req_blocked...............: avg=211.96ms min=2µs      med=6µs      max=856.16ms p(90)=844.27ms p(95)=855.71ms
     http_req_connecting............: avg=47.51ms  min=0s       med=0s       max=196.59ms p(90)=190.64ms p(95)=192.15ms
     http_req_duration..............: avg=201.2ms  min=184.74ms med=191.84ms max=379.63ms p(90)=197.48ms p(95)=207.26ms
       { expected_response:true }...: avg=201.2ms  min=184.74ms med=191.84ms max=379.63ms p(90)=197.48ms p(95)=207.26ms
     http_req_failed................: 0.00%  0 out of 40
     http_req_receiving.............: avg=9.47ms   min=21µs     med=64µs     max=188.36ms p(90)=245.5µs  p(95)=10.08ms
     http_req_sending...............: avg=34.69µs  min=5µs      med=16µs     max=513µs    p(90)=79.6µs   p(95)=87.44µs
     http_req_tls_handshaking.......: avg=143.27ms min=0s       med=0s       max=587.26ms p(90)=573.75ms p(95)=575.04ms
     http_req_waiting...............: avg=191.69ms min=184.57ms med=191.42ms max=198.19ms p(90)=196.22ms p(95)=196.87ms
     http_reqs......................: 40     6.896836/s
     iteration_duration.............: avg=1.41s    min=1.18s    med=1.19s    max=2.05s    p(90)=2.04s    p(95)=2.04s
     iterations.....................: 40     6.896836/s
     vus............................: 10     min=10      max=10
     vus_max........................: 10     min=10      max=10


running (05.8s), 00/10 VUs, 40 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  5s
```

## Datadog k6 integration

### Prepare

To send the metrics from GitHub Actions to Datadog,

1. Create [an API key of Datadog](https://docs.datadoghq.com/account_management/api-app-keys/).
2. Put the API key to the repository secret `DATADOG_API_KEY` in GitHub Actions.
3. Enable [k6 integration](https://docs.datadoghq.com/integrations/k6/) in Datadog.

### Run

The workflow runs the test and exports the metrics to Datadog via OpenTelemetry.

1. Start the Datadog Agent container.
2. Run k6 with [OpenTelemetry output](https://grafana.com/docs/k6/latest/results-output/real-time/opentelemetry/).
3. Datadog Agent sends the metrics to Datadog.

Here is an example of metrics.

<img width="970" alt="image" src="https://user-images.githubusercontent.com/321266/226154959-24f03266-2ec2-4cbd-8f2b-fffccbae8b0f.png">
