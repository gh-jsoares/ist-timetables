class LessonBlock
  def initialize(type)
    @type = type
    @shifts = []
  end

  def add_shift(shift)
    @shifts << shift
  end

  def type?(type)
    @type == type
  end

  def shifts
    @shifts
  end
end
