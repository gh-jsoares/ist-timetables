class Time
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
end
