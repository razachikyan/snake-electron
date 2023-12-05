<h1 align="center">Snake 🐍</h1>

<h3 align="center">Snake Game wtitten in TypeScript and ElectronJS</h4><a href="https://www.typescriptlang.org/"><img src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png"/></a><a href="https://www.electronjs.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg" /></a>

## Patterns

### Singleton Pattern:
Use this pattern for managing a single instance of a class that should be globally accessible, such as a game manager or a settings manager.

**Problem:** Ensure that a class has only one instance and provide a global point of access to it. This is useful for classes that should be instantiated only once, like a game manager, settings manager, or a board.

**Example:** Use a singleton pattern for the GameBoard class to ensure there is only one instance of the game board throughout the game.


### Factory Pattern:
Utilize this pattern to create different types of game elements like the Snake, Food, or Obstacles. It can help encapsulate the object creation process.

**Problem:** Encapsulate object creation, allowing the client code to create objects without specifying their concrete types. This is useful for creating different types of game elements like the Snake, Food, or Obstacles.

**Example:** Create a GameObjectFactory that can generate different types of game objects based on the input parameters.


### Observer Pattern:
Use this pattern for handling events and notifications. For example, when the Snake eats food, it can notify the game manager to update the score.

**Problem:** Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. This is useful for handling events and notifications in the game.

**Example:** When the Snake eats food, it can notify the ScoreManager to update the score.


### State Pattern:
Implement this pattern to manage the different states of the game, such as "playing," "paused," or "game over." This can help in cleanly transitioning between game states.

**Problem:** Allow an object to alter its behavior when its internal state changes. This is useful for managing different states of the game, like "playing," "paused," or "game over".

**Example:** Implement a GameStateManager that manages the different states of the game and handles transitions between them.

### Command Pattern:
Apply this pattern to encapsulate actions in objects, which can be queued, undone, or redone. For example, handling user input or replay functionality.

**Problem:** Encapsulate a request as an object, thereby parameterizing clients with queues, requests, and operations. This is useful for handling user input or implementing undo functionality.

**Example:** Use the Command Pattern to handle user input for controlling the Snake's movement.


### Decorator Pattern:
Use this pattern to add additional functionalities or attributes to game objects dynamically. For example, decorating the Snake with power-ups.

**Problem:** Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

**Example:** Decorate the Snake object with power-ups that modify its behavior, such as increasing speed or providing temporary invincibility.


### Component Pattern:
Apply this pattern for composing game entities from smaller, reusable components. For example, a Snake entity may consist of a movement component, collision component, and rendering component.

**Problem:** Compose objects into tree structures to represent part-whole hierarchies. This is useful for creating game entities from smaller, reusable components.

**Example:** Compose a Snake entity from movement, collision, and rendering components.


### Strategy Pattern:
Implement this pattern to define a family of algorithms, encapsulate them, and make them interchangeable. This can be useful for implementing different AI strategies for the Snake's movement.

**Problem:** Define a family of algorithms, encapsulate each one, and make them interchangeable. This is useful for implementing different AI strategies for the Snake's movement.

**Example:** Implement different movement strategies (e.g., random movement, following a path) that can be switched dynamically based on game conditions.


### Memento Pattern:
Use this pattern to capture the internal state of an object and restore it to that state later. This can be useful for implementing undo functionality or saving and loading game states.

**Problem:** Capture an object's internal state so that it can be restored to that state later. This is useful for implementing undo functionality or saving and loading game states.

**Example:** Use the Memento Pattern to save the state of the game before a critical event (e.g., before a level change) so that it can be restored if needed.


### Flyweight Pattern:
Apply this pattern to share common, immutable data between multiple objects to save memory. For example, if you have many identical food items, you can use a flyweight pattern to save memory.

**Problem:** Use sharing to support a large number of objects that have part of their internal state in common where the rest of the state can vary. This is useful for saving memory when dealing with a large number of similar objects.

**Example:** If there are many identical food items on the board, use the Flyweight Pattern to share common properties (like position) among them to save memory.

