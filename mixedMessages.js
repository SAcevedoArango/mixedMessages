const baseSleep = "The quality of your sleep may affect your general performance, ";
const baseActivity = "Physical activity comes in a variety of ways, ";
const baseNutrition = "Regarding nutrition, ask yourself, ";
const baseBackUp = "Having support is the backup plan we all need, ";
const baseArr = [baseSleep, baseActivity, baseNutrition, baseBackUp];


const sleepArr = ["that is why getting at least 8 hours of sleep ensures you are sleeping enough, but not only that, you must be consistent with your sleep, sleeping enough as often as possible.", "that is why having an appropriate sleep environment is crucial for resting well. Try to keep it as similar to a blackout, and not eating nor using screens immediately before going to sleep."];
const activityArr = ["a very interesting way is dancing, having fun with your friends at a party (watch out for alcohol!), learning new moves in an academy or just having a romantic night with your partner!", "like hiking, which gives you the opportunity to not only exercise but also contemplate beautiful scenes of nature while also giving yourself a dose of fresh air.", "being practicing sports, a very traditional one. This one is particularly good for kids and young adults, as the discipline and team work that sports require provide with complementary skills.", "for example, you may find new ways to do daily activities in a more healthy way, like going to your school or job in a bicycle, avoiding taking escalators or elevators when possible.", "like, you're gonna love this one. Have sex with your partner, as if it wasn't fun on its own, it's cardio! And also strengths bonds within your relationship."];
const nutritionArr = ["what am I eating? Always try to eat balanced. Remember that you need carbs, fats, protein, vitamins, minerals and fiber, while keeping over processed and additives away.", "how am I eating? Steaming the ingredients that you don't want to eat raw is the best way to maintain a high amount of nutrients in them, or if you want to fry something, then use non-hydrogenated oil and keep it clean.", "where am I eating? Eating in a place specifically designed for that helps digestion. The more comfortable you are and the fewer distractors around you, the better you absorb your food."];
const backUpArr = ["it doesn't matter if it is a friend, la relative or your partner, we all need and will find very useful to have someone who pushes us further and give us a pat in the back whenever we are down.", "like being part of a social group or a tribe where you can find yourself among others of your kind, protects against depression or helps diminish its effects."];

const sleepRec = [" Doing some breathing exercises may help you get a better and longer rest.", " Try setting an alarm to remind you of NO MORE SCREENS.", " Unbreakable rule: No caffeine before going to bed!"];
const activityRec = [" Try getting some comfy and safe shoes that motivates you to walk.", " If you love parties, grab an outfit that allows you to perform easily.", " Always keep an eye for overuse injuries, give yourself a break from time to time.", " And in case you were thinking, your sexy time (alone or with company) should gradually increase in exertion."];
const nutritionRec = [" If you want some healthy recipes, go check our Recipes section, you will love it!", " Try to use water when possible, if not, grab for non-hydrogenated oil, rich in unsaturated fats, low saturated fats and cholesterol and absolutely zero trans fats.", " Eat in a quiet, comfortable place, away from your work, study, bedroom or similar."];
const backUpRec = [" You don't to tell your fears, insecurities or problems to anyone, and definitely should not, but it is crucial that you open yourself from time to time to certain individuals.", " Getting counseling is more common every day, as it is proven that it helps alleviate every day's problems."];


const mixedMessage = () => {
    let baseSelect = baseArr[Math.floor(Math.random() * 4)];
    let complementSelect;
    let recSelect;
    let printMessage;
    switch (baseSelect) {
        case baseSleep:
            complementSelect = sleepArr[Math.floor(Math.random() * 2)];
            recSelect = sleepRec[Math.floor(Math.random() * 3)];
            printMessage = baseSelect + complementSelect + recSelect;
            break;
        case baseActivity:
            complementSelect = activityArr[Math.floor(Math.random() * 5)];
            recSelect = activityRec[Math.floor(Math.random() * 4)];
            printMessage = baseSelect + complementSelect + recSelect;
            break;
        case baseNutrition:
            complementSelect = nutritionArr[Math.floor(Math.random() * 3)];
            recSelect = nutritionRec[Math.floor(Math.random() * 3)];
            printMessage = baseSelect + complementSelect + recSelect;
            break;
        case baseBackUp:
            complementSelect = backUpArr[Math.floor(Math.random() * 2)];
            recSelect = backUpRec[Math.floor(Math.random() * 2)];
            printMessage = baseSelect + complementSelect + recSelect;
            break;
    }
    console.log(printMessage);
}
mixedMessage()
