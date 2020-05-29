
 SweeTest 3주차 스터디
 
 1. NPM 이란?
    - NPM은 이름대로 Node.js용 패키지 관리하기 위한 도구입니다. Node.js를 설치하면 같이 설치됩니다.
      패키지를 만들고 공유할 수 있으며, 공유된 패키지를 쉽게 설치할 수 있습니다.
    - package.json 대해서 자세히 소개한 블로그 (https://programmingsummaries.tistory.com/385)

 3. 클러스터
    - Node.js는 단일 싱글스레드 형식이라, cpu를 한개만 사용하여 속도보장을 한다. 그런데 다량의 접속이나 요청이 들어 온 경우 cpu한개만으로 버벅일 경우가 있다.
    - 이럴 때 Cluster라는 모듈을 설치하면 원하는 수만큼의 cpu를 점유하게 해 주어 요청된 작업을 할 수 있게 한다. (http://nodejs.sideeffect.kr/docs/v0.8.15/api/cluster.html)

 4. DB 연동.....   
