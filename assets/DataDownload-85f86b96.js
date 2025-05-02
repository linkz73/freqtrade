import{r,o as i,c as p,a as o,b as e,d as s,e as t,w as d}from"./index-a1bb88b6.js";const c={class:"md-content__inner md-typeset"},l={class:"admonition note"},g={__name:"DataDownload",setup(h){return(f,a)=>{const n=r("router-link");return i(),p("article",c,[a[7]||(a[7]=o(`<h1 id="data-downloading"> 데이터 다운로드 가이드 <a class="headerlink" href="#data-downloading" title="영구 링크"> ¶ </a></h1><h2 id="getting-data-for-backtesting-and-hyperopt"> 백테스팅과 하이퍼옵트를 위한 데이터 수집 <a class="headerlink" href="#getting-data-for-backtesting-and-hyperopt" title="영구 링크"> ¶ </a></h2><p> 백테스팅 및 하이퍼옵트에 필요한 데이터(캔들 / OHLCV)를 다운로드하려면 <code> freqtrade download-data </code> 명령어를 사용하세요. </p><p> 추가 매개변수를 지정하지 않으면, freqtrade는 기본적으로 <code> &quot;1m&quot; </code> 및 <code> &quot;5m&quot; </code> 타임프레임의 최근 30일 데이터를 다운로드합니다. 거래소 및 거래쌍은 <code> config.json </code> 파일에서 가져옵니다(만약 <code> -c/--config </code> 옵션으로 지정된 경우). 설정 파일이 제공되지 않으면 <code> --exchange </code> 옵션이 필수입니다. </p><p> 상대적 시간 범위( <code> --days 20 </code> ) 또는 절대적 시작점( <code> --timerange 20200101- </code> )을 사용할 수 있습니다. 증분 다운로드의 경우 상대적 접근 방식을 사용하는 것이 좋습니다. </p><div class="admonition tip"><p class="admonition-title">팁: 기존 데이터 업데이트</p><p> 이미 데이터 디렉토리에 백테스팅 데이터가 있는 경우, freqtrade는 자동으로 누락된 시간 범위를 계산하여 최신 데이터까지 다운로드합니다. 이 경우 <code> --days </code> 또는 <code> --timerange </code> 매개변수가 필요하지 않습니다. freqtrade는 기존 데이터를 유지하고 누락된 데이터만 다운로드합니다. <br> 새로운 거래쌍을 추가한 후 기존 데이터를 업데이트하려면 <code> --new-pairs-days xx </code> 매개변수를 사용하세요. 지정된 일수만큼 새로운 거래쌍의 데이터를 다운로드하며, 기존 거래쌍은 누락된 데이터만 업데이트됩니다. </p></div><h3 id="usage"> 명령어 사용법 <a class="headerlink" href="#usage" title="영구 링크"> ¶ </a></h3><div class="highlight"><pre><code>사용법: freqtrade download-data [-h] [-v] [--no-color] [--logfile FILE] [-V]
                               [-c PATH] [-d PATH] [--userdir PATH]
                               [-p PAIRS [PAIRS ...]] [--pairs-file FILE]
                               [--days INT] [--new-pairs-days INT]
                               [--include-inactive-pairs]
                               [--timerange TIMERANGE] [--dl-trades]
                               [--convert] [--exchange EXCHANGE]
                               [-t TIMEFRAMES [TIMEFRAMES ...]] [--erase]
                               [--data-format-ohlcv {json,jsongz,feather,parquet}]
                               [--data-format-trades {json,jsongz,feather,parquet}]
                               [--trading-mode {spot,margin,futures}]
                               [--prepend]

options:
  -h, --help            show this help message and exit
  -p PAIRS [PAIRS ...], --pairs PAIRS [PAIRS ...]
                        Limit command to these pairs. Pairs are space-
                        separated.
  --pairs-file FILE     File containing a list of pairs. Takes precedence over
                        --pairs or pairs configured in the configuration.
  --days INT            Download data for given number of days.
  --new-pairs-days INT  Download data of new pairs for given number of days.
                        Default: \`None\`.
  --include-inactive-pairs
                        Also download data from inactive pairs.
  --timerange TIMERANGE
                        Specify what timerange of data to use.
  --dl-trades           Download trades instead of OHLCV data.
  --convert             Convert downloaded trades to OHLCV data. Only
                        applicable in combination with \`--dl-trades\`. Will be
                        automatic for exchanges which don&#39;t have historic
                        OHLCV (e.g. Kraken). If not provided, use \`trades-to-
                        ohlcv\` to convert trades data to OHLCV data.
  --exchange EXCHANGE   Exchange name. Only valid if no config is provided.
  -t TIMEFRAMES [TIMEFRAMES ...], --timeframes TIMEFRAMES [TIMEFRAMES ...]
                        Specify which tickers to download. Space-separated
                        list. Default: \`1m 5m\`.
  --erase               Clean all existing data for the selected
                        exchange/pairs/timeframes.
  --data-format-ohlcv {json,jsongz,feather,parquet}
                        Storage format for downloaded candle (OHLCV) data.
                        (default: \`feather\`).
  --data-format-trades {json,jsongz,feather,parquet}
                        Storage format for downloaded trades data. (default:
                        \`feather\`).
  --trading-mode {spot,margin,futures}, --tradingmode {spot,margin,futures}
                        Select Trading mode
  --prepend             Allow data prepending. (Data-appending is disabled)

Common arguments:
  -v, --verbose         Verbose mode (-vv for more, -vvv to get all messages).
  --no-color            Disable colorization of hyperopt results. May be
                        useful if you are redirecting output to a file.
  --logfile FILE, --log-file FILE
                        Log to the file specified. Special values are:
                        &#39;syslog&#39;, &#39;journald&#39;. See the documentation for more
                        details.
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
</code></pre></div><div class="admonition tip"><p class="admonition-title">특정 거래 쌍의 전체 데이터 다운로드</p><p> 종종 특정 화폐쌍의 모든 데이터를 다운로드하고 싶을 때가 있습니다. 이 경우 다음과 같은 간단한 방법을 사용할 수 있습니다: <code> freqtrade download-data --exchange binance --pairs &quot;.*/USDT&quot; &lt;...&gt; </code> . 제공된 &quot;pairs&quot; 문자열은 거래소의 모든 활성 쌍을 포함하도록 확장됩니다. 비활성(상장 폐지된) 쌍의 데이터도 다운로드하려면 <code> --include-inactive-pairs </code> 를 명령어에 추가하세요. </p></div><div class="admonition note"><p class="admonition-title">데이터 수집 기간</p><p><code> download-data </code> 는 전략과 무관한 명령어입니다. 한 번에 많은 데이터를 다운로드한 후, 점진적으로 저장된 데이터의 양을 늘리는 것이 목표입니다. </p><p> 따라서, <code> download-data </code> 는 전략에서 정의된 &quot;시작 기간&quot;을 신경 쓰지 않습니다. 백테스트가 특정 시점에서 시작되도록 추가 일수를 다운로드하는 것은 사용자에게 달려 있습니다(시작 기간을 준수하면서). </p></div><h3 id="start-download"> 데이터 다운로드 시작하기 <a class="headerlink" href="#start-download" title="영구 링크"> ¶ </a></h3><p> 아주 간단한 명령어(사용 가능한 <code> config.json </code> 파일이 있다고 가정)를 다음과 같이 사용할 수 있습니다. </p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>download-data<span class="w"> </span>--exchange<span class="w"> </span>binance
</code></pre></div><p>이 명령어는 구성 파일에 정의된 모든 화폐쌍의 역사적 캔들(OHLCV) 데이터를 다운로드합니다.</p><p>또는, 화폐쌍을 직접 지정할 수도 있습니다.</p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>download-data<span class="w"> </span>--exchange<span class="w"> </span>binance<span class="w"> </span>--pairs<span class="w"> </span>ETH/USDT<span class="w"> </span>XRP/USDT<span class="w"> </span>BTC/USDT
</code></pre></div><p>또는 정규식을 사용하여(이 경우 모든 활성 USDT 쌍을 다운로드합니다)</p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>download-data<span class="w"> </span>--exchange<span class="w"> </span>binance<span class="w"> </span>--pairs<span class="w"> </span><span class="s2">&quot;.*/USDT&quot;</span>
</code></pre></div><h3 id="other-notes"> 추가 참고사항 <a class="headerlink" href="#other-notes" title="영구 링크"> ¶ </a></h3><ul><li> 거래소별 기본값이 아닌 다른 디렉토리를 사용하려면 <code> --datadir user_data/data/some_directory </code> 를 사용하세요. </li><li> 역사적 데이터를 다운로드할 때 사용하는 거래소를 변경하려면 <code> --exchange &lt;exchange&gt; </code> 를 사용하거나 다른 구성 파일을 지정하세요. </li><li> 다른 디렉토리의 <code> pairs.json </code> 파일을 사용하려면 <code> --pairs-file some_other_dir/pairs.json </code> 를 사용하세요. </li><li> 역사적 캔들(OHLCV) 데이터를 10일 동안만 다운로드하려면 <code> --days 10 </code> 를 사용하세요(기본값은 30일). </li><li> 고정된 시작점에서 역사적 캔들(OHLCV) 데이터를 다운로드하려면 <code> --timerange 20200101- </code> 를 사용하세요. 이는 2020년 1월 1일부터 모든 데이터를 다운로드합니다. </li><li>데이터가 이미 있는 경우 주어진 시작점은 무시되며, 누락된 데이터만 오늘까지 다운로드됩니다.</li><li><code> --timeframes </code> 를 사용하여 역사적 캔들(OHLCV) 데이터를 다운로드할 타임프레임을 지정하세요. 기본값은 <code> --timeframes 1m 5m </code> 이며, 이는 1분 및 5분 데이터를 다운로드합니다. </li><li> 구성 파일에 정의된 거래소, 타임프레임 및 화폐쌍 목록을 사용하려면 <code> -c/--config </code> 옵션을 사용하세요. 이 옵션을 사용하면 스크립트는 구성 파일에 정의된 화이트리스트를 사용하여 데이터를 다운로드할 화폐쌍 목록을 사용하며, pairs.json 파일이 필요하지 않습니다. 대부분의 다른 옵션과 <code> -c/--config </code> 를 결합할 수 있습니다. </li></ul><details class="note"><summary>권한 거부 오류</summary><p> 구성 디렉토리 <code> user_data </code> 가 도커에 의해 생성된 경우 다음과 같은 오류가 발생할 수 있습니다: </p><div class="highlight"><pre><code>cp: cannot create regular file &#39;user_data/data/binance/pairs.json&#39;: Permission denied
</code></pre></div><p>다음 명령어를 사용하여 사용자 데이터 디렉토리의 권한을 수정할 수 있습니다:</p><div class="highlight"><pre><code>sudo chown -R $UID:$GID user_data
</code></pre></div></details><h3 id="download-additional-data-before-the-current-timerange"> 기존 데이터 이전 기간의 데이터 추가 다운로드 <a class="headerlink" href="#download-additional-data-before-the-current-timerange" title="영구 링크"> ¶ </a></h3><p> 2022년의 모든 데이터를 다운로드한 경우( <code> --timerange 20220101- </code> ) - 이제 이전 데이터로도 백테스트를 수행하고 싶다면 <code> --prepend </code> 플래그와 <code> --timerange </code> 를 결합하여 종료 날짜를 지정하세요. </p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>download-data<span class="w"> </span>--exchange<span class="w"> </span>binance<span class="w"> </span>--pairs<span class="w"> </span>ETH/USDT<span class="w"> </span>XRP/USDT<span class="w"> </span>BTC/USDT<span class="w"> </span>--prepend<span class="w"> </span>--timerange<span class="w"> </span><span class="m">20210101</span>-20220101
</code></pre></div><div class="admonition note"><p class="admonition-title">참고</p><p>이 모드에서는 데이터가 있는 경우 종료 날짜를 무시하고, 종료 날짜를 기존 데이터 시작점으로 업데이트합니다.</p></div><h3 id="data-format"> 데이터 형식 <a class="headerlink" href="#data-format" title="영구 링크"> ¶ </a></h3><p>Freqtrade는 현재 다음 데이터 형식을 지원합니다:</p><ul><li><code> feather </code> - Apache Arrow 기반 데이터 형식 </li><li><code> json </code> - 일반 &quot;텍스트&quot; json 파일 </li><li><code> jsongz </code> - gzip으로 압축된 json 파일 </li><li><code> parquet </code> - 컬럼형 데이터 저장소(OHLCV 전용) </li></ul><p> 기본적으로 OHLCV 데이터와 거래 데이터는 <code> feather </code> 형식으로 저장됩니다. </p><p> 이 설정은 <code> --data-format-ohlcv </code> 및 <code> --data-format-trades </code> 명령줄 인수를 통해 변경할 수 있습니다. 이 변경 사항을 지속하려면 다음 스니펫을 구성 파일에 추가하여 매번 위의 인수를 삽입할 필요가 없도록 해야 합니다: </p><div class="highlight"><pre><code>    // ...
    &quot;dataformat_ohlcv&quot;: &quot;feather&quot;,
    &quot;dataformat_trades&quot;: &quot;feather&quot;,
    // ...
</code></pre></div><p> 다운로드 중 기본 데이터 형식이 변경된 경우, 구성 파일의 <code> dataformat_ohlcv </code> 및 <code> dataformat_trades </code> 키도 선택한 데이터 형식에 맞게 조정해야 합니다. </p><div class="admonition note"><p class="admonition-title">참고</p><p><a href="#sub-command-convert-data"> convert-data </a> 및 <a href="#sub-command-convert-trade-data"> convert-trade-data </a> 메서드를 사용하여 데이터 형식을 변환할 수 있습니다. </p></div><h4 id="dataformat-comparison"> 데이터 형식 비교 <a class="headerlink" href="#dataformat-comparison" title="영구 링크"> ¶ </a></h4><p> 다음 비교는 다음 데이터와 리눅스 <code> time </code> 명령어를 사용하여 수행되었습니다. </p><div class="highlight"><pre><code>Found 6 pair / timeframe combinations.
+----------+-------------+--------+---------------------+---------------------+
|     Pair |   Timeframe |   Type |                From |                  To |
|----------+-------------+--------+---------------------+---------------------|
| BTC/USDT |          5m |   spot | 2017-08-17 04:00:00 | 2022-09-13 19:25:00 |
| ETH/USDT |          1m |   spot | 2017-08-17 04:00:00 | 2022-09-13 19:26:00 |
| BTC/USDT |          1m |   spot | 2017-08-17 04:00:00 | 2022-09-13 19:30:00 |
| XRP/USDT |          5m |   spot | 2018-05-04 08:10:00 | 2022-09-13 19:15:00 |
| XRP/USDT |          1m |   spot | 2018-05-04 08:11:00 | 2022-09-13 19:22:00 |
| ETH/USDT |          5m |   spot | 2017-08-17 04:00:00 | 2022-09-13 19:20:00 |
+----------+-------------+--------+---------------------+---------------------+
</code></pre></div><p>다음 명령어를 사용하여 데이터를 메모리에 읽어들이는 방식으로 타이밍을 측정했습니다.</p><div class="highlight"><pre><code><span class="nb">time</span><span class="w"> </span>freqtrade<span class="w"> </span>list-data<span class="w"> </span>--show-timerange<span class="w"> </span>--data-format-ohlcv<span class="w"> </span>&lt;dataformat&gt;
</code></pre></div><table><thead><tr><th>형식</th><th>크기</th><th>시간</th></tr></thead><tbody><tr><td><code> feather </code></td><td>72Mb</td><td>3.5s</td></tr><tr><td><code> json </code></td><td>149Mb</td><td>25.6s</td></tr><tr><td><code> jsongz </code></td><td>39Mb</td><td>27s</td></tr><tr><td><code> parquet </code></td><td>83Mb</td><td>3.8s</td></tr></tbody></table><p>크기는 위에 지정된 시간 범위에 대해 BTC/USDT 1m spot 조합에서 측정되었습니다.</p><p>최상의 성능/크기 조합을 위해 기본 feather 형식 또는 parquet를 사용하는 것이 좋습니다.</p><h3 id="pairs-file"> 화폐쌍 파일 <a class="headerlink" href="#pairs-file" title="영구 링크"> ¶ </a></h3><p><code> config.json </code> 의 화이트리스트 대신, <code> pairs.json </code> 파일을 사용할 수 있습니다. 예를 들어 Binance를 사용하는 경우: </p><ul><li><code> user_data/data/binance </code> 디렉토리를 만들고 해당 디렉토리에 <code> pairs.json </code> 파일을 복사하거나 생성합니다. </li><li> 관심 있는 화폐쌍을 포함하도록 <code> pairs.json </code> 파일을 업데이트합니다. </li></ul><div class="highlight"><pre><code>mkdir<span class="w"> </span>-p<span class="w"> </span>user_data/data/binance
touch<span class="w"> </span>user_data/data/binance/pairs.json
</code></pre></div><p><code> pairs.json </code> 파일의 형식은 간단한 json 목록입니다. 이 파일은 다운로드에만 사용되므로 다른 스테이크 화폐를 혼합하여 사용할 수 있습니다. </p><div class="highlight"><pre><code><span class="p">[</span>
<span class="w">    </span><span class="s2">&quot;ETH/BTC&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="s2">&quot;ETH/USDT&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="s2">&quot;BTC/USDT&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="s2">&quot;XRP/ETH&quot;</span>
<span class="p">]</span>
</code></pre></div><div class="admonition note"><p class="admonition-title">참고</p><p><code> pairs.json </code> 파일은 구성 파일이 로드되지 않은 경우에만 사용됩니다(암시적으로 이름 지정 또는 <code> --config </code> 플래그를 통해). 이 파일을 강제로 사용하려면 <code> --pairs-file pairs.json </code> 를 사용하세요. 그러나 구성 파일 내의 화폐쌍 목록을 사용하는 것이 좋습니다. 이는 <code> exchange.pair_whitelist </code> 또는 구성 파일의 <code> pairs </code> 설정을 통해 가능합니다. </p></div><h2 id="sub-command-convert-data"> 하위 명령어 데이터 변환 <a class="headerlink" href="#sub-command-convert-data" title="영구 링크"> ¶ </a></h2><div class="highlight"><pre><code>사용법: freqtrade convert-data [-h] [-v] [--no-color] [--logfile FILE] [-V]
                              [-c PATH] [-d PATH] [--userdir PATH]
                              [-p PAIRS [PAIRS ...]] --format-from
                              {json,jsongz,feather,parquet} --format-to
                              {json,jsongz,feather,parquet} [--erase]
                              [--exchange EXCHANGE]
                              [-t TIMEFRAMES [TIMEFRAMES ...]]
                              [--trading-mode {spot,margin,futures}]
                              [--candle-types {spot,futures,mark,index,premiumIndex,funding_rate} [{spot,futures,mark,index,premiumIndex,funding_rate} ...]]

options:
  -h, --help            show this help message and exit
  -p PAIRS [PAIRS ...], --pairs PAIRS [PAIRS ...]
                        Limit command to these pairs. Pairs are space-
                        separated.
  --format-from {json,jsongz,feather,parquet}
                        Source format for data conversion.
  --format-to {json,jsongz,feather,parquet}
                        Destination format for data conversion.
  --erase               Clean all existing data for the selected
                        exchange/pairs/timeframes.
  --exchange EXCHANGE   Exchange name. Only valid if no config is provided.
  -t TIMEFRAMES [TIMEFRAMES ...], --timeframes TIMEFRAMES [TIMEFRAMES ...]
                        Specify which tickers to download. Space-separated
                        list. Default: \`1m 5m\`.
  --trading-mode {spot,margin,futures}, --tradingmode {spot,margin,futures}
                        Select Trading mode
  --candle-types {spot,futures,mark,index,premiumIndex,funding_rate} [{spot,futures,mark,index,premiumIndex,funding_rate} ...]
                        Select candle type to convert. Defaults to all
                        available types.

Common arguments:
  -v, --verbose         Verbose mode (-vv for more, -vvv to get all messages).
  --no-color            Disable colorization of hyperopt results. May be
                        useful if you are redirecting output to a file.
  --logfile FILE, --log-file FILE
                        Log to the file specified. Special values are:
                        &#39;syslog&#39;, &#39;journald&#39;. See the documentation for more
                        details.
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
</code></pre></div><h3 id="example-converting-data"> 데이터 변환 예제 <a class="headerlink" href="#example-converting-data" title="영구 링크"> ¶ </a></h3><p> 다음 명령어는 <code> ~/.freqtrade/data/binance </code> 에 있는 모든 캔들(OHLCV) 데이터를 json에서 jsongz로 변환하여 디스크 공간을 절약합니다. 또한 원본 json 데이터 파일을 제거합니다( <code> --erase </code> 매개변수). </p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>convert-data<span class="w"> </span>--format-from<span class="w"> </span>json<span class="w"> </span>--format-to<span class="w"> </span>jsongz<span class="w"> </span>--datadir<span class="w"> </span>~/.freqtrade/data/binance<span class="w"> </span>-t<span class="w"> </span>5m<span class="w"> </span>15m<span class="w"> </span>--erase
</code></pre></div><h2 id="sub-command-convert-trade-data"> 하위 명령어 거래 데이터 변환 <a class="headerlink" href="#sub-command-convert-trade-data" title="영구 링크"> ¶ </a></h2><div class="highlight"><pre><code>사용법: freqtrade convert-trade-data [-h] [-v] [--no-color] [--logfile FILE]
                                    [-V] [-c PATH] [-d PATH] [--userdir PATH]
                                    [-p PAIRS [PAIRS ...]] --format-from
                                    {json,jsongz,feather,parquet,kraken_csv}
                                    --format-to {json,jsongz,feather,parquet}
                                    [--erase] [--exchange EXCHANGE]

options:
  -h, --help            show this help message and exit
  -p PAIRS [PAIRS ...], --pairs PAIRS [PAIRS ...]
                        Limit command to these pairs. Pairs are space-
                        separated.
  --format-from {json,jsongz,feather,parquet,kraken_csv}
                        Source format for data conversion.
  --format-to {json,jsongz,feather,parquet}
                        Destination format for data conversion.
  --erase               Clean all existing data for the selected
                        exchange/pairs/timeframes.
  --exchange EXCHANGE   Exchange name. Only valid if no config is provided.

Common arguments:
  -v, --verbose         Verbose mode (-vv for more, -vvv to get all messages).
  --no-color            Disable colorization of hyperopt results. May be
                        useful if you are redirecting output to a file.
  --logfile FILE, --log-file FILE
                        Log to the file specified. Special values are:
                        &#39;syslog&#39;, &#39;journald&#39;. See the documentation for more
                        details.
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
</code></pre></div><h3 id="example-converting-trades"> 거래 데이터 변환 예제 <a class="headerlink" href="#example-converting-trades" title="영구 링크"> ¶ </a></h3><p> 다음 명령어는 <code> ~/.freqtrade/data/kraken </code> 에 있는 모든 거래 데이터를 jsongz에서 json으로 변환합니다. 또한 원본 jsongz 데이터 파일을 제거합니다( <code> --erase </code> 매개변수). </p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>convert-trade-data<span class="w"> </span>--format-from<span class="w"> </span>jsongz<span class="w"> </span>--format-to<span class="w"> </span>json<span class="w"> </span>--datadir<span class="w"> </span>~/.freqtrade/data/kraken<span class="w"> </span>--erase
</code></pre></div><h2 id="sub-command-trades-to-ohlcv"> 하위 명령어 거래 데이터를 OHLCV로 변환 <a class="headerlink" href="#sub-command-trades-to-ohlcv" title="영구 링크"> ¶ </a></h2><p><code> --dl-trades </code> (kraken 전용)을 사용하여 데이터를 다운로드해야 할 때, 거래 데이터를 OHLCV 데이터로 변환하는 것이 마지막 단계입니다. 이 명령어를 사용하면 데이터를 다시 다운로드하지 않고 추가 타임프레임에 대해 이 마지막 단계를 반복할 수 있습니다. </p><div class="highlight"><pre><code>사용법: freqtrade trades-to-ohlcv [-h] [-v] [--no-color] [--logfile FILE] [-V]
                                 [-c PATH] [-d PATH] [--userdir PATH]
                                 [-p PAIRS [PAIRS ...]]
                                 [-t TIMEFRAMES [TIMEFRAMES ...]]
                                 [--exchange EXCHANGE]
                                 [--data-format-ohlcv {json,jsongz,feather,parquet}]
                                 [--data-format-trades {json,jsongz,feather,parquet}]
                                 [--trading-mode {spot,margin,futures}]

options:
  -h, --help            show this help message and exit
  -p PAIRS [PAIRS ...], --pairs PAIRS [PAIRS ...]
                        Limit command to these pairs. Pairs are space-
                        separated.
  -t TIMEFRAMES [TIMEFRAMES ...], --timeframes TIMEFRAMES [TIMEFRAMES ...]
                        Specify which tickers to download. Space-separated
                        list. Default: \`1m 5m\`.
  --exchange EXCHANGE   Exchange name. Only valid if no config is provided.
  --data-format-ohlcv {json,jsongz,feather,parquet}
                        Storage format for downloaded candle (OHLCV) data.
                        (default: \`feather\`).
  --data-format-trades {json,jsongz,feather,parquet}
                        Storage format for downloaded trades data. (default:
                        \`feather\`).
  --trading-mode {spot,margin,futures}, --tradingmode {spot,margin,futures}
                        Select Trading mode

Common arguments:
  -v, --verbose         Verbose mode (-vv for more, -vvv to get all messages).
  --no-color            Disable colorization of hyperopt results. May be
                        useful if you are redirecting output to a file.
  --logfile FILE, --log-file FILE
                        Log to the file specified. Special values are:
                        &#39;syslog&#39;, &#39;journald&#39;. See the documentation for more
                        details.
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
</code></pre></div><h3 id="example-trade-to-ohlcv-conversion"> 거래 데이터를 OHLCV로 변환하는 예제 <a class="headerlink" href="#example-trade-to-ohlcv-conversion" title="영구 링크"> ¶ </a></h3><div class="highlight"><pre><code>freqtrade<span class="w"> </span>trades-to-ohlcv<span class="w"> </span>--exchange<span class="w"> </span>kraken<span class="w"> </span>-t<span class="w"> </span>5m<span class="w"> </span>1h<span class="w"> </span>1d<span class="w"> </span>--pairs<span class="w"> </span>BTC/EUR<span class="w"> </span>ETH/EUR
</code></pre></div><h2 id="sub-command-list-data"> 하위 명령어 데이터 목록 <a class="headerlink" href="#sub-command-list-data" title="영구 링크"> ¶ </a></h2><p><code> list-data </code> 하위 명령어를 사용하여 다운로드된 데이터 목록을 확인할 수 있습니다. </p><div class="highlight"><pre><code>사용법: freqtrade list-data [-h] [-v] [--no-color] [--logfile FILE] [-V]
                           [-c PATH] [-d PATH] [--userdir PATH]
                           [--exchange EXCHANGE]
                           [--data-format-ohlcv {json,jsongz,feather,parquet}]
                           [--data-format-trades {json,jsongz,feather,parquet}]
                           [--trades] [-p PAIRS [PAIRS ...]]
                           [--trading-mode {spot,margin,futures}]
                           [--show-timerange]

options:
  -h, --help            show this help message and exit
  --exchange EXCHANGE   Exchange name. Only valid if no config is provided.
  --data-format-ohlcv {json,jsongz,feather,parquet}
                        Storage format for downloaded candle (OHLCV) data.
                        (default: \`feather\`).
  --data-format-trades {json,jsongz,feather,parquet}
                        Storage format for downloaded trades data. (default:
                        \`feather\`).
  --trades              Work on trades data instead of OHLCV data.
  -p PAIRS [PAIRS ...], --pairs PAIRS [PAIRS ...]
                        Limit command to these pairs. Pairs are space-
                        separated.
  --trading-mode {spot,margin,futures}, --tradingmode {spot,margin,futures}
                        Select Trading mode
  --show-timerange      Show timerange available for available data. (May take
                        a while to calculate).

Common arguments:
  -v, --verbose         Verbose mode (-vv for more, -vvv to get all messages).
  --no-color            Disable colorization of hyperopt results. May be
                        useful if you are redirecting output to a file.
  --logfile FILE, --log-file FILE
                        Log to the file specified. Special values are:
                        &#39;syslog&#39;, &#39;journald&#39;. See the documentation for more
                        details.
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
</code></pre></div><h3 id="example-list-data"> 데이터 목록 예제 <a class="headerlink" href="#example-list-data" title="영구 링크"> ¶ </a></h3><div class="highlight"><pre><code>&gt;<span class="w"> </span>freqtrade<span class="w"> </span>list-data<span class="w"> </span>--userdir<span class="w"> </span>~/.freqtrade/user_data/

<span class="w">              </span>Found<span class="w"> </span><span class="m">33</span><span class="w"> </span>pair<span class="w"> </span>/<span class="w"> </span>timeframe<span class="w"> </span>combinations.
┏━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━┓
┃<span class="w">          </span>Pair<span class="w"> </span>┃<span class="w">                                 </span>Timeframe<span class="w"> </span>┃<span class="w"> </span>Type<span class="w"> </span>┃
┡━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━┩
│<span class="w">       </span>ADA/BTC<span class="w"> </span>│<span class="w">     </span>5m,<span class="w"> </span>15m,<span class="w"> </span>30m,<span class="w"> </span>1h,<span class="w"> </span>2h,<span class="w"> </span>4h,<span class="w"> </span>6h,<span class="w"> </span>12h,<span class="w"> </span>1d<span class="w"> </span>│<span class="w"> </span>spot<span class="w"> </span>│
│<span class="w">       </span>ADA/ETH<span class="w"> </span>│<span class="w">     </span>5m,<span class="w"> </span>15m,<span class="w"> </span>30m,<span class="w"> </span>1h,<span class="w"> </span>2h,<span class="w"> </span>4h,<span class="w"> </span>6h,<span class="w"> </span>12h,<span class="w"> </span>1d<span class="w"> </span>│<span class="w"> </span>spot<span class="w"> </span>│
│<span class="w">       </span>ETH/BTC<span class="w"> </span>│<span class="w">     </span>5m,<span class="w"> </span>15m,<span class="w"> </span>30m,<span class="w"> </span>1h,<span class="w"> </span>2h,<span class="w"> </span>4h,<span class="w"> </span>6h,<span class="w"> </span>12h,<span class="w"> </span>1d<span class="w"> </span>│<span class="w"> </span>spot<span class="w"> </span>│
│<span class="w">      </span>ETH/USDT<span class="w"> </span>│<span class="w">                  </span>5m,<span class="w"> </span>15m,<span class="w"> </span>30m,<span class="w"> </span>1h,<span class="w"> </span>2h,<span class="w"> </span>4h<span class="w"> </span>│<span class="w"> </span>spot<span class="w"> </span>│
└───────────────┴───────────────────────────────────────────┴──────┘
</code></pre></div><p>모든 거래 데이터와 시작/종료 시간 범위를 포함하여 표시합니다.</p><div class="highlight"><pre><code>&gt;<span class="w"> </span>freqtrade<span class="w"> </span>list-data<span class="w"> </span>--show<span class="w"> </span>--trades
<span class="w">                     </span>Found<span class="w"> </span>trades<span class="w"> </span>data<span class="w"> </span><span class="k">for</span><span class="w"> </span><span class="m">1</span><span class="w"> </span>pair.<span class="w">                     </span>
┏━━━━━━━━━┳━━━━━━┳━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━┓
┃<span class="w">    </span>Pair<span class="w"> </span>┃<span class="w"> </span>Type<span class="w"> </span>┃<span class="w">                </span>From<span class="w"> </span>┃<span class="w">                  </span>To<span class="w"> </span>┃<span class="w"> </span>Trades<span class="w"> </span>┃
┡━━━━━━━━━╇━━━━━━╇━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━┩
│<span class="w"> </span>XRP/ETH<span class="w"> </span>│<span class="w"> </span>spot<span class="w"> </span>│<span class="w"> </span><span class="m">2019</span>-10-11<span class="w"> </span><span class="m">00</span>:00:11<span class="w"> </span>│<span class="w"> </span><span class="m">2019</span>-10-13<span class="w"> </span><span class="m">11</span>:19:28<span class="w"> </span>│<span class="w">  </span><span class="m">12477</span><span class="w"> </span>│
└─────────┴──────┴─────────────────────┴─────────────────────┴────────┘
</code></pre></div><h2 id="trades-tick-data"> 거래(틱) 데이터 <a class="headerlink" href="#trades-tick-data" title="영구 링크"> ¶ </a></h2><p> 기본적으로, <code> download-data </code> 하위 명령어는 캔들(OHLCV) 데이터를 다운로드합니다. 대부분의 거래소는 API를 통해 역사적 거래 데이터를 제공합니다. 이 데이터는 여러 타임프레임이 필요한 경우 유용할 수 있습니다. 한 번만 다운로드하고 원하는 타임프레임으로 로컬에서 다시 샘플링할 수 있기 때문입니다. </p><p> 이 데이터는 기본적으로 크기가 크므로 파일은 기본적으로 feather 파일 형식을 사용합니다. 데이터 디렉토리에 <code> &lt;pair&gt;-trades.feather </code> ( <code> ETH_BTC-trades.feather </code> )라는 이름으로 저장됩니다. 역사적 OHLCV 데이터와 마찬가지로 증분 모드도 지원되므로 <code> --days 8 </code> 을 사용하여 데이터를 주기적으로 다운로드하면 증분 데이터 저장소가 생성됩니다. </p><p> 이 모드를 사용하려면 <code> --dl-trades </code> 를 호출에 추가하세요. 이렇게 하면 다운로드 방법이 거래 다운로드로 전환됩니다. <code> --convert </code> 도 제공된 경우, 다시 샘플링 단계가 자동으로 수행되며, 주어진 화폐쌍/타임프레임 조합에 대해 기존 OHLCV 데이터를 덮어씁니다. </p><div class="admonition warning"><p class="admonition-title">사용하지 마세요</p><p> Kraken 사용자가 아닌 경우 이 방법을 사용하지 마세요(Kraken은 역사적 OHLCV 데이터를 제공하지 않습니다). <br> 대부분의 다른 거래소는 충분한 역사를 가진 OHLCV 데이터를 제공하므로 이 방법을 사용하여 여러 타임프레임을 다운로드하는 것이 훨씬 빠릅니다. </p></div>`,75)),e("div",l,[a[3]||(a[3]=e("p",{class:"admonition-title"},"Kraken 사용자",-1)),e("p",null,[a[1]||(a[1]=s(" Kraken 사용자는 데이터를 다운로드하기 전에 ")),t(n,{to:"exchanges"},{default:d(()=>a[0]||(a[0]=[s(" 이 문서 ")])),_:1}),a[2]||(a[2]=s(" 를 읽어야 합니다. "))])]),a[8]||(a[8]=o(`<p>예제 호출:</p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>download-data<span class="w"> </span>--exchange<span class="w"> </span>kraken<span class="w"> </span>--pairs<span class="w"> </span>XRP/EUR<span class="w"> </span>ETH/EUR<span class="w"> </span>--days<span class="w"> </span><span class="m">20</span><span class="w"> </span>--dl-trades
</code></pre></div><div class="admonition note"><p class="admonition-title">참고</p><p>이 방법은 비동기 호출을 사용하지만, 이전 호출의 결과가 다음 요청을 생성하는 데 필요하므로 느릴 것입니다.</p></div><h2 id="next-step"> 다음 단계 <a class="headerlink" href="#next-step" title="영구 링크"> ¶ </a></h2>`,4)),e("p",null,[a[5]||(a[5]=s(" 좋습니다. 이제 데이터를 다운로드했으므로 ")),t(n,{to:"backtesting"},{default:d(()=>a[4]||(a[4]=[s(" 백테스팅 ")])),_:1}),a[6]||(a[6]=s(" 을 시작할 수 있습니다. "))])])}}};export{g as default};
