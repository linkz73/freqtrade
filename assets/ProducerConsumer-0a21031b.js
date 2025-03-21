import{o as a,c as n,a as p}from"./index-1d9d7dc5.js";const c={class:"md-content__inner md-typeset"},o={__name:"ProducerConsumer",setup(l){return(e,s)=>(a(),n("article",c,s[0]||(s[0]=[p(`<h1 id="producer-consumer-mode"> 프로듀서 / 컨슈머 모드 <a class="headerlink" href="#producer-consumer-mode" title="영구 링크"> ¶ </a></h1><p> freqtrade는 인스턴스(이하 <code> 컨슈머 </code> )가 메시지 웹소켓을 사용하여 상위 freqtrade 인스턴스(이하 <code> 프로듀서 </code> )로부터 메시지를 수신할 수 있는 메커니즘을 제공합니다. 주로 <code> analyzed_df </code> 와 <code> whitelist </code> 메시지를 수신합니다. 이를 통해 여러 봇에서 페어에 대한 계산된 지표(및 신호)를 여러 번 계산할 필요 없이 재사용할 수 있습니다. </p><p> 메시지 웹소켓 설정에 대한 자세한 내용은 Rest API 문서의 <a href="rest-api.html"> 메시지 웹소켓 </a> 섹션을 참조하세요. 이 설정은 프로듀서의 <code> api_server </code> 구성을 포함합니다. </p><div class="admonition note"><p class="admonition-title">참고</p><p><code> ws_token </code> 을 무작위로 설정하고 본인만 알 수 있도록 설정하여 봇에 대한 무단 접근을 방지하는 것을 강력히 권장합니다. </p></div><h2 id="configuration"> 구성 <a class="headerlink" href="#configuration" title="영구 링크"> ¶ </a></h2><p><code> external_message_consumer </code> 섹션을 컨슈머의 설정 파일에 추가하여 인스턴스 구독을 활성화하세요. </p><div class="highlight"><pre><code><span class="p">{</span>
<span class="w">    </span><span class="c1">//...기존 설정...</span>
<span class="w">   </span><span class="nt">&quot;external_message_consumer&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">        </span><span class="nt">&quot;enabled&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;producers&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">            </span><span class="p">{</span>
<span class="w">                </span><span class="nt">&quot;name&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;기본값&quot;</span><span class="p">,</span><span class="w"> </span><span class="c1">// 원하는 이름으로 설정 가능, 기본값은 &quot;기본값&quot;</span>
<span class="w">                </span><span class="nt">&quot;host&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;127.0.0.1&quot;</span><span class="p">,</span><span class="w"> </span><span class="c1">// 프로듀서의 api_server 설정에서 가져온 호스트</span>
<span class="w">                </span><span class="nt">&quot;port&quot;</span><span class="p">:</span><span class="w"> </span><span class="mi">8080</span><span class="p">,</span><span class="w"> </span><span class="c1">// 프로듀서의 api_server 설정에서 가져온 포트</span>
<span class="w">                </span><span class="nt">&quot;secure&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">false</span><span class="p">,</span><span class="w"> </span><span class="c1">// 보안 웹소켓 연결 사용 여부, 기본값은 false</span>
<span class="w">                </span><span class="nt">&quot;ws_token&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;비밀_웹소켓_토큰&quot;</span><span class="w"> </span><span class="c1">// 프로듀서의 api_server 설정에서 가져온 ws_token</span>
<span class="w">            </span><span class="p">}</span>
<span class="w">        </span><span class="p">],</span>
<span class="w">        </span><span class="c1">// 아래 설정은 선택 사항이며, 일반적으로 필요하지 않습니다.</span>
<span class="w">        </span><span class="c1">// &quot;wait_timeout&quot;: 300,</span>
<span class="w">        </span><span class="c1">// &quot;ping_timeout&quot;: 10,</span>
<span class="w">        </span><span class="c1">// &quot;sleep_time&quot;: 10,</span>
<span class="w">        </span><span class="c1">// &quot;remove_entry_exit_signals&quot;: false,</span>
<span class="w">        </span><span class="c1">// &quot;message_size_limit&quot;: 8</span>
<span class="w">    </span><span class="p">}</span>
<span class="w">    </span><span class="c1">//...기존 설정...</span>
<span class="p">}</span>
</code></pre></div><table><thead><tr><th>매개변수</th><th>설명</th></tr></thead><tbody><tr><td><code> enabled </code></td><td><strong> 필수. </strong> 컨슈머 모드를 활성화합니다. false로 설정하면 이 섹션의 다른 모든 설정은 무시됩니다. <br><em> 기본값: <code> false </code> . </em><br><strong> 데이터 유형: </strong> boolean . </td></tr><tr><td><code> producers </code></td><td><strong> 필수. </strong> 프로듀서 목록 <br><strong> 데이터 유형: </strong> Array. </td></tr><tr><td><code> producers.name </code></td><td><strong> 필수. </strong> 이 프로듀서의 이름입니다. 여러 프로듀서를 사용하는 경우 <code> get_producer_pairs() </code> 및 <code> get_producer_df() </code> 호출 시 이 이름을 사용해야 합니다. <br><strong> 데이터 유형: </strong> string </td></tr><tr><td><code> producers.host </code></td><td><strong> 필수. </strong> 프로듀서의 호스트 이름 또는 IP 주소. <br><strong> 데이터 유형: </strong> string </td></tr><tr><td><code> producers.port </code></td><td><strong> 필수. </strong> 위의 호스트와 일치하는 포트. <br><em> 기본값: <code> 8080 </code> . </em><br><strong> 데이터 유형: </strong> Integer </td></tr><tr><td><code> producers.secure </code></td><td><strong> 선택 사항. </strong> 웹소켓 연결에서 SSL 사용 여부. 기본값은 False입니다. <br><strong> 데이터 유형: </strong> string </td></tr><tr><td><code> producers.ws_token </code></td><td><strong> 필수. </strong> 프로듀서에서 구성된 <code> ws_token </code> . <br><strong> 데이터 유형: </strong> string </td></tr><tr><td></td><td><strong> 선택적 설정 </strong></td></tr><tr><td><code> wait_timeout </code></td><td> 메시지를 수신하지 않을 경우 다시 핑을 보낼 때까지의 타임아웃. <br><em> 기본값: <code> 300 </code> . </em><br><strong> 데이터 유형: </strong> Integer - 초 단위. </td></tr><tr><td><code> ping_timeout </code></td><td> 핑 타임아웃 <br><em> 기본값: <code> 10 </code> . </em><br><strong> 데이터 유형: </strong> Integer - 초 단위. </td></tr><tr><td><code> sleep_time </code></td><td> 연결 재시도 전 대기 시간. <br><em> 기본값: <code> 10 </code> . </em><br><strong> 데이터 유형: </strong> Integer - 초 단위. </td></tr><tr><td><code> remove_entry_exit_signals </code></td><td> 데이터프레임 수신 시 신호 열을 제거(0으로 설정)합니다. <br><em> 기본값: <code> false </code> . </em><br><strong> 데이터 유형: </strong> Boolean. </td></tr><tr><td><code> message_size_limit </code></td><td> 메시지당 크기 제한 <br><em> 기본값: <code> 8 </code> . </em><br><strong> 데이터 유형: </strong> Integer - 메가바이트 단위. </td></tr></tbody></table><p><code> populate_indicators() </code> 에서 지표를 계산하는 대신(또는 함께) 팔로워 인스턴스는 프로듀서 인스턴스의 메시지(또는 고급 구성에서 여러 프로듀서 인스턴스)의 연결을 수신하고 활성 화이트리스트의 각 페어에 대해 프로듀서의 가장 최근에 분석된 데이터프레임을 요청합니다. </p><p>컨슈머 인스턴스는 자체적으로 지표를 계산할 필요 없이 분석된 데이터프레임의 전체 복사본을 갖게 됩니다.</p><h2 id="examples"> 예제 <a class="headerlink" href="#examples" title="영구 링크"> ¶ </a></h2><h3 id="example-producer-strategy"> 예제 - 프로듀서 전략 <a class="headerlink" href="#example-producer-strategy" title="영구 링크"> ¶ </a></h3><p>여러 지표를 사용하는 간단한 전략입니다. 전략 자체에서는 특별한 고려 사항이 필요하지 않습니다.</p><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">ProducerStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="c1">#...</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">populate_indicators</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        표준 freqtrade 방식으로 지표를 계산하여 다른 인스턴스에 브로드캐스트할 수 있습니다.</span>
<span class="sd">        &quot;&quot;&quot;</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;rsi&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">RSI</span><span class="p">(</span><span class="n">dataframe</span><span class="p">)</span>
        <span class="n">bollinger</span> <span class="o">=</span> <span class="n">qtpylib</span><span class="o">.</span><span class="n">bollinger_bands</span><span class="p">(</span><span class="n">qtpylib</span><span class="o">.</span><span class="n">typical_price</span><span class="p">(</span><span class="n">dataframe</span><span class="p">),</span> <span class="n">window</span><span class="o">=</span><span class="mi">20</span><span class="p">,</span> <span class="n">stds</span><span class="o">=</span><span class="mi">2</span><span class="p">)</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;bb_lowerband&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">bollinger</span><span class="p">[</span><span class="s1">&#39;lower&#39;</span><span class="p">]</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;bb_middleband&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">bollinger</span><span class="p">[</span><span class="s1">&#39;mid&#39;</span><span class="p">]</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;bb_upperband&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">bollinger</span><span class="p">[</span><span class="s1">&#39;upper&#39;</span><span class="p">]</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">TEMA</span><span class="p">(</span><span class="n">dataframe</span><span class="p">,</span> <span class="n">timeperiod</span><span class="o">=</span><span class="mi">9</span><span class="p">)</span>

        <span class="k">return</span> <span class="n">dataframe</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">populate_entry_trend</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        주어진 데이터프레임에 대한 진입 신호를 채웁니다.</span>
<span class="sd">        &quot;&quot;&quot;</span>
        <span class="n">dataframe</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span>
            <span class="p">(</span>
                <span class="p">(</span><span class="n">qtpylib</span><span class="o">.</span><span class="n">crossed_above</span><span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;rsi&#39;</span><span class="p">],</span> <span class="bp">self</span><span class="o">.</span><span class="n">buy_rsi</span><span class="o">.</span><span class="n">value</span><span class="p">))</span> <span class="o">&amp;</span>
                <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema&#39;</span><span class="p">]</span> <span class="o">&lt;=</span> <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;bb_middleband&#39;</span><span class="p">])</span> <span class="o">&amp;</span>
                <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema&#39;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema&#39;</span><span class="p">]</span><span class="o">.</span><span class="n">shift</span><span class="p">(</span><span class="mi">1</span><span class="p">))</span> <span class="o">&amp;</span>
                <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;volume&#39;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span>
            <span class="p">),</span>
            <span class="s1">&#39;enter_long&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span>

        <span class="k">return</span> <span class="n">dataframe</span>
</code></pre></div><div class="admonition tip"><p class="admonition-title">FreqAI</p><p> 이를 사용하여 강력한 머신에서 <a href="freqai.html"> FreqAI </a> 를 설정하고, Raspberry Pi와 같은 간단한 머신에서 컨슈머를 실행하여 프로듀서에서 생성된 신호를 다양한 방식으로 해석할 수 있습니다. </p></div><h3 id="example-consumer-strategy"> 예제 - 컨슈머 전략 <a class="headerlink" href="#example-consumer-strategy" title="영구 링크"> ¶ </a></h3><p>지표를 자체적으로 계산하지 않지만, 프로듀서에서 계산된 동일한 분석 데이터프레임을 사용하여 거래 결정을 내릴 수 있는 논리적으로 동등한 전략입니다. 이 예제에서 컨슈머는 동일한 진입 기준을 가지지만, 반드시 그럴 필요는 없습니다. 컨슈머는 다른 논리를 사용하여 거래를 진입/종료할 수 있으며, 지정된 지표만 사용할 수 있습니다.</p><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">ConsumerStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="c1">#...</span>
    <span class="n">process_only_new_candles</span> <span class="o">=</span> <span class="kc">False</span> <span class="c1"># required for consumers</span>

    <span class="n">_columns_to_expect</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;rsi_default&#39;</span><span class="p">,</span> <span class="s1">&#39;tema_default&#39;</span><span class="p">,</span> <span class="s1">&#39;bb_middleband_default&#39;</span><span class="p">]</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">populate_indicators</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        다른 freqtrade 인스턴스에서 미리 채워진 지표를 가져오기 위해 웹소켓 API를 사용합니다.</span>
<span class="sd">        \`self.dp.get_producer_df(pair)\`를 사용하여 데이터프레임을 가져옵니다.</span>
<span class="sd">        &quot;&quot;&quot;</span>
        <span class="n">pair</span> <span class="o">=</span> <span class="n">metadata</span><span class="p">[</span><span class="s1">&#39;pair&#39;</span><span class="p">]</span>
        <span class="n">timeframe</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">timeframe</span>

        <span class="n">producer_pairs</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">dp</span><span class="o">.</span><span class="n">get_producer_pairs</span><span class="p">()</span>
        <span class="c1"># 특정 프로듀서에서 페어를 가져오려면 다음을 사용하세요:</span>
        <span class="c1"># self.dp.get_producer_pairs(&quot;my_other_producer&quot;)</span>

        <span class="c1"># 이 함수는 분석된 데이터프레임과 분석된 시간을 반환합니다.</span>
        <span class="n">producer_dataframe</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">dp</span><span class="o">.</span><span class="n">get_producer_df</span><span class="p">(</span><span class="n">pair</span><span class="p">)</span>
        <span class="c1"># 프로듀서가 제공하는 경우 다른 데이터를 가져올 수 있습니다:</span>
        <span class="c1"># self.dp.get_producer_df(</span>
        <span class="c1">#   pair,</span>
        <span class="c1">#   timeframe=&quot;1h&quot;,</span>
        <span class="c1">#   candle_type=CandleType.SPOT,</span>
        <span class="c1">#   producer_name=&quot;my_other_producer&quot;</span>
        <span class="c1"># )</span>

        <span class="k">if</span> <span class="ow">not</span> <span class="n">producer_dataframe</span><span class="o">.</span><span class="n">empty</span><span class="p">:</span>
            <span class="c1"># 프로듀서의 진입/종료 신호를 직접 전달하려는 경우,</span>
            <span class="c1"># ffill=False를 지정하거나 의도하지 않은 결과가 발생할 수 있습니다.</span>
            <span class="n">merged_dataframe</span> <span class="o">=</span> <span class="n">merge_informative_pair</span><span class="p">(</span><span class="n">dataframe</span><span class="p">,</span> <span class="n">producer_dataframe</span><span class="p">,</span>
                                                      <span class="n">timeframe</span><span class="p">,</span> <span class="n">timeframe</span><span class="p">,</span>
                                                      <span class="n">append_timeframe</span><span class="o">=</span><span class="kc">False</span><span class="p">,</span>
                                                      <span class="n">suffix</span><span class="o">=</span><span class="s2">&quot;default&quot;</span><span class="p">)</span>
            <span class="k">return</span> <span class="n">merged_dataframe</span>
        <span class="k">else</span><span class="p">:</span>
            <span class="n">dataframe</span><span class="p">[</span><span class="bp">self</span><span class="o">.</span><span class="n">_columns_to_expect</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span>

        <span class="k">return</span> <span class="n">dataframe</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">populate_entry_trend</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        주어진 데이터프레임에 대한 진입 신호를 채웁니다.</span>
<span class="sd">        &quot;&quot;&quot;</span>
        <span class="c1"># 데이터프레임 열을 사용하여 직접 계산한 것처럼 사용합니다.</span>
        <span class="n">dataframe</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span>
            <span class="p">(</span>
                <span class="p">(</span><span class="n">qtpylib</span><span class="o">.</span><span class="n">crossed_above</span><span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;rsi_default&#39;</span><span class="p">],</span> <span class="bp">self</span><span class="o">.</span><span class="n">buy_rsi</span><span class="o">.</span><span class="n">value</span><span class="p">))</span> <span class="o">&amp;</span>
                <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema_default&#39;</span><span class="p">]</span> <span class="o">&lt;=</span> <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;bb_middleband_default&#39;</span><span class="p">])</span> <span class="o">&amp;</span>
                <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema_default&#39;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema_default&#39;</span><span class="p">]</span><span class="o">.</span><span class="n">shift</span><span class="p">(</span><span class="mi">1</span><span class="p">))</span> <span class="o">&amp;</span>
                <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;volume&#39;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span>
            <span class="p">),</span>
            <span class="s1">&#39;enter_long&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span>

        <span class="k">return</span> <span class="n">dataframe</span>
</code></pre></div><div class="admonition tip"><p class="admonition-title">상위 신호 사용</p><p><code> remove_entry_exit_signals=false </code> 로 설정하면 프로듀서의 신호를 직접 사용할 수도 있습니다. 이 신호는 <code> enter_long_default </code> (가정 <code> suffix=&quot;default&quot; </code> 가 사용됨)로 사용할 수 있으며, 직접 신호로 사용하거나 추가 지표로 사용할 수 있습니다. </p></div>`,19)])))}};export{o as default};
