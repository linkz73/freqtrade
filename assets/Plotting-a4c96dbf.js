import{r as t,o,c,b as a,d as n,e as i,w as r,a as p,u as e}from"./index-747ab7f0.js";const d="/assets/plot-dataframe-91df509a.png",f="/assets/plot-dataframe2-c80a36b7.png",u="/assets/plot-profit-1a85ce31.png";const m={class:"md-content__inner md-typeset"},g={class:"admonition warning"},h=["src"],y=["src"],b=["src"],_={__name:"Plotting",setup(A){return(v,s)=>{const l=t("router-link");return o(),c("article",m,[s[6]||(s[6]=a("h1",{id:"plotting"},[n(" 플로팅 "),a("a",{class:"headerlink",href:"#plotting",title:"영구 링크"}," ¶ ")],-1)),s[7]||(s[7]=a("p",null,"이 페이지는 가격, 지표 및 수익을 플로팅하는 방법을 설명합니다.",-1)),a("div",g,[s[3]||(s[3]=a("p",{class:"admonition-title"},"사용 중단됨",-1)),s[4]||(s[4]=a("p",null,[n(" 이 페이지에서 설명된 명령( "),a("code",null," plot-dataframe "),n(" , "),a("code",null," plot-profit "),n(' )은 더 이상 권장되지 않으며 유지 관리 모드에 있습니다. 이는 중간 크기 이상의 플롯에서도 성능 문제가 발생할 수 있기 때문이며, "파일을 저장하고 브라우저에서 여는 방식"이 UI 관점에서 직관적이지 않기 때문입니다. ')],-1)),s[5]||(s[5]=a("p",null,"즉각적인 제거 계획은 없지만, 적극적으로 유지 관리되지 않으며, 작동을 유지하기 위해 주요 변경이 필요한 경우 단기적으로 제거될 수 있습니다.",-1)),a("p",null,[s[1]||(s[1]=n(" 플로팅 요구 사항에는 동일한 성능 문제를 겪지 않는 ")),i(l,{to:"freq-ui"},{default:r(()=>s[0]||(s[0]=[n("FreqUI")])),_:1}),s[2]||(s[2]=n(" 를 사용하세요. "))])]),s[8]||(s[8]=p('<h2 id="installation-setup"> 설치 / 설정 <a class="headerlink" href="#installation-setup" title="영구 링크"> ¶ </a></h2><p>플로팅 모듈은 Plotly 라이브러리를 사용합니다. 다음 명령을 실행하여 설치/업그레이드할 수 있습니다:</p><div class="highlight"><pre><code>pip install -U -r requirements-plot.txt</code></pre></div><h2 id="plot-price-and-indicators"> 가격 및 지표 플로팅 <a class="headerlink" href="#plot-price-and-indicators" title="영구 링크"> ¶ </a></h2><p><code>freqtrade plot-dataframe</code> 하위 명령은 세 개의 서브플롯이 있는 대화형 그래프를 표시합니다:</p><ul><li>캔들스틱 및 가격을 따르는 지표(sma/ema)가 포함된 메인 플롯</li><li>거래량 막대</li><li><code>--indicators2</code>로 지정된 추가 지표</li></ul>',6)),a("p",null,[a("img",{alt:"plot-dataframe",src:e(d)},null,8,h)]),s[9]||(s[9]=p(`<p>사용 가능한 인수:</p><div class="highlight"><pre><code>usage: freqtrade plot-dataframe [-h] [-v] [--no-color] [--logfile FILE] [-V]
                                [-c PATH] [-d PATH] [--userdir PATH] [-s NAME]
                                [--strategy-path PATH]
                                [--recursive-strategy-search]
                                [--freqaimodel NAME] [--freqaimodel-path PATH]
                                [-p PAIRS [PAIRS ...]]
                                [--indicators1 INDICATORS1 [INDICATORS1 ...]]
                                [--indicators2 INDICATORS2 [INDICATORS2 ...]]
                                [--plot-limit INT] [--db-url PATH]
                                [--trade-source {DB,file}]
                                [--export {none,trades,signals}]
                                [--export-filename PATH]
                                [--timerange TIMERANGE] [-i TIMEFRAME]
                                [--no-trades]

options:
  -h, --help            show this help message and exit
  -p PAIRS [PAIRS ...], --pairs PAIRS [PAIRS ...]
                        Limit command to these pairs. Pairs are space-
                        separated.
  --indicators1 INDICATORS1 [INDICATORS1 ...]
                        Set indicators from your strategy you want in the
                        first row of the graph. Space-separated list. Example:
                        \`ema3 ema5\`. Default: \`[&#39;sma&#39;, &#39;ema3&#39;, &#39;ema5&#39;]\`.
  --indicators2 INDICATORS2 [INDICATORS2 ...]
                        Set indicators from your strategy you want in the
                        third row of the graph. Space-separated list. Example:
                        \`fastd fastk\`. Default: \`[&#39;macd&#39;, &#39;macdsignal&#39;]\`.
  --plot-limit INT      Specify tick limit for plotting. Notice: too high
                        values cause huge files. Default: 750.
  --db-url PATH         Override trades database URL, this is useful in custom
                        deployments (default: \`sqlite:///tradesv3.sqlite\` for
                        Live Run mode, \`sqlite:///tradesv3.dryrun.sqlite\` for
                        Dry Run).
  --trade-source {DB,file}
                        Specify the source for trades (Can be DB or file
                        (backtest file)) Default: file
  --export {none,trades,signals}
                        Export backtest results (default: trades).
  --export-filename PATH, --backtest-filename PATH
                        Use this filename for backtest results.Requires
                        \`--export\` to be set as well. Example: \`--export-filen
                        ame=user_data/backtest_results/backtest_today.json\`
  --timerange TIMERANGE
                        Specify what timerange of data to use.
  -i TIMEFRAME, --timeframe TIMEFRAME
                        Specify timeframe (\`1m\`, \`5m\`, \`30m\`, \`1h\`, \`1d\`).
  --no-trades           Skip using trades from backtesting file and DB.

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
</code></pre></div><p>예시:</p><div class="highlight"><pre><code>freqtrade plot-dataframe -p BTC/ETH --strategy AwesomeStrategy</code></pre></div><p><code>-p/--pairs</code> 인수를 사용하여 플로팅할 페어를 지정할 수 있습니다.</p><div class="admonition note"><p class="admonition-title">참고</p><p><code>freqtrade plot-dataframe</code> 하위 명령은 페어당 하나의 플롯 파일을 생성합니다.</p></div><p>사용자 정의 지표를 지정합니다. 메인 플롯에는 <code>--indicators1</code>을 사용하고, 하위 플롯에는 <code>--indicators2</code>를 사용합니다 (값이 가격과 다른 범위에 있는 경우).</p><div class="highlight"><pre><code>freqtrade plot-dataframe --strategy AwesomeStrategy -p BTC/ETH --indicators1 sma ema --indicators2 macd</code></pre></div><h3 id="further-usage-examples"> 추가 사용 예시 <a class="headerlink" href="#further-usage-examples" title="영구 링크"> ¶ </a></h3><p>여러 페어를 플로팅하려면 공백으로 구분합니다:</p><div class="highlight"><pre><code>freqtrade plot-dataframe --strategy AwesomeStrategy -p BTC/ETH XRP/ETH</code></pre></div><p>타임레인지를 플로팅하려면 (확대하려면)</p><div class="highlight"><pre><code>freqtrade plot-dataframe --strategy AwesomeStrategy -p BTC/ETH --timerange=20180801-20180805</code></pre></div><p>데이터베이스에 저장된 거래를 플로팅하려면 <code>--db-url</code>을 <code>--trade-source DB</code>와 함께 사용합니다:</p><div class="highlight"><pre><code>freqtrade plot-dataframe --strategy AwesomeStrategy --db-url sqlite:///tradesv3.dry_run.sqlite -p BTC/ETH --trade-source DB</code></pre></div><p>백테스팅 결과에서 거래를 플로팅하려면 <code>--export-filename &lt;filename&gt;</code>을 사용합니다.</p><div class="highlight"><pre><code>freqtrade plot-dataframe --strategy AwesomeStrategy --export-filename user_data/backtest_results/backtest-result.json -p BTC/ETH</code></pre></div><h3 id="plot-dataframe-basics"> 플롯 데이터프레임 기본 사항 <a class="headerlink" href="#plot-dataframe-basics" title="영구 링크"> ¶ </a></h3>`,18)),a("p",null,[a("img",{alt:"plot-dataframe2",src:e(f)},null,8,y)]),s[10]||(s[10]=p(`<p><code>plot-dataframe</code> 하위 명령은 백테스팅 데이터, 전략 및 해당 전략에 해당하는 거래를 포함하는 백테스팅 결과 파일 또는 데이터베이스가 필요합니다.</p><p>결과 플롯에는 다음 요소가 포함됩니다:</p><ul><li>녹색 삼각형: 전략의 매수 신호. (참고: 모든 매수 신호가 거래를 생성하지는 않음, 청록색 원과 비교.)</li><li>빨간 삼각형: 전략의 매도 신호. (또한, 모든 매도 신호가 거래를 종료하지는 않음, 빨간색 및 녹색 사각형과 비교.)</li><li>청록색 원: 거래 진입 지점.</li><li>빨간 사각형: 손실 또는 0% 수익의 거래 종료 지점.</li><li>녹색 사각형: 수익성 있는 거래의 종료 지점.</li><li><code>--indicators1</code>로 지정된 캔들 스케일에 해당하는 값이 있는 지표(e.g., SMA/EMA).</li><li>거래량 (메인 차트 하단의 막대 차트).</li><li><code>--indicators2</code>로 지정된 다른 스케일의 값이 있는 지표(e.g., MACD, RSI).</li></ul><div class="admonition note"><p class="admonition-title">볼린저 밴드</p><p>볼린저 밴드는 <code>bb_lowerband</code> 및 <code>bb_upperband</code> 열이 존재하는 경우 자동으로 플롯에 추가되며, 하단 밴드에서 상단 밴드까지의 영역을 밝은 파란색으로 칠합니다.</p></div><h4 id="advanced-plot-configuration"> 고급 플롯 구성 <a class="headerlink" href="#advanced-plot-configuration" title="영구 링크"> ¶ </a></h4><p>전략의 <code>plot_config</code> 매개변수에서 고급 플롯 구성을 지정할 수 있습니다.</p><p><code>plot_config</code>를 사용할 때 추가 기능:</p><ul><li>지표별 색상 지정</li><li>추가 서브플롯 지정</li><li>영역을 채울 지표 쌍 지정</li></ul><p>아래 샘플 플롯 구성은 지표에 고정 색상을 지정합니다. 그렇지 않으면 연속 플롯이 매번 다른 색 구성표를 생성하여 비교가 어려워집니다. 또한 여러 서브플롯을 사용하여 MACD와 RSI를 동시에 표시할 수 있습니다.</p><p>플롯 유형은 <code>type</code> 키를 사용하여 구성할 수 있습니다. 가능한 유형은 다음과 같습니다:</p><ul><li><code>scatter</code>는 <code>plotly.graph_objects.Scatter</code> 클래스에 해당합니다 (기본값).</li><li><code>bar</code>는 <code>plotly.graph_objects.Bar</code> 클래스에 해당합니다.</li></ul><p><code>plotly.graph_objects.*</code> 생성자에 대한 추가 매개변수는 <code>plotly</code> 딕셔너리에 지정할 수 있습니다.</p><p>프로세스를 설명하는 인라인 주석이 포함된 샘플 구성:</p><div class="highlight"><pre><code><span class="nd">@property</span>
<span class="k">def</span><span class="w"> </span><span class="nf">plot_config</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
<span class="w">    </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        There are a lot of solutions how to build the return dictionary.</span>
<span class="sd">        The only important point is the return value.</span>
<span class="sd">        Example:</span>
<span class="sd">            plot_config = {&#39;main_plot&#39;: {}, &#39;subplots&#39;: {}}</span>

<span class="sd">    &quot;&quot;&quot;</span>
    <span class="n">plot_config</span> <span class="o">=</span> <span class="p">{}</span>
    <span class="n">plot_config</span><span class="p">[</span><span class="s1">&#39;main_plot&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="p">{</span>
        <span class="c1"># Configuration for main plot indicators.</span>
        <span class="c1"># Assumes 2 parameters, emashort and emalong to be specified.</span>
        <span class="sa">f</span><span class="s1">&#39;ema_</span><span class="si">{</span><span class="bp">self</span><span class="o">.</span><span class="n">emashort</span><span class="o">.</span><span class="n">value</span><span class="si">}</span><span class="s1">&#39;</span><span class="p">:</span> <span class="p">{</span><span class="s1">&#39;color&#39;</span><span class="p">:</span> <span class="s1">&#39;red&#39;</span><span class="p">},</span>
        <span class="sa">f</span><span class="s1">&#39;ema_</span><span class="si">{</span><span class="bp">self</span><span class="o">.</span><span class="n">emalong</span><span class="o">.</span><span class="n">value</span><span class="si">}</span><span class="s1">&#39;</span><span class="p">:</span> <span class="p">{</span><span class="s1">&#39;color&#39;</span><span class="p">:</span> <span class="s1">&#39;#CCCCCC&#39;</span><span class="p">},</span>
        <span class="c1"># By omitting color, a random color is selected.</span>
        <span class="s1">&#39;sar&#39;</span><span class="p">:</span> <span class="p">{},</span>
        <span class="c1"># fill area between senkou_a and senkou_b</span>
        <span class="s1">&#39;senkou_a&#39;</span><span class="p">:</span> <span class="p">{</span>
            <span class="s1">&#39;color&#39;</span><span class="p">:</span> <span class="s1">&#39;green&#39;</span><span class="p">,</span> <span class="c1">#optional</span>
            <span class="s1">&#39;fill_to&#39;</span><span class="p">:</span> <span class="s1">&#39;senkou_b&#39;</span><span class="p">,</span>
            <span class="s1">&#39;fill_label&#39;</span><span class="p">:</span> <span class="s1">&#39;Ichimoku Cloud&#39;</span><span class="p">,</span> <span class="c1">#optional</span>
            <span class="s1">&#39;fill_color&#39;</span><span class="p">:</span> <span class="s1">&#39;rgba(255,76,46,0.2)&#39;</span><span class="p">,</span> <span class="c1">#optional</span>
        <span class="p">},</span>
        <span class="c1"># plot senkou_b, too. Not only the area to it.</span>
        <span class="s1">&#39;senkou_b&#39;</span><span class="p">:</span> <span class="p">{}</span>
    <span class="p">}</span>
    <span class="n">plot_config</span><span class="p">[</span><span class="s1">&#39;subplots&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="p">{</span>
         <span class="c1"># Create subplot MACD</span>
        <span class="s2">&quot;MACD&quot;</span><span class="p">:</span> <span class="p">{</span>
            <span class="s1">&#39;macd&#39;</span><span class="p">:</span> <span class="p">{</span><span class="s1">&#39;color&#39;</span><span class="p">:</span> <span class="s1">&#39;blue&#39;</span><span class="p">,</span> <span class="s1">&#39;fill_to&#39;</span><span class="p">:</span> <span class="s1">&#39;macdhist&#39;</span><span class="p">},</span>
            <span class="s1">&#39;macdsignal&#39;</span><span class="p">:</span> <span class="p">{</span><span class="s1">&#39;color&#39;</span><span class="p">:</span> <span class="s1">&#39;orange&#39;</span><span class="p">},</span>
            <span class="s1">&#39;macdhist&#39;</span><span class="p">:</span> <span class="p">{</span><span class="s1">&#39;type&#39;</span><span class="p">:</span> <span class="s1">&#39;bar&#39;</span><span class="p">,</span> <span class="s1">&#39;plotly&#39;</span><span class="p">:</span> <span class="p">{</span><span class="s1">&#39;opacity&#39;</span><span class="p">:</span> <span class="mf">0.9</span><span class="p">}}</span>
        <span class="p">},</span>
        <span class="c1"># Additional subplot RSI</span>
        <span class="s2">&quot;RSI&quot;</span><span class="p">:</span> <span class="p">{</span>
            <span class="s1">&#39;rsi&#39;</span><span class="p">:</span> <span class="p">{</span><span class="s1">&#39;color&#39;</span><span class="p">:</span> <span class="s1">&#39;red&#39;</span><span class="p">}</span>
        <span class="p">}</span>
    <span class="p">}</span>

    <span class="k">return</span> <span class="n">plot_config</span>
</code></pre></div><details class="note"><summary>속성으로 (이전 방법)</summary><p>plot_config를 속성으로 할당하는 것도 가능합니다 (이전에는 기본 방법이었습니다). 이 방법은 전략 매개변수가 사용 불가능하여 특정 구성이 작동하지 않을 수 있다는 단점이 있습니다.</p><div class="highlight"><pre><code>    <span class="n">plot_config</span> <span class="o">=</span> <span class="p">{</span>
        <span class="s1">&#39;main_plot&#39;</span><span class="p">:</span> <span class="p">{</span>
            <span class="c1"># Configuration for main plot indicators.</span>
            <span class="c1"># Specifies \`ema10\` to be red, and \`ema50\` to be a shade of gray</span>
            <span class="s1">&#39;ema10&#39;</span><span class="p">:</span> <span class="p">{</span><span class="s1">&#39;color&#39;</span><span class="p">:</span> <span class="s1">&#39;red&#39;</span><span class="p">},</span>
            <span class="s1">&#39;ema50&#39;</span><span class="p">:</span> <span class="p">{</span><span class="s1">&#39;color&#39;</span><span class="p">:</span> <span class="s1">&#39;#CCCCCC&#39;</span><span class="p">},</span>
            <span class="c1"># By omitting color, a random color is selected.</span>
            <span class="s1">&#39;sar&#39;</span><span class="p">:</span> <span class="p">{},</span>
        <span class="c1"># fill area between senkou_a and senkou_b</span>
        <span class="s1">&#39;senkou_a&#39;</span><span class="p">:</span> <span class="p">{</span>
            <span class="s1">&#39;color&#39;</span><span class="p">:</span> <span class="s1">&#39;green&#39;</span><span class="p">,</span> <span class="c1">#optional</span>
            <span class="s1">&#39;fill_to&#39;</span><span class="p">:</span> <span class="s1">&#39;senkou_b&#39;</span><span class="p">,</span>
            <span class="s1">&#39;fill_label&#39;</span><span class="p">:</span> <span class="s1">&#39;Ichimoku Cloud&#39;</span><span class="p">,</span> <span class="c1">#optional</span>
            <span class="s1">&#39;fill_color&#39;</span><span class="p">:</span> <span class="s1">&#39;rgba(255,76,46,0.2)&#39;</span><span class="p">,</span> <span class="c1">#optional</span>
        <span class="p">},</span>
        <span class="c1"># plot senkou_b, too. Not only the area to it.</span>
        <span class="s1">&#39;senkou_b&#39;</span><span class="p">:</span> <span class="p">{}</span>
        <span class="p">},</span>
        <span class="s1">&#39;subplots&#39;</span><span class="p">:</span> <span class="p">{</span>
            <span class="c1"># Create subplot MACD</span>
            <span class="s2">&quot;MACD&quot;</span><span class="p">:</span> <span class="p">{</span>
                <span class="s1">&#39;macd&#39;</span><span class="p">:</span> <span class="p">{</span><span class="s1">&#39;color&#39;</span><span class="p">:</span> <span class="s1">&#39;blue&#39;</span><span class="p">,</span> <span class="s1">&#39;fill_to&#39;</span><span class="p">:</span> <span class="s1">&#39;macdhist&#39;</span><span class="p">},</span>
                <span class="s1">&#39;macdsignal&#39;</span><span class="p">:</span> <span class="p">{</span><span class="s1">&#39;color&#39;</span><span class="p">:</span> <span class="s1">&#39;orange&#39;</span><span class="p">},</span>
                <span class="s1">&#39;macdhist&#39;</span><span class="p">:</span> <span class="p">{</span><span class="s1">&#39;type&#39;</span><span class="p">:</span> <span class="s1">&#39;bar&#39;</span><span class="p">,</span> <span class="s1">&#39;plotly&#39;</span><span class="p">:</span> <span class="p">{</span><span class="s1">&#39;opacity&#39;</span><span class="p">:</span> <span class="mf">0.9</span><span class="p">}}</span>
            <span class="p">},</span>
            <span class="c1"># Additional subplot RSI</span>
            <span class="s2">&quot;RSI&quot;</span><span class="p">:</span> <span class="p">{</span>
                <span class="s1">&#39;rsi&#39;</span><span class="p">:</span> <span class="p">{</span><span class="s1">&#39;color&#39;</span><span class="p">:</span> <span class="s1">&#39;red&#39;</span><span class="p">}</span>
            <span class="p">}</span>
        <span class="p">}</span>
    <span class="p">}</span>
</code></pre></div></details><div class="admonition note"><p class="admonition-title">참고</p><p>위 구성은 <code>ema10</code>, <code>ema50</code>, <code>senkou_a</code>, <code>senkou_b</code>, <code>macd</code>, <code>macdsignal</code>, <code>macdhist</code> 및 <code>rsi</code>가 전략에 의해 생성된 DataFrame의 열이라고 가정합니다.</p></div><div class="admonition warning"><p class="admonition-title">경고</p><p><code>plotly</code> 인수는 plotly 라이브러리에서만 지원되며 freq-ui에서는 작동하지 않습니다.</p></div><div class="admonition note"><p class="admonition-title">거래 포지션 조정</p><p><code>position_adjustment_enable</code> / <code>adjust_trade_position()</code>이 사용되는 경우, 거래 초기 매수 가격은 여러 주문에 걸쳐 평균화되며 거래 시작 가격은 대부분 캔들 범위 외부에 나타납니다.</p></div><h2 id="plot-profit"> 수익 플로팅 <a class="headerlink" href="#plot-profit" title="영구 링크"> ¶ </a></h2>`,19)),a("p",null,[a("img",{alt:"plot-profit",src:e(u)},null,8,b)]),s[11]||(s[11]=p(`<p><code>plot-profit</code> 하위 명령은 네 개의 플롯이 있는 대화형 그래프를 표시합니다:</p><ul><li>모든 페어의 평균 종가.</li><li>백테스팅으로 얻은 요약된 수익. (실제 수익이 아닌 추정치.)</li><li>각 개별 페어의 수익.</li><li>거래 병렬성.</li><li>드로우다운 기간.</li></ul><p>첫 번째 그래프는 전체 시장의 진행 상황을 파악하는 데 유용합니다.</p><p>두 번째 그래프는 알고리즘이 작동하는지 여부를 보여줍니다. 아마도 작은 수익을 꾸준히 내는 알고리즘을 원하거나, 덜 자주 작동하지만 큰 변동을 일으키는 알고리즘을 원할 것입니다. 이 그래프는 또한 최대 드로우다운 기간의 시작(및 종료)을 강조합니다.</p><p>세 번째 그래프는 이상치를 발견하는 데 유용할 수 있으며, 페어에서 수익 급증을 일으키는 이벤트를 보여줍니다.</p><p>네 번째 그래프는 거래 병렬성을 분석하는 데 도움이 되며, max_open_trades가 얼마나 자주 최대화되었는지 보여줍니다.</p><p><code>freqtrade plot-profit</code> 하위 명령의 가능한 옵션:</p><div class="highlight"><pre><code>usage: freqtrade plot-profit [-h] [-v] [--no-color] [--logfile FILE] [-V]
                             [-c PATH] [-d PATH] [--userdir PATH] [-s NAME]
                             [--strategy-path PATH]
                             [--recursive-strategy-search]
                             [--freqaimodel NAME] [--freqaimodel-path PATH]
                             [-p PAIRS [PAIRS ...]] [--timerange TIMERANGE]
                             [--export {none,trades,signals}]
                             [--export-filename PATH] [--db-url PATH]
                             [--trade-source {DB,file}] [-i TIMEFRAME]
                             [--auto-open]

options:
  -h, --help            show this help message and exit
  -p PAIRS [PAIRS ...], --pairs PAIRS [PAIRS ...]
                        Limit command to these pairs. Pairs are space-
                        separated.
  --timerange TIMERANGE
                        Specify what timerange of data to use.
  --export {none,trades,signals}
                        Export backtest results (default: trades).
  --export-filename PATH, --backtest-filename PATH
                        Use this filename for backtest results.Requires
                        \`--export\` to be set as well. Example: \`--export-filen
                        ame=user_data/backtest_results/backtest_today.json\`
  --db-url PATH         Override trades database URL, this is useful in custom
                        deployments (default: \`sqlite:///tradesv3.sqlite\` for
                        Live Run mode, \`sqlite:///tradesv3.dryrun.sqlite\` for
                        Dry Run).
  --trade-source {DB,file}
                        Specify the source for trades (Can be DB or file
                        (backtest file)) Default: file
  -i TIMEFRAME, --timeframe TIMEFRAME
                        Specify timeframe (\`1m\`, \`5m\`, \`30m\`, \`1h\`, \`1d\`).
  --auto-open           Automatically open generated plot.

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
</code></pre></div><p><code>-p/--pairs</code> 인수를 사용하여 이 계산에 고려할 페어를 제한할 수 있습니다.</p><p>예시:</p><p>사용자 정의 백테스트 내보내기 파일 사용</p><div class="highlight"><pre><code>freqtrade plot-profit  -p LTC/BTC --export-filename user_data/backtest_results/backtest-result.json</code></pre></div><p>사용자 정의 데이터베이스 사용</p><div class="highlight"><pre><code>freqtrade plot-profit  -p LTC/BTC --db-url sqlite:///tradesv3.sqlite --trade-source DB</code></pre></div><div class="highlight"><pre><code>freqtrade --datadir user_data/data/binance_save/ plot-profit -p LTC/BTC</code></pre></div>`,15))])}}};export{_ as default};
