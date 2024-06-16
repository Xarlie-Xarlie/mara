// Define the graph structure with more complex texts as arrays
const gameGraph = {
  nodes: {
    1: { text: ["You are in a forest.", "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.", "Paths lead to the north and south."], choices: [2, 3] },
    2: { text: ["You find a river.", "You can follow it east or west."], choices: [4, 5] },
    3: { text: ["You encounter a mountain.", "You can climb it or go around it."], choices: [6, 7] },
    4: { text: ["You reach a waterfall.", "There's a cave behind it."], choices: [] },
    5: { text: ["You find a village.", "The villagers are friendly."], choices: [] },
    6: { text: ["You reach the peak of the mountain.", "The view is stunning."], choices: [] },
    7: { text: ["You find a hidden path around the mountain."], choices: [] }
  },
  startNode: 1
};

// Current state to keep track of node and text position
let currentNodeId = gameGraph.startNode;
let currentTextIndex = 0;

// Function to display the current part of the node
function displayCurrentText() {
  const node = gameGraph.nodes[currentNodeId];
  const storyDiv = document.getElementById('story');
  const nextButton = document.getElementById('next-button');
  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = '';

  // Update the story text
  storyDiv.textContent = node.text[currentTextIndex];

  // If there is more text to display, show the next button
  if (currentTextIndex < node.text.length - 1) {
    nextButton.style.display = 'block';
    choicesDiv.style.display = 'none';
  } else {
    nextButton.style.display = 'none';
    choicesDiv.style.display = 'block';

    // Add buttons for each choice
    node.choices.forEach(choiceId => {
      const button = document.createElement('button');
      button.textContent = gameGraph.nodes[choiceId].text[0];  // First part of the text as button text
      button.className = 'choice-button';
      button.onclick = () => {
        currentNodeId = choiceId;
        currentTextIndex = 0;
        displayCurrentText();
      };
      choicesDiv.appendChild(button);
    });
  }
}

// Function to handle the next button click
function handleNextClick() {
  currentTextIndex++;
  displayCurrentText();
}

// Attach the next button click handler
document.getElementById('next-button').onclick = handleNextClick;

// Start the game
displayCurrentText();
