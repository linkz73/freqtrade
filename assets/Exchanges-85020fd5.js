import{o as p,c as e,a,b as n,u as t}from"./index-1d9d7dc5.js";const c="/assets/binance_futures_settings-186ba0a8.png";const o={class:"md-content__inner md-typeset"},l=["src"],u={__name:"Exchanges",setup(i){return(d,s)=>(p(),e("article",o,[s[0]||(s[0]=a(`<h1 id="exchange-specific-notes"> 거래소별 주의사항 <a class="headerlink" href="#exchange-specific-notes" title="영구 링크"> ¶ </a></h1><p>이 페이지는 거래소별로 주의해야 할 점과 정보를 종합한 것으로, 다른 거래소에는 적용되지 않을 가능성이 높습니다.</p><h2 id="exchange-configuration"> 거래소 설정 <a class="headerlink" href="#exchange-configuration" title="영구 링크"> ¶ </a></h2><p> Freqtrade는 <a href="https://github.com/ccxt/ccxt"> CCXT 라이브러리 </a> 를 기반으로 하며, 100개 이상의 암호화폐 거래소와 거래 API를 지원합니다. 최신 목록은 <a href="https://github.com/ccxt/ccxt/tree/master/python"> CCXT 저장소 홈페이지 </a> 에서 확인할 수 있습니다. 하지만, 개발팀은 몇몇 거래소에서만 봇을 테스트했습니다. 현재 목록은 이 문서의 &quot;홈&quot; 섹션에서 확인할 수 있습니다. </p><p>다른 거래소를 테스트하고 봇 개선을 위한 피드백이나 PR을 제출해 주세요.</p><p>특정 거래소는 특별한 설정이 필요하며, 아래에서 확인할 수 있습니다.</p><h3 id="sample-exchange-configuration"> 샘플 거래소 설정 <a class="headerlink" href="#sample-exchange-configuration" title="영구 링크"> ¶ </a></h3><p>&quot;binance&quot; 거래소 설정 예시는 다음과 같습니다:</p><div class="highlight"><pre><code><span class="nt">&quot;exchange&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nt">&quot;name&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;binance&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;key&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_exchange_key&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;secret&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_exchange_secret&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;ccxt_config&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{},</span>
<span class="w">    </span><span class="nt">&quot;ccxt_async_config&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{},</span>
<span class="w">    </span><span class="c1">// ... </span>
</code></pre></div><h3 id="setting-rate-limits"> 속도 제한 설정 <a class="headerlink" href="#setting-rate-limits" title="영구 링크"> ¶ </a></h3><p>Usually, rate limits set by CCXT are reliable and work well. In case of problems related to rate-limits (usually DDOS Exceptions in your logs), it&#39;s easy to change rateLimit settings to other values.</p><div class="highlight"><pre><code><span class="nt">&quot;exchange&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nt">&quot;name&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;kraken&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;key&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_exchange_key&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;secret&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_exchange_secret&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;ccxt_config&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span><span class="nt">&quot;enableRateLimit&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">},</span>
<span class="w">    </span><span class="nt">&quot;ccxt_async_config&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">        </span><span class="nt">&quot;enableRateLimit&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;rateLimit&quot;</span><span class="p">:</span><span class="w"> </span><span class="mi">3100</span>
<span class="w">    </span><span class="p">},</span>
</code></pre></div><p> This configuration enables kraken, as well as rate-limiting to avoid bans from the exchange. <code> &quot;rateLimit&quot;: 3100 </code> defines a wait-event of 3.1s between each call. This can also be completely disabled by setting <code> &quot;enableRateLimit&quot; </code> to false. </p><div class="admonition note"><p class="admonition-title">Note</p><p> Optimal settings for rate-limiting depend on the exchange and the size of the whitelist, so an ideal parameter will vary on many other settings. We try to provide sensible defaults per exchange where possible, if you encounter bans please make sure that <code> &quot;enableRateLimit&quot; </code> is enabled and increase the <code> &quot;rateLimit&quot; </code> parameter step by step. </p></div><h2 id="binance"> Binance <a class="headerlink" href="#binance" title="영구 링크"> ¶ </a></h2><div class="admonition warning"><p class="admonition-title">서버 위치 및 Geo-IP 제한</p><p> Binance는 서버 국가에 따라 API 접근을 제한합니다. 현재 차단된 국가(완전한 목록은 아님)는 캐나다, 말레이시아, 네덜란드, 미국입니다. 최신 목록은 <a href="https://www.binance.com/en/terms"> binance terms &gt; b. Eligibility </a> 에서 확인하세요. </p></div><p> Binance는 <a href="configuration.html"> time_in_force </a> 를 지원합니다. </p><div class="admonition tip"><p class="admonition-title">거래소에서의 손절매</p><p> Binance는 <code> stoploss_on_exchange </code> 를 지원하며 <code> stop-loss-limit </code> 주문을 사용합니다. 이는 큰 장점을 제공하므로, 거래소에서 손절매를 활성화하는 것을 권장합니다. 선물의 경우, Binance는 <code> stop-limit </code> 와 <code> stop-market </code> 주문을 모두 지원합니다. <code> order_types.stoploss </code> 설정에서 <code> &quot;limit&quot; </code> 또는 <code> &quot;market&quot; </code> 을 사용하여 사용할 유형을 결정할 수 있습니다. </p></div><h3 id="binance-blacklist-recommendation"> Binance 블랙리스트 권장사항 <a class="headerlink" href="#binance-blacklist-recommendation" title="영구 링크"> ¶ </a></h3><p> Binance의 경우, 문제가 발생하지 않도록 <code> &quot;BNB/&lt;STAKE&gt;&quot; </code> 를 블랙리스트에 추가하는 것이 좋습니다. 이는 충분한 <code> BNB </code> 를 계정에 유지하거나 <code> BNB </code> 를 수수료로 사용하는 것을 비활성화하지 않는 한 필요합니다. Binance 계정은 수수료로 <code> BNB </code> 를 사용할 수 있으며, 거래가 <code> BNB </code> 에서 발생하면 추가 거래가 이 포지션을 소비하여 초기 <code> BNB </code> 거래를 판매할 수 없게 만들 수 있습니다. </p><p> 수수료를 충당할 충분한 <code> BNB </code> 가 없는 경우, 수수료는 <code> BNB </code> 로 충당되지 않으며 수수료 할인이 발생하지 않습니다. Freqtrade는 수수료를 충당하기 위해 <code> BNB </code> 를 구매하지 않습니다. <code> BNB </code> 는 수동으로 구매하고 모니터링해야 합니다. </p><h3 id="binance-sites"> Binance 사이트 <a class="headerlink" href="#binance-sites" title="영구 링크"> ¶ </a></h3><p>Binance는 두 개로 나뉘어 있으며, 사용자는 올바른 ccxt 거래소 ID를 사용해야 API 키가 인식됩니다.</p><ul><li><a href="https://www.binance.com/"> binance.com </a> - 국제 사용자. 거래소 ID: <code> binance </code> 를 사용하세요. </li><li><a href="https://www.binance.us/"> binance.us </a> - 미국 기반 사용자. 거래소 ID: <code> binanceus </code> 를 사용하세요. </li></ul><h3 id="binance-rsa-keys"> Binance RSA 키 <a class="headerlink" href="#binance-rsa-keys" title="영구 링크"> ¶ </a></h3><p>Freqtrade는 binance RSA API 키를 지원합니다.</p><p>환경 변수를 사용하는 것을 권장합니다.</p><div class="highlight"><pre><code><span class="nb">export</span><span class="w"> </span><span class="nv">FREQTRADE__EXCHANGE__SECRET</span><span class="o">=</span><span class="s2">&quot;</span><span class="k">$(</span>cat<span class="w"> </span>./rsa_binance.private<span class="k">)</span><span class="s2">&quot;</span>
</code></pre></div><p> 그러나 구성 파일을 통해서도 설정할 수 있습니다. json은 다중 라인 문자열을 지원하지 않으므로, 모든 줄 바꿈을 <code> \\n </code> 으로 대체해야 유효한 json 파일이 됩니다. </p><div class="highlight"><pre><code><span class="c1">// ...</span>
<span class="w"> </span><span class="nt">&quot;key&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;&lt;someapikey&gt;&quot;</span><span class="p">,</span>
<span class="w"> </span><span class="nt">&quot;secret&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;-----BEGIN PRIVATE KEY-----\\nMIIEvQIBABACAFQA&lt;...&gt;s8KX8=\\n-----END PRIVATE KEY-----&quot;</span>
<span class="c1">// ...</span>
</code></pre></div><h3 id="binance-futures"> Binance 선물 <a class="headerlink" href="#binance-futures" title="영구 링크"> ¶ </a></h3><p> Binance는 특정 (불행히도 복잡한) <a href="https://www.binance.com/en/support/faq/4f462ebe6ff445d4a170be7d9e897272"> 선물 거래 정량 규칙 </a> 을 가지고 있으며, 이는 너무 낮은 스테이크 금액(기타 등등)을 금지합니다. 이러한 규칙을 위반하면 거래 제한이 발생합니다. </p><p>Binance 선물 시장에서 거래할 때, 주문서를 사용해야 합니다. 선물에 대한 가격 티커 데이터가 없기 때문입니다.</p><div class="highlight"><pre><code>  &quot;entry_pricing&quot;: {
      &quot;use_order_book&quot;: true,
      &quot;order_book_top&quot;: 1,
      &quot;check_depth_of_market&quot;: {
          &quot;enabled&quot;: false,
          &quot;bids_to_ask_delta&quot;: 1
      }
  },
  &quot;exit_pricing&quot;: {
      &quot;use_order_book&quot;: true,
      &quot;order_book_top&quot;: 1
  },
</code></pre></div><h4 id="binance-isolated-futures-settings"> Binance 격리 선물 설정 <a class="headerlink" href="#binance-isolated-futures-settings" title="영구 링크"> ¶ </a></h4><p>사용자는 선물 설정에서 &quot;포지션 모드&quot;를 &quot;단일 방향 모드&quot;로, &quot;자산 모드&quot;를 &quot;단일 자산 모드&quot;로 설정해야 합니다. 이러한 설정은 시작 시 확인되며, 설정이 잘못된 경우 Freqtrade는 오류를 표시합니다.</p>`,36)),n("p",null,[n("img",{alt:"Binance 선물 설정",src:t(c)},null,8,l)]),s[1]||(s[1]=a(`<p>Freqtrade는 이러한 설정을 변경하려고 시도하지 않습니다.</p><h4 id="binance-bnfcr-futures"> Binance BNFCR 선물 <a class="headerlink" href="#binance-bnfcr-futures" title="영구 링크"> ¶ </a></h4><p> BNFCR 모드는 유럽의 규제 문제를 해결하기 위한 Binance의 특별한 선물 모드입니다. <br> BNFCR 선물을 사용하려면 다음 설정 조합이 필요합니다: </p><div class="highlight"><pre><code>{
    // ...
    &quot;trading_mode&quot;: &quot;futures&quot;,
    &quot;margin_mode&quot;: &quot;cross&quot;,
    &quot;proxy_coin&quot;: &quot;BNFCR&quot;,
    &quot;stake_currency&quot;: &quot;USDT&quot; // 또는 &quot;USDC&quot;
    // ...
}
</code></pre></div><p><code> stake_currency </code> 설정은 봇이 운영할 시장을 정의합니다. 이 선택은 정말로 임의적입니다. </p><p> 거래소에서는 &quot;다중 자산 모드&quot;를 사용해야 하며, &quot;포지션 모드&quot;는 &quot;단일 방향 모드&quot;로 설정해야 합니다. <br> Freqtrade는 시작 시 이러한 설정을 확인하지만, 변경하려고 시도하지 않습니다. </p><h2 id="bingx"> Bingx <a class="headerlink" href="#bingx" title="영구 링크"> ¶ </a></h2><p> BingX는 <a href="configuration.html"> time_in_force </a> 를 &quot;GTC&quot; (취소될 때까지 유효), &quot;IOC&quot; (즉시 또는 취소) 및 &quot;PO&quot; (포스트 온리) 설정으로 지원합니다. </p><div class="admonition tip"><p class="admonition-title">거래소에서의 손절매</p><p> Bingx는 <code> stoploss_on_exchange </code> 를 지원하며, 손절매 제한 및 손절매 시장 주문을 모두 사용할 수 있습니다. 이는 큰 장점을 제공하므로, 거래소에서 손절매를 활성화하는 것을 권장합니다. </p></div><h2 id="kraken"> Kraken <a class="headerlink" href="#kraken" title="영구 링크"> ¶ </a></h2><p> Kraken은 <a href="configuration.html"> time_in_force </a> 를 &quot;GTC&quot; (취소될 때까지 유효), &quot;IOC&quot; (즉시 또는 취소) 및 &quot;PO&quot; (포스트 온리) 설정으로 지원합니다. </p><div class="admonition tip"><p class="admonition-title">거래소에서의 손절매</p><p> Kraken은 <code> stoploss_on_exchange </code> 를 지원하며, 손절매 시장 및 손절매 제한 주문을 모두 사용할 수 있습니다. 이는 큰 장점을 제공하므로, 이를 활용하는 것을 권장합니다. <code> order_types.stoploss </code> 설정에서 <code> &quot;limit&quot; </code> 또는 <code> &quot;market&quot; </code> 을 사용하여 사용할 유형을 결정할 수 있습니다. </p></div><h3 id="historic-kraken-data"> Kraken의 역사적 데이터 <a class="headerlink" href="#historic-kraken-data" title="영구 링크"> ¶ </a></h3><p> Kraken API는 720개의 역사적 캔들만 제공하며, 이는 Freqtrade의 드라이런 및 라이브 거래 모드에는 충분하지만 백테스팅에는 문제가 됩니다. Kraken 거래소의 데이터를 다운로드하려면 <code> --dl-trades </code> 를 사용하는 것이 필수적입니다. 그렇지 않으면 봇은 동일한 720개의 캔들을 반복해서 다운로드하게 되어 충분한 백테스트 데이터를 확보할 수 없습니다. </p><p> 다운로드 속도를 높이기 위해, Kraken이 제공하는 <a href="https://support.kraken.com/hc/en-us/articles/360047543791-Downloadable-historical-market-data-time-and-sales-"> 거래 zip 파일 </a> 을 다운로드할 수 있습니다. 이러한 파일은 보통 분기별로 업데이트됩니다. Freqtrade는 이러한 파일을 <code> user_data/data/kraken/trades_csv </code> 에 배치할 것으로 예상합니다. </p><p>증분 파일을 사용하는 경우, &quot;전체&quot; 기록을 하나의 디렉토리에, 증분 파일을 다른 디렉토리에 배치하는 구조가 유용할 수 있습니다. 이 모드의 가정은 데이터가 다운로드되고 파일 이름을 유지한 채로 압축이 해제된다는 것입니다. 중복된 내용은 타임스탬프를 기준으로 무시됩니다. 그러나 데이터에 간격이 없다는 가정입니다.</p><p>즉, &quot;전체&quot; 기록이 2022년 4분기에 끝나는 경우, 2023년 1분기 및 2023년 2분기의 증분 업데이트가 모두 제공됩니다. 이를 갖추지 않으면 데이터가 불완전하게 되어 데이터를 사용할 때 잘못된 결과가 발생할 수 있습니다.</p><div class="highlight"><pre><code>└── trades_csv
    ├── Kraken_full_history
    │   ├── BCHEUR.csv
    │   └── XBTEUR.csv
    ├── Kraken_Trading_History_Q1_2023
    │   ├── BCHEUR.csv
    │   └── XBTEUR.csv
    └── Kraken_Trading_History_Q2_2023
        ├── BCHEUR.csv
        └── XBTEUR.csv
</code></pre></div><p>이 파일들을 freqtrade 파일로 변환할 수 있습니다:</p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>convert-trade-data<span class="w"> </span>--exchange<span class="w"> </span>kraken<span class="w"> </span>--format-from<span class="w"> </span>kraken_csv<span class="w"> </span>--format-to<span class="w"> </span>feather
<span class="c1"># 거래 데이터를 다른 ohlcv 시간 프레임으로 변환</span>
freqtrade<span class="w"> </span>trades-to-ohlcv<span class="w"> </span>-p<span class="w"> </span>BTC/EUR<span class="w"> </span>BCH/EUR<span class="w"> </span>--exchange<span class="w"> </span>kraken<span class="w"> </span>-t<span class="w"> </span>1m<span class="w"> </span>5m<span class="w"> </span>15m<span class="w"> </span>1h
</code></pre></div><p>변환된 데이터는 데이터 다운로드도 가능하게 하며, 최신 로드된 거래 이후 다운로드를 시작합니다.</p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>download-data<span class="w"> </span>--exchange<span class="w"> </span>kraken<span class="w"> </span>--dl-trades<span class="w"> </span>-p<span class="w"> </span>BTC/EUR<span class="w"> </span>BCH/EUR<span class="w"> </span>
</code></pre></div><div class="admonition warning"><p class="admonition-title">Kraken 데이터 다운로드</p><p>Kraken 데이터를 다운로드하려면 다른 거래소보다 훨씬 더 많은 메모리(RAM)가 필요합니다. 거래 데이터를 캔들로 변환해야 하기 때문입니다. 또한, freqtrade는 거래소에서 해당 페어/시간 범위 조합에 대한 모든 거래를 다운로드해야 하므로 시간이 오래 걸릴 수 있습니다. 인내심을 가지세요.</p></div><div class="admonition warning"><p class="admonition-title">rateLimit 조정</p><p>rateLimit 구성 항목은 요청 간의 지연 시간을 밀리초 단위로 나타내며, 초당 요청 비율이 아닙니다. 따라서 Kraken API &quot;Rate limit exceeded&quot; 예외를 완화하려면 이 구성을 줄이는 것이 아니라 늘려야 합니다.</p></div><h2 id="kucoin"> Kucoin <a class="headerlink" href="#kucoin" title="영구 링크"> ¶ </a></h2><p>Kucoin은 각 API 키에 대한 암호가 필요하므로, 구성에 이 키를 추가해야 합니다. 따라서 거래소 섹션은 다음과 같이 보입니다:</p><div class="highlight"><pre><code><span class="nt">&quot;exchange&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nt">&quot;name&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;kucoin&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;key&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_exchange_key&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;secret&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_exchange_secret&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;password&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_exchange_api_key_password&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="c1">// ...</span>
<span class="p">}</span>
</code></pre></div><p> Kucoin은 <a href="configuration.html"> time_in_force </a> 를 지원합니다. </p><div class="admonition tip"><p class="admonition-title">거래소에서의 손절매</p><p> Kucoin은 <code> stoploss_on_exchange </code> 를 지원하며, 손절매 시장 및 손절매 제한 주문을 모두 사용할 수 있습니다. 이는 큰 장점을 제공하므로, 이를 활용하는 것을 권장합니다. <code> order_types.stoploss </code> 설정에서 <code> &quot;limit&quot; </code> 또는 <code> &quot;market&quot; </code> 을 사용하여 사용할 유형을 결정할 수 있습니다. </p></div><h3 id="kucoin-blacklists"> Kucoin 블랙리스트 <a class="headerlink" href="#kucoin-blacklists" title="영구 링크"> ¶ </a></h3><p> Kucoin의 경우, 문제가 발생하지 않도록 <code> &quot;KCS/&lt;STAKE&gt;&quot; </code> 를 블랙리스트에 추가하는 것이 좋습니다. 이는 충분한 <code> KCS </code> 를 계정에 유지하거나 <code> KCS </code> 를 수수료로 사용하는 것을 비활성화하지 않는 한 필요합니다. Kucoin 계정은 수수료로 <code> KCS </code> 를 사용할 수 있으며, 거래가 <code> KCS </code> 에서 발생하면 추가 거래가 이 포지션을 소비하여 초기 <code> KCS </code> 거래를 판매할 수 없게 만들 수 있습니다. </p><h2 id="htx"> HTX <a class="headerlink" href="#htx" title="영구 링크"> ¶ </a></h2><div class="admonition tip"><p class="admonition-title">거래소에서의 손절매</p><p> HTX는 <code> stoploss_on_exchange </code> 를 지원하며 <code> stop-limit </code> 주문을 사용합니다. 이는 큰 장점을 제공하므로, 거래소에서 손절매를 활성화하는 것을 권장합니다. </p></div><h2 id="okx"> OKX <a class="headerlink" href="#okx" title="영구 링크"> ¶ </a></h2><p>OKX는 각 API 키에 대한 암호가 필요하므로, 구성에 이 키를 추가해야 합니다. 따라서 거래소 섹션은 다음과 같이 보입니다:</p><div class="highlight"><pre><code><span class="nt">&quot;exchange&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nt">&quot;name&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;okx&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;key&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_exchange_key&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;secret&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_exchange_secret&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;password&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_exchange_api_key_password&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="c1">// ...</span>
<span class="p">}</span>
</code></pre></div><p> OKX의 my.okx.com (OKX EAA)에서 등록한 경우 <code> &quot;myokx&quot; </code> 를 거래소 이름으로 사용해야 합니다. 잘못된 거래소를 사용하면 &quot;OKX Error 50119: API key doesn&#39;t exist&quot; 오류가 발생합니다. 이는 두 개의 별도 엔터티이기 때문입니다. </p><div class="admonition warning"><p class="admonition-title">경고</p><p>OKX는 API 호출당 100개의 캔들만 제공합니다. 따라서 전략은 백테스팅 모드에서 매우 적은 양의 데이터만 사용할 수 있습니다.</p></div><div class="admonition warning"><p class="admonition-title">선물</p><p>OKX 선물은 &quot;포지션 모드&quot; 개념을 가지고 있으며, 이는 &quot;매수/매도&quot; 또는 롱/숏(헤지 모드)일 수 있습니다. Freqtrade는 두 모드를 모두 지원하지만(매수/매도 모드를 사용하는 것을 권장합니다), 거래 중간에 모드를 변경하는 것은 지원되지 않으며 거래를 배치하는 데 실패할 수 있습니다. OKX는 또한 지난 ~3개월 동안의 MARK 캔들만 제공합니다. 따라서 그 이전의 선물 백테스팅은 약간의 편차가 발생할 수 있으며, 이는 자금 수수료를 정확하게 계산할 수 없기 때문입니다.</p></div><h2 id="gateio"> Gate.io <a class="headerlink" href="#gateio" title="영구 링크"> ¶ </a></h2><div class="admonition tip"><p class="admonition-title">거래소에서의 손절매</p><p> Gate.io는 <code> stoploss_on_exchange </code> 를 지원하며 <code> stop-loss-limit </code> 주문을 사용합니다. 이는 큰 장점을 제공하므로, 거래소에서 손절매를 활성화하는 것을 권장합니다. </p></div><p> Gate.io는 수수료를 지불하기 위해 <code> POINT </code> 를 사용할 수 있습니다. 이는 거래 가능한 통화가 아니므로(일반 시장이 없음), 자동 수수료 계산이 실패합니다(기본적으로 수수료가 0으로 설정됨). 구성 매개변수 <code> exchange.unknown_fee_rate </code> 를 사용하여 POINT와 스테이크 통화 간의 환율을 지정할 수 있습니다. 물론, 스테이크 통화를 변경하면 이 값도 변경해야 합니다. </p><p>Gate API 키는 거래하려는 시장 유형 외에도 다음 권한이 필요합니다:</p><ul><li> &quot;현물 거래&quot; <em> 또는 </em> &quot;영구 선물&quot; (읽기 및 쓰기) (둘 다 선택하거나 거래하려는 시장에 맞는 것을 선택) </li><li>&quot;지갑&quot; (읽기 전용)</li><li>&quot;계정&quot; (읽기 전용)</li></ul><p>이러한 권한이 없으면 봇이 올바르게 시작되지 않으며 &quot;권한 누락&quot;과 같은 오류가 표시됩니다.</p><h2 id="bybit"> Bybit <a class="headerlink" href="#bybit" title="영구 링크"> ¶ </a></h2><p>Bybit에서의 선물 거래는 현재 USDT 시장에 대해 지원되며, 격리 선물 모드를 사용합니다.</p><p>시작 시, freqtrade는 전체(하위) 계정에 대해 포지션 모드를 &quot;단일 방향 모드&quot;로 설정합니다. 이는 이 호출을 반복해서 수행하지 않도록 하여 봇 작업을 느리게 하지 않지만, 이 설정을 변경하면 예외 및 오류가 발생할 수 있습니다.</p><p>Bybit는 자금 비율 기록을 제공하지 않으므로, 드라이런 계산이 라이브 거래에도 사용됩니다.</p><p>라이브 선물 거래를 위한 API 키는 다음 권한이 필요합니다:</p><ul><li>읽기-쓰기</li><li>계약 - 주문</li><li>계약 - 포지션</li></ul><p>모든 API 키를 사용하는 IP로 제한하는 것을 강력히 권장합니다.</p><div class="admonition warning"><p class="admonition-title">통합 계정</p><p> Freqtrade는 계정이 봇에 전용된 것으로 가정합니다. 따라서 봇당 하나의 하위 계정을 사용하는 것을 권장합니다. 이는 특히 통합 계정을 사용할 때 중요합니다. <br> 다른 구성(하나의 계정에서 여러 봇, 봇 계정에서 수동 비봇 거래)은 지원되지 않으며 예상치 못한 동작을 초래할 수 있습니다. </p></div><div class="admonition tip"><p class="admonition-title">거래소에서의 손절매</p><p> Bybit (선물 전용)는 <code> stoploss_on_exchange </code> 를 지원하며 <code> stop-loss-limit </code> 주문을 사용합니다. 이는 큰 장점을 제공하므로, 거래소에서 손절매를 활성화하는 것을 권장합니다. 선물의 경우, Bybit는 <code> stop-limit </code> 와 <code> stop-market </code> 주문을 모두 지원합니다. <code> order_types.stoploss </code> 설정에서 <code> &quot;limit&quot; </code> 또는 <code> &quot;market&quot; </code> 을 사용하여 사용할 유형을 결정할 수 있습니다. </p></div><h2 id="bitmart"> Bitmart <a class="headerlink" href="#bitmart" title="영구 링크"> ¶ </a></h2><p>Bitmart는 거래소 키와 비밀과 함께 API 키 메모(사용자가 API 키에 부여한 이름)를 필요로 합니다. 따라서 UID를 전달해야 합니다.</p><div class="highlight"><pre><code><span class="nt">&quot;exchange&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nt">&quot;name&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;bitmart&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;uid&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_bitmart_api_key_memo&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;secret&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_exchange_secret&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;password&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_exchange_api_key_password&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="c1">// ...</span>
<span class="p">}</span>
</code></pre></div><div class="admonition warning"><p class="admonition-title">필요한 인증</p><p>Bitmart는 UI를 통해 거래할 때는 Lvl1 인증만으로도 충분하지만, API를 통해 현물 시장에서 성공적으로 거래하려면 Lvl2 인증이 필요합니다.</p></div><h2 id="hyperliquid"> Hyperliquid <a class="headerlink" href="#hyperliquid" title="영구 링크"> ¶ </a></h2><div class="admonition tip"><p class="admonition-title">거래소에서의 손절매</p><p> Hyperliquid는 <code> stoploss_on_exchange </code> 를 지원하며 <code> stop-loss-limit </code> 주문을 사용합니다. 이는 큰 장점을 제공하므로, 이를 활용하는 것을 권장합니다. </p></div><p>Hyperliquid는 탈중앙화 거래소(DEX)입니다. 탈중앙화 거래소는 일반 거래소와 약간 다르게 작동합니다. 개인 API 호출을 API 키를 사용하여 인증하는 대신, 개인 API 호출은 지갑의 개인 키로 서명해야 합니다(이를 위해 Hyperliquid 또는 선택한 지갑에서 생성된 API 지갑을 사용하는 것을 권장합니다). 이는 다음과 같이 구성해야 합니다:</p><div class="highlight"><pre><code><span class="nt">&quot;exchange&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nt">&quot;name&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;hyperliquid&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;walletAddress&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_eth_wallet_address&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;privateKey&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_api_private_key&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="c1">// ...</span>
<span class="p">}</span>
</code></pre></div><ul><li> hex 형식의 walletAddress: <code> 0x&lt;40 hex characters&gt; </code> - 지갑에서 쉽게 복사할 수 있으며, API 지갑 주소가 아닌 지갑 주소여야 합니다. </li><li> hex 형식의 privateKey: <code> 0x&lt;64 hex characters&gt; </code> - API 지갑 생성 시 표시되는 키를 사용하세요. </li></ul><p> Hyperliquid는 Arbitrum One 체인에서 입출금을 처리하며, 이는 이더리움 위에 구축된 Layer 2 확장 솔루션입니다. Hyperliquid는 USDC를 견적/담보로 사용합니다. Hyperliquid에 USDC를 입금하는 과정은 몇 가지 단계를 필요로 하며, 자세한 내용은 <a href="https://hyperliquid.gitbook.io/hyperliquid-docs/onboarding/how-to-start-trading"> 거래 시작 방법 </a> 을 참조하세요. </p><div class="admonition note"><p class="admonition-title">Hyperliquid 일반 사용 주의사항</p><p> Hyperliquid는 시장 주문을 지원하지 않지만, ccxt는 최대 5%의 슬리피지를 가진 제한 주문을 배치하여 시장 주문을 시뮬레이션합니다. <br> 불행히도, hyperliquid는 5000개의 역사적 캔들만 제공하므로, 백테스팅은 역사적으로 캔들을 구축하거나(시간을 기다리고 데이터를 점진적으로 다운로드) 마지막 5000개의 캔들로 제한됩니다. </p></div><div class="admonition info"><p class="admonition-title">일반적인 모범 사례(완전하지 않음)</p><ul><li>공급망 공격(예: pip 패키지 중독 등)에 주의하세요. 개인 키를 사용할 때는 환경이 안전한지 확인하세요.</li><li> 실제 지갑 개인 키를 거래에 사용하지 마세요. Hyperliquid <a href="https://app.hyperliquid.xyz/API"> API 생성기 </a> 를 사용하여 별도의 API 지갑을 생성하세요. </li><li>실제 지갑 개인 키를 freqtrade를 사용하는 서버에 저장하지 마세요. 대신 API 지갑 개인 키를 사용하세요. 이 키는 출금을 허용하지 않으며, 거래만 허용합니다.</li><li>항상 니모닉 문구와 개인 키를 비공개로 유지하세요.</li><li>하드웨어 지갑을 초기화할 때 백업해야 하는 니모닉과 동일한 니모닉을 사용하지 마세요. 동일한 니모닉을 사용하면 하드웨어 지갑의 보안이 삭제됩니다.</li><li>다른 소프트웨어 지갑을 생성하고, 거래하려는 자금만 해당 지갑으로 전송하고, 해당 지갑을 사용하여 Hyperliquid에서 거래하세요.</li><li>거래에 사용하지 않으려는 자금이 있는 경우(예: 이익을 본 후), 해당 자금을 하드웨어 지갑으로 다시 전송하세요.</li></ul></div><h2 id="all-exchanges"> 모든 거래소 <a class="headerlink" href="#all-exchanges" title="영구 링크"> ¶ </a></h2><p> Nonce와 관련된 지속적인 오류( <code> InvalidNonce </code> 와 같은)가 발생하는 경우, API 키를 재생성하는 것이 가장 좋습니다. Nonce를 재설정하는 것은 어렵고, API 키를 재생성하는 것이 보통 더 쉽습니다. </p><h2 id="random-notes-for-other-exchanges"> 다른 거래소에 대한 임의의 주의사항 <a class="headerlink" href="#random-notes-for-other-exchanges" title="영구 링크"> ¶ </a></h2><ul><li> The Ocean (거래소 ID: <code> theocean </code> ) 거래소는 Web3 기능을 사용하며 <code> web3 </code> 파이썬 패키지를 설치해야 합니다: </li></ul><div class="highlight"><pre><code>pip3<span class="w"> </span>install<span class="w"> </span>web3
</code></pre></div><h3 id="getting-latest-price-incomplete-candles"> 최신 가격 가져오기 / 불완전한 캔들 <a class="headerlink" href="#getting-latest-price-incomplete-candles" title="영구 링크"> ¶ </a></h3><p>대부분의 거래소는 OHLCV/klines API 인터페이스를 통해 현재 불완전한 캔들을 반환합니다. 기본적으로 Freqtrade는 불완전한 캔들이 거래소에서 가져온 것으로 가정하고 마지막 캔들을 제거합니다.</p><p> 거래소가 불완전한 캔들을 반환하는지 여부는 <a href="developer.html"> 기여자 문서 </a> 의 도우미 스크립트를 사용하여 확인할 수 있습니다. </p><p>재도색의 위험 때문에, Freqtrade는 이 불완전한 캔들을 사용하는 것을 허용하지 않습니다.</p><p> 그러나 전략에 최신 가격이 필요한 경우, 이 요구 사항은 전략 내에서 <a href="strategy-customization.html"> 데이터 제공자 </a> 를 사용하여 얻을 수 있습니다. </p><h3 id="advanced-freqtrade-exchange-configuration"> 고급 Freqtrade 거래소 설정 <a class="headerlink" href="#advanced-freqtrade-exchange-configuration" title="영구 링크"> ¶ </a></h3><p> 고급 옵션은 기본값과 거래소별 동작을 재정의하는 <code> _ft_has_params </code> 설정을 사용하여 구성할 수 있습니다. </p><p> 사용 가능한 옵션은 거래소 클래스에 <code> _ft_has_default </code> 로 나열되어 있습니다. </p><p> 예를 들어, Kraken에서 주문 유형 <code> FOK </code> 를 테스트하고 캔들 제한을 200으로 수정하려면(즉, API 호출당 200개의 캔들만 받음): </p><div class="highlight"><pre><code><span class="nt">&quot;exchange&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nt">&quot;name&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;kraken&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;_ft_has_params&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">        </span><span class="nt">&quot;order_time_in_force&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="s2">&quot;GTC&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;FOK&quot;</span><span class="p">],</span>
<span class="w">        </span><span class="nt">&quot;ohlcv_candle_limit&quot;</span><span class="p">:</span><span class="w"> </span><span class="mi">200</span>
<span class="w">        </span><span class="p">}</span>
<span class="w">    </span><span class="c1">//...</span>
<span class="p">}</span>
</code></pre></div><div class="admonition warning"><p class="admonition-title">경고</p><p>이 설정의 영향을 완전히 이해한 후에만 수정하세요.</p></div>`,82))]))}};export{u as default};
