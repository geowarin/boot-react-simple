package react.api

import org.springframework.http.HttpStatus
import react.AbstractMvcSpec

class HelloControllerTest extends AbstractMvcSpec {

  def "should say hello"() {
    when:
    def res = get('/api/hello')

    then:
    res.status == HttpStatus.OK
    res.content == 'Hello'
  }
}
