const mixed_message = {
    saiyan: ['Broly', 'Gohan', 'Vegeta', 'Goku', 'Tranks'],
    villan: ['Cell', 'Frieza', 'Majin Bu', 'Jiren', 'Zeno'],
    obstacles: ['financial struggle', 'physical inadequacy', 'the matrix', 'down-times']
}



    let famous_people_quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs", 
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon",
    "You must be the change you wish to see in the world. -Mahatma Gandhi",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
    "The only thing we have to fear is fear itself. -Franklin D. Roosevelt",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. -Martin Luther King Jr.",
    "Do one thing every day that scares you. -Eleanor Roosevelt",
    "Well done is better than well said. -Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller",
    "It is during our darkest moments that we must focus to see the light. -Aristotle",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson"
    ];


const random_quotes = ()=>{
    if(famous_people_quotes){
        return console.log(famous_people_quotes[(Math.floor(Math.random() * famous_people_quotes.length))]);
    }else{
        return console.log("Something went wrong!");
    }
}

hero = [];
bad_guy = [];
adversity = [];

const fight = () =>{
    hero.push(mixed_message.saiyan[(Math.floor(Math.random() * mixed_message.saiyan.length))]);
    bad_guy.push(mixed_message.villan[(Math.floor(Math.random() * mixed_message.villan.length))]);
    adversity.push(mixed_message.obstacles[(Math.floor(Math.random() * mixed_message.obstacles.length))]);
}


fight();
console.log("If " + hero + " can defeat " + bad_guy + ",");
console.log("then you can defeat " + adversity + ".\n");
console.log("Get motivated:")
random_quotes(famous_people_quotes);



console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");