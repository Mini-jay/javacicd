
package com.example.javacicd;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Hello from CI/CD Pipeline!";
    }

    @GetMapping("/health")
    public String health() {
        return "Application is running!";
    }
}
