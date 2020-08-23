class FenixCrawler
    include HTTParty
    base_uri 'https://fenix.tecnico.ulisboa.pt/api/fenix/v1'
  
    def initialize(academicTerm)
      @options = { query: { academicTerm: academicTerm }, format: :json }
    end
  
    def degrees
      degrees_response = self.class.get('/degrees', @options).parsed_response
      degrees_response.map { |degree| { id: degree['id'], name: degree['name'] } }
    end
  
    def courses(degree_id)
      courses_response = self.class.get("/degrees/#{degree_id}/courses", @options).parsed_response
      courses_response
    end
  
    def schedules(course_id)
      self.class.get("/courses/#{course_id}/schedule")
    end
end
