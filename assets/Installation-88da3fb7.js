import{r as p,o,c as d,b as a,d as n,e,w as l,a as i}from"./index-747ab7f0.js";const r={class:"md-content__inner md-typeset"},c={class:"admonition note"},u={class:"tabbed-set tabbed-alternate","data-tabs":"1:3"},h={class:"tabbed-content"},v={class:"tabbed-block"},w={class:"admonition note"},f={class:"admonition note"},m={class:"admonition note"},k={__name:"Installation",setup(b){return(g,s)=>{const t=p("router-link");return o(),d("article",r,[s[73]||(s[73]=a("h1",{id:"installation"},[n(" 설치 "),a("a",{class:"headerlink",href:"#installation",title:"영구 링크"}," ¶ ")],-1)),s[74]||(s[74]=a("p",null,"이 페이지는 봇을 실행하기 위해 환경을 준비하는 방법을 설명합니다.",-1)),s[75]||(s[75]=a("p",null,"Freqtrade 문서는 Freqtrade를 설치하는 다양한 방법을 설명합니다.",-1)),a("ul",null,[a("li",null,[e(t,{to:"docker-quickstart"},{default:l(()=>s[0]||(s[0]=[n(" Docker 이미지 ")])),_:1}),s[1]||(s[1]=n(" (별도 페이지) "))]),s[2]||(s[2]=a("li",null,[a("a",{href:"#script-installation"}," 스크립트 설치 ")],-1)),s[3]||(s[3]=a("li",null,[a("a",{href:"#manual-installation"}," 수동 설치 ")],-1)),s[4]||(s[4]=a("li",null,[a("a",{href:"#installation-with-conda"}," Conda를 사용한 설치 ")],-1))]),a("p",null,[s[6]||(s[6]=n(" Freqtrade의 작동 방식을 평가하는 동안 빠르게 시작하려면 미리 빌드된 ")),e(t,{to:"docker-quickstart"},{default:l(()=>s[5]||(s[5]=[n(" Docker 이미지 ")])),_:1}),s[7]||(s[7]=n(" 를 사용하는 것을 고려하십시오. "))]),s[76]||(s[76]=a("hr",null,null,-1)),s[77]||(s[77]=a("h2",{id:"information"},[n(" 정보 "),a("a",{class:"headerlink",href:"#information",title:"영구 링크"}," ¶ ")],-1)),a("p",null,[s[9]||(s[9]=n(" Windows 설치의 경우 ")),e(t,{to:"windows-installation"},{default:l(()=>s[8]||(s[8]=[n(" Windows 설치 가이드 ")])),_:1}),s[10]||(s[10]=n(" 를 사용하십시오. "))]),s[78]||(s[78]=i('<p> Freqtrade를 설치하고 실행하는 가장 쉬운 방법은 Github 저장소를 클론한 다음 플랫폼에 맞는 <code> ./setup.sh </code> 스크립트를 실행하는 것입니다. </p><div class="admonition note"><p class="admonition-title">버전 고려 사항</p><p> 저장소를 클론할 때 기본 작업 브랜치는 <code> develop </code> 입니다. 이 브랜치는 최신 기능을 포함하며, 자동화된 테스트 덕분에 상대적으로 안정적이라고 간주될 수 있습니다. <code> stable </code> 브랜치는 마지막 릴리스의 코드를 포함하며, 일반적으로 한 달에 한 번, 약 일주일 된 <code> develop </code> 브랜치의 스냅샷을 기반으로 릴리스됩니다. 따라서 더 안정적일 가능성이 있습니다. </p></div><div class="admonition note"><p class="admonition-title">참고</p><p> Python 3.10 이상과 해당 <code> pip </code> 이 사용 가능해야 합니다. 설치 스크립트는 그렇지 않은 경우 경고를 표시하고 중지됩니다. <code> git </code> 도 Freqtrade 저장소를 클론하는 데 필요합니다. <br> 또한 설치가 성공적으로 완료되려면 Python 헤더( <code> python&lt;버전&gt;-dev </code> / <code> python&lt;버전&gt;-devel </code> )가 사용 가능해야 합니다. </p></div><div class="admonition warning"><p class="admonition-title">정확한 시계</p><p>봇을 실행하는 시스템의 시계는 정확해야 하며, 거래소와의 통신 문제를 방지하기 위해 NTP 서버와 자주 동기화되어야 합니다.</p></div><hr><h2 id="requirements"> 요구 사항 <a class="headerlink" href="#requirements" title="영구 링크"> ¶ </a></h2><p> 이 요구 사항은 <a href="#script-installation"> 스크립트 설치 </a> 와 <a href="#manual-installation"> 수동 설치 </a> 에 모두 적용됩니다. </p>',7)),a("div",c,[s[14]||(s[14]=a("p",{class:"admonition-title"},"ARM64 시스템",-1)),a("p",null,[s[12]||(s[12]=n(" ARM64 시스템(MacOS M1 또는 Oracle VM과 같은)을 실행 중인 경우 ")),e(t,{to:"docker-quickstart"},{default:l(()=>s[11]||(s[11]=[n(" Docker ")])),_:1}),s[13]||(s[13]=n(" 를 사용하여 Freqtrade를 실행하십시오. 네이티브 설치는 수동 작업이 필요하지만 현재는 지원되지 않습니다. "))])]),s[79]||(s[79]=i('<h3 id="install-guide"> 설치 가이드 <a class="headerlink" href="#install-guide" title="영구 링크"> ¶ </a></h3><ul><li><a href="http://docs.python-guide.org/en/latest/starting/installation/"> Python &gt;= 3.10 </a></li><li><a href="https://pip.pypa.io/en/stable/installing/"> pip </a></li><li><a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"> git </a></li><li><a href="https://virtualenv.pypa.io/en/stable/installation.html"> virtualenv </a> (권장) </li><li><a href="https://ta-lib.github.io/ta-lib-python/"> TA-Lib </a> (설치 지침 <a href="#install-ta-lib"> 아래 </a> 참조) </li></ul><h3 id="install-code"> 설치 코드 <a class="headerlink" href="#install-code" title="영구 링크"> ¶ </a></h3><p>우리는 Ubuntu, MacOS 및 Windows에 대한 설치 지침을 포함/수집했습니다. 이는 가이드라인이며 다른 배포판에서는 성공 여부가 다를 수 있습니다. OS별 단계가 먼저 나열되며, 아래의 공통 섹션은 모든 시스템에 필요합니다.</p><div class="admonition note"><p class="admonition-title">참고</p><p>Python 3.10 이상과 해당 pip이 사용 가능해야 합니다.</p></div>',5)),a("div",u,[s[22]||(s[22]=i('<input checked="checked" id="__tabbed_1_1" name="__tabbed_1" type="radio"><input id="__tabbed_1_2" name="__tabbed_1" type="radio"><input id="__tabbed_1_3" name="__tabbed_1" type="radio"><div class="tabbed-labels"><label for="__tabbed_1_1"> Debian/Ubuntu </label><label for="__tabbed_1_2"> MacOS </label><label for="__tabbed_1_3"> RaspberryPi/Raspbian </label></div>',4)),a("div",h,[s[21]||(s[21]=i(`<div class="tabbed-block"><h4 id="install-necessary-dependencies"> 필요한 종속성 설치 <a class="headerlink" href="#install-necessary-dependencies" title="영구 링크"> ¶ </a></h4><div class="highlight"><pre><code><span class="c1"># 저장소 업데이트</span>
sudo<span class="w"> </span>apt-get<span class="w"> </span>update

<span class="c1"># 패키지 설치</span>
sudo<span class="w"> </span>apt<span class="w"> </span>install<span class="w"> </span>-y<span class="w"> </span>python3-pip<span class="w"> </span>python3-venv<span class="w"> </span>python3-dev<span class="w"> </span>python3-pandas<span class="w"> </span>git<span class="w"> </span>curl
</code></pre></div></div><div class="tabbed-block"><h4 id="install-necessary-dependencies_1"> 필요한 종속성 설치 <a class="headerlink" href="#install-necessary-dependencies_1" title="영구 링크"> ¶ </a></h4><p><a href="https://brew.sh/"> Homebrew </a> 가 설치되어 있지 않은 경우 설치하십시오. </p><div class="highlight"><pre><code><span class="c1"># 패키지 설치</span>
brew<span class="w"> </span>install<span class="w"> </span>gettext<span class="w"> </span>libomp
</code></pre></div><div class="admonition note"><p class="admonition-title">참고</p><p><code> setup.sh </code> 스크립트는 Homebrew가 시스템에 설치되어 있다고 가정하고 이러한 종속성을 설치합니다. </p></div></div>`,2)),a("div",v,[s[19]||(s[19]=i(`<p> 다음은 최신 <a href="https://www.raspberrypi.org/downloads/raspbian/"> Raspbian Buster lite 이미지 </a> 를 가정합니다. 이 이미지는 python3.11이 사전 설치되어 있어 Freqtrade를 쉽게 실행할 수 있습니다. </p><p>Raspbian Buster lite 이미지와 모든 업데이트가 적용된 Raspberry Pi 3에서 테스트되었습니다.</p><div class="highlight"><pre><code>sudo<span class="w"> </span>apt-get<span class="w"> </span>install<span class="w"> </span>python3-venv<span class="w"> </span>libatlas-base-dev<span class="w"> </span>cmake<span class="w"> </span>curl
<span class="c1"># 설치 속도를 높이기 위해 piwheels.org 사용</span>
sudo<span class="w"> </span><span class="nb">echo</span><span class="w"> </span><span class="s2">&quot;[global]\\nextra-index-url=https://www.piwheels.org/simple&quot;</span><span class="w"> </span>&gt;<span class="w"> </span>tee<span class="w"> </span>/etc/pip.conf

git<span class="w"> </span>clone<span class="w"> </span>https://github.com/freqtrade/freqtrade.git
<span class="nb">cd</span><span class="w"> </span>freqtrade

bash<span class="w"> </span>setup.sh<span class="w"> </span>-i
</code></pre></div>`,3)),a("div",w,[s[18]||(s[18]=a("p",{class:"admonition-title"},"설치 시간",-1)),a("p",null,[s[16]||(s[16]=n(" 인터넷 속도와 Raspberry Pi 버전에 따라 설치가 완료되는 데 여러 시간이 걸릴 수 있습니다. 따라서 Raspberry Pi용으로 미리 빌드된 Docker 이미지를 사용하는 것이 좋습니다. 자세한 내용은 ")),e(t,{to:"docker-quickstart"},{default:l(()=>s[15]||(s[15]=[n(" Docker 빠른 시작 문서 ")])),_:1}),s[17]||(s[17]=n(" 를 참조하십시오. "))])]),s[20]||(s[20]=a("div",{class:"admonition note"},[a("p",{class:"admonition-title"},"참고"),a("p",null,[n(" 위의 내용은 hyperopt 종속성을 설치하지 않습니다. 이를 설치하려면 "),a("code",null," python3 -m pip install -e .[hyperopt] "),n(" 를 사용하십시오. Raspberry Pi에서 hyperopt를 실행하는 것은 매우 리소스를 많이 사용하는 작업이므로 강력한 컴퓨터에서 수행하는 것이 좋습니다. ")])],-1))])])]),s[80]||(s[80]=i(`<hr><h2 id="freqtrade-repository"> Freqtrade 저장소 <a class="headerlink" href="#freqtrade-repository" title="영구 링크"> ¶ </a></h2><p> Freqtrade는 오픈 소스 암호화폐 거래 봇으로, 코드는 <code> github.com </code> 에 호스팅됩니다. </p><div class="highlight"><pre><code><span class="c1"># Freqtrade 저장소의 \`develop\` 브랜치 다운로드</span>
git<span class="w"> </span>clone<span class="w"> </span>https://github.com/freqtrade/freqtrade.git

<span class="c1"># 다운로드한 디렉토리로 이동</span>
<span class="nb">cd</span><span class="w"> </span>freqtrade

<span class="c1"># 선택 사항 (1): 초보 사용자</span>
git<span class="w"> </span>checkout<span class="w"> </span>stable

<span class="c1"># 선택 사항 (2): 고급 사용자</span>
git<span class="w"> </span>checkout<span class="w"> </span>develop
</code></pre></div><p> (1) 이 명령은 클론된 저장소를 <code> stable </code> 브랜치로 전환합니다. (2) <code> develop </code> 브랜치에 머물고 싶은 경우 필요하지 않습니다. </p><p> 나중에 <code> git checkout stable </code> / <code> git checkout develop </code> 명령을 사용하여 언제든지 브랜치를 전환할 수 있습니다. </p><details class="note"><summary>pypi에서 설치</summary><p> Freqtrade를 설치하는 또 다른 방법은 <a href="https://pypi.org/project/freqtrade/"> pypi </a> 에서 설치하는 것입니다. 이 방법의 단점은 이 방법이 사전에 ta-lib가 올바르게 설치되어 있어야 하므로 현재 권장되는 설치 방법이 아니라는 것입니다. </p><div class="highlight"><pre><code>pip<span class="w"> </span>install<span class="w"> </span>freqtrade
</code></pre></div></details><hr><h2 id="script-installation"> 스크립트 설치 <a class="headerlink" href="#script-installation" title="영구 링크"> ¶ </a></h2><p> Freqtrade를 설치하는 첫 번째 방법은 제공된 Linux/MacOS <code> ./setup.sh </code> 스크립트를 사용하여 모든 종속성을 설치하고 봇을 구성하는 것입니다. </p><p><a href="#requirements"> 요구 사항 </a> 을 충족하고 <a href="#freqtrade-repository"> Freqtrade 저장소 </a> 를 다운로드했는지 확인하십시오. </p><h3 id="use-setupsh-install-linuxmacos"> /setup.sh -install 사용 (Linux/MacOS) <a class="headerlink" href="#use-setupsh-install-linuxmacos" title="영구 링크"> ¶ </a></h3><p>Debian, Ubuntu 또는 MacOS를 사용하는 경우 Freqtrade는 Freqtrade를 설치하는 스크립트를 제공합니다.</p><div class="highlight"><pre><code><span class="c1"># --install, Freqtrade를 처음부터 설치</span>
./setup.sh<span class="w"> </span>-i
</code></pre></div><h3 id="activate-your-virtual-environment"> 가상 환경 활성화 <a class="headerlink" href="#activate-your-virtual-environment" title="영구 링크"> ¶ </a></h3><p> 새 터미널을 열 때마다 <code> source .venv/bin/activate </code> 를 실행하여 가상 환경을 활성화해야 합니다. </p><div class="highlight"><pre><code><span class="c1"># 가상 환경 활성화</span>
<span class="nb">source</span><span class="w"> </span>./.venv/bin/activate
</code></pre></div><p><a href="#you-are-ready"> 이제 봇을 실행할 준비가 되었습니다. </a></p><h3 id="other-options-of-setupsh-script"> /setup.sh 스크립트의 다른 옵션 <a class="headerlink" href="#other-options-of-setupsh-script" title="영구 링크"> ¶ </a></h3><p><code> ./script.sh </code> 을 사용하여 봇의 코드베이스를 업데이트, 구성 및 재설정할 수도 있습니다. </p><div class="highlight"><pre><code><span class="c1"># --update, 업데이트를 위해 git pull 명령 실행.</span>
./setup.sh<span class="w"> </span>-u
<span class="c1"># --reset, develop/stable 브랜치를 강제로 재설정.</span>
./setup.sh<span class="w"> </span>-r
</code></pre></div><div class="highlight"><pre><code>** --install **

이 옵션을 사용하면 스크립트가 봇과 대부분의 종속성을 설치합니다:
이를 위해서는 사전에 git 및 python3.10+이 설치되어 있어야 합니다.

* 필수 소프트웨어: \`ta-lib\`
* \`.venv/\`에 가상 환경 설정

이 옵션은 설치 작업과 \`--reset\`의 조합입니다.

** --update **

이 옵션은 현재 브랜치의 최신 버전을 가져오고 가상 환경을 업데이트합니다. 이 옵션을 사용하여 주기적으로 스크립트를 실행하여 봇을 업데이트하십시오.

** --reset **

이 옵션은 브랜치가 \`stable\` 또는 \`develop\`인 경우에만 브랜치를 강제로 재설정하고 가상 환경을 다시 만듭니다.
</code></pre></div><hr><h2 id="manual-installation"> 수동 설치 <a class="headerlink" href="#manual-installation" title="영구 링크"> ¶ </a></h2><p><a href="#requirements"> 요구 사항 </a> 을 충족하고 <a href="#freqtrade-repository"> Freqtrade 저장소 </a> 를 다운로드했는지 확인하십시오. </p><h3 id="install-ta-lib"> TA-Lib 설치 <a class="headerlink" href="#install-ta-lib" title="영구 링크"> ¶ </a></h3><h4 id="ta-lib-script-installation"> TA-Lib 스크립트 설치 <a class="headerlink" href="#ta-lib-script-installation" title="영구 링크"> ¶ </a></h4><div class="highlight"><pre><code>sudo<span class="w"> </span>./build_helpers/install_ta-lib.sh
</code></pre></div><div class="admonition note"><p class="admonition-title">참고</p><p>이 스크립트는 이 저장소에 포함된 ta-lib tar.gz를 사용합니다.</p></div><h5 id="ta-lib-manual-installation"> TA-Lib 수동 설치 <a class="headerlink" href="#ta-lib-manual-installation" title="영구 링크"> ¶ </a></h5><p><a href="https://ta-lib.github.io/ta-lib-python/install.html"> 공식 설치 가이드 </a></p><div class="highlight"><pre><code>wget<span class="w"> </span>http://prdownloads.sourceforge.net/ta-lib/ta-lib-0.4.0-src.tar.gz
tar<span class="w"> </span>xvzf<span class="w"> </span>ta-lib-0.4.0-src.tar.gz
<span class="nb">cd</span><span class="w"> </span>ta-lib
sed<span class="w"> </span>-i.bak<span class="w"> </span><span class="s2">&quot;s|0.00000001|0.000000000000000001 |g&quot;</span><span class="w"> </span>src/ta_func/ta_utility.h
./configure<span class="w"> </span>--prefix<span class="o">=</span>/usr/local
make
sudo<span class="w"> </span>make<span class="w"> </span>install
<span class="c1"># Debian 기반 시스템(debian, ubuntu 등)에서는 ldconfig 업데이트가 필요할 수 있습니다.</span>
sudo<span class="w"> </span>ldconfig<span class="w">  </span>
<span class="nb">cd</span><span class="w"> </span>..
rm<span class="w"> </span>-rf<span class="w"> </span>./ta-lib*
</code></pre></div><h3 id="setup-python-virtual-environment-virtualenv"> 파이썬 가상 환경 설정 (virtualenv) <a class="headerlink" href="#setup-python-virtual-environment-virtualenv" title="영구 링크"> ¶ </a></h3><p> Freqtrade를 별도의 <code> virtual environment </code> 에서 실행합니다. </p><div class="highlight"><pre><code><span class="c1"># /freqtrade/.venv 디렉토리에 가상 환경 생성</span>
python3<span class="w"> </span>-m<span class="w"> </span>venv<span class="w"> </span>.venv

<span class="c1"># 가상 환경 실행</span>
<span class="nb">source</span><span class="w"> </span>.venv/bin/activate
</code></pre></div><h3 id="install-python-dependencies"> 파이썬 종속성 설치 <a class="headerlink" href="#install-python-dependencies" title="영구 링크"> ¶ </a></h3><div class="highlight"><pre><code>python3<span class="w"> </span>-m<span class="w"> </span>pip<span class="w"> </span>install<span class="w"> </span>--upgrade<span class="w"> </span>pip
python3<span class="w"> </span>-m<span class="w"> </span>pip<span class="w"> </span>install<span class="w"> </span>-r<span class="w"> </span>requirements.txt
<span class="c1"># freqtrade 설치</span>
python3<span class="w"> </span>-m<span class="w"> </span>pip<span class="w"> </span>install<span class="w"> </span>-e<span class="w"> </span>.
</code></pre></div><p><a href="#you-are-ready"> 이제 준비가 완료되었습니다. </a> 봇을 실행할 수 있습니다. </p><h3 id="optional-post-installation-tasks"> (선택 사항) 설치 후 작업 <a class="headerlink" href="#optional-post-installation-tasks" title="영구 링크"> ¶ </a></h3>`,39)),a("div",f,[s[30]||(s[30]=a("p",{class:"admonition-title"},"참고",-1)),a("p",null,[s[24]||(s[24]=n(" 서버에서 봇을 실행하는 경우 ")),e(t,{to:"docker-quickstart"},{default:l(()=>s[23]||(s[23]=[n(" Docker ")])),_:1}),s[25]||(s[25]=n(" 또는 ")),s[26]||(s[26]=a("code",null," screen ",-1)),s[27]||(s[27]=n(" 과 같은 터미널 멀티플렉서를 사용하거나 ")),s[28]||(s[28]=a("a",{href:"https://en.wikipedia.org/wiki/Tmux"},[a("code",null," tmux ")],-1)),s[29]||(s[29]=n(" 를 사용하여 로그아웃 시 봇이 중지되지 않도록 고려하십시오. "))])]),a("p",null,[s[32]||(s[32]=n(" Linux에서 ")),s[33]||(s[33]=a("code",null," systemd ",-1)),s[34]||(s[34]=n(" 소프트웨어 스위트를 사용하는 경우, 선택적으로 봇을 ")),s[35]||(s[35]=a("code",null," systemd 서비스 ",-1)),s[36]||(s[36]=n(" 로 실행하거나 로그 메시지를 ")),s[37]||(s[37]=a("code",null," syslog ",-1)),s[38]||(s[38]=n(" / ")),s[39]||(s[39]=a("code",null," rsyslog ",-1)),s[40]||(s[40]=n(" 또는 ")),s[41]||(s[41]=a("code",null," journald ",-1)),s[42]||(s[42]=n(" 데몬으로 전송하도록 설정할 수 있습니다. 자세한 내용은 ")),e(t,{to:"advanced-setup"},{default:l(()=>s[31]||(s[31]=[n(" 고급 로깅 ")])),_:1}),s[43]||(s[43]=n(" 을 참조하십시오. "))]),s[81]||(s[81]=i(`<h3 id="setup-python-virtual-environment-virtualenv"> Setup Python virtual environment (virtualenv) <a class="headerlink" href="#setup-python-virtual-environment-virtualenv" title="Permanent link"> ¶ </a></h3><p> You will run freqtrade in separated <code> virtual environment </code></p><div class="highlight"><pre><code><span class="c1"># create virtualenv in directory /freqtrade/.venv</span>
python3<span class="w"> </span>-m<span class="w"> </span>venv<span class="w"> </span>.venv

<span class="c1"># run virtualenv</span>
<span class="nb">source</span><span class="w"> </span>.venv/bin/activate
</code></pre></div><h3 id="install-python-dependencies"> Install python dependencies <a class="headerlink" href="#install-python-dependencies" title="Permanent link"> ¶ </a></h3><div class="highlight"><pre><code>python3<span class="w"> </span>-m<span class="w"> </span>pip<span class="w"> </span>install<span class="w"> </span>--upgrade<span class="w"> </span>pip
python3<span class="w"> </span>-m<span class="w"> </span>pip<span class="w"> </span>install<span class="w"> </span>-r<span class="w"> </span>requirements.txt
<span class="c1"># install freqtrade</span>
python3<span class="w"> </span>-m<span class="w"> </span>pip<span class="w"> </span>install<span class="w"> </span>-e<span class="w"> </span>.
</code></pre></div><p><a href="#you-are-ready"> You are now ready </a> to run the bot. </p><h3 id="optional-post-installation-tasks"> (Optional) Post-installation Tasks <a class="headerlink" href="#optional-post-installation-tasks" title="Permanent link"> ¶ </a></h3>`,7)),a("div",m,[s[51]||(s[51]=a("p",{class:"admonition-title"},"Note",-1)),a("p",null,[s[45]||(s[45]=n(" If you run the bot on a server, you should consider using ")),e(t,{to:"docker-quickstart"},{default:l(()=>s[44]||(s[44]=[n(" Docker ")])),_:1}),s[46]||(s[46]=n(" or a terminal multiplexer like ")),s[47]||(s[47]=a("code",null," screen ",-1)),s[48]||(s[48]=n(" or ")),s[49]||(s[49]=a("a",{href:"https://en.wikipedia.org/wiki/Tmux"},[a("code",null," tmux ")],-1)),s[50]||(s[50]=n(" to avoid that the bot is stopped on logout. "))])]),a("p",null,[s[53]||(s[53]=n(" On Linux with software suite ")),s[54]||(s[54]=a("code",null," systemd ",-1)),s[55]||(s[55]=n(" , as an optional post-installation task, you may wish to setup the bot to run as a ")),s[56]||(s[56]=a("code",null," systemd service ",-1)),s[57]||(s[57]=n(" or configure it to send the log messages to the ")),s[58]||(s[58]=a("code",null," syslog ",-1)),s[59]||(s[59]=n(" / ")),s[60]||(s[60]=a("code",null," rsyslog ",-1)),s[61]||(s[61]=n(" or ")),s[62]||(s[62]=a("code",null," journald ",-1)),s[63]||(s[63]=n(" daemons. See ")),e(t,{to:"advanced-setup"},{default:l(()=>s[52]||(s[52]=[n(" Advanced Logging ")])),_:1}),s[64]||(s[64]=n(" for details. "))]),s[82]||(s[82]=i(`<hr><h2 id="installation-with-conda"> Conda를 사용한 설치 <a class="headerlink" href="#installation-with-conda" title="영구 링크"> ¶ </a></h2><p>Freqtrade는 Miniconda 또는 Anaconda를 사용하여 설치할 수도 있습니다. 설치 공간이 더 작기 때문에 Miniconda를 사용하는 것을 권장합니다. Conda는 Freqtrade 프로그램의 광범위한 라이브러리 종속성을 자동으로 준비하고 관리합니다.</p><h3 id="what-is-conda"> Conda란 무엇인가요? <a class="headerlink" href="#what-is-conda" title="영구 링크"> ¶ </a></h3><p> Conda는 여러 프로그래밍 언어를 위한 패키지, 종속성 및 환경 관리 도구입니다: <a href="https://docs.conda.io/projects/conda/en/latest/index.html"> conda 문서 </a></p><h3 id="installation-with-conda_1"> Conda를 사용한 설치 <a class="headerlink" href="#installation-with-conda_1" title="영구 링크"> ¶ </a></h3><h4 id="install-conda"> Conda 설치 <a class="headerlink" href="#install-conda" title="영구 링크"> ¶ </a></h4><p><a href="https://conda.io/projects/conda/en/latest/user-guide/install/linux.html#install-linux-silent"> Linux에 설치 </a></p><p><a href="https://conda.io/projects/conda/en/latest/user-guide/install/windows.html"> Windows에 설치 </a></p><p>모든 질문에 답변하십시오. 설치 후에는 터미널을 반드시 껐다가 다시 켜야 합니다.</p><h4 id="freqtrade-download"> Freqtrade 다운로드 <a class="headerlink" href="#freqtrade-download" title="영구 링크"> ¶ </a></h4><p>Freqtrade를 다운로드하고 설치하십시오.</p><div class="highlight"><pre><code><span class="c1"># Freqtrade 다운로드</span>
git clone https://github.com/freqtrade/freqtrade.git

<span class="c1"># 다운로드한 디렉토리 &#39;freqtrade&#39;로 이동</span>
cd freqtrade
</code></pre></div><h4 id="freqtrade-install-conda-environment"> Freqtrade 설치: Conda 환경 <a class="headerlink" href="#freqtrade-install-conda-environment" title="영구 링크"> ¶ </a></h4><div class="highlight"><pre><code>conda create --name freqtrade python=3.12
</code></pre></div><div class="admonition note"><p class="admonition-title">Conda 환경 생성</p><p> Conda 명령 <code> create -n </code> 은 선택한 라이브러리의 모든 종속성을 자동으로 설치합니다. 설치 명령의 일반 구조는 다음과 같습니다: </p><div class="highlight"><pre><code><span class="c1"># 원하는 패키지를 선택하십시오</span>
conda env create -n [환경 이름] [파이썬 버전] [패키지]
</code></pre></div></div><h4 id="enterexit-freqtrade-environment"> Freqtrade 환경 진입/종료 <a class="headerlink" href="#enterexit-freqtrade-environment" title="영구 링크"> ¶ </a></h4><p>사용 가능한 환경을 확인하려면</p><div class="highlight"><pre><code>conda env list
</code></pre></div><p>설치된 환경에 진입</p><div class="highlight"><pre><code><span class="c1"># conda 환경에 진입</span>
conda activate freqtrade

<span class="c1"># conda 환경에서 나가기 - 지금은 하지 마십시오</span>
conda deactivate
</code></pre></div><p>pip으로 마지막 파이썬 종속성 설치</p><div class="highlight"><pre><code>python3 -m pip install --upgrade pip
python3 -m pip install -r requirements.txt
python3 -m pip install -e .
</code></pre></div><p>conda libta-lib 패치 (Linux 전용)</p><div class="highlight"><pre><code><span class="c1"># 환경이 활성화되어 있는지 확인하십시오!</span>
conda activate freqtrade

cd build_helpers
bash install_ta-lib.sh \${CONDA_PREFIX} nosudo
</code></pre></div><p><a href="#you-are-ready"> 이제 준비가 완료되었습니다. </a> 봇을 실행할 수 있습니다. </p><h3 id="important-shortcuts"> 중요한 단축키 <a class="headerlink" href="#important-shortcuts" title="영구 링크"> ¶ </a></h3><div class="highlight"><pre><code><span class="c1"># 설치된 conda 환경 목록</span>
conda env list

<span class="c1"># 기본 환경 활성화</span>
conda activate

<span class="c1"># freqtrade 환경 활성화</span>
conda activate freqtrade

<span class="c1"># 모든 conda 환경 비활성화</span>
conda deactivate
</code></pre></div><h3 id="further-info-on-anaconda"> anaconda에 대한 추가 정보 <a class="headerlink" href="#further-info-on-anaconda" title="영구 링크"> ¶ </a></h3><div class="admonition info"><p class="admonition-title">새로운 대형 패키지</p><p>선택한 패키지로 새 Conda 환경을 생성하는 것이, 이전에 설정된 환경에 대형 라이브러리나 애플리케이션을 설치하는 것보다 시간이 덜 걸릴 수 있습니다.</p></div><div class="admonition warning"><p class="admonition-title">conda 내에서 pip 설치</p><p> conda 문서에 따르면 conda 내에서 pip을 사용하면 내부 문제가 발생할 수 있으므로 사용하지 말아야 한다고 합니다. 그러나 이러한 문제는 드뭅니다. <a href="https://www.anaconda.com/blog/using-pip-in-a-conda-environment"> Anaconda 블로그 게시물 </a></p><p> 그럼에도 불구하고, 다음과 같은 이유로 <code> conda-forge </code> 채널이 선호됩니다: </p><ul><li>더 많은 라이브러리가 제공됩니다 (pip의 필요성이 줄어듭니다)</li><li><code> conda-forge </code> 는 <code> pip </code> 과 더 잘 작동합니다 </li><li>라이브러리가 더 최신입니다</li></ul></div><p>행복한 거래 되세요!</p><hr><h2 id="you-are-ready"> 이제 준비가 완료되었습니다 <a class="headerlink" href="#you-are-ready" title="영구 링크"> ¶ </a></h2><p>여기까지 오셨다면 Freqtrade를 성공적으로 설치하신 것입니다.</p><h3 id="initialize-the-configuration"> 구성 초기화 <a class="headerlink" href="#initialize-the-configuration" title="영구 링크"> ¶ </a></h3><div class="highlight"><pre><code><span class="c1"># 1단계 - 사용자 폴더 초기화</span>
freqtrade<span class="w"> </span>create-userdir<span class="w"> </span>--userdir<span class="w"> </span>user_data

<span class="c1"># 2단계 - 새 구성 파일 생성</span>
freqtrade<span class="w"> </span>new-config<span class="w"> </span>--config<span class="w"> </span>user_data/config.json
</code></pre></div>`,37)),a("p",null,[s[66]||(s[66]=n(" 이제 실행할 준비가 되었습니다. ")),e(t,{to:"configuration"},{default:l(()=>s[65]||(s[65]=[n(" 봇 구성 ")])),_:1}),s[67]||(s[67]=n(" 을 읽고, ")),s[68]||(s[68]=a("code",null," dry_run: True ",-1)),s[69]||(s[69]=n(" 로 시작하여 모든 것이 제대로 작동하는지 확인하십시오. "))]),a("p",null,[s[71]||(s[71]=n(" 구성을 설정하는 방법을 배우려면 ")),e(t,{to:"configuration"},{default:l(()=>s[70]||(s[70]=[n(" 봇 구성 ")])),_:1}),s[72]||(s[72]=n(" 문서 페이지를 참조하십시오. "))]),s[83]||(s[83]=i(`<h3 id="start-the-bot"> 봇 시작 <a class="headerlink" href="#start-the-bot" title="영구 링크"> ¶ </a></h3><div class="highlight"><pre><code>freqtrade<span class="w"> </span>trade<span class="w"> </span>--config<span class="w"> </span>user_data/config.json<span class="w"> </span>--strategy<span class="w"> </span>SampleStrategy
</code></pre></div><div class="admonition warning"><p class="admonition-title">경고</p><p>문서를 끝까지 읽고, 사용할 전략을 백테스트하며, 실제 거래를 활성화하기 전에 드라이런(dry-run)을 사용하여 확인하십시오.</p></div><hr><h2 id="troubleshooting"> 문제 해결 <a class="headerlink" href="#troubleshooting" title="영구 링크"> ¶ </a></h2><h3 id="common-problem-command-not-found"> 일반적인 문제: &quot;명령을 찾을 수 없음&quot; <a class="headerlink" href="#common-problem-command-not-found" title="영구 링크"> ¶ </a></h3><p> (1) <code> 스크립트 </code> 또는 (2) <code> 수동 </code> 설치를 사용한 경우, 가상 환경에서 봇을 실행해야 합니다. 아래와 같은 오류가 발생하면 venv가 활성화되어 있는지 확인하십시오. </p><div class="highlight"><pre><code><span class="c1"># 오류 발생 시:</span>
bash:<span class="w"> </span>freqtrade:<span class="w"> </span><span class="nb">command</span><span class="w"> </span>not<span class="w"> </span>found

<span class="c1"># 가상 환경 활성화</span>
<span class="nb">source</span><span class="w"> </span>./.venv/bin/activate
</code></pre></div><h3 id="macos-installation-error"> MacOS 설치 오류 <a class="headerlink" href="#macos-installation-error" title="영구 링크"> ¶ </a></h3><p> 최신 MacOS 버전에서는 <code> error: command &#39;g++&#39; failed with exit status 1 </code> 와 같은 오류로 설치가 실패할 수 있습니다. </p><p>이 오류는 기본적으로 설치되지 않은 SDK 헤더를 명시적으로 설치해야 해결됩니다. MacOS 10.14의 경우 아래 명령을 사용하십시오.</p><div class="highlight"><pre><code>open<span class="w"> </span>/Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_10.14.pkg
</code></pre></div><p>이 파일이 존재하지 않는 경우, 다른 MacOS 버전을 사용 중일 가능성이 있으므로 인터넷에서 특정 해결 방법을 찾아보십시오.</p>`,13))])}}};export{k as default};
