import{o as a,c as o,b as t,d,u as r,a as i}from"./index-1d9d7dc5.js";const n="/assets/freqai_algorithm-diagram-5ba8e538.jpg";const c={class:"md-content__inner md-typeset"},_=["src"],b={__name:"FreqAIDevelopers",setup(l){return(s,e)=>(a(),o("article",c,[e[0]||(e[0]=t("h1",{id:"development"},[d(" 개발 "),t("a",{class:"headerlink",href:"#development",title:"영구 링크"}," ¶ ")],-1)),e[1]||(e[1]=t("h2",{id:"project-architecture"},[d(" 프로젝트 아키텍처 "),t("a",{class:"headerlink",href:"#project-architecture",title:"영구 링크"}," ¶ ")],-1)),e[2]||(e[2]=t("p",null,"FreqAI의 아키텍처와 기능은 고유한 기능, 모델 등을 개발하도록 일반화되어 있습니다.",-1)),e[3]||(e[3]=t("p",null,"클래스 구조와 자세한 알고리즘 개요는 아래 다이어그램에 나와 있습니다:",-1)),t("p",null,[t("img",{alt:"image",src:r(n)},null,8,_)]),e[4]||(e[4]=i(`<p>보시다시피, FreqAI는 세 가지 주요 객체로 구성됩니다:</p><ul><li><strong> IFreqaiModel </strong> - 데이터를 수집, 저장, 처리하고, 특징을 엔지니어링하며, 모델을 학습 및 추론하는 데 필요한 모든 로직을 포함하는 단일 지속 객체입니다. </li><li><strong> FreqaiDataKitchen </strong> - 각 고유 자산/모델에 대해 고유하게 생성되는 비지속 객체입니다. 메타데이터 외에도 다양한 데이터 처리 도구를 포함합니다. </li><li><strong> FreqaiDataDrawer </strong> - 모든 과거 예측, 모델 및 저장/로드 메서드를 포함하는 단일 지속 객체입니다. </li></ul><p> 다양한 내장 <a href="freqai-configuration.html"> 예측 모델 </a> 이 <code> IFreqaiModel </code> 에서 직접 상속됩니다. 이러한 모델은 <code> IFreqaiModel </code> 의 모든 메서드에 완전히 액세스할 수 있으며, 따라서 원하는 경우 이러한 기능을 재정의할 수 있습니다. 그러나 고급 사용자는 주로 <code> fit() </code> , <code> train() </code> , <code> predict() </code> 및 <code> data_cleaning_train/predict() </code> 를 재정의하는 데 집중할 가능성이 높습니다. </p><h2 id="data-handling"> 데이터 처리 <a class="headerlink" href="#data-handling" title="영구 링크"> ¶ </a></h2><p> FreqAI는 모델 파일, 예측 데이터 및 메타데이터를 정리하여 후처리를 단순화하고 자동 데이터 재로드를 통해 충돌 복원력을 향상시키는 것을 목표로 합니다. 데이터는 <code> user_data_dir/models/ </code> 파일 구조에 저장되며, 여기에는 학습 및 백테스트와 관련된 모든 데이터가 포함됩니다. <code> FreqaiDataKitchen() </code> 은 적절한 학습 및 추론을 위해 파일 구조에 크게 의존하므로 수동으로 수정하지 않아야 합니다. </p><h3 id="file-structure"> 파일 구조 <a class="headerlink" href="#file-structure" title="영구 링크"> ¶ </a></h3><p> 파일 구조는 <a href="freqai-configuration.html"> config </a> 에서 설정된 모델 <code> identifier </code> 를 기반으로 자동 생성됩니다. 다음 구조는 후처리를 위해 데이터가 저장되는 위치를 보여줍니다: </p><table><thead><tr><th>구조</th><th>설명</th></tr></thead><tbody><tr><td><code> config_*.json </code></td><td>모델별 구성 파일의 사본입니다.</td></tr><tr><td><code> historic_predictions.pkl </code></td><td> 라이브 배포 중 <code> identifier </code> 모델의 수명 동안 생성된 모든 과거 예측을 포함하는 파일입니다. <code> historic_predictions.pkl </code> 은 충돌 또는 구성 변경 후 모델을 다시 로드하는 데 사용됩니다. 백업 파일은 항상 주 파일의 손상에 대비하여 보관됩니다. FreqAI는 <strong> 자동으로 </strong> 손상을 감지하고 손상된 파일을 백업으로 교체합니다. </td></tr><tr><td><code> pair_dictionary.json </code></td><td>학습 대기열과 가장 최근에 학습된 모델의 디스크 위치를 포함하는 파일입니다.</td></tr><tr><td><code> sub-train-*_TIMESTAMP </code></td><td> 단일 모델과 관련된 모든 파일을 포함하는 폴더입니다. 예를 들어: <br></td></tr><tr><td></td><td><code> *_metadata.json </code> - 모델의 메타데이터로, 정규화 최대/최소값, 예상 학습 특징 목록 등을 포함합니다. <br></td></tr><tr><td></td><td><code> *_model.* </code> - 충돌에서 다시 로드하기 위해 디스크에 저장된 모델 파일입니다. <code> joblib </code> (일반적인 부스팅 라이브러리), <code> zip </code> (stable_baselines), <code> hd5 </code> (keras 유형) 등이 될 수 있습니다. <br></td></tr><tr><td></td><td><code> *_pca_object.pkl </code> - 보지 못한 예측 특징을 변환하는 데 사용되는 <a href="freqai-feature-engineering.html"> 주성분 분석 (PCA) </a> 변환 (config에서 <code> principal_component_analysis: True </code> 로 설정된 경우). <br></td></tr><tr><td></td><td><code> *_svm_model.pkl </code> - 보지 못한 예측 특징에서 이상값을 감지하는 데 사용되는 <a href="freqai-feature-engineering.html"> 서포트 벡터 머신 (SVM) </a> 모델 (config에서 <code> use_SVM_to_remove_outliers: True </code> 로 설정된 경우). <br></td></tr><tr><td></td><td><code> *_trained_df.pkl </code> - <code> identifier </code> 모델을 학습하는 데 사용된 모든 학습 특징을 포함하는 데이터프레임입니다. 이는 <a href="freqai-feature-engineering.html"> 비유사성 지수 (DI) </a> 를 계산하는 데 사용되며 후처리에도 사용할 수 있습니다. <br></td></tr><tr><td></td><td><code> *_trained_dates.df.pkl </code> - 후처리에 유용한 <code> trained_df.pkl </code> 와 관련된 날짜입니다. </td></tr></tbody></table><p>예제 파일 구조는 다음과 같습니다:</p><div class="highlight"><pre><code>├── models
│   └── unique-id
│       ├── config_freqai.example.json
│       ├── historic_predictions.backup.pkl
│       ├── historic_predictions.pkl
│       ├── pair_dictionary.json
│       ├── sub-train-1INCH_1662821319
│       │   ├── cb_1inch_1662821319_metadata.json
│       │   ├── cb_1inch_1662821319_model.joblib
│       │   ├── cb_1inch_1662821319_pca_object.pkl
│       │   ├── cb_1inch_1662821319_svm_model.joblib
│       │   ├── cb_1inch_1662821319_trained_dates_df.pkl
│       │   └── cb_1inch_1662821319_trained_df.pkl
│       ├── sub-train-1INCH_1662821371
│       │   ├── cb_1inch_1662821371_metadata.json
│       │   ├── cb_1inch_1662821371_model.joblib
│       │   ├── cb_1inch_1662821371_pca_object.pkl
│       │   ├── cb_1inch_1662821371_svm_model.joblib
│       │   ├── cb_1inch_1662821371_trained_dates_df.pkl
│       │   └── cb_1inch_1662821371_trained_df.pkl
│       ├── sub-train-ADA_1662821344
│       │   ├── cb_ada_1662821344_metadata.json
│       │   ├── cb_ada_1662821344_model.joblib
│       │   ├── cb_ada_1662821344_pca_object.pkl
│       │   ├── cb_ada_1662821344_svm_model.joblib
│       │   ├── cb_ada_1662821344_trained_dates_df.pkl
│       │   └── cb_ada_1662821344_trained_df.pkl
│       └── sub-train-ADA_1662821399
│           ├── cb_ada_1662821399_metadata.json
│           ├── cb_ada_1662821399_model.joblib
│           ├── cb_ada_1662821399_pca_object.pkl
│           ├── cb_ada_1662821399_svm_model.joblib
│           ├── cb_ada_1662821399_trained_dates_df.pkl
│           └── cb_ada_1662821399_trained_df.pkl
</code></pre></div>`,10))]))}};export{b as default};
