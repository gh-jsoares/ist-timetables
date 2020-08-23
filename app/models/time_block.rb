class TimeBlock
    def initialize(hour, minutes)
      @hour, @minutes = hour, minutes
    end

    def minutes
        @hour * 60 + @minutes
    end

    def is_before(time)
        minutes < time.minutes
    end

    def is_after(time)
        minutes > time.minutes
    end

    def to_s
        "#{@hour}:#{@minute}"
    end

    def self.from(date_str)
        date = DateTime.parse(date_str)
        hour = date.strftime('%H').to_i
        minutes = date.strftime('%M').to_i
        TimeBlock.new(hour, minutes)
    end
end
