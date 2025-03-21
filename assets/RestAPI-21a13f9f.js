import{f as t}from"./frequi_url-aafab580.js";import{o as e,c as o,a as n,b as a,d as p,u as c}from"./index-1d9d7dc5.js";const d={class:"md-content__inner md-typeset"},l=["src"],h={__name:"RestAPI",setup(r){return(i,s)=>(e(),o("article",d,[s[3]||(s[3]=n(`<h1 id="rest-api"> REST API <a class="headerlink" href="#rest-api" title="영구 링크"> ¶ </a></h1><h2 id="frequi"> FreqUI <a class="headerlink" href="#frequi" title="영구 링크"> ¶ </a></h2><p> FreqUI는 이제 전용 <a href="freq-ui.html"> 문서 섹션 </a> 을(를) 가지고 있습니다. FreqUI에 대한 모든 정보는 해당 섹션을 참조하세요. </p><h2 id="configuration"> 설정 <a class="headerlink" href="#configuration" title="영구 링크"> ¶ </a></h2><p>REST API를 활성화하려면 설정 파일에 <code>api_server</code> 섹션을 추가하고 <code>api_server.enabled</code>를 <code>true</code>로 설정하세요.</p><p>샘플 설정:</p><div class="highlight"><pre><code><span class="w">    </span><span class="nt">&quot;api_server&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">        </span><span class="nt">&quot;enabled&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;listen_ip_address&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;127.0.0.1&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;listen_port&quot;</span><span class="p">:</span><span class="w"> </span><span class="mi">8080</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;verbosity&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;error&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;enable_openapi&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">false</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;jwt_secret_key&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;somethingrandom&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;CORS_origins&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">[],</span>
<span class="w">        </span><span class="nt">&quot;username&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;Freqtrader&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;password&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;SuperSecret1!&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;ws_token&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;sercet_Ws_t0ken&quot;</span>
<span class="w">    </span><span class="p">},</span>
</code></pre></div><div class="admonition danger"><p class="admonition-title">보안 경고</p><p>기본적으로 설정은 로컬호스트에서만 수신하도록 되어 있습니다(다른 시스템에서 접근 불가). 이 API를 인터넷에 노출하지 말고 강력하고 고유한 비밀번호를 선택하는 것을 강력히 권장합니다. 그렇지 않으면 다른 사용자가 봇을 제어할 수 있습니다.</p></div><details class="note"><summary>원격 서버에서의 API/UI 접근</summary><p>VPS에서 실행 중인 경우, ssh 터널을 사용하거나 VPN(openVPN, wireguard)을 설정하여 봇에 연결하는 것이 좋습니다. 이렇게 하면 freqUI가 인터넷에 직접 노출되지 않으며, 이는 보안상의 이유로 권장되지 않습니다(freqUI는 기본적으로 https를 지원하지 않습니다). 이러한 도구의 설정은 이 튜토리얼의 범위를 벗어나지만, 인터넷에서 많은 좋은 튜토리얼을 찾을 수 있습니다.</p></details><p>이후 브라우저에서 <code>http://127.0.0.1:8080/api/v1/ping</code>에 접속하여 API가 올바르게 실행 중인지 확인할 수 있습니다. 이 요청은 다음과 같은 응답을 반환해야 합니다:</p><div class="highlight"><pre><code><span class="go">{&quot;status&quot;:&quot;pong&quot;}</span>
</code></pre></div><p>기타 엔드포인트는 민감한 정보를 반환하며 인증이 필요하므로 웹 브라우저를 통해 사용할 수 없습니다.</p><h3 id="security"> 보안 <a class="headerlink" href="#security" title="영구 링크"> ¶ </a></h3><p>안전한 비밀번호를 생성하려면 비밀번호 관리자를 사용하거나 아래 코드를 사용하세요.</p><div class="highlight"><pre><code><span class="kn">import</span><span class="w"> </span><span class="nn">secrets</span>
<span class="n">secrets</span><span class="o">.</span><span class="n">token_hex</span><span class="p">()</span>
</code></pre></div><div class="admonition hint"><p class="admonition-title">JWT 토큰</p><p>동일한 방법으로 JWT 비밀 키(<code>jwt_secret_key</code>)도 생성하세요.</p></div><div class="admonition danger"><p class="admonition-title">비밀번호 선택</p><p>봇을 무단 접근으로부터 보호하기 위해 매우 강력하고 고유한 비밀번호를 선택하세요. 또한 <code>jwt_secret_key</code>를 무작위 값으로 변경하세요(기억할 필요는 없지만 세션을 암호화하는 데 사용되므로 고유해야 합니다!).</p></div><h3 id="configuration-with-docker"> 도커를 사용한 설정 <a class="headerlink" href="#configuration-with-docker" title="영구 링크"> ¶ </a></h3><p>도커를 사용하여 봇을 실행하는 경우, 봇이 들어오는 연결을 수신하도록 설정해야 합니다. 보안은 도커에 의해 처리됩니다.</p><div class="highlight"><pre><code><span class="w">    </span><span class="nt">&quot;api_server&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">        </span><span class="nt">&quot;enabled&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;listen_ip_address&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;0.0.0.0&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;listen_port&quot;</span><span class="p">:</span><span class="w"> </span><span class="mi">8080</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;username&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;Freqtrader&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;password&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;SuperSecret1!&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="c1">//...</span>
<span class="w">    </span><span class="p">},</span>
</code></pre></div><p>docker-compose 파일에 다음 두 줄이 있는지 확인하세요:</p><div class="highlight"><pre><code>    ports:
      - &quot;127.0.0.1:8080:8080&quot;
</code></pre></div><div class="admonition danger"><p class="admonition-title">보안 경고</p><p>docker 포트 매핑에서 <code>&quot;8080:8080&quot;</code> (또는 <code>&quot;0.0.0.0:8080:8080&quot;</code>)을 사용하면 API가 올바른 포트로 서버에 연결하는 모든 사람에게 공개되므로 다른 사용자가 봇을 제어할 수 있습니다. 이는 봇을 안전한 환경(예: 가정 네트워크)에서 실행하는 경우 안전할 수 있지만, API를 인터넷에 노출하는 것은 권장되지 않습니다.</p></div><h2 id="rest-api_1"> Rest API <a class="headerlink" href="#rest-api_1" title="영구 링크"> ¶ </a></h2><h3 id="consuming-the-api"> API 사용 <a class="headerlink" href="#consuming-the-api" title="영구 링크"> ¶ </a></h3><p>API를 사용하려면 지원되는 <code>freqtrade-client</code> 패키지(또는 <code>scripts/rest_client.py</code>)를 사용하는 것이 좋습니다.</p><p>이 명령은 <code>pip install freqtrade-client</code>를 사용하여 실행 중인 freqtrade 봇과 독립적으로 설치할 수 있습니다.</p><p>이 모듈은 가볍게 설계되었으며, <code>requests</code> 및 <code>python-rapidjson</code> 모듈에만 의존하며, freqtrade가 필요로 하는 모든 무거운 종속성을 건너뜁니다.</p><div class="highlight"><pre><code>freqtrade-client<span class="w"> </span>&lt;command&gt;<span class="w"> </span><span class="o">[</span>optional<span class="w"> </span>parameters<span class="o">]</span>
</code></pre></div><p>기본적으로 스크립트는 <code>127.0.0.1</code>(로컬호스트) 및 포트 <code>8080</code>을 사용한다고 가정하지만, 구성 파일을 지정하여 이 동작을 재정의할 수 있습니다.</p><h4 id="minimalistic-client-config"> 최소한의 클라이언트 구성 <a class="headerlink" href="#minimalistic-client-config" title="영구 링크"> ¶ </a></h4><div class="highlight"><pre><code><span class="p">{</span>
<span class="w">    </span><span class="nt">&quot;api_server&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">        </span><span class="nt">&quot;enabled&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;listen_ip_address&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;0.0.0.0&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;listen_port&quot;</span><span class="p">:</span><span class="w"> </span><span class="mi">8080</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;username&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;Freqtrader&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;password&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;SuperSecret1!&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="c1">//...</span>
<span class="w">    </span><span class="p">}</span>
<span class="p">}</span>
</code></pre></div><div class="highlight"><pre><code>freqtrade-client<span class="w"> </span>--config<span class="w"> </span>rest_config.json<span class="w"> </span>&lt;command&gt;<span class="w"> </span><span class="o">[</span>optional<span class="w"> </span>parameters<span class="o">]</span>
</code></pre></div><p>많은 인수를 가진 명령은 키워드 인수가 필요할 수 있으며, 다음과 같이 제공할 수 있습니다:</p><div class="highlight"><pre><code>freqtrade-client<span class="w"> </span>--config<span class="w"> </span>rest_config.json<span class="w"> </span>forceenter<span class="w"> </span>BTC/USDT<span class="w"> </span>long<span class="w"> </span><span class="nv">enter_tag</span><span class="o">=</span>GutFeeling
</code></pre></div><p>이 방법은 모든 인수에 대해 작동합니다. 사용 가능한 매개변수 목록은 &quot;show&quot; 명령을 확인하세요.</p><details class="note"><summary>프로그래밍 방식 사용</summary><p><code>freqtrade-client</code> 패키지(freqtrade와 독립적으로 설치 가능)를 사용하여 자신의 스크립트에서 freqtrade API와 상호 작용할 수 있습니다. 이를 위해 다음을 사용하세요:</p><div class="highlight"><pre><code><span class="kn">from</span><span class="w"> </span><span class="nn">freqtrade_client</span><span class="w"> </span><span class="kn">import</span> <span class="n">FtRestClient</span>


<span class="n">client</span> <span class="o">=</span> <span class="n">FtRestClient</span><span class="p">(</span><span class="n">server_url</span><span class="p">,</span> <span class="n">username</span><span class="p">,</span> <span class="n">password</span><span class="p">)</span>

<span class="c1"># Get the status of the bot</span>
<span class="n">ping</span> <span class="o">=</span> <span class="n">client</span><span class="o">.</span><span class="n">ping</span><span class="p">()</span>
<span class="nb">print</span><span class="p">(</span><span class="n">ping</span><span class="p">)</span>
<span class="c1"># ... </span>
</code></pre></div><p>사용 가능한 명령의 전체 목록은 아래 목록을 참조하세요.</p></details><p>가능한 명령은 <code>help</code> 명령을 사용하여 rest-client 스크립트에서 나열할 수 있습니다.</p><div class="highlight"><pre><code>freqtrade-client<span class="w"> </span><span class="nb">help</span>
</code></pre></div><div class="highlight"><pre><code><span class="go">Possible commands:</span>

<span class="go">available_pairs</span>
<span class="go">    Return available pair (backtest data) based on timeframe / stake_currency selection</span>

<span class="go">        :param timeframe: Only pairs with this timeframe available.</span>
<span class="go">        :param stake_currency: Only pairs that include this timeframe</span>

<span class="go">balance</span>
<span class="go">    Get the account balance.</span>

<span class="go">blacklist</span>
<span class="go">    Show the current blacklist.</span>

<span class="go">        :param add: List of coins to add (example: &quot;BNB/BTC&quot;)</span>

<span class="go">cancel_open_order</span>
<span class="go">    Cancel open order for trade.</span>

<span class="go">        :param trade_id: Cancels open orders for this trade.</span>

<span class="go">count</span>
<span class="go">    Return the amount of open trades.</span>

<span class="go">daily</span>
<span class="go">    Return the profits for each day, and amount of trades.</span>

<span class="go">delete_lock</span>
<span class="go">    Delete (disable) lock from the database.</span>

<span class="go">        :param lock_id: ID for the lock to delete</span>

<span class="go">delete_trade</span>
<span class="go">    Delete trade from the database.</span>
<span class="go">        Tries to close open orders. Requires manual handling of this asset on the exchange.</span>

<span class="go">        :param trade_id: Deletes the trade with this ID from the database.</span>

<span class="go">edge</span>
<span class="go">    Return information about edge.</span>

<span class="go">forcebuy</span>
<span class="go">    Buy an asset.</span>

<span class="go">        :param pair: Pair to buy (ETH/BTC)</span>
<span class="go">        :param price: Optional - price to buy</span>

<span class="go">forceenter</span>
<span class="go">    Force entering a trade</span>

<span class="go">        :param pair: Pair to buy (ETH/BTC)</span>
<span class="go">        :param side: &#39;long&#39; or &#39;short&#39;</span>
<span class="go">        :param price: Optional - price to buy</span>

<span class="go">forceexit</span>
<span class="go">    Force-exit a trade.</span>

<span class="go">        :param tradeid: Id of the trade (can be received via status command)</span>
<span class="go">        :param ordertype: Order type to use (must be market or limit)</span>
<span class="go">        :param amount: Amount to sell. Full sell if not given</span>

<span class="go">health</span>
<span class="go">    Provides a quick health check of the running bot.</span>

<span class="go">lock_add</span>
<span class="go">    Manually lock a specific pair</span>

<span class="go">        :param pair: Pair to lock</span>
<span class="go">        :param until: Lock until this date (format &quot;2024-03-30 16:00:00Z&quot;)</span>
<span class="go">        :param side: Side to lock (long, short, *)</span>
<span class="go">        :param reason: Reason for the lock        </span>

<span class="go">locks</span>
<span class="go">    Return current locks</span>

<span class="go">logs</span>
<span class="go">    Show latest logs.</span>

<span class="go">        :param limit: Limits log messages to the last &lt;limit&gt; logs. No limit to get the entire log.</span>

<span class="go">pair_candles</span>
<span class="go">    Return live dataframe for &lt;pair&gt;&lt;timeframe&gt;.</span>

<span class="go">        :param pair: Pair to get data for</span>
<span class="go">        :param timeframe: Only pairs with this timeframe available.</span>
<span class="go">        :param limit: Limit result to the last n candles.</span>

<span class="go">pair_history</span>
<span class="go">    Return historic, analyzed dataframe</span>

<span class="go">        :param pair: Pair to get data for</span>
<span class="go">        :param timeframe: Only pairs with this timeframe available.</span>
<span class="go">        :param strategy: Strategy to analyze and get values for</span>
<span class="go">        :param timerange: Timerange to get data for (same format than --timerange endpoints)</span>

<span class="go">performance</span>
<span class="go">    Return the performance of the different coins.</span>

<span class="go">ping</span>
<span class="go">    simple ping</span>

<span class="go">plot_config</span>
<span class="go">    Return plot configuration if the strategy defines one.</span>

<span class="go">profit</span>
<span class="go">    Return the profit summary.</span>

<span class="go">reload_config</span>
<span class="go">    Reload configuration.</span>

<span class="go">show_config</span>
<span class="go">        Returns part of the configuration, relevant for trading operations.</span>

<span class="go">start</span>
<span class="go">    Start the bot if it&#39;s in the stopped state.</span>

<span class="go">stats</span>
<span class="go">    Return the stats report (durations, sell-reasons).</span>

<span class="go">status</span>
<span class="go">    Get the status of open trades.</span>

<span class="go">stop</span>
<span class="go">    Stop the bot. Use \`start\` to restart.</span>

<span class="go">stopbuy</span>
<span class="go">    Stop buying (but handle sells gracefully). Use \`reload_config\` to reset.</span>

<span class="go">strategies</span>
<span class="go">    Lists available strategies</span>

<span class="go">strategy</span>
<span class="go">    Get strategy details</span>

<span class="go">        :param strategy: Strategy class name</span>

<span class="go">sysinfo</span>
<span class="go">    Provides system information (CPU, RAM usage)</span>

<span class="go">trade</span>
<span class="go">    Return specific trade</span>

<span class="go">        :param trade_id: Specify which trade to get.</span>

<span class="go">trades</span>
<span class="go">    Return trades history, sorted by id</span>

<span class="go">        :param limit: Limits trades to the X last trades. Max 500 trades.</span>
<span class="go">        :param offset: Offset by this amount of trades.</span>

<span class="go">version</span>
<span class="go">    Return the version of the bot.</span>

<span class="go">whitelist</span>
<span class="go">    Show the current whitelist.</span>
</code></pre></div><h3 id="available-endpoints"> 사용 가능한 엔드포인트 <a class="headerlink" href="#available-endpoints" title="영구 링크"> ¶ </a></h3><p>다른 경로를 통해 REST API를 수동으로 호출하려는 경우, 예를 들어 <code>curl</code>을 직접 사용하여 아래 표는 관련 URL 엔드포인트와 매개변수를 보여줍니다. 아래 표의 모든 엔드포인트는 API의 기본 URL로 접두어가 필요합니다. 예를 들어 <code>http://127.0.0.1:8080/api/v1/</code>와 같이, 명령은 <code>http://127.0.0.1:8080/api/v1/&lt;command&gt;</code>가 됩니다.</p><table><thead><tr><th>엔드포인트</th><th>메서드</th><th>설명 / 매개변수</th></tr></thead><tbody><tr><td><code> /ping </code></td><td>GET</td><td>API 준비 상태를 테스트하는 간단한 명령 - 인증이 필요하지 않습니다.</td></tr><tr><td><code> /start </code></td><td>POST</td><td>트레이더를 시작합니다.</td></tr><tr><td><code> /stop </code></td><td>POST</td><td>트레이더를 중지합니다.</td></tr><tr><td><code> /stopbuy </code></td><td>POST</td><td>트레이더가 새로운 거래를 여는 것을 중지합니다. 열린 거래는 규칙에 따라 정상적으로 종료됩니다.</td></tr><tr><td><code> /reload_config </code></td><td>POST</td><td>구성 파일을 다시 로드합니다.</td></tr><tr><td><code> /trades </code></td><td>GET</td><td>마지막 거래를 나열합니다. 호출당 최대 500개의 거래로 제한됩니다.</td></tr><tr><td><code> /trade/&lt;tradeid&gt; </code></td><td>GET</td><td> 특정 거래를 가져옵니다. <br><em> 매개변수: </em><br> - <code> tradeid </code> ( <code> int </code> ) </td></tr><tr><td><code> /trades/&lt;tradeid&gt; </code></td><td>DELETE</td><td> 데이터베이스에서 거래를 제거합니다. 열린 주문을 닫으려고 시도합니다. 이 거래는 거래소에서 수동으로 처리해야 합니다. <br><em> 매개변수: </em><br> - <code> tradeid </code> ( <code> int </code> ) </td></tr><tr><td><code> /trades/&lt;tradeid&gt;/open-order </code></td><td>DELETE</td><td> 이 거래의 열린 주문을 취소합니다. <br><em> 매개변수: </em><br> - <code> tradeid </code> ( <code> int </code> ) </td></tr><tr><td><code> /trades/&lt;tradeid&gt;/reload </code></td><td>POST</td><td> 거래소에서 거래를 다시 로드합니다. 라이브에서만 작동하며, 거래소에서 수동으로 판매된 거래를 복구하는 데 도움이 될 수 있습니다. <br><em> 매개변수: </em><br> - <code> tradeid </code> ( <code> int </code> ) </td></tr><tr><td><code> /show_config </code></td><td>GET</td><td>운영에 관련된 현재 구성의 일부를 보여줍니다.</td></tr><tr><td><code> /logs </code></td><td>GET</td><td>마지막 로그 메시지를 보여줍니다.</td></tr><tr><td><code> /status </code></td><td>GET</td><td>모든 열린 거래를 나열합니다.</td></tr><tr><td><code> /count </code></td><td>GET</td><td>사용된 거래 수와 사용 가능한 거래 수를 표시합니다.</td></tr><tr><td><code> /entries </code></td><td>GET</td><td> 지정된 페어(또는 페어가 지정되지 않은 경우 모든 페어)에 대한 각 진입 태그의 이익 통계를 보여줍니다. 페어는 선택 사항입니다. <br><em> 매개변수: </em><br> - <code> pair </code> ( <code> str </code> ) </td></tr><tr><td><code> /exits </code></td><td>GET</td><td> 지정된 페어(또는 페어가 지정되지 않은 경우 모든 페어)에 대한 각 종료 이유의 이익 통계를 보여줍니다. 페어는 선택 사항입니다. <br><em> 매개변수: </em><br> - <code> pair </code> ( <code> str </code> ) </td></tr><tr><td><code> /mix_tags </code></td><td>GET</td><td> 지정된 페어(또는 페어가 지정되지 않은 경우 모든 페어)에 대한 진입 태그 + 종료 이유의 조합에 대한 이익 통계를 보여줍니다. 페어는 선택 사항입니다. <br><em> 매개변수: </em><br> - <code> pair </code> ( <code> str </code> ) </td></tr><tr><td><code> /locks </code></td><td>GET</td><td>현재 잠긴 페어를 표시합니다.</td></tr><tr><td><code> /locks </code></td><td>POST</td><td> &quot;until&quot;까지 페어를 잠급니다. (Until은 가장 가까운 시간 프레임으로 반올림됩니다). Side는 선택 사항이며 <code>long</code> 또는 <code>short</code>입니다(기본값은 <code>long</code>). Reason은 선택 사항입니다. <br><em> 매개변수: </em><br> - <code> &lt;pair&gt; </code> ( <code> str </code> ) <br> - <code> &lt;until&gt; </code> ( <code> datetime </code> ) <br> - <code> [side] </code> ( <code> str </code> ) <br> - <code> [reason] </code> ( <code> str </code> ) </td></tr><tr><td><code> /locks/&lt;lockid&gt; </code></td><td>DELETE</td><td> ID로 잠금을 삭제(비활성화)합니다. <br><em> 매개변수: </em><br> - <code> lockid </code> ( <code> int </code> ) </td></tr><tr><td><code> /profit </code></td><td>GET</td><td>닫힌 거래에서의 이익/손실 요약과 성과에 대한 통계를 표시합니다.</td></tr><tr><td><code> /forceexit </code></td><td>POST</td><td> 지정된 거래를 즉시 종료합니다(<code>minimum_roi</code>를 무시). 지정된 주문 유형(&quot;market&quot; 또는 &quot;limit&quot;, 지정되지 않은 경우 구성 설정 사용)과 선택한 금액(지정되지 않은 경우 전체 판매)을 사용합니다. <code>all</code>이 <code>tradeid</code>로 제공되면 현재 열린 모든 거래가 강제로 종료됩니다. <br><em> 매개변수: </em><br> - <code> &lt;tradeid&gt; </code> ( <code> int </code> 또는 <code> str </code> ) <br> - <code> &lt;ordertype&gt; </code> ( <code> str </code> ) <br> - <code> [amount] </code> ( <code> float </code> ) </td></tr><tr><td><code> /forceenter </code></td><td>POST</td><td> 지정된 페어에 즉시 진입합니다. Side는 선택 사항이며 <code>long</code> 또는 <code>short</code>입니다(기본값은 <code>long</code>). Rate는 선택 사항입니다. (<code>force_entry_enable</code>이 True로 설정되어야 함) <br><em> 매개변수: </em><br> - <code> &lt;pair&gt; </code> ( <code> str </code> ) <br> - <code> &lt;side&gt; </code> ( <code> str </code> ) <br> - <code> [rate] </code> ( <code> float </code> ) </td></tr><tr><td><code> /performance </code></td><td>GET</td><td>페어별로 완료된 거래의 성과를 보여줍니다.</td></tr><tr><td><code> /balance </code></td><td>GET</td><td>통화별 계정 잔액을 보여줍니다.</td></tr><tr><td><code> /daily </code></td><td>GET</td><td> 마지막 n일 동안의 일별 이익 또는 손실을 보여줍니다(n 기본값은 7). <br><em> 매개변수: </em><br> - <code> &lt;n&gt; </code> ( <code> int </code> ) </td></tr><tr><td><code> /weekly </code></td><td>GET</td><td> 마지막 n일 동안의 주별 이익 또는 손실을 보여줍니다(n 기본값은 4). <br><em> 매개변수: </em><br> - <code> &lt;n&gt; </code> ( <code> int </code> ) </td></tr><tr><td><code> /monthly </code></td><td>GET</td><td> 마지막 n일 동안의 월별 이익 또는 손실을 보여줍니다(n 기본값은 3). <br><em> 매개변수: </em><br> - <code> &lt;n&gt; </code> ( <code> int </code> ) </td></tr><tr><td><code> /stats </code></td><td>GET</td><td>이익/손실 이유와 평균 보유 시간을 요약하여 표시합니다.</td></tr><tr><td><code> /whitelist </code></td><td>GET</td><td>현재 화이트리스트를 보여줍니다.</td></tr><tr><td><code> /blacklist </code></td><td>GET</td><td>현재 블랙리스트를 보여줍니다.</td></tr><tr><td><code> /blacklist </code></td><td>POST</td><td> 지정된 페어를 블랙리스트에 추가합니다. <br><em> 매개변수: </em><br> - <code> pair </code> ( <code> str </code> ) </td></tr><tr><td><code> /blacklist </code></td><td>DELETE</td><td> 지정된 페어 목록을 블랙리스트에서 삭제합니다. <br><em> 매개변수: </em><br> - <code> [pair,pair] </code> ( <code> list[str] </code> ) </td></tr><tr><td><code> /edge </code></td><td>GET</td><td>Edge가 활성화된 경우 유효한 페어를 보여줍니다.</td></tr><tr><td><code> /pair_candles </code></td><td>GET</td><td> 봇이 실행 중일 때 페어/시간 프레임 조합에 대한 데이터 프레임을 반환합니다. <strong> 알파 </strong></td></tr><tr><td><code> /pair_candles </code></td><td>POST</td><td> 봇이 실행 중일 때 제공된 열 목록으로 필터링된 페어/시간 프레임 조합에 대한 데이터 프레임을 반환합니다. <strong> 알파 </strong><br><em> 매개변수: </em><br> - <code> &lt;column_list&gt; </code> ( <code> list[str] </code> ) ) </td></tr><tr><td><code> /pair_history </code></td><td>GET</td><td> 지정된 시간 범위에 대한 분석된 데이터 프레임을 반환합니다. <strong> 알파 </strong></td></tr><tr><td><code> /pair_history </code></td><td>POST</td><td> 지정된 시간 범위에 대한 분석된 데이터 프레임을 반환합니다. 제공된 열 목록으로 필터링된 전략에 의해 분석됩니다. <strong> 알파 </strong><br><em> 매개변수: </em><br> - <code> &lt;column_list&gt; </code> ( <code> list[str] </code> ) </td></tr><tr><td><code> /plot_config </code></td><td>GET</td><td> 전략에서 플롯 구성을 가져옵니다(구성되지 않은 경우 없음). <strong> 알파 </strong></td></tr><tr><td><code> /strategies </code></td><td>GET</td><td> 전략 디렉토리의 전략을 나열합니다. <strong> 알파 </strong></td></tr><tr><td><code> /strategy/&lt;strategy&gt; </code></td><td>GET</td><td> 전략 클래스 이름으로 특정 전략 내용을 가져옵니다. <strong> 알파 </strong><br><em> 매개변수: </em><br> - <code> &lt;strategy&gt; </code> ( <code> str </code> ) </td></tr><tr><td><code> /available_pairs </code></td><td>GET</td><td> 사용 가능한 백테스트 데이터를 나열합니다. <strong> 알파 </strong></td></tr><tr><td><code> /version </code></td><td>GET</td><td>버전을 표시합니다.</td></tr><tr><td><code> /sysinfo </code></td><td>GET</td><td>시스템 부하에 대한 정보를 표시합니다.</td></tr><tr><td><code> /health </code></td><td>GET</td><td>봇 상태(마지막 봇 루프)를 표시합니다.</td></tr></tbody></table><div class="admonition warning"><p class="admonition-title">알파 상태</p><p>위에 <em>알파 상태</em>로 표시된 엔드포인트는 예고 없이 언제든지 변경될 수 있습니다.</p></div><h3 id="message-websocket"> 메시지 WebSocket <a class="headerlink" href="#message-websocket" title="영구 링크"> ¶ </a></h3><p>API 서버에는 freqtrade 봇의 RPC 메시지 구독을 위한 websocket 엔드포인트가 포함되어 있습니다. 이를 사용하여 진입/종료 채우기 메시지, 화이트리스트 변경, 페어에 대한 채워진 지표 등과 같은 봇의 실시간 데이터를 소비할 수 있습니다.</p><p>이것은 또한 Freqtrade에서 <a href="producer-consumer.html">Producer/Consumer 모드</a>를 설정하는 데 사용됩니다.</p><p>REST API가 <code>127.0.0.1</code>에 포트 <code>8080</code>으로 설정되어 있다고 가정하면, 엔드포인트는 <code>http://localhost:8080/api/v1/message/ws</code>에서 사용할 수 있습니다.</p><p>WebSocket 엔드포인트에 액세스하려면 엔드포인트 URL의 쿼리 매개변수로 <code>ws_token</code>이 필요합니다.</p><p>안전한 <code>ws_token</code>을 생성하려면 다음 코드를 실행할 수 있습니다:</p><div class="highlight"><pre><code><span class="o">&gt;&gt;&gt;</span> <span class="kn">import</span><span class="w"> </span><span class="nn">secrets</span>
<span class="o">&gt;&gt;&gt;</span> <span class="n">secrets</span><span class="o">.</span><span class="n">token_urlsafe</span><span class="p">(</span><span class="mi">25</span><span class="p">)</span>
<span class="s1">&#39;hZ-y58LXyX_HZ8O1cJzVyN6ePWrLpNQv4Q&#39;</span>
</code></pre></div><p>그런 다음 해당 토큰을 <code>api_server</code> 구성의 <code>ws_token</code>에 추가합니다. 다음과 같이:</p><div class="highlight"><pre><code><span class="nt">&quot;api_server&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nt">&quot;enabled&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;listen_ip_address&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;127.0.0.1&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;listen_port&quot;</span><span class="p">:</span><span class="w"> </span><span class="mi">8080</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;verbosity&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;error&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;enable_openapi&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">false</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;jwt_secret_key&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;somethingrandom&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;CORS_origins&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">[],</span>
<span class="w">    </span><span class="nt">&quot;username&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;Freqtrader&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;password&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;SuperSecret1!&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;ws_token&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;hZ-y58LXyX_HZ8O1cJzVyN6ePWrLpNQv4Q&quot;</span><span class="w"> </span><span class="c1">// &lt;-----</span>
<span class="p">},</span>
</code></pre></div><p>이제 <code>http://localhost:8080/api/v1/message/ws?token=hZ-y58LXyX_HZ8O1cJzVyN6ePWrLpNQv4Q</code>에서 엔드포인트에 연결할 수 있습니다.</p><div class="admonition danger"><p class="admonition-title">예제 토큰 재사용</p><p>위의 예제 토큰을 사용하지 마세요. 보안을 위해 완전히 새로운 토큰을 생성하세요.</p></div><h4 id="using-the-websocket"> WebSocket 사용 <a class="headerlink" href="#using-the-websocket" title="영구 링크"> ¶ </a></h4><p>WebSocket에 연결되면 봇은 구독된 모든 사람에게 RPC 메시지를 브로드캐스트합니다. 메시지 목록에 구독하려면 아래와 같은 JSON 요청을 WebSocket을 통해 보내야 합니다. <code>data</code> 키는 메시지 유형 문자열 목록이어야 합니다.</p><div class="highlight"><pre><code><span class="p">{</span>
<span class="w">  </span><span class="nt">&quot;type&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;subscribe&quot;</span><span class="p">,</span>
<span class="w">  </span><span class="nt">&quot;data&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="s2">&quot;whitelist&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;analyzed_df&quot;</span><span class="p">]</span><span class="w"> </span><span class="c1">// A list of string message types</span>
<span class="p">}</span>
</code></pre></div><p>메시지 유형 목록은 <code>freqtrade/enums/rpcmessagetype.py</code>의 RPCMessageType 열거형을 참조하세요.</p><p>이제 이러한 유형의 RPC 메시지가 봇에서 전송될 때마다 연결이 활성 상태인 한 WebSocket을 통해 수신하게 됩니다. 일반적으로 요청과 같은 형식을 취합니다:</p><div class="highlight"><pre><code><span class="p">{</span>
<span class="w">  </span><span class="nt">&quot;type&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;analyzed_df&quot;</span><span class="p">,</span>
<span class="w">  </span><span class="nt">&quot;data&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="nt">&quot;key&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="s2">&quot;NEO/BTC&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;5m&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;spot&quot;</span><span class="p">],</span>
<span class="w">      </span><span class="nt">&quot;df&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{},</span><span class="w"> </span><span class="c1">// The dataframe</span>
<span class="w">      </span><span class="nt">&quot;la&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;2022-09-08 22:14:41.457786+00:00&quot;</span>
<span class="w">  </span><span class="p">}</span>
<span class="p">}</span>
</code></pre></div><h4 id="reverse-proxy-setup"> 리버스 프록시 설정 <a class="headerlink" href="#reverse-proxy-setup" title="영구 링크"> ¶ </a></h4><p><a href="https://nginx.org/en/docs/">Nginx</a>를 사용할 때 WebSocket이 작동하려면 다음 구성이 필요합니다(이 구성은 불완전하며, 일부 정보가 누락되어 있어 그대로 사용할 수 없습니다):</p><p><code>&lt;freqtrade_listen_ip&gt;</code>(및 후속 포트)를 구성/설정에 맞는 IP 및 포트로 바꾸세요.</p><div class="highlight"><pre><code>http {
    map $http_upgrade $connection_upgrade {
        default upgrade;
        &#39;&#39; close;
    }

    #...

    server {
        #...

        location / {
            proxy_http_version 1.1;
            proxy_pass http://&lt;freqtrade_listen_ip&gt;:8080;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection $connection_upgrade;
            proxy_set_header Host $host;
        }
    }
}
</code></pre></div><p>리버스 프록시를 올바르게(안전하게) 구성하려면 웹소켓 프록시 설정에 대한 문서를 참조하세요.</p><ul><li><strong>Traefik</strong>: Traefik은 웹소켓을 기본적으로 지원합니다. <a href="https://doc.traefik.io/traefik/">문서</a>를 참조하세요.</li><li><strong>Caddy</strong>: Caddy v2는 웹소켓을 기본적으로 지원합니다. <a href="https://caddyserver.com/docs/v2-upgrade#proxy">문서</a>를 참조하세요.</li></ul><div class="admonition tip"><p class="admonition-title">SSL 인증서</p><p>certbot과 같은 도구를 사용하여 위의 리버스 프록시를 사용하여 암호화된 연결을 통해 봇의 UI에 액세스할 수 있는 SSL 인증서를 설정할 수 있습니다. 이는 전송 중 데이터를 보호하지만, freqtrade API를 개인 네트워크(VPN, SSH 터널) 외부에서 실행하는 것은 권장하지 않습니다.</p></div><h3 id="openapi-interface"> OpenAPI 인터페이스 <a class="headerlink" href="#openapi-interface" title="영구 링크"> ¶ </a></h3><p>내장된 openAPI 인터페이스(Swagger UI)를 활성화하려면 api_server 구성에서 <code>&quot;enable_openapi&quot;: true</code>를 지정하세요. 이렇게 하면 <code>/docs</code> 엔드포인트에서 Swagger UI가 활성화됩니다. 기본적으로 <a href="http://localhost:8080/docs">http://localhost:8080/docs</a>에서 실행되지만, 설정에 따라 다를 수 있습니다.</p><h3 id="advanced-api-usage-using-jwt-tokens"> JWT 토큰을 사용한 고급 API 사용 <a class="headerlink" href="#advanced-api-usage-using-jwt-tokens" title="영구 링크"> ¶ </a></h3><div class="admonition note"><p class="admonition-title">참고</p><p>아래 내용은 애플리케이션(Freqtrade REST API 클라이언트, API를 통해 정보를 가져오는 클라이언트)에서 수행해야 하며, 정기적으로 사용하기 위한 것이 아닙니다.</p></div><p>Freqtrade의 REST API는 JWT(JSON Web Tokens)도 제공합니다. 다음 명령을 사용하여 로그인하고, 결과로 얻은 access_token을 사용할 수 있습니다.</p><div class="highlight"><pre><code>&gt;<span class="w"> </span>curl<span class="w"> </span>-X<span class="w"> </span>POST<span class="w"> </span>--user<span class="w"> </span>Freqtrader<span class="w"> </span>http://localhost:8080/api/v1/token/login
<span class="o">{</span><span class="s2">&quot;access_token&quot;</span>:<span class="s2">&quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODkxMTk2ODEsIm5iZiI6MTU4OTExOTY4MSwianRpIjoiMmEwYmY0NWUtMjhmOS00YTUzLTlmNzItMmM5ZWVlYThkNzc2IiwiZXhwIjoxNTg5MTIwNTgxLCJpZGVudGl0eSI6eyJ1IjoiRnJlcXRyYWRlciJ9LCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.qt6MAXYIa-l556OM7arBvYJ0SDI9J8bIk3_glDujF5g&quot;</span>,<span class="s2">&quot;refresh_token&quot;</span>:<span class="s2">&quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODkxMTk2ODEsIm5iZiI6MTU4OTExOTY4MSwianRpIjoiZWQ1ZWI3YjAtYjMwMy00YzAyLTg2N2MtNWViMjIxNWQ2YTMxIiwiZXhwIjoxNTkxNzExNjgxLCJpZGVudGl0eSI6eyJ1IjoiRnJlcXRyYWRlciJ9LCJ0eXBlIjoicmVmcmVzaCJ9.d1AT_jYICyTAjD0fiQAr52rkRqtxCjUGEMwlNuuzgNQ&quot;</span><span class="o">}</span>

&gt;<span class="w"> </span><span class="nv">access_token</span><span class="o">=</span><span class="s2">&quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODkxMTk2ODEsIm5iZiI6MTU4OTExOTY4MSwianRpIjoiMmEwYmY0NWUtMjhmOS00YTUzLTlmNzItMmM5ZWVlYThkNzc2IiwiZXhwIjoxNTg5MTIwNTgxLCJpZGVudGl0eSI6eyJ1IjoiRnJlcXRyYWRlciJ9LCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.qt6MAXYIa-l556OM7arBvYJ0SDI9J8bIk3_glDujF5g&quot;</span>
<span class="c1"># Use access_token for authentication</span>
&gt;<span class="w"> </span>curl<span class="w"> </span>-X<span class="w"> </span>GET<span class="w"> </span>--header<span class="w"> </span><span class="s2">&quot;Authorization: Bearer </span><span class="si">\${</span><span class="nv">access_token</span><span class="si">}</span><span class="s2">&quot;</span><span class="w"> </span>http://localhost:8080/api/v1/count
</code></pre></div><p>액세스 토큰의 시간 초과가 짧기 때문에(15분) <code>token/refresh</code> 요청을 주기적으로 사용하여 새 액세스 토큰을 받아야 합니다:</p><div class="highlight"><pre><code>&gt;<span class="w"> </span>curl<span class="w"> </span>-X<span class="w"> </span>POST<span class="w"> </span>--header<span class="w"> </span><span class="s2">&quot;Authorization: Bearer </span><span class="si">\${</span><span class="nv">refresh_token</span><span class="si">}</span><span class="s2">&quot;</span>http://localhost:8080/api/v1/token/refresh
<span class="o">{</span><span class="s2">&quot;access_token&quot;</span>:<span class="s2">&quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODkxMTk5NzQsIm5iZiI6MTU4OTExOTk3NCwianRpIjoiMDBjNTlhMWUtMjBmYS00ZTk0LTliZjAtNWQwNTg2MTdiZDIyIiwiZXhwIjoxNTg5MTIwODc0LCJpZGVudGl0eSI6eyJ1IjoiRnJlcXRyYWRlciJ9LCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.1seHlII3WprjjclY6DpRhen0rqdF4j6jbvxIhUFaSbs&quot;</span><span class="o">}</span>
</code></pre></div><h2 id="cors"> CORS <a class="headerlink" href="#cors" title="영구 링크"> ¶ </a></h2><p>이 섹션은 교차 출처 사례(여러 봇 API가 <code>localhost:8081</code>, <code>localhost:8082</code> 등에서 실행되고 이를 하나의 FreqUI 인스턴스로 결합하려는 경우)에만 필요합니다.</p><details class="info"><summary>기술적 설명</summary><p>모든 웹 기반 프론트엔드는 <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">CORS</a> - 교차 출처 리소스 공유의 영향을 받습니다. 대부분의 Freqtrade API 요청은 인증이 필요하므로 적절한 CORS 정책이 보안 문제를 피하는 데 중요합니다. 또한 표준은 자격 증명이 있는 요청에 대해 <code>*</code> CORS 정책을 허용하지 않으므로 이 설정을 적절히 설정해야 합니다.</p></details><p>사용자는 <code>CORS_origins</code> 구성 설정을 통해 다른 출처 URL에서 봇 API에 대한 액세스를 허용할 수 있습니다. 이는 봇의 API에서 리소스를 소비할 수 있는 허용된 URL 목록으로 구성됩니다.</p><p>애플리케이션이 <code>https://frequi.freqtrade.io/home/</code>으로 배포된 경우, 다음과 같은 구성이 필요합니다:</p><div class="highlight"><pre><code>{
    //...
    &quot;jwt_secret_key&quot;: &quot;somethingrandom&quot;,
    &quot;CORS_origins&quot;: [&quot;https://frequi.freqtrade.io&quot;],
    //...
}
</code></pre></div>`,82)),a("p",null,[s[0]||(s[0]=p(" 다음과 같은 경우, FreqUI는 ")),s[1]||(s[1]=a("code",null,"http://localhost:8080/trade",-1)),s[2]||(s[2]=p("에서 접근 가능합니다. ")),a("img",{alt:"freqUI url",src:c(t)},null,8,l)]),s[4]||(s[4]=n(`<p>이 경우 올바른 설정은 <code>http://localhost:8080</code>입니다.</p><div class="highlight"><pre><code>{
    //...
    &quot;jwt_secret_key&quot;: &quot;somethingrandom&quot;,
    &quot;CORS_origins&quot;: [&quot;http://localhost:8080&quot;],
    //...
}
</code></pre></div><div class="admonition tip"><p class="admonition-title">슬래시</p><p>&gt;CORS_origins&lt; 구성에서 슬래시는 허용되지 않습니다(예: <code>&quot;http://localhots:8080/&quot;</code>). 이러한 구성은 효과가 없으며 CORS 오류가 계속 발생합니다.</p></div><div class="admonition note"><p class="admonition-title">참고</p><p>봇에 대한 무단 액세스를 방지하기 위해 <code>jwt_secret_key</code>를 무작위 값으로 설정하는 것을 강력히 권장합니다.</p></div>`,4))]))}};export{h as default};
