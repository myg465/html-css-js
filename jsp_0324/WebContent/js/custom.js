/**
 * 
 */

function check(){
	
	var id_check=/^[a-zA-Z][a-zA-Z0-9]{2,14}$/;
	var name_check=/^[가-힣]{1,}$/;
	var age_check=/^[0-9]{1,3}$/;
	//패스워드 소문자,대문자,숫자,특수문자를 1개씩 이상 써야 한다. 
	var pw_check=(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+|-=\`~[]{}:";'<>?,.]).{3,10}$/);
	

//	
//	if(!(id_check.test(join.j_id.value))){
//		alert("아이디는 3자리 이상 문자와 숫자만 가능합니다.");
//		join.j_id.focus();
//		return false;
//	}
//	
	
	if(!(pw_check.test(join.j_pw.value))){
		alert("소문자,대문자,숫자,특수문자 1개이상씩 3자리이상 입력해 주세요.");
		join.j_pw.focus();
		return false;
	}
//	
//	if(!(join.j_pw.value==join.j_pw2.value)){
//		alert("비밀번호가 일치하지 않습니다.");
//		join.j_pw2.focus();
//		return false;
//	}
	
	
//	if(!(name_check.test(join.j_name.value))){
//		alert("한글 1자이상 입력이 가능합니다.");
//		join.j_name.focus();
//		return false;
//	}
	
//	if(!(age_check.test(join.j_age.value))){
//		alert("숫자 1자리이상 3자리 이하만 입력이 가능합니다.");
//		join.j_age.focus();
//		return false;
//	}
	
	
	
	
	return join.submit();
}