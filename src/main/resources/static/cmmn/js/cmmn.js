/**
 * ######################################
 * COMMON FUNCTION COLLECT JAVASRIPT FILE
 * ######################################
 */
/**
 * input actions
 */
document.addEventListener("DOMContentLoaded", function(){
	const inputTagList = document.querySelectorAll(".ani_input");

    function toggleClass(input) {
        const span = input.nextElementSibling;
        if (input.value) span.classList.add("none");
        else span.classList.remove("none");
    }
    inputTagList.forEach(input => {
        input.addEventListener("input", function () {toggleClass(input);});
        // 이미 있는지 확인
        toggleClass(input);
    });
});

function fn_signinPage(){
	window.location.href = "/signin";
}

function fn_cmmn_getInputTagList(){	
	return document.querySelectorAll(".inputValue");
}

function fn_cmmn_isEmpty(value){
	return value === undefined || value === null || value === "";
}

function fn_cmmn_isEquals(valueFirst, valueSecond){
	return valueFirst === valueSecond;
}




/**
 * validation check
 */
function fn_cmmn_validateCheck(){
	const inputTagList = fn_cmmn_getInputTagList();
	for(let rowCnt=0; rowCnt<inputTagList.length; rowCnt++){
		if(!fn_cmmn_isEmpty(inputTagList[rowCnt]) && fn_cmmn_isEmpty(inputTagList[rowCnt].value)){
			fn_cmmn_validatePopOpen(inputTagList[rowCnt].alt, "FV");
			return false;
		}
	}
	return true;
}

function fn_cmmn_validatePopOpen(validateText, popType){
	const confirmSpanMiddle = document.querySelector(".confValidatePop .confirmSpanMiddle");
    const confirmSpanBack = document.querySelector(".confValidatePop .confirmSpanBack");
    
    if(fn_cmmn_isEquals(popType, "FV")){
		confirmSpanMiddle.innerText = validateText;
    	confirmSpanBack.innerText = " 정보를 입력해주세요.";
	}
	if(fn_cmmn_isEquals(popType, "SE")){
		confirmSpanMiddle.innerText = "";
    	confirmSpanBack.innerText = validateText;
	}
	if(fn_cmmn_isEquals(popType, "SV")){
		confirmSpanMiddle.innerText = validateText;
    	confirmSpanBack.innerText = "";
	}
    
	document.querySelector(".confValidatePop").classList.add("open");
}

function fn_cmmn_validatePopClose(){
	document.querySelector(".confValidatePop").classList.remove("open");
	fn_cmmn_inputTagFocus();
}

function fn_cmmn_inputTagFocus(){
	const confirmSpanMiddle = document.querySelector(".confValidatePop .confirmSpanMiddle");
	const inputTagList = fn_cmmn_getInputTagList();
	
	for(let rowCnt=0; rowCnt<inputTagList.length; rowCnt++){
		if(fn_cmmn_isEquals(inputTagList[rowCnt].alt, confirmSpanMiddle.innerText)){
			inputTagList[rowCnt].focus();
		}
	}
}


/**
 * confirm yes or no
 */
function fn_cmmn_askYnPopOpen(confType){
	let onclickAction = null;
	let confirmSpanFront = "";
	let confirmSpanMiddle = "";
	let confirmSpanBack = "";
	switch(confType){
		case "signIn":
			onclickAction = fn_signinProcess;
			confirmSpanMiddle = "로그인";
		break;
	}
	confirmSpanBack = " 하시겠습니까?";
	fn_cmmn_askYnPopCreate(confirmSpanFront, confirmSpanMiddle, confirmSpanBack, onclickAction);
}

function fn_cmmn_askYnPopCreate(confirmSpanFront, confirmSpanMiddle, confirmSpanBack, onclickAction){
	document.querySelector(".confAskYnPop .confirmSpanFront").innerText = confirmSpanFront;
	document.querySelector(".confAskYnPop .confirmSpanMiddle").innerText = confirmSpanMiddle;
	document.querySelector(".confAskYnPop .confirmSpanBack").innerText = confirmSpanBack;
	document.querySelector(".confAskYnPop .confirm_check").onclick = onclickAction;
	document.querySelector(".confAskYnPop").classList.add("open");
}

function fn_cmmn_askYnPopClose(){
	document.querySelector(".confAskYnPop").classList.remove("open");
}



/**
 * common ajax function
 */
function fn_cmmn_ajaxProcess(urlInfo, dataInfo, returnInfo){
	$.ajax({
		type		: "POST",
		url			: urlInfo,
		headers		: {
			"Content-Type" : "application/json",
		},
		data		: JSON.stringify(dataInfo),
		contentType	: false,
		processData	: false,
		beforeSend	: function(){},
		success		: function(data){
			console.log("data : ", data);
			fn_cmmn_ajaxResult(returnInfo, data);
		},
		error		: function(error){
			console.log(error);
		},
		complete	: function(){},
	});
}

function fn_cmmn_ajaxResult(returnInfo, data){
	switch(returnInfo){
		case "signIn":
			if(fn_cmmn_isEquals(data.result, "SUCCESS")) window.location.href = "/main";
			if(fn_cmmn_isEquals(data.result, "FAIL")) fn_cmmn_validatePopOpen(data.errorDetail, "SE");
			if(fn_cmmn_isEquals(data.result, "ERROR") && fn_cmmn_isEquals(data.errorMessage, "DB_CONNECTION_ERROR")){
				fn_cmmn_validatePopOpen(data.errorDetail, "SE");
			}
			if(fn_cmmn_isEquals(data.result, "ERROR") && fn_cmmn_isEquals(data.errorMessage, "VALIDATION_ERROR")){
				fn_cmmn_validatePopOpen(data.errorDetail, "SV");
			}
		break;
		
		case "idDuplCheck":
			if(fn_cmmn_isEquals(data.result, "SUCCESS")) "";
			if(fn_cmmn_isEquals(data.result, "FAIL")) fn_cmmn_validatePopOpen(data.errorDetail, "SE");
			if(fn_cmmn_isEquals(data.result, "ERROR") && fn_cmmn_isEquals(data.errorMessage, "DB_CONNECTION_ERROR")){
				fn_cmmn_validatePopOpen(data.errorDetail, "SE");
			}
			if(fn_cmmn_isEquals(data.result, "ERROR") && fn_cmmn_isEquals(data.errorMessage, "VALIDATION_ERROR")){
				fn_cmmn_validatePopOpen(data.errorDetail, "SV");
			}
		break;
	}
}

