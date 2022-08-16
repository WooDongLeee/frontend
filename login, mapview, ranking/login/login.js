
document.querySelector("#userloginbutton").addEventListener("click", () => {
    const id = "admin";
    const password = "1234";

    if (id == document.querySelector("#userloginid").value) {
        if(password == document.querySelector("#userloginpw").value) {
            alert("환영합니다.");
            location.href='../../매칭 지도/용병/matching_map.html';
        }
        else{
            document.getElementById("error").innerHTML="비밀번호가 올바르지 않습니다."
            // alert("비밀번호가 맞지않습니다.");
        }
    }
    else{
        document.getElementById("error").innerHTML="아이디 또는 비밀번호가 올바르지 않습니다."
    }
});
