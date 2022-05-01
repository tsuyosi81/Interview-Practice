'use strict';

let questions = []
// Most Common Interview Questions:
questions[0] = "Tell me about yourself";
questions[1] = "Why do you want to work here?";
questions[2] = "What is your greatest strength?";
questions[3] = "What are your strengths and weaknesses?";
questions[4] = "What do you know about this company/organization?";
questions[5] = "Why should we hire you?";
questions[6] = "What can you bring to the company?";
questions[7] = "What is your greatest accomplishment?";
questions[8] = "What are your salary requirements?";
questions[9] = "What are you looking for from a new position?";
questions[10] = "Are you considering other positions in other companies?";
questions[11] = "What is the professional achievement you’re most proud of?";
questions[12] = "What kind of working environment do you work best in?";
questions[13] = "Where do you see yourself in 5 years?";

// Situational Job Interview Questions:
questions[14] = "How would your boss describe you?";
questions[15] = "Are you a team player?";
questions[16] = "Are you a risk-taker?";
questions[17] = "How do you deal with pressure or stressful situation?";
questions[18] = "Do you think there is a difference between hard work and smart work?";
questions[19] = "How quickly do you adapt to new technology?";
questions[20] = "Do you have any interests outside of work?";
questions[21] = "What do you think our company/organization could do better?";

// Behavioral Questions in an Interview
questions[22] = "Give me an example of when you had to work with someone who was difficult to get along with. How did you handle interactions with that person?";
questions[23] = "Tell me about a time when you were communicating with someone and they did not understand you. What did you do?";
questions[24] = "Tell me about one of your favorite experiences working with a team. What was your contribution?";
questions[25] = "Can you share an experience where a project dramatically shifted directions at the last minute ? What did you do? ";
questions[26] = "Describe the best partner or supervisor with whom you've worked. What part of their managing style appealed to you?";
questions[27] = "Recall a time when your manager was unavailable when a problem arose. How did you handle the situation? With whom did you consult?";
questions[28] = "Describe a time when you volunteered to expand your knowledge at work, as opposed to being directed to do so.";
questions[29] = "What would motivate you to make a move from your current role?";
questions[30] = "Tell me about a time when your manager or a team member gave you critical or constructive feedback.How did you address the feedback ? How did you react ?";
questions[31] = "What's the biggest career goal you've ever achieved ?";
questions[32] = "Give an example of how you have handled a challenge in the workplace before.";
questions[33] = "Give an example of when you performed well under pressure.";
questions[34] = "Give an example of when you showed leadership qualities.";
questions[35] = "Tell me about a challenge or conflict you’ve faced at work, and how you dealt with it.";
questions[36] = "Tell me about a time you demonstrated leadership skills.";
questions[37] = "What’s a time you disagreed with a decision that was made at work?";
questions[38] = "Tell me about a time you made a mistake?";
questions[39] = "Tell me about a time you failed.";
questions[40] = "What type of work environment do you prefer?";
questions[41] = "How would you let your boss know you could not finish a job on time?";
questions[42] = "What’s your work style?";
questions[43] = "What’s your management style?";
questions[44] = "How do you prioritize your work?";
questions[45] = "What are you passionate about?";
questions[46] = "What motivates you?";
questions[47] = "How do you like to be managed?";
questions[48] = "Do you consider yourself successful?";
questions[49] = "Where do you see yourself in five years?";
questions[50] = "What are your salary expectations?";
questions[51] = "If you were an animal, which one would you want to be?";
questions[52] = "Is there anything else you’d like to let us know?";
questions[53] = "Share an example of a time when you faced a difficult problem at work. How did you solve this problem?";
questions[54] = "Have you ever had to make an unpopular decision? How did you handle it?";
questions[55] = "Describe a time when you were under a lot of pressure at work. How did you react?";
questions[56] = "Share an example of a time you had to make a difficult decision. What did you do?";
questions[57] = "Explain a situation where you used data or logic to make a recommendation.";
questions[58] = "Tell me about a time when you disagreed with your boss. How did you resolve it?";
questions[59] = "Describe a time when you had to deliver bad news. How did you do it?";
questions[60] = "Share an example of a time when you failed. What did you learn from the experience?";
questions[61] = "Tell me about a time when you set and achieved a specific goal.";
questions[62] = "Tell me about a time when you had to persuade someone to do something.";
questions[63] = "Describe a time when you had a conflict with a colleague. How did you handle it?";
questions[64] = "Have you ever had to motivate others? How did you do it?";
questions[65] = "Tell me about the last time your workday ended before you were able to get everything done.";
questions[66] = "Share an example of a time you had to make a difficult decision. What did you do?";
questions[67] = "What was your relationship with the best boss you ever had?";
questions[68] = "What’s been the toughest criticism you received so far in your career? What did you do with it?";
questions[69] = "Can you tell us about a time you took initiative on a project or a task at work?";
questions[70] = "How do you approach a task that you’ve never done before?";
questions[71] = "Have you ever unintentionally offended or upset somebody? Can you describe the details?";
questions[72] = "Can you tell me about the last time you had to act and there was no formal policy or procedure on how to do so?";
questions[73] = "Can you tell me about a time that you let someone down? How did you handle it?";
questions[74] = "Can you tell me about a time when it was especially important to impress a client? What did you do differently than normal?";
questions[75] = "Was there ever a time you had to work with someone who’s personality was very different from yours? Can you tell me about how that affected your work?";
questions[76] = "Describe a time when you struggled to build a relationship with someone you work with. Did you overcome that?";
questions[77] = "Describe your first job to me. How did you learn the ropes at the company?";
questions[78] = "Describe a time when you had to manage numerous responsibilities. How did you handle that?";
questions[79] = "Describe a time you were able to convince someone to see things your way at work.";
questions[80] = "Tell me about a time you had to explain something difficult to someone who knew little about the topic.";
questions[81] = "So far in your career have you worked under close or loose supervision? Which style do you prefer?";
questions[82] = "Tell me about a mistake you made in your last job and what happened after you made it.";
questions[83] = "Describe a situation in which you knew you were right about something but had to follow instructions from your boss.";
questions[84] = "Tell me about your last uncomfortable conversation that was about work.";

function questionsGenerator() {
    let randomQuestions = Math.floor(Math.random() * questions.length)
    document.getElementById('questions').innerHTML = questions[randomQuestions];
}



