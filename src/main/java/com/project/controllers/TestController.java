package com.project.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Habib Ullah on 29-Mar-17.
 */
@RestController
@RequestMapping("testController")
public class TestController {

  @GetMapping("/test")
  public String test() {
    return "Hello World !";
  }

}
