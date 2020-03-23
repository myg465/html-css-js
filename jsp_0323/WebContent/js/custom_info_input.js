/**
 * 
 */


function check(){
	var name_ch=/^[가-힣]{1,}$/;
	var id_ch=/^[a-zA-Z0-9_]+$/;
	var pw_ch1=(/^(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{10,}$/);
	var pw_ch2=(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{10,}$/);
	var pw_ch3=(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){10,}$/);
	var pw_ch4=(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,}$/);
	
	if(!(name_ch.test(info.name.value))){
	    alert("이름은 한글만 입력가능합니다.");
	    info.name.value="";
	    info.name.focus();
	    return false;
	}
	
	if(!(id_ch.test(info.id.value))){
	    alert("아이디는 영문대소문자,숫자, '_' 만입력가능합니다.");
	    info.id.value="";
	    info.id.focus();
	    return false;
	}
	
	if(!((pw_ch1.test(info.pw1.value))||(pw_ch2.test(info.pw1.value))||(pw_ch3.test(info.pw1.value))||(pw_ch4.test(info.pw1.value)))){
		alert("비밀번호를 영문, 숫자, 특수문자 중 2종류 조합 시 10자리 이상 입력하여야 합니다.");
		info.pw.value="";
	    info.pw.focus();
	    return false;
	}
	
//	else if(!){
//		alert("비밀번호를 영문, 숫자, 특수문자 모두 조합 시 8자리 이상 입력하여야 합니다.");
//		info.pw1.value="";
//	    info.pw1.focus();
//	    return false;
//	}
	if(!(info.pw1.value==info.pw2.value)){
		alert("비밀번호가 일치하지 않습니다.");
		info.pw2.value="";
		info.pw2.focus();
		return false;
	}
	if(!/^[.]+$/.test(info.mail_tail.value)){
		alert("정확한 이메일 양식을 입력하세요.");
		info.mail_tail.value="";
		info.mail_tail.focus();
		return false;
	}
	
	
	return info.submit();
}



