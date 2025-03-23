import{r as u,o as s,c as i,b as t,d as r,e as d,w as o,a as e}from"./index-f254d819.js";const g={class:"md-content__inner md-typeset"},f={__name:"FreqAIParameterTable",setup(b){return(a,l)=>{const n=u("router-link");return s(),i("article",g,[l[145]||(l[145]=t("h1",{id:"parameter-table"},[r(" 파라미터 테이블 "),t("a",{class:"headerlink",href:"#parameter-table",title:"영구 링크"}," ¶ ")],-1)),l[146]||(l[146]=t("p",null,[r(" 아래 테이블은 FreqAI에서 사용 가능한 모든 설정 파라미터를 나열합니다. 일부 파라미터는 "),t("code",null," config_examples/config_freqai.example.json "),r(" 에 예시로 제공됩니다. ")],-1)),l[147]||(l[147]=t("p",null,[r(" 필수 파라미터는 "),t("strong",null," 필수 "),r(" 로 표시되며, 제안된 방법 중 하나로 설정해야 합니다. ")],-1)),l[148]||(l[148]=t("h3",{id:"general-configuration-parameters"},[r(" 일반 설정 파라미터 "),t("a",{class:"headerlink",href:"#general-configuration-parameters",title:"영구 링크"}," ¶ ")],-1)),t("table",null,[l[43]||(l[43]=t("thead",null,[t("tr",null,[t("th",null,"파라미터"),t("th",null,"설명")])],-1)),t("tbody",null,[l[31]||(l[31]=t("tr",null,[t("td"),t("td",null,[t("strong",null,[t("code",null," config.freqai "),r(" 트리 내의 일반 설정 파라미터 ")])])],-1)),l[32]||(l[32]=t("tr",null,[t("td",null,[t("code",null," freqai ")]),t("td",null,[t("strong",null," 필수. "),t("br"),r(" FreqAI를 제어하기 위한 모든 파라미터를 포함하는 상위 딕셔너리입니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 딕셔너리. ")])],-1)),l[33]||(l[33]=t("tr",null,[t("td",null,[t("code",null," train_period_days ")]),t("td",null,[t("strong",null," 필수. "),t("br"),r(" 훈련 데이터에 사용할 일 수(슬라이딩 윈도우의 너비). "),t("br"),t("strong",null," 데이터 타입: "),r(" 양의 정수. ")])],-1)),t("tr",null,[l[12]||(l[12]=t("td",null,[t("code",null," backtest_period_days ")],-1)),t("td",null,[l[1]||(l[1]=t("strong",null," 필수. ",-1)),l[2]||(l[2]=t("br",null,null,-1)),l[3]||(l[3]=r(" 훈련된 모델로부터 추론할 일 수. 위에서 정의된 ")),l[4]||(l[4]=t("code",null," train_period_days ",-1)),l[5]||(l[5]=r(" 윈도우를 슬라이딩하고 백테스팅 중 모델을 재훈련합니다(자세한 내용은 ")),d(n,{to:"freqai-running"},{default:o(()=>l[0]||(l[0]=[r(" 여기 ")])),_:1}),l[6]||(l[6]=r(" 참조). 소수점 단위의 일 수도 가능하지만, 제공된 ")),l[7]||(l[7]=t("code",null," timerange ",-1)),l[8]||(l[8]=r(" 가 이 숫자로 나뉘어 백테스트를 완료하는 데 필요한 훈련 횟수를 산출합니다. ")),l[9]||(l[9]=t("br",null,null,-1)),l[10]||(l[10]=t("strong",null," 데이터 타입: ",-1)),l[11]||(l[11]=r(" 실수. "))])]),l[34]||(l[34]=t("tr",null,[t("td",null,[t("strong",null," 필수. "),t("br"),r(" 현재 모델에 대한 고유 ID입니다. 모델이 디스크에 저장된 경우, "),t("code",null," identifier "),r(" 를 사용하여 특정 사전 훈련된 모델/데이터를 다시 로드할 수 있습니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 문자열. ")])],-1)),l[35]||(l[35]=t("tr",null,[t("td",null,[t("code",null," live_retrain_hours ")]),t("td",null,[r(" 건조/실시간 실행 중 재훈련 주기. "),t("br"),t("strong",null," 데이터 타입: "),r(" 0보다 큰 실수. "),t("br"),r(" 기본값: "),t("code",null," 0 "),r(" (모델은 가능한 한 자주 재훈련됩니다). ")])],-1)),l[36]||(l[36]=t("tr",null,[t("td",null,[t("code",null," expiration_hours ")]),t("td",null,[r(" 모델이 "),t("code",null," expiration_hours "),r(" 이상 오래된 경우 예측을 피합니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 양의 정수. "),t("br"),r(" 기본값: "),t("code",null," 0 "),r(" (모델은 만료되지 않습니다). ")])],-1)),l[37]||(l[37]=t("tr",null,[t("td",null,[t("code",null," purge_old_models ")]),t("td",null,[r(" 디스크에 유지할 모델 수(백테스팅과는 관련 없음). 기본값은 2로, 이는 건조/실시간 실행이 디스크에 최신 2개의 모델을 유지함을 의미합니다. 0으로 설정하면 모든 모델을 유지합니다. 이 매개변수는 이전 버전과의 호환성을 유지하기 위해 부울 값도 허용합니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 정수. "),t("br"),r(" 기본값: "),t("code",null," 2 "),r(" . ")])],-1)),l[38]||(l[38]=t("tr",null,[t("td",null,[t("code",null," save_backtest_models ")]),t("td",null,[r(" 백테스팅 실행 시 모델을 디스크에 저장합니다. 백테스팅은 예측 데이터를 저장하고 이를 후속 실행에서 직접 재사용함으로써 가장 효율적으로 작동합니다(진입/종료 파라미터를 조정하려는 경우). 백테스팅 모델을 디스크에 저장하면 동일한 모델 "),t("code",null," identifier "),r(" 로 건조/실시간 인스턴스를 시작하는 데 동일한 모델 파일을 사용할 수 있습니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 부울. "),t("br"),r(" 기본값: "),t("code",null," False "),r(" (모델이 저장되지 않음). ")])],-1)),t("tr",null,[l[19]||(l[19]=t("td",null,[t("code",null," fit_live_predictions_candles ")],-1)),t("td",null,[l[14]||(l[14]=r(" 예측 데이터에서 타겟(레이블) 통계를 계산하는 데 사용할 과거 캔들 수를 지정합니다. 훈련 데이터셋 대신 사용됩니다(자세한 내용은 ")),d(n,{to:"freqai-configuration"},{default:o(()=>l[13]||(l[13]=[r(" 여기 ")])),_:1}),l[15]||(l[15]=r(" 참조). ")),l[16]||(l[16]=t("br",null,null,-1)),l[17]||(l[17]=t("strong",null," 데이터 타입: ",-1)),l[18]||(l[18]=r(" 양의 정수. "))])]),t("tr",null,[l[30]||(l[30]=t("td",null,[t("code",null," continual_learning ")],-1)),t("td",null,[l[21]||(l[21]=r(" 가장 최근에 훈련된 모델의 최종 상태를 새 모델의 시작점으로 사용하여 점진적 학습을 허용합니다(자세한 내용은 ")),d(n,{to:"freqai-running"},{default:o(()=>l[20]||(l[20]=[r(" 여기 ")])),_:1}),l[22]||(l[22]=r(" 참조). 현재로서는 점진적 학습에 대한 단순한 접근 방식이며, 시장이 모델에서 멀어질 때 과적합/지역 최소값에 갇힐 가능성이 높습니다. 이 기능은 주로 실험 목적으로 제공되며, 암호화폐 시장과 같은 혼란스러운 시스템에서 점진적 학습의 성숙한 접근 방식을 준비하기 위해 마련되었습니다. ")),l[23]||(l[23]=t("br",null,null,-1)),l[24]||(l[24]=t("strong",null," 데이터 타입: ",-1)),l[25]||(l[25]=r(" 부울. ")),l[26]||(l[26]=t("br",null,null,-1)),l[27]||(l[27]=r(" 기본값: ")),l[28]||(l[28]=t("code",null," False ",-1)),l[29]||(l[29]=r(" . "))])]),l[39]||(l[39]=t("tr",null,[t("td",null,[t("code",null," write_metrics_to_disk ")]),t("td",null,[r(" 훈련 시간, 추론 시간 및 CPU 사용량을 JSON 파일로 수집합니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 부울. "),t("br"),r(" 기본값: "),t("code",null," False ")])],-1)),l[40]||(l[40]=t("tr",null,[t("td",null,[t("code",null," data_kitchen_thread_count ")]),t("td",null,[r(" 데이터 처리(이상치 처리, 정규화 등)에 사용할 스레드 수를 지정합니다. 이는 훈련에 사용되는 스레드 수에는 영향을 미치지 않습니다. 사용자가 설정하지 않으면(기본값), FreqAI는 최대 스레드 수 - 2를 사용합니다(1개의 물리적 코어를 Freqtrade 봇 및 FreqUI에 사용 가능하도록 남겨둠). "),t("br"),t("strong",null," 데이터 타입: "),r(" 양의 정수. ")])],-1)),l[41]||(l[41]=t("tr",null,[t("td",null,[t("code",null," activate_tensorboard ")]),t("td",null,[r(' Tensorboard를 활성화할지 여부를 나타냅니다(현재 강화 학습, XGBoost, Catboost 및 PyTorch 모듈에서 지원). Tensorboard를 사용하려면 Torch가 설치되어 있어야 하며, 이는 Torch/RL 도커 이미지를 사용하거나 Torch 설치 여부에 대한 질문에 "예"로 답해야 합니다. '),t("br"),t("strong",null," 데이터 타입: "),r(" 부울. "),t("br"),r(" 기본값: "),t("code",null," True "),r(" . ")])],-1)),l[42]||(l[42]=t("tr",null,[t("td",null,[t("code",null," wait_for_training_iteration_on_reload ")]),t("td",null,[r(" /reload 또는 ctrl-c를 사용할 때, 현재 훈련 반복이 완료될 때까지 기다린 후 우아하게 종료합니다. "),t("code",null," False "),r(" 로 설정하면 FreqAI는 현재 훈련 반복을 중단하여 더 빠르게 종료할 수 있지만, 현재 훈련 반복을 잃게 됩니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 부울. "),t("br"),r(" 기본값: "),t("code",null," True "),r(" . ")])],-1))])]),l[149]||(l[149]=t("h3",{id:"feature-parameters"},[r(" 특징 파라미터 "),t("a",{class:"headerlink",href:"#feature-parameters",title:"영구 링크"}," ¶ ")],-1)),t("table",null,[l[127]||(l[127]=t("thead",null,[t("tr",null,[t("th",null,"파라미터"),t("th",null,"설명")])],-1)),t("tbody",null,[l[115]||(l[115]=t("tr",null,[t("td"),t("td",null,[t("strong",null,[t("code",null," freqai.feature_parameters "),r(" 하위 딕셔너리 내의 특징 파라미터 ")])])],-1)),t("tr",null,[l[50]||(l[50]=t("td",null,[t("code",null," feature_parameters ")],-1)),t("td",null,[l[45]||(l[45]=r(" 특징 세트를 생성하는 데 사용되는 파라미터를 포함하는 딕셔너리입니다. 자세한 내용과 예시는 ")),d(n,{to:"freqai-feature-engineering"},{default:o(()=>l[44]||(l[44]=[r(" 여기 ")])),_:1}),l[46]||(l[46]=r(" 에서 확인할 수 있습니다. ")),l[47]||(l[47]=t("br",null,null,-1)),l[48]||(l[48]=t("strong",null," 데이터 타입: ",-1)),l[49]||(l[49]=r(" 딕셔너리. "))])]),l[116]||(l[116]=t("tr",null,[t("td",null,[t("code",null," include_timeframes ")]),t("td",null,[t("code",null," feature_engineering_expand_*() "),r(" 내의 모든 지표가 생성될 시간 프레임 목록입니다. 이 목록은 기본 지표 데이터셋에 특징으로 추가됩니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 시간 프레임(문자열)의 리스트. ")])],-1)),l[117]||(l[117]=t("tr",null,[t("td",null,[t("code",null," include_corr_pairlist ")]),t("td",null,[r(" FreqAI가 모든 "),t("code",null," pair_whitelist "),r(" 코인에 추가 특징으로 추가할 상관된 코인의 리스트입니다. "),t("code",null," feature_engineering_expand_*() "),r(" 내에서 설정된 모든 지표는 각 상관된 코인에 대해 생성됩니다. 상관된 코인의 특징은 기본 지표 데이터셋에 추가됩니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 자산(문자열)의 리스트. ")])],-1)),l[118]||(l[118]=t("tr",null,[t("td",null,[t("code",null," label_period_candles ")]),t("td",null,[r(" 레이블이 생성될 미래의 캔들 수를 지정합니다. 이는 "),t("code",null," set_freqai_targets() "),r(" 에서 사용할 수 있습니다(자세한 사용법은 "),t("code",null," templates/FreqaiExampleStrategy.py "),r(" 참조). 이 파라미터는 반드시 필요하지는 않으며, 사용자 정의 레이블을 생성하고 이 파라미터를 사용할지 여부를 선택할 수 있습니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 양의 정수. ")])],-1)),l[119]||(l[119]=t("tr",null,[t("td",null,[t("code",null," include_shifted_candles ")]),t("td",null,[r(" 이전 캔들의 특징을 후속 캔들에 추가하여 과거 정보를 추가합니다. 사용 시, FreqAI는 "),t("code",null," include_shifted_candles "),r(" 이전 캔들의 모든 특징을 복제하고 이동하여 후속 캔들에서 사용할 수 있도록 합니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 양의 정수. ")])],-1)),t("tr",null,[l[57]||(l[57]=t("td",null,[t("code",null," weight_factor ")],-1)),t("td",null,[l[52]||(l[52]=r(" 데이터의 최신성에 따라 훈련 데이터 포인트에 가중치를 부여합니다(자세한 내용은 ")),d(n,{to:"freqai-feature-engineering"},{default:o(()=>l[51]||(l[51]=[r(" 여기 ")])),_:1}),l[53]||(l[53]=r(" 참조). ")),l[54]||(l[54]=t("br",null,null,-1)),l[55]||(l[55]=t("strong",null," 데이터 타입: ",-1)),l[56]||(l[56]=r(" 양의 실수(일반적으로 < 1). "))])]),t("tr",null,[l[73]||(l[73]=t("td",null,[t("code",null," indicator_max_period_candles ")],-1)),t("td",null,[l[59]||(l[59]=t("strong",null," 더 이상 사용되지 않음 (#7325) ",-1)),l[60]||(l[60]=r(" . 대신 ")),l[61]||(l[61]=t("code",null," startup_candle_count ",-1)),l[62]||(l[62]=r(" 가 사용되며, 이는 ")),d(n,{to:"freqai-configuration"},{default:o(()=>l[58]||(l[58]=[r(" 전략 ")])),_:1}),l[63]||(l[63]=r(" 에서 설정됩니다. ")),l[64]||(l[64]=t("code",null," startup_candle_count ",-1)),l[65]||(l[65]=r(" 는 시간 프레임과 독립적이며, 지표 생성에 사용되는 최대 ")),l[66]||(l[66]=t("em",null," 기간 ",-1)),l[67]||(l[67]=r(" 을 정의합니다. FreqAI는 이 파라미터와 ")),l[68]||(l[68]=t("code",null," include_time_frames ",-1)),l[69]||(l[69]=r(" 내의 최대 시간 프레임을 사용하여 첫 번째 데이터 포인트에 NaN이 포함되지 않도록 다운로드할 데이터 포인트 수를 계산합니다. ")),l[70]||(l[70]=t("br",null,null,-1)),l[71]||(l[71]=t("strong",null," 데이터 타입: ",-1)),l[72]||(l[72]=r(" 양의 정수. "))])]),l[120]||(l[120]=t("tr",null,[t("td",null,[t("code",null," indicator_periods_candles ")]),t("td",null,[r(" 지표를 계산할 기간. 지표는 기본 지표 데이터셋에 추가됩니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 양의 정수 리스트. ")])],-1)),t("tr",null,[l[84]||(l[84]=t("td",null,[t("code",null," principal_component_analysis ")],-1)),t("td",null,[l[75]||(l[75]=r(" 주성분 분석을 사용하여 데이터 세트의 차원을 자동으로 줄입니다. 작동 방식에 대한 자세한 내용은 ")),d(n,{to:"freqai-feature-engineering"},{default:o(()=>l[74]||(l[74]=[r(" 여기 ")])),_:1}),l[76]||(l[76]=r(" 를 참조하세요. ")),l[77]||(l[77]=t("br",null,null,-1)),l[78]||(l[78]=t("strong",null," 데이터 타입: ",-1)),l[79]||(l[79]=r(" 부울. ")),l[80]||(l[80]=t("br",null,null,-1)),l[81]||(l[81]=r(" 기본값: ")),l[82]||(l[82]=t("code",null," False ",-1)),l[83]||(l[83]=r(" . "))])]),l[121]||(l[121]=t("tr",null,[t("td",null,[t("code",null," plot_feature_importances ")]),t("td",null,[r(" 각 모델에 대해 상위/하위 "),t("code",null," plot_feature_importances "),r(" 수의 특징에 대한 중요도 플롯을 생성합니다. 플롯은 "),t("code",null," user_data/models/<identifier>/sub-train-<COIN>_<timestamp>.html "),r(" 에 저장됩니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 정수. "),t("br"),r(" 기본값: "),t("code",null," 0 "),r(" . ")])],-1)),t("tr",null,[l[91]||(l[91]=t("td",null,[t("code",null," DI_threshold ")],-1)),t("td",null,[l[86]||(l[86]=r(" 0보다 큰 값으로 설정하면 이상치 감지를 위한 비유사성 지수를 활성화합니다. 작동 방식에 대한 자세한 내용은 ")),d(n,{to:"freqai-feature-engineering"},{default:o(()=>l[85]||(l[85]=[r(" 여기 ")])),_:1}),l[87]||(l[87]=r(" 를 참조하세요. ")),l[88]||(l[88]=t("br",null,null,-1)),l[89]||(l[89]=t("strong",null," 데이터 타입: ",-1)),l[90]||(l[90]=r(" 양의 실수(일반적으로 < 1). "))])]),t("tr",null,[l[98]||(l[98]=t("td",null,[t("code",null," use_SVM_to_remove_outliers ")],-1)),t("td",null,[l[93]||(l[93]=r(" 훈련 데이터셋 및 들어오는 데이터 포인트에서 이상치를 감지하고 제거하기 위해 서포트 벡터 머신을 훈련합니다. 작동 방식에 대한 자세한 내용은 ")),d(n,{to:"freqai-feature-engineering"},{default:o(()=>l[92]||(l[92]=[r(" 여기 ")])),_:1}),l[94]||(l[94]=r(" 를 참조하세요. ")),l[95]||(l[95]=t("br",null,null,-1)),l[96]||(l[96]=t("strong",null," 데이터 타입: ",-1)),l[97]||(l[97]=r(" 부울. "))])]),t("tr",null,[l[107]||(l[107]=t("td",null,[t("code",null," svm_params ")],-1)),t("td",null,[l[100]||(l[100]=r(" Sklearn의 ")),l[101]||(l[101]=t("code",null," SGDOneClassSVM() ",-1)),l[102]||(l[102]=r(" 에서 사용할 수 있는 모든 파라미터. 일부 선택 파라미터에 대한 자세한 내용은 ")),d(n,{to:"freqai-feature-engineering"},{default:o(()=>l[99]||(l[99]=[r(" 여기 ")])),_:1}),l[103]||(l[103]=r(" 를 참조하세요. ")),l[104]||(l[104]=t("br",null,null,-1)),l[105]||(l[105]=t("strong",null," 데이터 타입: ",-1)),l[106]||(l[106]=r(" 딕셔너리. "))])]),t("tr",null,[l[114]||(l[114]=t("td",null,[t("code",null," use_DBSCAN_to_remove_outliers ")],-1)),t("td",null,[l[109]||(l[109]=r(" DBSCAN 알고리즘을 사용하여 데이터를 클러스터링하고 훈련 및 예측 데이터에서 이상치를 제거합니다. 작동 방식에 대한 자세한 내용은 ")),d(n,{to:"freqai-feature-engineering"},{default:o(()=>l[108]||(l[108]=[r(" 여기 ")])),_:1}),l[110]||(l[110]=r(" 를 참조하세요. ")),l[111]||(l[111]=t("br",null,null,-1)),l[112]||(l[112]=t("strong",null," 데이터 타입: ",-1)),l[113]||(l[113]=r(" 부울. "))])]),l[122]||(l[122]=t("tr",null,[t("td",null,[t("code",null," noise_standard_deviation ")]),t("td",null,[r(" 설정된 경우, FreqAI는 과적합을 방지하기 위해 훈련 특징에 노이즈를 추가합니다. FreqAI는 "),t("code",null," noise_standard_deviation "),r(" 의 표준 편차를 가진 가우시안 분포에서 무작위 편차를 생성하여 모든 데이터 포인트에 추가합니다. "),t("code",null," noise_standard_deviation "),r(" 는 정규화된 공간에 상대적으로 유지되어야 하며, 즉 -1과 1 사이여야 합니다. 다른 말로 하면, FreqAI의 데이터는 항상 -1과 1 사이로 정규화되므로, "),t("code",null," noise_standard_deviation: 0.05 "),r(" 는 데이터의 32%가 2.5% 이상 무작위로 증가/감소하는 결과를 초래합니다(즉, 첫 번째 표준 편차 내에 있는 데이터의 비율). "),t("br"),t("strong",null," 데이터 타입: "),r(" 정수. "),t("br"),r(" 기본값: "),t("code",null," 0 "),r(" . ")])],-1)),l[123]||(l[123]=t("tr",null,[t("td",null,[t("code",null," outlier_protection_percentage ")]),t("td",null,[r(" 이상치 감지 방법이 너무 많은 데이터를 버리지 않도록 방지합니다. SVM 또는 DBSCAN에 의해 이상치로 감지된 포인트가 "),t("code",null," outlier_protection_percentage "),r(" % 이상인 경우, FreqAI는 경고 메시지를 기록하고 이상치 감지를 무시합니다. 즉, 원본 데이터셋이 그대로 유지됩니다. 이상치 보호가 활성화되면 훈련 데이터셋을 기반으로 예측이 이루어지지 않습니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 실수. "),t("br"),r(" 기본값: "),t("code",null," 30 "),r(" . ")])],-1)),l[124]||(l[124]=t("tr",null,[t("td",null,[t("code",null," reverse_train_test_order ")]),t("td",null,[r(" 특징 데이터셋을 분할하고 최신 데이터 분할을 훈련에 사용하고, 과거 데이터 분할을 테스트에 사용합니다. 이를 통해 모델이 최신 데이터 포인트까지 훈련되도록 하면서 과적합을 방지할 수 있습니다. 그러나 이 파라미터의 비정통적인 특성을 이해한 후에 사용하는 것이 좋습니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 부울. "),t("br"),r(" 기본값: "),t("code",null," False "),r(" (반전 없음). ")])],-1)),l[125]||(l[125]=t("tr",null,[t("td",null,[t("code",null," shuffle_after_split ")]),t("td",null,[r(" 데이터를 훈련 및 테스트 세트로 분할한 후, 각 세트를 개별적으로 섞습니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 부울. "),t("br"),r(" 기본값: "),t("code",null," False "),r(" . ")])],-1)),l[126]||(l[126]=t("tr",null,[t("td",null,[t("code",null," buffer_train_data_candles ")]),t("td",null,[r(" 지표가 채워진 후 훈련 데이터의 시작과 끝을 잘라냅니다. 주요 예제 사용법은 최대값과 최소값을 예측할 때, argrelextrema 함수는 타임레인지의 가장자리에서 최대값/최소값을 알 수 없습니다. 모델 정확도를 높이기 위해 전체 타임레인지에서 argrelextrema를 계산한 후 이 함수를 사용하여 가장자리(버퍼)를 커널로 잘라내는 것이 좋습니다. 다른 경우에는 타겟이 이동된 가격 움직임으로 설정된 경우, 타임레인지 끝의 이동된 캔들은 NaN이 되며 FreqAI는 자동으로 훈련 데이터셋에서 이를 잘라냅니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 정수. "),t("br"),r(" 기본값: "),t("code",null," 0 "),r(" . ")])],-1))])]),l[150]||(l[150]=e('<h3 id="data-split-parameters"> 데이터 분할 파라미터 <a class="headerlink" href="#data-split-parameters" title="영구 링크"> ¶ </a></h3><table><thead><tr><th>파라미터</th><th>설명</th></tr></thead><tbody><tr><td></td><td><strong><code> freqai.data_split_parameters </code> 하위 딕셔너리 내의 데이터 분할 파라미터 </strong></td></tr><tr><td><code> data_split_parameters </code></td><td> scikit-learn의 <code> test_train_split() </code> 에서 사용할 수 있는 추가 파라미터를 포함합니다. 자세한 내용은 <a href="https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html"> 여기 </a> (외부 웹사이트)에서 확인할 수 있습니다. <br><strong> 데이터 타입: </strong> 딕셔너리. </td></tr><tr><td><code> test_size </code></td><td> 훈련 대신 테스트에 사용할 데이터의 비율. <br><strong> 데이터 타입: </strong> 1보다 작은 양의 실수. </td></tr><tr><td><code> shuffle </code></td><td> 훈련 중에 훈련 데이터 포인트를 섞습니다. 일반적으로 시계열 예측에서 데이터의 시간 순서를 제거하지 않기 위해 <code> False </code> 로 설정됩니다. <br><strong> 데이터 타입: </strong> 부울. <br> 기본값: <code> False </code> . </td></tr></tbody></table><h3 id="model-training-parameters"> 모델 훈련 파라미터 <a class="headerlink" href="#model-training-parameters" title="영구 링크"> ¶ </a></h3>',3)),t("table",null,[l[144]||(l[144]=t("thead",null,[t("tr",null,[t("th",null,"파라미터"),t("th",null,"설명")])],-1)),t("tbody",null,[l[140]||(l[140]=t("tr",null,[t("td"),t("td",null,[t("strong",null,[t("code",null," freqai.model_training_parameters "),r(" 하위 딕셔너리 내의 모델 훈련 파라미터 ")])])],-1)),t("tr",null,[l[139]||(l[139]=t("td",null,[t("code",null," model_training_parameters ")],-1)),t("td",null,[l[129]||(l[129]=r(" 선택한 모델 라이브러리에서 사용할 수 있는 모든 파라미터를 포함하는 유연한 딕셔너리입니다. 예를 들어, ")),l[130]||(l[130]=t("code",null," LightGBMRegressor ",-1)),l[131]||(l[131]=r(" 를 사용하는 경우, 이 딕셔너리는 ")),l[132]||(l[132]=t("code",null," LightGBMRegressor ",-1)),l[133]||(l[133]=t("a",{href:"https://lightgbm.readthedocs.io/en/latest/pythonapi/lightgbm.LGBMRegressor.html"}," 여기 ",-1)),l[134]||(l[134]=r(" (외부 웹사이트)에서 사용할 수 있는 모든 파라미터를 포함할 수 있습니다. 다른 모델을 선택한 경우, 이 딕셔너리는 해당 모델의 모든 파라미터를 포함할 수 있습니다. 현재 사용 가능한 모델 목록은 ")),d(n,{to:"freqai-configuration"},{default:o(()=>l[128]||(l[128]=[r(" 여기 ")])),_:1}),l[135]||(l[135]=r(" 에서 확인할 수 있습니다. ")),l[136]||(l[136]=t("br",null,null,-1)),l[137]||(l[137]=t("strong",null," 데이터 타입: ",-1)),l[138]||(l[138]=r(" 딕셔너리. "))])]),l[141]||(l[141]=t("tr",null,[t("td",null,[t("code",null," n_estimators ")]),t("td",null,[r(" 모델 훈련 시 피팅할 부스팅 트리의 수. "),t("br"),t("strong",null," 데이터 타입: "),r(" 정수. ")])],-1)),l[142]||(l[142]=t("tr",null,[t("td",null,[t("code",null," learning_rate ")]),t("td",null,[r(" 모델 훈련 중 부스팅 학습률. "),t("br"),t("strong",null," 데이터 타입: "),r(" 실수. ")])],-1)),l[143]||(l[143]=t("tr",null,[t("td",null,[t("code",null," n_jobs "),r(" , "),t("code",null," thread_count "),r(" , "),t("code",null," task_type ")]),t("td",null,[r(" 병렬 처리 및 "),t("code",null," task_type "),r(" ( "),t("code",null," gpu "),r(" 또는 "),t("code",null," cpu "),r(" )을 위한 스레드 수를 설정합니다. 다른 모델 라이브러리는 다른 파라미터 이름을 사용합니다. "),t("br"),t("strong",null," 데이터 타입: "),r(" 실수. ")])],-1))])]),l[151]||(l[151]=e('<h3 id="reinforcement-learning-parameters"> 강화 학습 파라미터 <a class="headerlink" href="#reinforcement-learning-parameters" title="영구 링크"> ¶ </a></h3><table><thead><tr><th>파라미터</th><th>설명</th></tr></thead><tbody><tr><td></td><td><strong><code> freqai.rl_config </code> 하위 딕셔너리 내의 강화 학습 파라미터 </strong></td></tr><tr><td><code> rl_config </code></td><td> 강화 학습 모델을 제어하기 위한 파라미터를 포함하는 딕셔너리입니다. <br><strong> 데이터 타입: </strong> 딕셔너리. </td></tr><tr><td><code> train_cycles </code></td><td> 훈련 시간 단계는 `train_cycles * 훈련 데이터 포인트 수`에 따라 설정됩니다. <br><strong> 데이터 타입: </strong> 정수. </td></tr><tr><td><code> max_trade_duration_candles </code></td><td> 에이전트 훈련을 원하는 길이 이하로 유지하도록 안내합니다. 예제 사용법은 <code> prediction_models/ReinforcementLearner.py </code> 내의 사용자 정의 가능한 <code> calculate_reward() </code> 함수에서 확인할 수 있습니다. <br><strong> 데이터 타입: </strong> 정수. </td></tr><tr><td><code> model_type </code></td><td> stable_baselines3 또는 SBcontrib의 모델 문자열. 사용 가능한 문자열에는 <code> &#39;TRPO&#39;, &#39;ARS&#39;, &#39;RecurrentPPO&#39;, &#39;MaskablePPO&#39;, &#39;PPO&#39;, &#39;A2C&#39;, &#39;DQN&#39; </code> 이 포함됩니다. 사용자는 <code> model_training_parameters </code> 가 해당 stable_baselines3 모델에 사용 가능한 파라미터와 일치하는지 확인해야 합니다. 자세한 내용은 <a href="https://stable-baselines3.readthedocs.io/en/master/modules/ppo.html"> PPO 문서 </a> (외부 웹사이트)에서 확인할 수 있습니다. <br><strong> 데이터 타입: </strong> 문자열. </td></tr><tr><td><code> policy_type </code></td><td> stable_baselines3에서 사용 가능한 정책 유형 중 하나. <br><strong> 데이터 타입: </strong> 문자열. </td></tr><tr><td><code> max_training_drawdown_pct </code></td><td> 훈련 중 에이전트가 경험할 수 있는 최대 손실 비율. <br><strong> 데이터 타입: </strong> 실수. <br> 기본값: 0.8 </td></tr><tr><td><code> cpu_count </code></td><td> 강화 학습 훈련 프로세스에 할당할 스레드/CPU 수( <code> ReinforcementLearning_multiproc </code> 이 선택된 경우에 따라 다름). 기본적으로 이 값은 물리적 코어 수에서 1을 뺀 값으로 설정됩니다. <br><strong> 데이터 타입: </strong> 정수. </td></tr><tr><td><code> model_reward_parameters </code></td><td><code> ReinforcementLearner.py </code> 내의 사용자 정의 가능한 <code> calculate_reward() </code> 함수에서 사용되는 파라미터. <br><strong> 데이터 타입: </strong> 정수. </td></tr><tr><td><code> add_state_info </code></td><td> 훈련 및 추론을 위해 상태 정보를 특징 집합에 포함하도록 FreqAI에 지시합니다. 현재 상태 변수에는 거래 기간, 현재 수익, 거래 위치가 포함됩니다. 이는 건조/실시간 실행에서만 사용할 수 있으며, 백테스팅에서는 자동으로 false로 전환됩니다. <br><strong> 데이터 타입: </strong> 부울. <br> 기본값: <code> False </code> . </td></tr><tr><td><code> net_arch </code></td><td> 네트워크 아키텍처는 <a href="https://stable-baselines3.readthedocs.io/en/master/guide/custom_policy.html#examples"><code> stable_baselines3 </code> 문서 </a> 에서 잘 설명되어 있습니다. 요약하자면: <code> [&lt;shared layers&gt;, dict(vf=[&lt;non-shared value network layers&gt;], pi=[&lt;non-shared policy network layers&gt;])] </code> . 기본적으로 이는 <code> [128, 128] </code> 로 설정되어 있으며, 이는 각각 128개의 유닛을 가진 2개의 공유된 숨겨진 레이어를 정의합니다. </td></tr><tr><td><code> randomize_starting_position </code></td><td> 각 에피소드의 시작 지점을 무작위로 설정하여 과적합을 방지합니다. <br><strong> 데이터 타입: </strong> 부울. <br> 기본값: <code> False </code> . </td></tr><tr><td><code> drop_ohlc_from_features </code></td><td> 훈련 중 에이전트에 전달되는 특징 집합에 정규화된 ohlc 데이터를 포함하지 않습니다(ohlc는 모든 경우에 환경을 구동하는 데 여전히 사용됨). <br><strong> 데이터 타입: </strong> 부울. <br><strong> 기본값: </strong><code> False </code></td></tr><tr><td><code> progress_bar </code></td><td> 현재 진행 상황, 경과 시간 및 예상 남은 시간을 표시하는 진행 표시줄을 표시합니다. <br><strong> 데이터 타입: </strong> 부울. <br> 기본값: <code> False </code> . </td></tr></tbody></table><h3 id="pytorch-parameters"> PyTorch 파라미터 <a class="headerlink" href="#pytorch-parameters" title="영구 링크"> ¶ </a></h3><h4 id="general"> 일반 <a class="headerlink" href="#general" title="영구 링크"> ¶ </a></h4><table><thead><tr><th>파라미터</th><th>설명</th></tr></thead><tbody><tr><td></td><td><strong><code> freqai.model_training_parameters </code> 하위 딕셔너리 내의 모델 훈련 파라미터 </strong></td></tr><tr><td><code> learning_rate </code></td><td> 최적화기에 전달할 학습률. <br><strong> 데이터 타입: </strong> 실수. <br> 기본값: <code> 3e-4 </code> . </td></tr><tr><td><code> model_kwargs </code></td><td> 모델 클래스에 전달할 파라미터. <br><strong> 데이터 타입: </strong> 딕셔너리. <br> 기본값: <code> {} </code> . </td></tr><tr><td><code> trainer_kwargs </code></td><td> 트레이너 클래스에 전달할 파라미터. <br><strong> 데이터 타입: </strong> 딕셔너리. <br> 기본값: <code> {} </code> . </td></tr></tbody></table><h4 id="trainer_kwargs"> trainer_kwargs <a class="headerlink" href="#trainer_kwargs" title="영구 링크"> ¶ </a></h4><table><thead><tr><th>파라미터</th><th>설명</th></tr></thead><tbody><tr><td></td><td><strong><code> freqai.model_training_parameters.model_kwargs </code> 하위 딕셔너리 내의 모델 훈련 파라미터 </strong></td></tr><tr><td><code> n_epochs </code></td><td><code> n_epochs </code> 파라미터는 PyTorch 훈련 루프에서 중요한 설정으로, 전체 훈련 데이터셋이 모델의 파라미터를 업데이트하는 데 사용되는 횟수를 결정합니다. 에포크는 전체 훈련 데이터셋을 한 번 완전히 통과하는 것을 나타냅니다. <code> n_steps </code> 를 재정의합니다. <code> n_epochs </code> 또는 <code> n_steps </code> 중 하나를 설정해야 합니다. <br><br><strong> 데이터 타입: </strong> 정수. 선택 사항. <br> 기본값: <code> 10 </code> . </td></tr><tr><td><code> n_steps </code></td><td><code> n_epochs </code> 를 설정하는 대안 방법 - 실행할 훈련 반복 횟수. 여기서 반복은 <code> optimizer.step() </code> 을 호출하는 횟수를 나타냅니다. <code> n_epochs </code> 가 설정된 경우 무시됩니다. 함수의 단순화된 버전: <br><br> n_epochs = n_steps / (n_obs / batch_size) <br><br> 여기서 동기는 <code> n_steps </code> 가 최적화하기 쉽고 다른 n_obs - 데이터 포인트 수에 대해 안정적으로 유지된다는 것입니다. <br><br><strong> 데이터 타입: </strong> 정수. 선택 사항. <br> 기본값: <code> None </code> . </td></tr><tr><td><code> batch_size </code></td><td> 훈련 중에 사용할 배치 크기. <br><br><strong> 데이터 타입: </strong> 정수. <br> 기본값: <code> 64 </code> . </td></tr></tbody></table><h3 id="additional-parameters"> 추가 파라미터 <a class="headerlink" href="#additional-parameters" title="영구 링크"> ¶ </a></h3><table><thead><tr><th>파라미터</th><th>설명</th></tr></thead><tbody><tr><td></td><td><strong> 추가 파라미터 </strong></td></tr><tr><td><code> freqai.keras </code></td><td> 선택한 모델이 Keras를 사용하는 경우(TensorFlow 기반 예측 모델에 일반적), 이 플래그를 활성화하여 모델 저장/로드가 Keras 표준을 따르도록 해야 합니다. <br><strong> 데이터 타입: </strong> 부울. <br> 기본값: <code> False </code> . </td></tr><tr><td><code> freqai.conv_width </code></td><td> 신경망 입력 텐서의 너비입니다. 이는 과거 데이터를 텐서의 두 번째 차원으로 제공하여 캔들 이동( <code> include_shifted_candles </code> )의 필요성을 대체합니다. 기술적으로 이 매개변수는 회귀 모델에도 사용할 수 있지만, 계산 오버헤드만 추가되고 모델 훈련/예측에는 영향을 미치지 않습니다. <br><strong> 데이터 타입: </strong> 정수. <br> 기본값: <code> 2 </code> . </td></tr><tr><td><code> freqai.reduce_df_footprint </code></td><td> 모든 숫자 열을 float32/int32로 재캐스팅하여 RAM/디스크 사용량을 줄이고 훈련/추론 시간을 단축합니다. 이 매개변수는 FreqAI 내부가 아닌 Freqtrade 구성 파일의 메인 레벨에서 설정됩니다. <br><strong> 데이터 타입: </strong> 부울. <br> 기본값: <code> False </code> . </td></tr></tbody></table>',9))])}}};export{f as default};
