/**
 * 
 */

function check(){
	if(form.id.value==""){
		alert("아이디를 입력해주세요.")
		return false;
	}else if(form.pw.value=""){
		alert("패스워드를 입력해주세요.")
		return false;
	}
	
	if(form.id.value=="admin"){
		if(form.pw.value=="12345"){
			alert("정상적으로 로그인 되었습니다.");
			return form.submit;
		}
		else{
			alert("패스워드가 틀렸습니다.");
			form.pw.value="";
			form.pw.focus();
			return false;
		}
	}
	else{
		alert("아이디가 틀렸습니다.");
		form.id.value="";
		form.id.focus();
		return false;
	}
}