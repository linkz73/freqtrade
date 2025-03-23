import{r as l,o as a,c as n,a as t,b as o,d,e as i,w as s}from"./index-f254d819.js";const c={class:"md-content__inner md-typeset"},p={class:"admonition danger"},k={class:"note"},m={class:"admonition warning"},h={__name:"DockerQuickstart",setup(u){return(f,e)=>{const r=l("router-link");return a(),n("article",c,[e[35]||(e[35]=t(`<h1 id="using-freqtrade-with-docker"> Docker로 Freqtrade 사용하기 <a class="headerlink" href="#using-freqtrade-with-docker" title="영구 링크"> ¶ </a></h1><p>이 페이지는 Docker를 사용하여 봇을 실행하는 방법을 설명합니다. 바로 사용할 수 있는 형태는 아니며, 문서를 읽고 적절히 구성하는 방법을 이해해야 합니다.</p><h2 id="install-docker"> Docker 설치 <a class="headerlink" href="#install-docker" title="영구 링크"> ¶ </a></h2><p>다음 플랫폼에 맞는 Docker / Docker Desktop을 다운로드하고 설치하세요:</p><ul><li><a href="https://docs.docker.com/docker-for-mac/install/"> Mac </a></li><li><a href="https://docs.docker.com/docker-for-windows/install/"> Windows </a></li><li><a href="https://docs.docker.com/install/"> Linux </a></li></ul><div class="admonition info"><p class="admonition-title">Docker Compose 설치</p><p> Freqtrade 문서는 Docker Desktop(또는 Docker Compose 플러그인)을 사용하는 것을 가정합니다. <br> 독립형 docker-compose 설치도 여전히 작동하지만, 모든 <code> docker compose </code> 명령을 <code> docker-compose </code> 로 변경해야 합니다 (예: <code> docker compose up -d </code> 는 <code> docker-compose up -d </code> 로 변경). </p></div><details class="warning"><summary>Windows에서 Docker</summary><p>Windows 시스템에 Docker를 방금 설치한 경우, 시스템을 재부팅해야 합니다. 그렇지 않으면 Docker 컨테이너의 네트워크 연결과 관련된 설명할 수 없는 문제가 발생할 수 있습니다.</p></details><h2 id="freqtrade-with-docker"> Docker로 Freqtrade 사용하기 <a class="headerlink" href="#freqtrade-with-docker" title="영구 링크"> ¶ </a></h2><p> Freqtrade는 <a href="https://hub.docker.com/r/freqtradeorg/freqtrade/"> Dockerhub </a> 에서 공식 Docker 이미지를 제공하며, 사용 가능한 <a href="https://github.com/freqtrade/freqtrade/blob/stable/docker-compose.yml"> docker-compose 파일 </a> 도 제공합니다. </p><div class="admonition note"><p class="admonition-title">참고</p><ul><li> 다음 섹션은 <code> docker </code> 가 설치되어 있고 로그인한 사용자에게 사용 가능하다고 가정합니다. </li><li> 아래 명령은 상대 디렉토리를 사용하며, 반드시 <code> docker-compose.yml </code> 파일이 있는 디렉토리에서 실행해야 합니다. </li></ul></div><h3 id="docker-quick-start"> Docker 빠른 시작 <a class="headerlink" href="#docker-quick-start" title="영구 링크"> ¶ </a></h3><p> 새 디렉토리를 생성하고 <a href="https://raw.githubusercontent.com/freqtrade/freqtrade/stable/docker-compose.yml"> docker-compose 파일 </a> 을 이 디렉토리에 배치하세요. </p><div class="highlight"><pre><code>mkdir ft_userdata
cd ft_userdata/
# 저장소에서 docker-compose 파일 다운로드
curl https://raw.githubusercontent.com/freqtrade/freqtrade/stable/docker-compose.yml -o docker-compose.yml

# freqtrade 이미지 가져오기
docker compose pull

# 사용자 디렉토리 구조 생성
docker compose run --rm freqtrade create-userdir --userdir user_data

# 구성 생성 - 대화형 질문에 답변 필요
docker compose run --rm freqtrade new-config --config user_data/config.json
</code></pre></div><p> 위 스니펫은 <code> ft_userdata </code> 라는 새 디렉토리를 생성하고, 최신 compose 파일을 다운로드하며 freqtrade 이미지를 가져옵니다. 마지막 두 단계는 <code> user_data </code> 디렉토리와 기본 구성을 생성합니다. </p><div class="admonition question"><p class="admonition-title">봇 설정을 어떻게 수정하나요?</p><p> 위 설정을 사용하면 <code> user_data/config.json </code> 파일에서 언제든지 설정을 수정할 수 있습니다. </p><p> 또한 <code> docker-compose.yml </code> 파일의 명령 섹션을 수정하여 전략 및 명령을 변경할 수 있습니다. </p></div><h4 id="adding-a-custom-strategy"> 커스텀 전략 추가 <a class="headerlink" href="#adding-a-custom-strategy" title="영구 링크"> ¶ </a></h4><ol><li> 구성은 이제 <code> user_data/config.json </code> 으로 사용할 수 있습니다. </li><li> 커스텀 전략을 <code> user_data/strategies/ </code> 디렉토리에 복사하세요. </li><li> 전략 클래스 이름을 <code> docker-compose.yml </code> 파일에 추가하세요. </li></ol><p><code> SampleStrategy </code> 는 기본적으로 실행됩니다. </p>`,18)),o("div",p,[e[4]||(e[4]=o("p",{class:"admonition-title"},[o("code",null," SampleStrategy "),d(" 는 데모일 뿐입니다! ")],-1)),o("p",null,[e[1]||(e[1]=o("code",null," SampleStrategy ",-1)),e[2]||(e[2]=d(" 는 참고용이며, 자신의 전략을 위한 아이디어를 제공합니다. 항상 전략을 백테스트하고 실제 자금을 위험에 노출시키기 전에 드라이런(dry-run)을 사용하세요! 전략 개발에 대한 자세한 내용은 ")),i(r,{to:"strategy-customization"},{default:s(()=>e[0]||(e[0]=[d(" 전략 문서 ")])),_:1}),e[3]||(e[3]=d(" 를 참조하세요. "))])]),e[36]||(e[36]=t('<p>이 작업이 완료되면, 봇을 거래 모드(드라이런 또는 실거래 모드)로 실행할 준비가 됩니다. 위에서 선택한 질문에 따라 모드가 결정됩니다.</p><div class="highlight"><pre><code>docker compose up -d</code></pre></div><div class="admonition warning"><p class="admonition-title">기본 구성</p><p>생성된 구성은 대부분 작동 가능하지만, 봇을 시작하기 전에 가격, 페어리스트 등 모든 옵션이 원하는 대로 설정되었는지 확인해야 합니다.</p></div><h4 id="accessing-the-ui"> UI에 접근하기 <a class="headerlink" href="#accessing-the-ui" title="영구 링크"> ¶ </a></h4><p><code> new-config </code> 단계에서 FreqUI를 활성화하도록 선택한 경우, FreqUI는 <code> localhost:8080 </code> 포트에서 사용할 수 있습니다.</p><p>이제 브라우저에서 <code>localhost:8080</code>을 입력하여 UI에 접근할 수 있습니다.</p>',6)),o("details",k,[e[8]||(e[8]=o("summary",null,"원격 서버에서 UI 접근",-1)),o("p",null,[e[6]||(e[6]=d("VPS에서 실행 중인 경우 SSH 터널을 사용하거나 VPN(OpenVPN, WireGuard)을 설정하여 봇에 연결하는 것을 고려해야 합니다. 이는 FreqUI가 인터넷에 직접 노출되지 않도록 보장하며, 이는 보안상의 이유로 권장되지 않습니다(FreqUI는 기본적으로 HTTPS를 지원하지 않습니다). 이러한 도구의 설정은 이 튜토리얼의 범위를 벗어나지만, 인터넷에서 많은 좋은 튜토리얼을 찾을 수 있습니다. 또한 Docker를 사용한 API 구성에 대해 더 알아보려면 ")),i(r,{to:"rest-api"},{default:s(()=>e[5]||(e[5]=[d("API 구성 문서")])),_:1}),e[7]||(e[7]=d("를 읽어보세요."))])]),e[37]||(e[37]=t(`<h4 id="monitoring-the-bot"> 봇 모니터링 <a class="headerlink" href="#monitoring-the-bot" title="영구 링크"> ¶ </a></h4><p><code> docker compose ps </code> 명령을 사용하여 실행 중인 인스턴스를 확인할 수 있습니다. 여기에는 <code> freqtrade </code> 서비스가 <code> running </code> 상태로 표시되어야 합니다. 그렇지 않은 경우 로그를 확인하는 것이 좋습니다(다음 항목 참조).</p><h4 id="docker-compose-logs"> Docker Compose 로그 <a class="headerlink" href="#docker-compose-logs" title="영구 링크"> ¶ </a></h4><p> 로그는 <code> user_data/logs/freqtrade.log </code>에 기록됩니다. <br> 또한 <code> docker compose logs -f </code> 명령을 사용하여 최신 로그를 확인할 수 있습니다. </p><h4 id="database"> 데이터베이스 <a class="headerlink" href="#database" title="영구 링크"> ¶ </a></h4><p>데이터베이스는 <code> user_data/tradesv3.sqlite </code>에 위치합니다.</p><h4 id="updating-freqtrade-with-docker"> Docker를 사용하여 Freqtrade 업데이트 <a class="headerlink" href="#updating-freqtrade-with-docker" title="영구 링크"> ¶ </a></h4><p>Docker를 사용할 때 Freqtrade를 업데이트하는 것은 다음 두 명령을 실행하는 것만큼 간단합니다:</p><div class="highlight"><pre><code># 최신 이미지 다운로드
docker compose pull
# 이미지 재시작
docker compose up -d</code></pre></div><p>이 명령은 먼저 최신 이미지를 가져오고, 방금 가져온 버전으로 컨테이너를 재시작합니다.</p><div class="admonition warning"><p class="admonition-title">변경 로그 확인</p><p>항상 변경 로그를 확인하여 중단되는 변경 사항/수동 개입이 필요한 사항을 확인하고, 업데이트 후 봇이 올바르게 시작되는지 확인하세요.</p></div><h3 id="editing-the-docker-compose-file"> docker-compose 파일 편집 <a class="headerlink" href="#editing-the-docker-compose-file" title="영구 링크"> ¶ </a></h3><p>고급 사용자는 docker-compose 파일을 추가 옵션이나 인수를 포함하도록 더 편집할 수 있습니다.</p><p> 모든 Freqtrade 명령은 다음 명령을 실행하여 사용할 수 있습니다: <code> docker compose run --rm freqtrade &lt;명령&gt; &lt;선택적 인수&gt; </code></p>`,14)),o("div",m,[e[18]||(e[18]=o("p",{class:"admonition-title"},[o("code",null," docker compose "),d(" 를 사용한 거래 명령 ")],-1)),o("p",null,[e[10]||(e[10]=d(" 거래 명령( ")),e[11]||(e[11]=o("code",null," freqtrade trade <...> ",-1)),e[12]||(e[12]=d(" )은 ")),e[13]||(e[13]=o("code",null," docker compose run ",-1)),e[14]||(e[14]=d(" 을 통해 실행하지 말고, ")),e[15]||(e[15]=o("code",null," docker compose up -d ",-1)),e[16]||(e[16]=d(" 를 사용해야 합니다. 이렇게 하면 컨테이너가 올바르게 시작되고(포트 포워딩 포함), 시스템 재부팅 후에도 컨테이너가 다시 시작되도록 보장합니다. FreqUI를 사용하려는 경우, ")),i(r,{to:"rest-api"},{default:s(()=>e[9]||(e[9]=[d("구성")])),_:1}),e[17]||(e[17]=d("을 적절히 조정해야 UI를 사용할 수 있습니다. "))])]),e[38]||(e[38]=t('<div class="admonition note"><p class="admonition-title"><code> docker compose run --rm </code></p><p><code> --rm </code> 을 포함하면 완료 후 컨테이너가 제거되며, 거래 모드(<code> freqtrade trade </code> 명령 실행)를 제외한 모든 모드에서 강력히 권장됩니다. </p></div><details class="note"><summary>docker-compose 없이 docker 사용</summary><p><code> docker compose run --rm </code> 은 compose 파일을 제공해야 합니다. 인증이 필요하지 않은 일부 Freqtrade 명령(예: <code> list-pairs </code>)은 <code> docker run --rm </code> 을 사용하여 실행할 수 있습니다. <br> 예를 들어: <code> docker run --rm freqtradeorg/freqtrade:stable list-pairs --exchange binance --quote BTC --print-json </code><br> 이 방법은 실행 중인 컨테이너에 영향을 주지 않고 교환 정보를 가져와 <code> config.json </code>에 추가하는 데 유용할 수 있습니다. </p></details><h4 id="example-download-data-with-docker"> 예제: Docker를 사용한 데이터 다운로드 <a class="headerlink" href="#example-download-data-with-docker" title="영구 링크"> ¶ </a></h4><p>Binance에서 ETH/BTC 페어와 1시간 간격의 데이터를 5일 동안 백테스트용으로 다운로드합니다. 데이터는 호스트의 <code> user_data/data/ </code> 디렉토리에 저장됩니다.</p><div class="highlight"><pre><code>docker compose run --rm freqtrade download-data --pairs ETH/BTC --exchange binance --days 5 -t 1h</code></pre></div>',5)),o("p",null,[e[20]||(e[20]=d(" 데이터 다운로드에 대한 자세한 내용은 ")),i(r,{to:"data-download"},{default:s(()=>e[19]||(e[19]=[d("데이터 다운로드 문서")])),_:1}),e[21]||(e[21]=d(" 를 참조하세요. "))]),e[39]||(e[39]=o("h4",{id:"example-backtest-with-docker"},[d(" 예제: Docker를 사용한 백테스트 "),o("a",{class:"headerlink",href:"#example-backtest-with-docker",title:"영구 링크"}," ¶ ")],-1)),e[40]||(e[40]=o("p",null,"SampleStrategy와 지정된 기간의 과거 데이터를 사용하여 5분 간격으로 Docker 컨테이너에서 백테스트를 실행합니다:",-1)),e[41]||(e[41]=o("div",{class:"highlight"},[o("pre",null,[o("code",null,"docker compose run --rm freqtrade backtesting --config user_data/config.json --strategy SampleStrategy --timerange 20190801-20191001 -i 5m")])],-1)),o("p",null,[e[23]||(e[23]=d(" 백테스트에 대한 자세한 내용은 ")),i(r,{to:"backtesting"},{default:s(()=>e[22]||(e[22]=[d("백테스트 문서")])),_:1}),e[24]||(e[24]=d(" 를 참조하세요. "))]),e[42]||(e[42]=t(`<h3 id="additional-dependencies-with-docker"> Docker를 사용한 추가 종속성 <a class="headerlink" href="#additional-dependencies-with-docker" title="영구 링크"> ¶ </a></h3><p>전략에 기본 이미지에 포함되지 않은 종속성이 필요한 경우, 호스트에서 이미지를 빌드해야 합니다. 이를 위해 추가 종속성 설치 단계를 포함하는 Dockerfile을 생성하세요(예제는 <a href="https://github.com/freqtrade/freqtrade/blob/develop/docker/Dockerfile.custom">docker/Dockerfile.custom</a> 참조).</p><p>그런 다음 <code> docker-compose.yml </code> 파일을 수정하고 빌드 단계를 주석 해제하며, 이름 충돌을 방지하기 위해 이미지를 새 이름으로 변경해야 합니다.</p><div class="highlight"><pre><code>image: freqtrade_custom
build:
  context: .
  dockerfile: &quot;./Dockerfile.&gt;your_extension&lt;&quot;</code></pre></div><p>그런 다음 <code> docker compose build --pull </code> 명령을 실행하여 Docker 이미지를 빌드하고, 위에서 설명한 명령을 사용하여 실행할 수 있습니다.</p><h3 id="plotting-with-docker"> Docker를 사용한 플로팅 <a class="headerlink" href="#plotting-with-docker" title="영구 링크"> ¶ </a></h3>`,6)),o("p",null,[e[26]||(e[26]=o("code",null," freqtrade plot-profit ",-1)),e[27]||(e[27]=d(" 및 ")),e[28]||(e[28]=o("code",null," freqtrade plot-dataframe ",-1)),e[29]||(e[29]=d(" 명령( ")),i(r,{to:"plotting"},{default:s(()=>e[25]||(e[25]=[d("문서")])),_:1}),e[30]||(e[30]=d(")은 ")),e[31]||(e[31]=o("code",null," docker-compose.yml ",-1)),e[32]||(e[32]=d(" 파일에서 이미지를 ")),e[33]||(e[33]=o("code",null," *_plot ",-1)),e[34]||(e[34]=d("로 변경하여 사용할 수 있습니다. 그런 다음 다음과 같이 명령을 실행할 수 있습니다:"))]),e[43]||(e[43]=t(`<div class="highlight"><pre><code>docker compose run --rm freqtrade plot-dataframe --strategy AwesomeStrategy -p BTC/ETH --timerange=20180801-20180805</code></pre></div><p>출력은 <code> user_data/plot </code> 디렉토리에 저장되며, 최신 브라우저를 사용하여 열 수 있습니다.</p><h3 id="data-analysis-using-docker-compose"> Docker Compose를 사용한 데이터 분석 <a class="headerlink" href="#data-analysis-using-docker-compose" title="영구 링크"> ¶ </a></h3><p>Freqtrade는 Jupyter Lab 서버를 시작하는 Docker Compose 파일을 제공합니다. 다음 명령을 사용하여 이 서버를 실행할 수 있습니다:</p><div class="highlight"><pre><code>docker compose -f docker/docker-compose-jupyter.yml up</code></pre></div><p>이 명령은 Jupyter Lab을 실행하는 Docker 컨테이너를 생성하며, <code> https://127.0.0.1:8888/lab </code>에서 접근할 수 있습니다. 간단한 로그인을 위해 시작 후 콘솔에 출력된 링크를 사용하세요.</p><p>이 이미지의 일부는 로컬에서 빌드되므로, Freqtrade(및 종속성)를 최신 상태로 유지하기 위해 이미지를 주기적으로 다시 빌드하는 것이 좋습니다.</p><div class="highlight"><pre><code>docker compose -f docker/docker-compose-jupyter.yml build --no-cache</code></pre></div><h2 id="troubleshooting"> 문제 해결 <a class="headerlink" href="#troubleshooting" title="영구 링크"> ¶ </a></h2><h3 id="docker-on-windows"> Windows에서 Docker <a class="headerlink" href="#docker-on-windows" title="영구 링크"> ¶ </a></h3><ul><li><p> 오류: <code>&quot;Timestamp for this request is outside of the recvWindow.&quot;</code><br> 시장 API 요청은 동기화된 시계를 필요로 하지만 Docker 컨테이너의 시간이 점차 과거로 이동할 수 있습니다. 이 문제를 일시적으로 해결하려면 <code>wsl --shutdown</code>을 실행한 후 Docker를 다시 시작해야 합니다(Windows 10에서는 팝업이 표시될 수 있습니다). 영구적인 해결책은 Docker 컨테이너를 Linux 호스트에서 실행하거나 WSL을 주기적으로 다시 시작하도록 스케줄러를 설정하는 것입니다. </p><div class="highlight"><pre><code>taskkill /IM &quot;Docker Desktop.exe&quot; /F
wsl --shutdown
start &quot;&quot; &quot;C:\\Program Files\\Docker\\Docker\\Docker Desktop.exe&quot;</code></pre></div></li></ul><ul><li> API에 연결할 수 없음(Windows) <br> Windows에서 Docker(Desktop)를 방금 설치한 경우, 시스템을 재부팅해야 합니다. Docker는 재부팅 없이 네트워크 연결에 문제가 있을 수 있습니다. 또한 <a href="#accessing-the-ui">설정</a>이 올바른지 확인하세요. </li></ul><div class="admonition warning"><p class="admonition-title">경고</p><p>위와 같은 이유로, 프로덕션 환경에서 Windows에서 Docker를 사용하는 것은 권장되지 않습니다. 실험, 데이터 다운로드 및 백테스트에만 사용하는 것이 좋습니다. Freqtrade를 안정적으로 실행하려면 Linux VPS를 사용하는 것이 가장 좋습니다.</p></div>`,13))])}}};export{h as default};
