import{_ as t}from"./_plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as i,b as n,d as a,e as c,w as e,a as p}from"./index-ff969378.js";const d={},u={class:"md-content__inner md-typeset"},m={class:"admonition tip"},f={class:"example"},_={class:"example"};function g(h,s){const l=o("router-link");return r(),i("article",u,[s[42]||(s[42]=n("h1",{id:"strategy-callbacks"},[a(" 전략 콜백 "),n("a",{class:"headerlink",href:"#strategy-callbacks",title:"영구 링크"}," ¶ ")],-1)),n("p",null,[s[1]||(s[1]=a("주요 전략 함수(")),s[2]||(s[2]=n("code",null,"populate_indicators()",-1)),s[3]||(s[3]=a(", ")),s[4]||(s[4]=n("code",null,"populate_entry_trend()",-1)),s[5]||(s[5]=a(", ")),s[6]||(s[6]=n("code",null,"populate_exit_trend()",-1)),s[7]||(s[7]=a(")는 벡터화된 방식으로 사용되어야 하며, ")),c(l,{to:"bot-basics"},{default:e(()=>s[0]||(s[0]=[a("백테스팅 중 한 번만 호출")])),_:1}),s[8]||(s[8]=a('됩니다. 반면, 콜백은 "필요할 때마다" 호출됩니다.'))]),s[43]||(s[43]=p('<p>따라서 콜백에서 무거운 계산을 수행하는 것은 피해야 합니다. 이는 실제 운영 중에 지연을 초래할 수 있기 때문입니다. 사용되는 콜백에 따라 거래 진입/종료 시점 또는 거래 기간 중에 호출될 수 있습니다.</p><p>현재 사용 가능한 콜백 목록:</p><ul><li><a href="#bot-start"><code>bot_start()</code></a> - 봇 시작 시 호출 </li><li><a href="#bot-loop-start"><code>bot_loop_start()</code></a> - 봇 루프 시작 시 호출 </li><li><a href="#stake-size-management"><code>custom_stake_amount()</code></a> - 거래 규모 관리 </li><li><a href="#custom-exit-signal"><code>custom_exit()</code></a> - 사용자 정의 종료 신호 </li><li><a href="#custom-stoploss"><code>custom_stoploss()</code></a> - 사용자 정의 손절매 </li><li><a href="#custom-order-price-rules"><code>custom_entry_price()</code> 및 <code>custom_exit_price()</code></a> - 사용자 정의 주문 가격 규칙 </li><li><a href="#custom-order-timeout-rules"><code>check_entry_timeout()</code> 및 <code>check_exit_timeout()</code></a> - 사용자 정의 주문 타임아웃 규칙 </li><li><a href="#trade-entry-buy-order-confirmation"><code>confirm_trade_entry()</code></a> - 거래 진입 확인 </li><li><a href="#trade-exit-sell-order-confirmation"><code>confirm_trade_exit()</code></a> - 거래 종료 확인 </li><li><a href="#adjust-trade-position"><code>adjust_trade_position()</code></a> - 거래 포지션 조정 </li><li><a href="#adjust-entry-price"><code>adjust_entry_price()</code></a> - 진입 가격 조정 </li><li><a href="#leverage-callback"><code>leverage()</code></a> - 레버리지 설정 </li><li><a href="#order-filled-callback"><code>order_filled()</code></a> - 주문 체결 시 호출 </li></ul>',3)),n("div",m,[s[12]||(s[12]=n("p",{class:"admonition-title"},"콜백 호출 순서",-1)),n("p",null,[s[10]||(s[10]=a("콜백이 호출되는 순서는 ")),c(l,{to:"bot-basics"},{default:e(()=>s[9]||(s[9]=[a("봇 기본 사항")])),_:1}),s[11]||(s[11]=a("에서 확인할 수 있습니다."))])]),s[44]||(s[44]=p(`<h2 id="imports-necessary-for-a-strategy"> 전략 구현에 필요한 임포트 <a class="headerlink" href="#imports-necessary-for-a-strategy" title="영구 링크"> ¶ </a></h2><p>전략을 구현할 때는 필요한 모듈과 클래스를 임포트해야 합니다. 다음은 전략에 필요한 기본 임포트 목록입니다:</p><p>이는 freqtrade의 기능이 작동하는 데 필요한 모든 기본 임포트를 포함합니다. 필요에 따라 추가 임포트를 사용할 수 있습니다.</p><div class="highlight"><pre><span></span><code><span class="c1"># flake8: noqa: F401</span>
<span class="c1"># isort: skip_file</span>
<span class="c1"># --- Do not remove these imports ---</span>
<span class="kn">import</span><span class="w"> </span><span class="nn">numpy</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">np</span>
<span class="kn">import</span><span class="w"> </span><span class="nn">pandas</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">pd</span>
<span class="kn">from</span><span class="w"> </span><span class="nn">datetime</span><span class="w"> </span><span class="kn">import</span> <span class="n">datetime</span><span class="p">,</span> <span class="n">timedelta</span><span class="p">,</span> <span class="n">timezone</span>
<span class="kn">from</span><span class="w"> </span><span class="nn">pandas</span><span class="w"> </span><span class="kn">import</span> <span class="n">DataFrame</span>
<span class="kn">from</span><span class="w"> </span><span class="nn">typing</span><span class="w"> </span><span class="kn">import</span> <span class="n">Dict</span><span class="p">,</span> <span class="n">Optional</span><span class="p">,</span> <span class="n">Union</span><span class="p">,</span> <span class="n">Tuple</span>

<span class="kn">from</span><span class="w"> </span><span class="nn">freqtrade.strategy</span><span class="w"> </span><span class="kn">import</span> <span class="p">(</span>
    <span class="n">IStrategy</span><span class="p">,</span>
    <span class="n">Trade</span><span class="p">,</span> 
    <span class="n">Order</span><span class="p">,</span>
    <span class="n">PairLocks</span><span class="p">,</span>
    <span class="n">informative</span><span class="p">,</span>  <span class="c1"># @informative decorator</span>
    <span class="c1"># Hyperopt Parameters</span>
    <span class="n">BooleanParameter</span><span class="p">,</span>
    <span class="n">CategoricalParameter</span><span class="p">,</span>
    <span class="n">DecimalParameter</span><span class="p">,</span>
    <span class="n">IntParameter</span><span class="p">,</span>
    <span class="n">RealParameter</span><span class="p">,</span>
    <span class="c1"># timeframe helpers</span>
    <span class="n">timeframe_to_minutes</span><span class="p">,</span>
    <span class="n">timeframe_to_next_date</span><span class="p">,</span>
    <span class="n">timeframe_to_prev_date</span><span class="p">,</span>
    <span class="c1"># Strategy helper functions</span>
    <span class="n">merge_informative_pair</span><span class="p">,</span>
    <span class="n">stoploss_from_absolute</span><span class="p">,</span>
    <span class="n">stoploss_from_open</span><span class="p">,</span>
<span class="p">)</span>

<span class="c1"># --------------------------------</span>
<span class="c1"># Add your lib to import here</span>
<span class="kn">import</span><span class="w"> </span><span class="nn">talib.abstract</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">ta</span>
<span class="kn">from</span><span class="w"> </span><span class="nn">technical</span><span class="w"> </span><span class="kn">import</span> <span class="n">qtpylib</span>
</code></pre></div><h2 id="bot-start"> 봇 시작 <a class="headerlink" href="#bot-start" title="영구 링크"> ¶ </a></h2><p>전략이 로드될 때 한 번만 호출되는 콜백입니다. 데이터 제공자와 지갑이 설정된 후에 한 번만 수행해야 하는 작업을 처리하는 데 사용할 수 있습니다.</p><div class="highlight"><pre><span></span><code><span class="kn">import</span><span class="w"> </span><span class="nn">requests</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="c1"># ... populate_* methods</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">bot_start</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="kc">None</span><span class="p">:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        봇이 인스턴스화된 후 한 번만 호출됩니다.</span>
<span class="sd">        :param **kwargs: 향후 업데이트에 대비하여 이 매개변수를 유지하세요.</span>
<span class="sd">        &quot;&quot;&quot;</span>
        <span class="k">if</span> <span class="bp">self</span><span class="o">.</span><span class="n">config</span><span class="p">[</span><span class="s2">&quot;runmode&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">value</span> <span class="ow">in</span> <span class="p">(</span><span class="s2">&quot;live&quot;</span><span class="p">,</span> <span class="s2">&quot;dry_run&quot;</span><span class="p">):</span>
            <span class="c1"># Assign this to the class by using self.*</span>
            <span class="c1"># can then be used by populate_* methods</span>
            <span class="bp">self</span><span class="o">.</span><span class="n">custom_remote_data</span> <span class="o">=</span> <span class="n">requests</span><span class="o">.</span><span class="n">get</span><span class="p">(</span><span class="s2">&quot;https://some_remote_source.example.com&quot;</span><span class="p">)</span>
</code></pre></div><p>하이퍼옵트 중에는 시작 시 한 번만 실행됩니다.</p><h2 id="bot-loop-start"> 봇 루프 시작 <a class="headerlink" href="#bot-loop-start" title="영구 링크"> ¶ </a></h2><p>드라이/라이브 모드에서 모든 봇 스로틀링 반복의 시작 시 한 번 호출되는 간단한 콜백입니다(약 5초마다, 다르게 구성된 경우 제외). 백테스트/하이퍼옵트 모드에서는 캔들당 한 번 호출됩니다. 이는 모든 페어에 적용되는 계산, 외부 데이터 로드 등에 사용할 수 있습니다.</p><div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>
<span class="kn">import</span><span class="w"> </span><span class="nn">requests</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="c1"># ... populate_* methods</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">bot_loop_start</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="kc">None</span><span class="p">:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        Called at the start of the bot iteration (one loop).</span>
<span class="sd">        Might be used to perform pair-independent tasks</span>
<span class="sd">        (e.g. gather some remote resource for comparison)</span>
<span class="sd">        :param current_time: datetime object, containing the current datetime</span>
<span class="sd">        :param **kwargs: Ensure to keep this here so updates to this won&#39;t break your strategy.</span>
<span class="sd">        &quot;&quot;&quot;</span>
        <span class="k">if</span> <span class="bp">self</span><span class="o">.</span><span class="n">config</span><span class="p">[</span><span class="s2">&quot;runmode&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">value</span> <span class="ow">in</span> <span class="p">(</span><span class="s2">&quot;live&quot;</span><span class="p">,</span> <span class="s2">&quot;dry_run&quot;</span><span class="p">):</span>
            <span class="c1"># Assign this to the class by using self.*</span>
            <span class="c1"># can then be used by populate_* methods</span>
            <span class="bp">self</span><span class="o">.</span><span class="n">remote_data</span> <span class="o">=</span> <span class="n">requests</span><span class="o">.</span><span class="n">get</span><span class="p">(</span><span class="s2">&quot;https://some_remote_source.example.com&quot;</span><span class="p">)</span>
</code></pre></div><h2 id="stake-size-management"> 스테이크 크기 관리 <a class="headerlink" href="#stake-size-management" title="영구 링크"> ¶ </a></h2><p>거래 진입 전에 호출되며, 새로운 거래의 포지션 크기를 동적으로 관리할 수 있습니다.</p><div class="highlight"><pre><span></span><code><span class="c1"># 기본 임포트</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">custom_stake_amount</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                              <span class="n">proposed_stake</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">min_stake</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">max_stake</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                              <span class="n">entry_tag</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">side</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span><span class="p">:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        거래 진입 전에 호출되어 스테이크 크기를 사용자 정의할 수 있습니다.</span>
<span class="sd">        :param pair: 거래할 페어</span>
<span class="sd">        :param current_time: 현재 시간을 포함하는 datetime 객체</span>
<span class="sd">        :param current_rate: 현재 거래 가격</span>
<span class="sd">        :param proposed_stake: 제안된 스테이크 크기</span>
<span class="sd">        :param min_stake: 거래소에서 허용하는 최소 스테이크 크기</span>
<span class="sd">        :param max_stake: 거래소에서 허용하는 최대 스테이크 크기</span>
<span class="sd">        :param entry_tag: 진입 태그 (선택적)</span>
<span class="sd">        :param side: &#39;long&#39; 또는 &#39;short&#39; - 현재 거래의 방향</span>
<span class="sd">        :param **kwargs: 향후 업데이트에 대비하여 이 매개변수를 유지하세요.</span>
<span class="sd">        :return: 실제 사용할 스테이크 크기</span>
<span class="sd">        &quot;&quot;&quot;</span>
        <span class="k">return</span> <span class="n">proposed_stake</span>
</code></pre></div><p>이 콜백은 다음과 같은 경우에 유용합니다:</p><ul><li>특정 페어에 대해 다른 스테이크 크기를 사용하고 싶을 때</li><li>시간에 따라 스테이크 크기를 동적으로 조정하고 싶을 때</li><li>진입 태그에 따라 다른 스테이크 크기를 사용하고 싶을 때</li><li>거래 방향(롱/숏)에 따라 다른 스테이크 크기를 사용하고 싶을 때</li></ul><p><code>proposed_stake</code>는 구성 파일에서 설정된 <code>stake_amount</code> 값입니다. 이 값을 수정하여 실제 사용할 스테이크 크기를 반환할 수 있습니다.</p><p>반환되는 스테이크 크기는 <code>min_stake</code>와 <code>max_stake</code> 사이의 값이어야 합니다. 이 범위를 벗어나는 값을 반환하면 거래가 거부됩니다.</p><h2 id="custom-exit-signal"> 사용자 정의 종료 신호 <a class="headerlink" href="#custom-exit-signal" title="영구 링크"> ¶ </a></h2><p>거래가 종료될 때까지 모든 스로틀링 반복(약 5초마다)마다 열린 거래에 대해 호출됩니다.</p><p>지정된 포지션이 판매되어야 함을 나타내는 사용자 정의 종료 신호를 정의할 수 있습니다. 이는 각 개별 거래에 대한 종료 조건을 사용자 정의해야 하거나 거래 데이터를 사용하여 종료 결정을 내려야 할 때 매우 유용합니다.</p><p> 예를 들어 <code> custom_exit() </code> 을 사용하여 1:2 리스크-보상 ROI를 구현할 수 있습니다. </p><p><code> custom_exit() </code> 신호를 사용하여 손절매를 대신 사용하는 것은 권장되지 않습니다. 이는 <code> custom_stoploss() </code> 를 사용하는 것보다 열등한 방법입니다. 이는 거래소에서 손절매를 유지할 수 있게 해줍니다. </p><div class="admonition note"><p class="admonition-title">참고</p><p> 이 메서드에서 (비어 있지 않은) <code> string </code> 또는 <code> True </code> 를 반환하면 지정된 시간에 캔들에서 종료 신호를 설정하는 것과 동일합니다. 이 메서드는 종료 신호가 이미 설정된 경우 또는 종료 신호가 비활성화된 경우( <code> use_exit_signal=False </code> ) 호출되지 않습니다. <code> string </code> 최대 길이는 64자입니다. 이 한도를 초과하면 메시지가 64자로 잘립니다. <code> custom_exit() </code> 는 <code> exit_profit_only </code> 를 무시하며 <code> use_exit_signal=False </code> 인 경우를 제외하고 항상 호출됩니다. 새로운 진입 신호가 있는 경우에도 호출됩니다. </p></div><p>현재 이익에 따라 다른 지표를 사용하고 하루 이상 열린 거래를 종료하는 방법의 예:</p><div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">custom_exit</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                    <span class="n">current_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">):</span>
        <span class="n">dataframe</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">dp</span><span class="o">.</span><span class="n">get_analyzed_dataframe</span><span class="p">(</span><span class="n">pair</span><span class="p">,</span> <span class="bp">self</span><span class="o">.</span><span class="n">timeframe</span><span class="p">)</span>
        <span class="n">last_candle</span> <span class="o">=</span> <span class="n">dataframe</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">squeeze</span><span class="p">()</span>

        <span class="c1"># Above 20% profit, sell when rsi &lt; 80</span>
        <span class="k">if</span> <span class="n">current_profit</span> <span class="o">&gt;</span> <span class="mf">0.2</span><span class="p">:</span>
            <span class="k">if</span> <span class="n">last_candle</span><span class="p">[</span><span class="s2">&quot;rsi&quot;</span><span class="p">]</span> <span class="o">&lt;</span> <span class="mi">80</span><span class="p">:</span>
                <span class="k">return</span> <span class="s2">&quot;rsi_below_80&quot;</span>

        <span class="c1"># Between 2% and 10%, sell if EMA-long above EMA-short</span>
        <span class="k">if</span> <span class="mf">0.02</span> <span class="o">&lt;</span> <span class="n">current_profit</span> <span class="o">&lt;</span> <span class="mf">0.1</span><span class="p">:</span>
            <span class="k">if</span> <span class="n">last_candle</span><span class="p">[</span><span class="s2">&quot;emalong&quot;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="n">last_candle</span><span class="p">[</span><span class="s2">&quot;emashort&quot;</span><span class="p">]:</span>
                <span class="k">return</span> <span class="s2">&quot;ema_long_below_80&quot;</span>

        <span class="c1"># Sell any positions at a loss if they are held for more than one day.</span>
        <span class="k">if</span> <span class="n">current_profit</span> <span class="o">&lt;</span> <span class="mf">0.0</span> <span class="ow">and</span> <span class="p">(</span><span class="n">current_time</span> <span class="o">-</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_date_utc</span><span class="p">)</span><span class="o">.</span><span class="n">days</span> <span class="o">&gt;=</span> <span class="mi">1</span><span class="p">:</span>
            <span class="k">return</span> <span class="s2">&quot;unclog&quot;</span>
</code></pre></div>`,26)),n("p",null,[s[14]||(s[14]=a(" 전략 콜백에서 데이터프레임 사용에 대한 자세한 내용은 ")),c(l,{to:"strategy-advanced"},{default:e(()=>s[13]||(s[13]=[a(" Dataframe access ")])),_:1}),s[15]||(s[15]=a(" 를 참조하십시오. "))]),s[45]||(s[45]=p('<h2 id="custom-stoploss"> 사용자 정의 손절매 <a class="headerlink" href="#custom-stoploss" title="영구 링크"> ¶ </a></h2><p>거래가 종료될 때까지 모든 반복(약 5초마다)마다 열린 거래에 대해 호출됩니다.</p><p> 사용자 정의 손절매 메서드의 사용은 전략 객체에서 <code> use_custom_stoploss=True </code> 로 설정하여 활성화해야 합니다. </p><p> 손절매 가격은 항상 상승할 수만 있습니다. <code> custom_stoploss </code> 에서 반환된 손절매 값이 이전에 설정된 것보다 낮은 손절매 가격을 초래하는 경우 무시됩니다. 전통적인 <code> stoploss </code> 값은 절대 하한선으로 작용하며, 거래에 대해 처음 호출되기 전에 초기 손절매로 설정되며 여전히 필수입니다. <br> 사용자 정의 손절매는 정기적인, 변경 가능한 손절매로 작동하므로 <code> trailing_stop </code> 과 유사하게 작동하며, 이로 인해 종료된 거래는 <code> &quot;trailing_stop_loss&quot; </code> 종료 이유를 갖게 됩니다. </p><p> 메서드는 현재 가격의 백분율로 손절매 값을 반환해야 합니다. 예를 들어 <code> current_rate </code> 가 200 USD인 경우 <code> 0.02 </code> 를 반환하면 손절매 가격이 2% 낮아져 196 USD가 됩니다. 백테스팅 중에는 <code> current_rate </code> (및 <code> current_profit </code> )이 캔들의 최고가(또는 숏 거래의 경우 최저가)에 대해 제공되며, 결과 손절매는 캔들의 최저가(또는 숏 거래의 경우 최고가)에 대해 평가됩니다. </p><p> 반환 값의 절대 값이 사용되므로(부호는 무시됨) <code> 0.05 </code> 또는 <code> -0.05 </code> 를 반환하면 동일한 결과가 됩니다. 현재 가격보다 5% 낮은 손절매가 설정됩니다. <code> None </code> 을 반환하면 &quot;변경하지 않음&quot;으로 해석되며, 이는 손절매를 수정하지 않으려는 경우에 안전한 방법입니다. <code> NaN </code> 및 <code> inf </code> 값은 유효하지 않은 것으로 간주되며 무시됩니다( <code> None </code> 과 동일). </p>',6)),n("p",null,[s[17]||(s[17]=a(" 거래소의 손절매는 ")),s[18]||(s[18]=n("code",null," trailing_stop ",-1)),s[19]||(s[19]=a(" 과 유사하게 작동하며, ")),s[20]||(s[20]=n("code",null," stoploss_on_exchange_interval ",-1)),s[21]||(s[21]=a(" 에 구성된 대로 거래소의 손절매가 업데이트됩니다( ")),c(l,{to:"stoploss"},{default:e(()=>s[16]||(s[16]=[a(" 거래소의 손절매에 대한 자세한 내용 ")])),_:1}),s[22]||(s[22]=a(" ). "))]),s[46]||(s[46]=p(`<div class="admonition note"><p class="admonition-title">날짜 사용</p><p> 모든 시간 기반 계산은 <code> current_time </code> 을 기준으로 수행해야 하며, <code> datetime.now() </code> 또는 <code> datetime.utcnow() </code> 를 사용하는 것은 백테스팅 지원을 깨뜨릴 수 있으므로 권장되지 않습니다. </p></div><div class="admonition tip"><p class="admonition-title">트레일링 손절매</p><p> 사용자 정의 손절매 값을 사용할 때 <code> trailing_stop </code> 을 비활성화하는 것이 좋습니다. 둘 다 함께 작동할 수 있지만, 사용자 정의 함수가 이를 원하지 않을 때 트레일링 스톱이 가격을 높이는 등의 충돌이 발생할 수 있습니다. </p></div><h3 id="adjust-stoploss-after-position-adjustments"> 포지션 조정 후 손절매 조정 <a class="headerlink" href="#adjust-stoploss-after-position-adjustments" title="영구 링크"> ¶ </a></h3><p> 전략에 따라 <a href="#adjust-trade-position"> 포지션 조정 </a> 후 손절매를 양방향으로 조정해야 할 필요가 있을 수 있습니다. 이를 위해 freqtrade는 주문이 채워진 후 <code> after_fill=True </code> 로 추가 호출을 수행하여 전략이 손절매를 현재 가격과의 간격을 넓히는 방향으로 이동할 수 있도록 합니다. </p><div class="admonition note"><p class="admonition-title">하위 호환성</p><p> 이 호출은 <code> custom_stoploss </code> 함수 정의의 매개변수로 <code> after_fill </code> 이 포함된 경우에만 수행됩니다. 따라서 이는 기존 실행 중인 전략에 영향을 미치지 않습니다. </p></div><h3 id="custom-stoploss-examples"> 사용자 정의 손절매 예제 <a class="headerlink" href="#custom-stoploss-examples" title="영구 링크"> ¶ </a></h3><p>다음 섹션에서는 사용자 정의 손절매 함수로 가능한 몇 가지 예제를 보여줍니다. 물론 더 많은 것이 가능하며 모든 예제를 원하는 대로 결합할 수 있습니다.</p><h4 id="trailing-stop-via-custom-stoploss"> 사용자 정의 손절매를 통한 트레일링 스톱 <a class="headerlink" href="#trailing-stop-via-custom-stoploss" title="영구 링크"> ¶ </a></h4><p>최대 도달 가격의 4%를 추적하는 정기적인 트레일링 손절매를 시뮬레이션하려면 다음과 같은 매우 간단한 방법을 사용합니다:</p><div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="c1"># ... populate_* methods</span>

    <span class="n">use_custom_stoploss</span> <span class="o">=</span> <span class="kc">True</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">custom_stoploss</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span>
                        <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">after_fill</span><span class="p">:</span> <span class="nb">bool</span><span class="p">,</span> 
                        <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span> <span class="o">|</span> <span class="kc">None</span><span class="p">:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        Custom stoploss logic, returning the new distance relative to current_rate (as ratio).</span>
<span class="sd">        e.g. returning -0.05 would create a stoploss 5% below current_rate.</span>
<span class="sd">        The custom stoploss can never be below self.stoploss, which serves as a hard maximum loss.</span>

<span class="sd">        For full documentation please go to https://www.freqtrade.io/en/latest/strategy-advanced/</span>

<span class="sd">        When not implemented by a strategy, returns the initial stoploss value.</span>
<span class="sd">        Only called when use_custom_stoploss is set to True.</span>

<span class="sd">        :param pair: Pair that&#39;s currently analyzed</span>
<span class="sd">        :param trade: trade object.</span>
<span class="sd">        :param current_time: datetime object, containing the current datetime</span>
<span class="sd">        :param current_rate: Rate, calculated based on pricing settings in exit_pricing.</span>
<span class="sd">        :param current_profit: Current profit (as ratio), calculated based on current_rate.</span>
<span class="sd">        :param after_fill: True if the stoploss is called after the order was filled.</span>
<span class="sd">        :param **kwargs: Ensure to keep this here so updates to this won&#39;t break your strategy.</span>
<span class="sd">        :return float: New stoploss value, relative to the current_rate</span>
<span class="sd">        &quot;&quot;&quot;</span>
        <span class="k">return</span> <span class="o">-</span><span class="mf">0.04</span>
</code></pre></div><h4 id="time-based-trailing-stop"> 시간 기반 트레일링 스톱 <a class="headerlink" href="#time-based-trailing-stop" title="영구 링크"> ¶ </a></h4><p>처음 60분 동안 초기 손절매를 사용한 후 10% 트레일링 손절매로 변경하고 2시간(120분) 후에는 5% 트레일링 손절매를 사용합니다.</p><div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="c1"># ... populate_* methods</span>

    <span class="n">use_custom_stoploss</span> <span class="o">=</span> <span class="kc">True</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">custom_stoploss</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span>
                        <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">after_fill</span><span class="p">:</span> <span class="nb">bool</span><span class="p">,</span> 
                        <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span> <span class="o">|</span> <span class="kc">None</span><span class="p">:</span>

        <span class="c1"># Make sure you have the longest interval first - these conditions are evaluated from top to bottom.</span>
        <span class="k">if</span> <span class="n">current_time</span> <span class="o">-</span> <span class="n">timedelta</span><span class="p">(</span><span class="n">minutes</span><span class="o">=</span><span class="mi">120</span><span class="p">)</span> <span class="o">&gt;</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_date_utc</span><span class="p">:</span>
            <span class="k">return</span> <span class="o">-</span><span class="mf">0.05</span>
        <span class="k">elif</span> <span class="n">current_time</span> <span class="o">-</span> <span class="n">timedelta</span><span class="p">(</span><span class="n">minutes</span><span class="o">=</span><span class="mi">60</span><span class="p">)</span> <span class="o">&gt;</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_date_utc</span><span class="p">:</span>
            <span class="k">return</span> <span class="o">-</span><span class="mf">0.10</span>
        <span class="k">return</span> <span class="kc">None</span>
</code></pre></div><h4 id="time-based-trailing-stop-with-after-fill-adjustments"> 채워진 후 조정이 있는 시간 기반 트레일링 스톱 <a class="headerlink" href="#time-based-trailing-stop-with-after-fill-adjustments" title="영구 링크"> ¶ </a></h4><p> 처음 60분 동안 초기 손절매를 사용한 후 10% 트레일링 손절매로 변경하고 2시간(120분) 후에는 5% 트레일링 손절매를 사용합니다. 추가 주문이 채워지면 새로운 <code> open_rate </code> 아래로 -10% 손절매를 설정합니다( <a href="#position-adjust-calculations"> 모든 진입에 걸쳐 평균 </a> ). </p><div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="c1"># ... populate_* methods</span>

    <span class="n">use_custom_stoploss</span> <span class="o">=</span> <span class="kc">True</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">custom_stoploss</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span>
                        <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">after_fill</span><span class="p">:</span> <span class="nb">bool</span><span class="p">,</span> 
                        <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span> <span class="o">|</span> <span class="kc">None</span><span class="p">:</span>

        <span class="k">if</span> <span class="n">after_fill</span><span class="p">:</span> 
            <span class="c1"># After an additional order, start with a stoploss of 10% below the new open rate</span>
            <span class="k">return</span> <span class="n">stoploss_from_open</span><span class="p">(</span><span class="mf">0.10</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">,</span> <span class="n">is_short</span><span class="o">=</span><span class="n">trade</span><span class="o">.</span><span class="n">is_short</span><span class="p">,</span> <span class="n">leverage</span><span class="o">=</span><span class="n">trade</span><span class="o">.</span><span class="n">leverage</span><span class="p">)</span>
        <span class="c1"># Make sure you have the longest interval first - these conditions are evaluated from top to bottom.</span>
        <span class="k">if</span> <span class="n">current_time</span> <span class="o">-</span> <span class="n">timedelta</span><span class="p">(</span><span class="n">minutes</span><span class="o">=</span><span class="mi">120</span><span class="p">)</span> <span class="o">&gt;</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_date_utc</span><span class="p">:</span>
            <span class="k">return</span> <span class="o">-</span><span class="mf">0.05</span>
        <span class="k">elif</span> <span class="n">current_time</span> <span class="o">-</span> <span class="n">timedelta</span><span class="p">(</span><span class="n">minutes</span><span class="o">=</span><span class="mi">60</span><span class="p">)</span> <span class="o">&gt;</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_date_utc</span><span class="p">:</span>
            <span class="k">return</span> <span class="o">-</span><span class="mf">0.10</span>
        <span class="k">return</span> <span class="kc">None</span>
</code></pre></div><h4 id="different-stoploss-per-pair"> 페어별 다른 손절매 <a class="headerlink" href="#different-stoploss-per-pair" title="영구 링크"> ¶ </a></h4><p> 페어에 따라 다른 손절매를 사용합니다. 이 예제에서는 <code> ETH/BTC </code> 및 <code> XRP/BTC </code> 에 대해 10% 트레일링 손절매를 사용하고, <code> LTC/BTC </code> 에 대해 5% 트레일링 손절매를 사용하며, 다른 모든 페어에 대해 15%를 사용합니다. </p><div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="c1"># ... populate_* methods</span>

    <span class="n">use_custom_stoploss</span> <span class="o">=</span> <span class="kc">True</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">custom_stoploss</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span>
                        <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">after_fill</span><span class="p">:</span> <span class="nb">bool</span><span class="p">,</span>
                        <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span> <span class="o">|</span> <span class="kc">None</span><span class="p">:</span>

        <span class="k">if</span> <span class="n">pair</span> <span class="ow">in</span> <span class="p">(</span><span class="s2">&quot;ETH/BTC&quot;</span><span class="p">,</span> <span class="s2">&quot;XRP/BTC&quot;</span><span class="p">):</span>
            <span class="k">return</span> <span class="o">-</span><span class="mf">0.10</span>
        <span class="k">elif</span> <span class="n">pair</span> <span class="ow">in</span> <span class="p">(</span><span class="s2">&quot;LTC/BTC&quot;</span><span class="p">):</span>
            <span class="k">return</span> <span class="o">-</span><span class="mf">0.05</span>
        <span class="k">return</span> <span class="o">-</span><span class="mf">0.15</span>
</code></pre></div><h4 id="trailing-stoploss-with-positive-offset"> 양의 오프셋이 있는 트레일링 손절매 <a class="headerlink" href="#trailing-stoploss-with-positive-offset" title="영구 링크"> ¶ </a></h4><p>이익이 4% 이상일 때까지 초기 손절매를 사용한 후 현재 이익의 50%를 트레일링 손절매로 사용하며 최소 2.5% 및 최대 5%를 사용합니다.</p><p>손절매는 항상 증가할 수만 있으므로 현재 손절매보다 낮은 값은 무시됩니다.</p><div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="c1"># ... populate_* methods</span>

    <span class="n">use_custom_stoploss</span> <span class="o">=</span> <span class="kc">True</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">custom_stoploss</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span>
                        <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">after_fill</span><span class="p">:</span> <span class="nb">bool</span><span class="p">,</span>
                        <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span> <span class="o">|</span> <span class="kc">None</span><span class="p">:</span>

        <span class="k">if</span> <span class="n">current_profit</span> <span class="o">&lt;</span> <span class="mf">0.04</span><span class="p">:</span>
            <span class="k">return</span> <span class="kc">None</span> <span class="c1"># return None to keep using the initial stoploss</span>

        <span class="c1"># After reaching the desired offset, allow the stoploss to trail by half the profit</span>
        <span class="n">desired_stoploss</span> <span class="o">=</span> <span class="n">current_profit</span> <span class="o">/</span> <span class="mi">2</span>

        <span class="c1"># Use a minimum of 2.5% and a maximum of 5%</span>
        <span class="k">return</span> <span class="nb">max</span><span class="p">(</span><span class="nb">min</span><span class="p">(</span><span class="n">desired_stoploss</span><span class="p">,</span> <span class="mf">0.05</span><span class="p">),</span> <span class="mf">0.025</span><span class="p">)</span>
</code></pre></div><h4 id="stepped-stoploss"> 단계별 손절매 <a class="headerlink" href="#stepped-stoploss" title="영구 링크"> ¶ </a></h4><p>현재 가격을 지속적으로 추적하는 대신, 이 예제에서는 현재 이익을 기준으로 고정된 손절매 가격 수준을 설정합니다.</p><ul><li>이익이 20%에 도달할 때까지 정기적인 손절매를 사용합니다.</li><li>이익이 20% 이상일 때 손절매를 진입 가격보다 7% 높게 설정합니다.</li><li>이익이 25% 이상일 때 손절매를 진입 가격보다 15% 높게 설정합니다.</li><li>이익이 40% 이상일 때 손절매를 진입 가격보다 25% 높게 설정합니다.</li></ul><div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="c1"># ... populate_* methods</span>

    <span class="n">use_custom_stoploss</span> <span class="o">=</span> <span class="kc">True</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">custom_stoploss</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span>
                        <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">after_fill</span><span class="p">:</span> <span class="nb">bool</span><span class="p">,</span>
                        <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span> <span class="o">|</span> <span class="kc">None</span><span class="p">:</span>

        <span class="c1"># evaluate highest to lowest, so that highest possible stop is used</span>
        <span class="k">if</span> <span class="n">current_profit</span> <span class="o">&gt;</span> <span class="mf">0.40</span><span class="p">:</span>
            <span class="k">return</span> <span class="n">stoploss_from_open</span><span class="p">(</span><span class="mf">0.25</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">,</span> <span class="n">is_short</span><span class="o">=</span><span class="n">trade</span><span class="o">.</span><span class="n">is_short</span><span class="p">,</span> <span class="n">leverage</span><span class="o">=</span><span class="n">trade</span><span class="o">.</span><span class="n">leverage</span><span class="p">)</span>
        <span class="k">elif</span> <span class="n">current_profit</span> <span class="o">&gt;</span> <span class="mf">0.25</span><span class="p">:</span>
            <span class="k">return</span> <span class="n">stoploss_from_open</span><span class="p">(</span><span class="mf">0.15</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">,</span> <span class="n">is_short</span><span class="o">=</span><span class="n">trade</span><span class="o">.</span><span class="n">is_short</span><span class="p">,</span> <span class="n">leverage</span><span class="o">=</span><span class="n">trade</span><span class="o">.</span><span class="n">leverage</span><span class="p">)</span>
        <span class="k">elif</span> <span class="n">current_profit</span> <span class="o">&gt;</span> <span class="mf">0.20</span><span class="p">:</span>
            <span class="k">return</span> <span class="n">stoploss_from_open</span><span class="p">(</span><span class="mf">0.07</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">,</span> <span class="n">is_short</span><span class="o">=</span><span class="n">trade</span><span class="o">.</span><span class="n">is_short</span><span class="p">,</span> <span class="n">leverage</span><span class="o">=</span><span class="n">trade</span><span class="o">.</span><span class="n">leverage</span><span class="p">)</span>

        <span class="c1"># return maximum stoploss value, keeping current stoploss price unchanged</span>
        <span class="k">return</span> <span class="kc">None</span>
</code></pre></div><h4 id="custom-stoploss-using-an-indicator-from-dataframe-example"> 데이터프레임의 지표를 사용한 사용자 정의 손절매 예제 <a class="headerlink" href="#custom-stoploss-using-an-indicator-from-dataframe-example" title="영구 링크"> ¶ </a></h4><p>절대 손절매 값은 데이터프레임에 저장된 지표에서 파생될 수 있습니다. 예제는 가격 아래의 포물선 SAR을 손절매로 사용합니다.</p><div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">populate_indicators</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
        <span class="c1"># &lt;...&gt;</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;sar&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">SAR</span><span class="p">(</span><span class="n">dataframe</span><span class="p">)</span>

    <span class="n">use_custom_stoploss</span> <span class="o">=</span> <span class="kc">True</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">custom_stoploss</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span>
                        <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">after_fill</span><span class="p">:</span> <span class="nb">bool</span><span class="p">,</span>
                        <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span> <span class="o">|</span> <span class="kc">None</span><span class="p">:</span>

        <span class="n">dataframe</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">dp</span><span class="o">.</span><span class="n">get_analyzed_dataframe</span><span class="p">(</span><span class="n">pair</span><span class="p">,</span> <span class="bp">self</span><span class="o">.</span><span class="n">timeframe</span><span class="p">)</span>
        <span class="n">last_candle</span> <span class="o">=</span> <span class="n">dataframe</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">squeeze</span><span class="p">()</span>

        <span class="c1"># Use parabolic sar as absolute stoploss price</span>
        <span class="n">stoploss_price</span> <span class="o">=</span> <span class="n">last_candle</span><span class="p">[</span><span class="s2">&quot;sar&quot;</span><span class="p">]</span>

        <span class="c1"># Convert absolute price to percentage relative to current_rate</span>
        <span class="k">if</span> <span class="n">stoploss_price</span> <span class="o">&lt;</span> <span class="n">current_rate</span><span class="p">:</span>
            <span class="k">return</span> <span class="n">stoploss_from_absolute</span><span class="p">(</span><span class="n">stoploss_price</span><span class="p">,</span> <span class="n">current_rate</span><span class="p">,</span> <span class="n">is_short</span><span class="o">=</span><span class="n">trade</span><span class="o">.</span><span class="n">is_short</span><span class="p">)</span>

        <span class="c1"># return maximum stoploss value, keeping current stoploss price unchanged</span>
        <span class="k">return</span> <span class="kc">None</span>
</code></pre></div>`,30)),n("p",null,[s[24]||(s[24]=a(" 전략 콜백에서 데이터프레임 사용에 대한 자세한 내용은 ")),c(l,{to:"strategy-advanced"},{default:e(()=>s[23]||(s[23]=[a(" Dataframe access ")])),_:1}),s[25]||(s[25]=a(" 를 참조하십시오. "))]),s[47]||(s[47]=p('<h3 id="common-helpers-for-stoploss-calculations"> 손절매 계산을 위한 일반적인 도우미 <a class="headerlink" href="#common-helpers-for-stoploss-calculations" title="영구 링크"> ¶ </a></h3><h4 id="stoploss-relative-to-open-price"> 진입 가격에 대한 손절매 <a class="headerlink" href="#stoploss-relative-to-open-price" title="영구 링크"> ¶ </a></h4><p><code> custom_stoploss() </code> 에서 반환된 손절매 값은 항상 <code> current_rate </code> 에 대한 백분율을 지정해야 하지만 때로는 <em> 진입 </em> 가격에 대한 손절매를 지정하고 싶을 수 있습니다. <code> stoploss_from_open() </code> 은 <code> custom_stoploss </code> 에서 반환될 수 있는 손절매 값을 계산하는 도우미 함수로, 이는 원하는 거래 이익을 진입점 위로 계산합니다. </p>',3)),n("details",f,[s[29]||(s[29]=p(`<summary>사용자 정의 손절매 함수에서 진입 가격에 대한 손절매 반환</summary><p> 진입 가격이 $100이고 <code> current_price </code> 가 $121( <code> current_profit </code> 은 <code> 0.21 </code> )인 경우를 가정합니다. </p><p> 진입 가격보다 7% 높은 손절매를 원한다면 <code> stoploss_from_open(0.07, current_profit, False) </code> 를 호출할 수 있으며 이는 <code> 0.1157024793 </code> 을 반환합니다. $121의 11.57% 아래는 $107이며 이는 $100보다 7% 높은 값과 동일합니다. </p><p>이 함수는 레버리지를 고려하므로 10배 레버리지에서는 실제 손절매가 $100보다 0.7% 높게 설정됩니다(0.7% * 10배 = 7%).</p><div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="c1"># ... populate_* methods</span>

    <span class="n">use_custom_stoploss</span> <span class="o">=</span> <span class="kc">True</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">custom_stoploss</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span>
                        <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">after_fill</span><span class="p">:</span> <span class="nb">bool</span><span class="p">,</span>
                        <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span> <span class="o">|</span> <span class="kc">None</span><span class="p">:</span>

        <span class="c1"># once the profit has risen above 10%, keep the stoploss at 7% above the open price</span>
        <span class="k">if</span> <span class="n">current_profit</span> <span class="o">&gt;</span> <span class="mf">0.10</span><span class="p">:</span>
            <span class="k">return</span> <span class="n">stoploss_from_open</span><span class="p">(</span><span class="mf">0.07</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">,</span> <span class="n">is_short</span><span class="o">=</span><span class="n">trade</span><span class="o">.</span><span class="n">is_short</span><span class="p">,</span> <span class="n">leverage</span><span class="o">=</span><span class="n">trade</span><span class="o">.</span><span class="n">leverage</span><span class="p">)</span>

        <span class="k">return</span> <span class="mi">1</span>
</code></pre></div>`,5)),n("p",null,[s[27]||(s[27]=a(" 전체 예제는 ")),c(l,{to:"strategy-callbacks"},{default:e(()=>s[26]||(s[26]=[a(" 사용자 정의 손절매 ")])),_:1}),s[28]||(s[28]=a(" 섹션에서 찾을 수 있습니다. "))])]),s[48]||(s[48]=p('<div class="admonition note"><p class="admonition-title">참고</p><p><code> stoploss_from_open() </code> 에 잘못된 입력을 제공하면 &quot;CustomStoploss 함수가 유효한 손절매를 반환하지 않았습니다&quot; 경고가 발생할 수 있습니다. 이는 <code> current_profit </code> 매개변수가 지정된 <code> open_relative_stop </code> 보다 낮은 경우 발생할 수 있습니다. 이러한 상황은 <code> confirm_trade_exit() </code> 메서드에 의해 거래 종료가 차단될 때 발생할 수 있습니다. 경고는 손절매 판매를 차단하지 않도록 <code> confirm_trade_exit() </code> 메서드에서 <code> exit_reason </code> 을 확인하거나 <code> return stoploss_from_open(...) or 1 </code> 관용구를 사용하여 해결할 수 있습니다. 이는 <code> current_profit &lt; open_relative_stop </code> 인 경우 손절매를 변경하지 않도록 요청합니다. </p></div><h4 id="stoploss-percentage-from-absolute-price"> 절대 가격에서 손절매 백분율 <a class="headerlink" href="#stoploss-percentage-from-absolute-price" title="영구 링크"> ¶ </a></h4><p><code> custom_stoploss() </code> 에서 반환된 손절매 값은 항상 <code> current_rate </code> 에 대한 백분율을 지정해야 합니다. 지정된 절대 가격 수준에서 손절매를 설정하려면 <code> stop_rate </code> 를 사용하여 현재 가격에 대한 백분율을 계산해야 합니다. 이는 백분율이 진입 가격에서 지정된 것과 동일한 결과를 제공합니다. </p><p> 도우미 함수 <code> stoploss_from_absolute() </code> 는 절대 가격에서 <code> custom_stoploss() </code> 에서 반환될 수 있는 현재 가격 상대 손절매로 변환하는 데 사용할 수 있습니다. </p>',4)),n("details",_,[s[37]||(s[37]=n("summary",null,"사용자 정의 손절매 함수에서 절대 가격을 사용한 손절매 반환",-1)),n("p",null,[s[31]||(s[31]=a(" 현재 가격보다 2xATR 아래에 손절매를 설정하려면 ")),s[32]||(s[32]=n("code",null,' stoploss_from_absolute(current_rate + (side * candle["atr"] * 2), current_rate=current_rate, is_short=trade.is_short, leverage=trade.leverage) ',-1)),s[33]||(s[33]=a(" 를 호출할 수 있습니다. 선물의 경우 방향(상승 또는 하락)을 조정하고 레버리지를 조정해야 합니다. 이는 ")),s[34]||(s[34]=n("a",{href:"strategy-callbacks.html"},[n("code",null," custom_stoploss ")],-1)),s[35]||(s[35]=a(" 콜백이 ")),c(l,{to:"stoploss"},{default:e(()=>s[30]||(s[30]=[a(' "이 거래의 위험" ')])),_:1}),s[36]||(s[36]=a(" 을 반환하기 때문입니다. 이는 상대 가격 이동이 아닙니다. "))]),s[38]||(s[38]=p(`<div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="n">use_custom_stoploss</span> <span class="o">=</span> <span class="kc">True</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">populate_indicators</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;atr&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">ATR</span><span class="p">(</span><span class="n">dataframe</span><span class="p">,</span> <span class="n">timeperiod</span><span class="o">=</span><span class="mi">14</span><span class="p">)</span>
        <span class="k">return</span> <span class="n">dataframe</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">custom_stoploss</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span>
                        <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">after_fill</span><span class="p">:</span> <span class="nb">bool</span><span class="p">,</span>
                        <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span> <span class="o">|</span> <span class="kc">None</span><span class="p">:</span>
        <span class="n">dataframe</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">dp</span><span class="o">.</span><span class="n">get_analyzed_dataframe</span><span class="p">(</span><span class="n">pair</span><span class="p">,</span> <span class="bp">self</span><span class="o">.</span><span class="n">timeframe</span><span class="p">)</span>
        <span class="n">trade_date</span> <span class="o">=</span> <span class="n">timeframe_to_prev_date</span><span class="p">(</span><span class="bp">self</span><span class="o">.</span><span class="n">timeframe</span><span class="p">,</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_date_utc</span><span class="p">)</span>
        <span class="n">candle</span> <span class="o">=</span> <span class="n">dataframe</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">squeeze</span><span class="p">()</span>
        <span class="n">side</span> <span class="o">=</span> <span class="mi">1</span> <span class="k">if</span> <span class="n">trade</span><span class="o">.</span><span class="n">is_short</span> <span class="k">else</span> <span class="o">-</span><span class="mi">1</span>
        <span class="k">return</span> <span class="n">stoploss_from_absolute</span><span class="p">(</span><span class="n">current_rate</span> <span class="o">+</span> <span class="p">(</span><span class="n">side</span> <span class="o">*</span> <span class="n">candle</span><span class="p">[</span><span class="s2">&quot;atr&quot;</span><span class="p">]</span> <span class="o">*</span> <span class="mi">2</span><span class="p">),</span> 
                                      <span class="n">current_rate</span><span class="o">=</span><span class="n">current_rate</span><span class="p">,</span> 
                                      <span class="n">is_short</span><span class="o">=</span><span class="n">trade</span><span class="o">.</span><span class="n">is_short</span><span class="p">,</span>
                                      <span class="n">leverage</span><span class="o">=</span><span class="n">trade</span><span class="o">.</span><span class="n">leverage</span><span class="p">)</span>
</code></pre></div>`,1))]),s[49]||(s[49]=n("hr",null,null,-1)),s[50]||(s[50]=n("h2",{id:"custom-order-price-rules"},[a(" 사용자 정의 주문 가격 규칙 "),n("a",{class:"headerlink",href:"#custom-order-price-rules",title:"영구 링크"}," ¶ ")],-1)),n("p",null,[s[40]||(s[40]=a(" 기본적으로 freqtrade는 주문서를 사용하여 자동으로 주문 가격을 설정합니다( ")),c(l,{to:"configuration"},{default:e(()=>s[39]||(s[39]=[a(" 관련 문서 ")])),_:1}),s[41]||(s[41]=a(" ). 또한 전략에 따라 사용자 정의 주문 가격을 생성할 수도 있습니다. "))]),s[51]||(s[51]=p(`<p> 전략 파일에서 <code> custom_entry_price() </code> 함수를 생성하여 진입 가격을 사용자 정의하고 <code> custom_exit_price() </code> 를 생성하여 종료 가격을 사용자 정의할 수 있습니다. </p><p>이 메서드들은 거래소에서 주문을 실행하기 직전에 호출됩니다.</p><div class="admonition note"><p class="admonition-title">참고</p><p> 사용자 정의 가격 함수가 <code> None </code> 또는 유효하지 않은 값을 반환하면 가격은 정규 가격 구성에 기반한 <code> proposed_rate </code> 로 되돌아갑니다. </p></div><div class="admonition note"><p class="admonition-title">참고</p><p> custom_entry_price를 사용할 때, 거래 객체는 거래와 관련된 첫 번째 진입 주문이 생성되자마자 사용할 수 있습니다. 첫 번째 진입의 경우 <code> trade </code> 매개변수 값은 <code> None </code> 입니다. </p></div><h3 id="custom-order-entry-and-exit-price-example"> 사용자 정의 주문 진입 및 종료 가격 예제 <a class="headerlink" href="#custom-order-entry-and-exit-price-example" title="영구 링크"> ¶ </a></h3><div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="c1"># ... populate_* methods</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">custom_entry_price</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span> <span class="o">|</span> <span class="kc">None</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="n">proposed_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                           <span class="n">entry_tag</span><span class="p">:</span> <span class="nb">str</span> <span class="o">|</span> <span class="kc">None</span><span class="p">,</span> <span class="n">side</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span><span class="p">:</span>

        <span class="n">dataframe</span><span class="p">,</span> <span class="n">last_updated</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">dp</span><span class="o">.</span><span class="n">get_analyzed_dataframe</span><span class="p">(</span><span class="n">pair</span><span class="o">=</span><span class="n">pair</span><span class="p">,</span>
                                                                <span class="n">timeframe</span><span class="o">=</span><span class="bp">self</span><span class="o">.</span><span class="n">timeframe</span><span class="p">)</span>
        <span class="n">new_entryprice</span> <span class="o">=</span> <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;bollinger_10_lowerband&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">iat</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span>

        <span class="k">return</span> <span class="n">new_entryprice</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">custom_exit_price</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span>
                          <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="n">proposed_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                          <span class="n">current_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">exit_tag</span><span class="p">:</span> <span class="nb">str</span> <span class="o">|</span> <span class="kc">None</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span><span class="p">:</span>

        <span class="n">dataframe</span><span class="p">,</span> <span class="n">last_updated</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">dp</span><span class="o">.</span><span class="n">get_analyzed_dataframe</span><span class="p">(</span><span class="n">pair</span><span class="o">=</span><span class="n">pair</span><span class="p">,</span>
                                                                <span class="n">timeframe</span><span class="o">=</span><span class="bp">self</span><span class="o">.</span><span class="n">timeframe</span><span class="p">)</span>
        <span class="n">new_exitprice</span> <span class="o">=</span> <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;bollinger_10_upperband&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">iat</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span>

        <span class="k">return</span> <span class="n">new_exitprice</span>
</code></pre></div><div class="admonition warning"><p class="admonition-title">경고</p><p> 진입 및 종료 가격을 수정하는 것은 제한 주문에만 작동합니다. 선택한 가격에 따라 많은 미체결 주문이 발생할 수 있습니다. 기본적으로 현재 가격과 사용자 정의 가격 간의 최대 허용 거리는 2%입니다. 이 값은 <code> custom_price_max_distance_ratio </code> 매개변수를 사용하여 구성에서 변경할 수 있습니다. <strong> 예 </strong> : new_entryprice가 97이고 proposed_rate가 100이며 <code> custom_price_max_distance_ratio </code> 가 2%로 설정된 경우, 유지되는 유효한 사용자 정의 진입 가격은 현재(제안된) 비율보다 2% 낮은 98이 됩니다. </p></div><div class="admonition warning"><p class="admonition-title">백테스팅</p><p> 사용자 정의 가격은 백테스팅에서 지원되며(2021.12부터 시작), 주문이 캔들의 저가/고가 범위 내에 있으면 주문이 채워집니다. 즉시 채워지지 않는 주문은 정기적인 타임아웃 처리의 대상이 되며, 이는 캔들당 한 번 발생합니다. <code> custom_exit_price() </code> 는 exit_signal, Custom exit 및 partial exits 유형의 판매에 대해서만 호출됩니다. 다른 모든 종료 유형은 정규 백테스팅 가격을 사용합니다. </p></div><h2 id="custom-order-timeout-rules"> 사용자 정의 주문 타임아웃 규칙 <a class="headerlink" href="#custom-order-timeout-rules" title="영구 링크"> ¶ </a></h2><p> 간단한 시간 기반 주문 타임아웃은 전략 또는 구성의 <code> unfilledtimeout </code> 섹션에서 구성할 수 있습니다. </p><p>그러나 freqtrade는 두 주문 유형에 대해 사용자 정의 콜백도 제공하여 사용자 정의 기준에 따라 주문이 타임아웃되었는지 여부를 결정할 수 있습니다.</p><div class="admonition note"><p class="admonition-title">참고</p><p>백테스팅은 주문 가격이 캔들의 저가/고가 범위 내에 있으면 주문을 채웁니다. 아래 콜백은 즉시 채워지지 않는 주문(사용자 정의 가격 사용)에 대해 캔들당 한 번 호출됩니다.</p></div><h3 id="custom-order-timeout-example"> 사용자 정의 주문 타임아웃 예제 <a class="headerlink" href="#custom-order-timeout-example" title="영구 링크"> ¶ </a></h3><p> 주문이 채워지거나 취소될 때까지 모든 열린 주문에 대해 호출됩니다. <code> check_entry_timeout() </code> 은 거래 진입에 대해 호출되며, <code> check_exit_timeout() </code> 은 거래 종료 주문에 대해 호출됩니다. </p><p>자산 가격에 따라 다른 미체결 타임아웃을 적용하는 간단한 예제는 아래와 같습니다. 이는 고가 자산에 대해 엄격한 타임아웃을 적용하고 저가 코인에 대해 더 많은 시간을 허용합니다.</p><p> 함수는 <code> True </code> (주문 취소) 또는 <code> False </code> (주문 유지)를 반환해야 합니다. </p><div class="highlight"><pre><span></span><code>    <span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="c1"># ... populate_* methods</span>

    <span class="c1"># Set unfilledtimeout to 25 hours, since the maximum timeout from below is 24 hours.</span>
    <span class="n">unfilledtimeout</span> <span class="o">=</span> <span class="p">{</span>
        <span class="s2">&quot;entry&quot;</span><span class="p">:</span> <span class="mi">60</span> <span class="o">*</span> <span class="mi">25</span><span class="p">,</span>
        <span class="s2">&quot;exit&quot;</span><span class="p">:</span> <span class="mi">60</span> <span class="o">*</span> <span class="mi">25</span>
    <span class="p">}</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">check_entry_timeout</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">order</span><span class="p">:</span> <span class="n">Order</span><span class="p">,</span>
                            <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">bool</span><span class="p">:</span>
        <span class="k">if</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_rate</span> <span class="o">&gt;</span> <span class="mi">100</span> <span class="ow">and</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_date_utc</span> <span class="o">&lt;</span> <span class="n">current_time</span> <span class="o">-</span> <span class="n">timedelta</span><span class="p">(</span><span class="n">minutes</span><span class="o">=</span><span class="mi">5</span><span class="p">):</span>
            <span class="k">return</span> <span class="kc">True</span>
        <span class="k">elif</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_rate</span> <span class="o">&gt;</span> <span class="mi">10</span> <span class="ow">and</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_date_utc</span> <span class="o">&lt;</span> <span class="n">current_time</span> <span class="o">-</span> <span class="n">timedelta</span><span class="p">(</span><span class="n">minutes</span><span class="o">=</span><span class="mi">3</span><span class="p">):</span>
            <span class="k">return</span> <span class="kc">True</span>
        <span class="k">elif</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_rate</span> <span class="o">&lt;</span> <span class="mi">1</span> <span class="ow">and</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_date_utc</span> <span class="o">&lt;</span> <span class="n">current_time</span> <span class="o">-</span> <span class="n">timedelta</span><span class="p">(</span><span class="n">hours</span><span class="o">=</span><span class="mi">24</span><span class="p">):</span>
           <span class="k">return</span> <span class="kc">True</span>
        <span class="k">return</span> <span class="kc">False</span>


    <span class="k">def</span><span class="w"> </span><span class="nf">check_exit_timeout</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">order</span><span class="p">:</span> <span class="n">Order</span><span class="p">,</span>
                           <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">bool</span><span class="p">:</span>
        <span class="k">if</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_rate</span> <span class="o">&gt;</span> <span class="mi">100</span> <span class="ow">and</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_date_utc</span> <span class="o">&lt;</span> <span class="n">current_time</span> <span class="o">-</span> <span class="n">timedelta</span><span class="p">(</span><span class="n">minutes</span><span class="o">=</span><span class="mi">5</span><span class="p">):</span>
            <span class="k">return</span> <span class="kc">True</span>
        <span class="k">elif</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_rate</span> <span class="o">&gt;</span> <span class="mi">10</span> <span class="ow">and</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_date_utc</span> <span class="o">&lt;</span> <span class="n">current_time</span> <span class="o">-</span> <span class="n">timedelta</span><span class="p">(</span><span class="n">minutes</span><span class="o">=</span><span class="mi">3</span><span class="p">):</span>
            <span class="k">return</span> <span class="kc">True</span>
        <span class="k">elif</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_rate</span> <span class="o">&lt;</span> <span class="mi">1</span> <span class="ow">and</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_date_utc</span> <span class="o">&lt;</span> <span class="n">current_time</span> <span class="o">-</span> <span class="n">timedelta</span><span class="p">(</span><span class="n">hours</span><span class="o">=</span><span class="mi">24</span><span class="p">):</span>
           <span class="k">return</span> <span class="kc">True</span>
        <span class="k">return</span> <span class="kc">False</span>
</code></pre></div><div class="admonition note"><p class="admonition-title">참고</p><p> 위 예제의 경우, <code> unfilledtimeout </code> 은 24시간보다 큰 값으로 설정해야 합니다. 그렇지 않으면 해당 유형의 타임아웃이 먼저 적용됩니다. </p></div><h3 id="custom-order-timeout-example-using-additional-data"> 추가 데이터를 사용하는 사용자 정의 주문 타임아웃 예제 <a class="headerlink" href="#custom-order-timeout-example-using-additional-data" title="영구 링크"> ¶ </a></h3><div class="highlight"><pre><span></span><code>    <span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="c1"># ... populate_* methods</span>

    <span class="c1"># Set unfilledtimeout to 25 hours, since the maximum timeout from below is 24 hours.</span>
    <span class="n">unfilledtimeout</span> <span class="o">=</span> <span class="p">{</span>
        <span class="s2">&quot;entry&quot;</span><span class="p">:</span> <span class="mi">60</span> <span class="o">*</span> <span class="mi">25</span><span class="p">,</span>
        <span class="s2">&quot;exit&quot;</span><span class="p">:</span> <span class="mi">60</span> <span class="o">*</span> <span class="mi">25</span>
    <span class="p">}</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">check_entry_timeout</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">order</span><span class="p">:</span> <span class="n">Order</span><span class="p">,</span>
                            <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">bool</span><span class="p">:</span>
        <span class="n">ob</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">dp</span><span class="o">.</span><span class="n">orderbook</span><span class="p">(</span><span class="n">pair</span><span class="p">,</span> <span class="mi">1</span><span class="p">)</span>
        <span class="n">current_price</span> <span class="o">=</span> <span class="n">ob</span><span class="p">[</span><span class="s2">&quot;bids&quot;</span><span class="p">][</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span>
        <span class="c1"># Cancel buy order if price is more than 2% above the order.</span>
        <span class="k">if</span> <span class="n">current_price</span> <span class="o">&gt;</span> <span class="n">order</span><span class="o">.</span><span class="n">price</span> <span class="o">*</span> <span class="mf">1.02</span><span class="p">:</span>
            <span class="k">return</span> <span class="kc">True</span>
        <span class="k">return</span> <span class="kc">False</span>


    <span class="k">def</span><span class="w"> </span><span class="nf">check_exit_timeout</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">order</span><span class="p">:</span> <span class="n">Order</span><span class="p">,</span>
                           <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">bool</span><span class="p">:</span>
        <span class="n">ob</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">dp</span><span class="o">.</span><span class="n">orderbook</span><span class="p">(</span><span class="n">pair</span><span class="p">,</span> <span class="mi">1</span><span class="p">)</span>
        <span class="n">current_price</span> <span class="o">=</span> <span class="n">ob</span><span class="p">[</span><span class="s2">&quot;asks&quot;</span><span class="p">][</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span>
        <span class="c1"># Cancel sell order if price is more than 2% below the order.</span>
        <span class="k">if</span> <span class="n">current_price</span> <span class="o">&lt;</span> <span class="n">order</span><span class="o">.</span><span class="n">price</span> <span class="o">*</span> <span class="mf">0.98</span><span class="p">:</span>
            <span class="k">return</span> <span class="kc">True</span>
        <span class="k">return</span> <span class="kc">False</span>
</code></pre></div><hr><h2 id="bot-order-confirmation"> 봇 주문 확인 <a class="headerlink" href="#bot-order-confirmation" title="영구 링크"> ¶ </a></h2><p>거래 진입/종료를 확인합니다. 이는 주문이 실행되기 직전에 호출되는 마지막 메서드입니다.</p><h3 id="trade-entry-buy-order-confirmation"> 거래 진입(구매 주문) 확인 <a class="headerlink" href="#trade-entry-buy-order-confirmation" title="영구 링크"> ¶ </a></h3><p><code> confirm_trade_entry() </code> 는 거래 진입을 마지막 순간에 중단하는 데 사용할 수 있습니다(예: 가격이 예상과 다를 경우). </p><div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="c1"># ... populate_* methods</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">confirm_trade_entry</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">order_type</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">amount</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                            <span class="n">time_in_force</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="n">entry_tag</span><span class="p">:</span> <span class="nb">str</span> <span class="o">|</span> <span class="kc">None</span><span class="p">,</span>
                            <span class="n">side</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">bool</span><span class="p">:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        Called right before placing a entry order.</span>
<span class="sd">        Timing for this function is critical, so avoid doing heavy computations or</span>
<span class="sd">        network requests in this method.</span>

<span class="sd">        For full documentation please go to https://www.freqtrade.io/en/latest/strategy-advanced/</span>

<span class="sd">        When not implemented by a strategy, returns True (always confirming).</span>

<span class="sd">        :param pair: Pair that&#39;s about to be bought/shorted.</span>
<span class="sd">        :param order_type: Order type (as configured in order_types). usually limit or market.</span>
<span class="sd">        :param amount: Amount in target (base) currency that&#39;s going to be traded.</span>
<span class="sd">        :param rate: Rate that&#39;s going to be used when using limit orders </span>
<span class="sd">                     or current rate for market orders.</span>
<span class="sd">        :param time_in_force: Time in force. Defaults to GTC (Good-til-cancelled).</span>
<span class="sd">        :param current_time: datetime object, containing the current datetime</span>
<span class="sd">        :param entry_tag: Optional entry_tag (buy_tag) if provided with the buy signal.</span>
<span class="sd">        :param side: &quot;long&quot; or &quot;short&quot; - indicating the direction of the proposed trade</span>
<span class="sd">        :param **kwargs: Ensure to keep this here so updates to this won&#39;t break your strategy.</span>
<span class="sd">        :return bool: When True is returned, then the buy-order is placed on the exchange.</span>
<span class="sd">            False aborts the process</span>
<span class="sd">        &quot;&quot;&quot;</span>
        <span class="k">return</span> <span class="kc">True</span>
</code></pre></div><h3 id="trade-exit-sell-order-confirmation"> 거래 종료(판매 주문) 확인 <a class="headerlink" href="#trade-exit-sell-order-confirmation" title="영구 링크"> ¶ </a></h3><p><code> confirm_trade_exit() </code> 는 거래 종료(판매)를 마지막 순간에 중단하는 데 사용할 수 있습니다(예: 가격이 예상과 다를 경우). </p><p><code> confirm_trade_exit() </code> 는 동일한 거래에 대해 여러 번 호출될 수 있으며, 다른 종료 이유가 적용될 수 있습니다. 종료 이유는 다음 순서로 적용됩니다: </p><ul><li><code> exit_signal </code> / <code> custom_exit </code></li><li><code> stop_loss </code></li><li><code> roi </code></li><li><code> trailing_stop_loss </code></li></ul><div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="c1"># ... populate_* methods</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">confirm_trade_exit</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">order_type</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">amount</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                           <span class="n">rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">time_in_force</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">exit_reason</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span>
                           <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">bool</span><span class="p">:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        Called right before placing a regular exit order.</span>
<span class="sd">        Timing for this function is critical, so avoid doing heavy computations or</span>
<span class="sd">        network requests in this method.</span>

<span class="sd">        For full documentation please go to https://www.freqtrade.io/en/latest/strategy-advanced/</span>

<span class="sd">        When not implemented by a strategy, returns True (always confirming).</span>

<span class="sd">        :param pair: Pair for trade that&#39;s about to be exited.</span>
<span class="sd">        :param trade: trade object.</span>
<span class="sd">        :param order_type: Order type (as configured in order_types). usually limit or market.</span>
<span class="sd">        :param amount: Amount in base currency.</span>
<span class="sd">        :param rate: Rate that&#39;s going to be used when using limit orders</span>
<span class="sd">                     or current rate for market orders.</span>
<span class="sd">        :param time_in_force: Time in force. Defaults to GTC (Good-til-cancelled).</span>
<span class="sd">        :param exit_reason: Exit reason.</span>
<span class="sd">            Can be any of [&quot;roi&quot;, &quot;stop_loss&quot;, &quot;stoploss_on_exchange&quot;, &quot;trailing_stop_loss&quot;,</span>
<span class="sd">                           &quot;exit_signal&quot;, &quot;force_exit&quot;, &quot;emergency_exit&quot;]</span>
<span class="sd">        :param current_time: datetime object, containing the current datetime</span>
<span class="sd">        :param **kwargs: Ensure to keep this here so updates to this won&#39;t break your strategy.</span>
<span class="sd">        :return bool: When True, then the exit-order is placed on the exchange.</span>
<span class="sd">            False aborts the process</span>
<span class="sd">        &quot;&quot;&quot;</span>
        <span class="k">if</span> <span class="n">exit_reason</span> <span class="o">==</span> <span class="s2">&quot;force_exit&quot;</span> <span class="ow">and</span> <span class="n">trade</span><span class="o">.</span><span class="n">calc_profit_ratio</span><span class="p">(</span><span class="n">rate</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">:</span>
            <span class="c1"># Reject force-sells with negative profit</span>
            <span class="c1"># This is just a sample, please adjust to your needs</span>
            <span class="c1"># (this does not necessarily make sense, assuming you know when you&#39;re force-selling)</span>
            <span class="k">return</span> <span class="kc">False</span>
        <span class="k">return</span> <span class="kc">True</span>
</code></pre></div><div class="admonition warning"><p class="admonition-title">경고</p><p><code> confirm_trade_exit() </code> 는 손절매 종료를 방지할 수 있으며, 이는 손절매 종료를 무시하여 상당한 손실을 초래할 수 있습니다. <code> confirm_trade_exit() </code> 는 청산에 대해 호출되지 않습니다. 청산은 거래소에 의해 강제되므로 거부할 수 없습니다. </p></div><h2 id="adjust-trade-position"> 거래 포지션 조정 <a class="headerlink" href="#adjust-trade-position" title="영구 링크"> ¶ </a></h2><p><code> position_adjustment_enable </code> 전략 속성은 전략에서 <code> adjust_trade_position() </code> 콜백 사용을 활성화합니다. 성능상의 이유로 기본적으로 비활성화되어 있으며, 활성화된 경우 freqtrade는 시작 시 경고 메시지를 표시합니다. <code> adjust_trade_position() </code> 은 추가 주문을 수행하는 데 사용할 수 있으며, 예를 들어 DCA(달러 비용 평균화)로 위험을 관리하거나 포지션을 늘리거나 줄일 수 있습니다. </p><p> 추가 주문은 추가 수수료도 발생하며, 이러한 주문은 <code> max_open_trades </code> 에 포함되지 않습니다. </p><p>이 콜백은 대기 중인 주문(구매 또는 판매)이 있을 때도 호출되며, 금액, 가격 또는 방향이 다른 경우 기존 대기 주문을 취소하고 새 주문을 실행합니다.</p><p><code> adjust_trade_position() </code> 은 거래 기간 동안 매우 자주 호출되므로 구현을 가능한 한 성능이 좋게 유지해야 합니다. </p><p> 포지션 조정은 항상 거래 방향으로 적용되므로 양수 값은 항상 포지션을 증가시키고(음수 값은 포지션을 감소시킴), 이는 롱 또는 숏 거래에 관계없이 적용됩니다. 조정 주문은 2 요소 튜플을 반환하여 태그를 할당할 수 있으며, 첫 번째 요소는 조정 금액이고 두 번째 요소는 태그입니다(예: <code> return 250, &quot;increase_favorable_conditions&quot; </code> ). </p><p>레버리지 수정은 불가능하며, 반환된 스테이크 금액은 레버리지를 적용하기 전의 것으로 간주됩니다.</p><p> 현재 포지션에 할당된 총 스테이크는 <code> trade.stake_amount </code> 에 저장됩니다. 따라서 <code> trade.stake_amount </code> 은 <code> adjust_trade_position() </code> 을 통해 수행된 모든 추가 진입 및 부분 종료 시마다 업데이트됩니다. </p><div class="admonition danger"><p class="admonition-title">느슨한 논리</p><p> 드라이 및 라이브 실행 시 이 함수는 <code> throttle_process_secs </code> (기본값 5초)마다 호출됩니다. 예를 들어 추가 진입 논리가 마지막 캔들의 RSI가 30 미만인지 확인하는 것뿐이라면, 이러한 조건이 충족되면 새 캔들이 도착할 때까지 봇이 5초마다 추가 재진입을 수행합니다. </p><p>부분 종료에서도 동일한 일이 발생할 수 있습니다. 따라서 엄격한 논리를 사용하거나 마지막으로 채워진 주문을 확인해야 합니다.</p></div><div class="admonition warning"><p class="admonition-title">많은 포지션 조정 시 성능</p><p> 포지션 조정은 전략의 출력을 증가시키는 좋은 접근 방식이 될 수 있지만, 이 기능을 광범위하게 사용할 경우 단점도 있을 수 있습니다. <br> 각 주문은 거래 객체에 거래 기간 동안 첨부되므로 메모리 사용량이 증가합니다. 긴 기간과 10개 또는 100개의 포지션 조정이 있는 거래는 권장되지 않으며, 성능에 영향을 미치지 않도록 정기적으로 종료해야 합니다. </p></div><div class="admonition warning"><p class="admonition-title">백테스팅</p><p> 백테스팅 중에는 이 콜백이 <code> timeframe </code> 또는 <code> timeframe_detail </code> 의 각 캔들에 대해 호출되므로 실행 시간 성능에 영향을 미칩니다. 이는 라이브와 백테스팅 간의 결과 차이를 초래할 수 있으며, 백테스팅은 캔들당 한 번만 거래를 조정할 수 있지만 라이브에서는 캔들당 여러 번 거래를 조정할 수 있습니다. </p></div><h3 id="increase-position"> 포지션 증가 <a class="headerlink" href="#increase-position" title="영구 링크"> ¶ </a></h3><p> 전략은 추가 진입 주문이 이루어져야 할 때(포지션이 증가함 -&gt; 롱 거래의 경우 구매 주문, 숏 거래의 경우 판매 주문) 양의 <strong> stake_amount </strong> (스테이크 통화로)를 반환해야 합니다. </p><p> 지갑에 충분한 자금이 없는 경우(반환 값이 <code> max_stake </code> 를 초과하는 경우) 신호는 무시됩니다. <code> max_entry_position_adjustment </code> 속성은 거래당 추가 진입 주문(첫 번째 진입 주문 외)에 대한 최대 수를 제한하는 데 사용됩니다. 기본값은 -1로 설정되어 있으며, 이는 봇이 조정 진입 수에 제한이 없음을 의미합니다. </p><p> 추가 진입은 <code> max_entry_position_adjustment </code> 에 설정된 최대 추가 진입 수에 도달하면 무시되지만, 콜백은 부분 종료를 찾기 위해 호출됩니다. </p><div class="admonition note"><p class="admonition-title">스테이크 크기에 대해</p><p> 고정 스테이크 크기를 사용하면 이는 첫 번째 주문에 사용되는 금액을 의미하며, 포지션 조정 없이도 동일합니다. 추가 DCA 주문을 위해 지갑에 충분한 자금을 남겨두어야 합니다. <code> &quot;unlimited&quot; </code> 스테이크 금액을 사용하여 DCA 주문을 하려면 초기 주문에 모든 자금을 할당하지 않도록 <code> custom_stake_amount() </code> 콜백을 구현해야 합니다. </p></div><h3 id="decrease-position"> 포지션 감소 <a class="headerlink" href="#decrease-position" title="영구 링크"> ¶ </a></h3><p> 전략은 부분 종료를 위해 음의 stake_amount(스테이크 통화로)를 반환해야 합니다. 현재 소유한 전체 스테이크( <code> -trade.stake_amount </code> )를 반환하면 전체 종료가 됩니다. <br> 위의 값보다 큰 값을 반환하면(따라서 남은 stake_amount가 음수가 됨) 봇은 신호를 무시합니다. </p><p> 부분 종료의 경우, 부분 종료 주문의 금액을 계산하는 데 사용되는 공식은 <code> amount to be exited partially = negative_stake_amount * trade.amount / trade.stake_amount </code> 입니다. 여기서 <code> negative_stake_amount </code> 는 <code> adjust_trade_position </code> 함수에서 반환된 값입니다. 공식은 현재 포지션의 이익/손실에 영향을 받지 않습니다. 이는 <code> trade.amount </code> 및 <code> trade.stake_amount </code> 에만 의존합니다. 이는 가격 변동에 영향을 받지 않습니다. </p><p> 예를 들어, SHITCOIN/USDT를 50에 2개 구매했다고 가정합니다. 이는 거래의 스테이크 금액이 100 USDT임을 의미합니다. 이제 가격이 200으로 상승하고 절반을 판매하고 싶습니다. 이 경우 <code> trade.stake_amount </code> 의 -50%(0.5 * 100 USDT)를 반환해야 하며 이는 -50과 같습니다. 봇은 부분적으로 판매해야 하는 금액을 계산하며 이는 <code> 50 * 2 / 100 </code> 으로 1 SHITCOIN/USDT와 같습니다. -200(2 * 200의 50%)을 반환하면 봇은 이를 무시합니다. 이는 <code> trade.stake_amount </code> 가 100 USDT에 불과하지만 200 USDT를 판매하려고 요청했기 때문입니다. 이는 4 SHITCOIN/USDT를 판매하려고 요청한 것입니다. </p><p> 위의 예로 돌아가서, 현재 비율이 200이므로 거래의 현재 USDT 가치는 이제 400 USDT입니다. 현재 비율을 기준으로 100 USDT를 부분적으로 판매하여 초기 투자를 회수하고 거래에서 이익을 남겨두고 싶다고 가정합니다. 이 경우 정확히 판매해야 하는 금액은 <code> 100 * 2 / 400 </code> 으로 0.5 SHITCOIN/USDT와 같습니다. 이제 정확히 판매해야 하는 금액을 알고 있으므로 <code> adjust_trade_position </code> 함수에서 반환해야 하는 값은 <code> -amount to be exited partially * trade.stake_amount / trade.amount </code> 으로 -25와 같습니다. 봇은 0.5 SHITCOIN/USDT를 판매하여 거래에 1.5를 남겨둡니다. 부분 종료에서 100 USDT를 받게 됩니다. </p><div class="admonition warning"><p class="admonition-title">손절매 계산</p><p>손절매는 여전히 초기 진입 가격을 기준으로 계산되며, 평균 가격이 아닙니다. 정기적인 손절매 규칙이 여전히 적용됩니다(하향 이동 불가).</p><p><code> /stopentry </code> 명령은 봇이 새로운 거래에 진입하는 것을 중지하지만, 포지션 조정 기능은 기존 거래에서 새로운 주문을 계속 구매합니다. </p></div><div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">DigDeeperStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="n">position_adjustment_enable</span> <span class="o">=</span> <span class="kc">True</span>

    <span class="c1"># Attempts to handle large drops with DCA. High stoploss is required.</span>
    <span class="n">stoploss</span> <span class="o">=</span> <span class="o">-</span><span class="mf">0.30</span>

    <span class="c1"># ... populate_* methods</span>

    <span class="c1"># Example specific variables</span>
    <span class="n">max_entry_position_adjustment</span> <span class="o">=</span> <span class="mi">3</span>
    <span class="c1"># This number is explained a bit further down</span>
    <span class="n">max_dca_multiplier</span> <span class="o">=</span> <span class="mf">5.5</span>

    <span class="c1"># This is called when placing the initial order (opening trade)</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">custom_stake_amount</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                            <span class="n">proposed_stake</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">min_stake</span><span class="p">:</span> <span class="nb">float</span> <span class="o">|</span> <span class="kc">None</span><span class="p">,</span> <span class="n">max_stake</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                            <span class="n">leverage</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">entry_tag</span><span class="p">:</span> <span class="nb">str</span> <span class="o">|</span> <span class="kc">None</span><span class="p">,</span> <span class="n">side</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span>
                            <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span><span class="p">:</span>

        <span class="c1"># We need to leave most of the funds for possible further DCA orders</span>
        <span class="c1"># This also applies to fixed stakes</span>
        <span class="k">return</span> <span class="n">proposed_stake</span> <span class="o">/</span> <span class="bp">self</span><span class="o">.</span><span class="n">max_dca_multiplier</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">adjust_trade_position</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span>
                              <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                              <span class="n">min_stake</span><span class="p">:</span> <span class="nb">float</span> <span class="o">|</span> <span class="kc">None</span><span class="p">,</span> <span class="n">max_stake</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                              <span class="n">current_entry_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">current_exit_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                              <span class="n">current_entry_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">current_exit_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                              <span class="o">**</span><span class="n">kwargs</span>
                              <span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span> <span class="o">|</span> <span class="kc">None</span> <span class="o">|</span> <span class="nb">tuple</span><span class="p">[</span><span class="nb">float</span> <span class="o">|</span> <span class="kc">None</span><span class="p">,</span> <span class="nb">str</span> <span class="o">|</span> <span class="kc">None</span><span class="p">]:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        Custom trade adjustment logic, returning the stake amount that a trade should be</span>
<span class="sd">        increased or decreased.</span>
<span class="sd">        This means extra entry or exit orders with additional fees.</span>
<span class="sd">        Only called when \`position_adjustment_enable\` is set to True.</span>

<span class="sd">        For full documentation please go to https://www.freqtrade.io/en/latest/strategy-advanced/</span>

<span class="sd">        When not implemented by a strategy, returns None</span>

<span class="sd">        :param trade: trade object.</span>
<span class="sd">        :param current_time: datetime object, containing the current datetime</span>
<span class="sd">        :param current_rate: Current entry rate (same as current_entry_profit)</span>
<span class="sd">        :param current_profit: Current profit (as ratio), calculated based on current_rate </span>
<span class="sd">                               (same as current_entry_profit).</span>
<span class="sd">        :param min_stake: Minimal stake size allowed by exchange (for both entries and exits)</span>
<span class="sd">        :param max_stake: Maximum stake allowed (either through balance, or by exchange limits).</span>
<span class="sd">        :param current_entry_rate: Current rate using entry pricing.</span>
<span class="sd">        :param current_exit_rate: Current rate using exit pricing.</span>
<span class="sd">        :param current_entry_profit: Current profit using entry pricing.</span>
<span class="sd">        :param current_exit_profit: Current profit using exit pricing.</span>
<span class="sd">        :param **kwargs: Ensure to keep this here so updates to this won&#39;t break your strategy.</span>
<span class="sd">        :return float: Stake amount to adjust your trade,</span>
<span class="sd">                       Positive values to increase position, Negative values to decrease position.</span>
<span class="sd">                       Return None for no action.</span>
<span class="sd">                       Optionally, return a tuple with a 2nd element with an order reason</span>
<span class="sd">        &quot;&quot;&quot;</span>

        <span class="k">if</span> <span class="n">current_profit</span> <span class="o">&gt;</span> <span class="mf">0.05</span> <span class="ow">and</span> <span class="n">trade</span><span class="o">.</span><span class="n">nr_of_successful_exits</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
            <span class="c1"># Take half of the profit at +5%</span>
            <span class="k">return</span> <span class="o">-</span><span class="p">(</span><span class="n">trade</span><span class="o">.</span><span class="n">stake_amount</span> <span class="o">/</span> <span class="mi">2</span><span class="p">),</span> <span class="s2">&quot;half_profit_5%&quot;</span>

        <span class="k">if</span> <span class="n">current_profit</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mf">0.05</span><span class="p">:</span>
            <span class="k">return</span> <span class="kc">None</span>

        <span class="c1"># Obtain pair dataframe (just to show how to access it)</span>
        <span class="n">dataframe</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">dp</span><span class="o">.</span><span class="n">get_analyzed_dataframe</span><span class="p">(</span><span class="n">trade</span><span class="o">.</span><span class="n">pair</span><span class="p">,</span> <span class="bp">self</span><span class="o">.</span><span class="n">timeframe</span><span class="p">)</span>
        <span class="c1"># Only buy when not actively falling price.</span>
        <span class="n">last_candle</span> <span class="o">=</span> <span class="n">dataframe</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">squeeze</span><span class="p">()</span>
        <span class="n">previous_candle</span> <span class="o">=</span> <span class="n">dataframe</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="o">-</span><span class="mi">2</span><span class="p">]</span><span class="o">.</span><span class="n">squeeze</span><span class="p">()</span>
        <span class="k">if</span> <span class="n">last_candle</span><span class="p">[</span><span class="s2">&quot;close&quot;</span><span class="p">]</span> <span class="o">&lt;</span> <span class="n">previous_candle</span><span class="p">[</span><span class="s2">&quot;close&quot;</span><span class="p">]:</span>
            <span class="k">return</span> <span class="kc">None</span>

        <span class="n">filled_entries</span> <span class="o">=</span> <span class="n">trade</span><span class="o">.</span><span class="n">select_filled_orders</span><span class="p">(</span><span class="n">trade</span><span class="o">.</span><span class="n">entry_side</span><span class="p">)</span>
        <span class="n">count_of_entries</span> <span class="o">=</span> <span class="n">trade</span><span class="o">.</span><span class="n">nr_of_successful_entries</span>
        <span class="c1"># Allow up to 3 additional increasingly larger buys (4 in total)</span>
        <span class="c1"># Initial buy is 1x</span>
        <span class="c1"># If that falls to -5% profit, we buy 1.25x more, average profit should increase to roughly -2.2%</span>
        <span class="c1"># If that falls down to -5% again, we buy 1.5x more</span>
        <span class="c1"># If that falls once again down to -5%, we buy 1.75x more</span>
        <span class="c1"># Total stake for this trade would be 1 + 1.25 + 1.5 + 1.75 = 5.5x of the initial allowed stake.</span>
        <span class="c1"># That is why max_dca_multiplier is 5.5</span>
        <span class="c1"># Hope you have a deep wallet!</span>
        <span class="k">try</span><span class="p">:</span>
            <span class="c1"># This returns first order stake size</span>
            <span class="n">stake_amount</span> <span class="o">=</span> <span class="n">filled_entries</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">.</span><span class="n">stake_amount_filled</span>
            <span class="c1"># This then calculates current safety order size</span>
            <span class="n">stake_amount</span> <span class="o">=</span> <span class="n">stake_amount</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="p">(</span><span class="n">count_of_entries</span> <span class="o">*</span> <span class="mf">0.25</span><span class="p">))</span>
            <span class="k">return</span> <span class="n">stake_amount</span><span class="p">,</span> <span class="s2">&quot;1/3rd_increase&quot;</span>
        <span class="k">except</span> <span class="ne">Exception</span> <span class="k">as</span> <span class="n">exception</span><span class="p">:</span>
            <span class="k">return</span> <span class="kc">None</span>

        <span class="k">return</span> <span class="kc">None</span>
</code></pre></div><h3 id="position-adjust-calculations"> 포지션 조정 계산 <a class="headerlink" href="#position-adjust-calculations" title="영구 링크"> ¶ </a></h3><ul><li>진입 비율은 가중 평균을 사용하여 계산됩니다.</li><li>종료는 평균 진입 비율에 영향을 미치지 않습니다.</li><li>부분 종료 상대 이익은 이 시점의 평균 진입 가격에 상대적입니다.</li><li>최종 종료 상대 이익은 투자된 총 자본을 기준으로 계산됩니다. (아래 예제 참조)</li></ul><details class="example"><summary>계산 예제</summary><p><em> 이 예제는 단순화를 위해 수수료가 0인 것으로 가정하며, 가상의 코인에 대한 롱 포지션을 가정합니다. </em></p><ul><li>100@8$ 구매</li><li>100@9$ 구매 -&gt; 평균 가격: 8.5$</li><li>100@10$ 판매 -&gt; 평균 가격: 8.5$, 실현 이익 150$, 17.65%</li><li>150@11$ 구매 -&gt; 평균 가격: 10$, 실현 이익 150$, 17.65%</li><li>100@12$ 판매 -&gt; 평균 가격: 10$, 총 실현 이익 350$, 20%</li><li> 150@14$ 판매 -&gt; 평균 가격: 10$, 총 실현 이익 950$, 40% &lt;- <em> 이는 마지막 &quot;종료&quot; 메시지가 됩니다. </em></li></ul><p> 이 거래의 총 이익은 3350$ 투자에 대해 950$입니다( <code> 100@8$ + 100@9$ + 150@11$ </code> ). 따라서 최종 상대 이익은 28.35%( <code> 950 / 3350 </code> )입니다. </p></details><h2 id="adjust-order-price"> 주문 가격 조정 <a class="headerlink" href="#adjust-order-price" title="영구 링크"> ¶ </a></h2><p><code> adjust_order_price() </code> 콜백은 전략 개발자가 새 캔들이 도착할 때 제한 주문을 새로 고치거나 교체하는 데 사용할 수 있습니다. <br> 이 콜백은 각 반복마다 한 번 호출되며, 현재 캔들 내에서 주문이 (재)배치된 경우를 제외하고는 호출되지 않습니다. 이는 각 주문의 최대 (재)배치를 캔들당 한 번으로 제한합니다. 이는 첫 번째 호출이 초기 주문이 실행된 후 다음 캔들의 시작 시에 발생함을 의미합니다. </p><p><code> custom_entry_price() </code> / <code> custom_exit_price() </code> 는 여전히 신호 시 초기 제한 주문 가격 목표를 결정합니다. </p><p> 이 콜백에서 <code> None </code> 을 반환하여 주문을 취소할 수 있습니다. </p><p><code> current_order_rate </code> 를 반환하면 주문이 &quot;있는 그대로&quot; 거래소에 유지됩니다. 다른 가격을 반환하면 기존 주문이 취소되고 새 주문으로 교체됩니다. </p><p> 원래 주문의 취소가 실패하면 주문이 교체되지 않습니다. 이는 주문이 대부분 거래소에서 취소되었음을 의미합니다. 초기 진입에서 이러한 일이 발생하면 주문이 삭제되며, 포지션 조정 주문에서는 거래 크기가 그대로 유지됩니다. <br> 주문이 부분적으로 채워진 경우 주문이 교체되지 않습니다. 필요한 경우/원하는 경우 <a href="#adjust-trade-position"><code> adjust_trade_position() </code></a> 을 사용하여 거래 크기를 예상 포지션 크기로 조정할 수 있습니다. </p><div class="admonition warning"><p class="admonition-title">정기적인 타임아웃</p><p> 진입 <code> unfilledtimeout </code> 메커니즘(및 <code> check_entry_timeout() </code> / <code> check_exit_timeout() </code> )이 이 콜백보다 우선합니다. 위의 메서드를 통해 취소된 주문은 이 콜백이 호출되지 않습니다. 타임아웃 값을 기대에 맞게 업데이트해야 합니다. </p></div><div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>

    <span class="c1"># ... populate_* methods</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">adjust_order_price</span><span class="p">(</span>
        <span class="bp">self</span><span class="p">,</span>
        <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span>
        <span class="n">order</span><span class="p">:</span> <span class="n">Order</span> <span class="o">|</span> <span class="kc">None</span><span class="p">,</span>
        <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span>
        <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span>
        <span class="n">proposed_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
        <span class="n">current_order_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
        <span class="n">entry_tag</span><span class="p">:</span> <span class="nb">str</span> <span class="o">|</span> <span class="kc">None</span><span class="p">,</span>
        <span class="n">side</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span>
        <span class="n">is_entry</span><span class="p">:</span> <span class="nb">bool</span><span class="p">,</span>
        <span class="o">**</span><span class="n">kwargs</span><span class="p">,</span>
    <span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span><span class="p">:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        Exit and entry order price re-adjustment logic, returning the user desired limit price.</span>
<span class="sd">        This only executes when a order was already placed, still open (unfilled fully or partially)</span>
<span class="sd">        and not timed out on subsequent candles after entry trigger.</span>

<span class="sd">        For full documentation please go to https://www.freqtrade.io/en/latest/strategy-callbacks/</span>

<span class="sd">        When not implemented by a strategy, returns current_order_rate as default.</span>
<span class="sd">        If current_order_rate is returned then the existing order is maintained.</span>
<span class="sd">        If None is returned then order gets canceled but not replaced by a new one.</span>

<span class="sd">        :param pair: Pair that&#39;s currently analyzed</span>
<span class="sd">        :param trade: Trade object.</span>
<span class="sd">        :param order: Order object</span>
<span class="sd">        :param current_time: datetime object, containing the current datetime</span>
<span class="sd">        :param proposed_rate: Rate, calculated based on pricing settings in entry_pricing.</span>
<span class="sd">        :param current_order_rate: Rate of the existing order in place.</span>
<span class="sd">        :param entry_tag: Optional entry_tag (buy_tag) if provided with the buy signal.</span>
<span class="sd">        :param side: &#39;long&#39; or &#39;short&#39; - indicating the direction of the proposed trade</span>
<span class="sd">        :param is_entry: True if the order is an entry order, False if it&#39;s an exit order.</span>
<span class="sd">        :param **kwargs: Ensure to keep this here so updates to this won&#39;t break your strategy.</span>
<span class="sd">        :return float: New entry price value if provided</span>
<span class="sd">        &quot;&quot;&quot;</span>

        <span class="c1"># Limit entry orders to use and follow SMA200 as price target for the first 10 minutes since entry trigger for BTC/USDT pair.</span>
        <span class="k">if</span> <span class="p">(</span>
            <span class="n">is_entry</span>
            <span class="ow">and</span> <span class="n">pair</span> <span class="o">==</span> <span class="s2">&quot;BTC/USDT&quot;</span> 
            <span class="ow">and</span> <span class="n">entry_tag</span> <span class="o">==</span> <span class="s2">&quot;long_sma200&quot;</span> 
            <span class="ow">and</span> <span class="n">side</span> <span class="o">==</span> <span class="s2">&quot;long&quot;</span> 
            <span class="ow">and</span> <span class="p">(</span><span class="n">current_time</span> <span class="o">-</span> <span class="n">timedelta</span><span class="p">(</span><span class="n">minutes</span><span class="o">=</span><span class="mi">10</span><span class="p">))</span> <span class="o">&lt;=</span> <span class="n">trade</span><span class="o">.</span><span class="n">open_date_utc</span>
        <span class="p">):</span>
            <span class="c1"># just cancel the order if it has been filled more than half of the amount</span>
            <span class="k">if</span> <span class="n">order</span><span class="o">.</span><span class="n">filled</span> <span class="o">&gt;</span> <span class="n">order</span><span class="o">.</span><span class="n">remaining</span><span class="p">:</span>
                <span class="k">return</span> <span class="kc">None</span>
            <span class="k">else</span><span class="p">:</span>
                <span class="n">dataframe</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">dp</span><span class="o">.</span><span class="n">get_analyzed_dataframe</span><span class="p">(</span><span class="n">pair</span><span class="o">=</span><span class="n">pair</span><span class="p">,</span> <span class="n">timeframe</span><span class="o">=</span><span class="bp">self</span><span class="o">.</span><span class="n">timeframe</span><span class="p">)</span>
                <span class="n">current_candle</span> <span class="o">=</span> <span class="n">dataframe</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">squeeze</span><span class="p">()</span>
                <span class="c1"># desired price</span>
                <span class="k">return</span> <span class="n">current_candle</span><span class="p">[</span><span class="s2">&quot;sma_200&quot;</span><span class="p">]</span>
        <span class="c1"># default: maintain existing order</span>
        <span class="k">return</span> <span class="n">current_order_rate</span>
</code></pre></div><div class="admonition danger"><p class="admonition-title"><code> adjust_*_price() </code> 와의 비호환성 </p><p><code> adjust_order_price() </code> 와 <code> adjust_entry_price() </code> / <code> adjust_exit_price() </code> 를 모두 구현한 경우 <code> adjust_order_price() </code> 만 사용됩니다. 진입/종료 가격을 조정해야 하는 경우 논리를 <code> adjust_order_price() </code> 에 구현하거나 분할된 <code> adjust_entry_price() </code> / <code> adjust_exit_price() </code> 콜백을 사용할 수 있지만 둘 다 사용할 수는 없습니다. 이를 혼합하는 것은 지원되지 않으며 봇 시작 시 오류가 발생합니다. </p></div><h3 id="adjust-entry-price"> 진입 가격 조정 <a class="headerlink" href="#adjust-entry-price" title="영구 링크"> ¶ </a></h3><p><code> adjust_entry_price() </code> 콜백은 전략 개발자가 진입 제한 주문을 새로 고치거나 교체하는 데 사용할 수 있습니다. 이는 <code> adjust_order_price() </code> 의 하위 집합이며 진입 주문에 대해서만 호출됩니다. 나머지 동작은 <code> adjust_order_price() </code> 와 동일합니다. </p><p> 거래 오픈 날짜( <code> trade.open_date_utc </code> )는 첫 번째 주문이 실행된 시점에 유지됩니다. 이를 인식하고 다른 콜백에서 논리를 조정하여 첫 번째 채워진 주문의 날짜를 사용할 수 있도록 해야 합니다. </p><h3 id="adjust-exit-price"> 종료 가격 조정 <a class="headerlink" href="#adjust-exit-price" title="영구 링크"> ¶ </a></h3><p><code> adjust_exit_price() </code> 콜백은 전략 개발자가 종료 제한 주문을 새로 고치거나 교체하는 데 사용할 수 있습니다. 이는 <code> adjust_order_price() </code> 의 하위 집합이며 종료 주문에 대해서만 호출됩니다. 나머지 동작은 <code> adjust_order_price() </code> 와 동일합니다. </p><h2 id="leverage-callback"> 레버리지 콜백 <a class="headerlink" href="#leverage-callback" title="영구 링크"> ¶ </a></h2><p>레버리지를 허용하는 시장에서 거래할 때 이 메서드는 원하는 레버리지를 반환해야 합니다(기본값은 1 -&gt; 레버리지 없음).</p><p>500USDT의 자본을 가정할 때, 레버리지=3인 거래는 500 x 3 = 1500 USDT의 포지션을 초래합니다.</p><p><code> max_leverage </code> 를 초과하는 값은 <code> max_leverage </code> 로 조정됩니다. 레버리지를 지원하지 않는 시장/거래소의 경우 이 메서드는 무시됩니다. </p><div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">leverage</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                 <span class="n">proposed_leverage</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">max_leverage</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">entry_tag</span><span class="p">:</span> <span class="nb">str</span> <span class="o">|</span> <span class="kc">None</span><span class="p">,</span> <span class="n">side</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span>
                 <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span><span class="p">:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        Customize leverage for each new trade. This method is only called in futures mode.</span>

<span class="sd">        :param pair: Pair that&#39;s currently analyzed</span>
<span class="sd">        :param current_time: datetime object, containing the current datetime</span>
<span class="sd">        :param current_rate: Rate, calculated based on pricing settings in exit_pricing.</span>
<span class="sd">        :param proposed_leverage: A leverage proposed by the bot.</span>
<span class="sd">        :param max_leverage: Max leverage allowed on this pair</span>
<span class="sd">        :param entry_tag: Optional entry_tag (buy_tag) if provided with the buy signal.</span>
<span class="sd">        :param side: &quot;long&quot; or &quot;short&quot; - indicating the direction of the proposed trade</span>
<span class="sd">        :return: A leverage amount, which is between 1.0 and max_leverage.</span>
<span class="sd">        &quot;&quot;&quot;</span>
        <span class="k">return</span> <span class="mf">1.0</span>
</code></pre></div><p>모든 이익 계산에는 레버리지가 포함됩니다. 손절매/ROI도 레버리지를 포함하여 계산됩니다. 10배 레버리지에서 10% 손절매를 정의하면 1% 하락 시 손절매가 트리거됩니다.</p><h2 id="order-filled-callback"> 주문 채워짐 콜백 <a class="headerlink" href="#order-filled-callback" title="영구 링크"> ¶ </a></h2><p><code> order_filled() </code> 콜백은 주문이 채워진 후 현재 거래 상태에 따라 특정 작업을 수행하는 데 사용할 수 있습니다. 이는 주문 유형(진입, 종료, 손절매 또는 포지션 조정)에 관계없이 호출됩니다. </p><p>전략이 거래 진입 시 캔들의 최고값을 저장해야 하는 경우, 다음 예제와 같이 이 콜백을 사용할 수 있습니다.</p><div class="highlight"><pre><span></span><code><span class="c1"># Default imports</span>

<span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">order_filled</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">order</span><span class="p">:</span> <span class="n">Order</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="kc">None</span><span class="p">:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        Called right after an order fills. </span>
<span class="sd">        Will be called for all order types (entry, exit, stoploss, position adjustment).</span>
<span class="sd">        :param pair: Pair for trade</span>
<span class="sd">        :param trade: trade object.</span>
<span class="sd">        :param order: Order object.</span>
<span class="sd">        :param current_time: datetime object, containing the current datetime</span>
<span class="sd">        :param **kwargs: Ensure to keep this here so updates to this won&#39;t break your strategy.</span>
<span class="sd">        &quot;&quot;&quot;</span>
        <span class="c1"># Obtain pair dataframe (just to show how to access it)</span>
        <span class="n">dataframe</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">dp</span><span class="o">.</span><span class="n">get_analyzed_dataframe</span><span class="p">(</span><span class="n">trade</span><span class="o">.</span><span class="n">pair</span><span class="p">,</span> <span class="bp">self</span><span class="o">.</span><span class="n">timeframe</span><span class="p">)</span>
        <span class="n">last_candle</span> <span class="o">=</span> <span class="n">dataframe</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">squeeze</span><span class="p">()</span>

        <span class="k">if</span> <span class="p">(</span><span class="n">trade</span><span class="o">.</span><span class="n">nr_of_successful_entries</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="ow">and</span> <span class="p">(</span><span class="n">order</span><span class="o">.</span><span class="n">ft_order_side</span> <span class="o">==</span> <span class="n">trade</span><span class="o">.</span><span class="n">entry_side</span><span class="p">):</span>
            <span class="n">trade</span><span class="o">.</span><span class="n">set_custom_data</span><span class="p">(</span><span class="n">key</span><span class="o">=</span><span class="s2">&quot;entry_candle_high&quot;</span><span class="p">,</span> <span class="n">value</span><span class="o">=</span><span class="n">last_candle</span><span class="p">[</span><span class="s2">&quot;high&quot;</span><span class="p">])</span>

        <span class="k">return</span> <span class="kc">None</span>
</code></pre></div>`,82))])}const y=t(d,[["render",g]]);export{y as default};
