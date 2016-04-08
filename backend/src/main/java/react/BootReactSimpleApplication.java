package react;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class BootReactSimpleApplication {

  public static void main(String[] args) {
    SpringApplication.run(BootReactSimpleApplication.class, args);
  }

  @Bean
  @Profile("!production")
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurerAdapter() {

      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**/*").allowedOrigins("http://localhost:3000");
      }
    };
  }
}
