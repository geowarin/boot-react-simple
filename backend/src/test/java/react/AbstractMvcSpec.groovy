package react

import org.springframework.boot.test.SpringApplicationContextLoader
import org.springframework.test.context.ContextConfiguration
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.springframework.web.context.WebApplicationContext
import spockmvc.SpockMvcSpec

@ContextConfiguration(
  loader = SpringApplicationContextLoader,
  classes = [BootReactSimpleApplication]
)
abstract class AbstractMvcSpec extends SpockMvcSpec {

  @Override
  MockMvc buildMockMvc(WebApplicationContext wac) {
    MockMvcBuilders
      .webAppContextSetup(wac)
      .build()
  }
}
