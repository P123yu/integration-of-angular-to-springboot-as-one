package com.example.ang_spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class AngSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(AngSpringApplication.class, args);
	}


  @GetMapping("/api/health-check")
  public String healthCheck(){
    return "ok";
  }
}
