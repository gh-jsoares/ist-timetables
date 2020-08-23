class LessonBlock
  def initialize(type)
    @type = type
    @shifts = []
    @parent_course = nil
  end

  def add_shift(shift)
    @shifts << shift
    shift.parent_lesson_block = self
  end
end
