class Course
    def initialize(id, name)
      @id, @name = id, name
      @lesson_blocks = []
    end

    def add_lesson_block(lesson_block)
        @lesson_blocks << lesson_block
        lesson_block.parent_course = self
    end

    def get_block_by_type(type)
        @lesson_blocks.find { |lesson_block| lesson_block.type == type }
    end
end