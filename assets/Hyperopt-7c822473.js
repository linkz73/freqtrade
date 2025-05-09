import{r as t,o,c as i,b as n,d as a,e as l,w as e,a as c}from"./index-105dd89e.js";const r={class:"md-content__inner md-typeset"},d={class:"admonition note"},m={class:"admonition note"},u={class:"admonition note"},g={__name:"Hyperopt",setup(f){return(h,s)=>{const p=t("router-link");return o(),i("article",r,[s[51]||(s[51]=n("h1",{id:"hyperopt"},[a(" 하이퍼옵팅(Hyperopt) "),n("a",{class:"headerlink",href:"#hyperopt",title:"영구 링크"}," ¶ ")],-1)),s[52]||(s[52]=n("p",null,[a(" 이 페이지는 하이퍼파라미터 최적화(Hyperparameter Optimization)라고 불리는 과정을 통해 전략을 조정하고 최적의 매개변수를 찾는 방법을 설명합니다. 봇은 "),n("code",null," scikit-optimize "),a(" 패키지에 포함된 알고리즘을 사용하여 이를 수행합니다. 검색 과정은 CPU 코어를 모두 소모하며, 노트북이 전투기처럼 소음을 내게 만들고 여전히 시간이 오래 걸릴 수 있습니다. ")],-1)),n("p",null,[s[1]||(s[1]=a(" 하이퍼옵팅(Hyperopt)은 백테스팅과 마찬가지로 과거 데이터가 필요합니다(하이퍼옵팅은 다양한 매개변수로 백테스팅을 여러 번 실행합니다). 관심 있는 거래쌍과 거래소의 데이터를 얻는 방법을 배우려면 문서의 ")),l(p,{to:"data-download"},{default:e(()=>s[0]||(s[0]=[a(" 데이터 다운로드 ")])),_:1}),s[2]||(s[2]=a(" 섹션으로 이동하세요. "))]),s[53]||(s[53]=c(`<div class="admonition bug"><p class="admonition-title">버그</p><p> 하이퍼옵팅(Hyperopt)은 <a href="https://github.com/freqtrade/freqtrade/issues/1133"> Issue #1133 </a> 에서 발견된 바와 같이 단일 CPU 코어로 실행할 경우 충돌할 수 있습니다. </p></div><div class="admonition note"><p class="admonition-title">참고</p><p>2021.4 릴리스 이후로 별도의 하이퍼옵트 클래스를 작성할 필요가 없으며, 전략에서 매개변수를 직접 구성할 수 있습니다. 기존 방식은 2021.8까지 지원되었으며 2021.9에서 제거되었습니다.</p></div><h2 id="install-hyperopt-dependencies"> 하이퍼옵팅(Hyperopt) 의존성 설치 <a class="headerlink" href="#install-hyperopt-dependencies" title="영구 링크"> ¶ </a></h2><p>하이퍼옵팅(Hyperopt) 의존성은 봇 자체를 실행하는 데 필요하지 않으며, 무겁고, 일부 플랫폼(예: Raspberry Pi)에서는 쉽게 빌드할 수 없기 때문에 기본적으로 설치되지 않습니다. 하이퍼옵팅을 실행하기 전에 아래 섹션에 설명된 대로 해당 의존성을 설치해야 합니다.</p><div class="admonition note"><p class="admonition-title">참고</p><p>하이퍼옵트는 리소스를 많이 사용하는 프로세스이므로 Raspberry Pi에서 실행하는 것은 권장되지 않으며 지원되지 않습니다.</p></div><h3 id="docker"> Docker <a class="headerlink" href="#docker" title="영구 링크"> ¶ </a></h3><p>Docker 이미지에는 하이퍼옵트 의존성이 포함되어 있으므로 추가 작업이 필요하지 않습니다.</p><h3 id="easy-installation-script-setupsh-manual-installation"> 간단한 설치 스크립트(setup.sh) / 수동 설치 <a class="headerlink" href="#easy-installation-script-setupsh-manual-installation" title="영구 링크"> ¶ </a></h3><div class="highlight"><pre><code><span class="nb">source</span><span class="w"> </span>.venv/bin/activate
pip<span class="w"> </span>install<span class="w"> </span>-r<span class="w"> </span>requirements-hyperopt.txt
</code></pre></div><h2 id="hyperopt-command-reference"> 하이퍼옵팅(Hyperopt) 명령어 참조 <a class="headerlink" href="#hyperopt-command-reference" title="영구 링크"> ¶ </a></h2><div class="highlight"><pre><code>usage: freqtrade hyperopt [-h] [-v] [--no-color] [--logfile FILE] [-V]
                          [-c PATH] [-d PATH] [--userdir PATH] [-s NAME]
                          [--strategy-path PATH] [--recursive-strategy-search]
                          [--freqaimodel NAME] [--freqaimodel-path PATH]
                          [-i TIMEFRAME] [--timerange TIMERANGE]
                          [--data-format-ohlcv {json,jsongz,feather,parquet}]
                          [--max-open-trades INT]
                          [--stake-amount STAKE_AMOUNT] [--fee FLOAT]
                          [-p PAIRS [PAIRS ...]] [--hyperopt-path PATH]
                          [--eps] [--enable-protections]
                          [--dry-run-wallet DRY_RUN_WALLET]
                          [--timeframe-detail TIMEFRAME_DETAIL] [-e INT]
                          [--spaces {all,buy,sell,roi,stoploss,trailing,protection,trades,default} [{all,buy,sell,roi,stoploss,trailing,protection,trades,default} ...]]
                          [--print-all] [--print-json] [-j JOBS]
                          [--random-state INT] [--min-trades INT]
                          [--hyperopt-loss NAME] [--disable-param-export]
                          [--ignore-missing-spaces] [--analyze-per-epoch]

options:
  -h, --help            show this help message and exit
  -i TIMEFRAME, --timeframe TIMEFRAME
                        Specify timeframe (\`1m\`, \`5m\`, \`30m\`, \`1h\`, \`1d\`).
  --timerange TIMERANGE
                        Specify what timerange of data to use.
  --data-format-ohlcv {json,jsongz,feather,parquet}
                        Storage format for downloaded candle (OHLCV) data.
                        (default: \`feather\`).
  --max-open-trades INT
                        Override the value of the \`max_open_trades\`
                        configuration setting.
  --stake-amount STAKE_AMOUNT
                        Override the value of the \`stake_amount\` configuration
                        setting.
  --fee FLOAT           Specify fee ratio. Will be applied twice (on trade
                        entry and exit).
  -p PAIRS [PAIRS ...], --pairs PAIRS [PAIRS ...]
                        Limit command to these pairs. Pairs are space-
                        separated.
  --hyperopt-path PATH  Specify additional lookup path for Hyperopt Loss
                        functions.
  --eps, --enable-position-stacking
                        Allow buying the same pair multiple times (position
                        stacking).
  --enable-protections, --enableprotections
                        Enable protections for backtesting.Will slow
                        backtesting down by a considerable amount, but will
                        include configured protections
  --dry-run-wallet DRY_RUN_WALLET, --starting-balance DRY_RUN_WALLET
                        Starting balance, used for backtesting / hyperopt and
                        dry-runs.
  --timeframe-detail TIMEFRAME_DETAIL
                        Specify detail timeframe for backtesting (\`1m\`, \`5m\`,
                        \`30m\`, \`1h\`, \`1d\`).
  -e INT, --epochs INT  Specify number of epochs (default: 100).
  --spaces {all,buy,sell,roi,stoploss,trailing,protection,trades,default} [{all,buy,sell,roi,stoploss,trailing,protection,trades,default} ...]]
                        Specify which parameters to hyperopt. Space-separated
                        list.
  --print-all           Print all results, not only the best ones.
  --print-json          Print output in JSON format.
  -j JOBS, --job-workers JOBS
                        The number of concurrently running jobs for
                        hyperoptimization (hyperopt worker processes). If -1
                        (default), all CPUs are used, for -2, all CPUs but one
                        are used, etc. If 1 is given, no parallel computing
                        code is used at all.
  --random-state INT    Set random state to some positive integer for
                        reproducible hyperopt results.
  --min-trades INT      Set minimal desired number of trades for evaluations
                        in the hyperopt optimization path (default: 1).
  --hyperopt-loss NAME, --hyperoptloss NAME
                        Specify the class name of the hyperopt loss function
                        class (IHyperOptLoss). Different functions can
                        generate completely different results, since the
                        target for optimization is different. Built-in
                        Hyperopt-loss-functions are:
                        ShortTradeDurHyperOptLoss, OnlyProfitHyperOptLoss,
                        SharpeHyperOptLoss, SharpeHyperOptLossDaily,
                        SortinoHyperOptLoss, SortinoHyperOptLossDaily,
                        CalmarHyperOptLoss, MaxDrawDownHyperOptLoss,
                        MaxDrawDownRelativeHyperOptLoss,
                        ProfitDrawDownHyperOptLoss, MultiMetricHyperOptLoss
  --disable-param-export
                        Disable automatic hyperopt parameter export.
  --ignore-missing-spaces, --ignore-unparameterized-spaces
                        Suppress errors for any requested Hyperopt spaces that
                        do not contain any parameters.
  --analyze-per-epoch   Run populate_indicators once per epoch.

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
</code></pre></div><h3 id="hyperopt-checklist"> 하이퍼옵팅(Hyperopt) 체크리스트 <a class="headerlink" href="#hyperopt-checklist" title="영구 링크"> ¶ </a></h3><p>하이퍼옵팅(Hyperopt)의 모든 작업/가능성에 대한 체크리스트</p><p>최적화하려는 공간에 따라 아래 항목 중 일부만 필요합니다:</p><ul><li> 매수 신호 최적화를 위해 <code> space=&#39;buy&#39; </code> 로 매개변수 정의 </li><li> 매도 신호 최적화를 위해 <code> space=&#39;sell&#39; </code> 로 매개변수 정의 </li></ul><div class="admonition note"><p class="admonition-title">참고</p><p><code> populate_indicators </code> 는 하이퍼옵트가 작동하려면 모든 공간에서 사용할 수 있는 모든 지표를 생성해야 합니다. </p></div>`,16)),n("p",null,[s[4]||(s[4]=a(" 드물게 ")),l(p,{to:"advanced-hyperopt"},{default:e(()=>s[3]||(s[3]=[a(" 중첩 클래스 ")])),_:1}),s[5]||(s[5]=a(" 를 생성하고 ")),s[6]||(s[6]=n("code",null," HyperOpt ",-1)),s[7]||(s[7]=a(" 라는 이름을 지정해야 할 수도 있습니다. "))]),s[54]||(s[54]=c(`<ul><li> 기본값과 다른 ROI 매개변수의 최적화 하이퍼스페이스 범위가 필요한 경우 사용자 정의 ROI 최적화를 위한 <code> roi_space </code></li><li> 기본값과 다른 ROI 테이블 값의 범위 또는 기본 4단계와 다른 ROI 테이블의 항목 수(단계)가 필요한 경우 사용자 정의 ROI 최적화를 위한 <code> generate_roi_table </code></li><li> 기본값과 다른 최적화 하이퍼스페이스 범위가 필요한 경우 사용자 정의 손절매 최적화를 위한 <code> stoploss_space </code></li><li> 기본값과 다른 최적화 하이퍼스페이스 범위가 필요한 경우 사용자 정의 트레일링 스탑 최적화를 위한 <code> trailing_space </code></li><li> 기본값과 다른 최적화 하이퍼스페이스 범위가 필요한 경우 사용자 정의 최대 오픈 거래 최적화를 위한 <code> max_open_trades_space </code></li></ul><div class="admonition tip"><p class="admonition-title">ROI, 손절매 및 트레일링 스탑을 빠르게 최적화</p><p> 전략에서 아무것도 변경하지 않고 <code> roi </code> , <code> stoploss </code> 및 <code> trailing </code> 공간을 빠르게 최적화할 수 있습니다. </p><div class="highlight"><pre><code><span class="c1"># 작동하는 전략을 준비합니다.</span>
freqtrade<span class="w"> </span>hyperopt<span class="w"> </span>--hyperopt-loss<span class="w"> </span>SharpeHyperOptLossDaily<span class="w"> </span>--spaces<span class="w"> </span>roi<span class="w"> </span>stoploss<span class="w"> </span>trailing<span class="w"> </span>--strategy<span class="w"> </span>MyWorkingStrategy<span class="w"> </span>--config<span class="w"> </span>config.json<span class="w"> </span>-e<span class="w"> </span><span class="m">100</span>
</code></pre></div></div><h3 id="hyperopt-execution-logic"> 하이퍼옵팅(Hyperopt) 실행 로직 <a class="headerlink" href="#hyperopt-execution-logic" title="영구 링크"> ¶ </a></h3><p> 하이퍼옵팅(Hyperopt)은 먼저 데이터를 메모리에 로드한 다음 <code> populate_indicators() </code> 를 쌍마다 한 번 실행하여 모든 지표를 생성합니다. <code> --analyze-per-epoch </code> 가 지정되지 않은 경우에만 해당됩니다. </p><p> 그런 다음 하이퍼옵팅(Hyperopt)은 여러 프로세스로 분기(프로세서 수 또는 <code> -j &lt;n&gt; </code> )하여 <code> --spaces </code> 에 정의된 매개변수를 변경하면서 백테스팅을 반복 실행합니다. </p><p> 새로운 매개변수 세트마다 freqtrade는 먼저 <code> populate_entry_trend() </code> 를 실행한 다음 <code> populate_exit_trend() </code> 를 실행하고, 그 후 일반 백테스팅 프로세스를 실행하여 거래를 시뮬레이션합니다. </p><p> 백테스팅 후 결과는 <a href="#loss-functions"> 손실 함수 </a> 에 전달되어 이 결과가 이전 결과보다 더 나은지 또는 나쁜지를 평가합니다. <br> 손실 함수 결과를 기반으로 하이퍼옵팅(Hyperopt)은 다음 라운드의 백테스팅에서 시도할 다음 매개변수 세트를 결정합니다. </p><h3 id="configure-your-guards-and-triggers"> 가드 및 트리거 구성 <a class="headerlink" href="#configure-your-guards-and-triggers" title="영구 링크"> ¶ </a></h3><p>전략 파일에서 새로운 매수 하이퍼옵팅(Hyperopt)을 추가하려면 두 가지 장소를 변경해야 합니다:</p><ul><li>클래스 수준에서 하이퍼옵팅(Hyperopt)이 최적화할 매개변수를 정의합니다.</li><li><code> populate_entry_trend() </code> 내에서 원시 상수 대신 정의된 매개변수 값을 사용합니다. </li></ul><p> 여기에는 두 가지 유형의 지표가 있습니다: 1. <code> 가드 </code> 와 2. <code> 트리거 </code> . </p><ol><li>가드는 &quot;ADX &lt; 10일 때 절대 매수하지 않음&quot; 또는 현재 가격이 EMA10을 초과할 때 절대 매수하지 않음과 같은 조건입니다.</li><li>트리거는 &quot;EMA5가 EMA10을 상향 돌파할 때 매수&quot; 또는 &quot;종가가 하단 볼린저 밴드에 닿을 때 매수&quot;와 같은 특정 순간에 실제로 매수를 트리거하는 것입니다.</li></ol><div class="admonition hint"><p class="admonition-title">가드 및 트리거</p><p> 기술적으로 가드와 트리거 사이에는 차이가 없습니다. <br> 그러나 이 가이드는 신호가 &quot;고착&quot;되지 않도록 하기 위해 이 구분을 명확히 합니다. 고착 신호는 여러 캔들 동안 활성 상태인 신호입니다. 이는 신호가 사라지기 직전에 신호에 진입하는 것으로 이어질 수 있으며, 이는 신호가 시작될 때보다 성공 가능성이 훨씬 낮습니다. </p></div><p>하이퍼옵티마이제이션은 각 에포크 라운드마다 하나의 트리거와 여러 가드를 선택합니다.</p><h4 id="exit-signal-optimization"> 매도 신호 최적화 <a class="headerlink" href="#exit-signal-optimization" title="영구 링크"> ¶ </a></h4><p>위의 매수 신호와 유사하게 매도 신호도 최적화할 수 있습니다. 다음 메서드에 해당 설정을 배치합니다:</p><ul><li> 하이퍼옵트가 최적화할 매개변수를 클래스 수준에서 정의하고, 이를 <code> sell_* </code> 로 명명하거나 <code> space=&#39;sell&#39; </code> 을 명시적으로 정의합니다. </li><li><code> populate_exit_trend() </code> 내에서 원시 상수 대신 정의된 매개변수 값을 사용합니다. </li></ul><p>구성 및 규칙은 매수 신호와 동일합니다.</p><h2 id="solving-a-mystery"> 미스터리 해결 <a class="headerlink" href="#solving-a-mystery" title="영구 링크"> ¶ </a></h2><p>MACD 교차 또는 하단 볼린저 밴드를 사용하여 롱 진입을 트리거해야 하는지 궁금하다고 가정해 보겠습니다. 또한 RSI 또는 ADX를 사용하여 이러한 결정을 도와야 하는지 궁금합니다. RSI 또는 ADX를 사용하기로 결정했다면 어떤 값을 사용해야 할까요?</p><p>하이퍼파라미터 최적화를 사용하여 이 미스터리를 해결해 보겠습니다.</p><h3 id="defining-indicators-to-be-used"> 사용할 지표 정의 <a class="headerlink" href="#defining-indicators-to-be-used" title="영구 링크"> ¶ </a></h3><p>전략에서 사용할 지표를 계산하는 것으로 시작합니다.</p><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">MyAwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">populate_indicators</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        Generate all indicators used by the strategy</span>
<span class="sd">        &quot;&quot;&quot;</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;adx&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">ADX</span><span class="p">(</span><span class="n">dataframe</span><span class="p">)</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;rsi&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">RSI</span><span class="p">(</span><span class="n">dataframe</span><span class="p">)</span>
        <span class="n">macd</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">MACD</span><span class="p">(</span><span class="n">dataframe</span><span class="p">)</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;macd&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">macd</span><span class="p">[</span><span class="s1">&#39;macd&#39;</span><span class="p">]</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;macdsignal&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">macd</span><span class="p">[</span><span class="s1">&#39;macdsignal&#39;</span><span class="p">]</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;macdhist&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">macd</span><span class="p">[</span><span class="s1">&#39;macdhist&#39;</span><span class="p">]</span>

        <span class="n">bollinger</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">BBANDS</span><span class="p">(</span><span class="n">dataframe</span><span class="p">,</span> <span class="n">timeperiod</span><span class="o">=</span><span class="mi">20</span><span class="p">,</span> <span class="n">nbdevup</span><span class="o">=</span><span class="mf">2.0</span><span class="p">,</span> <span class="n">nbdevdn</span><span class="o">=</span><span class="mf">2.0</span><span class="p">)</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;bb_lowerband&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">bollinger</span><span class="p">[</span><span class="s1">&#39;lowerband&#39;</span><span class="p">]</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;bb_middleband&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">bollinger</span><span class="p">[</span><span class="s1">&#39;middleband&#39;</span><span class="p">]</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;bb_upperband&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">bollinger</span><span class="p">[</span><span class="s1">&#39;upperband&#39;</span><span class="p">]</span>
        <span class="k">return</span> <span class="n">dataframe</span>
</code></pre></div><h3 id="hyperoptable-parameters"> 하이퍼옵팅(Hyperopt) 가능한 매개변수 <a class="headerlink" href="#hyperoptable-parameters" title="영구 링크"> ¶ </a></h3><p>하이퍼옵팅(Hyperopt) 가능한 매개변수를 정의합니다:</p><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">MyAwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="n">buy_adx</span> <span class="o">=</span> <span class="n">DecimalParameter</span><span class="p">(</span><span class="mi">20</span><span class="p">,</span> <span class="mi">40</span><span class="p">,</span> <span class="n">decimals</span><span class="o">=</span><span class="mi">1</span><span class="p">,</span> <span class="n">default</span><span class="o">=</span><span class="mf">30.1</span><span class="p">,</span> <span class="n">space</span><span class="o">=</span><span class="s2">&quot;buy&quot;</span><span class="p">)</span>
    <span class="n">buy_rsi</span> <span class="o">=</span> <span class="n">IntParameter</span><span class="p">(</span><span class="mi">20</span><span class="p">,</span> <span class="mi">40</span><span class="p">,</span> <span class="n">default</span><span class="o">=</span><span class="mi">30</span><span class="p">,</span> <span class="n">space</span><span class="o">=</span><span class="s2">&quot;buy&quot;</span><span class="p">)</span>
    <span class="n">buy_adx_enabled</span> <span class="o">=</span> <span class="n">BooleanParameter</span><span class="p">(</span><span class="n">default</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">space</span><span class="o">=</span><span class="s2">&quot;buy&quot;</span><span class="p">)</span>
    <span class="n">buy_rsi_enabled</span> <span class="o">=</span> <span class="n">CategoricalParameter</span><span class="p">([</span><span class="kc">True</span><span class="p">,</span> <span class="kc">False</span><span class="p">],</span> <span class="n">default</span><span class="o">=</span><span class="kc">False</span><span class="p">,</span> <span class="n">space</span><span class="o">=</span><span class="s2">&quot;buy&quot;</span><span class="p">)</span>
    <span class="n">buy_trigger</span> <span class="o">=</span> <span class="n">CategoricalParameter</span><span class="p">([</span><span class="s2">&quot;bb_lower&quot;</span><span class="p">,</span> <span class="s2">&quot;macd_cross_signal&quot;</span><span class="p">],</span> <span class="n">default</span><span class="o">=</span><span class="s2">&quot;bb_lower&quot;</span><span class="p">,</span> <span class="n">space</span><span class="o">=</span><span class="s2">&quot;buy&quot;</span><span class="p">)</span>
</code></pre></div><p> 위의 정의는 다음과 같이 말합니다: 최상의 조합을 찾기 위해 다섯 가지 매개변수를 무작위로 조합하고 싶습니다. <br><code> buy_rsi </code> 는 20에서 40 사이의 정수 매개변수입니다. 이 공간의 크기는 20입니다. <br><code> buy_adx </code> 는 소수점 매개변수로, 소수점 이하 1자리까지 20에서 40 사이의 값을 평가합니다(따라서 값은 20.1, 20.2, ...). 이 공간의 크기는 200입니다. <br> 그런 다음 세 가지 범주 변수가 있습니다. 처음 두 개는 <code> True </code> 또는 <code> False </code> 입니다. 이를 사용하여 ADX 및 RSI 가드를 활성화하거나 비활성화합니다. 마지막으로 <code> trigger </code> 라는 변수를 사용하여 어떤 매수 트리거를 사용할지 결정합니다. </p><div class="admonition note"><p class="admonition-title">매개변수 공간 할당</p><p> 매개변수는 <code> buy_* </code> 또는 <code> sell_* </code> 로 명명된 변수에 할당되거나 <code> space=&#39;buy&#39; </code> | <code> space=&#39;sell&#39; </code> 을 포함해야 공간에 올바르게 할당됩니다. 공간에 사용할 매개변수가 없으면 하이퍼옵팅을 실행할 때 공간을 찾을 수 없다는 오류가 발생합니다. <br> 명확하지 않은 공간을 가진 매개변수(예: <code> adx_period = IntParameter(4, 24, default=14) </code> - 명시적 또는 암시적 공간 없음)는 감지되지 않으므로 무시됩니다. </p></div><p>이제 이러한 값을 사용하여 매수 전략을 작성해 보겠습니다:</p><div class="highlight"><pre><code>    <span class="k">def</span><span class="w"> </span><span class="nf">populate_entry_trend</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
        <span class="n">conditions</span> <span class="o">=</span> <span class="p">[]</span>
        <span class="c1"># GUARDS AND TRENDS</span>
        <span class="k">if</span> <span class="bp">self</span><span class="o">.</span><span class="n">buy_adx_enabled</span><span class="o">.</span><span class="n">value</span><span class="p">:</span>
            <span class="n">conditions</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;adx&#39;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="bp">self</span><span class="o">.</span><span class="n">buy_adx</span><span class="o">.</span><span class="n">value</span><span class="p">)</span>
        <span class="k">if</span> <span class="bp">self</span><span class="o">.</span><span class="n">buy_rsi_enabled</span><span class="o">.</span><span class="n">value</span><span class="p">:</span>
            <span class="n">conditions</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;rsi&#39;</span><span class="p">]</span> <span class="o">&lt;</span> <span class="bp">self</span><span class="o">.</span><span class="n">buy_rsi</span><span class="o">.</span><span class="n">value</span><span class="p">)</span>

        <span class="c1"># TRIGGERS</span>
        <span class="k">if</span> <span class="bp">self</span><span class="o">.</span><span class="n">buy_trigger</span><span class="o">.</span><span class="n">value</span> <span class="o">==</span> <span class="s1">&#39;bb_lower&#39;</span><span class="p">:</span>
            <span class="n">conditions</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;close&#39;</span><span class="p">]</span> <span class="o">&lt;</span> <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;bb_lowerband&#39;</span><span class="p">])</span>
        <span class="k">if</span> <span class="bp">self</span><span class="o">.</span><span class="n">buy_trigger</span><span class="o">.</span><span class="n">value</span> <span class="o">==</span> <span class="s1">&#39;macd_cross_signal&#39;</span><span class="p">:</span>
            <span class="n">conditions</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">qtpylib</span><span class="o">.</span><span class="n">crossed_above</span><span class="p">(</span>
                <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;macd&#39;</span><span class="p">],</span> <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;macdsignal&#39;</span><span class="p">]</span>
            <span class="p">))</span>

        <span class="c1"># Check that volume is not 0</span>
                <span class="n">reduce</span><span class="p">(</span><span class="k">lambda</span> <span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">:</span> <span class="n">x</span> <span class="o">&amp;</span> <span class="n">y</span><span class="p">,</span> <span class="n">conditions</span><span class="p">),</span>
                <span class="s1">&#39;enter_long&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span>

        <span class="k">return</span> <span class="n">dataframe</span>
</code></pre></div><p> Hyperopt는 이제 <code> populate_entry_trend() </code> 를 여러 번 호출합니다 ( <code> epochs </code> ) 다양한 값 조합으로. <br> 제공된 과거 데이터를 사용하여 위 함수로 생성된 매수 신호를 기반으로 매수를 시뮬레이션합니다. <br> 결과를 기반으로 Hyperopt는 구성된 <a href="#loss-functions"> 손실 함수 </a> 에 따라 가장 좋은 결과를 생성한 매개변수 조합을 알려줍니다. </p><div class="admonition note"><p class="admonition-title">참고</p><p> 위 설정은 ADX, RSI 및 볼린저 밴드를 생성된 지표에서 찾을 것으로 예상합니다. 현재 봇에서 사용하지 않는 지표를 테스트하려면 전략 또는 Hyperopt 파일의 <code> populate_indicators() </code> 메서드에 추가해야 합니다. </p></div><h2 id="parameter-types"> 매개변수 유형 <a class="headerlink" href="#parameter-types" title="영구 링크"> ¶ </a></h2><p>각기 다른 목적에 맞는 네 가지 매개변수 유형이 있습니다.</p><ul><li><code> IntParameter </code> - 검색 공간의 상한 및 하한 경계를 가진 정수 매개변수를 정의합니다. </li><li><code> DecimalParameter </code> - 소수점 이하 자릿수가 제한된 부동 소수점 매개변수를 정의합니다(기본값은 3). 대부분의 경우 <code> RealParameter </code> 대신 사용하는 것이 좋습니다. </li><li><code> RealParameter </code> - 상한 및 하한 경계를 가진 부동 소수점 매개변수를 정의하며, 정밀도 제한이 없습니다. 거의 사용되지 않으며, 거의 무한한 가능성을 가진 공간을 생성합니다. </li><li><code> CategoricalParameter </code> - 미리 결정된 선택 항목이 있는 매개변수를 정의합니다. </li><li><code> BooleanParameter </code> - <code> CategoricalParameter([True, False]) </code> 의 약어로, &quot;활성화&quot; 매개변수에 적합합니다. </li></ul><h3 id="parameter-options"> 매개변수 옵션 <a class="headerlink" href="#parameter-options" title="영구 링크"> ¶ </a></h3><p>다양한 아이디어를 빠르게 테스트하는 데 도움이 되는 두 가지 매개변수 옵션이 있습니다:</p><ul><li><code> optimize </code> - <code> False </code> 로 설정하면 매개변수가 최적화 프로세스에 포함되지 않습니다(기본값: True). </li><li><code> load </code> - <code> False </code> 로 설정하면 이전 하이퍼옵트 실행 결과( <code> buy_params </code> 및 <code> sell_params </code> , 전략 또는 JSON 출력 파일에 있음)가 이후 하이퍼옵트의 시작 값으로 사용되지 않습니다. 대신 매개변수에 지정된 기본값이 사용됩니다(기본값: True). </li></ul><div class="admonition tip"><p class="admonition-title"> 백테스팅에 대한 <code> load=False </code> 의 영향 </p><p><code> load </code> 옵션을 <code> False </code> 로 설정하면 백테스팅에서도 매개변수에 지정된 기본값이 사용되며, 하이퍼옵티마이제이션을 통해 찾은 값이 <em> 사용되지 않음 </em> 을 유의하세요. </p></div><div class="admonition warning"><p class="admonition-title">경고</p><p> 하이퍼옵트 가능한 매개변수는 <code> populate_indicators </code> 에서 사용할 수 없습니다. 하이퍼옵트는 각 에포크마다 지표를 다시 계산하지 않으므로 이 경우 시작 값이 사용됩니다. </p></div><h2 id="optimizing-an-indicator-parameter"> 지표 매개변수 최적화 <a class="headerlink" href="#optimizing-an-indicator-parameter" title="영구 링크"> ¶ </a></h2><p> 간단한 전략(2개의 이동 평균 교차 전략)을 염두에 두고 있으며, 이 전략에 대한 이상적인 매개변수를 찾고 싶다고 가정해 보겠습니다. 기본적으로 우리는 5%의 손절매를 가정하고, 10%의 이익 실현( <code> minimal_roi </code> )을 가정합니다. 이는 freqtrade가 10%의 이익이 달성되면 거래를 매도한다는 것을 의미합니다. </p><div class="highlight"><pre><code><span class="kn">from</span><span class="w"> </span><span class="nn">pandas</span><span class="w"> </span><span class="kn">import</span> <span class="n">DataFrame</span>
<span class="kn">from</span><span class="w"> </span><span class="nn">functools</span><span class="w"> </span><span class="kn">import</span> <span class="n">reduce</span>

<span class="kn">import</span><span class="w"> </span><span class="nn">talib.abstract</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">ta</span>

<span class="kn">from</span><span class="w"> </span><span class="nn">freqtrade.strategy</span><span class="w"> </span><span class="kn">import</span> <span class="p">(</span><span class="n">BooleanParameter</span><span class="p">,</span> <span class="n">CategoricalParameter</span><span class="p">,</span> <span class="n">DecimalParameter</span><span class="p">,</span> 
                                <span class="n">IStrategy</span><span class="p">,</span> <span class="n">IntParameter</span><span class="p">)</span>
<span class="kn">import</span><span class="w"> </span><span class="nn">freqtrade.vendor.qtpylib.indicators</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">qtpylib</span>

<span class="k">class</span><span class="w"> </span><span class="nc">MyAwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="n">stoploss</span> <span class="o">=</span> <span class="o">-</span><span class="mf">0.05</span>
    <span class="n">timeframe</span> <span class="o">=</span> <span class="s1">&#39;15m&#39;</span>
    <span class="n">minimal_roi</span> <span class="o">=</span> <span class="p">{</span>
        <span class="s2">&quot;0&quot;</span><span class="p">:</span>  <span class="mf">0.10</span>
    <span class="p">}</span>
    <span class="c1"># Define the parameter spaces</span>
    <span class="n">buy_ema_short</span> <span class="o">=</span> <span class="n">IntParameter</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="mi">50</span><span class="p">,</span> <span class="n">default</span><span class="o">=</span><span class="mi">5</span><span class="p">)</span>
    <span class="n">buy_ema_long</span> <span class="o">=</span> <span class="n">IntParameter</span><span class="p">(</span><span class="mi">15</span><span class="p">,</span> <span class="mi">200</span><span class="p">,</span> <span class="n">default</span><span class="o">=</span><span class="mi">50</span><span class="p">)</span>


    <span class="k">def</span><span class="w"> </span><span class="nf">populate_indicators</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;Generate all indicators used by the strategy&quot;&quot;&quot;</span>

        <span class="c1"># Calculate all ema_short values</span>
        <span class="k">for</span> <span class="n">val</span> <span class="ow">in</span> <span class="bp">self</span><span class="o">.</span><span class="n">buy_ema_short</span><span class="o">.</span><span class="n">range</span><span class="p">:</span>
            <span class="n">dataframe</span><span class="p">[</span><span class="sa">f</span><span class="s1">&#39;ema_short_</span><span class="si">{</span><span class="n">val</span><span class="si">}</span><span class="s1">&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">EMA</span><span class="p">(</span><span class="n">dataframe</span><span class="p">,</span> <span class="n">timeperiod</span><span class="o">=</span><span class="n">val</span><span class="p">)</span>

        <span class="c1"># Calculate all ema_long values</span>
        <span class="k">for</span> <span class="n">val</span> <span class="ow">in</span> <span class="bp">self</span><span class="o">.</span><span class="n">buy_ema_long</span><span class="o">.</span><span class="n">range</span><span class="p">:</span>
            <span class="n">dataframe</span><span class="p">[</span><span class="sa">f</span><span class="s1">&#39;ema_long_</span><span class="si">{</span><span class="n">val</span><span class="si">}</span><span class="s1">&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">EMA</span><span class="p">(</span><span class="n">dataframe</span><span class="p">,</span> <span class="n">timeperiod</span><span class="o">=</span><span class="n">val</span><span class="p">)</span>

        <span class="k">return</span> <span class="n">dataframe</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">populate_entry_trend</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
        <span class="n">conditions</span> <span class="o">=</span> <span class="p">[]</span>
        <span class="n">conditions</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">qtpylib</span><span class="o">.</span><span class="n">crossed_above</span><span class="p">(</span>
                <span class="n">dataframe</span><span class="p">[</span><span class="sa">f</span><span class="s1">&#39;ema_short_</span><span class="si">{</span><span class="bp">self</span><span class="o">.</span><span class="n">buy_ema_short</span><span class="o">.</span><span class="n">value</span><span class="si">}</span><span class="s1">&#39;</span><span class="p">],</span> <span class="n">dataframe</span><span class="p">[</span><span class="sa">f</span><span class="s1">&#39;ema_long_</span><span class="si">{</span><span class="bp">self</span><span class="o">.</span><span class="n">buy_ema_long</span><span class="o">.</span><span class="n">value</span><span class="si">}</span><span class="s1">&#39;</span><span class="p">]</span>
            <span class="p">))</span>

        <span class="c1"># Check that volume is not 0</span>
        <span class="n">conditions</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;volume&#39;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span>

        <span class="k">if</span> <span class="n">conditions</span><span class="p">:</span>
            <span class="n">dataframe</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span>
                <span class="n">reduce</span><span class="p">(</span><span class="k">lambda</span> <span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">:</span> <span class="n">x</span> <span class="o">&amp;</span> <span class="n">y</span><span class="p">,</span> <span class="n">conditions</span><span class="p">),</span>
                <span class="s1">&#39;enter_long&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span>
        <span class="k">return</span> <span class="n">dataframe</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">populate_exit_trend</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
        <span class="n">conditions</span> <span class="o">=</span> <span class="p">[]</span>
        <span class="n">conditions</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">qtpylib</span><span class="o">.</span><span class="n">crossed_above</span><span class="p">(</span>
                <span class="n">dataframe</span><span class="p">[</span><span class="sa">f</span><span class="s1">&#39;ema_long_</span><span class="si">{</span><span class="bp">self</span><span class="o">.</span><span class="n">buy_ema_long</span><span class="o">.</span><span class="n">value</span><span class="si">}</span><span class="s1">&#39;</span><span class="p">],</span> <span class="n">dataframe</span><span class="p">[</span><span class="sa">f</span><span class="s1">&#39;ema_short_</span><span class="si">{</span><span class="bp">self</span><span class="o">.</span><span class="n">buy_ema_short</span><span class="o">.</span><span class="n">value</span><span class="si">}</span><span class="s1">&#39;</span><span class="p">]</span>
            <span class="p">))</span>

        <span class="c1"># Check that volume is not 0</span>
        <span class="n">conditions</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;volume&#39;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span>

        <span class="k">if</span> <span class="n">conditions</span><span class="p">:</span>
            <span class="n">dataframe</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span>
                <span class="n">reduce</span><span class="p">(</span><span class="k">lambda</span> <span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">:</span> <span class="n">x</span> <span class="o">&amp;</span> <span class="n">y</span><span class="p">,</span> <span class="n">conditions</span><span class="p">),</span>
                <span class="s1">&#39;exit_long&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span>
        <span class="k">return</span> <span class="n">dataframe</span>
</code></pre></div><p>분해:</p><p><code> self.buy_ema_short.range </code> 를 사용하면 매개변수의 낮은 값과 높은 값 사이의 모든 항목을 포함하는 범위 객체가 반환됩니다. 이 경우( <code> IntParameter(3, 50, default=5) </code> ), 루프는 3에서 50 사이의 모든 숫자( <code> [3, 4, 5, ... 49, 50] </code> )에 대해 실행됩니다. 이것을 루프에서 사용하면 하이퍼옵팅(Hyperopt)은 48개의 새로운 열( <code> [&#39;buy_ema_3&#39;, &#39;buy_ema_4&#39;, ... , &#39;buy_ema_50&#39;] </code> )을 생성합니다. </p><p>그런 다음 하이퍼옵팅(Hyperopt)은 선택된 값을 사용하여 매수 및 매도 신호를 생성합니다.</p><p>이 전략은 일관된 수익을 제공하기에는 너무 간단할 수 있지만, 지표 매개변수를 최적화하는 방법에 대한 예제로 사용될 수 있습니다.</p><div class="admonition note"><p class="admonition-title">참고</p><p><code> self.buy_ema_short.range </code> 는 하이퍼옵트와 다른 모드 간에 다르게 작동합니다. 하이퍼옵트의 경우 위 예제는 48개의 새로운 열을 생성할 수 있지만, 다른 모든 모드(백테스팅, 드라이/라이브)에서는 선택된 값에 대한 열만 생성됩니다. 따라서 결과 열을 명시적 값( <code> self.buy_ema_short.value </code> 이외의 값)으로 사용하는 것을 피해야 합니다. </p></div><div class="admonition note"><p class="admonition-title">참고</p><p><code> range </code> 속성은 <code> DecimalParameter </code> 및 <code> CategoricalParameter </code> 에서도 사용할 수 있습니다. <code> RealParameter </code> 는 무한한 검색 공간 때문에 이 속성을 제공하지 않습니다. </p></div><details class="hint"><summary>성능 팁</summary><p>일반적인 하이퍼옵트 동안 지표는 한 번 계산되어 각 에포크에 제공되며, 코어 수가 증가함에 따라 RAM 사용량이 선형적으로 증가합니다. 이는 성능에 영향을 미치므로 RAM 사용량을 줄이기 위한 두 가지 대안이 있습니다.</p><ul><li><code> ema_short </code> 및 <code> ema_long </code> 계산을 <code> populate_indicators() </code> 에서 <code> populate_entry_trend() </code> 로 이동합니다. <code> populate_entry_trend() </code> 는 각 에포크마다 계산되므로 <code> .range </code> 기능을 사용할 필요가 없습니다. </li><li> 하이퍼옵트는 <code> --analyze-per-epoch </code> 을 제공하여 <code> populate_indicators() </code> 의 실행을 에포크 프로세스로 이동하여 매개변수당 하나의 값을 계산합니다. 이 경우 <code> .range </code> 기능은 실제로 사용된 값만 반환합니다. </li></ul><p>이러한 대안은 RAM 사용량을 줄이지만 CPU 사용량을 증가시킵니다. 그러나 하이퍼옵트 실행이 메모리 부족(OOM) 문제로 인해 실패할 가능성이 줄어듭니다.</p><p><code> .range </code> 기능 또는 위의 대안을 사용할 때 가능한 한 작은 공간 범위를 사용하여 CPU/RAM 사용량을 개선해야 합니다. </p></details><h2 id="optimizing-protections"> 보호 최적화 <a class="headerlink" href="#optimizing-protections" title="영구 링크"> ¶ </a></h2><p>Freqtrade는 보호도 최적화할 수 있습니다. 보호를 최적화하는 방법은 사용자에게 달려 있으며, 다음은 예제로만 간주해야 합니다.</p><p>전략은 단순히 보호 구성의 목록을 반환하는 &quot;protections&quot; 항목을 속성으로 정의해야 합니다.</p><div class="highlight"><pre><code><span class="kn">from</span><span class="w"> </span><span class="nn">pandas</span><span class="w"> </span><span class="kn">import</span> <span class="n">DataFrame</span>
<span class="kn">from</span><span class="w"> </span><span class="nn">functools</span><span class="w"> </span><span class="kn">import</span> <span class="n">reduce</span>

<span class="kn">import</span><span class="w"> </span><span class="nn">talib.abstract</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">ta</span>

<span class="kn">from</span><span class="w"> </span><span class="nn">freqtrade.strategy</span><span class="w"> </span><span class="kn">import</span> <span class="p">(</span><span class="n">BooleanParameter</span><span class="p">,</span> <span class="n">CategoricalParameter</span><span class="p">,</span> <span class="n">DecimalParameter</span><span class="p">,</span> 
                                <span class="n">IStrategy</span><span class="p">,</span> <span class="n">IntParameter</span><span class="p">)</span>
<span class="kn">import</span><span class="w"> </span><span class="nn">freqtrade.vendor.qtpylib.indicators</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">qtpylib</span>

<span class="k">class</span><span class="w"> </span><span class="nc">MyAwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="n">stoploss</span> <span class="o">=</span> <span class="o">-</span><span class="mf">0.05</span>
    <span class="n">timeframe</span> <span class="o">=</span> <span class="s1">&#39;15m&#39;</span>
    <span class="c1"># Define the parameter spaces</span>
    <span class="n">cooldown_lookback</span> <span class="o">=</span> <span class="n">IntParameter</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">48</span><span class="p">,</span> <span class="n">default</span><span class="o">=</span><span class="mi">5</span><span class="p">,</span> <span class="n">space</span><span class="o">=</span><span class="s2">&quot;protection&quot;</span><span class="p">,</span> <span class="n">optimize</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
    <span class="n">stop_duration</span> <span class="o">=</span> <span class="n">IntParameter</span><span class="p">(</span><span class="mi">12</span><span class="p">,</span> <span class="mi">200</span><span class="p">,</span> <span class="n">default</span><span class="o">=</span><span class="mi">5</span><span class="p">,</span> <span class="n">space</span><span class="o">=</span><span class="s2">&quot;protection&quot;</span><span class="p">,</span> <span class="n">optimize</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
    <span class="n">use_stop_protection</span> <span class="o">=</span> <span class="n">BooleanParameter</span><span class="p">(</span><span class="n">default</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">space</span><span class="o">=</span><span class="s2">&quot;protection&quot;</span><span class="p">,</span> <span class="n">optimize</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>


    <span class="nd">@property</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">protections</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
        <span class="n">prot</span> <span class="o">=</span> <span class="p">[]</span>

        <span class="n">prot</span><span class="o">.</span><span class="n">append</span><span class="p">({</span>
            <span class="s2">&quot;method&quot;</span><span class="p">:</span> <span class="s2">&quot;CooldownPeriod&quot;</span><span class="p">,</span>
            <span class="s2">&quot;stop_duration_candles&quot;</span><span class="p">:</span> <span class="bp">self</span><span class="o">.</span><span class="n">cooldown_lookback</span><span class="o">.</span><span class="n">value</span>
        <span class="p">})</span>
        <span class="k">if</span> <span class="bp">self</span><span class="o">.</span><span class="n">use_stop_protection</span><span class="o">.</span><span class="n">value</span><span class="p">:</span>
            <span class="n">prot</span><span class="o">.</span><span class="n">append</span><span class="p">({</span>
                <span class="s2">&quot;method&quot;</span><span class="p">:</span> <span class="s2">&quot;StoplossGuard&quot;</span><span class="p">,</span>
                <span class="s2">&quot;lookback_period_candles&quot;</span><span class="p">:</span> <span class="mi">24</span> <span class="o">*</span> <span class="mi">3</span><span class="p">,</span>
                <span class="s2">&quot;trade_limit&quot;</span><span class="p">:</span> <span class="mi">4</span><span class="p">,</span>
                <span class="s2">&quot;stop_duration_candles&quot;</span><span class="p">:</span> <span class="bp">self</span><span class="o">.</span><span class="n">stop_duration</span><span class="o">.</span><span class="n">value</span><span class="p">,</span>
                <span class="s2">&quot;only_per_pair&quot;</span><span class="p">:</span> <span class="kc">False</span>
            <span class="p">})</span>

        <span class="k">return</span> <span class="n">prot</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">populate_indicators</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
        <span class="c1"># ...</span>
</code></pre></div><p> 그런 다음 하이퍼옵팅(Hyperopt)을 다음과 같이 실행할 수 있습니다: <code> freqtrade hyperopt --hyperopt-loss SharpeHyperOptLossDaily --strategy MyAwesomeStrategy --spaces protection </code></p><div class="admonition note"><p class="admonition-title">참고</p><p> 보호 공간은 기본 공간의 일부가 아니며, 매개변수 하이퍼옵트 인터페이스에서만 사용할 수 있으며, 별도의 하이퍼옵트 파일이 필요한 레거시 하이퍼옵트 인터페이스에서는 사용할 수 없습니다. Freqtrade는 보호 공간이 선택된 경우 <code> --enable-protections </code> 플래그를 자동으로 변경합니다. </p></div><div class="admonition warning"><p class="admonition-title">경고</p><p>보호가 속성으로 정의된 경우 구성의 항목은 무시됩니다. 따라서 구성에서 보호를 정의하지 않는 것이 좋습니다.</p></div><h3 id="migrating-from-previous-property-setups"> 이전 속성 설정에서 마이그레이션 <a class="headerlink" href="#migrating-from-previous-property-setups" title="영구 링크"> ¶ </a></h3><p>이전 설정에서 마이그레이션하는 것은 매우 간단하며, 보호 항목을 속성으로 변환하여 수행할 수 있습니다. 간단히 말해, 다음 구성은 아래와 같이 변환됩니다.</p><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">MyAwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="n">protections</span> <span class="o">=</span> <span class="p">[</span>
        <span class="p">{</span>
            <span class="s2">&quot;method&quot;</span><span class="p">:</span> <span class="s2">&quot;CooldownPeriod&quot;</span><span class="p">,</span>
            <span class="s2">&quot;stop_duration_candles&quot;</span><span class="p">:</span> <span class="mi">4</span>
        <span class="p">}</span>
    <span class="p">]</span>
</code></pre></div><p>결과</p><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">MyAwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="nd">@property</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">protections</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
        <span class="k">return</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="s2">&quot;method&quot;</span><span class="p">:</span> <span class="s2">&quot;CooldownPeriod&quot;</span><span class="p">,</span>
                <span class="s2">&quot;stop_duration_candles&quot;</span><span class="p">:</span> <span class="mi">4</span>
            <span class="p">}</span>
        <span class="p">]</span>
</code></pre></div><p>그런 다음 하이퍼옵티마이제이션을 허용하기 위해 잠재적으로 흥미로운 항목을 매개변수로 변경합니다.</p><h3 id="optimizing-max_entry_position_adjustment"><code> max_entry_position_adjustment </code> 최적화 <a class="headerlink" href="#optimizing-max_entry_position_adjustment" title="영구 링크"> ¶ </a></h3><p><code> max_entry_position_adjustment </code> 는 별도의 공간이 아니지만, 위에서 보여준 속성 접근 방식을 사용하여 하이퍼옵트에서 여전히 사용할 수 있습니다. </p><div class="highlight"><pre><code><span class="kn">from</span><span class="w"> </span><span class="nn">pandas</span><span class="w"> </span><span class="kn">import</span> <span class="n">DataFrame</span>
<span class="kn">from</span><span class="w"> </span><span class="nn">functools</span><span class="w"> </span><span class="kn">import</span> <span class="n">reduce</span>

<span class="kn">import</span><span class="w"> </span><span class="nn">talib.abstract</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">ta</span>

<span class="kn">from</span><span class="w"> </span><span class="nn">freqtrade.strategy</span><span class="w"> </span><span class="kn">import</span> <span class="p">(</span><span class="n">BooleanParameter</span><span class="p">,</span> <span class="n">CategoricalParameter</span><span class="p">,</span> <span class="n">DecimalParameter</span><span class="p">,</span> 
                                <span class="n">IStrategy</span><span class="p">,</span> <span class="n">IntParameter</span><span class="p">)</span>
<span class="kn">import</span><span class="w"> </span><span class="nn">freqtrade.vendor.qtpylib.indicators</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">qtpylib</span>

<span class="k">class</span><span class="w"> </span><span class="nc">MyAwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="n">stoploss</span> <span class="o">=</span> <span class="o">-</span><span class="mf">0.05</span>
    <span class="n">timeframe</span> <span class="o">=</span> <span class="s1">&#39;15m&#39;</span>

    <span class="c1"># Define the parameter spaces</span>
    <span class="n">max_epa</span> <span class="o">=</span> <span class="n">CategoricalParameter</span><span class="p">([</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">10</span><span class="p">],</span> <span class="n">default</span><span class="o">=</span><span class="mi">1</span><span class="p">,</span> <span class="n">space</span><span class="o">=</span><span class="s2">&quot;buy&quot;</span><span class="p">,</span> <span class="n">optimize</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>

    <span class="nd">@property</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">max_entry_position_adjustment</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
        <span class="k">return</span> <span class="bp">self</span><span class="o">.</span><span class="n">max_epa</span><span class="o">.</span><span class="n">value</span>


    <span class="k">def</span><span class="w"> </span><span class="nf">populate_indicators</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
        <span class="c1"># ...</span>
</code></pre></div><details class="tip"><summary><code> IntParameter </code> 사용 </summary><div> 이 최적화에 <code> IntParameter </code> 를 사용할 수도 있지만, 정수를 명시적으로 반환해야 합니다: <div class="highlight"><pre><code><span class="n">max_epa</span> <span class="o">=</span> <span class="n">IntParameter</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="n">default</span><span class="o">=</span><span class="mi">1</span><span class="p">,</span> <span class="n">space</span><span class="o">=</span><span class="s2">&quot;buy&quot;</span><span class="p">,</span> <span class="n">optimize</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>

<span class="nd">@property</span>
<span class="k">def</span><span class="w"> </span><span class="nf">max_entry_position_adjustment</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
    <span class="k">return</span> <span class="nb">int</span><span class="p">(</span><span class="bp">self</span><span class="o">.</span><span class="n">max_epa</span><span class="o">.</span><span class="n">value</span><span class="p">)</span>
</code></pre></div></div></details><h2 id="loss-functions"> 손실 함수 <a class="headerlink" href="#loss-functions" title="영구 링크"> ¶ </a></h2><p>각 하이퍼파라미터 튜닝에는 목표가 필요합니다. 이는 일반적으로 손실 함수(때로는 목표 함수라고도 함)로 정의되며, 더 바람직한 결과를 위해 감소하고 나쁜 결과를 위해 증가해야 합니다.</p><p> 손실 함수는 <code> --hyperopt-loss &lt;Class-name&gt; </code> 인수(또는 선택적으로 구성의 <code> &quot;hyperopt_loss&quot; </code> 키 아래)로 지정해야 합니다. 이 클래스는 <code> user_data/hyperopts/ </code> 디렉토리 내의 자체 파일에 있어야 합니다. </p><p>현재 다음 손실 함수가 내장되어 있습니다:</p><ul><li><code> ShortTradeDurHyperOptLoss </code> - (기본 레거시 Freqtrade 하이퍼옵티마이제이션 손실 함수) - 주로 짧은 거래 기간과 손실 회피를 위해 사용됩니다. </li><li><code> OnlyProfitHyperOptLoss </code> - 이익의 양만 고려합니다. </li><li><code> SharpeHyperOptLoss </code> - 표준 편차에 대한 거래 수익률을 기준으로 샤프 비율을 최적화합니다. </li><li><code> SharpeHyperOptLossDaily </code> - 표준 편차에 대한 <strong> 일일 </strong> 거래 수익률을 기준으로 샤프 비율을 최적화합니다. </li><li><code> SortinoHyperOptLoss </code> - <strong> 하향 </strong> 표준 편차에 대한 거래 수익률을 기준으로 소르티노 비율을 최적화합니다. </li><li><code> SortinoHyperOptLossDaily </code> - <strong> 일일 </strong> 거래 수익률을 기준으로 <strong> 하향 </strong> 표준 편차에 대한 소르티노 비율을 최적화합니다. </li><li><code> MaxDrawDownHyperOptLoss </code> - 최대 절대 손실을 최적화합니다. </li><li><code> MaxDrawDownRelativeHyperOptLoss </code> - 최대 절대 손실을 최적화하면서 최대 상대 손실도 조정합니다. </li><li><code> CalmarHyperOptLoss </code> - 최대 손실에 대한 거래 수익률을 기준으로 칼마 비율을 최적화합니다. </li><li><code> ProfitDrawDownHyperOptLoss </code> - 최대 이익 및 최소 손실 목표로 최적화합니다. <code> DRAWDOWN_MULT </code> 변수는 손실 목적에 대해 더 엄격하거나 유연하게 조정할 수 있습니다. </li><li><code> MultiMetricHyperOptLoss </code> - 여러 주요 지표를 통해 균형 잡힌 성능을 달성하기 위해 최적화합니다. 주요 초점은 이익 극대화 및 손실 최소화에 있으며, 추가 지표인 이익 비율, 기대 비율 및 승률도 고려합니다. 또한 거래 수가 적은 에포크에 대한 페널티를 적용하여 적절한 거래 빈도를 가진 전략을 장려합니다. </li></ul>`,73)),n("p",null,[s[9]||(s[9]=a(" 사용자 정의 손실 함수 생성은 문서의 ")),l(p,{to:"advanced-hyperopt"},{default:e(()=>s[8]||(s[8]=[a(" 고급 하이퍼옵트 ")])),_:1}),s[10]||(s[10]=a(" 섹션에서 다룹니다. "))]),s[55]||(s[55]=c(`<h2 id="execute-hyperopt"> 하이퍼옵트 실행 <a class="headerlink" href="#execute-hyperopt" title="영구 링크"> ¶ </a></h2><p>하이퍼옵트 구성을 업데이트한 후 실행할 수 있습니다. 하이퍼옵트는 최적의 매개변수를 찾기 위해 많은 조합을 시도하므로 좋은 결과를 얻기 위해 시간이 걸립니다.</p><p> 연결 손실을 방지하기 위해 <code> screen </code> 또는 <code> tmux </code> 를 사용하는 것을 강력히 권장합니다. </p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>hyperopt<span class="w"> </span>--config<span class="w"> </span>config.json<span class="w"> </span>--hyperopt-loss<span class="w"> </span>&lt;hyperoptlossname&gt;<span class="w"> </span>--strategy<span class="w"> </span>&lt;strategyname&gt;<span class="w"> </span>-e<span class="w"> </span><span class="m">500</span><span class="w"> </span>--spaces<span class="w"> </span>all
</code></pre></div><p><code> -e </code> 옵션은 하이퍼옵트가 몇 번 평가할지를 설정합니다. 하이퍼옵트는 베이지안 검색을 사용하므로 한 번에 너무 많은 에포크를 실행하면 더 나은 결과를 얻지 못할 수 있습니다. 경험에 따르면 500-1000 에포크 이후에는 최상의 결과가 크게 개선되지 않는 경우가 많습니다. <br> 몇 천 에포크와 다른 랜덤 상태로 여러 번 실행하면 대부분 다른 결과를 얻을 수 있습니다. </p><p><code> --spaces all </code> 옵션은 가능한 모든 매개변수를 최적화해야 함을 나타냅니다. 가능한 값은 아래에 나열되어 있습니다. </p><div class="admonition note"><p class="admonition-title">참고</p><p> 하이퍼옵트는 하이퍼옵트 시작 시간의 타임스탬프로 하이퍼옵트 결과를 저장합니다. 읽기 명령( <code> hyperopt-list </code> , <code> hyperopt-show </code> )는 <code> --hyperopt-filename &lt;filename&gt; </code> 을 사용하여 이전 하이퍼옵트 결과를 읽고 표시할 수 있습니다. 하이퍼옵트 결과 파일 목록은 <code> ls -l user_data/hyperopt_results/ </code> 명령으로 찾을 수 있습니다. </p></div><h3 id="execute-hyperopt-with-different-historical-data-source"> 다른 과거 데이터 소스를 사용하여 하이퍼옵트 실행 <a class="headerlink" href="#execute-hyperopt-with-different-historical-data-source" title="영구 링크"> ¶ </a></h3><p> 디스크에 있는 대체 과거 데이터 세트를 사용하여 매개변수를 하이퍼옵트하려면 <code> --datadir PATH </code> 옵션을 사용하세요. 기본적으로 하이퍼옵트는 <code> user_data/data </code> 디렉토리의 데이터를 사용합니다. </p><h3 id="running-hyperopt-with-a-smaller-test-set"> 더 작은 테스트 세트로 하이퍼옵트 실행 <a class="headerlink" href="#running-hyperopt-with-a-smaller-test-set" title="영구 링크"> ¶ </a></h3><p><code> --timerange </code> 인수를 사용하여 사용하려는 테스트 세트의 양을 변경할 수 있습니다. 예를 들어, 한 달의 데이터를 사용하려면 하이퍼옵트 호출에 <code> --timerange 20210101-20210201 </code> (2021년 1월부터 2021년 2월까지)를 전달합니다. </p><p>전체 명령:</p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>hyperopt<span class="w"> </span>--strategy<span class="w"> </span>&lt;strategyname&gt;<span class="w"> </span>--timerange<span class="w"> </span><span class="m">20210101</span>-20210201
</code></pre></div><h3 id="running-hyperopt-with-smaller-search-space"> 더 작은 검색 공간으로 하이퍼옵트 실행 <a class="headerlink" href="#running-hyperopt-with-smaller-search-space" title="영구 링크"> ¶ </a></h3><p><code> --spaces </code> 옵션을 사용하여 하이퍼옵트에서 사용되는 검색 공간을 제한할 수 있습니다. 하이퍼옵트가 모든 것을 최적화하도록 하면 검색 공간이 매우 커집니다. 종종 초기 매수 알고리즘만 검색하는 것이 더 합리적일 수 있습니다. 또는 새로운 매수 전략에 대해 손절매 또는 ROI 테이블만 최적화하고 싶을 수도 있습니다. </p><p>유효한 값은 다음과 같습니다:</p><ul><li><code> all </code> : 모든 것을 최적화 </li><li><code> buy </code> : 새로운 매수 전략만 검색 </li><li><code> sell </code> : 새로운 매도 전략만 검색 </li><li><code> roi </code> : 전략의 최소 이익 테이블만 최적화 </li><li><code> stoploss </code> : 최적의 손절매 값을 검색 </li><li><code> trailing </code> : 최적의 트레일링 스탑 값을 검색 </li><li><code> trades </code> : 최적의 최대 오픈 거래 값을 검색 </li><li><code> protection </code> : 최적의 보호 매개변수를 검색(올바르게 정의하는 방법은 <a href="#optimizing-protections"> 보호 섹션 </a> 을 참조하세요) </li><li><code> default </code> : <code> all </code> 에서 <code> trailing </code> 및 <code> protection </code> 을 제외한 모든 것 </li><li> 위 값 중 하나 이상의 공백으로 구분된 목록 예: <code> --spaces roi stoploss </code></li></ul><p> 기본 하이퍼옵트 검색 공간은 <code> --space </code> 명령줄 옵션이 지정되지 않은 경우 사용되며, <code> trailing </code> 하이퍼스페이스를 포함하지 않습니다. 다른 하이퍼스페이스에 대한 최적의 매개변수를 찾고 검증하여 사용자 정의 전략에 붙여넣은 후 <code> trailing </code> 하이퍼스페이스에 대한 최적화를 별도로 실행하는 것이 좋습니다. </p><h2 id="understand-the-hyperopt-result"> 하이퍼옵트 결과 이해 <a class="headerlink" href="#understand-the-hyperopt-result" title="영구 링크"> ¶ </a></h2><p>하이퍼옵트가 완료되면 결과를 사용하여 전략을 업데이트할 수 있습니다. 다음과 같은 하이퍼옵트 결과가 주어졌을 때:</p><div class="highlight"><pre><code>Best result:

    44/100:    135 trades. Avg profit  0.57%. Total profit  0.03871918 BTC (0.7722%). Avg duration 180.4 mins. Objective: 1.94367

    # Buy hyperspace params:
    buy_params = {
        &#39;buy_adx&#39;: 44,
        &#39;buy_rsi&#39;: 29,
        &#39;buy_adx_enabled&#39;: False,
        &#39;buy_rsi_enabled&#39;: True,
        &#39;buy_trigger&#39;: &#39;bb_lower&#39;
    }
</code></pre></div><p>이 결과를 다음과 같이 이해해야 합니다:</p><ul><li> 가장 잘 작동한 매수 트리거는 <code> bb_lower </code> 입니다. </li><li> ADX를 사용하지 않아야 합니다. <code> &#39;buy_adx_enabled&#39;: False </code> . </li><li> RSI 지표를 사용하는 것을 <strong> 고려해야 합니다 </strong> ( <code> &#39;buy_rsi_enabled&#39;: True </code> ) 및 최적의 값은 <code> 29.0 </code> ( <code> &#39;buy_rsi&#39;: 29.0 </code> )입니다. </li></ul><h3 id="automatic-parameter-application-to-the-strategy"> 전략에 매개변수 자동 적용 <a class="headerlink" href="#automatic-parameter-application-to-the-strategy" title="영구 링크"> ¶ </a></h3><p> 하이퍼옵트 가능한 매개변수를 사용할 때 하이퍼옵트 실행 결과는 전략 옆의 json 파일에 기록됩니다(따라서 <code> MyAwesomeStrategy.py </code> 의 경우 파일은 <code> MyAwesomeStrategy.json </code> 이 됩니다). <br> 이 파일은 <code> hyperopt-show </code> 하위 명령을 사용할 때도 업데이트되며, <code> --disable-param-export </code> 가 두 명령 중 하나에 제공되지 않는 한 업데이트됩니다. </p><p>전략 클래스는 이러한 결과를 명시적으로 포함할 수도 있습니다. 하이퍼옵트 결과 블록을 복사하여 클래스 수준에 붙여넣고, 이전 매개변수를 대체합니다(있는 경우). 다음 번에 전략이 실행될 때 자동으로 새로운 매개변수가 로드됩니다.</p><p>전체 하이퍼옵트 결과를 전략에 전송하는 것은 다음과 같이 보일 것입니다:</p><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">MyAwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="c1"># Buy hyperspace params:</span>
    <span class="n">buy_params</span> <span class="o">=</span> <span class="p">{</span>
        <span class="s1">&#39;buy_adx&#39;</span><span class="p">:</span> <span class="mi">44</span><span class="p">,</span>
        <span class="s1">&#39;buy_rsi&#39;</span><span class="p">:</span> <span class="mi">29</span><span class="p">,</span>
        <span class="s1">&#39;buy_adx_enabled&#39;</span><span class="p">:</span> <span class="kc">False</span><span class="p">,</span>
        <span class="s1">&#39;buy_rsi_enabled&#39;</span><span class="p">:</span> <span class="kc">True</span><span class="p">,</span>
        <span class="s1">&#39;buy_trigger&#39;</span><span class="p">:</span> <span class="s1">&#39;bb_lower&#39;</span>
    <span class="p">}</span>
</code></pre></div><div class="admonition note"><p class="admonition-title">참고</p><p> 구성 파일의 값은 매개변수 파일 수준의 매개변수를 덮어쓰며, 둘 다 전략 내의 매개변수를 덮어씁니다. 우선 순위는 다음과 같습니다: config &gt; parameter file &gt; strategy <code> *_params </code> &gt; parameter default </p></div><h3 id="understand-hyperopt-roi-results"> 하이퍼옵트 ROI 결과 이해 <a class="headerlink" href="#understand-hyperopt-roi-results" title="영구 링크"> ¶ </a></h3><p>ROI를 최적화하는 경우(즉, 최적화 검색 공간에 &#39;all&#39;, &#39;default&#39; 또는 &#39;roi&#39;가 포함된 경우) 결과는 다음과 같으며 ROI 테이블을 포함합니다:</p><div class="highlight"><pre><code>Best result:

    44/100:    135 trades. Avg profit  0.57%. Total profit  0.03871918 BTC (0.7722%). Avg duration 180.4 mins. Objective: 1.94367

    # ROI table:
    minimal_roi = {
        0: 0.10674,
        21: 0.09158,
        78: 0.03634,
        118: 0
    }
</code></pre></div><p> 하이퍼옵트가 찾은 최적의 ROI 테이블을 백테스팅 및 라이브 거래/드라이런에 사용하려면 사용자 정의 전략의 <code> minimal_roi </code> 속성 값으로 복사하여 붙여넣습니다: </p><div class="highlight"><pre><code>    # Minimal ROI designed for the strategy.
    # This attribute will be overridden if the config file contains &quot;minimal_roi&quot;
    minimal_roi = {
        0: 0.10674,
        21: 0.09158,
        78: 0.03634,
        118: 0
    }
</code></pre></div><p> 주석에 명시된 대로, 구성 파일의 <code> minimal_roi </code> 설정 값으로도 사용할 수 있습니다. </p><h4 id="default-roi-search-space"> 기본 ROI 검색 공간 <a class="headerlink" href="#default-roi-search-space" title="영구 링크"> ¶ </a></h4><p>ROI를 최적화하는 경우 Freqtrade는 ROI 테이블의 구성 요소에 대한 &#39;roi&#39; 최적화 하이퍼스페이스를 생성합니다. 기본적으로 Freqtrade가 생성하는 각 ROI 테이블은 4개의 행(단계)으로 구성됩니다. 하이퍼옵트는 사용된 시간 프레임에 따라 ROI 단계의 값 범위를 조정하는 적응형 범위를 구현합니다. 기본적으로 값은 다음 범위에서 다릅니다(가장 많이 사용되는 시간 프레임 중 일부에 대해 값은 소수점 이하 3자리로 반올림됨):</p><table><thead><tr><th># 단계</th><th>1m</th><th></th><th>5m</th><th></th><th>1h</th><th></th><th>1d</th><th></th></tr></thead><tbody><tr><td>1</td><td>0</td><td>0.011...0.119</td><td>0</td><td>0.03...0.31</td><td>0</td><td>0.068...0.711</td><td>0</td><td>0.121...1.258</td></tr><tr><td>2</td><td>2...8</td><td>0.007...0.042</td><td>10...40</td><td>0.02...0.11</td><td>120...480</td><td>0.045...0.252</td><td>2880...11520</td><td>0.081...0.446</td></tr><tr><td>3</td><td>4...20</td><td>0.003...0.015</td><td>20...100</td><td>0.01...0.04</td><td>240...1200</td><td>0.022...0.091</td><td>5760...28800</td><td>0.040...0.162</td></tr><tr><td>4</td><td>6...44</td><td>0.0</td><td>30...220</td><td>0.0</td><td>360...2640</td><td>0.0</td><td>8640...63360</td><td>0.0</td></tr></tbody></table><p>이러한 범위는 대부분의 경우 충분합니다. 단계의 분(min)은 사용된 시간 프레임에 따라 선형적으로 조정됩니다. 단계의 ROI 값은 사용된 시간 프레임에 따라 로그 스케일로 조정됩니다.</p><p> 사용자 정의 하이퍼옵트에 <code> generate_roi_table() </code> 및 <code> roi_space() </code> 메서드가 있는 경우, 이러한 적응형 ROI 테이블과 Freqtrade가 기본적으로 생성한 ROI 하이퍼옵티마이제이션 공간을 활용하려면 이를 제거하세요. </p><p> ROI 테이블의 구성 요소가 다른 범위에서 다르기를 원하면 <code> roi_space() </code> 메서드를 재정의하세요. ROI 테이블의 구조가 다르거나 다른 행(단계) 수가 필요한 경우 <code> generate_roi_table() </code> 및 <code> roi_space() </code> 메서드를 재정의하고 하이퍼옵티마이제이션 중에 ROI 테이블을 생성하는 사용자 정의 접근 방식을 구현하세요. </p>`,41)),n("p",null,[s[12]||(s[12]=a(" 이러한 메서드의 샘플은 ")),l(p,{to:"advanced-hyperopt"},{default:e(()=>s[11]||(s[11]=[a(" 사전 정의된 공간 재정의 섹션 ")])),_:1}),s[13]||(s[13]=a(" 에서 찾을 수 있습니다. "))]),n("div",d,[s[17]||(s[17]=n("p",{class:"admonition-title"},"검색 공간 축소",-1)),n("p",null,[s[15]||(s[15]=a(" 검색 공간을 더 제한하기 위해 소수점은 소수점 이하 3자리로 제한됩니다(정밀도 0.001). 이는 일반적으로 충분하며, 이보다 더 정밀한 값은 일반적으로 과적합된 결과를 초래합니다. 그러나 필요에 따라 ")),l(p,{to:"advanced-hyperopt"},{default:e(()=>s[14]||(s[14]=[a(" 사전 정의된 공간 재정의 ")])),_:1}),s[16]||(s[16]=a(" 를 통해 이를 변경할 수 있습니다. "))])]),s[56]||(s[56]=c(`<h3 id="understand-hyperopt-stoploss-results"> 하이퍼옵트 손절매 결과 이해 <a class="headerlink" href="#understand-hyperopt-stoploss-results" title="영구 링크"> ¶ </a></h3><p>손절매 값을 최적화하는 경우(즉, 최적화 검색 공간에 &#39;all&#39;, &#39;default&#39; 또는 &#39;stoploss&#39;가 포함된 경우) 결과는 다음과 같으며 손절매를 포함합니다:</p><div class="highlight"><pre><code>Best result:

    44/100:    135 trades. Avg profit  0.57%. Total profit  0.03871918 BTC (0.7722%). Avg duration 180.4 mins. Objective: 1.94367

    # Buy hyperspace params:
    buy_params = {
        &#39;buy_adx&#39;: 44,
        &#39;buy_rsi&#39;: 29,
        &#39;buy_adx_enabled&#39;: False,
        &#39;buy_rsi_enabled&#39;: True,
        &#39;buy_trigger&#39;: &#39;bb_lower&#39;
    }

    stoploss: -0.27996
</code></pre></div><p> 하이퍼옵트가 찾은 최적의 손절매 값을 백테스팅 및 라이브 거래/드라이런에 사용하려면 사용자 정의 전략의 <code> stoploss </code> 속성 값으로 복사하여 붙여넣습니다: </p><div class="highlight"><pre><code>    <span class="c1"># Optimal stoploss designed for the strategy</span>
    <span class="c1"># This attribute will be overridden if the config file contains &quot;stoploss&quot;</span>
    <span class="n">stoploss</span> <span class="o">=</span> <span class="o">-</span><span class="mf">0.27996</span>
</code></pre></div><p> 주석에 명시된 대로, 구성 파일의 <code> stoploss </code> 설정 값으로도 사용할 수 있습니다. </p><h4 id="default-stoploss-search-space"> 기본 손절매 검색 공간 <a class="headerlink" href="#default-stoploss-search-space" title="영구 링크"> ¶ </a></h4><p>손절매 값을 최적화하는 경우 Freqtrade는 &#39;stoploss&#39; 최적화 하이퍼스페이스를 생성합니다. 기본적으로 해당 하이퍼스페이스의 손절매 값은 -0.35...-0.02 범위에서 다르며, 대부분의 경우 충분합니다.</p><p> 사용자 정의 하이퍼옵트 파일에 <code> stoploss_space() </code> 메서드가 있는 경우, Freqtrade가 기본적으로 생성한 손절매 하이퍼옵티마이제이션 공간을 활용하려면 이를 제거하세요. </p>`,9)),n("p",null,[s[19]||(s[19]=a(" 손절매 값이 하이퍼옵티마이제이션 중에 다른 범위에서 다르기를 원하면 ")),s[20]||(s[20]=n("code",null," stoploss_space() ",-1)),s[21]||(s[21]=a(" 메서드를 재정의하고 원하는 범위를 정의하세요. 이 메서드의 샘플은 ")),l(p,{to:"advanced-hyperopt"},{default:e(()=>s[18]||(s[18]=[a(" 사전 정의된 공간 재정의 섹션 ")])),_:1}),s[22]||(s[22]=a(" 에서 찾을 수 있습니다. "))]),n("div",m,[s[26]||(s[26]=n("p",{class:"admonition-title"},"검색 공간 축소",-1)),n("p",null,[s[24]||(s[24]=a(" 검색 공간을 더 제한하기 위해 소수점은 소수점 이하 3자리로 제한됩니다(정밀도 0.001). 이는 일반적으로 충분하며, 이보다 더 정밀한 값은 일반적으로 과적합된 결과를 초래합니다. 그러나 필요에 따라 ")),l(p,{to:"advanced-hyperopt"},{default:e(()=>s[23]||(s[23]=[a(" 사전 정의된 공간 재정의 ")])),_:1}),s[25]||(s[25]=a(" 를 통해 이를 변경할 수 있습니다. "))])]),s[57]||(s[57]=c(`<h3 id="understand-hyperopt-trailing-stop-results"> 하이퍼옵트 트레일링 스탑 결과 이해 <a class="headerlink" href="#understand-hyperopt-trailing-stop-results" title="영구 링크"> ¶ </a></h3><p>트레일링 스탑 값을 최적화하는 경우(즉, 최적화 검색 공간에 &#39;all&#39; 또는 &#39;trailing&#39;이 포함된 경우) 결과는 다음과 같으며 트레일링 스탑 매개변수를 포함합니다:</p><div class="highlight"><pre><code>Best result:

    45/100:    606 trades. Avg profit  1.04%. Total profit  0.31555614 BTC ( 630.48%). Avg duration 150.3 mins. Objective: -1.10161

    # Trailing stop:
    trailing_stop = True
    trailing_stop_positive = 0.02001
    trailing_stop_positive_offset = 0.06038
    trailing_only_offset_is_reached = True
</code></pre></div><p>하이퍼옵트가 찾은 최적의 트레일링 스탑 매개변수를 백테스팅 및 라이브 거래/드라이런에 사용하려면 사용자 정의 전략의 해당 속성 값으로 복사하여 붙여넣습니다:</p><div class="highlight"><pre><code>    <span class="c1"># Trailing stop</span>
    <span class="c1"># These attributes will be overridden if the config file contains corresponding values.</span>
    <span class="n">trailing_stop</span> <span class="o">=</span> <span class="kc">True</span>
    <span class="n">trailing_stop_positive</span> <span class="o">=</span> <span class="mf">0.02001</span>
    <span class="n">trailing_stop_positive_offset</span> <span class="o">=</span> <span class="mf">0.06038</span>
    <span class="n">trailing_only_offset_is_reached</span> <span class="o">=</span> <span class="kc">True</span>
</code></pre></div><p>주석에 명시된 대로, 구성 파일의 해당 설정 값으로도 사용할 수 있습니다.</p><h4 id="default-trailing-stop-search-space"> 기본 트레일링 스탑 검색 공간 <a class="headerlink" href="#default-trailing-stop-search-space" title="영구 링크"> ¶ </a></h4><p> 트레일링 스탑 값을 최적화하는 경우 Freqtrade는 &#39;trailing&#39; 최적화 하이퍼스페이스를 생성합니다. 기본적으로 해당 하이퍼스페이스에서 <code> trailing_stop </code> 매개변수는 항상 True로 설정되며, <code> trailing_only_offset_is_reached </code> 값은 True와 False 사이에서 다르며, <code> trailing_stop_positive </code> 및 <code> trailing_stop_positive_offset </code> 매개변수 값은 각각 0.02...0.35 및 0.01...0.1 범위에서 다릅니다. 이는 대부분의 경우 충분합니다. </p>`,8)),n("p",null,[s[28]||(s[28]=a(" 트레일링 스탑 매개변수 값이 하이퍼옵티마이제이션 중에 다른 범위에서 다르기를 원하면 ")),s[29]||(s[29]=n("code",null," trailing_space() ",-1)),s[30]||(s[30]=a(" 메서드를 재정의하고 원하는 범위를 정의하세요. 이 메서드의 샘플은 ")),l(p,{to:"advanced-hyperopt"},{default:e(()=>s[27]||(s[27]=[a(" 사전 정의된 공간 재정의 섹션 ")])),_:1}),s[31]||(s[31]=a(" 에서 찾을 수 있습니다. "))]),n("div",u,[s[35]||(s[35]=n("p",{class:"admonition-title"},"검색 공간 축소",-1)),n("p",null,[s[33]||(s[33]=a(" 검색 공간을 더 제한하기 위해 소수점은 소수점 이하 3자리로 제한됩니다(정밀도 0.001). 이는 일반적으로 충분하며, 이보다 더 정밀한 값은 일반적으로 과적합된 결과를 초래합니다. 그러나 필요에 따라 ")),l(p,{to:"advanced-hyperopt"},{default:e(()=>s[32]||(s[32]=[a(" 사전 정의된 공간 재정의 ")])),_:1}),s[34]||(s[34]=a(" 를 통해 이를 변경할 수 있습니다. "))])]),s[58]||(s[58]=c(`<h3 id="reproducible-results"> 재현 가능한 결과 <a class="headerlink" href="#reproducible-results" title="영구 링크"> ¶ </a></h3><p> 최적의 매개변수를 찾기 위한 검색은 하이퍼스페이스의 몇 가지(현재 30개) 랜덤 조합으로 시작됩니다. 이러한 랜덤 하이퍼옵트 에포크는 하이퍼옵트 출력의 첫 번째 열에 별표 문자( <code> * </code> )로 표시됩니다. </p><p> 이러한 랜덤 값 생성을 위한 초기 상태(랜덤 상태)는 <code> --random-state </code> 명령줄 옵션의 값에 의해 제어됩니다. 재현 가능한 결과를 얻기 위해 임의의 값을 설정할 수 있습니다. </p><p> 이 값을 명시적으로 명령줄 옵션에 설정하지 않은 경우, 하이퍼옵트는 랜덤 상태를 임의의 값으로 시드합니다. 각 하이퍼옵트 실행의 랜덤 상태 값은 로그에 표시되므로, 이를 복사하여 <code> --random-state </code> 명령줄 옵션에 붙여넣어 초기 랜덤 에포크 세트를 반복할 수 있습니다. </p><p>명령줄 옵션, 구성, 타임레인지, 전략 및 하이퍼옵트 클래스, 과거 데이터 및 손실 함수를 변경하지 않은 경우, 동일한 랜덤 상태 값을 사용하여 동일한 하이퍼옵티마이제이션 결과를 얻어야 합니다.</p><h2 id="output-formatting"> 출력 형식 <a class="headerlink" href="#output-formatting" title="영구 링크"> ¶ </a></h2><p> 기본적으로 하이퍼옵트는 색상화된 결과를 출력합니다. 양의 이익이 있는 에포크는 녹색으로 출력됩니다. 이 강조 표시를 통해 나중에 분석할 수 있는 흥미로운 에포크를 찾을 수 있습니다. 총 이익이 0이거나 음수인 에포크(손실)는 일반 색상으로 출력됩니다. 결과의 색상화를 원하지 않는 경우(예: 하이퍼옵트 출력을 파일로 리디렉션하는 경우) 명령줄에서 <code> --no-color </code> 옵션을 지정하여 색상화를 끌 수 있습니다. </p><p> 하이퍼옵트 출력에서 모든 결과를 보고 싶다면 <code> --print-all </code> 명령줄 옵션을 사용할 수 있습니다. <code> --print-all </code> 이 사용되면 현재 최상의 결과도 기본적으로 색상화됩니다. 이는 굵은(밝은) 스타일로 출력됩니다. 이는 <code> --no-color </code> 명령줄 옵션으로도 끌 수 있습니다. </p><div class="admonition note"><p class="admonition-title">Windows와 색상 출력</p><p>Windows는 기본적으로 색상 출력을 지원하지 않으므로 자동으로 비활성화됩니다. Windows에서 하이퍼옵트 실행 시 색상 출력을 원한다면 WSL을 사용하는 것을 고려하세요.</p></div><h2 id="position-stacking-and-disabling-max-market-positions"> 포지션 스태킹 및 최대 시장 포지션 비활성화 <a class="headerlink" href="#position-stacking-and-disabling-max-market-positions" title="영구 링크"> ¶ </a></h2><p> 일부 상황에서는 <code> --eps </code> / <code> --enable-position-stacking </code> 인수로 하이퍼옵트(및 백테스팅)를 실행해야 하거나, <code> max_open_trades </code> 를 매우 높은 값으로 설정하여 오픈 거래 수에 대한 제한을 비활성화해야 할 수 있습니다. </p><p> 기본적으로 하이퍼옵트는 Freqtrade 라이브 실행/드라이런의 동작을 에뮬레이트하며, 여기서 각 쌍에 대해 하나의 오픈 거래만 허용됩니다. 모든 쌍에 대한 총 오픈 거래 수는 <code> max_open_trades </code> 설정에 의해 제한됩니다. 하이퍼옵트/백테스팅 중에는 이미 오픈된 거래로 인해 잠재적인 거래가 숨겨질(또는 마스킹될) 수 있습니다. </p><p><code> --eps </code> / <code> --enable-position-stacking </code> 인수는 동일한 쌍을 여러 번 구매하는 것을 에뮬레이트할 수 있습니다. <code> --max-open-trades </code> 를 매우 높은 값으로 설정하면 오픈 거래 수에 대한 제한이 비활성화됩니다. </p><div class="admonition note"><p class="admonition-title">참고</p><p>드라이/라이브 실행은 포지션 스태킹을 사용하지 않으므로, 현실에 더 가까운 전략을 검증하는 것이 합리적입니다.</p></div><p> 구성 파일에서 <code> &quot;position_stacking&quot;=true </code> 를 명시적으로 설정하여 포지션 스태킹을 활성화할 수도 있습니다. </p><h2 id="out-of-memory-errors"> 메모리 부족 오류 <a class="headerlink" href="#out-of-memory-errors" title="영구 링크"> ¶ </a></h2><p>하이퍼옵트는 많은 메모리를 소비하므로(전체 데이터가 병렬 백테스팅 프로세스당 한 번 메모리에 있어야 함), &quot;메모리 부족&quot; 오류가 발생할 가능성이 있습니다. 이를 해결하기 위해 여러 가지 옵션이 있습니다:</p><ul><li>쌍의 수를 줄입니다.</li><li> 사용된 타임레인지를 줄입니다( <code> --timerange &lt;timerange&gt; </code> ). </li><li><code> --timeframe-detail </code> 사용을 피합니다(이는 메모리에 많은 추가 데이터를 로드합니다). </li><li> 병렬 프로세스 수를 줄입니다( <code> -j &lt;n&gt; </code> ). </li><li>기계의 메모리를 늘립니다.</li><li> 많은 매개변수와 함께 <code> .range </code> 기능을 사용하는 경우 <code> --analyze-per-epoch </code> 를 사용합니다. </li></ul><h2 id="the-objective-has-been-evaluated-at-this-point-before"> 이 지점에서 목표가 이전에 평가되었습니다. <a class="headerlink" href="#the-objective-has-been-evaluated-at-this-point-before" title="영구 링크"> ¶ </a></h2><p><code> The objective has been evaluated at this point before. </code> 를 보면 검색 공간이 소진되었거나 거의 소진된 것입니다. 기본적으로 공간의 모든 지점이 도달했거나 로컬 최소값에 도달했으며, 하이퍼옵트는 아직 시도하지 않은 다차원 공간의 지점을 더 이상 찾지 못합니다. Freqtrade는 이 경우 새로운 무작위 지점을 사용하여 &quot;로컬 최소값&quot; 문제를 해결하려고 합니다. </p><p>예:</p><div class="highlight"><pre><code><span class="n">buy_ema_short</span> <span class="o">=</span> <span class="n">IntParameter</span><span class="p">(</span><span class="mi">5</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="n">default</span><span class="o">=</span><span class="mi">10</span><span class="p">,</span> <span class="n">space</span><span class="o">=</span><span class="s2">&quot;buy&quot;</span><span class="p">,</span> <span class="n">optimize</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="c1"># This is the only parameter in the buy space</span>
</code></pre></div><p><code> buy_ema_short </code> 공간에는 15개의 가능한 값( <code> 5, 6, ... 19, 20 </code> )이 있습니다. 이제 매수 공간에 대해 하이퍼옵트를 실행하면 하이퍼옵트는 시도할 15개의 값만 있습니다. 따라서 에포크를 가능한 값에 맞추어야 하며, 많은 <code> The objective has been evaluated at this point before. </code> 경고가 발생하면 실행을 중단할 준비를 해야 합니다. </p><h2 id="show-details-of-hyperopt-results"> 하이퍼옵트 결과의 세부 정보 표시 <a class="headerlink" href="#show-details-of-hyperopt-results" title="영구 링크"> ¶ </a></h2>`,24)),n("p",null,[s[37]||(s[37]=a(" 원하는 에포크 수에 대해 하이퍼옵트를 실행한 후, 나중에 모든 결과를 나열하고, 최상의 결과나 이익이 있는 결과만 선택하고, 이전에 평가된 에포크의 세부 정보를 표시할 수 있습니다. 이는 ")),s[38]||(s[38]=n("code",null," hyperopt-list ",-1)),s[39]||(s[39]=a(" 및 ")),s[40]||(s[40]=n("code",null," hyperopt-show ",-1)),s[41]||(s[41]=a(" 하위 명령을 사용하여 수행할 수 있습니다. 이러한 하위 명령의 사용법은 문서의 ")),l(p,{to:"utils"},{default:e(()=>s[36]||(s[36]=[a(" 유틸리티 ")])),_:1}),s[42]||(s[42]=a(" 장에서 설명합니다. "))]),s[59]||(s[59]=c(`<h2 id="output-debug-messages-from-your-strategy"> 전략에서 디버그 메시지 출력 <a class="headerlink" href="#output-debug-messages-from-your-strategy" title="영구 링크"> ¶ </a></h2><p> 전략에서 디버그 메시지를 출력하려면 <code> logging </code> 모듈을 사용할 수 있습니다. 기본적으로 Freqtrade는 <code> INFO </code> 이상의 레벨의 모든 메시지를 출력합니다. </p><div class="highlight"><pre><code><span class="kn">import</span><span class="w"> </span><span class="nn">logging</span>


<span class="n">logger</span> <span class="o">=</span> <span class="n">logging</span><span class="o">.</span><span class="n">getLogger</span><span class="p">(</span><span class="vm">__name__</span><span class="p">)</span>


<span class="k">class</span><span class="w"> </span><span class="nc">MyAwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="o">...</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">populate_entry_trend</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
        <span class="n">logger</span><span class="o">.</span><span class="n">info</span><span class="p">(</span><span class="s2">&quot;This is a debug message&quot;</span><span class="p">)</span>
        <span class="o">...</span>
</code></pre></div><div class="admonition note"><p class="admonition-title">print 사용</p><p><code> print() </code> 를 통해 인쇄된 메시지는 병렬 처리가 비활성화되지 않는 한 하이퍼옵트 출력에 표시되지 않습니다( <code> -j 1 </code> ). <code> logging </code> 모듈을 사용하는 것이 좋습니다. </p></div><h2 id="validate-backtesting-results"> 백테스팅 결과 검증 <a class="headerlink" href="#validate-backtesting-results" title="영구 링크"> ¶ </a></h2><p>최적화된 전략을 전략에 구현한 후, 모든 것이 예상대로 작동하는지 확인하기 위해 백테스팅을 수행해야 합니다.</p><p>하이퍼옵트 중과 동일한 결과(거래 수, 거래 기간, 이익 등)를 얻으려면 백테스팅에 대해 하이퍼옵트에 사용된 동일한 구성 및 매개변수(타임레인지, 시간 프레임 등)를 사용하세요.</p><h3 id="why-do-my-backtest-results-not-match-my-hyperopt-results"> 백테스팅 결과가 하이퍼옵트 결과와 일치하지 않는 이유는 무엇인가요? <a class="headerlink" href="#why-do-my-backtest-results-not-match-my-hyperopt-results" title="영구 링크"> ¶ </a></h3><p>결과가 일치하지 않는 경우 다음 요소를 확인하세요:</p>`,9)),n("ul",null,[n("li",null,[s[44]||(s[44]=a(" 매개변수를 ")),s[45]||(s[45]=n("code",null," populate_indicators() ",-1)),s[46]||(s[46]=a(" 에 추가하여 모든 에포크에 대해 한 번만 계산되도록 했을 수 있습니다. 예를 들어 여러 SMA 기간 값을 최적화하려는 경우, 하이퍼옵트 가능한 기간 매개변수는 각 에포크마다 계산되는 ")),s[47]||(s[47]=n("code",null," populate_entry_trend() ",-1)),s[48]||(s[48]=a(" 에 배치해야 합니다. 자세한 내용은 ")),l(p,{to:"hyperopt"},{default:e(()=>s[43]||(s[43]=[a(" 지표 매개변수 최적화 ")])),_:1}),s[49]||(s[49]=a(" 를 참조하세요. "))]),s[50]||(s[50]=c("<li>하이퍼옵트 매개변수의 자동 내보내기를 JSON 매개변수 파일로 비활성화한 경우, 하이퍼옵트된 값을 전략에 올바르게 전송했는지 다시 확인하세요.</li><li>로그를 확인하여 어떤 매개변수가 설정되고 어떤 값이 사용되는지 확인하세요.</li><li> 손절매, 최대 오픈 거래 및 트레일링 스탑 매개변수에 특별히 주의하세요. 이러한 매개변수는 종종 구성 파일에 설정되어 전략 변경을 덮어씁니다. 백테스트 로그를 확인하여 구성에 의해 의도치 않게 설정된 매개변수가 없는지 확인하세요( <code> stoploss </code> , <code> max_open_trades </code> 또는 <code> trailing_stop </code> ). </li><li>매개변수 JSON 파일이 매개변수 또는 전략의 기본 하이퍼옵트 설정을 덮어쓰지 않는지 확인하세요.</li><li> 백테스팅에서 활성화된 보호가 하이퍼옵트에서도 활성화되었는지, 그 반대도 확인하세요. <code> --space protection </code> 을 사용할 때 하이퍼옵트에 대해 보호가 자동으로 활성화됩니다. </li>",5))])])}}};export{g as default};
