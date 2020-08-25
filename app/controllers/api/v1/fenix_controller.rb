require_relative '../../../crawlers/fenix_crawler'

class Api::V1::FenixController < ActionController::API

    def initialize
        @crawler = FenixCrawler.new('2020/2021')
    end

    def degrees
        degrees = @crawler.degrees
        render json: degrees.as_json, status: :ok
    end

    def courses
        return render json: { message: 'Missing degree' }.as_json, status: 400 if params[:degree].nil? || params[:degree].empty? 

        courses = @crawler.courses(params[:degree])
        render json: courses.as_json, status: :ok
    end

    def schedules
        return render json: { message: 'Missing course' }.as_json, status: 400 if params[:course].nil? || params[:course].empty? 

        schedules = @crawler.schedules(params[:course])
        render json: schedules.as_json, status: :ok
    end

    def course
        return render json: { message: 'Missing course' }.as_json, status: 400 if params[:course].nil? || params[:course].empty? 

        course = @crawler.course_types(params[:course])
        render json: course.as_json, status: :ok
    end

    def timetables
        courses = params[:courses].map { |course| [ @crawler.schedules(course[:id]), course[:types] ] }

        lesson_blocks = courses.map do |course|
            course.last.map { |type| course.first.get_block_by_type(Type::from(type)) }
        end.first

        generator = TimetableGenerator.new
        generator.generate_timetables(lesson_blocks)
        generator.generated.sort_by(&:heuristic)

        timetables = generator.generated

        render json: timetables.as_json, status: :ok
    end
end
