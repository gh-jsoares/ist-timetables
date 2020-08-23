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
end
