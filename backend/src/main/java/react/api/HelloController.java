package react.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import react.model.Greetings;

@RestController
@RequestMapping("/api/hello")
public class HelloController {

  @RequestMapping(method = RequestMethod.GET)
  public Greetings sayHello() throws InterruptedException {
    Thread.sleep(1000);
    return new Greetings("Hello from server");
  }
}
