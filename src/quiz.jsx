import React from 'react';
  
const Quiz = () => {
  return (
    <div>
        <form method="post" action="/" enctype="text/plain" class='mastery'>
        <div class="likert">

            <p class="question">In general, I feel I am in charge of the situation in which I live.</p>
            <label><input id="q1" name="q1" type="radio" value="1"/><span>Strongly disagree</span></label>
            <label><input name="q1" type="radio" value="2"/><span>Moderately disagree</span></label>
            <label><input name="q1" type="radio" value="3"/><span>Slightly disagree</span></label>
            <label><input name="q1" type="radio" value="4"/><span>Slightly agree</span></label>
            <label><input name="q1" type="radio" value="5"/><span>Moderately agree</span></label>
            <label><input name="q1" type="radio" value="6"/><span>Strongly agree</span></label>

            <p class="question">I am quite good at managing the many responsibilities of my daily life.</p>
            <label><input name="q2" type="radio" value="1"/><span>Strongly disagree</span></label>
            <label><input name="q2" type="radio" value="2"/><span>Moderately disagree</span></label>
            <label><input name="q2" type="radio" value="3"/><span>Slightly disagree</span></label>
            <label><input name="q2" type="radio" value="4"/><span>Slightly agree</span></label>
            <label><input name="q2" type="radio" value="5"/><span>Moderately agree</span></label>
            <label><input name="q2" type="radio" value="6"/><span>Strongly agree</span></label>

            <p class="question">If I were unhappy with my living situation, I would take effective steps 
        to change it.</p>
            <label><input name="q3" type="radio" value="1"/><span>Strongly disagree</span></label>
            <label><input name="q3" type="radio" value="2"/><span>Moderately disagree</span></label>
            <label><input name="q3" type="radio" value="3"/><span>Slightly disagree</span></label>
            <label><input name="q3" type="radio" value="4"/><span>Slightly agree</span></label>
            <label><input name="q3" type="radio" value="5"/><span>Moderately agree</span></label>
            <label><input name="q3" type="radio" value="6"/><span>Strongly agree</span></label>

            <p class="question">My efforts to find the kinds of activities and relationships that I need have 
        been quite successful.</p>
            <label><input name="q4" type="radio" value="1"/><span>Strongly disagree</span></label>
            <label><input name="q4" type="radio" value="2"/><span>Moderately disagree</span></label>
            <label><input name="q4" type="radio" value="3"/><span>Slightly disagree</span></label>
            <label><input name="q4" type="radio" value="4"/><span>Slightly agree</span></label>
            <label><input name="q4" type="radio" value="5"/><span>Moderately agree</span></label>
            <label><input name="q4" type="radio" value="6"/><span>Strongly agree</span></label>

            <p class="question">	I have been able to build a home and a lifestyle for myself that is much to my liking.</p>
            <label><input name="q5" type="radio" value="1"/><span>Strongly disagree</span></label>
            <label><input name="q5" type="radio" value="2"/><span>Moderately disagree</span></label>
            <label><input name="q5" type="radio" value="3"/><span>Slightly disagree</span></label>
            <label><input name="q5" type="radio" value="4"/><span>Slightly agree</span></label>
            <label><input name="q5" type="radio" value="5"/><span>Moderately agree</span></label>
            <label><input name="q5" type="radio" value="6"/><span>Strongly agree</span></label>

            </div>
            <input class='submit' type="submit" value="Submit"/>
        </form>
        </div>
  );
  };
export default Quiz;