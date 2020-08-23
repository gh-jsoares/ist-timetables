class LessonSlot
    def initialize(day, start_time, end_time, room)
      @day, @start_time, @end_time, @room = day, start_time, end_time, room
    end

    def overlaps_with(lesson_slot)
        @day == lesson_slot.day && @start.is_before(lesson_slot.end) && @end.is_after(lesson_slot.start)
    end

    def to_s
        "#{@day} #{@start_time} #{@end_time} #{@room}"
    end

    def day?(day)
        @day == day
    end

    def start
        @start_time
    end

    def end
        @end_time
    end
end
