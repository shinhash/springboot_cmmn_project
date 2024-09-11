<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ include file="../screen/headers.jsp" %>
<body>
	<div class="member_bg_wrap">
	    <div class="member_header">
	        <a href="javascript:void(0);" class="global_logo"></a>
	    </div>
	
	    <div class="member_form">
			<div class="member_form_wrap">
				<p class="member_title">JOIN</p>
				<div class="login_form_wrap_fr">
	                <div class="id_form_wrap input_form_wrap">
	                    <input type="text" id="userId" class="inputValue ani_input"/>
	                    <span>���̵�</span>
	                    <button type="button" class="join_btn" onclick="fn_idDuplCheck()">�ߺ�üũ</button>
	                </div>
	                <div class="password_form_wrap input_form_wrap">
	                    <input type="text" id="userNm" class="inputValue ani_input"/>
	                    <span>�̸�</span>
	                </div>
	                <div class="password_form_wrap input_form_wrap">
	                    <input type="password" id="userPw" class="inputValue ani_input"/>
	                    <span>��й�ȣ</span>
	                </div>
	                <div class="password_form_wrap input_form_wrap">
	                    <input type="password" id="userPwRe" class="inputValue ani_input"/>
	                    <span>��й�ȣ Ȯ��</span>
	                </div>
	                <div class="password_form_wrap input_form_wrap">
	                    <input type="email" id="userEmail" class="inputValue ani_input"/>
	                    <span>�̸���</span>
	                </div>
	                <button type="button" class="login_btn" onclick="fn_signupBtn()">ȸ������</button>
	            </div>
	        </div>
	
	        <div class="member_label">
	            <a href="/signin">�α���</a>
	        </div>
	    </div>
	</div>
	<%@ include file="../screen/cmmnPop.jsp" %>
</body>
</html>