class Timetable
    def initialize
      @lessons = []
      @heuristic = nil
    end

    def set_lessons(lessons)
        @lessons = lessons
    end

    def append_shift(shift)
        new_timetable = Timetable.new
        new_timetable.set_lessons(@lessons + shift.slots)
        new_timetable
    end

    def supports(shift)
        # shift.slots.any? do |slot|
            # @lessons.any? { |existing| slot.overlaps_with(existing) }
        # end
        shift.slots.each do |slot|
            self.lessons.each do |existing|
                return false if slot.overlaps_with(existing)
            end
        end
        true
    end

    # heuristics for selecting timetables
    def heuristic
        if @heuristic.nil?
            @heuristic = 0
            (Weekday::MONDAY..Weekday::SUNDAY).each do |weekday|
                daily_lessons = @lessons.filter { |slot| slot.day?(weekday) }
                unless daily_lessons.empty?
                    earliest_start = daily_lessons.map { |slot| slot.start.minutes }.min
                    latest_end = daily_lessons.map { |slot| slot.end.minutes }.max
                    interval = latest_end - earliest_start
                    @heuristic += interval + 60
                end
            end
        end

        @heuristic
    end
end
