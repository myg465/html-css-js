/**
 * 
 */

function check(){
	var id_ch=/^[a-zA-Z!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]+$/;
	var pw_ch = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{3,16}$/);
	var name_ch=/^[가-힣]{1,}$/;
	var age_ch=/^[0-9]{1,3}$/;
	var tel_ch=/^[0-9]{8,}$/;
	
	if(join2.m_id.value==""){
		alert("아이디를 입력해 주세요.");
		join2.m_id.focus();
	}
	if(!id_ch.test(join2.m_id.value)){
		alert("아이디는 대소문자,특수문자만 입력가능합니다.(4~12자)");
		join2.m_id.value="";
		join2.m_id.focus();
		return false;
	}
	if(join2.m_pw.value==""){
		alert("비밀번호를 입력해 주세요.");
		join2.m_pw.focus();
	}
	if(!(pw_ch.test(join2.m_pw.value))){
		alert("비밀번호는 소문자,대문자,숫자,특수문자가 들어가야 합니다.");
		join2.m_pw.value="";
		join2.m_pw.focus();
		return false;
	}
	if(!(join2.m_pw.value==join2.m_pw2.value)){
		alert("비밀번호와 일치하지 않습니다.");
		join2.m_pw2.value="";
		join2.m_pw2.focus();
	}
	if(!(name_ch.test(join2.m_name.value))){
		alert("이름은 한글만 입력가능합니다.");
		join2.m_name.value="";
		join2.m_name.focus();
		return false;
	}
	if(!(age_ch.test(join2.m_age.value))){
		alert("나이는 3자리 이하 숫자만 입력가능합니다.");
		join2.m_age.value="";
		join2.m_age.focus();
		return false;
	}
	if(!(tel_ch.test(join2.m_tel.value))){
		alert("전화번호는 8자리 이상 숫자만 입력가능합니다.");
		join2.m_tel.value="";
		join2.m_tel.focus();
		return false;
	}
	if(join2.m_gender.value==""){
		alert("성별을 선택하세요.");
		join2.m_gender.value="male";
		return false;
	}
	
	var ch_hobby=false;
	
	for(var i=0; i<join2.m_hobby.length;i++){
		if(join2.m_hobby[i].checked){
			ch_hobby=true;
		}
	}
	if(ch_hobby==false){
		alert("취미를 하나이상 선택하세요.");
		return false;
	}
	

	
}