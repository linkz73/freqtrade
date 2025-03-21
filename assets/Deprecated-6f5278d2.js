import{o,c as t,a}from"./index-1d9d7dc5.js";const d={class:"md-content__inner md-typeset"},l={__name:"Deprecated",setup(i){return(c,e)=>(o(),t("article",d,e[0]||(e[0]=[a('<h1 id="deprecated-features"> 더 이상 사용되지 않는 기능 <a class="headerlink" href="#deprecated-features" title="영구 링크"> ¶ </a></h1><p>이 페이지는 봇 개발팀에 의해 더 이상 지원되지 않는 것으로 선언된 명령줄 인수, 구성 매개변수 및 봇 기능에 대한 설명을 포함합니다. 구성에서 이러한 사용을 피하세요.</p><h2 id="removed-features"> 제거된 기능 <a class="headerlink" href="#removed-features" title="영구 링크"> ¶ </a></h2><h3 id="the-refresh-pairs-cached-command-line-option"><code> --refresh-pairs-cached </code> 명령줄 옵션 <a class="headerlink" href="#the-refresh-pairs-cached-command-line-option" title="영구 링크"> ¶ </a></h3><p>백테스팅, 하이퍼옵트 및 엣지 컨텍스트에서 <code> --refresh-pairs-cached </code>는 백테스팅을 위한 캔들 데이터를 새로 고칠 수 있도록 했습니다. 이는 혼란을 초래하고 백테스팅 속도를 저하시켰기 때문에, 별도의 freqtrade 하위 명령 <code> freqtrade download-data </code>로 분리되었습니다.</p><p>이 명령줄 옵션은 2019.7-dev(개발 브랜치)에서 사용 중단되었으며 2019.9에서 제거되었습니다.</p><h3 id="the-dynamic-whitelist-command-line-option"><code> --dynamic-whitelist </code> 명령줄 옵션 <a class="headerlink" href="#the-dynamic-whitelist-command-line-option" title="영구 링크"> ¶ </a></h3><p>이 명령줄 옵션은 2018년에 사용 중단되었으며 freqtrade 2019.6-dev(개발 브랜치) 및 freqtrade 2019.7에서 제거되었습니다. 대신 <a href="plugins.html">페어리스트</a>를 참조하세요.</p><h3 id="the-live-command-line-option"><code> --live </code> 명령줄 옵션 <a class="headerlink" href="#the-live-command-line-option" title="영구 링크"> ¶ </a></h3><p>백테스팅 컨텍스트에서 <code> --live </code>는 백테스팅을 위한 최신 틱 데이터를 다운로드할 수 있도록 했습니다. 단, 최신 500개의 캔들만 다운로드했기 때문에 효과적인 백테스트 데이터를 얻는 데는 부적합했습니다. 2019-7-dev(개발 브랜치) 및 freqtrade 2019.8에서 제거되었습니다.</p><h3 id="ticker_interval-now-timeframe"><code> ticker_interval </code> (현재 <code> timeframe </code>) <a class="headerlink" href="#ticker_interval-now-timeframe" title="영구 링크"> ¶ </a></h3><p><code> ticker_interval </code> 용어 지원은 2020.6에 사용 중단되었으며, 2022.3에 호환성 코드가 제거되었습니다.</p><h3 id="allow-running-multiple-pairlists-in-sequence"> 여러 페어리스트를 순차적으로 실행 허용 <a class="headerlink" href="#allow-running-multiple-pairlists-in-sequence" title="영구 링크"> ¶ </a></h3><p>구성의 이전 <code> &quot;pairlist&quot; </code> 섹션이 제거되었으며, <code> &quot;pairlists&quot; </code>로 대체되어 페어리스트의 순서를 지정할 수 있는 목록이 되었습니다.</p><p>구성 매개변수의 이전 섹션(<code> &quot;pairlist&quot; </code>)은 2019.11에 사용 중단되었으며 2020.4에 제거되었습니다.</p><h3 id="deprecation-of-bidvolume-and-askvolume-from-volume-pairlist"> volume-pairlist에서 bidVolume 및 askVolume 사용 중단 <a class="headerlink" href="#deprecation-of-bidvolume-and-askvolume-from-volume-pairlist" title="영구 링크"> ¶ </a></h3><p>자산 간 비교할 수 있는 유일한 옵션은 quoteVolume이므로, 다른 옵션(bidVolume, askVolume)은 2020.4에 사용 중단되었으며 2020.9에 제거되었습니다.</p><h3 id="using-order-book-steps-for-exit-price"> 출구 가격을 위한 주문서 단계 사용 <a class="headerlink" href="#using-order-book-steps-for-exit-price" title="영구 링크"> ¶ </a></h3><p><code> order_book_min </code> 및 <code> order_book_max </code>를 사용하여 주문서를 단계별로 진행하고 다음 ROI 슬롯을 찾으려고 시도하여 판매 주문을 조기에 배치할 수 있었습니다. 그러나 이는 위험을 증가시키고 이점을 제공하지 않기 때문에 유지 관리 목적으로 2021.7에 제거되었습니다.</p><h3 id="legacy-hyperopt-mode"> 레거시 하이퍼옵트 모드 <a class="headerlink" href="#legacy-hyperopt-mode" title="영구 링크"> ¶ </a></h3><p>별도의 하이퍼옵트 파일 사용은 2021.4에 사용 중단되었으며 2021.9에 제거되었습니다. 새로운 하이퍼옵트 인터페이스의 이점을 누리기 위해 <a href="hyperopt.html">매개변수화된 전략</a>으로 전환하세요.</p><h2 id="strategy-changes-between-v2-and-v3"> V2와 V3 간의 전략 변경 사항 <a class="headerlink" href="#strategy-changes-between-v2-and-v3" title="영구 링크"> ¶ </a></h2><p>격리된 선물 / 숏 거래는 2022.4에 도입되었습니다. 이는 구성 설정, 전략 인터페이스 등에 대한 주요 변경 사항을 요구했습니다.</p><p>기존 전략과의 호환성을 유지하기 위해 많은 노력을 기울였으므로, 현물 시장에서 freqtrade를 계속 사용하려는 경우에는 변경이 필요하지 않습니다. 현재 인터페이스에 대한 지원을 언젠가 중단할 수 있지만, 별도로 공지하고 적절한 전환 기간을 가질 것입니다.</p><p>새로운 기능을 사용하기 위해 전략을 새로운 형식으로 마이그레이션하려면 <a href="strategy_migration.html">전략 마이그레이션</a> 가이드를 따르세요.</p><h3 id="webhooks-changes-with-20224"> 2022.4와 함께하는 웹훅 변경 사항 <a class="headerlink" href="#webhooks-changes-with-20224" title="영구 링크"> ¶ </a></h3><h4 id="buy_tag-has-been-renamed-to-enter_tag"><code> buy_tag </code>가 <code> enter_tag </code>로 이름이 변경되었습니다 <a class="headerlink" href="#buy_tag-has-been-renamed-to-enter_tag" title="영구 링크"> ¶ </a></h4><p>이는 전략과 잠재적으로 웹훅에만 적용되어야 합니다. 1-2 버전 동안 호환성 레이어를 유지할 것이지만(<code> buy_tag </code>와 <code> enter_tag </code>가 여전히 작동함), 웹훅에 대한 지원은 그 이후에 사라질 것입니다.</p><h4 id="naming-changes"> 이름 변경 <a class="headerlink" href="#naming-changes" title="영구 링크"> ¶ </a></h4><p>웹훅 용어가 &quot;sell&quot;에서 &quot;exit&quot;로, &quot;buy&quot;에서 &quot;entry&quot;로 변경되었으며, 과정에서 &quot;webhook&quot;이 제거되었습니다.</p><ul><li><code> webhookbuy </code>, <code> webhookentry </code> -&gt; <code> entry </code></li><li><code> webhookbuyfill </code>, <code> webhookentryfill </code> -&gt; <code> entry_fill </code></li><li><code> webhookbuycancel </code>, <code> webhookentrycancel </code> -&gt; <code> entry_cancel </code></li><li><code> webhooksell </code>, <code> webhookexit </code> -&gt; <code> exit </code></li><li><code> webhooksellfill </code>, <code> webhookexitfill </code> -&gt; <code> exit_fill </code></li><li><code> webhooksellcancel </code>, <code> webhookexitcancel </code> -&gt; <code> exit_cancel </code></li></ul><h2 id="removal-of-populate_any-indicators"><code> populate_any_indicators </code> 제거 <a class="headerlink" href="#removal-of-populate_any-indicators" title="영구 링크"> ¶ </a></h2><p>버전 2023.3에서 기능 엔지니어링 및 타겟을 위한 분할 메서드를 선호하여 <code> populate_any_indicators </code>가 제거되었습니다. 자세한 내용은 <a href="strategy_migration.html">마이그레이션 문서</a>를 참조하세요.</p><h2 id="removal-of-protections-from-configuration"> 구성에서 <code> protections </code> 제거 <a class="headerlink" href="#removal-of-protections-from-configuration" title="영구 링크"> ¶ </a></h2><p><code> &quot;protections&quot;: [], </code>를 통해 구성에서 보호 설정이 3년 이상 사용 중단 경고를 표시한 후 2024.10에 제거되었습니다.</p><h2 id="hdf5-data-storage"> hdf5 데이터 저장소 <a class="headerlink" href="#hdf5-data-storage" title="영구 링크"> ¶ </a></h2><p>hdf5를 데이터 저장소로 사용하는 것은 2024.12에 사용 중단되었으며 2025.1에 제거되었습니다. feather 데이터 형식으로 전환하는 것을 권장합니다.</p><p> 업데이트하기 전에 기존 데이터를 지원되는 형식 중 하나로 변환하려면 <a href="data-download.html"><code> convert-data </code> 하위 명령</a>을 사용하세요. </p>',38)])))}};export{l as default};
