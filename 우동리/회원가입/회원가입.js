// 가입부분 체크

function signUpCheck(){

    let id = document.getElementById("id").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let passwordCheck = document.getElementById("passwordCheck").value
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let gender_man = document.getElementById("gender_man").checked
    let gender_woman = document.getElementById("gender_woman").checked
    let area = document.getElementById("area").value
    let check = true;

  // 아이디확인
    if(id===""){
    document.getElementById("idError").innerHTML="아이디가 올바르지 않습니다."
    check = false
    }else{
    document.getElementById("idError").innerHTML=""
    }


  // 이메일확인
    if(email.includes('@')){
    let emailId = email.split('@')[0]
    let emailServer = email.split('@')[1]
    if(emailId === "" || emailServer === ""){
        document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
        check = false
    }
    else{
        document.getElementById("emailError").innerHTML=""
    }
    }else{
    document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
    check = false
    }



  // 비밀번호 확인
    if(password !== passwordCheck){
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML="비밀번호가 동일하지 않습니다."
    check = false
    }else{
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
    }

    if(password===""){
    document.getElementById("passwordError").innerHTML="비밀번호를 입력해주세요."
    check = false
    }else{
    //document.getElementById("passwordError").innerHTML=""
    }
    if(passwordCheck===""){
    document.getElementById("passwordCheckError").innerHTML="비밀번호를 다시 입력해주세요."
    check = false
    }else{
    //document.getElementById("passwordCheckError").innerHTML=""
    }



  // 이름확인
    if(name===""){
    document.getElementById("nameError").innerHTML="이름이 올바르지 않습니다."
    check = false
    }else{
    document.getElementById("nameError").innerHTML=""
    }



  // 나이확인
    if(age===""){
    document.getElementById("ageError").innerHTML="나이가 올바르지 않습니다."
    check = false
    }else{
    document.getElementById("ageError").innerHTML=""
    }



  // 성별체크확인
    if(!gender_man && !gender_woman){
    document.getElementById("genderError").innerHTML="성별을 선택해주세요."
    check = false
    }else{
    document.getElementById("genderError").innerHTML=""
    }


  // 지역선택 확인
    if(area === "지역"){
    document.getElementById("areaError").innerHTML="지역을 선택해주세요."
    check = false
    }else{
    document.getElementById("areaError").innerHTML=""
    }



    if(check){
    document.getElementById("emailError").innerHTML=""
    document.getElementById("nameError").innerHTML=""
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
    document.getElementById("areaError").innerHTML=""
    document.getElementById("genderError").innerHTML=""
    
    //비동기 처리이벤트
    setTimeout(function() {
        alert("회원가입에 성공했습니다.");
        location.href = '../../login, mapview, ranking/login/login.html';
    },0);
    }
}