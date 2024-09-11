package dev.cmmn.Common_Project.cmmn.web;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class CmmnController {
	
	@RequestMapping(value="/main", method={RequestMethod.POST, RequestMethod.GET})
	public ModelAndView main() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("cmmn/main");
		return mv;
	}
	
	@RequestMapping(value="/signin", method={RequestMethod.POST, RequestMethod.GET})
	public ModelAndView signin() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("sign/signin");
		return mv;
	}
	
	@RequestMapping(value="/signin/process", method={RequestMethod.POST, RequestMethod.GET})
	public Map<String, Object> signinProcess(@RequestBody HashMap<String, Object> dataInfo) {
		
		log.info("dataInfo : " + dataInfo.toString());
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("result", "SUCCESS");
		map.put("errorMessage", "");
		map.put("errorDetail", "");
		
		return map;
	}
	
	@RequestMapping(value="/signup", method={RequestMethod.POST, RequestMethod.GET})
	public ModelAndView signup() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("sign/signup");
		return mv;
	}
	
	@RequestMapping(value="/idDuplCheck", method={RequestMethod.POST, RequestMethod.GET})
	public Map<String, Object> idDuplCheck(@RequestBody HashMap<String, Object> dataInfo) {
		
		log.info("dataInfo : " + dataInfo.toString());
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("result", "SUCCESS");
		map.put("errorMessage", "");
		map.put("errorDetail", "");
		
		return map;
	}
	
	@RequestMapping(value="/signup/process", method={RequestMethod.POST, RequestMethod.GET})
	public Map<String, Object> signupProcess(@RequestBody HashMap<String, Object> dataInfo) {
		
		log.info("dataInfo : " + dataInfo.toString());
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("result", "SUCCESS");
		map.put("errorMessage", "");
		map.put("errorDetail", "");
		
		return map;
	}
}
