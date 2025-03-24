import{r as s,o as r,c as a,a as d,b as l,d as o,e as i,w as n}from"./index-cd9b39de.js";const c={class:"md-content__inner md-typeset"},f={__name:"AdvancedSetup",setup(g){return(p,e)=>{const t=s("router-link");return r(),a("article",c,[e[3]||(e[3]=d(`<h1 id="advanced-post-installation-tasks"> 고급 설치 후 작업 <a class="headerlink" href="#advanced-post-installation-tasks" title="영구 링크"> ¶ </a></h1><p>이 페이지는 봇 설치 후 수행할 수 있는 고급 작업 및 구성 옵션을 설명하며, 일부 환경에서 유용할 수 있습니다.</p><p>여기에 언급된 내용을 이해하지 못한다면, 아마도 필요하지 않을 것입니다.</p><h2 id="running-multiple-instances-of-freqtrade"> Freqtrade의 여러 인스턴스 실행 <a class="headerlink" href="#running-multiple-instances-of-freqtrade" title="영구 링크"> ¶ </a></h2><p>이 섹션에서는 동일한 머신에서 여러 봇을 동시에 실행하는 방법을 보여줍니다.</p><h3 id="things-to-consider"> 고려해야 할 사항 <a class="headerlink" href="#things-to-consider" title="영구 링크"> ¶ </a></h3><ul><li>다른 데이터베이스 파일을 사용하세요.</li><li>다른 Telegram 봇을 사용하세요 (여러 개의 구성 파일 필요; Telegram이 활성화된 경우에만 해당).</li><li>다른 포트를 사용하세요 (Freqtrade REST API 웹 서버가 활성화된 경우에만 해당).</li></ul><h3 id="different-database-files"> 다른 데이터베이스 파일 <a class="headerlink" href="#different-database-files" title="영구 링크"> ¶ </a></h3><p>봇의 거래, 수익 등을 추적하기 위해 freqtrade는 SQLite 데이터베이스를 사용하여 과거에 수행한 거래 및 현재 보유하고 있는 포지션과 같은 다양한 정보를 저장합니다. 이를 통해 수익을 추적할 수 있을 뿐만 아니라, 봇 프로세스가 재시작되거나 예기치 않게 종료되더라도 진행 중인 활동을 추적할 수 있습니다.</p><p> Freqtrade는 기본적으로 드라이런 및 라이브 봇에 대해 별도의 데이터베이스 파일을 사용합니다 (구성 파일이나 명령줄 인수로 데이터베이스 URL을 지정하지 않은 경우). 라이브 거래 모드의 기본 데이터베이스는 <code> tradesv3.sqlite </code> 이며, 드라이런 모드의 경우 <code> tradesv3.dryrun.sqlite </code> 입니다. </p><p> 이 파일들의 경로를 지정하는 거래 명령의 선택적 인수는 <code> --db-url </code> 이며, 유효한 SQLAlchemy URL이 필요합니다. 따라서 드라이런 모드에서 구성 및 전략 인수만으로 봇을 시작할 때, 다음 두 명령은 동일한 결과를 가져옵니다. </p><div class="highlight"><pre><code>freqtrade trade -c MyConfig.json -s MyStrategy
# is equivalent to
freqtrade trade -c MyConfig.json -s MyStrategy --db-url sqlite:///tradesv3.dryrun.sqlite
</code></pre></div><p>즉, 두 개의 다른 터미널에서 거래 명령을 실행하여 USDT와 BTC 거래를 테스트하려면 다른 데이터베이스를 사용해야 합니다.</p><p>존재하지 않는 데이터베이스 URL을 지정하면 freqtrade는 지정한 이름으로 새 데이터베이스를 생성합니다. 따라서 BTC 및 USDT 스테이크 통화로 사용자 정의 전략을 테스트하려면 다음 명령을 사용할 수 있습니다 (두 개의 별도 터미널에서).</p><div class="highlight"><pre><code># Terminal 1:
freqtrade trade -c MyConfigBTC.json -s MyCustomStrategy --db-url sqlite:///user_data/tradesBTC.dryrun.sqlite
# Terminal 2:
freqtrade trade -c MyConfigUSDT.json -s MyCustomStrategy --db-url sqlite:///user_data/tradesUSDT.dryrun.sqlite
</code></pre></div><p>반대로, 프로덕션 모드에서 동일한 작업을 수행하려면 기본 데이터베이스 외에 최소한 하나의 새 데이터베이스를 생성하고 &quot;라이브&quot; 데이터베이스의 경로를 지정해야 합니다. 예를 들어:</p><div class="highlight"><pre><code># Terminal 1:
freqtrade trade -c MyConfigBTC.json -s MyCustomStrategy --db-url sqlite:///user_data/tradesBTC.live.sqlite
# Terminal 2:
freqtrade trade -c MyConfigUSDT.json -s MyCustomStrategy --db-url sqlite:///user_data/tradesUSDT.live.sqlite
</code></pre></div>`,17)),l("p",null,[e[1]||(e[1]=o(" SQLite 데이터베이스 사용에 대한 자세한 내용은 예를 들어 거래를 수동으로 입력하거나 제거하는 방법에 대해서는 ")),i(t,{to:"sql-cheatsheet"},{default:n(()=>e[0]||(e[0]=[o("SQL Cheatsheet")])),_:1}),e[2]||(e[2]=o(" 를 참조하세요. "))]),e[4]||(e[4]=d(`<h3 id="multiple-instances-using-docker"> Docker를 사용한 여러 인스턴스 <a class="headerlink" href="#multiple-instances-using-docker" title="영구 링크"> ¶ </a></h3><p>Docker를 사용하여 freqtrade의 여러 인스턴스를 실행하려면 docker-compose.yml 파일을 편집하고 원하는 모든 인스턴스를 별도의 서비스로 추가해야 합니다. 구성 파일을 여러 개로 분리할 수 있으므로 모듈화하는 것이 좋습니다. 이렇게 하면 모든 봇에 공통적인 내용을 편집해야 할 때 단일 구성 파일에서 편집할 수 있습니다.</p><div class="highlight"><pre><code>---
version: &#39;3&#39;
services:
  freqtrade1:
    image: freqtradeorg/freqtrade:stable
    # image: freqtradeorg/freqtrade:develop
    # Use plotting image
    # image: freqtradeorg/freqtrade:develop_plot
    # Build step - only needed when additional dependencies are needed
    # build:
    #   context: .
    #   dockerfile: &quot;./docker/Dockerfile.custom&quot;
    restart: always
    container_name: freqtrade1
    volumes:
      - &quot;./user_data:/freqtrade/user_data&quot;
    # Expose api on port 8080 (localhost only)
    # Please read the https://www.freqtrade.io/en/latest/rest-api/ documentation
    # before enabling this.
     ports:
     - &quot;127.0.0.1:8080:8080&quot;
    # Default command used when running \`docker compose up\`
    command: &gt;
      trade
      --logfile /freqtrade/user_data/logs/freqtrade1.log
      --db-url sqlite:////freqtrade/user_data/tradesv3_freqtrade1.sqlite
      --config /freqtrade/user_data/config.json
      --config /freqtrade/user_data/config.freqtrade1.json
      --strategy SampleStrategy

  freqtrade2:
    image: freqtradeorg/freqtrade:stable
    # image: freqtradeorg/freqtrade:develop
    # Use plotting image
    # image: freqtradeorg/freqtrade:develop_plot
    # Build step - only needed when additional dependencies are needed
    # build:
    #   context: .
    #   dockerfile: &quot;./docker/Dockerfile.custom&quot;
    restart: always
    container_name: freqtrade2
    volumes:
      - &quot;./user_data:/freqtrade/user_data&quot;
    # Expose api on port 8080 (localhost only)
    # Please read the https://www.freqtrade.io/en/latest/rest-api/ documentation
    # before enabling this.
    ports:
      - &quot;127.0.0.1:8081:8080&quot;
    # Default command used when running \`docker compose up\`
    command: &gt;
      trade
      --logfile /freqtrade/user_data/logs/freqtrade2.log
      --db-url sqlite:////freqtrade/user_data/tradesv3_freqtrade2.sqlite
      --config /freqtrade/user_data/config.json
      --config /freqtrade/user_data/config.freqtrade2.json
      --strategy SampleStrategy
</code></pre></div><p>원하는 명명 규칙을 사용할 수 있으며, freqtrade1과 2는 임의로 지정한 것입니다. 각 인스턴스에 대해 다른 데이터베이스 파일, 포트 매핑 및 텔레그램 구성을 사용해야 한다는 점에 유의하세요.</p><h2 id="use-a-different-database-system"> 다른 데이터베이스 시스템 사용 <a class="headerlink" href="#use-a-different-database-system" title="영구 링크"> ¶ </a></h2><p> Freqtrade는 여러 다른 데이터베이스 시스템을 지원하는 SQLAlchemy를 사용합니다. 따라서 다양한 데이터베이스 시스템이 지원됩니다. Freqtrade는 추가 데이터베이스 드라이버에 의존하거나 설치하지 않습니다. 해당 데이터베이스 시스템의 설치 지침은 <a href="https://docs.sqlalchemy.org/en/14/core/engines.html#database-urls"> SQLAlchemy 문서 </a> 를 참조하세요. </p><p>다음 시스템은 테스트되었으며 freqtrade와 함께 작동하는 것으로 알려져 있습니다:</p><ul><li>sqlite (기본값)</li><li>PostgreSQL</li><li>MariaDB</li></ul><div class="admonition warning"><p class="admonition-title">경고</p><p>아래 데이터베이스 시스템을 사용하는 경우 해당 시스템을 관리할 수 있음을 인정합니다. freqtrade 팀은 아래 데이터베이스 시스템의 설정, 유지 관리(또는 백업)에 대한 지원을 제공하지 않습니다.</p></div><h3 id="postgresql"> PostgreSQL <a class="headerlink" href="#postgresql" title="영구 링크"> ¶ </a></h3><p> 설치: <code> pip install psycopg2-binary </code></p><p> 사용: <code> ... --db-url postgresql+psycopg2://&lt;username&gt;:&lt;password&gt;@localhost:5432/&lt;database&gt; </code></p><p>Freqtrade는 시작 시 자동으로 필요한 테이블을 생성합니다.</p><p>다른 인스턴스의 Freqtrade를 실행하는 경우, 인스턴스당 하나의 데이터베이스를 설정하거나 연결을 위해 다른 사용자/스키마를 사용해야 합니다.</p><h3 id="mariadb-mysql"> MariaDB / MySQL <a class="headerlink" href="#mariadb-mysql" title="영구 링크"> ¶ </a></h3><p>Freqtrade는 여러 다른 데이터베이스 시스템을 지원하는 SQLAlchemy를 사용하여 MariaDB를 지원합니다.</p><p> 설치: <code> pip install pymysql </code></p><p> 사용: <code> ... --db-url mysql+pymysql://&lt;username&gt;:&lt;password&gt;@localhost:3306/&lt;database&gt; </code></p><h2 id="configure-the-bot-running-as-a-systemd-service"> systemd 서비스로 봇 실행 구성 <a class="headerlink" href="#configure-the-bot-running-as-a-systemd-service" title="영구 링크"> ¶ </a></h2><p><code> freqtrade.service </code> 파일을 systemd 사용자 디렉토리(일반적으로 <code> ~/.config/systemd/user </code> )에 복사하고 <code> WorkingDirectory </code> 와 <code> ExecStart </code> 를 설정에 맞게 업데이트합니다. </p><div class="admonition note"><p class="admonition-title">참고</p><p> 일부 시스템(Raspbian 등)은 사용자 디렉토리에서 서비스 유닛 파일을 로드하지 않습니다. 이 경우 <code> freqtrade.service </code> 를 <code> /etc/systemd/user/ </code> 에 복사하세요 (슈퍼유저 권한 필요). </p></div><p>그런 다음 다음 명령으로 데몬을 시작할 수 있습니다:</p><div class="highlight"><pre><code>systemctl --user start freqtrade
</code></pre></div><p> 이를 지속적으로 실행하려면 (사용자가 로그아웃된 상태에서도 실행) freqtrade 사용자에 대해 <code> linger </code> 를 활성화해야 합니다. </p><div class="highlight"><pre><code>sudo loginctl enable-linger &quot;$USER&quot;
</code></pre></div><p> 봇을 서비스로 실행하는 경우 systemd 서비스 관리자를 소프트웨어 감시자로 사용하여 freqtrade 봇 상태를 모니터링하고 실패 시 재시작할 수 있습니다. <code> internals.sd_notify </code> 매개변수가 구성에서 true로 설정되었거나 <code> --sd-notify </code> 명령줄 옵션이 사용된 경우, 봇은 sd_notify (systemd 알림) 프로토콜을 사용하여 systemd에 유지 관리 핑 메시지를 보내고 상태가 변경될 때 현재 상태(실행 중 또는 중지됨)를 systemd에 알립니다. </p><p><code> freqtrade.service.watchdog </code> 파일에는 systemd를 감시자로 사용하는 서비스 유닛 구성 파일의 예가 포함되어 있습니다. </p><div class="admonition note"><p class="admonition-title">참고</p><p>봇이 Docker 컨테이너에서 실행되는 경우 봇과 systemd 서비스 관리자 간의 sd_notify 통신은 작동하지 않습니다.</p></div><h2 id="advanced-logging"> 고급 로깅 <a class="headerlink" href="#advanced-logging" title="영구 링크"> ¶ </a></h2><p> 많은 Linux 시스템에서 봇은 로그 메시지를 <code> syslog </code> 또는 <code> journald </code> 시스템 서비스로 보낼 수 있도록 구성할 수 있습니다. 원격 <code> syslog </code> 서버로의 로깅도 Windows에서 사용할 수 있습니다. 이를 위해 <code> --logfile </code> 명령줄 옵션의 특수 값을 사용할 수 있습니다. </p><h3 id="logging-to-syslog"> syslog로 로깅 <a class="headerlink" href="#logging-to-syslog" title="영구 링크"> ¶ </a></h3><p> Freqtrade 로그 메시지를 로컬 또는 원격 <code> syslog </code> 서비스로 보내려면 다음 형식의 값으로 <code> --logfile </code> 명령줄 옵션을 사용하세요: </p><ul><li><code> --logfile syslog:&lt;syslog_address&gt; </code> -- 로그 메시지를 <code> syslog </code> 서비스로 보내며, <code> &lt;syslog_address&gt; </code> 를 syslog 주소로 사용합니다. </li></ul><p>syslog 주소는 Unix 도메인 소켓(소켓 파일 이름) 또는 IP 주소와 UDP 포트로 구성된 UDP 소켓 사양으로, 콜론 문자로 구분됩니다.</p><p>따라서 다음은 가능한 사용 예입니다:</p><ul><li><code> --logfile syslog:/dev/log </code> -- 대부분의 시스템에 적합한 <code> /dev/log </code> 소켓을 사용하여 syslog(rs <code> yslog </code> )로 로깅합니다. </li><li><code> --logfile syslog </code> -- 위와 동일하며, <code> /dev/log </code> 의 단축키입니다. </li><li><code> --logfile syslog:/var/run/syslog </code> -- MacOS에서 사용되는 <code> /var/run/syslog </code> 소켓을 사용하여 syslog(rs <code> yslog </code> )로 로깅합니다. </li><li><code> --logfile syslog:localhost:514 </code> -- 포트 514에서 수신하는 경우 UDP 소켓을 사용하여 로컬 syslog로 로깅합니다. </li><li><code> --logfile syslog:&lt;ip&gt;:514 </code> -- IP 주소와 포트 514에서 원격 syslog로 로깅합니다. 이는 Windows에서 원격 로깅을 위해 외부 syslog 서버에 사용할 수 있습니다. </li></ul><p> 로그 메시지는 <code> syslog </code> 에 <code> user </code> 시설로 전송됩니다. 따라서 다음 명령으로 확인할 수 있습니다: </p><ul><li><code> tail -f /var/log/user </code> 또는 </li><li>포괄적인 그래픽 뷰어(예: Ubuntu의 &#39;Log File Viewer&#39;)를 설치합니다.</li></ul><p> 많은 시스템에서 <code> syslog </code> ( <code> rsyslog </code> )는 <code> journald </code> 에서 데이터를 가져오므로 <code> --logfile syslog </code> 또는 <code> --logfile journald </code> 를 사용할 수 있으며, 메시지는 <code> journalctl </code> 과 syslog 뷰어 유틸리티로 확인할 수 있습니다. 원하는 방식으로 조합할 수 있습니다. </p><p><code> rsyslog </code> 의 경우 봇의 메시지를 별도의 전용 로그 파일로 리디렉션할 수 있습니다. 이를 위해 rsyslog 구성 파일 중 하나의 끝에 다음을 추가하세요: </p><div class="highlight"><pre><code>if $programname startswith &quot;freqtrade&quot; then -/var/log/freqtrade.log
</code></pre></div><p> 예를 들어 <code> /etc/rsyslog.d/50-default.conf </code> 의 끝에 추가합니다. </p><p><code> syslog </code> ( <code> rsyslog </code> )의 경우 중복 메시지 필터링 모드를 켤 수 있습니다. 이는 반복되는 메시지 수를 줄입니다. 예를 들어, 여러 봇 하트비트 메시지는 봇에 다른 일이 발생하지 않을 때 단일 메시지로 줄어듭니다. 이를 위해 <code> /etc/rsyslog.conf </code> 에 다음을 설정하세요: </p><div class="highlight"><pre><code># Filter duplicated messages
$RepeatedMsgReduction on
</code></pre></div><h3 id="logging-to-journald"> journald로 로깅 <a class="headerlink" href="#logging-to-journald" title="영구 링크"> ¶ </a></h3><p> 이 기능은 Windows에서 사용할 수 없는 <code> cysystemd </code> 파이썬 패키지를 종속성으로 설치해야 합니다 ( <code> pip install cysystemd </code> ). 따라서 journald 로깅 기능은 Windows에서 실행되는 봇에 사용할 수 없습니다. </p><p> Freqtrade 로그 메시지를 <code> journald </code> 시스템 서비스로 보내려면 다음 형식의 값으로 <code> --logfile </code> 명령줄 옵션을 사용하세요: </p><ul><li><code> --logfile journald </code> -- 로그 메시지를 <code> journald </code> 로 보냅니다. </li></ul><p> 로그 메시지는 <code> journald </code> 에 <code> user </code> 시설로 전송됩니다. 따라서 다음 명령으로 확인할 수 있습니다: </p><ul><li><code> journalctl -f </code> -- 다른 로그 메시지와 함께 <code> journald </code> 로 전송된 Freqtrade 로그 메시지를 표시합니다. </li><li><code> journalctl -f -u freqtrade.service </code> -- 봇이 <code> systemd </code> 서비스로 실행되는 경우 이 명령을 사용할 수 있습니다. </li></ul><p><code> journalctl </code> 유틸리티에는 메시지를 필터링하는 다양한 옵션이 있으므로 이 유틸리티의 매뉴얼 페이지를 참조하세요. </p><p> 많은 시스템에서 <code> syslog </code> ( <code> rsyslog </code> )는 <code> journald </code> 에서 데이터를 가져오므로 <code> --logfile syslog </code> 또는 <code> --logfile journald </code> 를 사용할 수 있으며, 메시지는 <code> journalctl </code> 과 syslog 뷰어 유틸리티로 확인할 수 있습니다. 원하는 방식으로 조합할 수 있습니다. </p>`,52))])}}};export{f as default};
