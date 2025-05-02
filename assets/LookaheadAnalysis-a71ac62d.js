import{r as s,o as d,c as i,b as a,d as n,e as o,w as l,a as r}from"./index-a1bb88b6.js";const m={class:"md-content__inner md-typeset"},T={__name:"LookaheadAnalysis",setup(p){return(A,e)=>{const t=s("router-link");return d(),i("article",m,[e[5]||(e[5]=a("h1",{id:"lookahead-analysis"},[n(" 미래 데이터 참조 분석(Lookahead Analysis) "),a("a",{class:"headerlink",href:"#lookahead-analysis",title:"고정 링크"},"¶")],-1)),e[6]||(e[6]=a("p",null,"이 페이지에서는 전략이 미래 데이터를 부적절하게 참조하는지(Lookahead Bias) 검증하는 방법을 설명합니다.",-1)),e[7]||(e[7]=a("p",null,"미래 데이터 참조 여부를 확인하는 것은 모든 전략에서 매우 중요한 과제입니다. 백테스팅 과정에서 미래 데이터를 참조하는 편향이 쉽게 발생할 수 있지만, 이를 발견하기는 매우 어렵기 때문입니다.",-1)),e[8]||(e[8]=a("p",null,"백테스팅은 모든 타임스탬프를 한 번에 초기화하고 모든 지표를 처음에 계산합니다. 이로 인해 지표나 진입/청산 신호가 의도치 않게 미래 캔들의 데이터를 참조하여 백테스팅 결과가 왜곡될 수 있습니다.",-1)),a("p",null,[e[1]||(e[1]=n(" 미래 데이터 참조 분석을 위해서는 과거 데이터가 필요합니다. 분석하고자 하는 거래 쌍과 거래소의 데이터를 얻는 방법은 문서의 ")),o(t,{to:"data-download"},{default:l(()=>e[0]||(e[0]=[n("데이터 다운로드")])),_:1}),e[2]||(e[2]=n(" 섹션을 참조하세요. "))]),e[9]||(e[9]=a("p",null,"이 명령은 백테스팅을 기반으로 구축되었으며, 내부적으로 여러 백테스트를 연결하여 전략이 미래 데이터를 참조하는지 검증합니다. 이는 전략 코드 자체를 분석하는 것이 아니라, 결과를 비교하는 방식으로 이루어집니다. 분석 결과로는 지표 값의 변화나 전체 백테스트와 비교했을 때 진입/청산 시점의 이동 등이 포함됩니다.",-1)),a("p",null,[o(t,{to:"backtesting"},{default:l(()=>e[3]||(e[3]=[n("백테스팅")])),_:1}),e[4]||(e[4]=n(" 명령을 사용할 수 있습니다. 또한 FreqAI 전략의 미래 정보 선반영 분석도 지원합니다. "))]),e[10]||(e[10]=r(`<ul><li><code> --cache </code> 는 &quot;none&quot;으로 강제 설정됩니다. </li><li><code> --max-open-trades </code> 는 최소한 거래쌍의 수와 같거나 더 크게 설정됩니다. </li><li><code> --dry-run-wallet </code> 은 사실상 무한(10억)으로 설정됩니다. </li><li><code> --stake-amount </code> 는 고정된 10000(10k)으로 설정됩니다. </li><li><code> --enable-protections </code> 은 비활성화됩니다. </li></ul><p>이 설정은 사용자가 실수로 잘못된 긍정 결과를 생성하지 않도록 하기 위한 것입니다.</p><h2 id="lookahead-analysis-command-reference"> 미래 정보 선반영 분석 명령 참조 <a class="headerlink" href="#lookahead-analysis-command-reference" title="고정 링크">¶</a></h2><div class="highlight"><pre><code>사용법: freqtrade lookahead-analysis [-h] [-v] [--no-color] [--logfile FILE]
                                    [-V] [-c PATH] [-d PATH] [--userdir PATH]
                                    [-s NAME] [--strategy-path PATH]
                                    [--recursive-strategy-search]
                                    [--freqaimodel NAME]
                                    [--freqaimodel-path PATH] [-i TIMEFRAME]
                                    [--timerange TIMERANGE]
                                    [--data-format-ohlcv {json,jsongz,feather,parquet}]
                                    [--max-open-trades INT]
                                    [--stake-amount STAKE_AMOUNT]
                                    [--fee FLOAT] [-p PAIRS [PAIRS ...]]
                                    [--enable-protections]
                                    [--dry-run-wallet DRY_RUN_WALLET]
                                    [--timeframe-detail TIMEFRAME_DETAIL]
                                    [--strategy-list STRATEGY_LIST [STRATEGY_LIST ...]]
                                    [--export {none,trades,signals}]
                                    [--export-filename PATH]
                                    [--freqai-backtest-live-models]
                                    [--minimum-trade-amount INT]
                                    [--targeted-trade-amount INT]
                                    [--lookahead-analysis-exportfilename LOOKAHEAD_ANALYSIS_EXPORTFILENAME]

옵션:
  -h, --help            도움말 메시지를 표시하고 종료합니다.
  -i TIMEFRAME, --timeframe TIMEFRAME
                        타임프레임 지정 (\`1m\`, \`5m\`, \`30m\`, \`1h\`, \`1d\`).
  --timerange TIMERANGE
                        사용할 데이터의 타임레인지 지정.
  --data-format-ohlcv {json,jsongz,feather,parquet}
                        다운로드된 캔들(OHLCV) 데이터의 저장 형식.
                        (기본값: \`feather\`).
  --max-open-trades INT
                        \`max_open_trades\` 설정 값을 재정의.
  --stake-amount STAKE_AMOUNT
                        \`stake_amount\` 설정 값을 재정의.
  --fee FLOAT           수수료 비율 지정. 거래 진입 및 청산 시 두 번 적용됩니다.
  -p PAIRS [PAIRS ...], --pairs PAIRS [PAIRS ...]
                        이 거래쌍으로 명령을 제한합니다. 거래쌍은 공백으로 구분됩니다.
  --enable-protections, --enableprotections
                        백테스팅 보호 활성화. 백테스팅 속도가 상당히 느려지지만 구성된 보호를 포함합니다.
  --dry-run-wallet DRY_RUN_WALLET, --starting-balance DRY_RUN_WALLET
                        백테스팅/하이퍼옵트 및 드라이런에 사용되는 시작 잔액.
  --timeframe-detail TIMEFRAME_DETAIL
                        백테스팅의 세부 타임프레임 지정 (\`1m\`, \`5m\`, \`30m\`, \`1h\`, \`1d\`).
  --strategy-list STRATEGY_LIST [STRATEGY_LIST ...]
                        백테스트할 전략의 공백으로 구분된 목록 제공. ...
			...existing code...</code></pre></div><div class="admonition note"><p> 위 출력은 옵션으로 축소되었습니다 <code> lookahead-analysis </code> 일반 백테스팅 명령에 추가됩니다. </p></div><h3 id="summary"> 요약 <a class="headerlink" href="#summary" title="고정 링크">¶</a></h3><p>미래 정보 선반영 분석을 통해 주어진 전략의 미래 정보 사용 편향을 확인합니다. 미래 정보 사용 편향은 백테스트가 미래 캔들의 데이터를 사용하여 백테스트를 넘어서는 유효성을 가지지 않으며 백테스트에 대한 잘못된 희망을 제공하는 것을 의미합니다.</p><h3 id="introduction"> 소개 <a class="headerlink" href="#introduction" title="고정 링크">¶</a></h3><p>프로그래머가 모르는 사이에 많은 전략이 미래 정보 사용 편향에 빠졌습니다.</p><p>모든 백테스트는 처음에 모든 타임스탬프를 포함한 전체 데이터프레임을 채웁니다. 프로그래머가 내부적으로 어떻게 작동하는지 신경 쓰지 않거나 모르는 경우(때로는 정말 찾기 어려울 수 있음) 미래를 참조하여 전략을 훌륭하게 만들지만 현실적이지 않게 됩니다.</p><p>이 명령은 앞서 언급한 미래 정보 사용 편향의 형태로 유효성을 검증하려고 만들어졌습니다.</p><h3 id="how-does-the-command-work"> 명령은 어떻게 작동하나요? <a class="headerlink" href="#how-does-the-command-work" title="고정 링크">¶</a></h3><p> 먼저 모든 거래 쌍에 대해 기준이 되는 백테스트를 실행하여 지표와 진입/청산 시점의 기준선을 생성합니다. 백테스트가 완료되면 <code>minimum-trade-amount</code> 조건이 충족되는지 확인하고, 충족되지 않으면 해당 전략에 대한 미래 데이터 참조 분석을 중단합니다. </p><p>기준선이 설정된 후에는 각각의 진입 및 청산 시점에 대해 추가 검증 실행을 수행합니다. 검증용 백테스트가 완료되면 지표와 신호(진입 또는 청산)를 비교하여 미래 데이터 참조 여부를 판단합니다. 모든 신호가 검증되거나 미래 데이터 참조가 발견되면 결과를 테이블 형태로 제공합니다.</p><h3 id="caveats"> 주의사항 <a class="headerlink" href="#caveats" title="고정 링크">¶</a></h3><ul><li><code>lookahead-analysis</code> 명령은 실제로 실행되어 검증된 거래만 분석할 수 있습니다. 전략에 여러 종류의 신호가 있는 경우, 모든 신호가 최소 한 번 이상 발생하도록 적절한 매개변수를 설정하는 것은 사용자의 책임입니다. 실행되지 않은 신호는 검증할 수 없으며, 이로 인해 거짓 음성(전략이 미래 데이터를 참조하지 않는다고 잘못 판단)이 발생할 수 있습니다. </li><li><code>lookahead-analysis</code> 명령은 백테스팅과 동일한 설정에 접근할 수 있습니다. 포지션 스태킹과 같은 설정은 신중하게 사용해야 합니다. 이러한 설정을 사용할 경우, <code>max_open_trades</code> 값과 지갑 잔고가 충분한지 반드시 확인하세요. </li><li> 결과 테이블의 <code>biased_indicators</code> 열은 <code>set_freqai_targets()</code> 에서 정의된 FreqAI 대상 지표를 잘못 미래 데이터 참조로 표시할 수 있습니다. 이러한 지표들은 실제로는 문제가 없으므로 무시해도 됩니다. </li></ul>`,16))])}}};export{T as default};
