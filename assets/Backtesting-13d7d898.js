import{r as o,o as i,c as p,b as t,d as s,e as a,w as d,a as l}from"./index-747ab7f0.js";const r={class:"md-content__inner md-typeset"},c={class:"admonition warning"},g={class:"admonition note"},f={__name:"Backtesting",setup(m){return(u,e)=>{const n=o("router-link");return i(),p("article",r,[e[46]||(e[46]=t("h1",{id:"backtesting"},[s(" 백테스팅 "),t("a",{class:"headerlink",href:"#backtesting",title:"영구 링크"}," ¶ ")],-1)),e[47]||(e[47]=t("p",null,"이 페이지는 백테스팅을 사용하여 전략 성능을 검증하는 방법을 설명합니다.",-1)),t("p",null,[e[1]||(e[1]=s(" 백테스팅에는 과거 데이터가 필요합니다. 관심 있는 거래쌍과 거래소의 데이터를 얻는 방법은 문서의 ")),a(n,{to:"data-download"},{default:d(()=>e[0]||(e[0]=[s(" 데이터 다운로드 ")])),_:1}),e[2]||(e[2]=s(" 섹션을 참조하세요. "))]),e[48]||(e[48]=l(`<h2 id="backtesting-command-reference"> 백테스팅 명령어 참조 <a class="headerlink" href="#backtesting-command-reference" title="영구 링크"> ¶ </a></h2><div class="highlight"><pre><code>사용법: freqtrade backtesting [-h] [-v] [--no-color] [--logfile FILE] [-V]
                             [-c PATH] [-d PATH] [--userdir PATH] [-s NAME]
                             [--strategy-path PATH]
                             [--recursive-strategy-search]
                             [--freqaimodel NAME] [--freqaimodel-path PATH]
                             [-i TIMEFRAME] [--timerange TIMERANGE]
                             [--data-format-ohlcv {json,jsongz,feather,parquet}]
                             [--max-open-trades INT]
                             [--stake-amount STAKE_AMOUNT] [--fee FLOAT]
                             [-p PAIRS [PAIRS ...]] [--eps]
                             [--enable-protections]
                             [--dry-run-wallet DRY_RUN_WALLET]
                             [--timeframe-detail TIMEFRAME_DETAIL]
                             [--strategy-list STRATEGY_LIST [STRATEGY_LIST ...]]
                             [--export {none,trades,signals}]
                             [--export-filename PATH]
                             [--breakdown {day,week,month} [{day,week,month} ...]]
                             [--cache {none,day,week,month}]
                             [--freqai-backtest-live-models]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  -i TIMEFRAME, --timeframe TIMEFRAME
                        시간 프레임 지정 (\`1m\`, \`5m\`, \`30m\`, \`1h\`, \`1d\`).
  --timerange TIMERANGE
                        사용할 데이터의 시간 범위를 지정합니다.
  --data-format-ohlcv {json,jsongz,feather,parquet}
                        다운로드된 캔들(OHLCV) 데이터의 저장 형식.
                        (기본값: \`feather\`).
  --max-open-trades INT
                        \`max_open_trades\` 설정 값을 재정의합니다.
  --stake-amount STAKE_AMOUNT
                        \`stake_amount\` 설정 값을 재정의합니다.
  --fee FLOAT           수수료 비율을 지정합니다. 거래 진입 및 종료 시 두 번 적용됩니다.
  -p PAIRS [PAIRS ...], --pairs PAIRS [PAIRS ...]
                        이 명령을 해당 거래쌍으로 제한합니다. 거래쌍은 공백으로 구분됩니다.
  --eps, --enable-position-stacking
                        동일한 거래쌍을 여러 번 구매할 수 있도록 허용합니다 (포지션 스태킹).
  --enable-protections, --enableprotections
                        백테스팅을 위한 보호 기능을 활성화합니다. 백테스팅 속도가 상당히 느려지지만, 구성된 보호 기능이 포함됩니다.
  --dry-run-wallet DRY_RUN_WALLET, --starting-balance DRY_RUN_WALLET
                        백테스팅 / 하이퍼옵트 및 드라이런을 위한 시작 잔액을 지정합니다.
  --timeframe-detail TIMEFRAME_DETAIL
                        백테스팅을 위한 세부 시간 프레임을 지정합니다 (\`1m\`, \`5m\`, \`30m\`, \`1h\`, \`1d\`).
  --strategy-list STRATEGY_LIST [STRATEGY_LIST ...]
                        백테스트할 전략 목록을 공백으로 구분하여 제공합니다. 이 옵션을 \`--export trades\`와 함께 사용할 때, 전략 이름이 파일 이름에 삽입됩니다 (예: \`backtest-data.json\`이 \`backtest-data-SampleStrategy.json\`으로 변경됨).
  --export {none,trades,signals}
                        백테스트 결과를 내보냅니다 (기본값: trades).
  --export-filename PATH, --backtest-filename PATH
                        백테스트 결과를 저장할 파일 이름을 지정합니다. \`--export\` 옵션이 설정되어 있어야 합니다. 예: \`--export-filename=user_data/backtest_results/backtest_today.json\`
  --breakdown {day,week,month} [{day,week,month} ...]
                        일별, 주별, 월별 백테스팅 결과를 표시합니다.
  --cache {none,day,week,month}
                        지정된 기간 내의 캐시된 백테스트 결과를 로드합니다 (기본값: day).
  --freqai-backtest-live-models
                        준비된 모델로 백테스트를 실행합니다.

일반 옵션:
  -v, --verbose         자세한 모드 (-vv는 더 많은 정보, -vvv는 모든 메시지).
  --no-color            하이퍼옵트 결과의 색상을 비활성화합니다. 출력을 파일로 리디렉션하는 경우 유용할 수 있습니다.
  --logfile FILE, --log-file FILE
                        지정된 파일에 로그를 기록합니다. 특별한 값은 &#39;syslog&#39;, &#39;journald&#39;입니다. 자세한 내용은 문서를 참조하세요.
  -V, --version         프로그램의 버전 번호를 표시하고 종료합니다.
  -c PATH, --config PATH
                        구성 파일을 지정합니다 (기본값: \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
  -d PATH, --datadir PATH, --data-dir PATH
                        과거 백테스팅 데이터가 있는 디렉토리 경로를 지정합니다.
  --userdir PATH, --user-data-dir PATH
                        사용자 데이터 디렉토리 경로를 지정합니다.

전략 옵션:
  -s NAME, --strategy NAME
                        봇이 사용할 전략 클래스 이름을 지정합니다.
  --strategy-path PATH  추가 전략 검색 경로를 지정합니다.
  --recursive-strategy-search
                        전략 폴더에서 재귀적으로 전략을 검색합니다.
  --freqaimodel NAME    사용자 지정 freqaimodels를 지정합니다.
  --freqaimodel-path PATH
                        freqaimodels의 추가 검색 경로를 지정합니다.
</code></pre></div><h2 id="test-your-strategy-with-backtesting"> 백테스팅으로 전략 테스트하기 <a class="headerlink" href="#test-your-strategy-with-backtesting" title="영구 링크"> ¶ </a></h2><p>이제 좋은 진입 및 종료 전략과 일부 과거 데이터를 보유하고 있다면, 이를 실제 데이터에 대해 테스트하고 싶을 것입니다. 이를 백테스팅이라고 합니다.</p>`,4)),t("p",null,[e[4]||(e[4]=s(" 백테스팅은 기본적으로 설정 파일에 있는 암호화폐(거래쌍)를 사용하며, ")),e[5]||(e[5]=t("code",null," user_data/data/<exchange> ",-1)),e[6]||(e[6]=s("에서 과거 캔들(OHLCV) 데이터를 로드합니다. 해당 거래소/거래쌍/시간 프레임 조합에 대한 데이터가 없으면, 백테스팅은 먼저 ")),e[7]||(e[7]=t("code",null," freqtrade download-data ",-1)),e[8]||(e[8]=s(" 명령어를 사용하여 데이터를 다운로드하도록 요청합니다. 다운로드에 대한 자세한 내용은 문서의 ")),a(n,{to:"data-download"},{default:d(()=>e[3]||(e[3]=[s(" 데이터 다운로드 ")])),_:1}),e[9]||(e[9]=s(" 섹션을 참조하세요. "))]),e[49]||(e[49]=t("p",null,"백테스팅 결과는 봇이 손실보다 이익을 낼 가능성이 더 높은지 확인합니다.",-1)),e[50]||(e[50]=t("p",null,"모든 수익 계산에는 수수료가 포함되며, freqtrade는 계산에 거래소의 기본 수수료를 사용합니다.",-1)),t("div",c,[e[13]||(e[13]=t("p",{class:"admonition-title"},"동적 거래쌍 목록을 사용한 백테스팅",-1)),t("p",null,[e[11]||(e[11]=s(" 동적 거래쌍 목록을 사용하는 것은 가능하지만(모든 핸들러가 백테스트 모드에서 사용 가능한 것은 아님), 현재 시장 상황에 의존합니다. 이는 거래쌍 목록의 과거 상태를 반영하지 않습니다. 또한, StaticPairlist 이외의 거래쌍 목록을 사용할 때 백테스팅 결과의 재현성을 보장할 수 없습니다. 자세한 내용은 ")),a(n,{to:"plugins"},{default:d(()=>e[10]||(e[10]=[s(" 거래쌍 목록 문서 ")])),_:1}),e[12]||(e[12]=s("를 참조하세요. "))]),e[14]||(e[14]=t("p",null,[s(" 재현 가능한 결과를 얻으려면 "),t("a",{href:"utils.html"},[t("code",null," test-pairlist ")]),s(" 명령어를 사용하여 거래쌍 목록을 생성하고 이를 정적 거래쌍 목록으로 사용하세요. ")],-1))]),t("div",g,[e[24]||(e[24]=t("p",{class:"admonition-title"},"참고",-1)),t("p",null,[e[16]||(e[16]=s(" 기본적으로 Freqtrade는 백테스팅 결과를 ")),e[17]||(e[17]=t("code",null," user_data/backtest_results ",-1)),e[18]||(e[18]=s("에 내보냅니다. 내보낸 거래는 ")),e[19]||(e[19]=t("a",{href:"#further-backtest-result-analysis"}," 추가 분석 ",-1)),e[20]||(e[20]=s("에 사용하거나 ")),a(n,{to:"plotting"},{default:d(()=>e[15]||(e[15]=[s(" 플로팅 하위 명령어 ")])),_:1}),e[21]||(e[21]=s(" ( ")),e[22]||(e[22]=t("code",null," freqtrade plot-dataframe ",-1)),e[23]||(e[23]=s(")에서 사용할 수 있습니다. "))])]),e[51]||(e[51]=l('<h3 id="starting-balance"> 시작 잔액 <a class="headerlink" href="#starting-balance" title="영구 링크"> ¶ </a></h3><p> 백테스팅에는 시작 잔액이 필요하며, 이는 <code> --dry-run-wallet &lt;balance&gt; </code> 또는 <code> --starting-balance &lt;balance&gt; </code> 명령어 인수로 제공하거나 <code> dry_run_wallet </code> 구성 설정을 통해 제공할 수 있습니다. 이 금액은 <code> stake_amount </code>보다 높아야 하며, 그렇지 않으면 봇이 거래를 시뮬레이션할 수 없습니다. </p><h3 id="dynamic-stake-amount"> 동적 스테이크 금액 <a class="headerlink" href="#dynamic-stake-amount" title="영구 링크"> ¶ </a></h3>',3)),t("p",null,[e[26]||(e[26]=s(" 백테스팅은 ")),a(n,{to:"configuration"},{default:d(()=>e[25]||(e[25]=[s(" 동적 스테이크 금액 ")])),_:1}),e[27]||(e[27]=s("을 ")),e[28]||(e[28]=t("code",null," stake_amount ",-1)),e[29]||(e[29]=s("를 ")),e[30]||(e[30]=t("code",null,' "unlimited" ',-1)),e[31]||(e[31]=s("로 설정하여 지원합니다. 이는 시작 잔액을 ")),e[32]||(e[32]=t("code",null," max_open_trades ",-1)),e[33]||(e[33]=s(" 조각으로 나눕니다. 초기 거래의 수익은 이후 더 높은 스테이크 금액으로 이어지며, 백테스팅 기간 동안 수익이 복리로 증가합니다. "))]),e[52]||(e[52]=l(`<h3 id="example-backtesting-commands"> 백테스팅 명령어 예제 <a class="headerlink" href="#example-backtesting-commands" title="영구 링크"> ¶ </a></h3><p>5분 캔들(OHLCV) 데이터로 (기본값)</p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>backtesting<span class="w"> </span>--strategy<span class="w"> </span>AwesomeStrategy
</code></pre></div><p> 여기서 <code> --strategy AwesomeStrategy </code> / <code> -s AwesomeStrategy </code>는 <code> user_data/strategies </code> 디렉토리에 있는 파이썬 파일 내의 전략 클래스 이름을 나타냅니다. </p><hr><p>1분 캔들(OHLCV) 데이터로</p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>backtesting<span class="w"> </span>--strategy<span class="w"> </span>AwesomeStrategy<span class="w"> </span>--timeframe<span class="w"> </span>1m
</code></pre></div><hr><p>스테이크 통화로 1000의 사용자 지정 시작 잔액 제공</p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>backtesting<span class="w"> </span>--strategy<span class="w"> </span>AwesomeStrategy<span class="w"> </span>--dry-run-wallet<span class="w"> </span><span class="m">1000</span>
</code></pre></div><hr><p>다른 디스크의 과거 캔들(OHLCV) 데이터 소스 사용</p><p> 바이낸스 거래소에서 역사 데이터를 다운로드하여 <code> user_data/data/binance-20180101 </code> 디렉토리에 저장했다고 가정합니다. 이 데이터를 백테스팅에 사용하려면 다음과 같이 합니다: </p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>backtesting<span class="w"> </span>--strategy<span class="w"> </span>AwesomeStrategy<span class="w"> </span>--datadir<span class="w"> </span>user_data/data/binance-20180101<span class="w"> </span>
</code></pre></div><hr><p>여러 전략 비교</p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>backtesting<span class="w"> </span>--strategy-list<span class="w"> </span>SampleStrategy1<span class="w"> </span>AwesomeStrategy<span class="w"> </span>--timeframe<span class="w"> </span>5m
</code></pre></div><p> 여기서 <code> SampleStrategy1 </code>과 <code> AwesomeStrategy </code>는 전략 클래스 이름을 나타냅니다. </p><hr><p>파일로 거래 내보내기 방지</p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>backtesting<span class="w"> </span>--strategy<span class="w"> </span>backtesting<span class="w"> </span>--export<span class="w"> </span>none<span class="w"> </span>--config<span class="w"> </span>config.json<span class="w"> </span>
</code></pre></div><p>결과를 더 이상 플로팅하거나 분석하지 않으려는 경우에만 사용하세요.</p><hr><p>사용자 지정 파일 이름을 지정하여 거래 내보내기</p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>backtesting<span class="w"> </span>--strategy<span class="w"> </span>backtesting<span class="w"> </span>--export<span class="w"> </span>trades<span class="w"> </span>--export-filename<span class="o">=</span>backtest_samplestrategy.json
</code></pre></div>`,25)),t("p",null,[e[35]||(e[35]=s(" 또한 ")),a(n,{to:"strategy-customization"},{default:d(()=>e[34]||(e[34]=[s(" 전략 시작 기간 ")])),_:1}),e[36]||(e[36]=s("에 대해 읽어보세요. "))]),e[53]||(e[53]=l(`<hr><p>사용자 지정 수수료 값 제공</p><p> 때때로 계정에는 ccxt에 표시되지 않는 특정 수수료 리베이트(특정 계정 크기 또는 월간 거래량에서 시작하는 수수료 감소)가 있습니다. 백테스팅에서 이를 고려하려면 <code> --fee </code> 명령어 옵션을 사용하여 이 값을 백테스팅에 제공할 수 있습니다. 이 수수료는 비율이어야 하며, 거래 진입 시와 종료 시 두 번 적용됩니다. </p><p>예를 들어, 주문당 수수료가 0.1%(즉, 비율로 0.001)인 경우, 백테스팅을 다음과 같이 실행합니다:</p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>backtesting<span class="w"> </span>--fee<span class="w"> </span><span class="m">0</span>.001
</code></pre></div><div class="admonition note"><p class="admonition-title">참고</p><p>다른 수수료 값을 실험하려는 경우에만 이 옵션(또는 해당 구성 매개변수)을 제공하세요. 기본적으로 백테스팅은 거래소 쌍/시장 정보에서 기본 수수료를 가져옵니다.</p></div><hr><p>타임레인지(timerange)를 사용하여 더 작은 테스트 세트로 백테스트 실행</p><p> 사용할 테스트 세트를 변경하려면 <code> --timerange </code> 인수를 사용하세요. </p><p> 예를 들어, <code> --timerange=20190501- </code> 옵션을 사용하여 백테스팅을 실행하면 입력 데이터에서 2019년 5월 1일부터 시작하는 모든 사용 가능한 데이터를 사용합니다. </p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>backtesting<span class="w"> </span>--timerange<span class="o">=</span><span class="m">20190501</span>-
</code></pre></div><p>특정 날짜 범위를 지정할 수도 있습니다.</p><p>전체 타임레인지(timerange) 지정:</p><ul><li> 2018/01/31까지의 데이터 사용: <code> --timerange=-20180131 </code></li><li> 2018/01/31 이후의 데이터 사용: <code> --timerange=20180131- </code></li><li> 2018/01/31부터 2018/03/01까지의 데이터 사용: <code> --timerange=20180131-20180301 </code></li><li> POSIX / epoch 타임스탬프 1527595200 1527618600 사이의 데이터 사용: <code> --timerange=1527595200-1527618600 </code></li></ul><h2 id="understand-the-backtesting-result"> 백테스팅 결과 이해하기 <a class="headerlink" href="#understand-the-backtesting-result" title="영구 링크"> ¶ </a></h2><p>백테스팅에서 가장 중요한 것은 결과를 이해하는 것입니다.</p><p>백테스팅 결과는 다음과 같습니다:</p><div class="highlight"><pre><code>================================================ 백테스팅 보고서 =================================================
| 거래쌍     | 거래 수 |   평균 수익 % |   총 수익 BTC |   총 수익 % | 평균 기간 |  승리 무승부 패배   승률  |
|----------+--------+----------------+------------------+----------------+--------------+--------------------------|
| ADA/BTC  |     35 |          -0.11 |      -0.00019428 |          -1.94 | 4:35:00      |    14     0    21   40.0 |
| ARK/BTC  |     11 |          -0.41 |      -0.00022647 |          -2.26 | 2:03:00      |     3     0     8   27.3 |
| BTS/BTC  |     32 |           0.31 |       0.00048938 |           4.89 | 5:05:00      |    18     0    14   56.2 |
| DASH/BTC |     13 |          -0.08 |      -0.00005343 |          -0.53 | 4:39:00      |     6     0     7   46.2 |
| ENG/BTC  |     18 |           1.36 |       0.00122807 |          12.27 | 2:50:00      |     8     0    10   44.4 |
| EOS/BTC  |     36 |           0.08 |       0.00015304 |           1.53 | 3:34:00      |    16     0    20   44.4 |
| ETC/BTC  |     26 |           0.37 |       0.00047576 |           4.75 | 6:14:00      |    11     0    15   42.3 |
| ETH/BTC  |     33 |           0.30 |       0.00049856 |           4.98 | 7:31:00      |    16     0    17   48.5 |
| IOTA/BTC |     32 |           0.03 |       0.00005444 |           0.54 | 3:12:00      |    14     0    18   43.8 |
| LSK/BTC  |     15 |           1.75 |       0.00131413 |          13.13 | 2:58:00      |     6     0     9   40.0 |
| LTC/BTC  |     32 |          -0.04 |      -0.00006886 |          -0.69 | 4:49:00      |    11     0    21   34.4 |
| NANO/BTC |     17 |           1.26 |       0.00107058 |          10.70 | 1:55:00      |    10     0     7   58.5 |
| NEO/BTC  |     23 |           0.82 |       0.00094936 |           9.48 | 2:59:00      |    10     0    13   43.5 |
| REQ/BTC  |      9 |           1.17 |       0.00052734 |           5.27 | 3:47:00      |     4     0     5   44.4 |
| XLM/BTC  |     16 |           1.22 |       0.00097800 |           9.77 | 3:15:00      |     7     0     9   43.8 |
| XMR/BTC  |     23 |          -0.18 |      -0.00020696 |          -2.07 | 5:30:00      |    12     0    11   52.2 |
| XRP/BTC  |     35 |           0.66 |       0.00114897 |          11.48 | 3:49:00      |    12     0    23   34.3 |
| ZEC/BTC  |     22 |          -0.46 |      -0.00050971 |          -5.09 | 2:22:00      |     7     0    15   31.8 |
| 총계     |    429 |           0.36 |       0.00762792 |          76.20 | 4:12:00      |   186     0   243   43.4 |
============================================= 미결 거래 보고서 =============================================
| 거래쌍     |  거래 수 |   평균 수익 % |   총 수익 BTC |   총 수익 % | 평균 기간   |  승리 무승부 패배 승률 |
|----------+---------+----------------+------------------+----------------+----------------+---------------------|
| ADA/BTC  |       1 |           0.89 |       0.00004434 |           0.44 | 6:00:00        |    1    0    0  100 |
| LTC/BTC  |       1 |           0.68 |       0.00003421 |           0.34 | 2:00:00        |    1    0    0  100 |
| 총계     |       2 |           0.78 |       0.00007855 |           0.78 | 4:00:00        |    2    0    0  100 |
==================== 종료 이유 통계 ====================
| 종료 이유        |   종료 수 |  승리 수 |  무승부 수 |  패배 수 |
|--------------------+---------+-------+--------+---------|
| trailing_stop_loss |     205 |   150 |      0 |      55 |
| stop_loss          |     166 |     0 |      0 |     166 |
| exit_signal        |      56 |    36 |      0 |      20 |
| force_exit         |       2 |     0 |      0 |       2 |

================== 요약 지표 ==================
| 지표                      | 값               |
|-----------------------------+---------------------|
| 백테스팅 시작              | 2019-01-01 00:00:00 |
| 백테스팅 종료              | 2019-05-01 00:00:00 |
| 거래 모드                  | 현물                |
| 최대 오픈 거래 수          | 3                   |
|                             |                     |
| 총 거래 수/일 평균 거래 수 | 429 / 3.575         |
| 시작 잔액                  | 0.01000000 BTC      |
| 최종 잔액                  | 0.01762792 BTC      |
| 절대 수익                  | 0.00762792 BTC      |
| 총 수익 %                  | 76.2%               |
| CAGR %                     | 460.87%             |
| Sortino                    | 1.88                |
| Sharpe                     | 2.97                |
| Calmar                     | 6.29                |
| 수익률                     | 1.11                |
| 기대치 (비율)              | -0.15 (-0.05)       |
| 평균 스테이크 금액         | 0.001      BTC      |
| 총 거래량                  | 0.429      BTC      |
|                             |                     |
| 롱 / 숏                    | 352 / 77            |
| 롱 거래 총 수익 %          | 1250.58%            |
| 숏 거래 총 수익 %          | -15.02%             |
| 롱 거래 절대 수익          | 0.00838792 BTC      |
| 숏 거래 절대 수익          | -0.00076 BTC        |
|                             |                     |
| 최고 거래쌍                | LSK/BTC 26.26%      |
| 최악 거래쌍                | ZEC/BTC -10.18%     |
| 최고 거래                  | LSK/BTC 4.25%       |
| 최악 거래                  | ZEC/BTC -10.25%     |
| 최고 일                    | 0.00076 BTC         |
| 최악 일                    | -0.00036 BTC        |
| 승리/무승부/패배 일        | 12 / 82 / 25        |
| 승리 거래 평균 기간        | 4:23:00             |
| 패배 거래 평균 기간        | 6:55:00             |
| 최대 연속 승리/패배        | 3 / 4               |
| 거부된 진입 신호           | 3089                |
| 진입/종료 시간 초과        | 0 / 0               |
| 취소된 거래 진입           | 34                  |
| 취소된 진입 주문           | 123                 |
| 대체된 진입 주문           | 89                  |
|                             |                     |
| 최소 잔액                  | 0.00945123 BTC      |
| 최대 잔액                  | 0.01846651 BTC      |
| 계정 최대 하락 %           | 25.19%              |
| 절대 하락 (계정)           | 13.33%              |
| 하락                        | 0.0015 BTC          |
| 하락 최고점                | 0.0013 BTC          |
| 하락 최저점                | -0.0002 BTC         |
| 하락 시작                  | 2019-02-15 14:10:00 |
| 하락 종료                  | 2019-04-11 18:15:00 |
| 시장 변화                  | -5.88%              |
=====================================================
</code></pre></div><h3 id="backtesting-report-table"> 백테스팅 보고서 표 <a class="headerlink" href="#backtesting-report-table" title="영구 링크"> ¶ </a></h3><p>첫 번째 표에는 봇이 수행한 모든 거래가 포함되며, &quot;미결 거래&quot;도 포함됩니다.</p><p>마지막 줄은 전략의 전체 성능을 보여줍니다. 여기서는:</p><div class="highlight"><pre><code>| 총계     |    429 |           0.36 |         152.41 |       0.00762792 |          76.20 | 4:12:00      |   186     0   243   43.4 |
</code></pre></div><p> 봇은 <code> 429 </code> 거래를 평균 <code> 4:12:00 </code> 기간 동안 수행했으며, 성능은 <code> 76.20% </code> (수익)입니다. 이는 0.01 BTC의 자본으로 시작하여 총 <code> 0.00762792 BTC </code>를 벌었다는 것을 의미합니다. </p><p><code> 평균 수익 % </code> 열은 수행된 모든 거래의 평균 수익을 보여줍니다. <code> 총 수익 % </code> 열은 시작 잔액에 대한 총 수익 %를 보여줍니다. 위의 결과에서 시작 잔액은 0.01 BTC이고 절대 수익은 0.00762792 BTC이므로 <code> 총 수익 % </code>는 <code> (0.00762792 / 0.01) * 100 ~= 76.2% </code>입니다.</p><p> 전략 성능은 진입 전략, 종료 전략, 그리고 설정한 <code> minimal_roi </code> 및 <code> stop_loss </code>에 의해 영향을 받습니다. </p><p> 예를 들어, <code> minimal_roi </code>가 <code> &quot;0&quot;: 0.01 </code>인 경우, 봇이 1% 이상의 수익을 낼 수 없음을 기대할 수 없습니다 (거래가 1%에 도달할 때마다 종료되기 때문). </p><div class="highlight"><pre><code><span class="nt">&quot;minimal_roi&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nt">&quot;0&quot;</span><span class="p">:</span><span class="w">  </span><span class="mf">0.01</span>
<span class="p">},</span>
</code></pre></div><p> 반면, <code> minimal_roi </code>를 <code> &quot;0&quot;: 0.55 </code> (55%)로 설정하면, 봇이 이 수익에 도달할 가능성은 거의 없습니다. 따라서 성능은 전략, 구성, 설정한 암호화폐 거래쌍의 다양한 요소의 종합적인 조합임을 명심하세요. </p><h3 id="exit-reasons-table"> 종료 이유 표 <a class="headerlink" href="#exit-reasons-table" title="영구 링크"> ¶ </a></h3><p> 두 번째 표는 종료 이유의 요약을 포함합니다. 이 표는 어느 영역이 추가 작업이 필요한지 알려줄 수 있습니다 (예: <code> exit_signal </code> 거래가 모두 또는 대부분 손실인 경우, 종료 신호를 개선하거나 비활성화하는 것을 고려해야 함). </p><h3 id="left-open-trades-table"> 미결 거래 표 <a class="headerlink" href="#left-open-trades-table" title="영구 링크"> ¶ </a></h3><p> 세 번째 표는 백테스팅 기간이 끝날 때 봇이 <code> force_exit </code>해야 했던 모든 거래를 포함하여 전체 그림을 제공합니다. 이는 백테스트 기간이 끝나야 하지만, 현실적으로는 봇을 영원히 실행할 수 있기 때문에 필요합니다. 이러한 거래는 첫 번째 표에도 포함되어 있지만, 명확성을 위해 이 표에 별도로 표시됩니다. </p><h3 id="summary-metrics"> 요약 지표 <a class="headerlink" href="#summary-metrics" title="영구 링크"> ¶ </a></h3><p>백테스트 보고서의 마지막 요소는 요약 지표 표입니다. 이는 백테스팅 데이터에서 전략의 성능에 대한 유용한 주요 지표를 포함합니다.</p><div class="highlight"><pre><code>================== 요약 지표 ==================
| 지표                      | 값               |
|-----------------------------+---------------------|
| 백테스팅 시작              | 2019-01-01 00:00:00 |
| 백테스팅 종료              | 2019-05-01 00:00:00 |
| 거래 모드                  | 현물                |
| 최대 오픈 거래 수          | 3                   |
|                             |                     |
| 총 거래 수/일 평균 거래 수 | 429 / 3.575         |
| 시작 잔액                  | 0.01000000 BTC      |
| 최종 잔액                  | 0.01762792 BTC      |
| 절대 수익                  | 0.00762792 BTC      |
| 총 수익 %                  | 76.2%               |
| CAGR %                     | 460.87%             |
| Sortino                    | 1.88                |
| Sharpe                     | 2.97                |
| Calmar                     | 6.29                |
| 수익률                     | 1.11                |
| 기대치 (비율)              | -0.15 (-0.05)       |
| 평균 스테이크 금액         | 0.001      BTC      |
| 총 거래량                  | 0.429      BTC      |
|                             |                     |
| 롱 / 숏                    | 352 / 77            |
| 롱 거래 총 수익 %          | 1250.58%            |
| 숏 거래 총 수익 %          | -15.02%             |
| 롱 거래 절대 수익          | 0.00838792 BTC      |
| 숏 거래 절대 수익          | -0.00076 BTC        |
|                             |                     |
| 최고 거래쌍                | LSK/BTC 26.26%      |
| 최악 거래쌍                | ZEC/BTC -10.18%     |
| 최고 거래                  | LSK/BTC 4.25%       |
| 최악 거래                  | ZEC/BTC -10.25%     |
| 최고 일                    | 0.00076 BTC         |
| 최악 일                    | -0.00036 BTC        |
| 승리/무승부/패배 일        | 12 / 82 / 25        |
| 승리 거래 평균 기간        | 4:23:00             |
| 패배 거래 평균 기간        | 6:55:00             |
| 최대 연속 승리/패배        | 3 / 4               |
| 거부된 진입 신호           | 3089                |
| 진입/종료 시간 초과        | 0 / 0               |
| 취소된 거래 진입           | 34                  |
| 취소된 진입 주문           | 123                 |
| 대체된 진입 주문           | 89                  |
|                             |                     |
| 최소 잔액                  | 0.00945123 BTC      |
| 최대 잔액                  | 0.01846651 BTC      |
| 계정 최대 하락 %           | 25.19%              |
| 절대 하락 (계정)           | 13.33%              |
| 하락                        | 0.0015 BTC          |
| 하락 최고점                | 0.0013 BTC          |
| 하락 최저점                | -0.0002 BTC         |
| 하락 시작                  | 2019-02-15 14:10:00 |
| 하락 종료                  | 2019-04-11 18:15:00 |
| 시장 변화                  | -5.88%              |
=====================================================
</code></pre></div><ul><li><code> 백테스팅 시작 </code> / <code> 백테스팅 종료 </code>: 백테스팅 범위 (일반적으로 <code> --timerange </code> 옵션으로 정의됨).</li><li><code> 최대 오픈 거래 수 </code>: <code> max_open_trades </code> 설정 (또는 <code> --max-open-trades </code>) - 또는 거래쌍 목록의 거래쌍 수 (둘 중 낮은 값).</li><li><code> 거래 모드 </code>: 현물 또는 선물 거래.</li><li><code> 총 거래 수/일 평균 거래 수 </code>: 백테스트 출력 표의 총 거래 수 / 백테스팅 기간(일)로 나눈 총 거래 수 (전략에서 예상되는 거래 수에 대한 정보를 제공합니다).</li><li><code> 시작 잔액 </code>: dry-run-wallet (구성 또는 명령줄)로 제공된 시작 잔액.</li><li><code> 최종 잔액 </code>: 최종 잔액 - 시작 잔액 + 절대 수익.</li><li><code> 절대 수익 </code>: 스테이크 통화로 벌어들인 수익.</li><li><code> 총 수익 % </code>: 총 수익. 첫 번째 표의 <code> 총계 </code> 행의 <code> 총 수익 % </code>와 일치합니다. <code> (최종 자본 - 시작 자본) / 시작 자본 </code>으로 계산됩니다.</li><li><code> CAGR % </code>: 연평균 성장률.</li><li><code> Sortino </code>: 연간화된 Sortino 비율.</li><li><code> Sharpe </code>: 연간화된 Sharpe 비율.</li><li><code> Calmar </code>: 연간화된 Calmar 비율.</li><li><code> 수익률 </code>: 수익 / 손실.</li><li><code> 평균 스테이크 금액 </code>: 평균 스테이크 금액, 동적 스테이크 금액을 사용할 때의 평균.</li><li><code> 총 거래량 </code>: 위의 수익을 달성하기 위해 거래소에서 생성된 거래량.</li><li><code> 최고 거래쌍 </code> / <code> 최악 거래쌍 </code>: 최고 및 최악의 성과를 보인 거래쌍과 해당 <code> 총 수익 % </code>.</li><li><code> 최고 거래 </code> / <code> 최악 거래 </code>: 가장 큰 단일 승리 거래와 가장 큰 단일 손실 거래.</li><li><code> 최고 일 </code> / <code> 최악 일 </code>: 일일 수익을 기준으로 한 최고 및 최악의 날.</li><li><code> 승리/무승부/패배 일 </code>: 승리 / 패배 일 (무승부는 일반적으로 닫힌 거래가 없는 날).</li><li><code> 승리 거래 평균 기간 </code> / <code> 패배 거래 평균 기간 </code>: 승리 및 패배 거래의 평균 기간.</li><li><code> 최대 연속 승리/패배 </code>: 최대 연속 승리/패배.</li><li><code> 거부된 진입 신호 </code>: <code> max_open_trades </code>에 도달하여 실행할 수 없었던 거래 진입 신호.</li><li><code> 진입/종료 시간 초과 </code>: 채워지지 않은 진입/종료 주문 (사용자 지정 가격을 사용하는 경우에만 해당).</li><li><code> 취소된 거래 진입 </code>: <code> adjust_entry_price </code>를 통해 사용자 요청으로 취소된 거래.</li><li><code> 취소된 진입 주문 </code>: <code> adjust_entry_price </code>를 통해 사용자 요청으로 취소된 진입 주문.</li><li><code> 대체된 진입 주문 </code>: <code> adjust_entry_price </code>를 통해 사용자 요청으로 대체된 진입 주문.</li><li><code> 최소 잔액 </code> / <code> 최대 잔액 </code>: 백테스트 기간 동안의 최저 및 최고 지갑 잔액.</li><li><code> 계정 최대 하락 % </code>: 시뮬레이션 시작 이후 계정이 최고점에서 감소한 최대 비율. <code> (최대 잔액 - 현재 잔액) / (최대 잔액) </code>으로 계산됩니다.</li><li><code> 절대 하락 (계정) </code>: 경험한 최대 계정 하락. <code> (절대 하락) / (하락 최고점 + 시작 잔액) </code>으로 계산됩니다.</li><li><code> 하락 </code>: 경험한 최대 절대 하락. 하락 최고점과 이후 최저점 간의 차이.</li><li><code> 하락 최고점 </code> / <code> 하락 최저점 </code>: 가장 큰 하락 기간의 시작 및 종료 시점의 수익. 음수 값은 초기 자본 손실을 의미합니다.</li><li><code> 하락 시작 </code> / <code> 하락 종료 </code>: 이 가장 큰 하락의 시작 및 종료 날짜 시간 ( <code> plot-dataframe </code> 하위 명령어를 통해 시각화할 수도 있음).</li><li><code> 시장 변화 </code>: 백테스트 기간 동안의 시장 변화. 첫 번째 캔들에서 마지막 캔들까지 모든 거래쌍의 평균 변화를 &quot;종가&quot; 열을 사용하여 계산합니다.</li><li><code> 롱 / 숏 </code>: 롱/숏 값 분할 (숏 거래가 발생한 경우에만 표시됨).</li><li><code> 롱 거래 총 수익 % </code> / <code> 롱 거래 절대 수익 </code>: 롱 거래의 수익 (숏 거래가 발생한 경우에만 표시됨).</li><li><code> 숏 거래 총 수익 % </code> / <code> 숏 거래 절대 수익 </code>: 숏 거래의 수익 (숏 거래가 발생한 경우에만 표시됨).</li></ul><h3 id="daily-weekly-monthly-breakdown"> 일별 / 주별 / 월별 분석 <a class="headerlink" href="#daily-weekly-monthly-breakdown" title="영구 링크"> ¶ </a></h3><p><code> --breakdown &lt;&gt; </code> 스위치를 사용하여 일별 / 주별 또는 월별 결과를 개요로 볼 수 있습니다.</p><p>일별 및 주별 분석을 시각화하려면 다음을 사용할 수 있습니다:</p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>backtesting<span class="w"> </span>--strategy<span class="w"> </span>MyAwesomeStrategy<span class="w"> </span>--breakdown<span class="w"> </span>day<span class="w"> </span>week
</code></pre></div><div class="highlight"><pre><code><span class="go">======================== 일별 분석 =========================</span>
<span class="go">|        일 |   총 수익 USDT |   승리 수 |   무승부 수 |   패배 수 |</span>
<span class="go">|------------+-------------------+--------+---------+----------|</span>
<span class="go">| 03/07/2021 |           200.0   |      2 |       0 |        0 |</span>
<span class="go">| 04/07/2021 |           -50.31  |      0 |       0 |        2 |</span>
<span class="go">| 05/07/2021 |           220.611 |      3 |       2 |        0 |</span>
<span class="go">| 06/07/2021 |           150.974 |      3 |       0 |        2 |</span>
<span class="go">| 07/07/2021 |           -70.193 |      1 |       0 |        2 |</span>
<span class="go">| 08/07/2021 |           212.413 |      2 |       0 |        3 |</span>
</code></pre></div><p>출력은 주어진 기간 동안 실현된 절대 수익(스테이크 통화로)을 포함하는 표와 해당 기간에 실현된 승리, 무승부 및 패배를 보여줍니다. 그 아래에는 닫힌 일요일의 날짜로 표시된 주별 요약 값에 대한 두 번째 표가 있습니다. 월별 분석의 경우 마지막 날로 표시됩니다.</p><h3 id="backtest-result-caching"> 백테스트 결과 캐싱 <a class="headerlink" href="#backtest-result-caching" title="영구 링크"> ¶ </a></h3><p> 시간을 절약하기 위해, 기본적으로 백테스트는 이전 백테스트와 전략 및 구성이 일치하는 경우 마지막 하루 이내의 캐시된 결과를 재사용합니다. 동일한 실행에 대한 기존 결과에도 불구하고 새 백테스트를 강제로 실행하려면 <code> --cache none </code> 매개변수를 지정하세요. </p><div class="admonition warning"><p class="admonition-title">경고</p><p> 캐싱은 freqtrade가 기본 데이터가 변경되지 않았음을 신뢰할 수 없기 때문에 열린 타임레인지( <code> --timerange 20210101- </code>)에 대해 자동으로 비활성화됩니다. 또한, 원래 백테스트가 끝에 누락된 데이터가 있는 경우 캐시된 결과를 사용할 수 있습니다. 이 경우, 새 백테스트를 강제로 실행하려면 <code> --cache none </code>을 한 번 사용하세요. </p></div><h3 id="further-backtest-result-analysis"> 추가 백테스트 결과 분석 <a class="headerlink" href="#further-backtest-result-analysis" title="영구 링크"> ¶ </a></h3>`,46)),t("p",null,[e[38]||(e[38]=s(" 백테스트 결과를 추가로 분석하려면, freqtrade는 기본적으로 거래를 파일로 내보냅니다. 그런 다음 거래를 로드하여 ")),a(n,{to:"strategy-analysis-example"},{default:d(()=>e[37]||(e[37]=[s(" 데이터 분석 ")])),_:1}),e[39]||(e[39]=s(" 백테스팅 섹션에 표시된 대로 추가 분석을 수행할 수 있습니다. "))]),e[54]||(e[54]=l('<h2 id="assumptions-made-by-backtesting"> 백테스팅에서의 가정 <a class="headerlink" href="#assumptions-made-by-backtesting" title="영구 링크"> ¶ </a></h2><p>백테스팅은 캔들 내에서 발생하는 일에 대한 자세한 정보가 부족하기 때문에 몇 가지 가정을 해야 합니다:</p><ul><li> 거래소 <a href="#trading-limits-in-backtesting"> 거래 한도 </a>가 준수됩니다. </li><li>진입은 사용자 지정 가격 논리가 지정되지 않은 한 오픈 가격에서 발생합니다.</li><li>모든 주문은 요청된 가격에 채워집니다 (슬리피지 없음). 가격이 캔들의 고가/저가 범위 내에 있는 한.</li><li>종료 신호 종료는 연속 캔들의 오픈 가격에서 발생합니다.</li><li>종료는 새로운 거래를 위한 거래 슬롯을 해제합니다.</li><li>종료 신호는 손절매보다 우선합니다. 종료 신호는 캔들의 오픈에서 트리거된다고 가정합니다.</li><li> ROI <ul><li>종료는 고가와 비교되지만 ROI 값이 사용됩니다 (예: ROI = 2%, 고가=5% - 따라서 종료는 2%에서 발생).</li><li>종료는 결코 &quot;캔들 아래&quot;에 있지 않으므로 2%의 ROI는 저가가 2.4% 수익인 경우 2.4%에서 종료될 수 있습니다.</li><li> 트리거 캔들에서 발효된 ROI 항목 (예: <code> 120: 0.02 </code> 1시간 캔들, <code> 60: 0.05 </code>에서)은 캔들의 오픈을 종료 비율로 사용합니다. </li><li><code> &lt;N&gt;=-1 </code> ROI 항목으로 인한 강제 종료는 저가를 종료 값으로 사용합니다. N이 캔들 오픈에 해당하지 않는 한 (예: <code> 120: -1 </code> 1시간 캔들).</li></ul></li><li> 손절매 종료는 손절매 가격에서 정확히 발생합니다. 저가가 더 낮더라도 손절매 가격보다 <code> 2 * 수수료 </code>만큼 손실이 더 큽니다. </li><li> 손절매는 하나의 캔들 내에서 ROI보다 먼저 평가됩니다. 따라서 동일한 전략을 사용한 Dry Run/Live Trade 모드의 결과와 비교할 때 <code> stoploss </code> 종료 이유가 있는 거래가 더 많을 수 있습니다. </li><li>저가는 고가보다 먼저 발생하여 자본을 보호합니다.</li><li> 트레일링 손절매 <ul><li>트레일링 손절매는 캔들의 저가 아래에 있는 경우에만 조정됩니다 (그렇지 않으면 트리거됨).</li><li> 거래 진입 캔들에서 트리거된 트레일링 손절매는 &quot;최소 오프셋&quot; ( <code> stop_positive_offset </code>)이 가정되며 (고가 대신) 손절매는 이 지점에서 계산됩니다. 사용자 지정 손절매 시나리오에는 적용되지 않습니다. 손절매 논리에 대한 정보가 없기 때문입니다. </li><li>고가는 먼저 발생하여 손절매를 조정합니다.</li><li>저가는 조정된 손절매를 사용합니다 (따라서 고가-저가 차이가 큰 종료는 올바르게 백테스트됨).</li><li>ROI는 트레일링 손절매보다 먼저 적용되어 ROI와 트레일링 손절매가 모두 적용되는 경우 수익이 &quot;상한&quot;됩니다.</li></ul></li><li>종료 이유는 거래가 긍정적이었는지 부정적이었는지 설명하지 않으며, 단지 종료를 트리거한 이유를 설명합니다 (음수 ROI 값을 사용하는 경우 이상하게 보일 수 있음).</li><li> 여러 신호가 동일한 캔들에서 발생하는 경우 평가 순서 <ul><li>종료 신호</li><li>손절매</li><li>ROI</li><li>트레일링 손절매</li></ul></li><li>포지션 반전 (선물 전용)은 기존 거래가 종료되는 캔들에서 반대 방향의 진입 신호가 트리거되는 경우 발생합니다.</li></ul><p> 이러한 가정을 통해 백테스팅은 실제 거래를 최대한 가깝게 모방하려고 합니다. 그러나 백테스팅은 <strong> 절대 </strong> 드라이런 모드에서 전략을 실행하는 것을 대체할 수 없습니다. 또한 과거 결과가 미래의 성공을 보장하지 않는다는 점을 명심하세요. </p>',4)),t("p",null,[e[41]||(e[41]=s(" 위의 가정 외에도 전략 작성자는 ")),a(n,{to:"strategy-customization"},{default:d(()=>e[40]||(e[40]=[s(" 일반적인 실수 ")])),_:1}),e[42]||(e[42]=s(" 섹션을 주의 깊게 읽어야 하며, 실제 시장 조건에서 사용할 수 없는 데이터를 백테스팅에서 사용하는 것을 피해야 합니다. "))]),e[55]||(e[55]=l(`<h3 id="trading-limits-in-backtesting"> 백테스팅에서의 거래 한도 <a class="headerlink" href="#trading-limits-in-backtesting" title="영구 링크"> ¶ </a></h3><p>거래소에는 최소 (및 최대) 기본 통화 또는 최소/최대 스테이크 (견적) 통화와 같은 특정 거래 한도가 있습니다. 이러한 한도는 일반적으로 거래소 문서에 &quot;거래 규칙&quot; 또는 유사한 이름으로 나열되며, 거래쌍마다 다를 수 있습니다.</p><p>백테스팅 (및 라이브 및 드라이런)은 이러한 한도를 준수하며, 손절매가 이 값보다 낮게 설정될 수 있도록 보장합니다. 따라서 값은 거래소가 지정한 값보다 약간 높습니다. 그러나 freqtrade는 과거 한도에 대한 정보가 없습니다.</p><p>이로 인해 거래 한도가 과거 가격을 사용하여 부풀려져 최소 금액이 50$ 이상이 되는 상황이 발생할 수 있습니다.</p><p>예를 들어:</p><p> BTC 최소 거래 가능 금액은 0.001입니다. BTC는 오늘 22,000$에 거래됩니다 (0.001 BTC는 이에 해당). 그러나 백테스팅 기간에는 50,000$까지의 가격이 포함됩니다. 오늘의 최소 금액은 <code> 0.001 * 22,000 </code> 또는 22$입니다. <br> 그러나 과거 설정에서는 <code> 0.001 * 50,000 </code>에 기반하여 50$일 수도 있습니다. </p><h4 id="trading-precision-limits"> 거래 정밀도 한도 <a class="headerlink" href="#trading-precision-limits" title="영구 링크"> ¶ </a></h4><p> 대부분의 거래소는 가격과 금액에 대한 정밀도 한도를 부과하므로 1.0020401의 거래쌍을 구매하거나 1.24567123123의 가격으로 구매할 수 없습니다. <br> 대신 이러한 가격과 금액은 정의된 거래 정밀도에 따라 반올림되거나 잘립니다. 위의 값은 예를 들어 1.002의 금액과 1.24567의 가격으로 반올림될 수 있습니다. </p><p> 이러한 정밀도 값은 현재 거래소 한도에 기반합니다 (위의 <a href="#trading-limits-in-backtesting"> 섹션 </a>에 설명됨). 과거 정밀도 한도는 사용할 수 없습니다. </p><h2 id="improved-backtest-accuracy"> 향상된 백테스트 정확도 <a class="headerlink" href="#improved-backtest-accuracy" title="영구 링크"> ¶ </a></h2><p>백테스팅의 큰 제한 사항 중 하나는 캔들 내에서 가격이 어떻게 움직였는지 알 수 없다는 것입니다 (고가가 종가 이전에 있었는지, 반대인지?). 따라서 1시간 시간 프레임으로 백테스팅을 실행한다고 가정하면, 해당 캔들에는 4개의 가격이 있습니다 (오픈, 고가, 저가, 종가).</p><p>백테스팅은 이에 대해 몇 가지 가정을 하지만 (위 참조), 이는 결코 완벽할 수 없으며, 어느 한쪽으로 편향될 것입니다. 이를 완화하기 위해 freqtrade는 더 낮은 (더 빠른) 시간 프레임을 사용하여 캔들 내 움직임을 시뮬레이션할 수 있습니다.</p><p> 이를 활용하려면 일반 백테스팅 명령어에 <code> --timeframe-detail 5m </code>을 추가할 수 있습니다. </p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>backtesting<span class="w"> </span>--strategy<span class="w"> </span>AwesomeStrategy<span class="w"> </span>--timeframe<span class="w"> </span>1h<span class="w"> </span>--timeframe-detail<span class="w"> </span>5m
</code></pre></div><p>이렇게 하면 선택한 타임레인지에 대해 1시간 데이터(주요 시간 프레임)와 5분 데이터(세부 시간 프레임)를 로드합니다. 전략은 1시간 시간 프레임으로 분석됩니다. 활동이 발생할 수 있는 캔들(활성 신호가 있는 경우, 거래가 진행 중인 경우)은 5분 시간 프레임에서 평가됩니다. 이를 통해 캔들 내 움직임을 더 정확하게 시뮬레이션할 수 있으며, 특히 더 높은 시간 프레임에서 다른 결과를 초래할 수 있습니다.</p><p>진입은 일반적으로 주요 캔들의 오픈에서 발생하지만, 종료 신호가 5분 캔들에서 트리거되면 거래 슬롯이 더 일찍 해제될 수 있으며, 이는 다른 거래쌍의 새로운 거래에 사용될 수 있습니다.</p><p> 모든 콜백 함수 ( <code> custom_exit() </code>, <code> custom_stoploss() </code>, ...)는 거래가 열리면 각 5분 캔들에 대해 한 번 실행됩니다 (위의 1시간 시간 프레임 및 5분 세부 시간 프레임 예제에서 12번). </p><p><code> --timeframe-detail </code>은 원래 시간 프레임보다 작아야 하며, 그렇지 않으면 백테스팅이 시작되지 않습니다.</p><p>물론 더 많은 메모리가 필요하며 (5분 데이터는 1시간 데이터보다 큼), 실행 시간에도 영향을 미칩니다 (거래 수 및 거래 기간에 따라 다름). 또한 데이터가 이미 사용 가능하거나 다운로드되어 있어야 합니다.</p><div class="admonition tip"><p class="admonition-title">팁</p><p> 이 기능을 전략 개발의 마지막 부분으로 사용하여 전략이 <a href="#assumptions-made-by-backtesting"> 백테스팅 가정 </a> 중 하나를 악용하지 않는지 확인할 수 있습니다. 이 모드에서 유사하게 잘 수행되는 전략은 드라이/라이브 모드에서도 잘 수행될 가능성이 높습니다 (그러나 실제로 전략을 확인할 수 있는 것은 포워드 테스트 (드라이 모드)뿐입니다). </p></div><details class="sample"><summary>극단적인 차이 예제</summary><p><code> --timeframe-detail </code>을 극단적인 예제에서 사용하면 (아래 모든 거래쌍은 10:00 캔들에서 진입 신호가 있음) 1 max_open_trades로 다음과 같은 백테스팅 거래 순서가 발생할 수 있습니다:</p><table><thead><tr><th>거래쌍</th><th>진입 시간</th><th>종료 시간</th><th>기간</th></tr></thead><tbody><tr><td>BTC/USDT</td><td>2024-01-01 10:00:00</td><td>2021-01-01 10:05:00</td><td>5m</td></tr><tr><td>ETH/USDT</td><td>2024-01-01 10:05:00</td><td>2021-01-01 10:15:00</td><td>10m</td></tr><tr><td>XRP/USDT</td><td>2024-01-01 10:15:00</td><td>2021-01-01 10:30:00</td><td>15m</td></tr><tr><td>SOL/USDT</td><td>2024-01-01 10:15:00</td><td>2021-01-01 11:05:00</td><td>50m</td></tr><tr><td>BTC/USDT</td><td>2024-01-01 11:05:00</td><td>2021-01-01 12:00:00</td><td>55m</td></tr></tbody></table><p>타임프레임 세부 정보 없이, 이는 다음과 같이 보일 것입니다:</p><table><thead><tr><th>거래쌍</th><th>진입 시간</th><th>종료 시간</th><th>기간</th></tr></thead><tbody><tr><td>BTC/USDT</td><td>2024-01-01 10:00:00</td><td>2021-01-01 11:00:00</td><td>1h</td></tr><tr><td>BTC/USDT</td><td>2024-01-01 11:00:00</td><td>2021-01-01 12:00:00</td><td>1h</td></tr></tbody></table><p> 차이는 상당합니다. 타임프레임 세부 정보 없이, 각 캔들당 첫 번째 <code> max_open_trades </code> 신호만 평가되며, 거래 슬롯은 캔들 끝에서만 해제되어 다음 캔들에서 새로운 거래를 열 수 있습니다. </p></details><h2 id="backtesting-multiple-strategies"> 여러 전략 백테스팅 <a class="headerlink" href="#backtesting-multiple-strategies" title="영구 링크"> ¶ </a></h2><p>여러 전략을 비교하려면 백테스팅에 전략 목록을 제공할 수 있습니다.</p><p>이는 실행당 1개의 시간 프레임 값으로 제한됩니다. 그러나 데이터는 디스크에서 한 번만 로드되므로 여러 전략을 비교하려는 경우 실행 시간을 크게 단축할 수 있습니다.</p><p> 모든 나열된 전략은 동일한 디렉토리에 있어야 하며, <code> --recursive-strategy-search </code>도 지정된 경우 전략 디렉토리 내의 하위 디렉토리도 고려됩니다. </p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>backtesting<span class="w"> </span>--timerange<span class="w"> </span><span class="m">20180401</span>-20180410<span class="w"> </span>--timeframe<span class="w"> </span>5m<span class="w"> </span>--strategy-list<span class="w"> </span>Strategy001<span class="w"> </span>Strategy002<span class="w"> </span>--export<span class="w"> </span>trades
</code></pre></div><p> 이는 결과를 <code> user_data/backtest_results/backtest-result-&lt;datetime&gt;.json </code>에 저장하며, <code> Strategy001 </code>과 <code> Strategy002 </code>의 결과를 포함합니다. 다른 전략의 승리/패배를 비교하는 추가 표가 있으며 (첫 번째 표의 &quot;총계&quot; 행과 동일), 각 전략에 대한 자세한 출력이 순차적으로 제공되므로 각 전략의 세부 정보를 확인하려면 스크롤해야 합니다. </p><div class="highlight"><pre><code>================================================== 전략 요약 ===================================================================
| 전략        |  거래 수 |   평균 수익 % |   총 수익 BTC |   총 수익 % | 평균 기간   |  승리 수 |  무승부 수 | 패배 수 | 하락 % |
|-------------+---------+----------------+------------------+----------------+----------------+-------+--------+--------+------------|
| Strategy1   |     429 |           0.36 |       0.00762792 |          76.20 | 4:12:00        |   186 |      0 |    243 |       45.2 |
| Strategy2   |    1487 |          -0.13 |      -0.00988917 |         -98.79 | 4:43:00        |   662 |      0 |    825 |     241.68 |
</code></pre></div><h2 id="next-step"> 다음 단계 <a class="headerlink" href="#next-step" title="영구 링크"> ¶ </a></h2>`,29)),t("p",null,[e[44]||(e[44]=s(" 훌륭합니다. 전략이 수익성이 있습니다. 봇이 전략에 사용할 최적의 매개변수를 제공할 수 있다면 어떨까요? 다음 단계는 ")),a(n,{to:"hyperopt"},{default:d(()=>e[43]||(e[43]=[s(" 하이퍼옵트로 최적의 매개변수를 찾는 방법 ")])),_:1}),e[45]||(e[45]=s("을 배우는 것입니다. "))])])}}};export{f as default};
