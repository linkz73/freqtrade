import{r as d,o as r,c as u,a as o,b as s,d as a,e as l,w as t,u as i}from"./index-1d9d7dc5.js";const q="/assets/telegram_forcebuy-a92978e4.png";const g={class:"md-content__inner md-typeset"},b={id:"forceexit"},f={id:"forcelong-rate-forceshort-rate"},m=["src"],w={id:"daily"},k={id:"weekly"},T={id:"monthly"},B={__name:"TelegramUsage",setup(h){return(C,n)=>{const p=d("trade_id"),c=d("pair"),e=d("n");return r(),u("article",g,[n[59]||(n[59]=o(`<h1 id="telegram-usage"> 텔레그램 사용법 <a class="headerlink" href="#telegram-usage" title="영구 링크"> ¶ </a></h1><h2 id="setup-your-telegram-bot"> 텔레그램 봇 설정 <a class="headerlink" href="#setup-your-telegram-bot" title="영구 링크"> ¶ </a></h2><p>아래는 텔레그램 봇을 생성하고 텔레그램 사용자 ID를 얻는 방법을 설명합니다.</p><h3 id="1-create-your-telegram-bot"> 1. 텔레그램 봇 생성 <a class="headerlink" href="#1-create-your-telegram-bot" title="영구 링크"> ¶ </a></h3><p><a href="https://telegram.me/BotFather"> Telegram BotFather </a> 와 채팅을 시작합니다. </p><p> 메시지를 보냅니다: <code> /newbot </code> . </p><p><em> BotFather의 응답: </em></p><blockquote><p>좋아요, 새로운 봇을 만듭니다. 봇의 이름을 정해주세요.</p></blockquote><p> 봇의 공개 이름을 선택하세요 (예: <code> Freqtrade 봇 </code> ) </p><p><em> BotFather의 응답: </em></p><blockquote><p> 좋습니다. 이제 봇의 사용자 이름을 선택하세요. 반드시 <code> bot </code> 으로 끝나야 합니다. 예: TetrisBot 또는 tetris_bot. </p></blockquote><p> 봇의 사용자 이름을 선택하고 BotFather에게 보냅니다 (예: &quot; <code> My_own_freqtrade_bot </code> &quot;) </p><p><em> BotFather의 응답: </em></p><blockquote><p> 완료! 새로운 봇을 축하합니다. 봇은 <code> t.me/yourbots_name_bot </code> 에서 찾을 수 있습니다. 이제 봇의 설명, 정보 섹션 및 프로필 사진을 추가할 수 있습니다. 명령 목록은 /help를 참조하세요. 멋진 봇을 완성한 후 더 나은 사용자 이름을 원하면 Bot Support에 문의하세요. 단, 봇이 완전히 작동한 후에만 가능합니다. </p><p> HTTP API에 액세스하려면 이 토큰을 사용하세요: <code> 22222222:APITOKEN </code></p><p> Bot API에 대한 설명은 다음 페이지를 참조하세요: <a href="https://core.telegram.org/bots/api"> https://core.telegram.org/bots/api </a> BotFather는 토큰(API 키)을 반환합니다. </p></blockquote><p> API 토큰( <code> 22222222:APITOKEN </code> 위 예제에서)을 복사하고 설정 파일의 <code> token </code> 매개변수에 사용하세요. </p><p> 봇과 대화를 시작하려면 <code> /START </code> 버튼을 클릭하는 것을 잊지 마세요. </p><h3 id="2-telegram-user_id"> 2. 텔레그램 사용자 ID <a class="headerlink" href="#2-telegram-user_id" title="영구 링크"> ¶ </a></h3><h4 id="get-your-user-id"> 사용자 ID 얻기 <a class="headerlink" href="#get-your-user-id" title="영구 링크"> ¶ </a></h4><p><a href="https://telegram.me/userinfobot"> userinfobot </a> 과 대화하세요. </p><p> &quot;Id&quot;를 얻고 설정 파일의 <code> chat_id </code> 매개변수에 사용하세요. </p><h4 id="use-group-id"> 그룹 ID 사용 <a class="headerlink" href="#use-group-id" title="영구 링크"> ¶ </a></h4><p> 그룹 ID를 얻으려면 봇을 그룹에 추가하고 freqtrade를 시작한 후 <code> /tg_info </code> 명령을 실행하세요. 이 명령은 그룹 ID를 반환하며, 임의의 봇을 사용할 필요가 없습니다. &quot;chat_id&quot;는 여전히 필요하지만, 이 특정 그룹 ID로 설정할 필요는 없습니다. </p><p>응답에는 필요한 경우 &quot;topic_id&quot;도 포함되며, 구성에 복사/붙여넣기 할 수 있는 형식으로 제공됩니다.</p><div class="highlight"><pre><code><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nt">&quot;enabled&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;token&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;********&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;chat_id&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;-1001332619709&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;topic_id&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;122&quot;</span>
<span class="p">}</span>
</code></pre></div><p> Freqtrade 구성에서는 전체 값(포함 <code> - </code> )을 문자열로 사용할 수 있습니다: </p><div class="highlight"><pre><code><span class="w">   </span><span class="nt">&quot;chat_id&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;-1001332619709&quot;</span>
</code></pre></div><div class="admonition warning"><p class="admonition-title">텔레그램 그룹 사용</p><p>텔레그램 그룹을 사용할 때, 텔레그램 그룹의 모든 멤버가 freqtrade 봇과 텔레그램을 통해 가능한 모든 명령에 액세스할 수 있습니다. 불쾌한 놀라움을 피하기 위해 텔레그램 그룹의 모든 사람을 신뢰할 수 있는지 확인하세요.</p></div><h5 id="group-topic-id"> 그룹 주제 ID <a class="headerlink" href="#group-topic-id" title="영구 링크"> ¶ </a></h5><p> 그룹의 특정 주제를 사용하려면 구성에서 <code> topic_id </code> 매개변수를 사용할 수 있습니다. 이를 통해 그룹의 특정 주제에서 봇을 사용할 수 있습니다. <br> 이 매개변수가 없으면, 그룹 채팅에서 주제가 활성화된 경우 봇은 항상 일반 채널에 응답합니다. </p><div class="highlight"><pre><code><span class="w">   </span><span class="nt">&quot;chat_id&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;-1001332619709&quot;</span><span class="p">,</span>
<span class="w">   </span><span class="nt">&quot;topic_id&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;3&quot;</span>
</code></pre></div><p> 그룹 ID와 유사하게, 주제/스레드에서 <code> /tg_info </code> 를 사용하여 올바른 주제 ID를 얻을 수 있습니다. </p><h2 id="control-telegram-noise"> 텔레그램 소음 제어 <a class="headerlink" href="#control-telegram-noise" title="영구 링크"> ¶ </a></h2><p>Freqtrade는 텔레그램 봇의 자세한 정보를 제어할 수 있는 수단을 제공합니다. 각 설정에는 다음과 같은 값이 있습니다:</p><ul><li><code> on </code> - 메시지가 전송되고 사용자가 알림을 받습니다. </li><li><code> silent </code> - 메시지가 전송되지만 알림은 소리/진동 없이 이루어집니다. </li><li><code> off </code> - 메시지 유형을 전송하지 않습니다. </li></ul><p>다양한 설정을 보여주는 예제 구성:</p><div class="highlight"><pre><code><span class="nt">&quot;telegram&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nt">&quot;enabled&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;token&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_telegram_token&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;chat_id&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_telegram_chat_id&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;allow_custom_messages&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;notification_settings&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">        </span><span class="nt">&quot;status&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;silent&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;warning&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;on&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;startup&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;off&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;entry&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;silent&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;entry_fill&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;on&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;entry_cancel&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;silent&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;exit&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">            </span><span class="nt">&quot;roi&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;silent&quot;</span><span class="p">,</span>
<span class="w">            </span><span class="nt">&quot;emergency_exit&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;on&quot;</span><span class="p">,</span>
<span class="w">            </span><span class="nt">&quot;force_exit&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;on&quot;</span><span class="p">,</span>
<span class="w">            </span><span class="nt">&quot;exit_signal&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;silent&quot;</span><span class="p">,</span>
<span class="w">            </span><span class="nt">&quot;trailing_stop_loss&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;on&quot;</span><span class="p">,</span>
<span class="w">            </span><span class="nt">&quot;stop_loss&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;on&quot;</span><span class="p">,</span>
<span class="w">            </span><span class="nt">&quot;stoploss_on_exchange&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;on&quot;</span><span class="p">,</span>
<span class="w">            </span><span class="nt">&quot;custom_exit&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;silent&quot;</span><span class="p">,</span><span class="w">  </span><span class="c1">// custom_exit without specifying an exit reason</span>
<span class="w">            </span><span class="nt">&quot;partial_exit&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;on&quot;</span><span class="p">,</span>
<span class="w">            </span><span class="c1">// &quot;custom_exit_message&quot;: &quot;silent&quot;,  // Disable individual custom exit reasons</span>
<span class="w">            </span><span class="nt">&quot;*&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;off&quot;</span><span class="w">  </span><span class="c1">// Disable all other exit reasons</span>
<span class="w">        </span><span class="p">},</span>
<span class="w">        </span><span class="c1">// &quot;exit&quot;: &quot;off&quot;,  // Simplistic configuration to disable all exit messages</span>
<span class="w">        </span><span class="nt">&quot;exit_cancel&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;on&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;exit_fill&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;off&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;protection_trigger&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;off&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;protection_trigger_global&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;on&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;strategy_msg&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;off&quot;</span><span class="p">,</span>
<span class="w">        </span><span class="nt">&quot;show_candle&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;off&quot;</span>
<span class="w">    </span><span class="p">},</span>
<span class="w">    </span><span class="nt">&quot;reload&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;balance_dust_level&quot;</span><span class="p">:</span><span class="w"> </span><span class="mf">0.01</span>
<span class="p">},</span>
</code></pre></div><ul><li><code> entry </code> 알림은 주문이 접수될 때 전송되며, <code> entry_fill </code> 알림은 주문이 거래소에서 체결될 때 전송됩니다. </li><li><code> exit </code> 알림은 주문이 접수될 때 전송되며, <code> exit_fill </code> 알림은 주문이 거래소에서 체결될 때 전송됩니다. <br> 종료 메시지( <code> exit </code> 및 <code> exit_fill </code> )는 개별 종료 이유 수준에서 추가로 제어할 수 있으며, 특정 종료 이유를 키로 사용합니다. 모든 종료 이유의 기본값은 <code> on </code> 이지만, 명시적으로 정의되지 않은 모든 종료 이유에 대해 와일드카드로 작동하는 특수 <code> * </code> 키를 통해 구성할 수 있습니다. </li><li><code> *_fill </code> 알림은 기본적으로 꺼져 있으며 명시적으로 활성화해야 합니다. </li><li><code> protection_trigger </code> 알림은 보호 기능이 트리거될 때 전송되며, <code> protection_trigger_global </code> 알림은 글로벌 보호 기능이 트리거될 때 전송됩니다. </li><li><code> strategy_msg </code> - 전략에서 보낸 알림을 수신합니다. <code> self.dp.send_msg() </code> 를 통해 전략에서 보낸 알림을 수신합니다. <a href="strategy-customization.html"> 자세한 내용 </a> . </li><li><code> show_candle </code> - 진입/종료 메시지의 일부로 캔들 값을 표시합니다. 가능한 값은 <code> &quot;ohlc&quot; </code> 또는 <code> &quot;off&quot; </code> 입니다. </li><li><code> balance_dust_level </code> 은 <code> /balance </code> 명령이 &quot;먼지&quot;로 간주하는 값을 정의합니다. 이 값보다 낮은 잔액을 가진 통화가 표시됩니다. </li><li><code> allow_custom_messages </code> 는 전략 메시지를 완전히 비활성화합니다. </li><li><code> reload </code> 는 선택한 메시지에서 다시 로드 버튼을 비활성화할 수 있습니다. </li></ul><h2 id="create-a-custom-keyboard-command-shortcut-buttons"> 사용자 정의 키보드(명령 단축 버튼) 생성 <a class="headerlink" href="#create-a-custom-keyboard-command-shortcut-buttons" title="영구 링크"> ¶ </a></h2><p>텔레그램은 명령에 대한 버튼이 있는 사용자 정의 키보드를 생성할 수 있습니다. 기본 사용자 정의 키보드는 다음과 같습니다.</p><div class="highlight"><pre><code><span class="p">[</span>
    <span class="p">[</span><span class="s2">&quot;/daily&quot;</span><span class="p">,</span> <span class="s2">&quot;/profit&quot;</span><span class="p">,</span> <span class="s2">&quot;/balance&quot;</span><span class="p">],</span> <span class="c1"># row 1, 3 commands</span>
    <span class="p">[</span><span class="s2">&quot;/status&quot;</span><span class="p">,</span> <span class="s2">&quot;/status table&quot;</span><span class="p">,</span> <span class="s2">&quot;/performance&quot;</span><span class="p">],</span> <span class="c1"># row 2, 3 commands</span>
    <span class="p">[</span><span class="s2">&quot;/count&quot;</span><span class="p">,</span> <span class="s2">&quot;/start&quot;</span><span class="p">,</span> <span class="s2">&quot;/stop&quot;</span><span class="p">,</span> <span class="s2">&quot;/help&quot;</span><span class="p">]</span> <span class="c1"># row 3, 4 commands</span>
<span class="p">]</span>
</code></pre></div><h3 id="usage"> 사용법 <a class="headerlink" href="#usage" title="영구 링크"> ¶ </a></h3><p><code> config.json </code> 에서 사용자 정의 키보드를 생성할 수 있습니다: </p><div class="highlight"><pre><code><span class="nt">&quot;telegram&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="nt">&quot;enabled&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span>
<span class="w">      </span><span class="nt">&quot;token&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_telegram_token&quot;</span><span class="p">,</span>
<span class="w">      </span><span class="nt">&quot;chat_id&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;your_telegram_chat_id&quot;</span><span class="p">,</span>
<span class="w">      </span><span class="nt">&quot;keyboard&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">          </span><span class="p">[</span><span class="s2">&quot;/daily&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;/stats&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;/balance&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;/profit&quot;</span><span class="p">],</span>
<span class="w">          </span><span class="p">[</span><span class="s2">&quot;/status table&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;/performance&quot;</span><span class="p">],</span>
<span class="w">          </span><span class="p">[</span><span class="s2">&quot;/reload_config&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;/count&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;/logs&quot;</span><span class="p">]</span>
<span class="w">      </span><span class="p">]</span>
<span class="w">   </span><span class="p">},</span>
</code></pre></div><div class="admonition note"><p class="admonition-title">지원되는 명령</p><p>다음 명령만 허용됩니다. 명령 인수는 지원되지 않습니다!</p><p><code> /start </code> , <code> /stop </code> , <code> /status </code> , <code> /status table </code> , <code> /trades </code> , <code> /profit </code> , <code> /performance </code> , <code> /daily </code> , <code> /stats </code> , <code> /count </code> , <code> /locks </code> , <code> /balance </code> , <code> /stopentry </code> , <code> /reload_config </code> , <code> /show_config </code> , <code> /logs </code> , <code> /whitelist </code> , <code> /blacklist </code> , <code> /edge </code> , <code> /help </code> , <code> /version </code> , <code> /marketdir </code></p></div><h2 id="telegram-commands"> 텔레그램 명령 <a class="headerlink" href="#telegram-commands" title="영구 링크"> ¶ </a></h2><p> 기본적으로 텔레그램 봇은 미리 정의된 명령을 표시합니다. 일부 명령은 봇에게 직접 보내야만 사용할 수 있습니다. 아래 표는 공식 명령을 나열합니다. 언제든지 <code> /help </code> 를 요청할 수 있습니다. </p>`,46)),s("table",null,[n[47]||(n[47]=s("thead",null,[s("tr",null,[s("th",null,"명령"),s("th",null,"설명")])],-1)),s("tbody",null,[n[6]||(n[6]=s("tr",null,[s("td",null,[s("strong",null," 시스템 명령 ")]),s("td")],-1)),n[7]||(n[7]=s("tr",null,[s("td",null,[s("code",null," /start ")]),s("td",null,"트레이더 시작")],-1)),n[8]||(n[8]=s("tr",null,[s("td",null,[s("code",null," /stop ")]),s("td",null,"트레이더 중지")],-1)),n[9]||(n[9]=s("tr",null,[s("td",null,[s("code",null," /stopbuy | /stopentry ")]),s("td",null,"새로운 거래를 여는 것을 중지합니다. 열린 거래는 규칙에 따라 정상적으로 종료됩니다.")],-1)),n[10]||(n[10]=s("tr",null,[s("td",null,[s("code",null," /reload_config ")]),s("td",null,"구성 파일 다시 로드")],-1)),n[11]||(n[11]=s("tr",null,[s("td",null,[s("code",null," /show_config ")]),s("td",null,"운영에 관련된 현재 구성의 일부를 표시합니다.")],-1)),n[12]||(n[12]=s("tr",null,[s("td",null,[s("code",null," /logs [limit] ")]),s("td",null,"마지막 로그 메시지 표시.")],-1)),n[13]||(n[13]=s("tr",null,[s("td",null,[s("code",null," /help ")]),s("td",null,"도움말 메시지 표시")],-1)),n[14]||(n[14]=s("tr",null,[s("td",null,[s("code",null," /version ")]),s("td",null,"버전 표시")],-1)),n[15]||(n[15]=s("tr",null,[s("td",null,[s("strong",null," 상태 ")]),s("td")],-1)),n[16]||(n[16]=s("tr",null,[s("td",null,[s("code",null," /status ")]),s("td",null,"모든 열린 거래 목록")],-1)),s("tr",null,[n[2]||(n[2]=s("td",null,[s("code",null," /status <trade_id> ")],-1)),s("td",null,[n[1]||(n[1]=a(" 하나 이상의 특정 거래 목록. 여러 ")),l(p,null,{default:t(()=>n[0]||(n[0]=[a(" 는 공백으로 구분합니다. ")])),_:1})])]),n[17]||(n[17]=s("tr",null,[s("td",null,[s("code",null," /status table ")]),s("td",null,[a(" 모든 열린 거래를 표 형식으로 나열합니다. 보류 중인 구매 주문은 별표( "),s("em",null," )로 표시됩니다. 보류 중인 판매 주문은 이중 별표( "),a(" *)로 표시됩니다. ")])],-1)),s("tr",null,[n[5]||(n[5]=s("td",null,[s("code",null," /order <trade_id> ")],-1)),s("td",null,[n[4]||(n[4]=a(" 하나 이상의 특정 거래의 주문을 나열합니다. 여러 ")),l(p,null,{default:t(()=>n[3]||(n[3]=[a(" 는 공백으로 구분합니다. ")])),_:1})])]),n[18]||(n[18]=s("tr",null,[s("td",null,[s("code",null," /trades [limit] ")]),s("td",null,"최근에 종료된 모든 거래를 표 형식으로 나열합니다.")],-1)),n[19]||(n[19]=s("tr",null,[s("td",null,[s("code",null," /count ")]),s("td",null,"사용된 거래 수와 사용 가능한 거래 수를 표시합니다.")],-1)),n[20]||(n[20]=s("tr",null,[s("td",null,[s("code",null," /locks ")]),s("td",null,"현재 잠긴 쌍을 표시합니다.")],-1)),n[21]||(n[21]=s("tr",null,[s("td",null,[s("code",null," /unlock <pair or lock_id> ")]),s("td",null,"이 쌍(또는 이 잠금 ID)의 잠금을 해제합니다.")],-1)),n[22]||(n[22]=s("tr",null,[s("td",null,[s("code",null," /marketdir [long | short | even | none] ")]),s("td",null,"현재 시장 방향을 나타내는 사용자 관리 변수를 업데이트합니다. 방향이 제공되지 않으면 현재 설정된 방향이 표시됩니다.")],-1)),n[23]||(n[23]=s("tr",null,[s("td",null,[s("code",null," /list_custom_data <trade_id> [key] ")]),s("td",null,"Trade ID 및 Key 조합에 대한 custom_data를 나열합니다. Key가 제공되지 않으면 해당 Trade ID에 대해 찾은 모든 키-값 쌍을 나열합니다.")],-1)),n[24]||(n[24]=s("tr",null,[s("td",null,[s("strong",null," 거래 상태 수정 ")]),s("td")],-1)),n[25]||(n[25]=s("tr",null,[s("td",null,[s("code",null," /forceexit <trade_id> | /fx <tradeid> ")]),s("td",null,[a(" 주어진 거래를 즉시 종료합니다(무시 "),s("code",null," minimum_roi "),a(" ). ")])],-1)),n[26]||(n[26]=s("tr",null,[s("td",null,[s("code",null," /forceexit all | /fx all ")]),s("td",null,[a(" 모든 열린 거래를 즉시 종료합니다(무시 "),s("code",null," minimum_roi "),a(" ). ")])],-1)),n[27]||(n[27]=s("tr",null,[s("td",null,[s("code",null," /fx ")]),s("td",null,[a(" 의 별칭 "),s("code",null," /forceexit ")])],-1)),n[28]||(n[28]=s("tr",null,[s("td",null,[s("code",null," /forcelong <pair> [rate] ")]),s("td",null,[a(" 주어진 쌍을 즉시 구매합니다. 비율은 선택 사항이며 제한 주문에만 적용됩니다. ( "),s("code",null," force_entry_enable "),a(" 이 True로 설정되어야 합니다) ")])],-1)),n[29]||(n[29]=s("tr",null,[s("td",null,[s("code",null," /forceshort <pair> [rate] ")]),s("td",null,[a(" 주어진 쌍을 즉시 공매도합니다. 비율은 선택 사항이며 제한 주문에만 적용됩니다. 이는 현물 시장에서는 작동하지 않습니다. ( "),s("code",null," force_entry_enable "),a(" 이 True로 설정되어야 합니다) ")])],-1)),n[30]||(n[30]=s("tr",null,[s("td",null,[s("code",null," /delete <trade_id> ")]),s("td",null,"데이터베이스에서 특정 거래를 삭제합니다. 열린 주문을 닫으려고 시도합니다. 이 거래를 거래소에서 수동으로 처리해야 합니다.")],-1)),n[31]||(n[31]=s("tr",null,[s("td",null,[s("code",null," /reload_trade <trade_id> ")]),s("td",null,"거래소에서 거래를 다시 로드합니다. 라이브에서만 작동하며, 거래소에서 수동으로 판매된 거래를 복구하는 데 잠재적으로 도움이 될 수 있습니다.")],-1)),n[32]||(n[32]=s("tr",null,[s("td",null,[s("code",null," /cancel_open_order <trade_id> | /coo <trade_id> ")]),s("td",null,"거래의 열린 주문을 취소합니다.")],-1)),n[33]||(n[33]=s("tr",null,[s("td",null,[s("strong",null," 메트릭 ")]),s("td")],-1)),n[34]||(n[34]=s("tr",null,[s("td",null,[s("code",null," /profit [<n>] ")]),s("td",null,"닫힌 거래에서의 수익/손실 요약과 성과에 대한 통계를 표시합니다. 지난 n일 동안(기본적으로 모든 거래)")],-1)),n[35]||(n[35]=s("tr",null,[s("td",null,[s("code",null," /performance ")]),s("td",null,"각 완료된 거래의 성과를 쌍별로 표시합니다.")],-1)),n[36]||(n[36]=s("tr",null,[s("td",null,[s("code",null," /balance ")]),s("td",null,"통화별로 봇이 관리하는 잔액을 표시합니다.")],-1)),n[37]||(n[37]=s("tr",null,[s("td",null,[s("code",null," /balance full ")]),s("td",null,"통화별로 계정 잔액을 표시합니다.")],-1)),n[38]||(n[38]=s("tr",null,[s("td",null,[s("code",null," /daily <n> ")]),s("td",null,"지난 n일 동안의 일일 수익 또는 손실을 표시합니다(n 기본값은 7).")],-1)),n[39]||(n[39]=s("tr",null,[s("td",null,[s("code",null," /weekly <n> ")]),s("td",null,"지난 n주 동안의 주간 수익 또는 손실을 표시합니다(n 기본값은 8).")],-1)),n[40]||(n[40]=s("tr",null,[s("td",null,[s("code",null," /monthly <n> ")]),s("td",null,"지난 n개월 동안의 월간 수익 또는 손실을 표시합니다(n 기본값은 6).")],-1)),n[41]||(n[41]=s("tr",null,[s("td",null,[s("code",null," /stats ")]),s("td",null,"종료 이유별 승리/패배와 구매 및 판매의 평균 보유 기간을 표시합니다.")],-1)),n[42]||(n[42]=s("tr",null,[s("td",null,[s("code",null," /exits ")]),s("td",null,"종료 이유별 승리/패배와 구매 및 판매의 평균 보유 기간을 표시합니다.")],-1)),n[43]||(n[43]=s("tr",null,[s("td",null,[s("code",null," /entries ")]),s("td",null,"종료 이유별 승리/패배와 구매 및 판매의 평균 보유 기간을 표시합니다.")],-1)),n[44]||(n[44]=s("tr",null,[s("td",null,[s("code",null," /whitelist [sorted] [baseonly] ")]),s("td",null,"현재 화이트리스트를 표시합니다. 알파벳 순서로 표시하거나 각 페어링의 기본 통화만 표시할 수 있습니다.")],-1)),n[45]||(n[45]=s("tr",null,[s("td",null,[s("code",null," /blacklist [pair] ")]),s("td",null,"현재 블랙리스트를 표시하거나 페어를 블랙리스트에 추가합니다.")],-1)),n[46]||(n[46]=s("tr",null,[s("td",null,[s("code",null," /edge ")]),s("td",null,"Edge가 활성화된 경우 Edge에 의해 검증된 페어를 표시합니다.")],-1))])]),n[60]||(n[60]=o(`<h2 id="telegram-commands-in-action"> 텔레그램 명령 실행 <a class="headerlink" href="#telegram-commands-in-action" title="영구 링크"> ¶ </a></h2><p>아래는 각 명령에 대해 텔레그램 메시지 예시입니다.</p><h3 id="start"> /start <a class="headerlink" href="#start" title="영구 링크"> ¶ </a></h3><blockquote><p><strong> 상태: </strong><code> 실행 중 </code></p></blockquote><h3 id="stop"> /stop <a class="headerlink" href="#stop" title="영구 링크"> ¶ </a></h3><blockquote><p><code> 트레이더 중지 중 ... </code><strong> 상태: </strong><code> 중지됨 </code></p></blockquote><h3 id="stopbuy"> /stopbuy <a class="headerlink" href="#stopbuy" title="영구 링크"> ¶ </a></h3><blockquote><p><strong> 상태: </strong><code> max_open_trades를 0으로 설정합니다. 재설정하려면 /reload_config를 실행하세요. </code></p></blockquote><p>봇이 새로운 거래를 여는 것을 일시적으로 중지합니다. 열린 거래는 규칙에 따라 처리됩니다(ROI / 판매 신호, 손절매 등).</p><p> 이후, 봇이 열린 거래를 종료할 시간을 줍니다( <code> /status table </code> 을 통해 확인할 수 있습니다). 모든 포지션이 판매된 후, <code> /stop </code> 을 실행하여 봇을 완전히 중지합니다. </p><p><code> /reload_config </code> 는 구성에 설정된 값으로 &quot;max_open_trades&quot;를 재설정하고 이 명령을 재설정합니다. </p><div class="admonition warning"><p class="admonition-title">경고</p><p>중지 구매 신호는 봇이 실행 중일 때만 활성화되며, 어떤 방식으로도 지속되지 않으므로 봇을 다시 시작하면 이 신호가 재설정됩니다.</p></div><h3 id="status"> /status <a class="headerlink" href="#status" title="영구 링크"> ¶ </a></h3><p>각 열린 거래에 대해 봇은 다음 메시지를 보냅니다. 입력 태그는 전략을 통해 구성할 수 있습니다.</p><blockquote><p><strong> 거래 ID: </strong><code> 123 </code><code> (1일 전부터) </code><br><strong> 현재 페어: </strong> CVC/BTC <br><strong> 방향: </strong> 롱 <br><strong> 레버리지: </strong> 1.0 <br><strong> 금액: </strong><code> 26.64180098 </code><br><strong> 입력 태그: </strong> 멋진 롱 신호 <br><strong> 오픈 가격: </strong><code> 0.00007489 </code><br><strong> 현재 가격: </strong><code> 0.00007489 </code><br><strong> 미실현 이익: </strong><code> 12.95% </code><br><strong> 손절매: </strong><code> 0.00007389 (-0.02%) </code></p></blockquote><h3 id="status-table"> /status table <a class="headerlink" href="#status-table" title="영구 링크"> ¶ </a></h3><p>모든 열린 거래의 상태를 표 형식으로 반환합니다.</p><div class="highlight"><pre><code>ID L/S    Pair     Since   Profit
----    --------  -------  --------
  67 L   SC/BTC    1 d      13.33%
 123 S   CVC/BTC   1 h      12.95%
</code></pre></div><h3 id="count"> /count <a class="headerlink" href="#count" title="영구 링크"> ¶ </a></h3><p>사용된 거래 수와 사용 가능한 거래 수를 반환합니다.</p><div class="highlight"><pre><code>current    max
---------  -----
     2     10
</code></pre></div><h3 id="profit"> /profit <a class="headerlink" href="#profit" title="영구 링크"> ¶ </a></h3><p>수익/손실 요약과 성과를 반환합니다.</p><blockquote><p><strong> ROI: </strong> 닫힌 거래 <br> ∙ <code> 0.00485701 BTC (2.2%) (15.2 Σ%) </code><br> ∙ <code> 62.968 USD </code><br><strong> ROI: </strong> 모든 거래 <br> ∙ <code> 0.00255280 BTC (1.5%) (6.43 Σ%) </code><br> ∙ <code> 33.095 EUR </code></p><p><strong> 총 거래 수: </strong><code> 138 </code><br><strong> 봇 시작: </strong><code> 2022-07-11 18:40:44 </code><br><strong> 첫 번째 거래 시작: </strong><code> 3일 전 </code><br><strong> 최신 거래 시작: </strong><code> 2분 전 </code><br><strong> 평균 기간: </strong><code> 2:33:45 </code><br><strong> 최고 성과: </strong><code> PAY/BTC: 50.23% </code><br><strong> 거래량: </strong><code> 0.5 BTC </code><br><strong> 수익률: </strong><code> 1.04 </code><br><strong> 승/패: </strong><code> 102 / 36 </code><br><strong> 승률: </strong><code> 73.91% </code><br><strong> 기대치(비율): </strong><code> 4.87 (1.66) </code><br><strong> 최대 손실: </strong><code> 9.23% (0.01255 BTC) </code></p></blockquote><p> 상대 수익률 <code> 1.2% </code> 는 거래당 평균 수익률입니다. <br> 상대 수익률 <code> 15.2 Σ% </code> 는 시작 자본을 기준으로 계산됩니다. 이 경우 시작 자본은 <code> 0.00485701 * 1.152 = 0.00738 BTC </code> 입니다. <br><strong> 시작 자본( </strong> )은 <code> available_capital </code> 설정에서 가져오거나 현재 지갑 크기 - 수익을 사용하여 계산됩니다. <br><strong> 수익률 </strong> 은 총 수익 / 총 손실로 계산되며 전략의 전반적인 메트릭으로 사용됩니다. <br><strong> 기대치 </strong> 는 위험에 처한 통화 단위당 평균 수익을 나타내며, 승률과 위험-보상 비율(승리 거래의 평균 수익과 손실 거래의 평균 손실을 비교한 것)을 나타냅니다. <br><strong> 기대치 비율 </strong> 은 과거 모든 거래의 성과를 기반으로 한 후속 거래의 예상 수익 또는 손실입니다. <br><strong> 최대 손실 </strong> 은 백테스팅 메트릭 <code> 절대 손실(계정) </code> 에 해당하며, <code> (절대 손실) / (손실 최고점 + 시작 잔액) </code> 으로 계산됩니다. <br><strong> 봇 시작 날짜 </strong> 는 봇이 처음 시작된 날짜를 나타냅니다. 오래된 봇의 경우 기본적으로 첫 번째 거래의 시작 날짜로 설정됩니다. </p>`,25)),s("h3",b,[n[49]||(n[49]=a(" /forceexit ")),l(p,null,{default:t(()=>n[48]||(n[48]=[s("a",{class:"headerlink",href:"#forceexit",title:"영구 링크"}," ¶ ",-1)])),_:1})]),n[61]||(n[61]=s("blockquote",null,[s("p",null,[s("strong",null," BINANCE: "),a(" BTC/LTC를 제한으로 종료 "),s("code",null," 0.01650000 (수익: ~-4.07%, -0.00008168) ")])],-1)),n[62]||(n[62]=s("div",{class:"admonition tip"},[s("p",{class:"admonition-title"},"팁"),s("p",null,[a(" 매개변수 없이 "),s("code",null," /forceexit "),a(" 을 호출하여 모든 열린 거래 목록을 얻을 수 있으며, 거래를 간단히 종료할 수 있는 버튼 목록이 표시됩니다. 이 명령은 "),s("code",null," /fx "),a(' 에서 별칭을 가지며, 동일한 기능을 가지고 있지만 "긴급" 상황에서 더 빠르게 입력할 수 있습니다. ')])],-1)),s("h3",f,[n[52]||(n[52]=a(" /forcelong ")),l(c,null,{default:t(()=>[n[51]||(n[51]=a(" [rate] | /forceshort ")),l(c,null,{default:t(()=>n[50]||(n[50]=[a(" [rate] "),s("a",{class:"headerlink",href:"#forcelong-rate-forceshort-rate",title:"영구 링크"}," ¶ ",-1)])),_:1})]),_:1})]),n[63]||(n[63]=o("<p><code> /forcebuy &lt;pair&gt; [rate] </code> 도 롱에 대해 지원되지만 더 이상 사용되지 않습니다. </p><blockquote><p><strong> BINANCE: </strong> 제한으로 ETH/BTC 롱 <code> 0.03400000 </code> ( <code> 1.000000 ETH </code> , <code> 225.290 USD </code> ) </p></blockquote><p> 쌍을 생략하면 현재 화이트리스트를 기반으로 거래할 쌍을 묻는 쿼리가 열립니다. <code> /forcelong </code> 을 통해 생성된 거래는 <code> force_entry </code> 의 구매 태그를 가집니다. </p>",3)),s("p",null,[s("img",{alt:"텔레그램 강제 구매 스크린샷",src:i(q)},null,8,m)]),n[64]||(n[64]=o('<p> 이 기능이 작동하려면 <code> force_entry_enable </code> 이 true로 설정되어야 합니다. </p><p><a href="configuration.html"> 자세한 내용 </a></p><h3 id="performance"> /performance <a class="headerlink" href="#performance" title="영구 링크"> ¶ </a></h3><p>봇이 판매한 각 암호화폐의 성과를 반환합니다.</p><blockquote><p> 성과: <br> 1. <code> RCN/BTC 0.003 BTC (57.77%) (1) </code><br> 2. <code> PAY/BTC 0.0012 BTC (56.91%) (1) </code><br> 3. <code> VIB/BTC 0.0011 BTC (47.07%) (1) </code><br> 4. <code> SALT/BTC 0.0010 BTC (30.24%) (1) </code><br> 5. <code> STORJ/BTC 0.0009 BTC (27.24%) (1) </code><br> ... </p></blockquote><p>상대 성과는 통화에 대한 총 투자 대비 계산되며, 통화에 대한 모든 체결된 진입을 집계합니다.</p><h3 id="balance"> /balance <a class="headerlink" href="#balance" title="영구 링크"> ¶ </a></h3><p>거래소에 보유한 모든 암호화폐의 잔액을 반환합니다.</p><blockquote><p><strong> 통화: </strong> BTC <br><strong> 사용 가능: </strong> 3.05890234 <br><strong> 잔액: </strong> 3.05890234 <br><strong> 보류 중: </strong> 0.0 </p><p><strong> 통화: </strong> CVC <br><strong> 사용 가능: </strong> 86.64180098 <br><strong> 잔액: </strong> 86.64180098 <br><strong> 보류 중: </strong> 0.0 </p></blockquote>',9)),s("h3",w,[n[54]||(n[54]=a(" /daily ")),l(e,null,{default:t(()=>n[53]||(n[53]=[s("a",{class:"headerlink",href:"#daily",title:"영구 링크"}," ¶ ",-1)])),_:1})]),n[65]||(n[65]=s("p",null,[a(" 기본적으로 "),s("code",null," /daily "),a(" 는 지난 7일을 반환합니다. 아래 예시는 "),s("code",null," /daily 3 "),a(" 입니다: ")],-1)),n[66]||(n[66]=s("blockquote",null,[s("p",null,[s("strong",null," 지난 3일 동안의 일일 수익: ")])],-1)),n[67]||(n[67]=s("div",{class:"highlight"},[s("pre",null,[s("code",null,`Day (count)     USDT          USD         Profit %
--------------  ------------  ----------  ----------
2022-06-11 (1)  -0.746 USDT   -0.75 USD   -0.08%
2022-06-10 (0)  0 USDT        0.00 USD    0.00%
2022-06-09 (5)  20 USDT       20.10 USD   5.00%
`)])],-1)),s("h3",k,[n[56]||(n[56]=a(" /weekly ")),l(e,null,{default:t(()=>n[55]||(n[55]=[s("a",{class:"headerlink",href:"#weekly",title:"영구 링크"}," ¶ ",-1)])),_:1})]),n[68]||(n[68]=s("p",null,[a(" 기본적으로 "),s("code",null," /weekly "),a(" 는 지난 8주를 반환하며, 현재 주도 포함됩니다. 각 주는 월요일부터 시작합니다. 아래 예시는 "),s("code",null," /weekly 3 "),a(" 입니다: ")],-1)),n[69]||(n[69]=s("blockquote",null,[s("p",null,[s("strong",null," 지난 3주 동안의 주간 수익(월요일부터 시작): ")])],-1)),n[70]||(n[70]=s("div",{class:"highlight"},[s("pre",null,[s("code",null,`Monday (count)  Profit BTC      Profit USD   Profit %
-------------  --------------  ------------    ----------
2018-01-03 (5)  0.00224175 BTC  29,142 USD   4.98%
2017-12-27 (1)  0.00033131 BTC   4,307 USD   0.00%
2017-12-20 (4)  0.00269130 BTC  34.986 USD   5.12%
`)])],-1)),s("h3",T,[n[58]||(n[58]=a(" /monthly ")),l(e,null,{default:t(()=>n[57]||(n[57]=[s("a",{class:"headerlink",href:"#monthly",title:"영구 링크"}," ¶ ",-1)])),_:1})]),n[71]||(n[71]=o(`<p> 기본적으로 <code> /monthly </code> 는 지난 6개월을 반환하며, 현재 달도 포함됩니다. 아래 예시는 <code> /monthly 3 </code> 입니다: </p><blockquote><div><strong> 지난 3개월 동안의 월간 수익: </strong><div class="highlight"><pre><code>Month (count)  Profit BTC      Profit USD    Profit %
-------------  --------------  ------------    ----------
2018-01 (20)    0.00224175 BTC  29,142 USD  4.98%
2017-12 (5)    0.00033131 BTC   4,307 USD   0.00%
2017-11 (10)    0.00269130 BTC  34.986 USD  5.10%
</code></pre></div></div></blockquote><h3 id="whitelist"> /whitelist <a class="headerlink" href="#whitelist" title="영구 링크"> ¶ </a></h3><p>현재 화이트리스트를 표시합니다.</p><blockquote><p> 화이트리스트 사용 <code> StaticPairList </code> 22개의 페어 <br><code> IOTA/BTC, NEO/BTC, TRX/BTC, VET/BTC, ADA/BTC, ETC/BTC, NCASH/BTC, DASH/BTC, XRP/BTC, XVG/BTC, EOS/BTC, LTC/BTC, OMG/BTC, BTG/BTC, LSK/BTC, ZEC/BTC, HOT/BTC, IOTX/BTC, XMR/BTC, AST/BTC, XLM/BTC, NANO/BTC </code></p></blockquote><h3 id="blacklist-pair"> /blacklist [pair] <a class="headerlink" href="#blacklist-pair" title="영구 링크"> ¶ </a></h3><p> 현재 블랙리스트를 표시합니다. 페어가 설정된 경우, 이 페어가 블랙리스트에 추가됩니다. 공백으로 구분된 여러 페어도 지원됩니다. <br><code> /reload_config </code> 를 사용하여 블랙리스트를 재설정합니다. </p><blockquote><p> 블랙리스트 사용 <code> StaticPairList </code> 2개의 페어 <br><code> DODGE/BTC </code> , <code> HOT/BTC </code> . </p></blockquote><h3 id="edge"> /edge <a class="headerlink" href="#edge" title="영구 링크"> ¶ </a></h3><p>Edge에 의해 검증된 페어와 해당 승률, 기대치 및 손절매 값을 표시합니다.</p><blockquote><div><strong> Edge에서 검증된 페어: </strong><div class="highlight"><pre><code>Pair        Winrate    Expectancy    Stoploss
--------  ---------  ------------  ----------
DOCK/ETH   0.522727      0.881821       -0.03
PHX/ETH    0.677419      0.560488       -0.03
HOT/ETH    0.733333      0.490492       -0.03
HC/ETH     0.588235      0.280988       -0.02
ARDR/ETH   0.366667      0.143059       -0.01
</code></pre></div></div></blockquote><h3 id="version"> /version <a class="headerlink" href="#version" title="영구 링크"> ¶ </a></h3><blockquote><p><strong> 버전: </strong><code> 0.14.3 </code></p></blockquote><h3 id="marketdir"> /marketdir <a class="headerlink" href="#marketdir" title="영구 링크"> ¶ </a></h3><p> 시장 방향이 제공된 경우 명령은 현재 시장 방향을 나타내는 사용자 관리 변수를 업데이트합니다. 이 변수는 봇 시작 시 유효한 시장 방향으로 설정되지 않으며 사용자가 설정해야 합니다. 아래 예시는 <code> /marketdir long </code> 입니다: </p><div class="highlight"><pre><code>Successfully updated marketdirection from none to long.
</code></pre></div><p> 시장 방향이 제공되지 않은 경우 명령은 현재 설정된 시장 방향을 출력합니다. 아래 예시는 <code> /marketdir </code> 입니다: </p><div class="highlight"><pre><code>Currently set marketdirection: even
</code></pre></div><p> 전략에서 <code> self.market_direction </code> 을 통해 시장 방향을 사용할 수 있습니다. </p><div class="admonition warning"><p class="admonition-title">봇 재시작</p><p>시장 방향은 지속되지 않으며, 봇 재시작/재로드 후 재설정됩니다.</p></div><div class="admonition danger"><p class="admonition-title">백테스팅</p><p> 이 값/변수는 드라이/라이브 거래에서 수동으로 변경되도록 의도되었습니다. <code> market_direction </code> 을 사용하는 전략은 신뢰할 수 있고 재현 가능한 결과를 생성하지 않을 수 있습니다(이 변수에 대한 변경 사항은 백테스팅에 반영되지 않습니다). 사용자의 책임 하에 사용하세요. </p></div>`,21))])}}};export{B as default};
