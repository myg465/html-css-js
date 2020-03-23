/**
 * 
 */

function check(){
	if((agree.f_agree.value=="")||(agree.f_agree.value=="disagree")){
		alert("약관에 동의하여야 가입이 가능합니다.");
		agree.f_agree.value=agree;
		return false;
	}
	if((agree.s_agree.value=="")||(agree.s_agree.value=="disagree")){
		alert("약관에 동의하여야 가입이 가능합니다.");
		agree.s_agree.value=agree;
		return false;
	}
	if((agree.t_agree.value=="")||(agree.t_agree.value=="disagree")){
		alert("약관에 동의하여야 가입이 가능합니다.");
		agree.t_agree.value=agree;
		return false;
	}
	
	return agree.submit();
}