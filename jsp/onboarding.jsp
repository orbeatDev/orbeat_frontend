<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OnBoarding</title>

    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/onboarding.css">
</head>
<script>

    function checkStart() {
        var start = document.name_sub.username.value;
        if(start==""){
            alert("이름을 입력해 주세요");
            documet.name_sub.username.focus();
            return;
        }
        else {
            document.getElementById('name_sub_id').submit();
            location.href="battle.html";
        }   
    } 

    
</script>
<body>
    <div class="on-boarding__wrap">
        <header id="header">
            <div class="header__wrap fixedclear">
                <div class="header__content title none-mo">Orbeat</div>
                <div class="header__content details only-pc">
                    <a href="#">Orbeat에 대해 더 자세히 알고싶다면</a>
                </div>
            </div>
        </header>
    
        <section id="content" class="content__wrap">
            <div class="content__area">
                <div class="contents">
                    <div class="title only-mo">Orbeat</div>

                    <div class="text">
                        <strong>취향의 궤도</strong>를
                        <br>탐험해보세요
                    </div>
    
                    <img class="desktop-img only-mo" src="../img/desktop-img.png" alt="이름 모를 보라색 행성 위에 인공위성이 떠 있는 이미지">
    
                    <div class="form__wrap">
                        <form name="name_sub" id="name_sub_id" >
                            <input type="text" name="username" placeholder="여행자님의 이름을 알려주세요." onfocus="this.placeholder=''" onblur="this.placeholder='여행자님의 이름을 알려주세요.'">
                            <button type="button" value="시작" onclick="checkStart()" >
                                시작하기
                            </button>
                        </form>
                    </div>
                </div>
                
                <img class="desktop-img only-pc" src="../img/desktop-img.png" alt="이름 모를 보라색 행성 위에 인공위성이 떠 있는 이미지">
            </div>
        </section>
    </div>
</body>
</html>