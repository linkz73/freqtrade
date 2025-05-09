import{t as d}from"./tensorboard-c73faffb.js";import{r as s,o as l,c as u,a as n,b as o,d as t,e as a,w as i,u as c}from"./index-105dd89e.js";const f={class:"md-content__inner md-typeset"},m=["src"],h={__name:"FreqAIReinforcementLearning",setup(p){return(q,e)=>{const r=s("router-link");return l(),u("article",f,[e[22]||(e[22]=n('<h1 id="reinforcement-learning"> 강화 학습 <a class="headerlink" href="#reinforcement-learning" title="영구 링크"> ¶ </a></h1><div class="admonition note"><p class="admonition-title">설치 크기</p><p>강화 학습 의존성에는 <code>torch</code>와 같은 대형 패키지가 포함됩니다. <code>./setup.sh -i</code> 실행 중 &quot;freqai-rl 의존성도 설치하시겠습니까? (~700MB 추가 공간 필요) [y/N]?&quot;라는 질문에 &quot;y&quot;로 응답하여 명시적으로 요청해야 합니다. Docker를 선호하는 사용자는 <code>_freqairl</code>로 끝나는 Docker 이미지를 사용해야 합니다.</p></div><h2 id="background-and-terminology"> 배경 및 용어 <a class="headerlink" href="#background-and-terminology" title="영구 링크"> ¶ </a></h2><h3 id="what-is-rl-and-why-does-freqai-need-it"> 강화 학습이란 무엇이며 FreqAI에 왜 필요한가요? <a class="headerlink" href="#what-is-rl-and-why-does-freqai-need-it" title="영구 링크"> ¶ </a></h3><p>강화 학습은 두 가지 중요한 구성 요소인 <em>에이전트</em>와 학습 <em>환경</em>을 포함합니다. 에이전트 학습 중 에이전트는 과거 데이터의 캔들 데이터를 하나씩 이동하며, 항상 다음 중 하나의 행동을 수행합니다: 롱 진입, 롱 종료, 숏 진입, 숏 종료, 중립. 이 학습 과정에서 환경은 이러한 행동의 성과를 추적하고 사용자 정의 <code>calculate_reward()</code> 함수에 따라 에이전트에게 보상을 제공합니다 (사용자가 원하는 경우 기본 보상을 제공하며, <a href="#creating-a-custom-reward-function">여기에서 자세히</a> 확인할 수 있습니다). 이 보상은 신경망의 가중치를 학습하는 데 사용됩니다.</p><p>FreqAI RL 구현의 두 번째 중요한 구성 요소는 <em>상태</em> 정보의 사용입니다. 상태 정보는 각 단계에서 네트워크에 입력되며, 현재 수익, 현재 포지션, 현재 거래 기간 등이 포함됩니다. 이 정보는 학습 환경에서 에이전트를 학습시키고, 드라이/라이브 환경에서 에이전트를 강화하는 데 사용됩니다 (이 기능은 백테스팅에서는 사용할 수 없습니다).</p><p>강화 학습은 FreqAI의 자연스러운 발전 단계로, 분류기와 회귀 분석기가 따라올 수 없는 적응성과 시장 반응성을 추가합니다. 그러나 분류기와 회귀 분석기는 강화 학습이 가지지 못한 강점, 예를 들어 강력한 예측 능력을 가지고 있습니다. 잘못 학습된 RL 에이전트는 실제로 거래에서 이기지 않고 보상을 극대화하기 위한 &quot;꼼수&quot;와 &quot;트릭&quot;을 찾을 수 있습니다. 이러한 이유로 RL은 더 복잡하며 일반적인 분류기와 회귀 분석기보다 높은 수준의 이해를 요구합니다.</p><h3 id="the-rl-interface"> RL 인터페이스 <a class="headerlink" href="#the-rl-interface" title="영구 링크"> ¶ </a></h3><p>현재 프레임워크에서는 공통 &quot;예측 모델&quot; 파일을 통해 학습 환경을 노출하는 것을 목표로 합니다. 이는 사용자 상속 <code>BaseReinforcementLearner</code> 객체(e.g. <code>freqai/prediction_models/ReinforcementLearner</code>)입니다. 이 사용자 클래스 내부에서 RL 환경은 <code>MyRLEnv</code>를 통해 사용할 수 있으며, <a href="#creating-a-custom-reward-function">아래에 표시된 대로</a> 사용자 정의됩니다.</p><p>대부분의 사용자가 <code>calculate_reward()</code> 함수의 창의적인 설계에 집중할 것으로 예상됩니다 (<a href="#creating-a-custom-reward-function">여기에서 자세히</a> 확인할 수 있습니다), 환경의 나머지 부분은 그대로 두는 것이 좋습니다. 다른 사용자는 환경을 전혀 건드리지 않고 구성 설정과 FreqAI에 이미 존재하는 강력한 기능 엔지니어링만 사용할 수 있습니다. 한편, 고급 사용자는 자체 모델 클래스를 완전히 생성할 수 있습니다.</p><p>프레임워크는 stable_baselines3(torch) 및 OpenAI gym을 기반으로 구축되었습니다. 그러나 일반적으로 모델 클래스는 잘 격리되어 있습니다. 따라서 경쟁 라이브러리를 추가하는 것은 기존 프레임워크에 쉽게 통합될 수 있습니다. 환경의 경우 <code>gym.Env</code>를 상속하므로 다른 라이브러리로 전환하려면 완전히 새로운 환경을 작성해야 합니다.</p><h3 id="important-considerations"> 중요한 고려 사항 <a class="headerlink" href="#important-considerations" title="영구 링크"> ¶ </a></h3><p>앞서 설명한 바와 같이, 에이전트는 인공 거래 &quot;환경&quot;에서 &quot;학습&quot;됩니다. 우리의 경우, 그 환경은 실제 Freqtrade 백테스팅 환경과 매우 유사해 보일 수 있지만, <em>아닙니다</em>. 사실, RL 학습 환경은 훨씬 더 단순화되어 있습니다. <code>custom_exit</code>, <code>custom_stoploss</code>, 레버리지 제어 등과 같은 복잡한 전략 로직을 포함하지 않습니다. RL 환경은 대신 <code>calculate_reward()</code>에 의해 시행되는 정책(읽기: 손절매, 이익 실현 등)을 학습할 자유 의지를 가진 에이전트의 매우 &quot;원시적인&quot; 시장 표현입니다. 따라서 에이전트 학습 환경이 실제 세계와 동일하지 않다는 점을 고려하는 것이 중요합니다.</p><h2 id="running-reinforcement-learning"> 강화 학습 실행 <a class="headerlink" href="#running-reinforcement-learning" title="영구 링크"> ¶ </a></h2><p>강화 학습 모델을 설정하고 실행하는 것은 회귀 분석기 또는 분류기를 실행하는 것과 동일합니다. 동일한 두 플래그 <code>--freqaimodel</code> 및 <code>--strategy</code>가 명령줄에서 정의되어야 합니다:</p><div class="highlight"><pre><code>freqtrade trade --freqaimodel ReinforcementLearner --strategy MyRLStrategy --config config.json</code></pre></div>',16)),o("p",null,[e[1]||(e[1]=t("여기서 ")),e[2]||(e[2]=o("code",null,"ReinforcementLearner",-1)),e[3]||(e[3]=t("는 ")),e[4]||(e[4]=o("code",null,"freqai/prediction_models/ReinforcementLearner",-1)),e[5]||(e[5]=t("의 템플릿 ")),e[6]||(e[6]=o("code",null,"ReinforcementLearner",-1)),e[7]||(e[7]=t("를 사용합니다 (또는 ")),e[8]||(e[8]=o("code",null,"user_data/freqaimodels",-1)),e[9]||(e[9]=t("에 위치한 사용자 정의 모델). 전략은 동일한 기본 ")),a(r,{to:"freqai-feature-engineering"},{default:i(()=>e[0]||(e[0]=[t("기능 엔지니어링")])),_:1}),e[10]||(e[10]=t("을 따르며, ")),e[11]||(e[11]=o("code",null,"feature_engineering_*",-1)),e[12]||(e[12]=t("은 일반적인 회귀 분석기와 동일합니다. 차이점은 타겟 생성에 있으며, 강화 학습은 이를 필요로 하지 않습니다. 그러나 FreqAI는 작업 열에 기본(중립) 값을 설정해야 합니다:"))]),e[23]||(e[23]=n(`<div class="highlight"><pre><code>    def set_freqai_targets(self, dataframe, **kwargs) -&gt; DataFrame:
        &quot;&quot;&quot;
        *Only functional with FreqAI enabled strategies*
        Required function to set the targets for the model.
        All targets must be prepended with \`&amp;\` to be recognized by the FreqAI internals.

        More details about feature engineering available:

        https://www.freqtrade.io/en/latest/freqai-feature-engineering

        :param df: strategy dataframe which will receive the targets
        usage example: dataframe[&quot;&amp;-target&quot;] = dataframe[&quot;close&quot;].shift(-1) / dataframe[&quot;close&quot;]
        &quot;&quot;&quot;
        # For RL, there are no direct targets to set. This is filler (neutral)
        # until the agent sends an action.
        dataframe[&quot;&amp;-action&quot;] = 0
        return dataframe</code></pre></div><p>대부분의 함수는 일반적인 회귀 분석기와 동일하지만, 아래 함수는 전략이 에이전트에게 원시 OHLCV 데이터를 전달하여 학습 환경에서 원시 가격 데이터에 액세스할 수 있도록 하는 방법을 보여줍니다:</p><div class="highlight"><pre><code>    def feature_engineering_standard(self, dataframe: DataFrame, **kwargs) -&gt; DataFrame:
        # The following features are necessary for RL models
        dataframe[f&quot;%-raw_close&quot;] = dataframe[&quot;close&quot;]
        dataframe[f&quot;%-raw_open&quot;] = dataframe[&quot;open&quot;]
        dataframe[f&quot;%-raw_high&quot;] = dataframe[&quot;high&quot;]
        dataframe[f&quot;%-raw_low&quot;] = dataframe[&quot;low&quot;]
    return dataframe</code></pre></div><p>마지막으로, 명시적인 &quot;레이블&quot;을 만들 필요는 없으며, 대신 <code>&amp;-action</code> 열을 할당하여 <code>populate_entry/exit_trends()</code>에서 에이전트의 작업을 포함해야 합니다. 현재 예제에서는 중립 작업을 0으로 설정합니다. 이 값은 사용된 환경과 일치해야 합니다. FreqAI는 두 가지 환경을 제공하며, 두 환경 모두 중립 작업으로 0을 사용합니다.</p><p>사용자는 레이블을 설정할 필요가 없다는 것을 깨닫고 나면, 에이전트가 자체적으로 진입 및 종료 결정을 내린다는 것을 이해하게 될 것입니다. 이로 인해 전략 구성이 상당히 간단해집니다. 진입 및 종료 신호는 정수 형태로 에이전트에서 제공되며, 이는 전략에서 진입 및 종료를 결정하는 데 직접 사용됩니다:</p><div class="highlight"><pre><code>    def populate_entry_trend(self, df: DataFrame, metadata: dict) -&gt; DataFrame:

        enter_long_conditions = [df[&quot;do_predict&quot;] == 1, df[&quot;&amp;-action&quot;] == 1]

        if enter_long_conditions:
            df.loc[
                reduce(lambda x, y: x &amp; y, enter_long_conditions), [&quot;enter_long&quot;, &quot;enter_tag&quot;]
            ] = (1, &quot;long&quot;)

        enter_short_conditions = [df[&quot;do_predict&quot;] == 1, df[&quot;&amp;-action&quot;] == 3]

        if enter_short_conditions:
            df.loc[
                reduce(lambda x, y: x &amp; y, enter_short_conditions), [&quot;enter_short&quot;, &quot;enter_tag&quot;]
            ] = (1, &quot;short&quot;)

        return df

    def populate_exit_trend(self, df: DataFrame, metadata: dict) -&gt; DataFrame:
        exit_long_conditions = [df[&quot;do_predict&quot;] == 1, df[&quot;&amp;-action&quot;] == 2]
        if exit_long_conditions:
            df.loc[reduce(lambda x, y: x &amp; y, exit_long_conditions), &quot;exit_long&quot;] = 1

        exit_short_conditions = [df[&quot;do_predict&quot;] == 1, df[&quot;&amp;-action&quot;] == 4]
        if exit_short_conditions:
            df.loc[reduce(lambda x, y: x &amp; y, exit_short_conditions), &quot;exit_short&quot;] = 1

        return df</code></pre></div><p><code>&amp;-action</code>은 사용자가 선택한 환경에 따라 달라진다는 점을 고려하는 것이 중요합니다. 위의 예제에서는 5개의 작업을 보여주며, 0은 중립, 1은 롱 진입, 2는 롱 종료, 3은 숏 진입, 4는 숏 종료입니다.</p><h2 id="configuring-the-reinforcement-learner"> 강화 학습자 구성 <a class="headerlink" href="#configuring-the-reinforcement-learner" title="영구 링크"> ¶ </a></h2><p><code>Reinforcement Learner</code>를 구성하려면 <code>freqai</code> 구성에 다음 사전이 있어야 합니다:</p><div class="highlight"><pre><code>        &quot;rl_config&quot;: {
            &quot;train_cycles&quot;: 25,
            &quot;add_state_info&quot;: true,
            &quot;max_trade_duration_candles&quot;: 300,
            &quot;max_training_drawdown_pct&quot;: 0.02,
            &quot;cpu_count&quot;: 8,
            &quot;model_type&quot;: &quot;PPO&quot;,
            &quot;policy_type&quot;: &quot;MlpPolicy&quot;,
            &quot;model_reward_parameters&quot;: {
                &quot;rr&quot;: 1,
                &quot;profit_aim&quot;: 0.025
            }
        }</code></pre></div>`,10)),o("p",null,[e[14]||(e[14]=t("매개변수에 대한 자세한 내용은 ")),a(r,{to:"freqai-parameter-table"},{default:i(()=>e[13]||(e[13]=[t("여기")])),_:1}),e[15]||(e[15]=t("에서 확인할 수 있지만, 일반적으로 ")),e[16]||(e[16]=o("code",null,"train_cycles",-1)),e[17]||(e[17]=t("는 에이전트가 인공 환경에서 캔들 데이터를 통해 몇 번 순환하여 모델의 가중치를 학습해야 하는지를 결정합니다. ")),e[18]||(e[18]=o("code",null,"model_type",-1)),e[19]||(e[19]=t("은 ")),e[20]||(e[20]=o("a",{href:"https://stable-baselines3.readthedocs.io/en/master/"},"stable_baselines",-1)),e[21]||(e[21]=t(" (외부 링크)에서 사용할 수 있는 모델 중 하나를 선택하는 문자열입니다."))]),e[24]||(e[24]=n(`<div class="admonition note"><p class="admonition-title">참고</p><p><code>continual_learning</code>을 실험해보고 싶다면, 주 <code>freqai</code> 구성 사전에서 해당 값을 <code>true</code>로 설정해야 합니다. 이렇게 하면 강화 학습 라이브러리가 새로운 모델을 학습할 때마다 이전 모델의 최종 상태에서 계속 학습하도록 지시하여, 재학습이 시작될 때마다 새로운 모델을 처음부터 다시 학습하지 않도록 합니다.</p></div><div class="admonition note"><p class="admonition-title">참고</p><p>일반 <code>model_training_parameters</code> 사전에는 특정 <code>model_type</code>에 대한 모든 모델 하이퍼파라미터 사용자 정의가 포함되어야 합니다. 예를 들어, <code>PPO</code> 매개변수는 <a href="https://stable-baselines3.readthedocs.io/en/master/modules/ppo.html">여기</a>에서 확인할 수 있습니다.</p></div><h2 id="creating-a-custom-reward-function"> 사용자 정의 보상 함수 만들기 <a class="headerlink" href="#creating-a-custom-reward-function" title="영구 링크"> ¶ </a></h2><div class="admonition danger"><p class="admonition-title">프로덕션용 아님</p><p>경고! Freqtrade 소스 코드에 제공된 보상 함수는 가능한 많은 환경 제어 기능을 보여주고 테스트하기 위해 설계된 기능의 쇼케이스입니다. 또한 작은 컴퓨터에서 빠르게 실행되도록 설계되었습니다. 이것은 벤치마크이며, 라이브 프로덕션용이 아닙니다. 사용자는 자신만의 custom_reward() 함수를 만들어야 하거나 Freqtrade 소스 코드 외부에서 다른 사용자가 만든 템플릿을 사용해야 합니다.</p></div><p>전략과 예측 모델을 수정하기 시작하면 강화 학습자와 회귀 분석기/분류기 간의 중요한 차이점을 빠르게 깨닫게 될 것입니다. 첫째, 전략은 목표 값을 설정하지 않습니다(레이블 없음!). 대신 <code>MyRLEnv</code> 클래스 내부에 <code>calculate_reward()</code> 함수를 설정합니다(아래 참조). 기본 <code>calculate_reward()</code>는 <code>prediction_models/ReinforcementLearner.py</code>에 제공되어 보상을 생성하는 데 필요한 기본 요소를 보여주지만, 이는 프로덕션용으로 설계되지 않았습니다. 사용자는 자신만의 사용자 정의 강화 학습 모델 클래스를 만들거나 Freqtrade 소스 코드 외부에서 사전 구축된 것을 사용하여 <code>user_data/freqaimodels</code>에 저장해야 합니다. <code>calculate_reward()</code> 내부에서 시장에 대한 창의적인 이론을 표현할 수 있습니다. 예를 들어, 에이전트가 승리하는 거래를 할 때 보상을 제공하고, 에이전트가 손실 거래를 할 때 페널티를 부과할 수 있습니다. 또는 거래에 진입할 때 에이전트에게 보상을 제공하고, 거래에 너무 오래 머무를 때 에이전트에게 페널티를 부과할 수 있습니다. 아래에서는 이러한 보상이 모두 어떻게 계산되는지 예를 보여줍니다:</p><div class="admonition note"><p class="admonition-title">힌트</p><p>가장 좋은 보상 함수는 연속적으로 미분 가능하고 잘 스케일링된 함수입니다. 즉, 드문 이벤트에 단일 큰 부정적 페널티를 추가하는 것은 좋은 아이디어가 아니며, 신경망은 해당 함수를 학습할 수 없습니다. 대신, 일반적인 이벤트에 작은 부정적 페널티를 추가하는 것이 좋습니다. 이렇게 하면 에이전트가 더 빨리 학습할 수 있습니다. 뿐만 아니라, 선형/지수 함수에 따라 심각도에 따라 보상/페널티를 스케일링하여 연속성을 개선할 수 있습니다. 즉, 거래 기간이 증가함에 따라 페널티를 천천히 스케일링하는 것이 좋습니다. 이것은 단일 시점에서 발생하는 단일 큰 페널티보다 낫습니다.</p></div><div class="highlight"><pre><code>from freqtrade.freqai.prediction_models.ReinforcementLearner import ReinforcementLearner
from freqtrade.freqai.RL.Base5ActionRLEnv import Actions, Base5ActionRLEnv, Positions


class MyCoolRLModel(ReinforcementLearner):
    &quot;&quot;&quot;
    User created RL prediction model.

    Save this file to \`freqtrade/user_data/freqaimodels\`

    then use it with:

    freqtrade trade --freqaimodel MyCoolRLModel --config config.json --strategy SomeCoolStrat

    Here the users can override any of the functions
    available in the \`IFreqaiModel\` inheritance tree. Most importantly for RL, this
    is where the user overrides \`MyRLEnv\` (see below), to define custom
    \`calculate_reward()\` function, or to override any other parts of the environment.

    This class also allows users to override any other part of the IFreqaiModel tree.
    For example, the user can override \`def fit()\` or \`def train()\` or \`def predict()\`
    to take fine-tuned control over these processes.

    Another common override may be \`def data_cleaning_predict()\` where the user can
    take fine-tuned control over the data handling pipeline.
    &quot;&quot;&quot;
    class MyRLEnv(Base5ActionRLEnv):
        &quot;&quot;&quot;
        User made custom environment. This class inherits from BaseEnvironment and gym.Env.
        Users can override any functions from those parent classes. Here is an example
        of a user customized \`calculate_reward()\` function.

        Warning!
        This is function is a showcase of functionality designed to show as many possible
        environment control features as possible. It is also designed to run quickly
        on small computers. This is a benchmark, it is *not* for live production.
        &quot;&quot;&quot;
        def calculate_reward(self, action: int) -&gt; float:
            # first, penalize if the action is not valid
            if not self._is_valid(action):
                return -2
            pnl = self.get_unrealized_profit()

            factor = 100

            pair = self.pair.replace(&#39;:&#39;, &#39;&#39;)

            # you can use feature values from dataframe
            # Assumes the shifted RSI indicator has been generated in the strategy.
            rsi_now = self.raw_features[f&quot;%-rsi-period_10_shift-1_{pair}_{self.config[&#39;timeframe&#39;]}&quot;].iloc[self._current_tick]

            # reward agent for entering trades
            if (action in (Actions.Long_enter.value, Actions.Short_enter.value)
                and self._position == Positions.Neutral):
                if rsi_now &lt; 40:
                    factor = 40 / rsi_now
                else:
                    factor = 1
                return 25 * factor

            # discourage agent from not entering trades
            if action == Actions.Neutral.value and self._position == Positions.Neutral:
                return -1
            max_trade_duration = self.rl_config.get(&#39;max_trade_duration_candles&#39;, 300)
            trade_duration = self._current_tick - self._last_trade_tick
            if trade_duration &lt;= max_trade_duration:
                factor *= 1.5
            elif trade_duration &gt; max_trade_duration:
                factor *= 0.5
            # discourage sitting in position
            if self._position in (Positions.Short, Positions.Long) and \\
            action == Actions.Neutral.value:
                return -1 * trade_duration / max_trade_duration
            # close long
            if action == Actions.Long_exit.value and self._position == Positions.Long:
                if pnl &gt; self.profit_aim * self.rr:
                    factor *= self.rl_config[&#39;model_reward_parameters&#39;].get(&#39;win_reward_factor&#39;, 2)
                return float(pnl * factor)
            # close short
            if action == Actions.Short_exit.value and self._position == Positions.Short:
                if pnl &gt; self.profit_aim * self.rr:
                    factor *= self.rl_config[&#39;model_reward_parameters&#39;].get(&#39;win_reward_factor&#39;, 2)
                return float(pnl * factor)
            return 0.</code></pre></div><h2 id="using-tensorboard"> Tensorboard 사용하기 <a class="headerlink" href="#using-tensorboard" title="영구 링크"> ¶ </a></h2><p>강화 학습 모델은 학습 메트릭을 추적하는 데 이점이 있습니다. FreqAI는 Tensorboard를 통합하여 사용자가 모든 코인과 모든 재학습에 걸쳐 학습 및 평가 성능을 추적할 수 있도록 합니다. Tensorboard는 다음 명령어로 활성화됩니다:</p><div class="highlight"><pre><code>tensorboard --logdir user_data/models/unique-id</code></pre></div><p>여기서 <code>unique-id</code>는 <code>freqai</code> 구성 파일에 설정된 <code>identifier</code>입니다. 이 명령어는 별도의 셸에서 실행해야 하며, 브라우저에서 127.0.0.1:6006 (기본 포트 6006)에서 출력을 확인할 수 있습니다.</p>`,11)),o("p",null,[o("img",{alt:"tensorboard",src:c(d)},null,8,m)])])}}};export{h as default};
