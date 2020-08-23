module Type
    THEORY = 0
    LABORATORIAL = 1
    PROBLEM = 2

    def from(type_str)
        case type_str
        when 'TEORICA'
            THEORY
        when 'LABORATORIAL'
            LABORATORIAL
        else
            PROBLEM
        end
    end

    module_function :from
end