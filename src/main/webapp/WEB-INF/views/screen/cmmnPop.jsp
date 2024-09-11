<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!-- cmmn loading bar -->
<div class="loadingDiv">
    <img id="loading-bar" class="loading_bar" src="cmmn/img/loading.gif" />
</div>

<!-- cmmn textarea confirm popup -->
<div class="confTextAreaPop">
    <p class="confirm_text_title"></p>
    <textarea class="confirm_reason_area" id="udrnDtrnReason" cols="30" rows="10"></textarea>
    <div class="pop_button_wrap delete_wrap">
        <button type="button" class="default_btn confirmTAOnclick">Ȯ��</button>
        <button type="button" class="default_btn" onclick="cmmn_input_popup_close()">�ݱ�</button>
    </div>
</div>

<!-- cmmn confirm popup -->
<div class="confAskYnPop">
    <div class="confirm_text_box">
        <img src="cmmn/img/info_icon.svg" alt="">
        <p class="confirm_text">
            <span class="confirmSpanFront"></span>
            <span class="confirmSpanMiddle"></span>
            <span class="confirmSpanBack"></span>
        </p>
    </div>
    <div class="confirm_btn_box">
        <button type="button" class="confirm_check">Ȯ��</button>
        <button type="button" class="confirm_cancel" onclick="fn_cmmn_askYnPopClose()">���</button>
    </div>
</div>

<!-- cmmn validate confirm popup -->
<div class="confValidatePop">
    <div class="confirm_text_box">
        <img src="cmmn/img/info_icon.svg" alt="">
        <p class="confirm_text">
            <span class="confirmSpanFront"></span>
            <span class="confirmSpanMiddle"></span>
            <span class="confirmSpanBack"></span>
        </p>
    </div>
    <div class="confirm_btn_box">
        <button type="button" class="confirm_cancel" onclick="fn_cmmn_validatePopClose()">�ݱ�</button>
    </div>
</div>