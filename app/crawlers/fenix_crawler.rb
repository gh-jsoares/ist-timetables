class FenixCrawler
  include HTTParty
  base_uri 'https://fenix.tecnico.ulisboa.pt/api/fenix/v1'

  def initialize(academicTerm)
    @options = { format: :json }
    @options_query = @options.merge({ query: { academicTerm: academicTerm } })
  end

  def degrees
    degrees_response = self.class.get('/degrees', @options_query).parsed_response
    degrees_response.map { |degree| { id: degree['id'], name: "(#{degree['acronym']}) #{degree['name']}" } }.sort_by { |k| k[:name] }
  end

  def courses(degree_id)
    courses_response = self.class.get("/degrees/#{degree_id}/courses", @options_query).parsed_response
    courses_response.sort_alphabetical_by { |k| k['name'] }
  end

  def course(course_id)
    course_response = self.class.get("/courses/#{course_id}", @options).parsed_response
    course_name = course_response['name']
    course_acronym = course_response['acronym']
    Course.new(course_id, course_name, course_acronym)
  end

  def course_types(course_id)
    course_info = self.class.get("/courses/#{course_id}/schedule", @options).parsed_response
    course(course_id).as_json.merge({
      types: course_info['courseLoads'].map { |type| type['type'] }
    })
  end

  def schedules(course_id)
    course = course(course_id)

    schedules = self.class.get("/courses/#{course_id}/schedule", @options).parsed_response
    shifts = schedules['shifts'].map do |shift_info|
      shift = Shift.new(shift_info['name'], shift_info['types'].first)
      slots = shift_info['lessons'].map do |lesson|
        day = Weekday.from(lesson['start'])
        start_time = TimeBlock.from(lesson['start'])
        end_time = TimeBlock.from(lesson['end'])
        room = lesson['room']['name']
        LessonSlot.new(day, start_time, end_time, room)
      end.uniq { |slot| slot.to_s }
      shift.add_lesson_slots(slots)
      shift
    end

    blocks = {}
    shifts.each do |shift|
        type = shift.type
        blocks[type] = LessonBlock.new(type) if blocks[type].nil?
        blocks[type].add_shift(shift)
    end
    course.add_lesson_blocks(blocks.values)
    course
  end
end
