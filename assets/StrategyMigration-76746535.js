import{r as o,o as t,c as r,a as n,b as l,d as a,e as c,w as e}from"./index-cd9b39de.js";const i={class:"md-content__inner md-typeset"},_={__name:"StrategyMigration",setup(d){return(u,s)=>{const p=o("router-link");return t(),r("article",i,[s[12]||(s[12]=n(`<h1 id="strategy-migration-between-v2-and-v3"> V2와 V3 간의 전략 마이그레이션 <a class="headerlink" href="#strategy-migration-between-v2-and-v3" title="영구 링크"> ¶ </a></h1><p>새로운 시장과 거래 유형(예: 숏 거래 / 레버리지 거래)을 지원하기 위해 인터페이스에서 몇 가지 변경 사항이 필요했습니다. 스팟 시장 이외의 시장을 사용하려면 전략을 새 형식으로 마이그레이션해야 합니다.</p><p> 기존 전략과의 호환성을 유지하기 위해 많은 노력을 기울였으므로, <strong>스팟 시장</strong>에서 freqtrade를 계속 사용하려는 경우 현재로서는 변경이 필요하지 않을 수 있습니다. </p><p>빠른 요약을 체크리스트로 사용할 수 있습니다. 전체 마이그레이션 세부정보는 아래의 자세한 섹션을 참조하세요.</p><h2 id="quick-summary-migration-checklist"> 빠른 요약 / 마이그레이션 체크리스트 <a class="headerlink" href="#quick-summary-migration-checklist" title="영구 링크"> ¶ </a></h2><p> 참고: <code> forcesell </code> , <code> forcebuy </code> , <code> emergencysell </code> 은 각각 <code> force_exit </code> , <code> force_enter </code> , <code> emergency_exit </code> 로 변경되었습니다. </p><ul><li> 전략 메서드: <ul><li><a href="#populate_buy_trend"><code> populate_buy_trend() </code> -&gt; <code> populate_entry_trend() </code></a></li><li><a href="#populate_sell_trend"><code> populate_sell_trend() </code> -&gt; <code> populate_exit_trend() </code></a></li><li><a href="#custom_sell"><code> custom_sell() </code> -&gt; <code> custom_exit() </code></a></li><li><a href="#custom_entry_timeout"><code> check_buy_timeout() </code> -&gt; <code> check_entry_timeout() </code></a></li><li><a href="#custom_entry_timeout"><code> check_sell_timeout() </code> -&gt; <code> check_exit_timeout() </code></a></li><li> 새로운 <code> side </code> 인수가 trade 객체 없이 콜백에 추가됨 <ul><li><a href="#custom_stake_amount"><code> custom_stake_amount </code></a></li><li><a href="#confirm_trade_entry"><code> confirm_trade_entry </code></a></li><li><a href="#custom_entry_price"><code> custom_entry_price </code></a></li></ul></li><li><a href="#confirm_trade_exit"><code> confirm_trade_exit </code> 에서 인수 이름 변경 </a></li></ul></li><li> 데이터프레임 열: <ul><li><a href="#populate_buy_trend"><code> buy </code> -&gt; <code> enter_long </code></a></li><li><a href="#populate_sell_trend"><code> sell </code> -&gt; <code> exit_long </code></a></li><li><a href="#populate_buy_trend"><code> buy_tag </code> -&gt; <code> enter_tag </code> (롱 및 숏 거래 모두에 사용됨) </a></li><li><a href="#populate_sell_trend"> 새로운 열 <code> enter_short </code> 및 해당하는 새로운 열 <code> exit_short </code></a></li></ul></li><li> trade 객체에 다음과 같은 새로운 속성이 추가됨: <ul><li><code> is_short </code></li><li><code> entry_side </code></li><li><code> exit_side </code></li><li><code> trade_direction </code></li><li> 이름 변경: <code> sell_reason </code> -&gt; <code> exit_reason </code></li></ul></li><li><a href="#adjust-trade-position-changes"><code> trade.nr_of_successful_buys </code> 를 <code> trade.nr_of_successful_entries </code> 로 이름 변경 (주로 <code> adjust_trade_position() </code> 에 관련됨) </a></li><li> 새로운 <a href="strategy-callbacks.html"><code> leverage </code> 콜백 도입 </a> . </li><li>Informative pairs는 이제 Tuple의 세 번째 요소로 캔들 유형을 전달할 수 있습니다.</li><li><code> @informative </code> 데코레이터는 이제 선택적 <code> candle_type </code> 인수를 받습니다. </li><li><a href="#helper-methods"> helper methods </a><code> stoploss_from_open </code> 및 <code> stoploss_from_absolute </code> 는 이제 추가 인수로 <code> is_short </code> 를 받습니다. </li><li><code> INTERFACE_VERSION </code> 을 3으로 설정해야 합니다. </li><li><a href="#strategyconfiguration-settings"> 전략/구성 설정 </a> . <ul><li><code> order_time_in_force </code> buy -&gt; entry, sell -&gt; exit. </li><li><code> order_types </code> buy -&gt; entry, sell -&gt; exit. </li><li><code> unfilledtimeout </code> buy -&gt; entry, sell -&gt; exit. </li><li><code> ignore_buying_expired_candle_after </code> -&gt; &quot;ask_strategy/exit_pricing&quot; 대신 루트 수준으로 이동 </li></ul></li><li> 용어 변경 <ul><li> 판매 이유가 &quot;exit&quot; 대신 &quot;sell&quot;의 새로운 명명법을 반영하도록 변경되었습니다. 전략에서 <code> exit_reason </code> 체크를 사용하는 경우 주의하고 전략을 업데이트하세요. <ul><li><code> sell_signal </code> -&gt; <code> exit_signal </code></li><li><code> custom_sell </code> -&gt; <code> custom_exit </code></li><li><code> force_sell </code> -&gt; <code> force_exit </code></li><li><code> emergency_sell </code> -&gt; <code> emergency_exit </code></li></ul></li><li> 주문 가격 책정 <ul><li><code> bid_strategy </code> -&gt; <code> entry_pricing </code></li><li><code> ask_strategy </code> -&gt; <code> exit_pricing </code></li><li><code> ask_last_balance </code> -&gt; <code> price_last_balance </code></li><li><code> bid_last_balance </code> -&gt; <code> price_last_balance </code></li></ul></li><li> Webhook 용어가 &quot;sell&quot;에서 &quot;exit&quot;로, &quot;buy&quot;에서 &quot;entry&quot;로 변경되었습니다. <ul><li><code> webhookbuy </code> -&gt; <code> entry </code></li><li><code> webhookbuyfill </code> -&gt; <code> entry_fill </code></li><li><code> webhookbuycancel </code> -&gt; <code> entry_cancel </code></li><li><code> webhooksell </code> -&gt; <code> exit </code></li><li><code> webhooksellfill </code> -&gt; <code> exit_fill </code></li><li><code> webhooksellcancel </code> -&gt; <code> exit_cancel </code></li></ul></li><li> Telegram 알림 설정 <ul><li><code> buy </code> -&gt; <code> entry </code></li><li><code> buy_fill </code> -&gt; <code> entry_fill </code></li><li><code> buy_cancel </code> -&gt; <code> entry_cancel </code></li><li><code> sell </code> -&gt; <code> exit </code></li><li><code> sell_fill </code> -&gt; <code> exit_fill </code></li><li><code> sell_cancel </code> -&gt; <code> exit_cancel </code></li></ul></li><li> 전략/구성 설정: <ul><li><code> use_sell_signal </code> -&gt; <code> use_exit_signal </code></li><li><code> sell_profit_only </code> -&gt; <code> exit_profit_only </code></li><li><code> sell_profit_offset </code> -&gt; <code> exit_profit_offset </code></li><li><code> ignore_roi_if_buy_signal </code> -&gt; <code> ignore_roi_if_entry_signal </code></li><li><code> forcebuy_enable </code> -&gt; <code> force_entry_enable </code></li></ul></li></ul></li></ul><h2 id="extensive-explanation"> 상세 설명 <a class="headerlink" href="#extensive-explanation" title="영구 링크"> ¶ </a></h2><h3 id="populate_buy_trend"><code> populate_buy_trend </code><a class="headerlink" href="#populate_buy_trend" title="영구 링크"> ¶ </a></h3><p><code> populate_buy_trend() </code> 에서 열을 <code> &#39;buy&#39; </code> 에서 <code> &#39;enter_long&#39; </code> 로 할당하는 것과 메서드 이름을 <code> populate_buy_trend </code> 에서 <code> populate_entry_trend </code> 로 변경해야 합니다. </p><div class="highlight"><pre><code><span class="hll"><span class="k">def</span><span class="w"> </span><span class="nf">populate_buy_trend</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
</span>    <span class="n">dataframe</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span>
        <span class="p">(</span>
            <span class="p">(</span><span class="n">qtpylib</span><span class="o">.</span><span class="n">crossed_above</span><span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;rsi&#39;</span><span class="p">],</span> <span class="mi">30</span><span class="p">))</span> <span class="o">&amp;</span>  <span class="c1"># Signal: RSI crosses above 30</span>
            <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema&#39;</span><span class="p">]</span> <span class="o">&lt;=</span> <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;bb_middleband&#39;</span><span class="p">])</span> <span class="o">&amp;</span>  <span class="c1"># Guard</span>
            <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema&#39;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema&#39;</span><span class="p">]</span><span class="o">.</span><span class="n">shift</span><span class="p">(</span><span class="mi">1</span><span class="p">))</span> <span class="o">&amp;</span>  <span class="c1"># Guard</span>
            <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;volume&#39;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span>  <span class="c1"># Make sure Volume is not 0</span>
        <span class="p">),</span>
<span class="hll">        <span class="p">[</span><span class="s1">&#39;buy&#39;</span><span class="p">,</span> <span class="s1">&#39;buy_tag&#39;</span><span class="p">]]</span> <span class="o">=</span> <span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="s1">&#39;rsi_cross&#39;</span><span class="p">)</span>
</span>
    <span class="k">return</span> <span class="n">dataframe</span>
</code></pre></div><p>변경 후:</p><div class="highlight"><pre><code><span class="hll"><span class="k">def</span><span class="w"> </span><span class="nf">populate_entry_trend</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
</span>    <span class="n">dataframe</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span>
        <span class="p">(</span>
            <span class="p">(</span><span class="n">qtpylib</span><span class="o">.</span><span class="n">crossed_above</span><span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;rsi&#39;</span><span class="p">],</span> <span class="mi">30</span><span class="p">))</span> <span class="o">&amp;</span>  <span class="c1"># Signal: RSI crosses above 30</span>
            <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema&#39;</span><span class="p">]</span> <span class="o">&lt;=</span> <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;bb_middleband&#39;</span><span class="p">])</span> <span class="o">&amp;</span>  <span class="c1"># Guard</span>
            <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema&#39;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema&#39;</span><span class="p">]</span><span class="o">.</span><span class="n">shift</span><span class="p">(</span><span class="mi">1</span><span class="p">))</span> <span class="o">&amp;</span>  <span class="c1"># Guard</span>
            <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;volume&#39;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span>  <span class="c1"># Make sure Volume is not 0</span>
        <span class="p">),</span>
<span class="hll">        <span class="p">[</span><span class="s1">&#39;enter_long&#39;</span><span class="p">,</span> <span class="s1">&#39;enter_tag&#39;</span><span class="p">]]</span> <span class="o">=</span> <span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="s1">&#39;rsi_cross&#39;</span><span class="p">)</span>
</span>
    <span class="k">return</span> <span class="n">dataframe</span>
</code></pre></div>`,13)),l("p",null,[s[1]||(s[1]=a(" 숏 거래를 진입하고 종료하는 방법에 대한 자세한 내용은 ")),c(p,{to:"strategy-customization"},{default:e(()=>s[0]||(s[0]=[a("전략 문서")])),_:1}),s[2]||(s[2]=a(" 를 참조하세요. "))]),s[13]||(s[13]=n(`<h3 id="populate_sell_trend"><code> populate_sell_trend </code><a class="headerlink" href="#populate_sell_trend" title="영구 링크"> ¶ </a></h3><p><code> populate_buy_trend </code> 와 유사하게, <code> populate_sell_trend() </code> 는 <code> populate_exit_trend() </code> 로 이름이 변경됩니다. 또한 열을 <code> &#39;sell&#39; </code> 에서 <code> &#39;exit_long&#39; </code> 로 변경합니다. </p><div class="highlight"><pre><code><span class="hll"><span class="k">def</span><span class="w"> </span><span class="nf">populate_sell_trend</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
</span>    <span class="n">dataframe</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span>
        <span class="p">(</span>
            <span class="p">(</span><span class="n">qtpylib</span><span class="o">.</span><span class="n">crossed_above</span><span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;rsi&#39;</span><span class="p">],</span> <span class="mi">70</span><span class="p">))</span> <span class="o">&amp;</span>  <span class="c1"># Signal: RSI crosses above 70</span>
            <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema&#39;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;bb_middleband&#39;</span><span class="p">])</span> <span class="o">&amp;</span>  <span class="c1"># Guard</span>
            <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema&#39;</span><span class="p">]</span> <span class="o">&lt;</span> <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema&#39;</span><span class="p">]</span><span class="o">.</span><span class="n">shift</span><span class="p">(</span><span class="mi">1</span><span class="p">))</span> <span class="o">&amp;</span>  <span class="c1"># Guard</span>
            <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;volume&#39;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span>  <span class="c1"># Make sure Volume is not 0</span>
        <span class="p">),</span>
<span class="hll">        <span class="p">[</span><span class="s1">&#39;sell&#39;</span><span class="p">,</span> <span class="s1">&#39;exit_tag&#39;</span><span class="p">]]</span> <span class="o">=</span> <span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="s1">&#39;some_exit_tag&#39;</span><span class="p">)</span>
</span>    <span class="k">return</span> <span class="n">dataframe</span>
</code></pre></div><p>변경 후:</p><div class="highlight"><pre><code><span class="hll"><span class="k">def</span><span class="w"> </span><span class="nf">populate_exit_trend</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">metadata</span><span class="p">:</span> <span class="nb">dict</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
</span>    <span class="n">dataframe</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span>
        <span class="p">(</span>
            <span class="p">(</span><span class="n">qtpylib</span><span class="o">.</span><span class="n">crossed_above</span><span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;rsi&#39;</span><span class="p">],</span> <span class="mi">70</span><span class="p">))</span> <span class="o">&amp;</span>  <span class="c1"># Signal: RSI crosses above 70</span>
            <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema&#39;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;bb_middleband&#39;</span><span class="p">])</span> <span class="o">&amp;</span>  <span class="c1"># Guard</span>
            <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema&#39;</span><span class="p">]</span> <span class="o">&lt;</span> <span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;tema&#39;</span><span class="p">]</span><span class="o">.</span><span class="n">shift</span><span class="p">(</span><span class="mi">1</span><span class="p">))</span> <span class="o">&amp;</span>  <span class="c1"># Guard</span>
            <span class="p">(</span><span class="n">dataframe</span><span class="p">[</span><span class="s1">&#39;volume&#39;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span>  <span class="c1"># Make sure Volume is not 0</span>
        <span class="p">),</span>
<span class="hll">        <span class="p">[</span><span class="s1">&#39;exit_long&#39;</span><span class="p">,</span> <span class="s1">&#39;exit_tag&#39;</span><span class="p">]]</span> <span class="o">=</span> <span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="s1">&#39;some_exit_tag&#39;</span><span class="p">)</span>
</span>    <span class="k">return</span> <span class="n">dataframe</span>
</code></pre></div>`,5)),l("p",null,[s[4]||(s[4]=a(" 숏 거래를 진입하고 종료하는 방법에 대한 자세한 내용은 ")),c(p,{to:"strategy-customization"},{default:e(()=>s[3]||(s[3]=[a("전략 문서")])),_:1}),s[5]||(s[5]=a(" 를 참조하세요. "))]),s[14]||(s[14]=n(`<h3 id="custom_sell"><code> custom_sell </code><a class="headerlink" href="#custom_sell" title="영구 링크"> ¶ </a></h3><p><code> custom_sell </code> 이 <code> custom_exit </code> 로 이름이 변경되었습니다. 이제 현재 이익과 <code> exit_profit_only </code> 설정에 관계없이 모든 반복에 대해 호출됩니다. </p><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
<span class="hll">    <span class="k">def</span><span class="w"> </span><span class="nf">custom_sell</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="s1">&#39;Trade&#39;</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="s1">&#39;datetime&#39;</span><span class="p">,</span> <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
</span>                    <span class="n">current_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">):</span>
        <span class="n">dataframe</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">dp</span><span class="o">.</span><span class="n">get_analyzed_dataframe</span><span class="p">(</span><span class="n">pair</span><span class="p">,</span> <span class="bp">self</span><span class="o">.</span><span class="n">timeframe</span><span class="p">)</span>
        <span class="n">last_candle</span> <span class="o">=</span> <span class="n">dataframe</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">squeeze</span><span class="p">()</span>
        <span class="c1"># ...</span>
</code></pre></div><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
<span class="hll">    <span class="k">def</span><span class="w"> </span><span class="nf">custom_exit</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="s1">&#39;Trade&#39;</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="s1">&#39;datetime&#39;</span><span class="p">,</span> <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
</span>                    <span class="n">current_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">):</span>
        <span class="n">dataframe</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">dp</span><span class="o">.</span><span class="n">get_analyzed_dataframe</span><span class="p">(</span><span class="n">pair</span><span class="p">,</span> <span class="bp">self</span><span class="o">.</span><span class="n">timeframe</span><span class="p">)</span>
        <span class="n">last_candle</span> <span class="o">=</span> <span class="n">dataframe</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">squeeze</span><span class="p">()</span>
        <span class="c1"># ...</span>
</code></pre></div><h3 id="custom_entry_timeout"><code> custom_entry_timeout </code><a class="headerlink" href="#custom_entry_timeout" title="영구 링크"> ¶ </a></h3><p><code> check_buy_timeout() </code> 이 <code> check_entry_timeout() </code> 로 이름이 변경되었으며, <code> check_sell_timeout() </code> 이 <code> check_exit_timeout() </code> 로 이름이 변경되었습니다. </p><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
<span class="hll">    <span class="k">def</span><span class="w"> </span><span class="nf">check_buy_timeout</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="s1">&#39;Trade&#39;</span><span class="p">,</span> <span class="n">order</span><span class="p">:</span> <span class="nb">dict</span><span class="p">,</span> 
</span>                            <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">bool</span><span class="p">:</span>
        <span class="k">return</span> <span class="kc">False</span>

<span class="hll">    <span class="k">def</span><span class="w"> </span><span class="nf">check_sell_timeout</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="s1">&#39;Trade&#39;</span><span class="p">,</span> <span class="n">order</span><span class="p">:</span> <span class="nb">dict</span><span class="p">,</span> 
</span>                            <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">bool</span><span class="p">:</span>
        <span class="k">return</span> <span class="kc">False</span> 
</code></pre></div><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
<span class="hll">    <span class="k">def</span><span class="w"> </span><span class="nf">check_entry_timeout</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="s1">&#39;Trade&#39;</span><span class="p">,</span> <span class="n">order</span><span class="p">:</span> <span class="s1">&#39;Order&#39;</span><span class="p">,</span> 
</span>                            <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">bool</span><span class="p">:</span>
        <span class="k">return</span> <span class="kc">False</span>

<span class="hll">    <span class="k">def</span><span class="w"> </span><span class="nf">check_exit_timeout</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="s1">&#39;Trade&#39;</span><span class="p">,</span> <span class="n">order</span><span class="p">:</span> <span class="s1">&#39;Order&#39;</span><span class="p">,</span> 
</span>                            <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">bool</span><span class="p">:</span>
        <span class="k">return</span> <span class="kc">False</span> 
</code></pre></div><h3 id="custom_stake_amount"><code> custom_stake_amount </code><a class="headerlink" href="#custom_stake_amount" title="영구 링크"> ¶ </a></h3><p> 새로운 문자열 인수 <code> side </code> - 이는 <code> &quot;long&quot; </code> 또는 <code> &quot;short&quot; </code> 일 수 있습니다. </p><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">custom_stake_amount</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                            <span class="n">proposed_stake</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">min_stake</span><span class="p">:</span> <span class="n">Optional</span><span class="p">[</span><span class="nb">float</span><span class="p">],</span> <span class="n">max_stake</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
<span class="hll">                            <span class="n">entry_tag</span><span class="p">:</span> <span class="n">Optional</span><span class="p">[</span><span class="nb">str</span><span class="p">],</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span><span class="p">:</span>
</span>        <span class="c1"># ... </span>
        <span class="k">return</span> <span class="n">proposed_stake</span>
</code></pre></div><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">custom_stake_amount</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                            <span class="n">proposed_stake</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">min_stake</span><span class="p">:</span> <span class="nb">float</span> <span class="o">|</span> <span class="kc">None</span><span class="p">,</span> <span class="n">max_stake</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
<span class="hll">                            <span class="n">entry_tag</span><span class="p">:</span> <span class="nb">str</span> <span class="o">|</span> <span class="kc">None</span><span class="p">,</span> <span class="n">side</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span><span class="p">:</span>
</span>        <span class="c1"># ... </span>
        <span class="k">return</span> <span class="n">proposed_stake</span>
</code></pre></div><h3 id="confirm_trade_entry"><code> confirm_trade_entry </code><a class="headerlink" href="#confirm_trade_entry" title="영구 링크"> ¶ </a></h3><p> 새로운 문자열 인수 <code> side </code> - 이는 <code> &quot;long&quot; </code> 또는 <code> &quot;short&quot; </code> 일 수 있습니다. </p><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">confirm_trade_entry</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">order_type</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">amount</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                            <span class="n">time_in_force</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="n">entry_tag</span><span class="p">:</span> <span class="n">Optional</span><span class="p">[</span><span class="nb">str</span><span class="p">],</span> 
<span class="hll">                            <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">bool</span><span class="p">:</span>
</span>      <span class="k">return</span> <span class="kc">True</span>
</code></pre></div><p>변경 후:</p><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">confirm_trade_entry</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">order_type</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">amount</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
                            <span class="n">time_in_force</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="n">entry_tag</span><span class="p">:</span> <span class="nb">str</span> <span class="o">|</span> <span class="kc">None</span><span class="p">,</span> 
<span class="hll">                            <span class="n">side</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">bool</span><span class="p">:</span>
</span>      <span class="k">return</span> <span class="kc">True</span>
</code></pre></div><h3 id="confirm_trade_exit"><code> confirm_trade_exit </code><a class="headerlink" href="#confirm_trade_exit" title="영구 링크"> ¶ </a></h3><p> 인수 <code> sell_reason </code> 이 <code> exit_reason </code> 으로 변경되었습니다. 호환성을 위해 <code> sell_reason </code> 은 제한된 시간 동안 계속 제공됩니다. </p><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">confirm_trade_exit</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">order_type</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">amount</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
<span class="hll">                           <span class="n">rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">time_in_force</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">sell_reason</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span>
</span>                           <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">bool</span><span class="p">:</span>
    <span class="k">return</span> <span class="kc">True</span>
</code></pre></div><p>변경 후:</p><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">confirm_trade_exit</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span><span class="p">,</span> <span class="n">order_type</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">amount</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
<span class="hll">                           <span class="n">rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">time_in_force</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">exit_reason</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span>
</span>                           <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">bool</span><span class="p">:</span>
    <span class="k">return</span> <span class="kc">True</span>
</code></pre></div><h3 id="custom_entry_price"><code> custom_entry_price </code><a class="headerlink" href="#custom_entry_price" title="영구 링크"> ¶ </a></h3><p> 새로운 문자열 인수 <code> side </code> - 이는 <code> &quot;long&quot; </code> 또는 <code> &quot;short&quot; </code> 일 수 있습니다. </p><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">custom_entry_price</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="n">proposed_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
<span class="hll">                           <span class="n">entry_tag</span><span class="p">:</span> <span class="n">Optional</span><span class="p">[</span><span class="nb">str</span><span class="p">],</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span><span class="p">:</span>
</span>      <span class="k">return</span> <span class="n">proposed_rate</span>
</code></pre></div><p>변경 후:</p><div class="highlight"><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">AwesomeStrategy</span><span class="p">(</span><span class="n">IStrategy</span><span class="p">):</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">custom_entry_price</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="n">Trade</span> <span class="o">|</span> <span class="kc">None</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span> <span class="n">proposed_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span>
<span class="hll">                           <span class="n">entry_tag</span><span class="p">:</span> <span class="nb">str</span> <span class="o">|</span> <span class="kc">None</span><span class="p">,</span> <span class="n">side</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span><span class="p">:</span>
</span>      <span class="k">return</span> <span class="n">proposed_rate</span>
</code></pre></div><h3 id="adjust-trade-position-changes"> 거래 포지션 조정 변경 <a class="headerlink" href="#adjust-trade-position-changes" title="영구 링크"> ¶ </a></h3><p> adjust-trade-position 자체는 변경되지 않았지만, <code> trade.nr_of_successful_buys </code> 를 더 이상 사용하지 말고 대신 <code> trade.nr_of_successful_entries </code> 를 사용해야 합니다. 이는 숏 진입도 포함됩니다. </p><h3 id="helper-methods"> 도우미 메서드 <a class="headerlink" href="#helper-methods" title="영구 링크"> ¶ </a></h3><p><code> stoploss_from_open </code> 및 <code> stoploss_from_absolute </code> 에 &quot;is_short&quot; 인수가 추가되었습니다. 이는 <code> trade.is_short </code> 값을 가져야 합니다. </p><div class="highlight"><pre><code>    <span class="k">def</span><span class="w"> </span><span class="nf">custom_stoploss</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="s1">&#39;Trade&#39;</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span>
                        <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span><span class="p">:</span>
        <span class="c1"># once the profit has risen above 10%, keep the stoploss at 7% above the open price</span>
        <span class="k">if</span> <span class="n">current_profit</span> <span class="o">&gt;</span> <span class="mf">0.10</span><span class="p">:</span>
<span class="hll">            <span class="k">return</span> <span class="n">stoploss_from_open</span><span class="p">(</span><span class="mf">0.07</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">)</span>
</span>
<span class="hll">        <span class="k">return</span> <span class="n">stoploss_from_absolute</span><span class="p">(</span><span class="n">current_rate</span> <span class="o">-</span> <span class="p">(</span><span class="n">candle</span><span class="p">[</span><span class="s1">&#39;atr&#39;</span><span class="p">]</span> <span class="o">*</span> <span class="mi">2</span><span class="p">),</span> <span class="n">current_rate</span><span class="p">)</span>
</span>
        <span class="k">return</span> <span class="mi">1</span>
</code></pre></div><p>변경 후:</p><div class="highlight"><pre><code>    <span class="k">def</span><span class="w"> </span><span class="nf">custom_stoploss</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">trade</span><span class="p">:</span> <span class="s1">&#39;Trade&#39;</span><span class="p">,</span> <span class="n">current_time</span><span class="p">:</span> <span class="n">datetime</span><span class="p">,</span>
                        <span class="n">current_rate</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">:</span> <span class="nb">float</span><span class="p">,</span> <span class="n">after_fill</span><span class="p">:</span> <span class="nb">bool</span><span class="p">,</span> 
                        <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">float</span> <span class="o">|</span> <span class="kc">None</span><span class="p">:</span>
        <span class="c1"># once the profit has risen above 10%, keep the stoploss at 7% above the open price</span>
<span class="hll">        <span class="k">if</span> <span class="n">current_profit</span> <span class="o">&gt;</span> <span class="mf">0.10</span><span class="p">:</span>
</span>            <span class="k">return</span> <span class="n">stoploss_from_open</span><span class="p">(</span><span class="mf">0.07</span><span class="p">,</span> <span class="n">current_profit</span><span class="p">,</span> <span class="n">is_short</span><span class="o">=</span><span class="n">trade</span><span class="o">.</span><span class="n">is_short</span><span class="p">)</span>
<span class="hll">
</span>        <span class="k">return</span> <span class="n">stoploss_from_absolute</span><span class="p">(</span><span class="n">current_rate</span> <span class="o">-</span> <span class="p">(</span><span class="n">candle</span><span class="p">[</span><span class="s1">&#39;atr&#39;</span><span class="p">]</span> <span class="o">*</span> <span class="mi">2</span><span class="p">),</span> <span class="n">current_rate</span><span class="p">,</span> <span class="n">is_short</span><span class="o">=</span><span class="n">trade</span><span class="o">.</span><span class="n">is_short</span><span class="p">,</span> <span class="n">leverage</span><span class="o">=</span><span class="n">trade</span><span class="o">.</span><span class="n">leverage</span><span class="p">)</span>
</code></pre></div><h3 id="strategyconfiguration-settings"> 전략/구성 설정 <a class="headerlink" href="#strategyconfiguration-settings" title="영구 링크"> ¶ </a></h3><h4 id="order_time_in_force"><code> order_time_in_force </code><a class="headerlink" href="#order_time_in_force" title="영구 링크"> ¶ </a></h4><p><code> order_time_in_force </code> 속성이 <code> &quot;buy&quot; </code> 에서 <code> &quot;entry&quot; </code> 로, <code> &quot;sell&quot; </code> 에서 <code> &quot;exit&quot; </code> 로 변경되었습니다. </p><div class="highlight"><pre><code>    <span class="n">order_time_in_force</span><span class="p">:</span> <span class="nb">dict</span> <span class="o">=</span> <span class="p">{</span>
        <span class="s2">&quot;buy&quot;</span><span class="p">:</span> <span class="s2">&quot;gtc&quot;</span><span class="p">,</span>
        <span class="s2">&quot;sell&quot;</span><span class="p">:</span> <span class="s2">&quot;gtc&quot;</span><span class="p">,</span>
    <span class="p">}</span>
</code></pre></div><p>변경 후:</p><div class="highlight"><pre><code>    <span class="n">order_time_in_force</span><span class="p">:</span> <span class="nb">dict</span> <span class="o">=</span> <span class="p">{</span>
<span class="hll">        <span class="s2">&quot;entry&quot;</span><span class="p">:</span> <span class="s2">&quot;GTC&quot;</span><span class="p">,</span>
</span><span class="hll">        <span class="s2">&quot;exit&quot;</span><span class="p">:</span> <span class="s2">&quot;GTC&quot;</span><span class="p">,</span>
</span>    <span class="p">}</span>
</code></pre></div><h4 id="order_types"><code> order_types </code><a class="headerlink" href="#order_types" title="영구 링크"> ¶ </a></h4><p><code> order_types </code> 는 모든 용어를 <code> buy </code> 에서 <code> entry </code> 로, <code> sell </code> 에서 <code> exit </code> 로 변경했습니다. 두 단어는 <code> _ </code> 로 결합됩니다. </p><div class="highlight"><pre><code>    <span class="n">order_types</span> <span class="o">=</span> <span class="p">{</span>
<span class="hll">        <span class="s2">&quot;buy&quot;</span><span class="p">:</span> <span class="s2">&quot;limit&quot;</span><span class="p">,</span>
</span><span class="hll">        <span class="s2">&quot;sell&quot;</span><span class="p">:</span> <span class="s2">&quot;limit&quot;</span><span class="p">,</span>
</span><span class="hll">        <span class="s2">&quot;emergencysell&quot;</span><span class="p">:</span> <span class="s2">&quot;market&quot;</span><span class="p">,</span>
</span><span class="hll">        <span class="s2">&quot;forcesell&quot;</span><span class="p">:</span> <span class="s2">&quot;market&quot;</span><span class="p">,</span>
</span><span class="hll">        <span class="s2">&quot;forcebuy&quot;</span><span class="p">:</span> <span class="s2">&quot;market&quot;</span><span class="p">,</span>
</span>        <span class="s2">&quot;stoploss&quot;</span><span class="p">:</span> <span class="s2">&quot;market&quot;</span><span class="p">,</span>
        <span class="s2">&quot;stoploss_on_exchange&quot;</span><span class="p">:</span> <span class="n">false</span><span class="p">,</span>
        <span class="s2">&quot;stoploss_on_exchange_interval&quot;</span><span class="p">:</span> <span class="mi">60</span>
    <span class="p">}</span>
</code></pre></div><p>변경 후:</p><div class="highlight"><pre><code>    <span class="n">order_types</span> <span class="o">=</span> <span class="p">{</span>
<span class="hll">        <span class="s2">&quot;entry&quot;</span><span class="p">:</span> <span class="s2">&quot;limit&quot;</span><span class="p">,</span>
</span><span class="hll">        <span class="s2">&quot;exit&quot;</span><span class="p">:</span> <span class="s2">&quot;limit&quot;</span><span class="p">,</span>
</span><span class="hll">        <span class="s2">&quot;emergency_exit&quot;</span><span class="p">:</span> <span class="s2">&quot;market&quot;</span><span class="p">,</span>
</span><span class="hll">        <span class="s2">&quot;force_exit&quot;</span><span class="p">:</span> <span class="s2">&quot;market&quot;</span><span class="p">,</span>
</span><span class="hll">        <span class="s2">&quot;force_entry&quot;</span><span class="p">:</span> <span class="s2">&quot;market&quot;</span><span class="p">,</span>
</span>        <span class="s2">&quot;stoploss&quot;</span><span class="p">:</span> <span class="s2">&quot;market&quot;</span><span class="p">,</span>
        <span class="s2">&quot;stoploss_on_exchange&quot;</span><span class="p">:</span> <span class="n">false</span><span class="p">,</span>
        <span class="s2">&quot;stoploss_on_exchange_interval&quot;</span><span class="p">:</span> <span class="mi">60</span>
    <span class="p">}</span>
</code></pre></div><h4 id="strategy-level-settings"> 전략 수준 설정 <a class="headerlink" href="#strategy-level-settings" title="영구 링크"> ¶ </a></h4><ul><li><code> use_sell_signal </code> -&gt; <code> use_exit_signal </code></li><li><code> sell_profit_only </code> -&gt; <code> exit_profit_only </code></li><li><code> sell_profit_offset </code> -&gt; <code> exit_profit_offset </code></li><li><code> ignore_roi_if_buy_signal </code> -&gt; <code> ignore_roi_if_entry_signal </code></li></ul><div class="highlight"><pre><code>    <span class="c1"># These values can be overridden in the config.</span>
<span class="hll">    <span class="n">use_sell_signal</span> <span class="o">=</span> <span class="kc">True</span>
</span><span class="hll">    <span class="n">sell_profit_only</span> <span class="o">=</span> <span class="kc">True</span>
</span><span class="hll">    <span class="n">sell_profit_offset</span><span class="p">:</span> <span class="mf">0.01</span>
</span><span class="hll">    <span class="n">ignore_roi_if_buy_signal</span> <span class="o">=</span> <span class="kc">False</span>
</span></code></pre></div><p>변경 후:</p><div class="highlight"><pre><code>    <span class="c1"># These values can be overridden in the config.</span>
<span class="hll">    <span class="n">use_exit_signal</span> <span class="o">=</span> <span class="kc">True</span>
</span><span class="hll">    <span class="n">exit_profit_only</span> <span class="o">=</span> <span class="kc">True</span>
</span><span class="hll">    <span class="n">exit_profit_offset</span><span class="p">:</span> <span class="mf">0.01</span>
</span><span class="hll">    <span class="n">ignore_roi_if_entry_signal</span> <span class="o">=</span> <span class="kc">False</span>
</span></code></pre></div><h4 id="unfilledtimeout"><code> unfilledtimeout </code><a class="headerlink" href="#unfilledtimeout" title="영구 링크"> ¶ </a></h4><p><code> unfilledtimeout </code> 는 모든 용어를 <code> buy </code> 에서 <code> entry </code> 로, <code> sell </code> 에서 <code> exit </code> 로 변경했습니다. </p><div class="highlight"><pre><code><span class="n">unfilledtimeout</span> <span class="o">=</span> <span class="p">{</span>
<span class="hll">        <span class="s2">&quot;buy&quot;</span><span class="p">:</span> <span class="mi">10</span><span class="p">,</span>
</span><span class="hll">        <span class="s2">&quot;sell&quot;</span><span class="p">:</span> <span class="mi">10</span><span class="p">,</span>
</span>        <span class="s2">&quot;exit_timeout_count&quot;</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
        <span class="s2">&quot;unit&quot;</span><span class="p">:</span> <span class="s2">&quot;minutes&quot;</span>
    <span class="p">}</span>
</code></pre></div><p>변경 후:</p><div class="highlight"><pre><code><span class="n">unfilledtimeout</span> <span class="o">=</span> <span class="p">{</span>
<span class="hll">        <span class="s2">&quot;entry&quot;</span><span class="p">:</span> <span class="mi">10</span><span class="p">,</span>
</span><span class="hll">        <span class="s2">&quot;exit&quot;</span><span class="p">:</span> <span class="mi">10</span><span class="p">,</span>
</span>        <span class="s2">&quot;exit_timeout_count&quot;</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
        <span class="s2">&quot;unit&quot;</span><span class="p">:</span> <span class="s2">&quot;minutes&quot;</span>
    <span class="p">}</span>
</code></pre></div><h4 id="order-pricing"><code> 주문 가격 책정 </code><a class="headerlink" href="#order-pricing" title="영구 링크"> ¶ </a></h4>`,56)),l("p",null,[s[7]||(s[7]=n(" 주문 가격 책정은 두 가지 방식으로 변경되었습니다. <code> bid_strategy </code> 는 <code> entry_pricing </code> 으로 이름이 변경되었고, <code> ask_strategy </code> 는 <code> exit_pricing </code> 으로 이름이 변경되었습니다. 속성 <code> ask_last_balance </code> -&gt; <code> price_last_balance </code> 및 <code> bid_last_balance </code> -&gt; <code> price_last_balance </code> 도 이름이 변경되었습니다. 또한 가격 측면은 이제 <code> ask </code> , <code> bid </code> , <code> same </code> 또는 <code> other </code> 로 정의될 수 있습니다. 자세한 내용은 ",25)),c(p,{to:"configuration"},{default:e(()=>s[6]||(s[6]=[a(" 가격 책정 문서 ")])),_:1}),s[8]||(s[8]=a(" 를 참조하세요. "))]),s[15]||(s[15]=n(`<div class="highlight"><pre><code><span class="p">{</span>
<span class="hll"><span class="w">    </span><span class="nt">&quot;bid_strategy&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
</span><span class="hll"><span class="w">        </span><span class="nt">&quot;price_side&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;bid&quot;</span><span class="p">,</span>
</span><span class="w">        </span><span class="nt">&quot;use_order_book&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;order_book_top&quot;</span><span class="p">:</span><span class="w"> </span><span class="mi">1</span><span class="p">,</span>
<span class="hll"><span class="w">        </span><span class="nt">&quot;ask_last_balance&quot;</span><span class="p">:</span><span class="w"> </span><span class="mf">0.0</span><span class="p">,</span>
</span><span class="w">        </span><span class="nt">&quot;check_depth_of_market&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">            </span><span class="nt">&quot;enabled&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">false</span><span class="p">,</span>
<span class="w">            </span><span class="nt">&quot;bids_to_ask_delta&quot;</span><span class="p">:</span><span class="w"> </span><span class="mi">1</span>
<span class="w">        </span><span class="p">}</span>
<span class="w">    </span><span class="p">},</span>
<span class="hll"><span class="w">    </span><span class="nt">&quot;ask_strategy&quot;</span><span class="p">:{</span>
</span><span class="hll"><span class="w">        </span><span class="nt">&quot;price_side&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;ask&quot;</span><span class="p">,</span>
</span><span class="w">        </span><span class="nt">&quot;use_order_book&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;order_book_top&quot;</span><span class="p">:</span><span class="w"> </span><span class="mi">1</span><span class="p">,</span>
<span class="hll"><span class="w">        </span><span class="nt">&quot;bid_last_balance&quot;</span><span class="p">:</span><span class="w"> </span><span class="mf">0.0</span>
</span><span class="w">        </span><span class="nt">&quot;ignore_buying_expired_candle_after&quot;</span><span class="p">:</span><span class="w"> </span><span class="mi">120</span>
<span class="w">    </span><span class="p">}</span>
<span class="p">}</span>
</code></pre></div><p>변경 후:</p><div class="highlight"><pre><code><span class="p">{</span>
<span class="hll"><span class="w">    </span><span class="nt">&quot;entry_pricing&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
</span><span class="hll"><span class="w">        </span><span class="nt">&quot;price_side&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;same&quot;</span><span class="p">,</span>
</span><span class="w">        </span><span class="nt">&quot;use_order_book&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;order_book_top&quot;</span><span class="p">:</span><span class="w"> </span><span class="mi">1</span><span class="p">,</span>
<span class="hll"><span class="w">        </span><span class="nt">&quot;price_last_balance&quot;</span><span class="p">:</span><span class="w"> </span><span class="mf">0.0</span><span class="p">,</span>
</span><span class="w">        </span><span class="nt">&quot;check_depth_of_market&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">            </span><span class="nt">&quot;enabled&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">false</span><span class="p">,</span>
<span class="w">            </span><span class="nt">&quot;bids_to_ask_delta&quot;</span><span class="p">:</span><span class="w"> </span><span class="mi">1</span>
<span class="w">        </span><span class="p">}</span>
<span class="w">    </span><span class="p">},</span>
<span class="hll"><span class="w">    </span><span class="nt">&quot;exit_pricing&quot;</span><span class="p">:{</span>
</span><span class="hll"><span class="w">        </span><span class="nt">&quot;price_side&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;same&quot;</span><span class="p">,</span>
</span><span class="w">        </span><span class="nt">&quot;use_order_book&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;order_book_top&quot;</span><span class="p">:</span><span class="w"> </span><span class="mi">1</span><span class="p">,</span>
<span class="hll"><span class="w">        </span><span class="nt">&quot;price_last_balance&quot;</span><span class="p">:</span><span class="w"> </span><span class="mf">0.0</span>
</span><span class="w">    </span><span class="p">},</span>
<span class="w">    </span><span class="nt">&quot;ignore_buying_expired_candle_after&quot;</span><span class="p">:</span><span class="w"> </span><span class="mi">120</span>
<span class="p">}</span>
</code></pre></div><h2 id="freqai-strategy"> FreqAI 전략 <a class="headerlink" href="#freqai-strategy" title="영구 링크"> ¶ </a></h2><p><code> populate_any_indicators() </code> 메서드는 <code> feature_engineering_expand_all() </code> , <code> feature_engineering_expand_basic() </code> , <code> feature_engineering_standard() </code> 및 <code> set_freqai_targets() </code> 로 분할되었습니다. </p><p>각 새로운 함수에 대해, 페어(및 필요한 경우 시간 프레임)는 자동으로 열에 추가됩니다. 따라서 새로운 로직으로 기능 정의가 훨씬 간단해집니다.</p>`,6)),l("p",null,[s[10]||(s[10]=a(" 각 메서드에 대한 전체 설명은 해당 ")),c(p,{to:"freqai-feature-engineering"},{default:e(()=>s[9]||(s[9]=[a(" freqAI 문서 페이지 ")])),_:1}),s[11]||(s[11]=a(" 를 참조하세요. "))]),s[16]||(s[16]=n(`<div class="highlight"><table class="highlighttable"><tr><td class="linenos"><div class="linenodiv"><pre><span class="normal"> 1</span>
<span class="normal"> 2</span>
<span class="normal"> 3</span>
<span class="normal"> 4</span>
<span class="normal"> 5</span>
<span class="normal"> 6</span>
<span class="normal"> 7</span>
<span class="normal"> 8</span>
<span class="normal"> 9</span>
<span class="normal">10</span>
<span class="normal">11</span>
<span class="normal">12</span>
<span class="normal">13</span>
<span class="normal">14</span>
<span class="normal">15</span>
<span class="normal">16</span>
<span class="normal">17</span>
<span class="normal">18</span>
<span class="normal">19</span>
<span class="normal">20</span>
<span class="normal">21</span>
<span class="normal">22</span>
<span class="normal">23</span>
<span class="normal">24</span>
<span class="normal">25</span>
<span class="normal">26</span>
<span class="normal">27</span>
<span class="normal">28</span>
<span class="normal">29</span>
<span class="normal">30</span>
<span class="normal">31</span>
<span class="normal">32</span>
<span class="normal">33</span>
<span class="normal">34</span>
<span class="normal">35</span>
<span class="normal">36</span>
<span class="normal">37</span>
<span class="normal">38</span>
<span class="normal">39</span>
<span class="normal">40</span>
<span class="normal">41</span>
<span class="normal">42</span>
<span class="normal">43</span>
<span class="normal">44</span>
<span class="normal">45</span>
<span class="normal">46</span>
<span class="normal">47</span>
<span class="normal">48</span>
<span class="normal">49</span>
<span class="normal">50</span>
<span class="normal">51</span>
<span class="normal">52</span>
<span class="normal">53</span>
<span class="normal">54</span>
<span class="normal">55</span>
<span class="normal">56</span>
<span class="normal">57</span>
<span class="normal">58</span>
<span class="normal">59</span>
<span class="normal">60</span>
<span class="normal">61</span>
<span class="normal">62</span>
<span class="normal">63</span>
<span class="normal">64</span>
<span class="normal">65</span>
<span class="normal">66</span>
<span class="normal">67</span>
<span class="normal">68</span>
<span class="normal">69</span>
<span class="normal">70</span>
<span class="normal">71</span>
<span class="normal">72</span>
<span class="normal">73</span>
<span class="normal">74</span>
<span class="normal">75</span>
<span class="normal">76</span>
<span class="normal">77</span></pre></div></td><td class="code"><div><pre><code><span class="k">def</span><span class="w"> </span><span class="nf">populate_any_indicators</span><span class="p">(</span>
        <span class="bp">self</span><span class="p">,</span> <span class="n">pair</span><span class="p">,</span> <span class="n">df</span><span class="p">,</span> <span class="n">tf</span><span class="p">,</span> <span class="n">informative</span><span class="o">=</span><span class="kc">None</span><span class="p">,</span> <span class="n">set_generalized_indicators</span><span class="o">=</span><span class="kc">False</span>
    <span class="p">):</span>

        <span class="k">if</span> <span class="n">informative</span> <span class="ow">is</span> <span class="kc">None</span><span class="p">:</span>
            <span class="n">informative</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">dp</span><span class="o">.</span><span class="n">get_pair_dataframe</span><span class="p">(</span><span class="n">pair</span><span class="p">,</span> <span class="n">tf</span><span class="p">)</span>

        <span class="c1"># first loop is automatically duplicating indicators for time periods</span>
        <span class="k">for</span> <span class="n">t</span> <span class="ow">in</span> <span class="bp">self</span><span class="o">.</span><span class="n">freqai_info</span><span class="p">[</span><span class="s2">&quot;feature_parameters&quot;</span><span class="p">][</span><span class="s2">&quot;indicator_periods_candles&quot;</span><span class="p">]:</span>

            <span class="n">t</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="n">t</span><span class="p">)</span>
<span class="hll">            <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;%-</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">rsi-period_</span><span class="si">{</span><span class="n">t</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">RSI</span><span class="p">(</span><span class="n">informative</span><span class="p">,</span> <span class="n">timeperiod</span><span class="o">=</span><span class="n">t</span><span class="p">)</span>
</span><span class="hll">            <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;%-</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">mfi-period_</span><span class="si">{</span><span class="n">t</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">MFI</span><span class="p">(</span><span class="n">informative</span><span class="p">,</span> <span class="n">timeperiod</span><span class="o">=</span><span class="n">t</span><span class="p">)</span>
</span><span class="hll">            <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;%-</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">adx-period_</span><span class="si">{</span><span class="n">t</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">ADX</span><span class="p">(</span><span class="n">informative</span><span class="p">,</span> <span class="n">timeperiod</span><span class="o">=</span><span class="n">t</span><span class="p">)</span>
</span><span class="hll">            <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;%-</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">sma-period_</span><span class="si">{</span><span class="n">t</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">SMA</span><span class="p">(</span><span class="n">informative</span><span class="p">,</span> <span class="n">timeperiod</span><span class="o">=</span><span class="n">t</span><span class="p">)</span>
</span><span class="hll">            <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;%-</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">ema-period_</span><span class="si">{</span><span class="n">t</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">EMA</span><span class="p">(</span><span class="n">informative</span><span class="p">,</span> <span class="n">timeperiod</span><span class="o">=</span><span class="n">t</span><span class="p">)</span>
</span><span class="hll">
</span><span class="hll">            <span class="n">bollinger</span> <span class="o">=</span> <span class="n">qtpylib</span><span class="o">.</span><span class="n">bollinger_bands</span><span class="p">(</span>
</span><span class="hll">                <span class="n">qtpylib</span><span class="o">.</span><span class="n">typical_price</span><span class="p">(</span><span class="n">informative</span><span class="p">),</span> <span class="n">window</span><span class="o">=</span><span class="n">t</span><span class="p">,</span> <span class="n">stds</span><span class="o">=</span><span class="mf">2.2</span>
</span><span class="hll">            <span class="p">)</span>
</span><span class="hll">            <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">bb_lowerband-period_</span><span class="si">{</span><span class="n">t</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">bollinger</span><span class="p">[</span><span class="s2">&quot;lower&quot;</span><span class="p">]</span>
</span><span class="hll">            <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">bb_middleband-period_</span><span class="si">{</span><span class="n">t</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">bollinger</span><span class="p">[</span><span class="s2">&quot;mid&quot;</span><span class="p">]</span>
</span><span class="hll">            <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">bb_upperband-period_</span><span class="si">{</span><span class="n">t</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">bollinger</span><span class="p">[</span><span class="s2">&quot;upper&quot;</span><span class="p">]</span>
</span><span class="hll">
</span><span class="hll">            <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;%-</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">bb_width-period_</span><span class="si">{</span><span class="n">t</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span>
</span><span class="hll">                <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">bb_upperband-period_</span><span class="si">{</span><span class="n">t</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">]</span>
</span><span class="hll">                <span class="o">-</span> <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">bb_lowerband-period_</span><span class="si">{</span><span class="n">t</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">]</span>
</span><span class="hll">            <span class="p">)</span> <span class="o">/</span> <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">bb_middleband-period_</span><span class="si">{</span><span class="n">t</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">]</span>
</span><span class="hll">            <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;%-</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">close-bb_lower-period_</span><span class="si">{</span><span class="n">t</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span>
</span><span class="hll">                <span class="n">informative</span><span class="p">[</span><span class="s2">&quot;close&quot;</span><span class="p">]</span> <span class="o">/</span> <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">bb_lowerband-period_</span><span class="si">{</span><span class="n">t</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">]</span>
</span><span class="hll">            <span class="p">)</span>
</span><span class="hll">
</span><span class="hll">            <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;%-</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">roc-period_</span><span class="si">{</span><span class="n">t</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">ROC</span><span class="p">(</span><span class="n">informative</span><span class="p">,</span> <span class="n">timeperiod</span><span class="o">=</span><span class="n">t</span><span class="p">)</span>
</span><span class="hll">
</span><span class="hll">            <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;%-</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">relative_volume-period_</span><span class="si">{</span><span class="n">t</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span>
</span><span class="hll">                <span class="n">informative</span><span class="p">[</span><span class="s2">&quot;volume&quot;</span><span class="p">]</span> <span class="o">/</span> <span class="n">informative</span><span class="p">[</span><span class="s2">&quot;volume&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">rolling</span><span class="p">(</span><span class="n">t</span><span class="p">)</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>
</span><span class="hll">            <span class="p">)</span> <span class="c1"># (1)</span>
</span>
<span class="hll">        <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;%-</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">pct-change&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">informative</span><span class="p">[</span><span class="s2">&quot;close&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">pct_change</span><span class="p">()</span>
</span><span class="hll">        <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;%-</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">raw_volume&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">informative</span><span class="p">[</span><span class="s2">&quot;volume&quot;</span><span class="p">]</span>
</span><span class="hll">        <span class="n">informative</span><span class="p">[</span><span class="sa">f</span><span class="s2">&quot;%-</span><span class="si">{</span><span class="n">pair</span><span class="si">}</span><span class="s2">raw_price&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">informative</span><span class="p">[</span><span class="s2">&quot;close&quot;</span><span class="p">]</span>
</span><span class="hll">        <span class="c1"># (2)</span>
</span>
        <span class="n">indicators</span> <span class="o">=</span> <span class="p">[</span><span class="n">col</span> <span class="k">for</span> <span class="n">col</span> <span class="ow">in</span> <span class="n">informative</span> <span class="k">if</span> <span class="n">col</span><span class="o">.</span><span class="n">startswith</span><span class="p">(</span><span class="s2">&quot;%&quot;</span><span class="p">)]</span>
        <span class="c1"># This loop duplicates and shifts all indicators to add a sense of recency to data</span>
        <span class="k">for</span> <span class="n">n</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="bp">self</span><span class="o">.</span><span class="n">freqai_info</span><span class="p">[</span><span class="s2">&quot;feature_parameters&quot;</span><span class="p">][</span><span class="s2">&quot;include_shifted_candles&quot;</span><span class="p">]</span> <span class="o">+</span> <span class="mi">1</span><span class="p">):</span>
            <span class="k">if</span> <span class="n">n</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
                <span class="k">continue</span>
            <span class="n">informative_shift</span> <span class="o">=</span> <span class="n">informative</span><span class="p">[</span><span class="n">indicators</span><span class="p">]</span><span class="o">.</span><span class="n">shift</span><span class="p">(</span><span class="n">n</span><span class="p">)</span>
            <span class="n">informative_shift</span> <span class="o">=</span> <span class="n">informative_shift</span><span class="o">.</span><span class="n">add_suffix</span><span class="p">(</span><span class="s2">&quot;_shift-&quot;</span> <span class="o">+</span> <span class="nb">str</span><span class="p">(</span><span class="n">n</span><span class="p">))</span>
            <span class="n">informative</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">concat</span><span class="p">((</span><span class="n">informative</span><span class="p">,</span> <span class="n">informative_shift</span><span class="p">),</span> <span class="n">axis</span><span class="o">=</span><span class="mi">1</span><span class="p">)</span>

        <span class="n">df</span> <span class="o">=</span> <span class="n">merge_informative_pair</span><span class="p">(</span><span class="n">df</span><span class="p">,</span> <span class="n">informative</span><span class="p">,</span> <span class="bp">self</span><span class="o">.</span><span class="n">config</span><span class="p">[</span><span class="s2">&quot;timeframe&quot;</span><span class="p">],</span> <span class="n">tf</span><span class="p">,</span> <span class="n">ffill</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
        <span class="n">skip_columns</span> <span class="o">=</span> <span class="p">[</span>
            <span class="p">(</span><span class="n">s</span> <span class="o">+</span> <span class="s2">&quot;_&quot;</span> <span class="o">+</span> <span class="n">tf</span><span class="p">)</span> <span class="k">for</span> <span class="n">s</span> <span class="ow">in</span> <span class="p">[</span><span class="s2">&quot;date&quot;</span><span class="p">,</span> <span class="s2">&quot;open&quot;</span><span class="p">,</span> <span class="s2">&quot;high&quot;</span><span class="p">,</span> <span class="s2">&quot;low&quot;</span><span class="p">,</span> <span class="s2">&quot;close&quot;</span><span class="p">,</span> <span class="s2">&quot;volume&quot;</span><span class="p">]</span>
        <span class="p">]</span>
        <span class="n">df</span> <span class="o">=</span> <span class="n">df</span><span class="o">.</span><span class="n">drop</span><span class="p">(</span><span class="n">columns</span><span class="o">=</span><span class="n">skip_columns</span><span class="p">)</span>

        <span class="c1"># Add generalized indicators here (because in live, it will call this</span>
        <span class="c1"># function to populate indicators during training). Notice how we ensure not to</span>
        <span class="c1"># add them multiple times</span>
        <span class="k">if</span> <span class="n">set_generalized_indicators</span><span class="p">:</span>
<span class="hll">            <span class="n">df</span><span class="p">[</span><span class="s2">&quot;</span><span class="si">%-d</span><span class="s2">ay_of_week&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span><span class="n">df</span><span class="p">[</span><span class="s2">&quot;date&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">dt</span><span class="o">.</span><span class="n">dayofweek</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">/</span> <span class="mi">7</span>
</span><span class="hll">            <span class="n">df</span><span class="p">[</span><span class="s2">&quot;</span><span class="si">%-ho</span><span class="s2">ur_of_day&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span><span class="n">df</span><span class="p">[</span><span class="s2">&quot;date&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">dt</span><span class="o">.</span><span class="n">hour</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">/</span> <span class="mi">25</span>
</span><span class="hll">            <span class="c1"># (3)</span>
</span>
<span class="hll">            <span class="c1"># user adds targets here by prepending them with &amp;- (see convention below)</span>
</span><span class="hll">            <span class="n">df</span><span class="p">[</span><span class="s2">&quot;&amp;-s_close&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span>
</span><span class="hll">                <span class="n">df</span><span class="p">[</span><span class="s2">&quot;close&quot;</span><span class="p">]</span>
</span><span class="hll">                <span class="o">.</span><span class="n">shift</span><span class="p">(</span><span class="o">-</span><span class="bp">self</span><span class="o">.</span><span class="n">freqai_info</span><span class="p">[</span><span class="s2">&quot;feature_parameters&quot;</span><span class="p">][</span><span class="s2">&quot;label_period_candles&quot;</span><span class="p">])</span>
</span><span class="hll">                <span class="o">.</span><span class="n">rolling</span><span class="p">(</span><span class="bp">self</span><span class="o">.</span><span class="n">freqai_info</span><span class="p">[</span><span class="s2">&quot;feature_parameters&quot;</span><span class="p">][</span><span class="s2">&quot;label_period_candles&quot;</span><span class="p">])</span>
</span><span class="hll">                <span class="o">.</span><span class="n">mean</span><span class="p">()</span>
</span><span class="hll">                <span class="o">/</span> <span class="n">df</span><span class="p">[</span><span class="s2">&quot;close&quot;</span><span class="p">]</span>
</span><span class="hll">                <span class="o">-</span> <span class="mi">1</span>
</span><span class="hll">            <span class="p">)</span>  <span class="c1"># (4)</span>
</span>
        <span class="k">return</span> <span class="n">df</span>
</code></pre></div></td></tr></table></div><ol><li> 기능 - <code> feature_engineering_expand_all </code> 로 이동 </li><li> 기본 기능, <code> indicator_periods_candles </code> 에 걸쳐 확장되지 않음 - <code> feature_engineering_expand_basic() </code> 로 이동. </li><li> 자동으로 확장되지 않아야 하는 표준 기능 - <code> feature_engineering_standard() </code> 로 이동. </li><li> 대상 - 이 부분을 <code> set_freqai_targets() </code> 로 이동. </li></ol><h3 id="freqai-feature-engineering-expand-all"> freqai - 모든 기능 확장 <a class="headerlink" href="#freqai-feature-engineering-expand-all" title="영구 링크"> ¶ </a></h3><p> 기능이 이제 자동으로 확장됩니다. 따라서 확장 루프와 <code> {pair} </code> / <code> {timeframe} </code> 부분을 제거해야 합니다. </p><div class="highlight"><table class="highlighttable"><tr><td class="linenos"><div class="linenodiv"><pre><span class="normal"> 1</span>
<span class="normal"> 2</span>
<span class="normal"> 3</span>
<span class="normal"> 4</span>
<span class="normal"> 5</span>
<span class="normal"> 6</span>
<span class="normal"> 7</span>
<span class="normal"> 8</span>
<span class="normal"> 9</span>
<span class="normal">10</span>
<span class="normal">11</span>
<span class="normal">12</span>
<span class="normal">13</span>
<span class="normal">14</span>
<span class="normal">15</span>
<span class="normal">16</span>
<span class="normal">17</span>
<span class="normal">18</span>
<span class="normal">19</span>
<span class="normal">20</span>
<span class="normal">21</span>
<span class="normal">22</span>
<span class="normal">23</span>
<span class="normal">24</span>
<span class="normal">25</span>
<span class="normal">26</span>
<span class="normal">27</span>
<span class="normal">28</span>
<span class="normal">29</span>
<span class="normal">30</span>
<span class="normal">31</span>
<span class="normal">32</span>
<span class="normal">33</span>
<span class="normal">34</span>
<span class="normal">35</span>
<span class="normal">36</span>
<span class="normal">37</span>
<span class="normal">38</span>
<span class="normal">39</span>
<span class="normal">40</span>
<span class="normal">41</span>
<span class="normal">42</span>
<span class="normal">43</span>
<span class="normal">44</span>
<span class="normal">45</span>
<span class="normal">46</span>
<span class="normal">47</span>
<span class="normal">48</span>
<span class="normal">49</span>
<span class="normal">50</span>
<span class="normal">51</span>
<span class="normal">52</span></pre></div></td><td class="code"><div><pre><code>    <span class="k">def</span><span class="w"> </span><span class="nf">feature_engineering_expand_all</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">,</span> <span class="n">period</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">::</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        *Only functional with FreqAI enabled strategies*</span>
<span class="sd">        This function will automatically expand the defined features on the config defined</span>
<span class="sd">        \`indicator_periods_candles\`, \`include_timeframes\`, \`include_shifted_candles\`, and</span>
<span class="sd">        \`include_corr_pairs\`. In other words, a single feature defined in this function</span>
<span class="sd">        will automatically expand to a total of</span>
<span class="sd">        \`indicator_periods_candles\` * \`include_timeframes\` * \`include_shifted_candles\` *</span>
<span class="sd">        \`include_corr_pairs\` numbers of features added to the model.</span>

<span class="sd">        All features must be prepended with \`%\` to be recognized by FreqAI internals.</span>

<span class="sd">        More details on how these config defined parameters accelerate feature engineering</span>
<span class="sd">        in the documentation at:</span>

<span class="sd">        https://www.freqtrade.io/en/latest/freqai-parameter-table/#feature-parameters</span>

<span class="sd">        https://www.freqtrade.io/en/latest/freqai-feature-engineering/#defining-the-features</span>

<span class="sd">        :param df: strategy dataframe which will receive the features</span>
<span class="sd">        :param period: period of the indicator - usage example:</span>
<span class="sd">        dataframe[&quot;%-ema-period&quot;] = ta.EMA(dataframe, timeperiod=period)</span>
<span class="sd">        &quot;&quot;&quot;</span>

        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;</span><span class="si">%-r</span><span class="s2">si-period&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">RSI</span><span class="p">(</span><span class="n">dataframe</span><span class="p">,</span> <span class="n">timeperiod</span><span class="o">=</span><span class="n">period</span><span class="p">)</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;%-mfi-period&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">MFI</span><span class="p">(</span><span class="n">dataframe</span><span class="p">,</span> <span class="n">timeperiod</span><span class="o">=</span><span class="n">period</span><span class="p">)</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;</span><span class="si">%-a</span><span class="s2">dx-period&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">ADX</span><span class="p">(</span><span class="n">dataframe</span><span class="p">,</span> <span class="n">timeperiod</span><span class="o">=</span><span class="n">period</span><span class="p">)</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;</span><span class="si">%-s</span><span class="s2">ma-period&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">SMA</span><span class="p">(</span><span class="n">dataframe</span><span class="p">,</span> <span class="n">timeperiod</span><span class="o">=</span><span class="n">period</span><span class="p">)</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;</span><span class="si">%-e</span><span class="s2">ma-period&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">EMA</span><span class="p">(</span><span class="n">dataframe</span><span class="p">,</span> <span class="n">timeperiod</span><span class="o">=</span><span class="n">period</span><span class="p">)</span>

        <span class="n">bollinger</span> <span class="o">=</span> <span class="n">qtpylib</span><span class="o">.</span><span class="n">bollinger_bands</span><span class="p">(</span>
            <span class="n">qtpylib</span><span class="o">.</span><span class="n">typical_price</span><span class="p">(</span><span class="n">dataframe</span><span class="p">),</span> <span class="n">window</span><span class="o">=</span><span class="n">period</span><span class="p">,</span> <span class="n">stds</span><span class="o">=</span><span class="mf">2.2</span>
        <span class="p">)</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;bb_lowerband-period&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">bollinger</span><span class="p">[</span><span class="s2">&quot;lower&quot;</span><span class="p">]</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;bb_middleband-period&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">bollinger</span><span class="p">[</span><span class="s2">&quot;mid&quot;</span><span class="p">]</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;bb_upperband-period&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">bollinger</span><span class="p">[</span><span class="s2">&quot;upper&quot;</span><span class="p">]</span>

        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;%-bb_width-period&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span>
            <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;bb_upperband-period&quot;</span><span class="p">]</span>
            <span class="o">-</span> <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;bb_lowerband-period&quot;</span><span class="p">]</span>
        <span class="p">)</span> <span class="o">/</span> <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;bb_middleband-period&quot;</span><span class="p">]</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;</span><span class="si">%-c</span><span class="s2">lose-bb_lower-period&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span>
            <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;close&quot;</span><span class="p">]</span> <span class="o">/</span> <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;bb_lowerband-period&quot;</span><span class="p">]</span>
        <span class="p">)</span>

        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;</span><span class="si">%-r</span><span class="s2">oc-period&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">ta</span><span class="o">.</span><span class="n">ROC</span><span class="p">(</span><span class="n">dataframe</span><span class="p">,</span> <span class="n">timeperiod</span><span class="o">=</span><span class="n">period</span><span class="p">)</span>

        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;</span><span class="si">%-r</span><span class="s2">elative_volume-period&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span>
            <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;volume&quot;</span><span class="p">]</span> <span class="o">/</span> <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;volume&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">rolling</span><span class="p">(</span><span class="n">period</span><span class="p">)</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>
        <span class="p">)</span>

        <span class="k">return</span> <span class="n">dataframe</span>
</code></pre></div></td></tr></table></div><h3 id="freqai-feature-engineering-basic"> Freqai - 기본 기능 엔지니어링 <a class="headerlink" href="#freqai-feature-engineering-basic" title="영구 링크"> ¶ </a></h3><p> 기본 기능. 기능에서 <code> {pair} </code> 부분을 제거해야 합니다. </p><div class="highlight"><table class="highlighttable"><tr><td class="linenos"><div class="linenodiv"><pre><span class="normal"> 1</span>
<span class="normal"> 2</span>
<span class="normal"> 3</span>
<span class="normal"> 4</span>
<span class="normal"> 5</span>
<span class="normal"> 6</span>
<span class="normal"> 7</span>
<span class="normal"> 8</span>
<span class="normal"> 9</span>
<span class="normal">10</span>
<span class="normal">11</span>
<span class="normal">12</span>
<span class="normal">13</span>
<span class="normal">14</span>
<span class="normal">15</span>
<span class="normal">16</span>
<span class="normal">17</span>
<span class="normal">18</span>
<span class="normal">19</span>
<span class="normal">20</span>
<span class="normal">21</span>
<span class="normal">22</span>
<span class="normal">23</span>
<span class="normal">24</span>
<span class="normal">25</span>
<span class="normal">26</span>
<span class="normal">27</span>
<span class="normal">28</span>
<span class="normal">29</span>
<span class="normal">30</span></pre></div></td><td class="code"><div><pre><code>    <span class="k">def</span><span class="w"> </span><span class="nf">feature_engineering_expand_basic</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">::</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        *Only functional with FreqAI enabled strategies*</span>
<span class="sd">        This function will automatically expand the defined features on the config defined</span>
<span class="sd">        \`include_timeframes\`, \`include_shifted_candles\`, and \`include_corr_pairs\`.</span>
<span class="sd">        In other words, a single feature defined in this function</span>
<span class="sd">        will automatically expand to a total of</span>
<span class="sd">        \`include_timeframes\` * \`include_shifted_candles\` * \`include_corr_pairs\`</span>
<span class="sd">        numbers of features added to the model.</span>

<span class="sd">        Features defined here will *not* be automatically duplicated on user defined</span>
<span class="sd">        \`indicator_periods_candles\`</span>

<span class="sd">        All features must be prepended with \`%\` to be recognized by FreqAI internals.</span>

<span class="sd">        More details on how these config defined parameters accelerate feature engineering</span>
<span class="sd">        in the documentation at:</span>

<span class="sd">        https://www.freqtrade.io/en/latest/freqai-parameter-table/#feature-parameters</span>

<span class="sd">        https://www.freqtrade.io/en/latest/freqai-feature-engineering/#defining-the-features</span>

<span class="sd">        :param df: strategy dataframe which will receive the features</span>
<span class="sd">        dataframe[&quot;%-pct-change&quot;] = dataframe[&quot;close&quot;].pct_change()</span>
<span class="sd">        dataframe[&quot;%-ema-200&quot;] = ta.EMA(dataframe, timeperiod=200)</span>
<span class="sd">        &quot;&quot;&quot;</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;%-pct-change&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;close&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">pct_change</span><span class="p">()</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;</span><span class="si">%-r</span><span class="s2">aw_volume&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;volume&quot;</span><span class="p">]</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;</span><span class="si">%-r</span><span class="s2">aw_price&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;close&quot;</span><span class="p">]</span>
        <span class="k">return</span> <span class="n">dataframe</span>
</code></pre></div></td></tr></table></div><h3 id="freqai-feature-engineering-standard"> FreqAI - 표준 기능 엔지니어링 <a class="headerlink" href="#freqai-feature-engineering-standard" title="영구 링크"> ¶ </a></h3><div class="highlight"><table class="highlighttable"><tr><td class="linenos"><div class="linenodiv"><pre><span class="normal"> 1</span>
<span class="normal"> 2</span>
<span class="normal"> 3</span>
<span class="normal"> 4</span>
<span class="normal"> 5</span>
<span class="normal"> 6</span>
<span class="normal"> 7</span>
<span class="normal"> 8</span>
<span class="normal"> 9</span>
<span class="normal">10</span>
<span class="normal">11</span>
<span class="normal">12</span>
<span class="normal">13</span>
<span class="normal">14</span>
<span class="normal">15</span>
<span class="normal">16</span>
<span class="normal">17</span>
<span class="normal">18</span>
<span class="normal">19</span>
<span class="normal">20</span>
<span class="normal">21</span>
<span class="normal">22</span>
<span class="normal">23</span>
<span class="normal">24</span></pre></div></td><td class="code"><div><pre><code>    <span class="k">def</span><span class="w"> </span><span class="nf">feature_engineering_standard</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        *Only functional with FreqAI enabled strategies*</span>
<span class="sd">        This optional function will be called once with the dataframe of the base timeframe.</span>
<span class="sd">        This is the final function to be called, which means that the dataframe entering this</span>
<span class="sd">        function will contain all the features and columns created by all other</span>
<span class="sd">        freqai_feature_engineering_* functions.</span>

<span class="sd">        This function is a good place to do custom exotic feature extractions (e.g. tsfresh).</span>
<span class="sd">        This function is a good place for any feature that should not be auto-expanded upon</span>
<span class="sd">        (e.g. day of the week).</span>

<span class="sd">        All features must be prepended with \`%\` to be recognized by FreqAI internals.</span>

<span class="sd">        More details about feature engineering available:</span>

<span class="sd">        https://www.freqtrade.io/en/latest/freqai-feature-engineering</span>

<span class="sd">        :param df: strategy dataframe which will receive the features</span>
<span class="sd">        usage example: dataframe[&quot;%-day_of_week&quot;] = (dataframe[&quot;date&quot;].dt.dayofweek + 1) / 7</span>
<span class="sd">        &quot;&quot;&quot;</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;</span><span class="si">%-d</span><span class="s2">ay_of_week&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;date&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">dt</span><span class="o">.</span><span class="n">dayofweek</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;</span><span class="si">%-ho</span><span class="s2">ur_of_day&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;date&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">dt</span><span class="o">.</span><span class="n">hour</span>
        <span class="k">return</span> <span class="n">dataframe</span>
</code></pre></div></td></tr></table></div><h3 id="freqai-set-targets"> FreqAI - 대상 설정 <a class="headerlink" href="#freqai-set-targets" title="영구 링크"> ¶ </a></h3><p>대상은 이제 전용 메서드를 갖습니다.</p><div class="highlight"><table class="highlighttable"><tr><td class="linenos"><div class="linenodiv"><pre><span class="normal"> 1</span>
<span class="normal"> 2</span>
<span class="normal"> 3</span>
<span class="normal"> 4</span>
<span class="normal"> 5</span>
<span class="normal"> 6</span>
<span class="normal"> 7</span>
<span class="normal"> 8</span>
<span class="normal"> 9</span>
<span class="normal">10</span>
<span class="normal">11</span>
<span class="normal">12</span>
<span class="normal">13</span>
<span class="normal">14</span>
<span class="normal">15</span>
<span class="normal">16</span>
<span class="normal">17</span>
<span class="normal">18</span>
<span class="normal">19</span>
<span class="normal">20</span>
<span class="normal">21</span>
<span class="normal">22</span>
<span class="normal">23</span></pre></div></td><td class="code"><div><pre><code>    <span class="k">def</span><span class="w"> </span><span class="nf">set_freqai_targets</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">dataframe</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">DataFrame</span><span class="p">:</span>
<span class="w">        </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">        *Only functional with FreqAI enabled strategies*</span>
<span class="sd">        Required function to set the targets for the model.</span>
<span class="sd">        All targets must be prepended with \`&amp;\` to be recognized by the FreqAI internals.</span>

<span class="sd">        More details about feature engineering available:</span>

<span class="sd">        https://www.freqtrade.io/en/latest/freqai-feature-engineering</span>

<span class="sd">        :param df: strategy dataframe which will receive the targets</span>
<span class="sd">        usage example: dataframe[&quot;&amp;-target&quot;] = dataframe[&quot;close&quot;].shift(-1) / dataframe[&quot;close&quot;]</span>
<span class="sd">        &quot;&quot;&quot;</span>
        <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;&amp;-s_close&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span>
            <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;close&quot;</span><span class="p">]</span>
            <span class="o">.</span><span class="n">shift</span><span class="p">(</span><span class="o">-</span><span class="bp">self</span><span class="o">.</span><span class="n">freqai_info</span><span class="p">[</span><span class="s2">&quot;feature_parameters&quot;</span><span class="p">][</span><span class="s2">&quot;label_period_candles&quot;</span><span class="p">])</span>
            <span class="o">.</span><span class="n">rolling</span><span class="p">(</span><span class="bp">self</span><span class="o">.</span><span class="n">freqai_info</span><span class="p">[</span><span class="s2">&quot;feature_parameters&quot;</span><span class="p">][</span><span class="s2">&quot;label_period_candles&quot;</span><span class="p">])</span>
            <span class="o">.</span><span class="n">mean</span><span class="p">()</span>
            <span class="o">/</span> <span class="n">dataframe</span><span class="p">[</span><span class="s2">&quot;close&quot;</span><span class="p">]</span>
            <span class="o">-</span> <span class="mi">1</span>
            <span class="p">)</span>

        <span class="k">return</span> <span class="n">dataframe</span>
</code></pre></div></td></tr></table></div><h3 id="freqai-new-data-pipeline"> FreqAI - 새로운 데이터 파이프라인 <a class="headerlink" href="#freqai-new-data-pipeline" title="영구 링크"> ¶ </a></h3><p> 사용자 정의 <code> IFreqaiModel </code> 을 만들고 사용자 정의 <code> train() </code> / <code> predict() </code> 함수를 사용하고 있으며, <em> 여전히 </em><code> data_cleaning_train/predict() </code> 에 의존하는 경우, 새로운 파이프라인으로 마이그레이션해야 합니다. 모델이 <em> data_cleaning_train/predict() </em> 에 의존하지 않는 경우, 이 마이그레이션에 대해 걱정할 필요가 없습니다. 이는 매우 소수의 고급 사용자에게 관련된 마이그레이션 가이드입니다. 실수로 이 가이드를 찾은 경우, Freqtrade 디스코드 서버에서 문제에 대해 자세히 문의할 수 있습니다. </p><p> 변환은 먼저 <code> data_cleaning_train/predict() </code> 을 제거하고 <code> define_data_pipeline() </code> 및 <code> define_label_pipeline() </code> 함수를 <code> IFreqaiModel </code> 클래스에 추가하는 것으로 시작됩니다: </p><div class="highlight"><table class="highlighttable"><tr><td class="linenos"><div class="linenodiv"><pre><span class="normal"> 1</span>
<span class="normal"> 2</span>
<span class="normal"> 3</span>
<span class="normal"> 4</span>
<span class="normal"> 5</span>
<span class="normal"> 6</span>
<span class="normal"> 7</span>
<span class="normal"> 8</span>
<span class="normal"> 9</span>
<span class="normal">10</span>
<span class="normal">11</span>
<span class="normal">12</span>
<span class="normal">13</span>
<span class="normal">14</span>
<span class="normal">15</span>
<span class="normal">16</span>
<span class="normal">17</span>
<span class="normal">18</span>
<span class="normal">19</span>
<span class="normal">20</span>
<span class="normal">21</span>
<span class="normal">22</span>
<span class="normal">23</span>
<span class="normal">24</span>
<span class="normal">25</span>
<span class="normal">26</span>
<span class="normal">27</span>
<span class="normal">28</span>
<span class="normal">29</span>
<span class="normal">30</span>
<span class="normal">31</span>
<span class="normal">32</span>
<span class="normal">33</span>
<span class="normal">34</span>
<span class="normal">35</span>
<span class="normal">36</span>
<span class="normal">37</span>
<span class="normal">38</span>
<span class="normal">39</span>
<span class="normal">40</span>
<span class="normal">41</span>
<span class="normal">42</span>
<span class="normal">43</span>
<span class="normal">44</span>
<span class="normal">45</span>
<span class="normal">46</span>
<span class="normal">47</span>
<span class="normal">48</span>
<span class="normal">49</span>
<span class="normal">50</span>
<span class="normal">51</span>
<span class="normal">52</span>
<span class="normal">53</span>
<span class="normal">54</span>
<span class="normal">55</span>
<span class="normal">56</span>
<span class="normal">57</span>
<span class="normal">58</span>
<span class="normal">59</span>
<span class="normal">60</span>
<span class="normal">61</span>
<span class="normal">62</span>
<span class="normal">63</span>
<span class="normal">64</span>
<span class="normal">65</span>
<span class="normal">66</span>
<span class="normal">67</span>
<span class="normal">68</span></pre></div></td><td class="code"><div><pre><code><span class="k">class</span><span class="w"> </span><span class="nc">MyCoolFreqaiModel</span><span class="p">(</span><span class="n">BaseRegressionModel</span><span class="p">):</span>
<span class="w">    </span><span class="sd">&quot;&quot;&quot;</span>
<span class="sd">    Some cool custom IFreqaiModel you made before Freqtrade version 2023.6</span>
<span class="sd">    &quot;&quot;&quot;</span>
    <span class="k">def</span><span class="w"> </span><span class="nf">train</span><span class="p">(</span>
        <span class="bp">self</span><span class="p">,</span> <span class="n">unfiltered_df</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">pair</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">dk</span><span class="p">:</span> <span class="n">FreqaiDataKitchen</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span>
    <span class="p">)</span> <span class="o">-&gt;</span> <span class="n">Any</span><span class="p">:</span>

        <span class="c1"># ... your custom stuff</span>

<span class="hll">        <span class="c1"># Remove these lines</span>
</span><span class="hll">        <span class="c1"># data_dictionary = dk.make_train_test_datasets(features_filtered, labels_filtered)</span>
</span><span class="hll">        <span class="c1"># self.data_cleaning_train(dk)</span>
</span><span class="hll">        <span class="c1"># data_dictionary = dk.normalize_data(data_dictionary)</span>
</span>        <span class="c1"># (1)</span>

        <span class="c1"># Add these lines. Now we control the pipeline fit/transform ourselves</span>
        <span class="n">dd</span> <span class="o">=</span> <span class="n">dk</span><span class="o">.</span><span class="n">make_train_test_datasets</span><span class="p">(</span><span class="n">features_filtered</span><span class="p">,</span> <span class="n">labels_filtered</span><span class="p">)</span>
        <span class="n">dk</span><span class="o">.</span><span class="n">feature_pipeline</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">define_data_pipeline</span><span class="p">(</span><span class="n">threads</span><span class="o">=</span><span class="n">dk</span><span class="o">.</span><span class="n">thread_count</span><span class="p">)</span>
        <span class="n">dk</span><span class="o">.</span><span class="n">label_pipeline</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">define_label_pipeline</span><span class="p">(</span><span class="n">threads</span><span class="o">=</span><span class="n">dk</span><span class="o">.</span><span class="n">thread_count</span><span class="p">)</span>

        <span class="p">(</span><span class="n">dd</span><span class="p">[</span><span class="s2">&quot;train_features&quot;</span><span class="p">],</span>
         <span class="n">dd</span><span class="p">[</span><span class="s2">&quot;train_labels&quot;</span><span class="p">],</span>
         <span class="n">dd</span><span class="p">[</span><span class="s2">&quot;train_weights&quot;</span><span class="p">])</span> <span class="o">=</span> <span class="n">dk</span><span class="o">.</span><span class="n">feature_pipeline</span><span class="o">.</span><span class="n">fit_transform</span><span class="p">(</span><span class="n">dd</span><span class="p">[</span><span class="s2">&quot;train_features&quot;</span><span class="p">],</span>
                                                                  <span class="n">dd</span><span class="p">[</span><span class="s2">&quot;train_labels&quot;</span><span class="p">],</span>
                                                                  <span class="n">dd</span><span class="p">[</span><span class="s2">&quot;train_weights&quot;</span><span class="p">])</span>

        <span class="p">(</span><span class="n">dd</span><span class="p">[</span><span class="s2">&quot;test_features&quot;</span><span class="p">],</span>
         <span class="n">dd</span><span class="p">[</span><span class="s2">&quot;test_labels&quot;</span><span class="p">],</span>
         <span class="n">dd</span><span class="p">[</span><span class="s2">&quot;test_weights&quot;</span><span class="p">])</span> <span class="o">=</span> <span class="n">dk</span><span class="o">.</span><span class="n">feature_pipeline</span><span class="o">.</span><span class="n">transform</span><span class="p">(</span><span class="n">dd</span><span class="p">[</span><span class="s2">&quot;test_features&quot;</span><span class="p">],</span>
                                                             <span class="n">dd</span><span class="p">[</span><span class="s2">&quot;test_labels&quot;</span><span class="p">],</span>
                                                             <span class="n">dd</span><span class="p">[</span><span class="s2">&quot;test_weights&quot;</span><span class="p">])</span>

        <span class="n">dd</span><span class="p">[</span><span class="s2">&quot;train_labels&quot;</span><span class="p">],</span> <span class="n">_</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="n">dk</span><span class="o">.</span><span class="n">label_pipeline</span><span class="o">.</span><span class="n">fit_transform</span><span class="p">(</span><span class="n">dd</span><span class="p">[</span><span class="s2">&quot;train_labels&quot;</span><span class="p">])</span>
        <span class="n">dd</span><span class="p">[</span><span class="s2">&quot;test_labels&quot;</span><span class="p">],</span> <span class="n">_</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="n">dk</span><span class="o">.</span><span class="n">label_pipeline</span><span class="o">.</span><span class="n">transform</span><span class="p">(</span><span class="n">dd</span><span class="p">[</span><span class="s2">&quot;test_labels&quot;</span><span class="p">])</span>

        <span class="c1"># ... your custom code</span>

        <span class="k">return</span> <span class="n">model</span>

    <span class="k">def</span><span class="w"> </span><span class="nf">predict</span><span class="p">(</span>
        <span class="bp">self</span><span class="p">,</span> <span class="n">unfiltered_df</span><span class="p">:</span> <span class="n">DataFrame</span><span class="p">,</span> <span class="n">dk</span><span class="p">:</span> <span class="n">FreqaiDataKitchen</span><span class="p">,</span> <span class="o">**</span><span class="n">kwargs</span>
    <span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">tuple</span><span class="p">[</span><span class="n">DataFrame</span><span class="p">,</span> <span class="n">npt</span><span class="o">.</span><span class="n">NDArray</span><span class="p">[</span><span class="n">np</span><span class="o">.</span><span class="n">int_</span><span class="p">]]:</span>

        <span class="c1"># ... your custom stuff</span>

<span class="hll">        <span class="c1"># Remove these lines:</span>
</span><span class="hll">        <span class="c1"># self.data_cleaning_predict(dk)</span>
</span><span class="hll">        <span class="c1"># (2)</span>
</span>
        <span class="c1"># Add these lines:</span>
        <span class="n">dk</span><span class="o">.</span><span class="n">data_dictionary</span><span class="p">[</span><span class="s2">&quot;prediction_features&quot;</span><span class="p">],</span> <span class="n">outliers</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="n">dk</span><span class="o">.</span><span class="n">feature_pipeline</span><span class="o">.</span><span class="n">transform</span><span class="p">(</span>
            <span class="n">dk</span><span class="o">.</span><span class="n">data_dictionary</span><span class="p">[</span><span class="s2">&quot;prediction_features&quot;</span><span class="p">],</span> <span class="n">outlier_check</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>

<span class="hll">        <span class="c1"># Remove this line</span>
</span><span class="hll">        <span class="c1"># pred_df = dk.denormalize_labels_from_metadata(pred_df)</span>
</span><span class="hll">        <span class="c1"># (3)</span>
</span>
        <span class="c1"># Replace with these lines</span>
        <span class="n">pred_df</span><span class="p">,</span> <span class="n">_</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="n">dk</span><span class="o">.</span><span class="n">label_pipeline</span><span class="o">.</span><span class="n">inverse_transform</span><span class="p">(</span><span class="n">pred_df</span><span class="p">)</span>
        <span class="k">if</span> <span class="bp">self</span><span class="o">.</span><span class="n">freqai_info</span><span class="o">.</span><span class="n">get</span><span class="p">(</span><span class="s2">&quot;DI_threshold&quot;</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">:</span>
            <span class="n">dk</span><span class="o">.</span><span class="n">DI_values</span> <span class="o">=</span> <span class="n">dk</span><span class="o">.</span><span class="n">feature_pipeline</span><span class="p">[</span><span class="s2">&quot;di&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">di_values</span>
        <span class="k">else</span><span class="p">:</span>
            <span class="n">dk</span><span class="o">.</span><span class="n">DI_values</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">zeros</span><span class="p">(</span><span class="n">outliers</span><span class="o">.</span><span class="n">shape</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span>
        <span class="n">dk</span><span class="o">.</span><span class="n">do_predict</span> <span class="o">=</span> <span class="n">outliers</span>

        <span class="c1"># ... your custom code</span>
        <span class="k">return</span> <span class="p">(</span><span class="n">pred_df</span><span class="p">,</span> <span class="n">dk</span><span class="o">.</span><span class="n">do_predict</span><span class="p">)</span>
</code></pre></div></td></tr></table></div><ol><li> 데이터 정규화 및 정리는 이제 새로운 파이프라인 정의와 함께 통합되었습니다. 이는 새로운 <code> define_data_pipeline() </code> 및 <code> define_label_pipeline() </code> 함수에서 생성됩니다. <code> data_cleaning_train() </code> 및 <code> data_cleaning_predict() </code> 함수는 더 이상 사용되지 않습니다. 원한다면 사용자 정의 파이프라인을 만들기 위해 <code> define_data_pipeline() </code> 을 재정의할 수 있습니다. </li><li> 데이터 정규화 및 정리는 이제 새로운 파이프라인 정의와 함께 통합되었습니다. 이는 새로운 <code> define_data_pipeline() </code> 및 <code> define_label_pipeline() </code> 함수에서 생성됩니다. <code> data_cleaning_train() </code> 및 <code> data_cleaning_predict() </code> 함수는 더 이상 사용되지 않습니다. 원한다면 사용자 정의 파이프라인을 만들기 위해 <code> define_data_pipeline() </code> 을 재정의할 수 있습니다. </li><li>데이터 비정규화는 새로운 파이프라인으로 수행됩니다. 이를 아래의 줄로 대체하세요.</li></ol>`,18))])}}};export{_ as default};
