class Shift
    def initialize(name, type)
      @name = name
      @type = Type::from(type)
      @slots = []
    end

    def add_lesson_slots(slots)
      @slots += slots
    end

    def type
      @type
    end

    def slots
      @slots
    end

    def to_s
      @name
    end
end
