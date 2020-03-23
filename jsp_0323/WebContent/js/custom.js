/**
 * 
 */

function check(){
	var idcheck=/^[a-zA-Z0-9]{4,12}$/;// 아이디 유효성검사
	var id_char=/[a-zA-Z]$/; //문자를 비교하는 형태
	
	var id_num=/^[0-9]/;//첫문자가 숫자인지 비교
	var id_num2=/[0-9]$/;//마지막문자가 숫자인지 비교
	var id_num3=/[0-9]{1,10}$/;//
	
	if(!(id_num3.test(join.j_id.value))){
		alert("숫자만 입력이 가능합니다.");
		join.j_id.value="";
		
		return false;
	}
	
//	if(!(id_char.test(join.j_id.value))){
//		alert("문자만 입력이 가능합니다.");
//		join.j_id.value="";
//		join.j_id.focus();
//		return false;
//	}
//	else{
//		alert("문자만 입력이 되었습니다.");
//		join.j_pw.focus();
//	}
//	if(!(idcheck.test(join.age.value))){
//		alert("아이디는 문자숫자만 가능함");
//		join.age.focus();
//		return false;
//	}
	
	if(join.gender.value==""){
		alert("성별을 체크해 주세요.");
		join.gender.value="m";
		return false;
	}
	if(join.gender.value=="m"){
			alert("남자입니다.");
			location.href="http://www.naver.com";
	}
	else if(join.gender.value=="f"){
		alert("여자입니다.");
		location.href="http://www.daum.net";
	}
	
	
	
}