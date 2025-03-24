import{r as l,o as c,c as t,b as n,d as a,e,w as o,a as r}from"./index-747ab7f0.js";const i={class:"md-content__inner md-typeset"},h={__name:"StrategyAnalysisExample",setup(d){return(u,s)=>{const p=l("router-link");return c(),t("article",i,[s[3]||(s[3]=n("h1",{id:"strategy-analysis-example"},[a(" 전략 분석 예제 "),n("a",{class:"headerlink",href:"#strategy-analysis-example",title:"영구 링크"}," ¶ ")],-1)),n("p",null,[s[1]||(s[1]=a(" 전략을 디버깅하는 것은 시간이 많이 소요될 수 있습니다. Freqtrade는 원시 데이터를 시각화할 수 있는 도우미 함수를 제공합니다. 아래 내용은 SampleStrategy, Binance의 5분 타임프레임 데이터를 사용하며, 데이터를 기본 위치의 데이터 디렉토리에 다운로드했다고 가정합니다. 자세한 내용은 ")),e(p,{to:"data-download"},{default:o(()=>s[0]||(s[0]=[a("문서")])),_:1}),s[2]||(s[2]=a(" 를 참조하세요. "))]),s[4]||(s[4]=r(`<h2 id="setup"> 설정 <a class="headerlink" href="#setup" title="영구 링크"> ¶ </a></h2><h3 id="change-working-directory-to-repository-root"> 작업 디렉토리를 저장소 루트로 변경 <a class="headerlink" href="#change-working-directory-to-repository-root" title="영구 링크"> ¶ </a></h3><div class="highlight"><pre><code><span class="kn">import</span><span class="w"> </span><span class="nn">os</span>
<span class="kn">from</span><span class="w"> </span><span class="nn">pathlib</span><span class="w"> </span><span class="kn">import</span> <span class="n">Path</span>


<span class="c1"># Change directory</span>
<span class="c1"># Modify this cell to insure that the output shows the correct path.</span>
<span class="c1"># Define all paths relative to the project root shown in the cell output</span>
<span class="n">project_root</span> <span class="o">=</span> <span class="s2">&quot;somedir/freqtrade&quot;</span>
<span class="n">i</span> <span class="o">=</span> <span class="mi">0</span>
<span class="k">try</span><span class="p">:</span>
    <span class="n">os</span><span class="o">.</span><span class="n">chdir</span><span class="p">(</span><span class="n">project_root</span><span class="p">)</span>
    <span class="k">if</span> <span class="ow">not</span> <span class="n">Path</span><span class="p">(</span><span class="s2">&quot;LICENSE&quot;</span><span class="p">)</span><span class="o">.</span><span class="n">is_file</span><span class="p">():</span>
        <span class="n">i</span> <span class="o">=</span> <span class="mi">0</span>
        <span class="k">while</span> <span class="n">i</span> <span class="o">&lt;</span> <span class="mi">4</span> <span class="ow">and</span> <span class="p">(</span><span class="ow">not</span> <span class="n">Path</span><span class="p">(</span><span class="s2">&quot;LICENSE&quot;</span><span class="p">)</span><span class="o">.</span><span class="n">is_file</span><span class="p">()):</span>
            <span class="n">os</span><span class="o">.</span><span class="n">chdir</span><span class="p">(</span><span class="n">Path</span><span class="p">(</span><span class="n">Path</span><span class="o">.</span><span class="n">cwd</span><span class="p">(),</span> <span class="s2">&quot;../&quot;</span><span class="p">))</span>
            <span class="n">i</span> <span class="o">+=</span> <span class="mi">1</span>
        <span class="n">project_root</span> <span class="o">=</span> <span class="n">Path</span><span class="o">.</span><span class="n">cwd</span><span class="p">()</span>
<span class="k">except</span> <span class="ne">FileNotFoundError</span><span class="p">:</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Please define the project root relative to the current directory&quot;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">Path</span><span class="o">.</span><span class="n">cwd</span><span class="p">())</span>
</code></pre></div><h3 id="configure-freqtrade-environment"> Freqtrade 환경 구성 <a class="headerlink" href="#configure-freqtrade-environment" title="영구 링크"> ¶ </a></h3><div class="highlight"><pre><code><span class="kn">from</span><span class="w"> </span><span class="nn">freqtrade.configuration</span><span class="w"> </span><span class="kn">import</span> <span class="n">Configuration</span>


<span class="c1"># Customize these according to your needs.</span>

<span class="c1"># Initialize empty configuration object</span>
<span class="n">config</span> <span class="o">=</span> <span class="n">Configuration</span><span class="o">.</span><span class="n">from_files</span><span class="p">([])</span>
<span class="c1"># Optionally (recommended), use existing configuration file</span>
<span class="c1"># config = Configuration.from_files([&quot;user_data/config.json&quot;])</span>

<span class="c1"># Define some constants</span>
<span class="n">config</span><span class="p">[</span><span class="s2">&quot;timeframe&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="s2">&quot;5m&quot;</span>
<span class="c1"># Name of the strategy class</span>
<span class="n">config</span><span class="p">[</span><span class="s2">&quot;strategy&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="s2">&quot;SampleStrategy&quot;</span>
<span class="c1"># Location of the data</span>
<span class="n">data_location</span> <span class="o">=</span> <span class="n">config</span><span class="p">[</span><span class="s2">&quot;datadir&quot;</span><span class="p">]</span>
<span class="c1"># Pair to analyze - Only use one pair here</span>
<span class="n">pair</span> <span class="o">=</span> <span class="s2">&quot;BTC/USDT&quot;</span>
</code></pre></div><div class="highlight"><pre><code><span class="c1"># Load data using values set above</span>
<span class="kn">from</span><span class="w"> </span><span class="nn">freqtrade.data.history</span><span class="w"> </span><span class="kn">import</span> <span class="n">load_pair_history</span>
<span class="kn">from</span><span class="w"> </span><span class="nn">freqtrade.enums</span><span class="w"> </span><span class="kn">import</span> <span class="n">CandleType</span>


<span class="n">candles</span> <span class="o">=</span> <span class="n">load_pair_history</span><span class="p">(</span>
    <span class="n">datadir</span><span class="o">=</span><span class="n">data_location</span><span class="p">,</span>
    <span class="n">timeframe</span><span class="o">=</span><span class="n">config</span><span class="p">[</span><span class="s2">&quot;timeframe&quot;</span><span class="p">],</span>
    <span class="n">pair</span><span class="o">=</span><span class="n">pair</span><span class="p">,</span>
    <span class="n">data_format</span><span class="o">=</span><span class="s2">&quot;json&quot;</span><span class="p">,</span>  <span class="c1"># Make sure to update this to your data</span>
    <span class="n">candle_type</span><span class="o">=</span><span class="n">CandleType</span><span class="o">.</span><span class="n">SPOT</span><span class="p">,</span>
<span class="p">)</span>

<span class="c1"># Confirm success</span>
<span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s2">&quot;Loaded </span><span class="si">{</span><span class="nb">len</span><span class="p">(</span><span class="n">candles</span><span class="p">)</span><span class="si">}</span><span class="s2"> rows of data for </span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2"> from </span><span class="si">{</span><span class="n">data_location</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">)</span>
<span class="n">candles</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>
</code></pre></div><h2 id="load-and-run-strategy"> 전략 로드 및 실행 <a class="headerlink" href="#load-and-run-strategy" title="영구 링크"> ¶ </a></h2><ul><li>전략 파일이 변경될 때마다 다시 실행하세요.</li></ul><div class="highlight"><pre><code><span class="c1"># Load strategy using values set above</span>
<span class="kn">from</span><span class="w"> </span><span class="nn">freqtrade.data.dataprovider</span><span class="w"> </span><span class="kn">import</span> <span class="n">DataProvider</span>
<span class="kn">from</span><span class="w"> </span><span class="nn">freqtrade.resolvers</span><span class="w"> </span><span class="kn">import</span> <span class="n">StrategyResolver</span>


<span class="n">strategy</span> <span class="o">=</span> <span class="n">StrategyResolver</span><span class="o">.</span><span class="n">load_strategy</span><span class="p">(</span><span class="n">config</span><span class="p">)</span>
<span class="n">strategy</span><span class="o">.</span><span class="n">dp</span> <span class="o">=</span> <span class="n">DataProvider</span><span class="p">(</span><span class="n">config</span><span class="p">,</span> <span class="kc">None</span><span class="p">,</span> <span class="kc">None</span><span class="p">)</span>
<span class="n">strategy</span><span class="o">.</span><span class="n">ft_bot_start</span><span class="p">()</span>

<span class="c1"># Generate buy/sell signals using strategy</span>
<span class="n">df</span> <span class="o">=</span> <span class="n">strategy</span><span class="o">.</span><span class="n">analyze_ticker</span><span class="p">(</span><span class="n">candles</span><span class="p">,</span> <span class="p">{</span><span class="s2">&quot;pair&quot;</span><span class="p">:</span> <span class="n">pair</span><span class="p">})</span>
<span class="n">df</span><span class="o">.</span><span class="n">tail</span><span class="p">()</span>
</code></pre></div><h3 id="display-the-trade-details"> 거래 세부 정보 표시 <a class="headerlink" href="#display-the-trade-details" title="영구 링크"> ¶ </a></h3><ul><li><code>data.head()</code>를 사용하는 것도 가능하지만, 대부분의 지표는 데이터프레임 상단에 &quot;시작&quot; 데이터를 포함합니다.</li><li> 일부 가능한 문제 * 데이터프레임 끝에 NaN 값이 포함된 열 * 완전히 다른 단위를 사용하는 <code>crossed*()</code> 함수의 열 </li><li> 전체 백테스트와의 비교 * 하나의 페어에 대해 <code>analyze_ticker()</code>에서 200개의 매수 신호가 출력된다고 해서 백테스트 중에 200개의 거래가 이루어진다는 것을 의미하지는 않습니다. * 예를 들어, <code>df[&#39;rsi&#39;] &lt; 30</code>과 같은 하나의 조건만 매수 조건으로 사용하는 경우, 이는 연속적으로 각 페어에 대해 여러 &quot;매수&quot; 신호를 생성합니다 (rsi가 29를 초과할 때까지). 봇은 이러한 신호 중 첫 번째 신호에서만 매수하며 (또는 &quot;슬롯&quot;이 사용 가능해질 때 중간 신호에서 매수), &quot;max_open_trades&quot;가 여전히 사용 가능한 경우에만 매수합니다. </li></ul><div class="highlight"><pre><code><span class="c1"># Report results</span>
<span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s2">&quot;Generated </span><span class="si">{</span><span class="n">df</span><span class="p">[</span><span class="s1">&#39;enter_long&#39;</span><span class="p">]</span><span class="o">.</span><span class="n">sum</span><span class="p">()</span><span class="si">}</span><span class="s2"> entry signals&quot;</span><span class="p">)</span>
<span class="n">data</span> <span class="o">=</span> <span class="n">df</span><span class="o">.</span><span class="n">set_index</span><span class="p">(</span><span class="s2">&quot;date&quot;</span><span class="p">,</span> <span class="n">drop</span><span class="o">=</span><span class="kc">False</span><span class="p">)</span>
<span class="n">data</span><span class="o">.</span><span class="n">tail</span><span class="p">()</span>
</code></pre></div><h2 id="load-existing-objects-into-a-jupyter-notebook"> 기존 객체를 Jupyter Notebook에 로드 <a class="headerlink" href="#load-existing-objects-into-a-jupyter-notebook" title="영구 링크"> ¶ </a></h2><p> 다음 셀은 CLI를 사용하여 데이터를 이미 생성했다고 가정합니다. <br> 이를 통해 결과를 더 깊이 분석하고, 정보 과부하로 인해 출력이 매우 복잡해질 수 있는 분석을 수행할 수 있습니다. </p><h3 id="load-backtest-results-to-pandas-dataframe"> 백테스트 결과를 Pandas 데이터프레임으로 로드 <a class="headerlink" href="#load-backtest-results-to-pandas-dataframe" title="영구 링크"> ¶ </a></h3><p>거래 데이터프레임 분석 (아래에서 플로팅에도 사용됨)</p><div class="highlight"><pre><code><span class="kn">from</span><span class="w"> </span><span class="nn">freqtrade.data.btanalysis</span><span class="w"> </span><span class="kn">import</span> <span class="n">load_backtest_data</span><span class="p">,</span> <span class="n">load_backtest_stats</span>


<span class="c1"># if backtest_dir points to a directory, it&#39;ll automatically load the last backtest file.</span>
<span class="n">backtest_dir</span> <span class="o">=</span> <span class="n">config</span><span class="p">[</span><span class="s2">&quot;user_data_dir&quot;</span><span class="p">]</span> <span class="o">/</span> <span class="s2">&quot;backtest_results&quot;</span>
<span class="c1"># backtest_dir can also point to a specific file</span>
<span class="c1"># backtest_dir = (</span>
<span class="c1">#   config[&quot;user_data_dir&quot;] / &quot;backtest_results/backtest-result-2020-07-01_20-04-22.json&quot;</span>
<span class="c1"># )</span>
</code></pre></div><div class="highlight"><pre><code><span class="c1"># You can get the full backtest statistics by using the following command.</span>
<span class="c1"># This contains all information used to generate the backtest result.</span>
<span class="n">stats</span> <span class="o">=</span> <span class="n">load_backtest_stats</span><span class="p">(</span><span class="n">backtest_dir</span><span class="p">)</span>

<span class="n">strategy</span> <span class="o">=</span> <span class="s2">&quot;SampleStrategy&quot;</span>
<span class="c1"># All statistics are available per strategy, so if \`--strategy-list\` was used during backtest,</span>
<span class="c1"># this will be reflected here as well.</span>
<span class="c1"># Example usages:</span>
<span class="nb">print</span><span class="p">(</span><span class="n">stats</span><span class="p">[</span><span class="s2">&quot;strategy&quot;</span><span class="p">][</span><span class="n">strategy</span><span class="p">][</span><span class="s2">&quot;results_per_pair&quot;</span><span class="p">])</span>
<span class="c1"># Get pairlist used for this backtest</span>
<span class="nb">print</span><span class="p">(</span><span class="n">stats</span><span class="p">[</span><span class="s2">&quot;strategy&quot;</span><span class="p">][</span><span class="n">strategy</span><span class="p">][</span><span class="s2">&quot;pairlist&quot;</span><span class="p">])</span>
<span class="c1"># Get market change (average change of all pairs from start to end of the backtest period)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">stats</span><span class="p">[</span><span class="s2">&quot;strategy&quot;</span><span class="p">][</span><span class="n">strategy</span><span class="p">][</span><span class="s2">&quot;market_change&quot;</span><span class="p">])</span>
<span class="c1"># Maximum drawdown ()</span>
<span class="nb">print</span><span class="p">(</span><span class="n">stats</span><span class="p">[</span><span class="s2">&quot;strategy&quot;</span><span class="p">][</span><span class="n">strategy</span><span class="p">][</span><span class="s2">&quot;max_drawdown_abs&quot;</span><span class="p">])</span>
<span class="c1"># Maximum drawdown start and end</span>
<span class="nb">print</span><span class="p">(</span><span class="n">stats</span><span class="p">[</span><span class="s2">&quot;strategy&quot;</span><span class="p">][</span><span class="n">strategy</span><span class="p">][</span><span class="s2">&quot;drawdown_start&quot;</span><span class="p">])</span>
<span class="nb">print</span><span class="p">(</span><span class="n">stats</span><span class="p">[</span><span class="s2">&quot;strategy&quot;</span><span class="p">][</span><span class="n">strategy</span><span class="p">][</span><span class="s2">&quot;drawdown_end&quot;</span><span class="p">])</span>


<span class="c1"># Get strategy comparison (only relevant if multiple strategies were compared)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">stats</span><span class="p">[</span><span class="s2">&quot;strategy_comparison&quot;</span><span class="p">])</span>
</code></pre></div><div class="highlight"><pre><code><span class="c1"># Load backtested trades as dataframe</span>
<span class="n">trades</span> <span class="o">=</span> <span class="n">load_backtest_data</span><span class="p">(</span><span class="n">backtest_dir</span><span class="p">)</span>

<span class="c1"># Show value-counts per pair</span>
<span class="n">trades</span><span class="o">.</span><span class="n">groupby</span><span class="p">(</span><span class="s2">&quot;pair&quot;</span><span class="p">)[</span><span class="s2">&quot;exit_reason&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">value_counts</span><span class="p">()</span>
</code></pre></div><h2 id="plotting-daily-profit-equity-line"> 일일 수익 / 자산 라인 플로팅 <a class="headerlink" href="#plotting-daily-profit-equity-line" title="영구 링크"> ¶ </a></h2><div class="highlight"><pre><code><span class="c1"># Plotting equity line (starting with 0 on day 1 and adding daily profit for each backtested day)</span>

<span class="kn">import</span><span class="w"> </span><span class="nn">pandas</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">pd</span>
<span class="kn">import</span><span class="w"> </span><span class="nn">plotly.express</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">px</span>

<span class="kn">from</span><span class="w"> </span><span class="nn">freqtrade.configuration</span><span class="w"> </span><span class="kn">import</span> <span class="n">Configuration</span>
<span class="kn">from</span><span class="w"> </span><span class="nn">freqtrade.data.btanalysis</span><span class="w"> </span><span class="kn">import</span> <span class="n">load_backtest_stats</span>


<span class="c1"># strategy = &#39;SampleStrategy&#39;</span>
<span class="c1"># config = Configuration.from_files([&quot;user_data/config.json&quot;])</span>
<span class="c1"># backtest_dir = config[&quot;user_data_dir&quot;] / &quot;backtest_results&quot;</span>

<span class="n">stats</span> <span class="o">=</span> <span class="n">load_backtest_stats</span><span class="p">(</span><span class="n">backtest_dir</span><span class="p">)</span>
<span class="n">strategy_stats</span> <span class="o">=</span> <span class="n">stats</span><span class="p">[</span><span class="s2">&quot;strategy&quot;</span><span class="p">][</span><span class="n">strategy</span><span class="p">]</span>

<span class="n">df</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">columns</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;dates&quot;</span><span class="p">,</span> <span class="s2">&quot;equity&quot;</span><span class="p">],</span> <span class="n">data</span><span class="o">=</span><span class="n">strategy_stats</span><span class="p">[</span><span class="s2">&quot;daily_profit&quot;</span><span class="p">])</span>
<span class="n">df</span><span class="p">[</span><span class="s2">&quot;equity_daily&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">df</span><span class="p">[</span><span class="s2">&quot;equity&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">cumsum</span><span class="p">()</span>

<span class="n">fig</span> <span class="o">=</span> <span class="n">px</span><span class="o">.</span><span class="n">line</span><span class="p">(</span><span class="n">df</span><span class="p">,</span> <span class="n">x</span><span class="o">=</span><span class="s2">&quot;dates&quot;</span><span class="p">,</span> <span class="n">y</span><span class="o">=</span><span class="s2">&quot;equity_daily&quot;</span><span class="p">)</span>
<span class="n">fig</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</code></pre></div><h3 id="load-live-trading-results-into-a-pandas-dataframe"> 실시간 거래 결과를 Pandas 데이터프레임으로 로드 <a class="headerlink" href="#load-live-trading-results-into-a-pandas-dataframe" title="영구 링크"> ¶ </a></h3><p>실제로 거래를 이미 수행한 경우 성과를 분석하려면</p><div class="highlight"><pre><code><span class="kn">from</span><span class="w"> </span><span class="nn">freqtrade.data.btanalysis</span><span class="w"> </span><span class="kn">import</span> <span class="n">load_trades_from_db</span>


<span class="c1"># Fetch trades from database</span>
<span class="n">trades</span> <span class="o">=</span> <span class="n">load_trades_from_db</span><span class="p">(</span><span class="s2">&quot;sqlite:///tradesv3.sqlite&quot;</span><span class="p">)</span>

<span class="c1"># Display results</span>
<span class="n">trades</span><span class="o">.</span><span class="n">groupby</span><span class="p">(</span><span class="s2">&quot;pair&quot;</span><span class="p">)[</span><span class="s2">&quot;exit_reason&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">value_counts</span><span class="p">()</span>
</code></pre></div><h2 id="analyze-the-loaded-trades-for-trade-parallelism"> 로드된 거래를 거래 병렬성 분석 <a class="headerlink" href="#analyze-the-loaded-trades-for-trade-parallelism" title="영구 링크"> ¶ </a></h2><p> 이것은 매우 높은 <code>max_open_trades</code> 설정과 함께 백테스트와 함께 사용할 때 최적의 <code>max_open_trades</code> 매개변수를 찾는 데 유용할 수 있습니다. </p><p><code>analyze_trade_parallelism()</code>은 각 캔들에 대해 열린 거래 수를 지정하는 &quot;open_trades&quot; 열이 있는 시계열 데이터프레임을 반환합니다.</p><div class="highlight"><pre><code><span class="kn">from</span><span class="w"> </span><span class="nn">freqtrade.data.btanalysis</span><span class="w"> </span><span class="kn">import</span> <span class="n">analyze_trade_parallelism</span>


<span class="c1"># Analyze the above</span>
<span class="n">parallel_trades</span> <span class="o">=</span> <span class="n">analyze_trade_parallelism</span><span class="p">(</span><span class="n">trades</span><span class="p">,</span> <span class="s2">&quot;5m&quot;</span><span class="p">)</span>

<span class="n">parallel_trades</span><span class="o">.</span><span class="n">plot</span><span class="p">()</span>
</code></pre></div><h2 id="plot-results"> 결과 플로팅 <a class="headerlink" href="#plot-results" title="영구 링크"> ¶ </a></h2><p>Freqtrade는 plotly를 기반으로 한 대화형 플로팅 기능을 제공합니다.</p><div class="highlight"><pre><code><span class="kn">from</span><span class="w"> </span><span class="nn">freqtrade.plot.plotting</span><span class="w"> </span><span class="kn">import</span> <span class="n">generate_candlestick_graph</span>


<span class="c1"># Limit graph period to keep plotly quick and reactive</span>

<span class="c1"># Filter trades to one pair</span>
<span class="n">trades_red</span> <span class="o">=</span> <span class="n">trades</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">trades</span><span class="p">[</span><span class="s2">&quot;pair&quot;</span><span class="p">]</span> <span class="o">==</span> <span class="n">pair</span><span class="p">]</span>

<span class="n">data_red</span> <span class="o">=</span> <span class="n">data</span><span class="p">[</span><span class="s2">&quot;2019-06-01&quot;</span><span class="p">:</span><span class="s2">&quot;2019-06-10&quot;</span><span class="p">]</span>
<span class="c1"># Generate candlestick graph</span>
<span class="n">graph</span> <span class="o">=</span> <span class="n">generate_candlestick_graph</span><span class="p">(</span>
    <span class="n">pair</span><span class="o">=</span><span class="n">pair</span><span class="p">,</span>
    <span class="n">data</span><span class="o">=</span><span class="n">data_red</span><span class="p">,</span>
    <span class="n">trades</span><span class="o">=</span><span class="n">trades_red</span><span class="p">,</span>
    <span class="n">indicators1</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;sma20&quot;</span><span class="p">,</span> <span class="s2">&quot;ema50&quot;</span><span class="p">,</span> <span class="s2">&quot;ema55&quot;</span><span class="p">],</span>
    <span class="n">indicators2</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;rsi&quot;</span><span class="p">,</span> <span class="s2">&quot;macd&quot;</span><span class="p">,</span> <span class="s2">&quot;macdsignal&quot;</span><span class="p">,</span> <span class="s2">&quot;macdhist&quot;</span><span class="p">],</span>
<span class="p">)</span>
</code></pre></div><div class="highlight"><pre><code><span class="c1"># Show graph inline</span>
<span class="c1"># graph.show()</span>

<span class="c1"># Render graph in a separate window</span>
<span class="n">graph</span><span class="o">.</span><span class="n">show</span><span class="p">(</span><span class="n">renderer</span><span class="o">=</span><span class="s2">&quot;browser&quot;</span><span class="p">)</span>
</code></pre></div><h2 id="plot-average-profit-per-trade-as-distribution-graph"> 거래당 평균 수익을 분포 그래프로 플로팅 <a class="headerlink" href="#plot-average-profit-per-trade-as-distribution-graph" title="영구 링크"> ¶ </a></h2><div class="highlight"><pre><code><span class="kn">import</span><span class="w"> </span><span class="nn">plotly.figure_factory</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">ff</span>


<span class="n">hist_data</span> <span class="o">=</span> <span class="p">[</span><span class="n">trades</span><span class="o">.</span><span class="n">profit_ratio</span><span class="p">]</span>
<span class="n">group_labels</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;수익 비율&quot;</span><span class="p">]</span>  <span class="c1"># 데이터셋 이름</span>

<span class="n">fig</span> <span class="o">=</span> <span class="n">ff</span><span class="o">.</span><span class="n">create_distplot</span><span class="p">(</span><span class="n">hist_data</span><span class="p">,</span> <span class="n">group_labels</span><span class="p">,</span> <span class="n">bin_size</span><span class="o">=</span><span class="mf">0.01</span><span class="p">)</span>
<span class="n">fig</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</code></pre></div><p>이 문서를 개선하거나 데이터를 분석하는 최적의 방법에 대한 아이디어를 공유하고 싶다면, 이슈 또는 Pull Request를 제출하세요.</p>`,35))])}}};export{h as default};
