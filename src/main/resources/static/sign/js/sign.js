/**
 * ######################################
 * SIGN FUNCTION COLLECT JAVASRIPT FILE
 * ######################################
 */
function fn_signinBtn(){
	if(!fn_cmmn_validateCheck()) return;
	fn_cmmn_askYnPopOpen("signIn");
}

function fn_signinProcess(){
	fn_cmmn_askYnPopClose();
	
	let userId = document.getElementById("userId").value;
	let userPw = document.getElementById("userPw").value;
	
	let urlInfo = "/signin/process";
	let dataInfo = {
		"userId": userId,
		"userPw": userPw,
	}
	let returnInfo = "signIn";
	
	fn_cmmn_ajaxProcess(urlInfo, dataInfo, returnInfo);
}


function fn_idDuplCheck(){
	let userId = document.getElementById("userId").value;
	
	let urlInfo = "/idDuplCheck";
	let dataInfo = {
		"userId": userId,
	}
	let returnInfo = "idDuplCheck";
	
	fn_cmmn_ajaxProcess(urlInfo, dataInfo, returnInfo);
}