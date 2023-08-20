const baseSleep = "The quality of your sleep may affect your general performance, ";
const baseActivity = "Physical activity comes in a variety of ways, ";
const baseFood = "Regarding nutrition, ask yourself, ";
const baseBackUp = "Having support is the backup plan we all need, ";
const baseArr = [baseSleep, baseActivity, baseFood, baseBackUp];


const sleepArr = ["that is why getting at least 8 hours of sleep ensures you are sleeping enough, but not only that, you must be consistent with your sleep, sleeping this much as ofter as possible.", "that is why having an appropriate sleep environment is crucial for resting well. Try to keep it as similar to a blackout, and not eating nor using screens immediatly before going to sleep."];
const activityArr = ["a very interesting way is dancing, having fun with your friends in a party (watch out for alcohol!), learning new moves in an academy or just having a romantic night with your partner!", "like hiking, which gives you the oportunity to not only exercise but also contemplate beautiful scenes of nature while also giving yourself a dose of fresh air.", "being practicing soports a very traditional one. This one is particularly good for kids and young adults, as the discipline and team work that sports require provide with complementary skills.", "for example, you may find new ways to do daily activities in a more healthy way, like going to your school or job in a bycycle, avoiding taking escalators or elevators when possible.", "like, you're gonna love this one. Have sex with your partner, as if it wasn't fun on its own, it's cardio! And also strengths bonds within your relationship."];
const foodArr = ["what am I eating? Always try to eat balanced. Remember that you need carbs, fats, proteins, vitamins, minerals and fiber, while keeping overprocessed and additives away.", "how am I eating? Steaming the ingredients that you don't want to eat raw is the best way to mantain a high amount of nutrients in them, or if you want to fry something, then use non-hydroginated oil and keep it clean.", "where am I eating? Eating in a place specifically designed for that helps digestion. The more comfortable you are and the less distractors around you the better you absorb your food."];
const backUpArr = ["it doesn't matter if it is a friend, a relative or your partner, we all need and will find very useful to have someone who pushes us further and give us a pat in the back whenever we are down.", "like being part of a social group or a tribe where you can find yourself among others of your kind, protects against depression or helps diminishing its effects."];

const mixedMessage = () => {
    let baseSelect = baseArr[Math.floor(Math.random() * 4)];
    let complementSelect;
    let printMessage;
    switch (baseSelect) {
        case baseSleep:
            complementSelect = sleepArr[Math.floor(Math.random() * 2)];
            printMessage = baseSelect + complementSelect;
            break;
        case baseActivity:
            complementSelect = activityArr[Math.floor(Math.random() * 5)];
            printMessage = baseSelect + complementSelect;
            break;
        case baseFood:
            complementSelect = foodArr[Math.floor(Math.random() * 3)];
            printMessage = baseSelect + complementSelect;
            break;
        case baseBackUp:
            complementSelect = backUpArr[Math.floor(Math.random() * 2)];
            printMessage = baseSelect + complementSelect;
            break;
    }
    console.log(printMessage);
}
mixedMessage()
