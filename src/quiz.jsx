import React from 'react';
  
const Quiz = () => {
  return (
    <div>
        <form method="post" action="mailto:raizen@mail.utexas.edu?subject=Vocabulary Quiz 1" enctype="text/plain">
        <div class="likert">

            <p>In general, I feel I am in charge of the situation in which I live.</p>
            <label><input name="l" type="radio" value="1"/><span>Strongly disagree</span></label>
            <label><input name="l" type="radio" value="2"/><span>Moderately disagree</span></label>
            <label><input name="l" type="radio" value="3"/><span>Slightly disagree</span></label>
            <label><input name="l" type="radio" value="4"/><span>Slightly agree</span></label>
            <label><input name="l" type="radio" value="5"/><span>Moderately agree</span></label>
            <label><input name="l" type="radio" value="6"/><span>Strongly agree</span></label>

            <p>I am quite good at managing the many responsibilities of my daily life.</p>
            <label><input name="l" type="radio" value="1"/><span>Strongly disagree</span></label>
            <label><input name="l" type="radio" value="2"/><span>Moderately disagree</span></label>
            <label><input name="l" type="radio" value="3"/><span>Slightly disagree</span></label>
            <label><input name="l" type="radio" value="4"/><span>Slightly agree</span></label>
            <label><input name="l" type="radio" value="5"/><span>Moderately agree</span></label>
            <label><input name="l" type="radio" value="6"/><span>Strongly agree</span></label>

            <p>If I were unhappy with my living situation, I would take effective steps 
        to change it.</p>
            <label><input name="l" type="radio" value="1"/><span>Strongly disagree</span></label>
            <label><input name="l" type="radio" value="2"/><span>Moderately disagree</span></label>
            <label><input name="l" type="radio" value="3"/><span>Slightly disagree</span></label>
            <label><input name="l" type="radio" value="4"/><span>Slightly agree</span></label>
            <label><input name="l" type="radio" value="5"/><span>Moderately agree</span></label>
            <label><input name="l" type="radio" value="6"/><span>Strongly agree</span></label>

            <p>My efforts to find the kinds of activities and relationships that I need have 
        been quite successful.</p>
            <label><input name="l" type="radio" value="1"/><span>Strongly disagree</span></label>
            <label><input name="l" type="radio" value="2"/><span>Moderately disagree</span></label>
            <label><input name="l" type="radio" value="3"/><span>Slightly disagree</span></label>
            <label><input name="l" type="radio" value="4"/><span>Slightly agree</span></label>
            <label><input name="l" type="radio" value="5"/><span>Moderately agree</span></label>
            <label><input name="l" type="radio" value="6"/><span>Strongly agree</span></label>

            <p>	I have been able to build a home and a lifestyle for myself that is much to my liking.</p>
            <label><input name="l" type="radio" value="1"/><span>Strongly disagree</span></label>
            <label><input name="l" type="radio" value="2"/><span>Moderately disagree</span></label>
            <label><input name="l" type="radio" value="3"/><span>Slightly disagree</span></label>
            <label><input name="l" type="radio" value="4"/><span>Slightly agree</span></label>
            <label><input name="l" type="radio" value="5"/><span>Moderately agree</span></label>
            <label><input name="l" type="radio" value="6"/><span>Strongly agree</span></label>
            <input type="submit" value="Submit" />
            </div>
        </form>
        </div>
  );
  };
export default Quiz;