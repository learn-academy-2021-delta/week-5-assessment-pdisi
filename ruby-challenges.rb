# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

# letter_o = 'o'
# # Expected output: ['coffee', 'soda water']
# letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

#Attempt 1
#Change the array into a set of strings
# p beverages_array.join(",")
# #create a variable for beverages_array.join
# strings_list = beverages_array.join
# #Use the scan method to find specific letters
# p strings_list.include?('o')
#     if true
#        p strings_list.split
#        p 
#     end
#P the string that contains the letter

#Attempt 2
#I will delete words that do not contain a specific letter
#Create a variable called find_letter
# def find_letter
#     find_letter = beverages_array
# #Find an letter within the indexes of the given array
# p find_letter {|i| i != "o"}
#     if i != "o"
# #If "o" does not exist within the index then delete it
# p find_letter.array.delete_at(i)
#     end
# end

#Notes on process: I think my brain went down 50 different routes for this and I don't know why I am having so much difficulty. Will come back to this.

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

# nums_array1 = [42, 7, 27]
# #  #Expected output: 76

# nums_array2 = [25, 17, 47, 11]
# #  #Expected output: 100

# #Input = array
# #Output = sum
# #I found the syntax (0, :+) to add up the value of the arrays
# #I will define sumofall as an array
def sumofall array
# #Use the found syntax
  array.reduce(0, :+)
end
# #Print the given variables with the function I created
p sumofall nums_array1
p sumofall nums_array2

#Notes on process: This one was relatively simple. Just struggling with getting Ruby syntax down after JavaScript. Finding the syntax online was incredibly helpful.

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize(model, wheels = 2, current_speed = 0)
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end

    def pedal_faster
        @pedal_faster = current_speed + 10
    end

    def brake
        @brake = current_speed do
        if current_speed <= 25
            current_speed = 0
        elsif current_speed > 25
            current_speed - 25
        end
    end

    def bike_info 
       p "The #{@model} bike has #{@wheels} and is going #{@current_speed} mph"
    end 
end 
my_bike = Bike.new('Trek')
p my_bike.pedal_faster
p my_bike.brake
# p my_bike.bike_info

#3A
#Notes on process: I thought this was going to be simple, however, I kept receiving an unexpected "end" no matter how I set it up. My mistake was not writing out "my_bike = Bike.new('Trek')" correctly and also not printing right before the string interpolation

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(10) => 20
# Expected output example: my_bike.brake(25) => 0

#3B
#Notes on process: Not sure how the terminal is coming back with unexpected end of input for line 105 here. I believe that my logic is correct and think I could do this is JavaScript, but I cannot figure out what I am missing since Ruby loves to point out lines that are commented out. I really prefer using Jest now.