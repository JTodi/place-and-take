import React from "react";
import '../Stylesheets/Solution.css';

const Solution: React.FC = () => {
  return (
    <div className="solution-container">
      <h2>Solution</h2>
      <p>
        In this game, the optimal strategy involves placing money into the boxes
        for the majority of the turns and then taking money in the last few
        turns to maximize the expected payoff.There are two aspects to this game that 
        should be noted: the ordering of the places and takes, and the number of places and 
        takes. We can tackle the former aspect first. Intuitively, no places should 
        come after a take. Greedily so, you might as well put a take after all places 
        such that you have a higher expected value of that take (considering a single 
        take, every place you put after the take is $1 less that could be taken); thus, 
        all takes should be stacked at the end of the 100 turns. This can also be proved 
        with induction, and this will be left as an exercise to the reader. The next 
        aspect is regarding the number of places and takes. If there are p places, 
        then there must be 100 - p takes, and we know that the p places must occur 
        before the 100 - p takes. In order to find the value of p, we can calculate at 
        what position does adding an additional place action not improve our expected payoff.
      </p>
      <p>
        The reasoning behind this strategy is based on probabilities. By placing
        more dollars, you increase the average amount of money in the boxes.
        Taking too early risks missing out on larger sums later in the game.
        Consider the p-th action where p belongs to (1,100) and where this is 
        the last place before we begin taking, or the next action (p + 1) will be the 
        last pace before we begin taking. What is the expected value of the game if 
        action p is the last place? There are p dollars in aggregate and we have 100 - p 
        takes. Our expected payoff will be p X Σ(i=1 to 100 - p) 1/(2^i), which can be seen 
        from the lineariy of expectation- at every take, we will take half of what is remaining 
        on average. What is the expected value of the game if action p + 1 is the last place? 
        There are p + 1 dollars in aggregate and we have 100 - (p + 1) takes. Thus, our expected 
        payoff is (p + 1) X Σ(i=1 to 100 - p) 1/(2^i). We are looking for the largest value of p 
        such that the payoff where the p-th place is the last place is greater the payoff where the 
        incremental p + 1-th place is the last place. Thus:
      </p>
      <img
        src="/Assets/formula.jpg"
        alt="Solution Explanation"
        style={{ maxWidth: "100%", marginTop: "20px" }}
      />
      <p>
        Σ(i=1 to 99-p) 1/(2^i) approaches 1, and thus p is greater than 2^(100-p) implying p 
        is greater than 93. With 94 places and putting it in the formula we have expected payoff 
        <strong>$92.5</strong>. To check this we can compare this value with 93 and 95 places.
      </p>
    </div>
  );
};

export default Solution;
