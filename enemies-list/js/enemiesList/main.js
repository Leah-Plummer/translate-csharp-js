console.log("My Enemies List!");
console.log("----------------");

const enemies = [
    {
        FirstName: "Joshua",
        LastName: "Flowers",
        Offenses: 
        [
            "Being a jerk to me in elementary school",
            "Not being nice to me in elementary school"
        ],
        IsReallyHated: true
    },

    {
        FirstName: "Darth",
        LastName: "Vader",
        Offenses: 
        [
            "Cut off Luke's hand",
            "Murdered all those kids",
            "Unkind management practices"
        ],
        IsReallyHated: false
    },

    {
        FirstName: "Betty",
        LastName: "RudeLady",
        Offenses: 
        [
            "Phone calls in the theater",
                "Phone calls on the bus",
                "Phone calls in line at the grocery store",
                "Poor conversationalist"
        ],
        IsReallyHated: true
    },

    {
        FirstName: "Leon",
        LastName: "Peck",
        Offenses: 
        [
            "Keeps giving me a hotplate"
        ],
        IsReallyHated: false
    },   
]

let hatedOrNot = ""
for (const enemy of enemies) 
{
    if (enemy.IsReallyHated == true ) {
        hatedOrNot = "(Really, really dislike!)"
    } else {
        hatedOrNot = " "
    }
    console.log(`${enemy.FirstName} ${enemy.LastName} ${hatedOrNot}`)

}