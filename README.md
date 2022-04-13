# Water level -2


We can choose the goal of how many glasses we need to drink in a day(default and minimum is 10).
Using the <code>#water-limit-input</code>, we can decide the total limit.

Sp for the case we set the limit to 15.

There is a div with <code>id=bottle-container</code> having width of 300px, representing the max limit.
Since max limit is 15, and width is 300px, meaning one level is 20px.(300/15)

The div with <code>id="water-level"</code>, startis with width="0px" but upon each click on button 
with id="add-water", it increments level by one and width increases by 20px.

Note:- After 15 clicks when width of <code>#water-level</code> div is 300px, any further clicks should not increase width.
