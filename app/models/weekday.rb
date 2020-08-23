module Weekday
    MONDAY = 0
    TUESDAY = 1
    WEDNESDAY = 2
    THURSDAY = 3
    FRIDAY = 4
    SATURDAY = 5
    SUNDAY = 6

    def from(date_str)
        date = Date.parse(date_str)
        weekday = date.strftime('%A')

        case weekday
        when 'Monday'
            MONDAY
        when 'Tuesday'
            TUESDAY
        when 'Wednesday'
            WEDNESDAY
        when 'Thursday'
            THURSDAY
        when 'Friday'
            FRIDAY
        when 'Saturday'
            SATURDAY
        else
            SUNDAY
        end
    end

    module_function :from
end