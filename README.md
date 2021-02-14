# Password-generator

There are comments thoughout my JS code to explain what it does.

First, I declared all my variables and constant arrays. I made them all global so they could be called by every funciton that needed them.

I made a prompt for each of the 5 requirements: password length and a choice for each of the four different characters: lowercase, uppercase, numbers and special characters.

For each of the five choices, they are valiated to make sure the user enters the correct choice. 

If they chose yes for a character, a new array was created by concatenating a declared constant array for the chcaracter type chosen. This new array will be used to create the passowrd. 

Also, if a character type was chosen, a function is declared that checks the password has at least one of the characters chosen.

After all the propmts are addressed by the user, a for loop repeats for the length of the password and randomly picks characters for the array created by the users choices.

Next, the functions for character check are called and run if they were declared in the character validations.

Finally the password is returned.

## Updates for resubmission

I took the character length prompt out of the generatePassword function and made it a separate function that is called within the generatePassword function. This seems to have fixed the recursion issues I was having when the incorrect number of charcters was typed into the prompt.

I also took the charcter choice check functions out of the generatePassword function. They are called at the end of the generatePassword function before the password is passed to the function that writes it to the display div. 

It functions better and generates a password every time.

### Screen shots
(/Password-generator/Assets/Images/Screen Shot 2021-02-14 at 3.22.57 PM?raw=true "")
(/Password-generator/Assets/Images/Screen Shot 2021-02-14 at 3.23.32 PM?raw=true "")
(/Password-generator/Assets/Images/Screen Shot 2021-02-14 at 3.23.46 PM?raw=true "")
(/Password-generator/Assets/Images/Screen Shot 2021-02-14 at 3.23.53 PM?raw=true "")
(/Password-generator/Assets/Images/Screen Shot 2021-02-14 at 3.24.02 PM?raw=true "")
(/Password-generator/Assets/Images/Screen Shot 2021-02-14 at 3.24.21 PM?raw=true "")