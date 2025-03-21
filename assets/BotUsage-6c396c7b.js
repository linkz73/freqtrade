import{o as t,c as a,a as s}from"./index-1d9d7dc5.js";const r={class:"md-content__inner md-typeset"},d={__name:"BotUsage",setup(o){return(i,e)=>(t(),a("article",r,e[0]||(e[0]=[s(`<h1 id="start-the-bot"> 봇 시작하기 <a class="headerlink" href="#start-the-bot" title="영구 링크"> ¶ </a></h1><p>이 페이지는 봇의 다양한 매개변수와 실행 방법을 설명합니다.</p><div class="admonition note"><p class="admonition-title">참고</p><p><code>setup.sh</code>를 사용했다면, Freqtrade 명령어를 실행하기 전에 가상 환경을 활성화하는 것을 잊지 마세요 ( <code>source .venv/bin/activate</code>).</p></div><div class="admonition warning"><p class="admonition-title">정확한 시스템 시계</p><p>봇이 실행되는 시스템의 시계는 정확해야 하며, 거래소와의 통신 문제를 방지하기 위해 NTP 서버와 자주 동기화되어야 합니다.</p></div><h2 id="bot-commands"> 봇 명령어 <a class="headerlink" href="#bot-commands" title="영구 링크"> ¶ </a></h2><div class="highlight"><pre><code>사용법: freqtrade [-h] [-V]
                 {trade,create-userdir,new-config,show-config,new-strategy,download-data,convert-data,convert-trade-data,trades-to-ohlcv,list-data,backtesting,backtesting-show,backtesting-analysis,edge,hyperopt,hyperopt-list,hyperopt-show,list-exchanges,list-markets,list-pairs,list-strategies,list-hyperoptloss,list-freqaimodels,list-timeframes,show-trades,test-pairlist,convert-db,install-ui,plot-dataframe,plot-profit,webserver,strategy-updater,lookahead-analysis,recursive-analysis}
                 ...

무료 오픈 소스 암호화폐 거래 봇

위치 인수:
  {trade,create-userdir,new-config,show-config,new-strategy,download-data,convert-data,convert-trade-data,trades-to-ohlcv,list-data,backtesting,backtesting-show,backtesting-analysis,edge,hyperopt,hyperopt-list,hyperopt-show,list-exchanges,list-markets,list-pairs,list-strategies,list-hyperoptloss,list-freqaimodels,list-timeframes,show-trades,test-pairlist,convert-db,install-ui,plot-dataframe,plot-profit,webserver,strategy-updater,lookahead-analysis,recursive-analysis}
    trade               거래 모듈.
    create-userdir      사용자 데이터 디렉토리 생성.
    new-config          새 구성 생성
    show-config         구성 확인
    new-strategy        새 전략 생성
    download-data       백테스팅 데이터 다운로드.
    convert-data        캔들 (OHLCV) 데이터를 다른 형식으로 변환.
    convert-trade-data  거래 데이터를 다른 형식으로 변환.
    trades-to-ohlcv     거래 데이터를 OHLCV 데이터로 변환.
    list-data           다운로드한 데이터 나열.
    backtesting         백테스팅 모듈.
    backtesting-show    과거 백테스트 결과 표시
    backtesting-analysis
                        백테스트 분석 모듈.
    edge                엣지 모듈.
    hyperopt            하이퍼옵트 모듈.
    hyperopt-list       하이퍼옵트 결과 나열
    hyperopt-show       하이퍼옵트 결과 세부 정보 표시
    list-exchanges      사용 가능한 거래소 나열.
    list-markets        거래소의 시장 나열.
    list-pairs          거래소의 페어 나열.
    list-strategies     사용 가능한 전략 나열.
    list-hyperoptloss   사용 가능한 하이퍼옵트 손실 함수 나열.
    list-freqaimodels   사용 가능한 freqAI 모델 나열.
    list-timeframes     거래소의 사용 가능한 시간 프레임 나열.
    show-trades         거래 내역 표시.
    test-pairlist       페어리스트 구성 테스트.
    convert-db          데이터베이스를 다른 시스템으로 마이그레이션
    install-ui          FreqUI 설치
    plot-dataframe      지표와 함께 캔들 차트 그리기.
    plot-profit         수익을 보여주는 차트 생성.
    webserver           웹서버 모듈.
    strategy-updater    오래된 전략 파일을 현재 버전으로 업데이트
    lookahead-analysis  잠재적인 선행 바이어스 확인.
    recursive-analysis  잠재적인 재귀 공식 문제 확인.

옵션:
  -h, --help            도움말 메시지 표시 후 종료
  -V, --version         프로그램의 버전 번호를 표시하고 종료
</code></pre></div><h3 id="bot-trading-commands"> 봇 거래 명령어 <a class="headerlink" href="#bot-trading-commands" title="영구 링크"> ¶ </a></h3><div class="highlight"><pre><code>사용법: freqtrade trade [-h] [-v] [--no-color] [--logfile FILE] [-V] [-c PATH]
                       [-d PATH] [--userdir PATH] [-s NAME]
                       [--strategy-path PATH] [--recursive-strategy-search]
                       [--freqaimodel NAME] [--freqaimodel-path PATH]
                       [--db-url PATH] [--sd-notify] [--dry-run]
                       [--dry-run-wallet DRY_RUN_WALLET] [--fee FLOAT]

옵션:
  -h, --help            도움말 메시지 표시 후 종료
  --db-url PATH         거래 데이터베이스 URL 재정의. 사용자 정의 배포에 유용합니다.
                        (기본값: \`sqlite:///tradesv3.sqlite\` 라이브 실행 모드,
                        \`sqlite:///tradesv3.dryrun.sqlite\` 드라이런 모드).
  --sd-notify           systemd 서비스 관리자 알림.
  --dry-run             드라이런 강제 실행 (거래소 비밀정보 제거 및 거래 시뮬레이션).
  --dry-run-wallet DRY_RUN_WALLET, --starting-balance DRY_RUN_WALLET
                        시작 잔액, 백테스팅 / 하이퍼옵트 및 드라이런에 사용됩니다.
  --fee FLOAT           수수료 비율 지정. 거래 진입 및 종료 시 두 번 적용됩니다.

공통 인수:
  -v, --verbose         자세한 모드 (-vv로 더 많은 정보, -vvv로 모든 메시지 표시).
  --no-color            하이퍼옵트 결과의 색상화를 비활성화합니다. 출력을 파일로 리디렉션하는 경우 유용할 수 있습니다.
  --logfile FILE, --log-file FILE
                        지정된 파일에 로그를 기록합니다. 특별한 값은 &#39;syslog&#39;, &#39;journald&#39;입니다. 자세한 내용은 문서를 참조하세요.
  -V, --version         프로그램의 버전 번호를 표시하고 종료
  -c PATH, --config PATH
                        구성 파일 지정 (기본값: \`userdir/config.json\` 또는 \`config.json\` 중 존재하는 파일). 여러 --config 옵션을 사용할 수 있습니다. \`-\`로 설정하여 stdin에서 구성을 읽을 수 있습니다.
  -d PATH, --datadir PATH, --data-dir PATH
                        백테스팅 데이터가 있는 디렉토리 경로.
  --userdir PATH, --user-data-dir PATH
                        사용자 데이터 디렉토리 경로.

전략 인수:
  -s NAME, --strategy NAME
                        봇이 사용할 전략 클래스 이름 지정.
  --strategy-path PATH  추가 전략 검색 경로 지정.
  --recursive-strategy-search
                        전략 폴더에서 재귀적으로 전략 검색.
  --freqaimodel NAME    사용자 정의 freqaimodels 지정.
  --freqaimodel-path PATH
                        freqaimodels의 추가 검색 경로 지정.
</code></pre></div><h3 id="how-to-specify-which-configuration-file-be-used"> 어떤 구성 파일을 사용할지 지정하는 방법 <a class="headerlink" href="#how-to-specify-which-configuration-file-be-used" title="영구 링크"> ¶ </a></h3><p>봇은 명령줄 옵션 <code>-c/--config</code>를 통해 사용할 구성 파일을 선택할 수 있습니다:</p><div class="highlight"><pre><code>freqtrade trade -c path/far/far/away/config.json
</code></pre></div><p>기본적으로, 봇은 현재 작업 디렉토리에서 <code>config.json</code> 구성 파일을 로드합니다.</p><h3 id="how-to-use-multiple-configuration-files"> 여러 구성 파일을 사용하는 방법 <a class="headerlink" href="#how-to-use-multiple-configuration-files" title="영구 링크"> ¶ </a></h3><p>봇은 명령줄에서 여러 <code>-c/--config</code> 옵션을 지정하여 여러 구성 파일을 사용할 수 있습니다. 나중에 지정된 구성 파일에 정의된 구성 매개변수가 명령줄에서 이전에 지정된 구성 파일에 정의된 동일한 이름의 매개변수를 재정의합니다.</p><p>예를 들어, 키와 비밀을 포함한 별도의 구성 파일을 만들고, 드라이 모드에서 실행할 때 기본 구성 파일에 빈 키와 비밀 값을 지정할 수 있습니다 (드라이 모드에서는 실제로 필요하지 않음):</p><div class="highlight"><pre><code>freqtrade trade -c ./config.json
</code></pre></div><p>그리고 일반 라이브 거래 모드에서 실행할 때 두 구성 파일을 모두 지정합니다:</p><div class="highlight"><pre><code>freqtrade trade -c ./config.json -c path/to/secrets/keys.config.json
</code></pre></div><p>이 방법은 로컬 머신에서 적절한 파일 권한을 설정하여 실제 비밀을 포함한 파일을 숨기고, 프로젝트 문제나 인터넷에 구성 예제를 게시할 때 민감한 개인 데이터의 의도하지 않은 공개를 방지하는 데 도움이 될 수 있습니다.</p><p>이 기술에 대한 자세한 내용과 예제는 <a href="configuration.html">구성</a> 문서 페이지를 참조하세요.</p><h3 id="where-to-store-custom-data"> 사용자 정의 데이터를 저장할 위치 <a class="headerlink" href="#where-to-store-custom-data" title="영구 링크"> ¶ </a></h3><p>Freqtrade는 <code>freqtrade create-userdir --userdir someDirectory</code> 명령을 사용하여 사용자 데이터 디렉토리를 생성할 수 있습니다. 이 디렉토리는 다음과 같이 보입니다:</p><div class="highlight"><pre><code>user_data/
├── backtest_results
├── data
├── hyperopts
├── hyperopt_results
├── plot
└── strategies
</code></pre></div><p>구성에 &quot;user_data_dir&quot; 설정 항목을 추가하여 항상 이 디렉토리를 가리키도록 봇을 설정할 수 있습니다. 또는 모든 명령에 <code>--userdir</code>을 전달할 수 있습니다. 디렉토리가 존재하지 않으면 봇이 시작되지 않지만 필요한 하위 디렉토리를 생성합니다.</p><p>이 디렉토리에는 사용자 정의 전략, 사용자 정의 하이퍼옵트 및 하이퍼옵트 손실 함수, 백테스팅 역사 데이터 (백테스팅 명령 또는 다운로드 스크립트를 사용하여 다운로드한 데이터) 및 플롯 출력이 포함되어야 합니다.</p><p>전략의 변경 사항을 추적하기 위해 버전 관리를 사용하는 것이 좋습니다.</p><h3 id="how-to-use-strategy"><strong>--strategy</strong>를 사용하는 방법 <a class="headerlink" href="#how-to-use-strategy" title="영구 링크"> ¶ </a></h3><p>이 매개변수는 사용자 정의 전략 클래스를 로드할 수 있게 해줍니다. 봇 설치를 테스트하려면 <code>create-userdir</code> 하위 명령어로 설치된 <code>SampleStrategy</code>를 사용할 수 있습니다 (일반적으로 <code>user_data/strategy/sample_strategy.py</code>).</p><p>봇은 <code>user_data/strategies</code> 내에서 전략 파일을 검색합니다. 다른 디렉토리를 사용하려면 다음 섹션에서 <code>--strategy-path</code>에 대해 읽어보세요.</p><p>전략을 로드하려면 이 매개변수에 클래스 이름 (예: <code>CustomStrategy</code>)을 전달하세요.</p><p><strong>예:</strong> <code>user_data/strategies</code>에 <code>my_awesome_strategy.py</code> 파일이 있고, 이 파일에 <code>AwesomeStrategy</code>라는 전략 클래스가 있는 경우 이를 로드하려면:</p><div class="highlight"><pre><code>freqtrade trade --strategy AwesomeStrategy
</code></pre></div><p>봇이 전략 파일을 찾지 못하면 파일을 찾을 수 없는 이유 (파일을 찾을 수 없음 또는 코드 오류)를 오류 메시지로 표시합니다.</p><p>전략 파일에 대한 자세한 내용은 <a href="strategy-customization.html">전략 사용자 정의</a>를 참조하세요.</p><h3 id="how-to-use-strategy-path"><strong>--strategy-path</strong>를 사용하는 방법 <a class="headerlink" href="#how-to-use-strategy-path" title="영구 링크"> ¶ </a></h3><p>이 매개변수는 추가 전략 검색 경로를 추가할 수 있게 해주며, 기본 위치보다 먼저 확인됩니다 (전달된 경로는 디렉토리여야 합니다!):</p><div class="highlight"><pre><code>freqtrade trade --strategy AwesomeStrategy --strategy-path /some/directory
</code></pre></div><h4 id="how-to-install-a-strategy"> 전략을 설치하는 방법 <a class="headerlink" href="#how-to-install-a-strategy" title="영구 링크"> ¶ </a></h4><p>이것은 매우 간단합니다. 전략 파일을 <code>user_data/strategies</code> 디렉토리에 복사하거나 <code>--strategy-path</code>를 사용하세요. 그러면 봇이 이를 사용할 준비가 됩니다.</p><h3 id="how-to-use-db-url"><strong>--db-url</strong>을 사용하는 방법 <a class="headerlink" href="#how-to-use-db-url" title="영구 링크"> ¶ </a></h3><p>봇을 드라이런 모드에서 실행할 때 기본적으로 거래는 데이터베이스에 저장되지 않습니다. <code>--db-url</code>을 사용하여 봇의 동작을 DB에 저장할 수 있습니다. 이는 프로덕션 모드에서 사용자 정의 데이터베이스를 지정하는 데에도 사용할 수 있습니다. 예제 명령어:</p><div class="highlight"><pre><code>freqtrade trade -c config.json --db-url sqlite:///tradesv3.dry_run.sqlite
</code></pre></div><h2 id="next-step"> 다음 단계 <a class="headerlink" href="#next-step" title="영구 링크"> ¶ </a></h2><p>봇의 최적 전략은 시장 동향에 따라 시간이 지남에 따라 변경됩니다. 다음 단계는 <a href="strategy-customization.html">전략 사용자 정의</a>입니다.</p>`,44)])))}};export{d as default};
