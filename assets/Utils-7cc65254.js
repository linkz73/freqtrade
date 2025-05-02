import{o as i,c as a,a as n,b as s,u as r}from"./index-a1bb88b6.js";const t="/assets/show-config-output-f69ae73f.png";const o={class:"md-content__inner md-typeset"},d=["src"],h={__name:"Utils",setup(l){return(c,e)=>(i(),a("article",o,[e[0]||(e[0]=n(`<h1 id="utility-subcommands"> 유틸리티 하위 명령어 <a class="headerlink" href="#utility-subcommands" title="영구 링크"> ¶ </a></h1><p> Freqtrade는 실거래(Live-Trade)와 모의거래(Dry-Run) 모드 외에도 다음과 같은 유틸리티 하위 명령어를 제공합니다: <code>백테스팅(Backtesting)</code>, <code>엣지(Edge)</code>, <code>하이퍼옵트(Hyperopt)</code> 최적화, 그리고 과거 데이터를 준비하는 <code>데이터 다운로드(Data Download)</code> 명령어가 있습니다. </p><h2 id="create-userdir"> 사용자 디렉토리 생성 <a class="headerlink" href="#create-userdir" title="영구 링크"> ¶ </a></h2><p> Freqtrade 파일을 저장할 디렉토리 구조를 생성합니다. 시작하기 위한 샘플 전략과 하이퍼옵트(Hyperopt) 파일도 함께 생성됩니다. 이 명령어는 여러 번 실행할 수 있으며, <code>--reset</code> 옵션을 사용하면 샘플 파일들이 기본 상태로 재설정됩니다. </p><div class="highlight"><pre><code>사용법: freqtrade create-userdir [-h] [--userdir 경로] [--reset]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  --userdir 경로, --user-data-dir 경로
                        사용자 데이터 디렉토리 경로.
  --reset               샘플 파일을 원래 상태로 재설정합니다.
</code></pre></div><div class="admonition warning"><p class="admonition-title"> 경고 </p><p><code> --reset </code> 옵션을 사용하면 데이터 손실이 발생할 수 있습니다. 이 옵션은 모든 샘플 파일을 다시 묻지 않고 덮어씁니다. </p></div><div class="highlight"><pre><code>├── backtest_results
├── data
├── hyperopt_results
├── hyperopts
│   ├── sample_hyperopt_loss.py
├── notebooks
│   └── strategy_analysis_example.ipynb
├── plot
└── strategies
    └── sample_strategy.py
</code></pre></div><h2 id="create-new-config"> 새 구성 생성 <a class="headerlink" href="#create-new-config" title="영구 링크"> ¶ </a></h2><p> 구성에 중요한 선택 사항을 묻는 몇 가지 질문을 통해 새 구성 파일을 생성합니다. </p><div class="highlight"><pre><code>사용법: freqtrade new-config [-h] [-c 경로]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  -c 경로, --config 경로
                        구성 파일 지정 (기본값:
                        \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
</code></pre></div><div class="admonition warning"><p class="admonition-title"> 경고 </p><p> 필수 질문만 묻습니다. Freqtrade는 더 많은 구성 가능성을 제공하며, 이는 <a href="configuration.html"> 구성 문서 </a> 에 나열되어 있습니다. </p></div><h3 id="create-config-examples"> 구성 예제 생성 <a class="headerlink" href="#create-config-examples" title="영구 링크"> ¶ </a></h3><div class="highlight"><pre><code>$ freqtrade new-config --config user_data/config_binance.json

? 모의거래(Dry-run)를 활성화하시겠습니까?  예
? 스테이크 통화를 입력하세요: BTC
? 스테이크 금액을 입력하세요: 0.05
? 최대 열려있는 거래 수를 입력하세요 (정수 또는 무제한은 -1): 3
? 원하는 시간 프레임을 입력하세요 (예: 5m): 5m
? 보고용 표시 통화를 입력하세요: USD
? 거래소를 선택하세요  binance
? 텔레그램을 활성화하시겠습니까?  아니오
</code></pre></div><h2 id="show-config"> 구성 표시 <a class="headerlink" href="#show-config" title="영구 링크"> ¶ </a></h2><p> 구성 파일을 표시합니다 (기본적으로 민감한 정보는 숨김 처리됨). 특히 <a href="configuration.html">분할 구성 파일</a>이나 <a href="configuration.html">환경 변수</a>를 사용하는 경우, 이 명령어는 병합된 구성을 보여줍니다. </p>`,15)),s("p",null,[s("img",{alt:"구성 출력 표시",src:r(t)},null,8,d)]),e[1]||(e[1]=n(`<div class="highlight"><pre><code>사용법: freqtrade show-config [-h] [--userdir 경로] [-c 경로]
                             [--show-sensitive]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  --userdir 경로, --user-data-dir 경로
                        사용자 데이터 디렉토리 경로.
  -c 경로, --config 경로
                        구성 파일 지정 (기본값:
                        \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
  --show-sensitive      출력에 비밀 정보를 표시합니다.
</code></pre></div><div class="admonition warning"><p class="admonition-title"> 이 명령으로 제공된 정보 공유 </p><p> 기본 출력(옵션 없이)에서 알려진 모든 민감한 정보를 제거하려고 합니다. 그러나 출력에서 민감한 값을 다시 확인하여 개인 정보를 실수로 노출하지 않도록 하십시오. </p></div><h2 id="create-new-strategy"> 새 전략 생성 <a class="headerlink" href="#create-new-strategy" title="영구 링크"> ¶ </a></h2><p> SampleStrategy와 유사한 템플릿으로 새 전략을 생성합니다. 파일 이름은 클래스 이름을 기반으로 지정되며, 기존 파일을 덮어쓰지 않습니다. </p><p> 결과는 <code> user_data/strategies/&lt;strategyclassname&gt;.py </code> 에 위치합니다. </p><div class="highlight"><pre><code>사용법: freqtrade new-strategy [-h] [--userdir 경로] [-s 이름]
                              [--strategy-path 경로]
                              [--template {full,minimal,advanced}]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  --userdir 경로, --user-data-dir 경로
                        사용자 데이터 디렉토리 경로.
  -s 이름, --strategy 이름
                        봇에서 사용할 전략 클래스 이름을 지정합니다.
  --strategy-path 경로  추가 전략 검색 경로를 지정합니다.
  --template {full,minimal,advanced}
                        \`minimal\`, \`full\` (여러 샘플 지표 포함) 또는 \`advanced\` 템플릿을 사용합니다. 기본값: \`full\`.
</code></pre></div><h3 id="sample-usage-of-new-strategy"> 새 전략의 샘플 사용법 <a class="headerlink" href="#sample-usage-of-new-strategy" title="영구 링크"> ¶ </a></h3><div class="highlight"><pre><code>freqtrade<span class="w"> </span>new-strategy<span class="w"> </span>--strategy<span class="w"> </span>AwesomeStrategy
</code></pre></div><p> 사용자 디렉토리를 사용자 정의하여 사용 </p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>new-strategy<span class="w"> </span>--userdir<span class="w"> </span>~/.freqtrade/<span class="w"> </span>--strategy<span class="w"> </span>AwesomeStrategy
</code></pre></div><p> 고급 템플릿 사용 (모든 선택적 함수 및 메서드 포함) </p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>new-strategy<span class="w"> </span>--strategy<span class="w"> </span>AwesomeStrategy<span class="w"> </span>--template<span class="w"> </span>advanced
</code></pre></div><h2 id="list-strategies"> 전략 목록 <a class="headerlink" href="#list-strategies" title="영구 링크"> ¶ </a></h2><p> 특정 디렉토리의 모든 전략을 확인하려면 <code>list-strategies</code> 하위 명령어를 사용하세요. </p><p> 이 명령어는 전략 로딩 문제를 찾는 데 유용합니다: 오류가 있는 전략은 빨간색으로 표시되고(로드 실패), 중복된 이름의 전략은 노란색으로 표시됩니다(이름 중복). </p><div class="highlight"><pre><code>사용법: freqtrade list-strategies [-h] [-v] [--no-color] [--logfile FILE] [-V]
                                 [-c 경로] [-d 경로] [--userdir 경로]
                                 [--strategy-path 경로] [-1]
                                 [--recursive-strategy-search]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  --strategy-path 경로  추가 전략 검색 경로를 지정합니다.
  -1, --one-column      출력을 한 열로 인쇄합니다.
  --recursive-strategy-search
                        전략 폴더에서 재귀적으로 전략을 검색합니다.

공통 인수:
  -v, --verbose         자세한 모드 (-vv로 더 많은 메시지, -vvv로 모든 메시지 표시).
  --no-color            하이퍼옵트 결과의 색상화를 비활성화합니다. 출력을 파일로 리디렉션하는 경우 유용할 수 있습니다.
  --logfile FILE, --log-file FILE
                        지정된 파일에 로그를 기록합니다. 특별한 값은 &#39;syslog&#39;, &#39;journald&#39;입니다. 자세한 내용은 문서를 참조하십시오.
  -V, --version         프로그램의 버전 번호를 표시하고 종료합니다.
  -c 경로, --config 경로
                        구성 파일 지정 (기본값:
                        \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
  -d 경로, --datadir 경로, --data-dir 경로
                        과거 백테스팅 데이터가 있는 디렉토리 경로.
  --userdir 경로, --user-data-dir 경로
                        사용자 데이터 디렉토리 경로.
</code></pre></div><div class="admonition warning"><p class="admonition-title"> 경고 </p><p> 이러한 명령을 사용하면 디렉토리의 모든 파이썬 파일을 로드하려고 시도합니다. 이 디렉토리에 신뢰할 수 없는 파일이 있는 경우 모든 모듈 수준 코드가 실행되므로 보안 위험이 될 수 있습니다. </p></div><p> 예: 기본 사용자 디렉토리 내의 기본 전략 디렉토리를 검색합니다. </p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>list-strategies
</code></pre></div><p> 예: 사용자 디렉토리 내의 전략 디렉토리를 검색합니다. </p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>list-strategies<span class="w"> </span>--userdir<span class="w"> </span>~/.freqtrade/
</code></pre></div><p> 예: 전용 전략 경로를 검색합니다. </p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>list-strategies<span class="w"> </span>--strategy-path<span class="w"> </span>~/.freqtrade/strategies/
</code></pre></div><h2 id="list-hyperopt-loss-functions"> 하이퍼옵트 손실 함수 목록 <a class="headerlink" href="#list-hyperopt-loss-functions" title="영구 링크"> ¶ </a></h2><p> 사용 가능한 모든 하이퍼옵트 손실 함수를 보려면 <code> list-hyperoptloss </code> 하위 명령어를 사용하십시오. </p><p> 환경에서 사용 가능한 모든 손실 함수의 빠른 목록을 제공합니다. </p><p> 이 하위 명령어는 환경에서 손실 함수를 로드하는 데 문제가 있는지 찾는 데 유용합니다: 오류가 있는 하이퍼옵트 손실 함수가 포함된 모듈은 빨간색으로 표시되고 (로드 실패), 중복 이름이 있는 하이퍼옵트 손실 함수는 노란색으로 표시됩니다 (중복 이름). </p><div class="highlight"><pre><code>사용법: freqtrade list-hyperoptloss [-h] [-v] [--no-color] [--logfile FILE]
                                   [-V] [-c 경로] [-d 경로] [--userdir 경로]
                                   [--hyperopt-path 경로] [-1]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  --hyperopt-path 경로  하이퍼옵트 손실 함수의 추가 검색 경로를 지정합니다.
  -1, --one-column      출력을 한 열로 인쇄합니다.

공통 인수:
  -v, --verbose         자세한 모드 (-vv로 더 많은 메시지, -vvv로 모든 메시지 표시).
  --no-color            하이퍼옵트 결과의 색상화를 비활성화합니다. 출력을 파일로 리디렉션하는 경우 유용할 수 있습니다.
  --logfile FILE, --log-file FILE
                        지정된 파일에 로그를 기록합니다. 특별한 값은 &#39;syslog&#39;, &#39;journald&#39;입니다. 자세한 내용은 문서를 참조하십시오.
  -V, --version         프로그램의 버전 번호를 표시하고 종료합니다.
  -c 경로, --config 경로
                        구성 파일 지정 (기본값:
                        \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
  -d 경로, --datadir 경로, --data-dir 경로
                        과거 백테스팅 데이터가 있는 디렉토리 경로.
  --userdir 경로, --user-data-dir 경로
                        사용자 데이터 디렉토리 경로.
</code></pre></div><h2 id="list-freqai-models"> freqAI 모델 목록 <a class="headerlink" href="#list-freqai-models" title="영구 링크"> ¶ </a></h2><p> 사용 가능한 모든 freqAI 모델을 보려면 <code> list-freqaimodels </code> 하위 명령어를 사용하십시오. </p><p> 이 하위 명령어는 환경에서 freqAI 모델을 로드하는 데 문제가 있는지 찾는 데 유용합니다: 오류가 있는 모델이 포함된 모듈은 빨간색으로 표시되고 (로드 실패), 중복 이름이 있는 모델은 노란색으로 표시됩니다 (중복 이름). </p><div class="highlight"><pre><code>사용법: freqtrade list-freqaimodels [-h] [-v] [--no-color] [--logfile FILE]
                                   [-V] [-c 경로] [-d 경로] [--userdir 경로]
                                   [--freqaimodel-path 경로] [-1]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  --freqaimodel-path 경로
                        freqaimodels의 추가 검색 경로를 지정합니다.
  -1, --one-column      출력을 한 열로 인쇄합니다.

공통 인수:
  -v, --verbose         자세한 모드 (-vv로 더 많은 메시지, -vvv로 모든 메시지 표시).
  --no-color            하이퍼옵트 결과의 색상화를 비활성화합니다. 출력을 파일로 리디렉션하는 경우 유용할 수 있습니다.
  --logfile FILE, --log-file FILE
                        지정된 파일에 로그를 기록합니다. 특별한 값은 &#39;syslog&#39;, &#39;journald&#39;입니다. 자세한 내용은 문서를 참조하십시오.
  -V, --version         프로그램의 버전 번호를 표시하고 종료합니다.
  -c 경로, --config 경로
                        구성 파일 지정 (기본값:
                        \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
  -d 경로, --datadir 경로, --data-dir 경로
                        과거 백테스팅 데이터가 있는 디렉토리 경로.
  --userdir 경로, --user-data-dir 경로
                        사용자 데이터 디렉토리 경로.
</code></pre></div><h2 id="list-exchanges"> 거래소 목록 <a class="headerlink" href="#list-exchanges" title="영구 링크"> ¶ </a></h2><p> 봇에서 사용할 수 있는 거래소를 보려면 <code> list-exchanges </code> 하위 명령어를 사용하십시오. </p><div class="highlight"><pre><code>사용법: freqtrade list-exchanges [-h] [-v] [--no-color] [--logfile FILE] [-V]
                                [-c 경로] [-d 경로] [--userdir 경로] [-1] [-a]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  -1, --one-column      출력을 한 열로 인쇄합니다.
  -a, --all             ccxt 라이브러리에 알려진 모든 거래소를 인쇄합니다.

공통 인수:
  -v, --verbose         자세한 모드 (-vv로 더 많은 메시지, -vvv로 모든 메시지 표시).
  --no-color            하이퍼옵트 결과의 색상화를 비활성화합니다. 출력을 파일로 리디렉션하는 경우 유용할 수 있습니다.
  --logfile FILE, --log-file FILE
                        지정된 파일에 로그를 기록합니다. 특별한 값은 &#39;syslog&#39;, &#39;journald&#39;입니다. 자세한 내용은 문서를 참조하십시오.
  -V, --version         프로그램의 버전 번호를 표시하고 종료합니다.
  -c 경로, --config 경로
                        구성 파일 지정 (기본값:
                        \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
  -d 경로, --datadir 경로, --data-dir 경로
                        과거 백테스팅 데이터가 있는 디렉토리 경로.
  --userdir 경로, --user-data-dir 경로
                        사용자 데이터 디렉토리 경로.
</code></pre></div><p> 예: 봇에서 사용할 수 있는 거래소를 확인합니다: </p><div class="highlight"><pre><code>$ freqtrade list-exchanges
Exchanges available for Freqtrade:
Exchange name       Supported    Markets                 Reason
------------------  -----------  ----------------------  ------------------------------------------------------------------------
binance             Official     spot, isolated futures
bitmart             Official     spot
bybit                            spot, isolated futures
gate                Official     spot, isolated futures
htx                 Official     spot
huobi                            spot
kraken              Official     spot
okx                 Official     spot, isolated futures
</code></pre></div><div class="admonition info"><p> 명확성을 위해 출력이 줄어들었습니다 - 지원되는 거래소와 사용 가능한 거래소는 시간이 지남에 따라 변경될 수 있습니다. </p></div><div class="admonition note"><p class="admonition-title"> 누락된 opt 거래소 </p><p> &quot;누락된 opt:&quot; 값은 특별한 구성이 필요할 수 있습니다 (예: orderbook을 사용하여 <code> fetchTickers </code> 가 누락된 경우) - 이론적으로는 작동해야 하지만 (보장할 수는 없습니다). </p></div><p> 예: Freqtrade에서 지원하는 모든 거래소를 확인합니다 (작동하지 않는 것으로 알려진 &#39;나쁜&#39; 거래소 포함): </p><div class="highlight"><pre><code>$ freqtrade list-exchanges -a
All exchanges supported by the ccxt library:
Exchange name       Valid    Supported    Markets                 Reason
------------------  -------  -----------  ----------------------  ---------------------------------------------------------------------------------
binance             True     Official     spot, isolated futures
bitflyer            False                 spot                    missing: fetchOrder. missing opt: fetchTickers.
bitmart             True     Official     spot
bybit               True                  spot, isolated futures
gate                True     Official     spot, isolated futures
htx                 True     Official     spot
kraken              True     Official     spot
okx                 True     Official     spot, isolated futures
</code></pre></div><div class="admonition info"><p> 출력이 줄어들었습니다 - 지원되는 거래소와 사용 가능한 거래소는 시간이 지남에 따라 변경될 수 있습니다. </p></div><h2 id="list-timeframes"> 시간 프레임 목록 <a class="headerlink" href="#list-timeframes" title="영구 링크"> ¶ </a></h2><p> 거래소에서 사용할 수 있는 시간 프레임 목록을 보려면 <code> list-timeframes </code> 하위 명령어를 사용하십시오. </p><div class="highlight"><pre><code>사용법: freqtrade list-timeframes [-h] [-v] [--no-color] [--logfile FILE] [-V]
                                 [-c 경로] [-d 경로] [--userdir 경로]
                                 [--exchange 거래소] [-1]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  --exchange 거래소   거래소 이름. 구성 파일이 제공되지 않은 경우에만 유효합니다.
  -1, --one-column      출력을 한 열로 인쇄합니다.

공통 인수:
  -v, --verbose         자세한 모드 (-vv로 더 많은 메시지, -vvv로 모든 메시지 표시).
  --no-color            하이퍼옵트 결과의 색상화를 비활성화합니다. 출력을 파일로 리디렉션하는 경우 유용할 수 있습니다.
  --logfile FILE, --log-file FILE
                        지정된 파일에 로그를 기록합니다. 특별한 값은 &#39;syslog&#39;, &#39;journald&#39;입니다. 자세한 내용은 문서를 참조하십시오.
  -V, --version         프로그램의 버전 번호를 표시하고 종료합니다.
  -c 경로, --config 경로
                        구성 파일 지정 (기본값:
                        \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
  -d 경로, --datadir 경로, --data-dir 경로
                        과거 백테스팅 데이터가 있는 디렉토리 경로.
  --userdir 경로, --user-data-dir 경로
                        사용자 데이터 디렉토리 경로.
</code></pre></div><ul><li> 예: 기본 구성 파일에 설정된 &#39;binance&#39; 거래소의 시간 프레임을 확인합니다: </li></ul><div class="highlight"><pre><code>$ freqtrade list-timeframes -c config_binance.json
...
Timeframes available for the exchange \`binance\`: 1m, 3m, 5m, 15m, 30m, 1h, 2h, 4h, 6h, 8h, 12h, 1d, 3d, 1w, 1M
</code></pre></div><ul><li> 예: Freqtrade에서 사용할 수 있는 거래소를 나열하고 각 거래소에서 지원하는 시간 프레임을 인쇄합니다: <div class="highlight"><pre><code>$ for i in \`freqtrade list-exchanges -1\`; do freqtrade list-timeframes --exchange $i; done
</code></pre></div></li></ul><h2 id="list-pairslist-markets"> 페어/마켓 목록 <a class="headerlink" href="#list-pairslist-markets" title="영구 링크"> ¶ </a></h2><p> 거래소에서 사용할 수 있는 페어/마켓을 보려면 <code> list-pairs </code> 및 <code> list-markets </code> 하위 명령어를 사용하십시오. </p><p> 페어는 시장 기호에서 기본 통화 부분과 견적 통화 부분 사이에 &#39;/&#39; 문자가 있는 시장입니다. 예를 들어, &#39;ETH/BTC&#39; 페어에서 &#39;ETH&#39;는 기본 통화이고, &#39;BTC&#39;는 견적 통화입니다. </p><p> Freqtrade에서 거래되는 페어의 경우 페어 견적 통화는 <code> stake_currency </code> 구성 설정 값에 의해 정의됩니다. </p><p> 이러한 하위 명령어는 동일한 사용법과 동일한 옵션 세트를 가지고 있습니다: </p><div class="highlight"><pre><code>사용법: freqtrade list-pairs [-h] [-v] [--no-color] [--logfile FILE] [-V]
                            [-c 경로] [-d 경로] [--userdir 경로]
                            [--exchange 거래소] [--print-list]
                            [--print-json] [-1] [--print-csv]
                            [--base 기본_통화 [기본_통화 ...]]
                            [--quote 견적_통화 [견적_통화 ...]] [-a]
                            [--trading-mode {spot,margin,futures}]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  --exchange 거래소   거래소 이름. 구성 파일이 제공되지 않은 경우에만 유효합니다.
  --print-list          페어 또는 시장 기호 목록을 인쇄합니다. 기본적으로 데이터는 표 형식으로 인쇄됩니다.
  --print-json          페어 또는 시장 기호 목록을 JSON 형식으로 인쇄합니다.
  -1, --one-column      출력을 한 열로 인쇄합니다.
  --print-csv           거래소 페어 또는 시장 데이터를 csv 형식으로 인쇄합니다.
  --base 기본_통화 [기본_통화 ...]
                        기본 통화(-들)를 지정합니다. 공백으로 구분된 목록.
  --quote 견적_통화 [견적_통화 ...]
                        견적 통화(-들)를 지정합니다. 공백으로 구분된 목록.
  -a, --all             모든 페어 또는 시장 기호를 인쇄합니다. 기본적으로 활성 페어만 표시됩니다.
  --trading-mode {spot,margin,futures}, --tradingmode {spot,margin,futures}
                        거래 모드 선택

공통 인수:
  -v, --verbose         자세한 모드 (-vv로 더 많은 메시지, -vvv로 모든 메시지 표시).
  --no-color            하이퍼옵트 결과의 색상화를 비활성화합니다. 출력을 파일로 리디렉션하는 경우 유용할 수 있습니다.
  --logfile FILE, --log-file FILE
                        지정된 파일에 로그를 기록합니다. 특별한 값은 &#39;syslog&#39;, &#39;journald&#39;입니다. 자세한 내용은 문서를 참조하십시오.
  -V, --version         프로그램의 버전 번호를 표시하고 종료합니다.
  -c 경로, --config 경로
                        구성 파일 지정 (기본값:
                        \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
  -d 경로, --datadir 경로, --data-dir 경로
                        과거 백테스팅 데이터가 있는 디렉토리 경로.
  --userdir 경로, --user-data-dir 경로
                        사용자 데이터 디렉토리 경로.
</code></pre></div><p> 기본적으로 활성 페어/마켓만 표시됩니다. 활성 페어/마켓은 현재 거래소에서 거래할 수 있는 페어/마켓입니다. <code> -a </code> / <code> -all </code> 옵션을 사용하여 비활성 페어/마켓을 포함한 모든 페어/마켓 목록을 볼 수 있습니다. 마켓의 최소 거래 가능한 가격이 매우 작은 경우, 즉 <code> 1e-11 </code> ( <code> 0.00000000001 </code> )보다 작은 경우 거래할 수 없는 것으로 나열될 수 있습니다. </p><p> 페어/마켓은 인쇄된 출력에서 기호 문자열에 따라 정렬됩니다. </p><h3 id="examples"> 예제 <a class="headerlink" href="#examples" title="영구 링크"> ¶ </a></h3><ul><li> 기본 구성 파일에 지정된 거래소에서 USD 견적 통화로 활성 페어 목록을 JSON 형식으로 인쇄합니다: </li></ul><div class="highlight"><pre><code>$ freqtrade list-pairs --quote USD --print-json
</code></pre></div><ul><li><code> config_binance.json </code> 구성 파일에 지정된 거래소에서 모든 페어를 인쇄합니다 (즉, &quot;Binance&quot; 거래소에서) 기본 통화가 BTC 또는 ETH이고 견적 통화가 USDT 또는 USD인 경우, 요약과 함께 사람이 읽을 수 있는 목록으로 인쇄합니다: </li></ul><div class="highlight"><pre><code>$ freqtrade list-pairs -c config_binance.json --all --base BTC ETH --quote USDT USD --print-list
</code></pre></div><ul><li> &quot;Kraken&quot; 거래소에서 모든 마켓을 표 형식으로 인쇄합니다: </li></ul><div class="highlight"><pre><code>$ freqtrade list-markets --exchange kraken --all
</code></pre></div><h2 id="test-pairlist"> 페어 목록 테스트 <a class="headerlink" href="#test-pairlist" title="영구 링크"> ¶ </a></h2><p><a href="plugins.html"> 동적 페어 목록 </a> 의 구성을 테스트하려면 <code> test-pairlist </code> 하위 명령어를 사용하십시오. </p><p><code> pairlists </code> 속성이 지정된 구성이 필요합니다. 백테스팅/하이퍼옵트 중에 사용할 정적 페어 목록을 생성하는 데 사용할 수 있습니다. </p><div class="highlight"><pre><code>사용법: freqtrade test-pairlist [-h] [--userdir 경로] [-v] [-c 경로]
                               [--quote 견적_통화 [견적_통화 ...]]
                               [-1] [--print-json] [--exchange 거래소]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  --userdir 경로, --user-data-dir 경로
                        사용자 데이터 디렉토리 경로.
  -v, --verbose         자세한 모드 (-vv로 더 많은 메시지, -vvv로 모든 메시지 표시).
  -c 경로, --config 경로
                        구성 파일 지정 (기본값:
                        \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
  --quote 견적_통화 [견적_통화 ...]
                        견적 통화(-들)를 지정합니다. 공백으로 구분된 목록.
  -1, --one-column      출력을 한 열로 인쇄합니다.
  --print-json          페어 또는 시장 기호 목록을 JSON 형식으로 인쇄합니다.
  --exchange 거래소   거래소 이름. 구성 파일이 제공되지 않은 경우에만 유효합니다.
</code></pre></div><h3 id="examples_1"> 예제 <a class="headerlink" href="#examples_1" title="영구 링크"> ¶ </a></h3><p><a href="plugins.html"> 동적 페어 목록 </a> 을 사용할 때 화이트리스트를 표시합니다. </p><div class="highlight"><pre><code>freqtrade test-pairlist --config config.json --quote USDT BTC
</code></pre></div><h2 id="convert-database"> 데이터베이스 변환 <a class="headerlink" href="#convert-database" title="영구 링크"> ¶ </a></h2><p><code> freqtrade convert-db </code> 를 사용하여 데이터베이스를 한 시스템에서 다른 시스템으로 변환할 수 있습니다 (sqlite -&gt; postgres, postgres -&gt; 다른 postgres), 모든 거래, 주문 및 Pairlocks를 마이그레이션합니다. </p><p> 다양한 데이터베이스 시스템의 요구 사항에 대해 알아보려면 <a href="advanced-setup.html"> 관련 문서 </a> 를 참조하십시오. </p><div class="highlight"><pre><code>사용법: freqtrade convert-db [-h] [--db-url 경로] [--db-url-from 경로]

옵션:
  -h, --help          도움말 메시지를 표시하고 종료합니다.
  --db-url 경로       거래 데이터베이스 URL을 재정의합니다. 사용자 정의 배포에서 유용합니다 (기본값: 실거래 모드의 경우 \`sqlite:///tradesv3.sqlite\`, 모의거래 모드의 경우 \`sqlite:///tradesv3.dryrun.sqlite\`).
  --db-url-from 경로  데이터베이스를 마이그레이션할 때 사용할 소스 db url.
</code></pre></div><div class="admonition warning"><p class="admonition-title"> 경고 </p><p> 빈 대상 데이터베이스에서만 이 작업을 수행하십시오. Freqtrade는 정기적인 마이그레이션을 수행하지만 항목이 이미 존재하는 경우 실패할 수 있습니다. </p></div><h2 id="webserver-mode"> 웹서버 모드 <a class="headerlink" href="#webserver-mode" title="영구 링크"> ¶ </a></h2><div class="admonition warning"><p class="admonition-title"> 실험적 </p><p> 웹서버 모드는 백테스팅 및 전략 개발 생산성을 높이기 위한 실험적 모드입니다. 여전히 버그가 있을 수 있으므로 이러한 버그를 발견하면 github 문제로 보고해 주십시오. 감사합니다. </p></div><p> 웹서버 모드에서 freqtrade를 실행합니다. Freqtrade는 웹서버를 시작하고 FreqUI가 백테스팅 프로세스를 시작하고 제어할 수 있도록 합니다. 이렇게 하면 시간 프레임과 시간 범위가 동일하게 유지되는 한 백테스팅 실행 간에 데이터가 다시 로드되지 않는 이점이 있습니다. FreqUI는 또한 백테스팅 결과를 표시합니다. </p><div class="highlight"><pre><code>사용법: freqtrade webserver [-h] [-v] [--no-color] [--logfile FILE] [-V]
                           [-c 경로] [-d 경로] [--userdir 경로]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.

공통 인수:
  -v, --verbose         자세한 모드 (-vv로 더 많은 메시지, -vvv로 모든 메시지 표시).
  --no-color            하이퍼옵트 결과의 색상화를 비활성화합니다. 출력을 파일로 리디렉션하는 경우 유용할 수 있습니다.
  --logfile FILE, --log-file FILE
                        지정된 파일에 로그를 기록합니다. 특별한 값은 &#39;syslog&#39;, &#39;journald&#39;입니다. 자세한 내용은 문서를 참조하십시오.
  -V, --version         프로그램의 버전 번호를 표시하고 종료합니다.
  -c 경로, --config 경로
                        구성 파일 지정 (기본값:
                        \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
  -d 경로, --datadir 경로, --data-dir 경로
                        과거 백테스팅 데이터가 있는 디렉토리 경로.
  --userdir 경로, --user-data-dir 경로
                        사용자 데이터 디렉토리 경로.
</code></pre></div><h3 id="webserver-mode-docker"> 웹서버 모드 - 도커 <a class="headerlink" href="#webserver-mode-docker" title="영구 링크"> ¶ </a></h3><p> 도커를 통해 웹서버 모드를 사용할 수도 있습니다. 일회성 컨테이너를 시작하려면 포트가 기본적으로 노출되지 않으므로 포트를 명시적으로 구성해야 합니다. <code> docker compose run --rm -p 127.0.0.1:8080:8080 freqtrade webserver </code> 를 사용하여 중지하면 제거되는 일회성 컨테이너를 시작할 수 있습니다. 이는 포트 8080이 여전히 사용 가능하고 해당 포트에서 실행 중인 다른 봇이 없다고 가정합니다. </p><p> 또는 도커 컴포즈 파일을 재구성하여 명령을 업데이트할 수 있습니다: </p><div class="highlight"><pre><code>    command: &gt;
      webserver
      --config /freqtrade/user_data/config.json
</code></pre></div><p> 이제 <code> docker compose up </code> 을 사용하여 웹서버를 시작할 수 있습니다. 이는 구성이 도커용으로 웹서버가 활성화되고 구성된 상태(수신 포트 = <code> 0.0.0.0 </code> )임을 가정합니다. </p><div class="admonition tip"><p class="admonition-title"> 팁 </p><p> 라이브 또는 모의거래 봇을 시작하려면 명령을 다시 거래 명령으로 재설정하는 것을 잊지 마십시오. </p></div><h2 id="show-previous-backtest-results"> 이전 백테스트 결과 표시 <a class="headerlink" href="#show-previous-backtest-results" title="영구 링크"> ¶ </a></h2><p> 이전 백테스트 결과를 표시할 수 있습니다. <code> --show-pair-list </code> 를 추가하면 나쁜 페어를 생략하고 구성에 쉽게 복사/붙여넣기할 수 있는 정렬된 페어 목록이 출력됩니다. </p><details class="warning"><summary> 전략 과적합 </summary><p> 승리하는 페어만 사용하는 것은 미래 데이터에서 잘 작동하지 않는 과적합된 전략으로 이어질 수 있습니다. 실제 돈을 위험에 빠뜨리기 전에 모의거래에서 전략을 광범위하게 테스트하십시오. </p></details><div class="highlight"><pre><code>사용법: freqtrade backtesting-show [-h] [-v] [--no-color] [--logfile FILE] [-V]
                                  [-c 경로] [-d 경로] [--userdir 경로]
                                  [--export-filename 경로] [--show-pair-list]
                                  [--breakdown {day,week,month} [{day,week,month} ...]]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  --export-filename 경로, --backtest-filename 경로
                        백테스트 결과에 이 파일 이름을 사용합니다. \`--export\`도 설정해야 합니다. 예: \`--export-filename=user_data/backtest_results/backtest_today.json\`
  --show-pair-list      이익에 따라 정렬된 백테스트 페어 목록을 표시합니다.
  --breakdown {day,week,month} [{day,week,month} ...]
                        [일, 주, 월]별 백테스트 분석을 표시합니다.

공통 인수:
  -v, --verbose         자세한 모드 (-vv로 더 많은 메시지, -vvv로 모든 메시지 표시).
  --no-color            하이퍼옵트 결과의 색상화를 비활성화합니다. 출력을 파일로 리디렉션하는 경우 유용할 수 있습니다.
  --logfile FILE, --log-file FILE
                        지정된 파일에 로그를 기록합니다. 특별한 값은 &#39;syslog&#39;, &#39;journald&#39;입니다. 자세한 내용은 문서를 참조하십시오.
  -V, --version         프로그램의 버전 번호를 표시하고 종료합니다.
  -c 경로, --config 경로
                        구성 파일 지정 (기본값:
                        \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
  -d 경로, --datadir 경로, --data-dir 경로
                        과거 백테스팅 데이터가 있는 디렉토리 경로.
  --userdir 경로, --user-data-dir 경로
                        사용자 데이터 디렉토리 경로.
</code></pre></div><h2 id="detailed-backtest-analysis"> 상세 백테스트 분석 <a class="headerlink" href="#detailed-backtest-analysis" title="영구 링크"> ¶ </a></h2><p> 고급 백테스트 결과 분석. </p><p> 자세한 내용은 <a href="advanced-backtesting.html"> 백테스팅 분석 </a> 섹션을 참조하십시오. </p><div class="highlight"><pre><code>사용법: freqtrade backtesting-analysis [-h] [-v] [--no-color] [--logfile FILE]
                                      [-V] [-c 경로] [-d 경로]
                                      [--userdir 경로]
                                      [--export-filename 경로]
                                      [--analysis-groups {0,1,2,3,4,5} [{0,1,2,3,4,5} ...]]
                                      [--enter-reason-list ENTER_REASON_LIST [ENTER_REASON_LIST ...]]
                                      [--exit-reason-list EXIT_REASON_LIST [EXIT_REASON_LIST ...]]
                                      [--indicator-list INDICATOR_LIST [INDICATOR_LIST ...]]
                                      [--entry-only] [--exit-only]
                                      [--timerange TIMERANGE]
                                      [--rejected-signals] [--analysis-to-csv]
                                      [--analysis-csv-path ANALYSIS_CSV_PATH]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  --export-filename 경로, --backtest-filename 경로
                        백테스트 결과에 이 파일 이름을 사용합니다. \`--export\`도 설정해야 합니다. 예: \`--export-filename=user_data/backtest_results/backtest_today.json\`
  --analysis-groups {0,1,2,3,4,5} [{0,1,2,3,4,5} ...]
                        출력 그룹화 - 0: enter 태그별 간단한 승/패, 1: enter_tag별, 2: enter_tag 및 exit_tag별, 3: 페어 및 enter_tag별, 4: 페어, enter_ 및 exit_tag별 (매우 클 수 있음), 5: exit_tag별
  --enter-reason-list ENTER_REASON_LIST [ENTER_REASON_LIST ...]
                        분석할 진입 신호의 공백으로 구분된 목록. 기본값: 모두. 예: &#39;entry_tag_a entry_tag_b&#39;
  --exit-reason-list EXIT_REASON_LIST [EXIT_REASON_LIST ...]
                        분석할 종료 신호의 공백으로 구분된 목록. 기본값: 모두. 예: &#39;exit_tag_a roi stop_loss trailing_stop_loss&#39;
  --indicator-list INDICATOR_LIST [INDICATOR_LIST ...]
                        분석할 지표의 공백으로 구분된 목록. 예: &#39;close rsi bb_lowerband profit_abs&#39;
  --entry-only          진입 신호만 분석합니다.
  --exit-only           종료 신호만 분석합니다.
  --timerange TIMERANGE
                        사용할 데이터의 시간 범위를 지정합니다.
  --rejected-signals    거부된 신호 분석
  --analysis-to-csv     선택한 분석 테이블을 개별 CSV로 저장
  --analysis-csv-path ANALYSIS_CSV_PATH
                        --analysis-to-csv가 활성화된 경우 분석 CSV를 저장할 경로를 지정합니다. 기본값: user_data/basktesting_results/

공통 인수:
  -v, --verbose         자세한 모드 (-vv로 더 많은 메시지, -vvv로 모든 메시지 표시).
  --no-color            하이퍼옵트 결과의 색상화를 비활성화합니다. 출력을 파일로 리디렉션하는 경우 유용할 수 있습니다.
  --logfile FILE, --log-file FILE
                        지정된 파일에 로그를 기록합니다. 특별한 값은 &#39;syslog&#39;, &#39;journald&#39;입니다. 자세한 내용은 문서를 참조하십시오.
  -V, --version         프로그램의 버전 번호를 표시하고 종료합니다.
  -c 경로, --config 경로
                        구성 파일 지정 (기본값:
                        \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
  -d 경로, --datadir 경로, --data-dir 경로
                        과거 백테스팅 데이터가 있는 디렉토리 경로.
  --userdir 경로, --user-data-dir 경로
                        사용자 데이터 디렉토리 경로.
</code></pre></div><h2 id="list-hyperopt-results"> 하이퍼옵트 결과 목록 <a class="headerlink" href="#list-hyperopt-results" title="영구 링크"> ¶ </a></h2><p> 하이퍼옵트 모듈이 이전에 평가한 하이퍼옵트 에포크를 <code> hyperopt-list </code> 하위 명령어로 나열할 수 있습니다. </p><div class="highlight"><pre><code>사용법: freqtrade hyperopt-list [-h] [-v] [--no-color] [--logfile FILE] [-V]
                               [-c 경로] [-d 경로] [--userdir 경로] [--best]
                               [--profitable] [--min-trades INT]
                               [--max-trades INT] [--min-avg-time FLOAT]
                               [--max-avg-time FLOAT] [--min-avg-profit FLOAT]
                               [--max-avg-profit FLOAT]
                               [--min-total-profit FLOAT]
                               [--max-total-profit FLOAT]
                               [--min-objective FLOAT] [--max-objective FLOAT]
                               [--print-json] [--no-details]
                               [--hyperopt-filename FILENAME]
                               [--export-csv FILE]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  --best                최고의 에포크만 선택합니다.
  --profitable          수익성 있는 에포크만 선택합니다.
  --min-trades INT      INT 거래보다 많은 에포크를 선택합니다.
  --max-trades INT      INT 거래보다 적은 에포크를 선택합니다.
  --min-avg-time FLOAT  평균 시간보다 높은 에포크를 선택합니다.
  --max-avg-time FLOAT  평균 시간보다 낮은 에포크를 선택합니다.
  --min-avg-profit FLOAT
                        평균 이익보다 높은 에포크를 선택합니다.
  --max-avg-profit FLOAT
                        평균 이익보다 낮은 에포크를 선택합니다.
  --min-total-profit FLOAT
                        총 이익보다 높은 에포크를 선택합니다.
  --max-total-profit FLOAT
                        총 이익보다 낮은 에포크를 선택합니다.
  --min-objective FLOAT
                        목표보다 높은 에포크를 선택합니다.
  --max-objective FLOAT
                        목표보다 낮은 에포크를 선택합니다.
  --print-json          출력을 JSON 형식으로 인쇄합니다.
  --no-details          최고의 에포크 세부 정보를 인쇄하지 않습니다.
  --hyperopt-filename FILENAME
                        하이퍼옵트 결과 파일 이름. 예: \`--hyperopt-filename=hyperopt_results_2020-09-27_16-20-48.pickle\`
  --export-csv FILE     CSV 파일로 내보냅니다. 이렇게 하면 테이블 인쇄가 비활성화됩니다. 예: --export-csv hyperopt.csv

공통 인수:
  -v, --verbose         자세한 모드 (-vv로 더 많은 메시지, -vvv로 모든 메시지 표시).
  --no-color            하이퍼옵트 결과의 색상화를 비활성화합니다. 출력을 파일로 리디렉션하는 경우 유용할 수 있습니다.
  --logfile FILE, --log-file FILE
                        지정된 파일에 로그를 기록합니다. 특별한 값은 &#39;syslog&#39;, &#39;journald&#39;입니다. 자세한 내용은 문서를 참조하십시오.
  -V, --version         프로그램의 버전 번호를 표시하고 종료합니다.
  -c 경로, --config 경로
                        구성 파일 지정 (기본값:
                        \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
  -d 경로, --datadir 경로, --data-dir 경로
                        과거 백테스팅 데이터가 있는 디렉토리 경로.
  --userdir 경로, --user-data-dir 경로
                        사용자 데이터 디렉토리 경로.
</code></pre></div><div class="admonition note"><p class="admonition-title"> 참고 </p><p><code> hyperopt-list </code> 는 자동으로 최신 하이퍼옵트 결과 파일을 사용합니다. <code> --hyperopt-filename </code> 인수를 사용하여 이를 재정의하고 다른 사용 가능한 파일 이름(경로 없이!)을 지정할 수 있습니다. </p></div><h3 id="examples_2"> 예제 <a class="headerlink" href="#examples_2" title="영구 링크"> ¶ </a></h3><p> 모든 결과를 나열하고, 마지막에 최고의 결과의 세부 정보를 인쇄합니다: <div class="highlight"><pre><code>freqtrade hyperopt-list
</code></pre></div></p><p> 긍정적인 이익이 있는 에포크만 나열합니다. 최고의 에포크의 세부 정보를 인쇄하지 않으므로 목록을 스크립트에서 반복할 수 있습니다: <div class="highlight"><pre><code>freqtrade hyperopt-list --profitable --no-details
</code></pre></div></p><h2 id="show-details-of-hyperopt-results"> 하이퍼옵트 결과의 세부 정보 표시 <a class="headerlink" href="#show-details-of-hyperopt-results" title="영구 링크"> ¶ </a></h2><p> 하이퍼옵트 모듈이 이전에 평가한 하이퍼옵트 에포크의 세부 정보를 <code> hyperopt-show </code> 하위 명령어로 표시할 수 있습니다. </p><div class="highlight"><pre><code>사용법: freqtrade hyperopt-show [-h] [-v] [--no-color] [--logfile FILE] [-V]
                               [-c 경로] [-d 경로] [--userdir 경로] [--best]
                               [--profitable] [-n INT] [--print-json]
                               [--hyperopt-filename FILENAME] [--no-header]
                               [--disable-param-export]
                               [--breakdown {day,week,month} [{day,week,month} ...]]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  --best                최고의 에포크만 선택합니다.
  --profitable          수익성 있는 에포크만 선택합니다.
  -n INT, --index INT   세부 정보를 인쇄할 에포크의 인덱스를 지정합니다.
  --print-json          출력을 JSON 형식으로 인쇄합니다.
  --hyperopt-filename FILENAME
                        하이퍼옵트 결과 파일 이름. 예: \`--hyperopt-filename=hyperopt_results_2020-09-27_16-20-48.pickle\`
  --no-header           에포크 세부 정보 헤더를 인쇄하지 않습니다.
  --disable-param-export
                        하이퍼옵트 매개변수 내보내기를 비활성화합니다.
  --breakdown {day,week,month} [{day,week,month} ...]
                        [일, 주, 월]별 백테스트 분석을 표시합니다.

공통 인수:
  -v, --verbose         자세한 모드 (-vv로 더 많은 메시지, -vvv로 모든 메시지 표시).
  --no-color            하이퍼옵트 결과의 색상화를 비활성화합니다. 출력을 파일로 리디렉션하는 경우 유용할 수 있습니다.
  --logfile FILE, --log-file FILE
                        지정된 파일에 로그를 기록합니다. 특별한 값은 &#39;syslog&#39;, &#39;journald&#39;입니다. 자세한 내용은 문서를 참조하십시오.
  -V, --version         프로그램의 버전 번호를 표시하고 종료합니다.
  -c 경로, --config 경로
                        구성 파일 지정 (기본값:
                        \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
  -d 경로, --datadir 경로, --data-dir 경로
                        과거 백테스팅 데이터가 있는 디렉토리 경로.
  --userdir 경로, --user-data-dir 경로
                        사용자 데이터 디렉토리 경로.
</code></pre></div><div class="admonition note"><p class="admonition-title"> 참고 </p><p><code> hyperopt-show </code> 는 자동으로 최신 하이퍼옵트 결과 파일을 사용합니다. <code> --hyperopt-filename </code> 인수를 사용하여 이를 재정의하고 다른 사용 가능한 파일 이름(경로 없이!)을 지정할 수 있습니다. </p></div><h3 id="examples_3"> 예제 <a class="headerlink" href="#examples_3" title="영구 링크"> ¶ </a></h3><p> 에포크 168의 세부 정보를 인쇄합니다 (에포크 번호는 <code> hyperopt-list </code> 하위 명령어 또는 하이퍼옵트 실행 중 하이퍼옵트 자체에 의해 표시됨): </p><div class="highlight"><pre><code>freqtrade hyperopt-show -n 168
</code></pre></div><p> 마지막 최고의 에포크 (즉, 모든 에포크 중 최고의 에포크)의 세부 정보를 JSON 데이터로 인쇄합니다: </p><div class="highlight"><pre><code>freqtrade hyperopt-show --best -n -1 --print-json --no-header
</code></pre></div><h2 id="show-trades"> 거래 표시 <a class="headerlink" href="#show-trades" title="영구 링크"> ¶ </a></h2><p> 데이터베이스에서 선택된 (또는 모든) 거래를 화면에 인쇄합니다. </p><div class="highlight"><pre><code>사용법: freqtrade show-trades [-h] [-v] [--no-color] [--logfile FILE] [-V]
                             [-c 경로] [-d 경로] [--userdir 경로]
                             [--db-url 경로]
                             [--trade-ids 거래_아이디 [거래_아이디 ...]]
                             [--print-json]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  --db-url 경로         거래 데이터베이스 URL을 재정의합니다. 사용자 정의 배포에서 유용합니다 (기본값: 실거래 모드의 경우 \`sqlite:///tradesv3.sqlite\`, 모의거래 모드의 경우 \`sqlite:///tradesv3.dryrun.sqlite\`).
  --trade-ids 거래_아이디 [거래_아이디 ...]
                        거래 아이디 목록을 지정합니다.
  --print-json          출력을 JSON 형식으로 인쇄합니다.

공통 인수:
  -v, --verbose         자세한 모드 (-vv로 더 많은 메시지, -vvv로 모든 메시지 표시).
  --no-color            하이퍼옵트 결과의 색상화를 비활성화합니다. 출력을 파일로 리디렉션하는 경우 유용할 수 있습니다.
  --logfile FILE, --log-file FILE
                        지정된 파일에 로그를 기록합니다. 특별한 값은 &#39;syslog&#39;, &#39;journald&#39;입니다. 자세한 내용은 문서를 참조하십시오.
  -V, --version         프로그램의 버전 번호를 표시하고 종료합니다.
  -c 경로, --config 경로
                        구성 파일 지정 (기본값:
                        \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
  -d 경로, --datadir 경로, --data-dir 경로
                        과거 백테스팅 데이터가 있는 디렉토리 경로.
  --userdir 경로, --user-data-dir 경로
                        사용자 데이터 디렉토리 경로.
</code></pre></div><h3 id="examples_4"> 예제 <a class="headerlink" href="#examples_4" title="영구 링크"> ¶ </a></h3><p> id가 2와 3인 거래를 json으로 인쇄합니다 </p><div class="highlight"><pre><code>freqtrade<span class="w"> </span>show-trades<span class="w"> </span>--db-url<span class="w"> </span>sqlite:///tradesv3.sqlite<span class="w"> </span>--trade-ids<span class="w"> </span><span class="m">2</span><span class="w"> </span><span class="m">3</span><span class="w"> </span>--print-json
</code></pre></div><h2 id="strategy-updater"> 전략 업데이트 도구 <a class="headerlink" href="#strategy-updater" title="영구 링크"> ¶ </a></h2><p> 나열된 전략 또는 전략 폴더 내의 모든 전략을 v3 호환으로 업데이트합니다. 명령이 --strategy-list 없이 실행되면 전략 폴더 내의 모든 전략이 변환됩니다. 원래 전략은 <code> user_data/strategies_orig_updater/ </code> 디렉토리에 계속 사용할 수 있습니다. </p><div class="admonition warning"><p class="admonition-title"> 변환 결과 </p><p> 전략 업데이트 도구는 &quot;최선의 노력&quot; 접근 방식으로 작동합니다. 변환 결과를 확인하고 검증하십시오. 또한 파이썬 포매터 (예: <code> black </code> )를 실행하여 결과를 올바르게 포맷하는 것을 권장합니다. </p></div><div class="highlight"><pre><code>사용법: freqtrade strategy-updater [-h] [-v] [--no-color] [--logfile FILE] [-V]
                                  [-c 경로] [-d 경로] [--userdir 경로]
                                  [--strategy-list STRATEGY_LIST [STRATEGY_LIST ...]]
                                  [--strategy-path 경로]
                                  [--recursive-strategy-search]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  --strategy-list STRATEGY_LIST [STRATEGY_LIST ...]
                        백테스트할 전략 목록을 공백으로 구분하여 제공합니다. 시간 프레임은 구성 또는 명령줄을 통해 설정해야 합니다. \`--export trades\`와 함께 사용할 때 전략 이름이 파일 이름에 삽입됩니다 (따라서 \`backtest-data.json\`은 \`backtest-data-SampleStrategy.json\`이 됩니다).
  --strategy-path 경로  추가 전략 검색 경로를 지정합니다.
  --recursive-strategy-search
                        전략 폴더에서 재귀적으로 전략을 검색합니다.

공통 인수:
  -v, --verbose         자세한 모드 (-vv로 더 많은 메시지, -vvv로 모든 메시지 표시).
  --no-color            하이퍼옵트 결과의 색상화를 비활성화합니다. 출력을 파일로 리디렉션하는 경우 유용할 수 있습니다.
  --logfile FILE, --log-file FILE
                        지정된 파일에 로그를 기록합니다. 특별한 값은 &#39;syslog&#39;, &#39;journald&#39;입니다. 자세한 내용은 문서를 참조하십시오.
  -V, --version         프로그램의 버전 번호를 표시하고 종료합니다.
  -c 경로, --config 경로
                        구성 파일 지정 (기본값:
                        \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
  -d 경로, --datadir 경로, --data-dir 경로
                        과거 백테스팅 데이터가 있는 디렉토리 경로.
  --userdir 경로, --user-data-dir 경로
                        사용자 데이터 디렉토리 경로.
</code></pre></div>`,119))]))}};export{h as default};
