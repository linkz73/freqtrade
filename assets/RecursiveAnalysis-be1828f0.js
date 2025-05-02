import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c,a,b as o,d as t,e as r,w as s}from"./index-a1bb88b6.js";const u={},p={class:"md-content__inner md-typeset"};function f(h,e){const n=d("router-link");return l(),c("article",p,[e[7]||(e[7]=a('<h1 id="recursive-analysis"> 재귀 분석 <a class="headerlink" href="#recursive-analysis" title="영구 링크"> ¶ </a></h1><p>이 페이지는 특정 지표의 재귀(Recursive) 문제로 인해 전략의 부정확성을 검증하는 방법을 설명합니다.</p><p> 재귀 공식은 시퀀스의 모든 항을 이전 항과 관련하여 정의합니다. 예를 들어, 재귀 공식은 다음과 같습니다: <sub> n </sub> = a <sub> n-1 </sub> + b </p><p>이것이 Freqtrade에 왜 중요한가요? 백테스팅에서는 봇이 지정된 시간 범위에 따라 거래 쌍의 전체 데이터를 가져옵니다. 하지만 시뮬레이션/실시간 실행에서는 각 거래소가 제공하는 데이터 양에 제한이 있습니다.</p><p> 예를 들어, <code> steps </code> 라는 기본 지표를 계산한다고 가정해보겠습니다. 첫 번째 행의 값은 항상 0입니다. 이후 행의 값은 이전 행의 값에 1을 더한 값과 같습니다. 최신 1000개의 캔들스틱으로 계산하면 첫 번째 행의 <code> steps </code> 값은 0이고, 마지막 닫힌 캔들스틱의 <code> steps </code> 값은 999입니다. </p><p> 만약 최신 500개의 캔들스틱만 사용하여 계산한다면, 마지막 닫힌 캔들스틱의 <code> steps </code> 값은 999 대신 499가 됩니다. 이 값의 차이는 백테스팅 결과와 시뮬레이션/실시간 실행 결과가 다를 수 있음을 의미합니다. </p>',6)),o("p",null,[e[1]||(e[1]=o("code",null," recursive-analysis ",-1)),e[2]||(e[2]=t(" 명령은 히스토릭 데이터가 필요합니다. 관심 있는 거래 쌍과 거래소의 데이터를 얻는 방법은 문서의 ")),r(n,{to:"data-download"},{default:s(()=>e[0]||(e[0]=[t(" 데이터 다운로드 ")])),_:1}),e[3]||(e[3]=t(" 섹션을 참조하세요. "))]),e[8]||(e[8]=a("<p> 이 명령은 다양한 데이터 길이를 준비하고 이를 기반으로 지표를 계산합니다. 이는 전략 자체를 백테스트하지 않고, 지표만 계산합니다. 다양한 시작 캔들스틱 값( <code> startup_candle_count </code> )의 지표를 계산한 후, 모든 지정된 <code> startup_candle_count </code> 의 마지막 행 값을 비교하여 기본 계산과 비교했을 때 얼마나 차이가 나는지 확인합니다. </p><p>명령 설정:</p><ul><li><code> -p </code> 옵션을 사용하여 분석할 거래 쌍을 설정합니다. 지표 값만 확인하므로 여러 거래 쌍을 사용하는 것은 중복됩니다. 결과가 부정확해질 수 있는 반올림 문제를 피하기 위해 상대적으로 높은 가격과 적어도 중간 정도의 변동성을 가진 거래 쌍(BTC 또는 ETH)을 사용하는 것이 좋습니다. 명령에 거래 쌍이 설정되지 않은 경우, 이 분석에 사용되는 거래 쌍은 화이트리스트의 첫 번째 거래 쌍입니다. </li><li>벤치마크로 사용할 초기 지표 계산에 재귀 문제가 거의 없거나 전혀 없도록 긴 시간 범위(최소 5000개의 캔들스틱)를 설정하는 것이 좋습니다. 예를 들어, 5분 시간 프레임의 경우 5000개의 캔들스틱 시간 범위는 18일에 해당합니다.</li><li><code> --cache </code> 는 이전 지표 계산을 자동으로 로드하지 않도록 &quot;none&quot;으로 강제 설정됩니다. </li></ul>",3)),o("p",null,[e[5]||(e[5]=t(" 재귀 공식 확인 외에도 이 명령은 지표 값에 대한 간단한 선행 바이어스 확인을 수행합니다. 전체 선행 확인을 위해서는 ")),r(n,{to:"lookahead-analysis"},{default:s(()=>e[4]||(e[4]=[t(" Lookahead-analysis ")])),_:1}),e[6]||(e[6]=t(" 를 사용하세요. "))]),e[9]||(e[9]=a(`<h2 id="recursive-analysis-command-reference"> 재귀 분석 명령 참조 <a class="headerlink" href="#recursive-analysis-command-reference" title="영구 링크"> ¶ </a></h2><div class="highlight"><pre><code>사용법: freqtrade recursive-analysis [-h] [-v] [--no-color] [--logfile FILE]
                                    [-V] [-c PATH] [-d PATH] [--userdir PATH]
                                    [-s NAME] [--strategy-path PATH]
                                    [--recursive-strategy-search]
                                    [--freqaimodel NAME]
                                    [--freqaimodel-path PATH] [-i TIMEFRAME]
                                    [--timerange TIMERANGE]
                                    [--data-format-ohlcv {json,jsongz,feather,parquet}]
                                    [-p PAIRS [PAIRS ...]]
                                    [--startup-candle STARTUP_CANDLE [STARTUP_CANDLE ...]]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  -i TIMEFRAME, --timeframe TIMEFRAME
                        타임프레임 지정 (\`1m\`, \`5m\`, \`30m\`, \`1h\`, \`1d\`).
  --timerange TIMERANGE
                        사용할 데이터의 타임레인지 지정.
  --data-format-ohlcv {json,jsongz,feather,parquet}
                        다운로드한 캔들(OHLCV) 데이터의 저장 형식.
                        (기본값: \`feather\`).
  -p PAIRS [PAIRS ...], --pairs PAIRS [PAIRS ...]
                        이 거래쌍으로 명령을 제한합니다. 거래쌍은 공백으로 구분됩니다.
  --startup-candle STARTUP_CANDLE [STARTUP_CANDLE ...]
                        확인할 시작 캔들스틱 지정 (\`199\`, \`499\`, \`999\`, \`1999\`).

공통 인수:
  -v, --verbose         자세한 모드 (-vv로 더 많은 정보, -vvv로 모든 메시지 표시).
  --no-color            하이퍼옵트 결과의 색상화를 비활성화합니다. 출력을 파일로 리디렉션하는 경우 유용할 수 있습니다.
  --logfile FILE, --log-file FILE
                        지정된 파일에 로그를 기록합니다. 특별한 값은 &#39;syslog&#39;, &#39;journald&#39;입니다. 자세한 내용은 문서를 참조하세요.
  -V, --version         show program&#39;s version number and exit
  -c PATH, --config PATH
                        Specify configuration file (default:
                        \`userdir/config.json\` or \`config.json\` whichever
                        exists). Multiple --config options may be used. Can be
                        set to \`-\` to read config from stdin.
  -d PATH, --datadir PATH, --data-dir PATH
                        Path to directory with historical backtesting data.
  --userdir PATH, --user-data-dir PATH
                        Path to userdata directory.

Strategy arguments:
  -s NAME, --strategy NAME
                        Specify strategy class name which will be used by the
                        bot.
  --strategy-path PATH  Specify additional strategy lookup path.
  --recursive-strategy-search
                        Recursively search for a strategy in the strategies
                        folder.
  --freqaimodel NAME    Specify a custom freqaimodels.
  --freqaimodel-path PATH
                        Specify additional lookup path for freqaimodels.
</code></pre></div><h3 id="why-are-odd-numbered-default-startup-candles-used"> 기본 시작 캔들스틱이 홀수인 이유는 무엇인가요? <a class="headerlink" href="#why-are-odd-numbered-default-startup-candles-used" title="영구 링크"> ¶ </a></h3><p>기본 시작 캔들스틱 값은 홀수입니다. 봇이 거래소의 API에서 캔들스틱 데이터를 가져올 때, 마지막 캔들스틱은 봇이 확인하는 캔들스틱이며 나머지 데이터는 &quot;시작 캔들스틱&quot;입니다.</p><p>예를 들어, 바이낸스는 API 호출당 1000개의 캔들스틱을 허용합니다. 봇이 1000개의 캔들스틱을 받으면 마지막 캔들스틱은 &quot;현재 캔들스틱&quot;이고, 이전 999개의 캔들스틱은 &quot;시작 캔들스틱&quot;입니다. 시작 캔들스틱 수를 999 대신 1000으로 설정하면 봇은 1001개의 캔들스틱을 가져오려고 합니다. 거래소 API는 페이지 매김(Pagination) 형식으로 캔들스틱 데이터를 전송합니다. 즉, 바이낸스 API의 경우 길이가 1000인 그룹과 길이가 1인 그룹 두 개로 나뉩니다. 이로 인해 봇은 전략이 1001개의 캔들스틱 데이터를 필요로 한다고 생각하게 되며, 따라서 2000개의 캔들스틱 데이터를 다운로드합니다. 이 경우 1개의 &quot;현재 캔들스틱&quot;과 1999개의 &quot;시작 캔들스틱&quot;이 있습니다.</p><p> 또한, 거래소는 연속적인 대량 API 호출 수를 제한합니다. 예를 들어, 바이낸스는 5번의 호출을 허용합니다. 이 경우, 바이낸스 API에서 5000개의 캔들스틱만 다운로드할 수 있으며, 최대 <code> startup_candle_count </code> 는 4999입니다. </p><p>이 캔들스틱 제한은 거래소에 의해 사전 통지 없이 변경될 수 있습니다.</p><h3 id="how-does-the-command-work"> 명령은 어떻게 작동하나요? <a class="headerlink" href="#how-does-the-command-work" title="영구 링크"> ¶ </a></h3><ul><li>먼저 제공된 시간 범위를 사용하여 초기 지표 계산을 수행하여 지표 값의 벤치마크를 생성합니다.</li><li>벤치마크를 설정한 후, 각 다른 시작 캔들스틱 수 값에 대해 추가 실행을 수행합니다.</li><li>명령은 마지막 캔들스틱 행의 지표 값을 비교하고 차이를 표로 보고합니다.</li></ul><h2 id="understanding-the-recursive-analysis-output"> 재귀 분석 출력 이해하기 <a class="headerlink" href="#understanding-the-recursive-analysis-output" title="영구 링크"> ¶ </a></h2><p>다음은 적어도 하나의 지표에 재귀 공식 문제가 있는 출력 결과 표의 예입니다:</p><div class="highlight"><pre><code>| indicators   | 20      | 40      | 80     | 100    | 150     | 300     | 999    |
|--------------+---------+---------+--------+--------+---------+---------+--------|
| rsi_30       | nan%    | -6.025% | 0.612% | 0.828% | -0.140% | 0.000%  | 0.000% |
| rsi_14       | 24.141% | -0.876% | 0.070% | 0.007% | -0.000% | -0.000% | -      |
</code></pre></div><p> 열 헤더는 분석에 사용된 다른 <code> startup_candle_count </code> 를 나타냅니다. 표의 값은 벤치마크 값과 비교한 계산된 지표의 차이를 나타냅니다. </p><p><code> nan% </code> 는 데이터 부족으로 인해 해당 지표 값을 계산할 수 없음을 의미합니다. 이 예에서는 21개의 캔들스틱(1개의 현재 캔들스틱 + 20개의 시작 캔들스틱)만으로는 길이가 30인 RSI를 계산할 수 없습니다. </p><p> 사용자는 표를 지표별로 평가하여 지정된 <code> startup_candle_count </code> 가 지표가 진입 및/또는 종료에 영향을 미치지 않을 만큼 충분히 작은 차이를 나타내는지 결정해야 합니다. </p><p> 따라서 절대적인 0% 차이(표시된 <code> - </code> 값)를 목표로 하는 것이 최선의 선택이 아닐 수 있습니다. 일부 지표는 0% 차이를 가지기 위해 매우 긴 <code> startup_candle_count </code> 를 사용해야 할 수 있습니다. </p><h2 id="caveats"> 주의사항 <a class="headerlink" href="#caveats" title="영구 링크"> ¶ </a></h2><ul><li><code> recursive-analysis </code> 는 마지막 행의 지표 값만 계산하고 비교합니다. 출력 표는 다른 시작 캔들스틱 수 계산과 원래 벤치마크 계산 간의 백분율 차이를 보고합니다. 진입 및 종료에 실제로 영향을 미치는지 여부는 포함되지 않습니다. </li><li>이상적인 시나리오는 시작 캔들스틱이 다양해도 지표에 차이가 없거나(또는 적어도 0%에 매우 가까운) 것입니다. 실제로 EMA와 같은 지표는 지표 값을 계산하기 위해 재귀 공식을 사용하므로 목표는 반드시 0% 차이를 가지는 것이 아니라, 재귀가 거래 결정에 실제로 영향을 미치지 않을 만큼 충분히 낮은 차이를 가지는 것입니다.</li><li><code> recursive-analysis </code> 는 <code> populate_indicators </code> 및 <code> @informative </code> 데코레이터에서만 계산을 실행합니다. <code> populate_entry_trend </code> 또는 <code> populate_exit_trend </code> 에 지표 계산을 넣으면 계산되지 않습니다. </li></ul>`,18))])}const y=i(u,[["render",f]]);export{y as default};
