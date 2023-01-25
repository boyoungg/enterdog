//23.01 -> 기존 enterdog 웹 사이트 내 스크립트 copy
// 마켓 주소 세팅을 미리 해두었습니다. a=안드로이드, i=iOS 
    var market_a = "https://play.google.com/store/apps/details?id=com.enterdog.app&hl=ko";
    var market_i = "https://itunes.apple.com/app/id1294561357";
    
    var currentOS;
    var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));
    
    if (mobile) {
       // 유저에이전트를 불러와서 OS를 구분합니다.
       var userAgent = navigator.userAgent.toLowerCase();
       if (userAgent.search("android") > -1) {
          currentOS = "android";
       }
       else if ((userAgent.search("iphone") > -1) || (userAgent.search("ipod") > -1) || (userAgent.search("ipad") > -1)) {
          currentOS = "ios";
       } 
       else {
          currentOS = "else";
       }
    }
    else {
       // 모바일이 아닐 때
       currentOS = "nomobile";
    }
       
    // 바로재생, 다운로드 버튼 클릭
    function checkAppInstall() {
       if(currentOS == "android") {
          location.href=market_a;
       } else if(currentOS == "ios") {
          location.href=market_i;
       } else {
          alert("모바일에서만 사용 할 수 있습니다.")
       }
       return false;
    }
    