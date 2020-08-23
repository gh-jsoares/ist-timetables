class LessonSlot
    def initialize(day, start_time, end_time, room)
      @day, @start_time, @end_time, @room = day, start_time, end_time, room
      @parent_shift = nil
    end

    def course_name
        @parent_shift.parent_lesson_block.course.name
    end

    def lesson_type
        @parent_shift.parent_lesson_block.type
    end

    def overlaps_with(lesson_slot)
        @day == lesson_slot.day && @start.is_before(lesson_slot.end) && @end.is_after(lesson_slot.start)
    end
end
