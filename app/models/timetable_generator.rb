class TimetableGenerator
    MAX_COMBINATIONS = 99

    def initialize
        @generated = []
        @total_combinations = 0
    end

    def generated
        @generated
    end

    def store_timetable(timetable)
        @total_combinations += 1

        if @generated.length <= MAX_COMBINATIONS
            @generated << timetable 
        elsif timetable.heuristic < @generated[MAX_COMBINATIONS].heuristic
            @generated[MAX_COMBINATIONS] = timetable
        end

        move_worst_to_last if @generated.length >= MAX_COMBINATIONS
    end

    def move_worst_to_last
        worst_heuristic = @generated.map { |timetable| timetable.heuristic }.max
        worst_timetable = @generated.select { |timetable| timetable.heuristic == worst_heuristic }
        @generated = @generated - worst_timetable + worst_timetable
    end

    def generate_timetables(lesson_blocks)
        generate(Timetable.new, lesson_blocks)
    end

    def generate(timetable, lesson_blocks)
        if lesson_blocks.nil? || lesson_blocks.empty?
            store_timetable(timetable)
        else
            lesson_blocks.first.shifts.each do |shift|
                generate(timetable.append_shift(shift), lesson_blocks[1..])
            end
        end
    end
end