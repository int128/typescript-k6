# typescript-k6 [![test](https://github.com/int128/typescript-k6/actions/workflows/test.yaml/badge.svg)](https://github.com/int128/typescript-k6/actions/workflows/test.yaml)

Write your [grafana/k6](https://k6.io) test with TypeScript, and run the test in GitHub Actions.

## Getting Started

### Run in GitHub Actions

Create a pull request and then k6 will run.

### Run locally

```console
% yarn build
```

```console
% k6 run lib/http-get.js

          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: lib/http-get.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 35s max duration (incl. graceful stop):
           * default: 10 looping VUs for 5s (gracefulStop: 30s)


     data_received..................: 515 kB 84 kB/s
     data_sent......................: 7.3 kB 1.2 kB/s
     http_req_blocked...............: avg=163.75ms min=2µs      med=6µs      max=837.54ms p(90)=574.72ms p(95)=808.75ms
     http_req_connecting............: avg=9.28ms   min=0s       med=0s       max=69.39ms  p(90)=36.8ms   p(95)=55.81ms 
     http_req_duration..............: avg=242.79ms min=177.42ms med=190.86ms max=340.26ms p(90)=331.36ms p(95)=339.38ms
       { expected_response:true }...: avg=242.79ms min=177.42ms med=190.86ms max=340.26ms p(90)=331.36ms p(95)=339.38ms
     http_req_failed................: 0.00%  ✓ 0        ✗ 40  
     http_req_receiving.............: avg=314.87µs min=34µs     med=138.5µs  max=1.53ms   p(90)=751µs    p(95)=1.18ms  
     http_req_sending...............: avg=42.59µs  min=9µs      med=20µs     max=550µs    p(90)=30µs     p(95)=60.64µs 
     http_req_tls_handshaking.......: avg=134.72ms min=0s       med=0s       max=715.08ms p(90)=476.73ms p(95)=682.24ms
     http_req_waiting...............: avg=242.43ms min=176.78ms med=190.8ms  max=340.16ms p(90)=331.15ms p(95)=339.19ms
     http_reqs......................: 40     6.490733/s
     iteration_duration.............: avg=1.4s     min=1.17s    med=1.32s    max=2.17s    p(90)=1.79s    p(95)=2.14s   
     iterations.....................: 40     6.490733/s
     vus............................: 4      min=4      max=10
     vus_max........................: 10     min=10     max=10


running (06.2s), 00/10 VUs, 40 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  5s
```

## Datadog k6 integration

To send the metrics from GitHub Actions to Datadog,

1. Create [an API key of Datadog](https://docs.datadoghq.com/account_management/api-app-keys/).
2. Put the API key to the repository secret `DATADOG_API_KEY` in GitHub Actions.
3. Enable [k6 integration](https://docs.datadoghq.com/integrations/k6/) in Datadog.

The workflow starts Datadog Agent by [DataDog/agent-github-action](https://github.com/DataDog/agent-github-action) and runs k6 with `stats` output.
See https://k6.io/docs/results-output/real-time/datadog/ for details.

Here is an example of metrics.

<img width="970" alt="image" src="https://user-images.githubusercontent.com/321266/226154959-24f03266-2ec2-4cbd-8f2b-fffccbae8b0f.png">
