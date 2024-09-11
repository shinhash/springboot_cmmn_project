<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ include file="../screen/headers.jsp" %>
<body>
	<div class="member_bg_wrap">
	    <div class="member_header">
	        <a href="javascript:void(0);" class="global_logo">
	        </a>
	    </div>
	
	    <div class="member_form">
	        <div class="member_form_wrap">
	            <p class="member_title">Login</p>
	            <div class="login_form_wrap_fr">
	                <div class="id_form_wrap input_form_wrap">
	                    <input type="text" id="userId" class="inputValue ani_input" alt="아이디"/>
	                    <span>아이디</span>
	                </div>
	                <div class="password_form_wrap input_form_wrap">
	                    <input type="password" id="userPw" class="inputValue ani_input" alt="비밀번호"/>
	                    <span>비밀번호</span>
	                </div>
	                <button type="button" class="login_btn" onclick="fn_signinBtn()">LOGIN</button>
	            </div>
	        </div>
	
	        <div class="member_label">
	            <a href="/signup">회원가입</a>
	        </div>
	    </div>
	</div>
	<%@ include file="../screen/cmmnPop.jsp" %>
</body>
</html>