class Timetable
    def initialize
      @lessons = []
    end

    def append_shift(shift)
        new_timetable = Timetable.new
        new_timetable.lessons = @lessons
        new_timetable.lessons += shift.slots
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
    def total_time
        result = 0
        Weekday::MONDAY..Weekday::SUNDAY.each do |weekday|
            daily_lessons = @lessons.filter { |slot| slot.day == weekday }
            unless daily_lessons.empty?
                earliest_start = daily_lessons.map { |slot| slot.start.minutes }.min
                latest_end = daily_lessons.map { |slot| slot.end.minutes }.max
                interval = latest_end - earliest_start
                result += interval + 60
            end
        end
        result
    end
end
