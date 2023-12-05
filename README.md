<h1 align="center">Snake 🐍</h1>

<h4 align="center">Snake Game wtitten in TypeScript</h4><a><svg fill="blue" height="26" viewBox="0 0 27 26" width="27" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z" fill="#fff" fill-rule="evenodd"></path></svg></a>

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

