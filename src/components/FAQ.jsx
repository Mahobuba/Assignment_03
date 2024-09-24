const FAQ = () => {
  const questions = [
    {
      question: "What is React.js?",
      answer: "React.js is a JavaScript library for building user interfaces. It allows developers to create reusable UI components that update efficiently based on changes in application state. React is maintained by Facebook and is widely used for developing single-page applications."
    },
    {
      question: "What is JSX in React, and how does it work?",
      answer: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript used in React that allows developers to write HTML-like code inside JavaScript. JSX makes it easier to visualize the structure of the UI by embedding HTML-like elements in the JavaScript logic. Under the hood, JSX is transpiled into standard JavaScript function calls (using React.createElement)."
    },
    {
      question: "What is the Virtual DOM, and how does React use it to optimize performance?",
      answer: "The Virtual DOM (VDOM) is a lightweight copy of the actual DOM. React uses it to keep track of changes in the UI without directly interacting with the real DOM. When an update occurs, React first updates the virtual DOM, compares it with the previous version (diffing), and calculates the minimum number of changes required to apply to the real DOM. This approach minimizes direct DOM manipulations, making updates more efficient and improving performance."
    },
    {
      question: "What are 'props' in React, and how are they used?",
      answer: "Props, short for 'properties,' are used to pass data from one component to another in React. Props are read-only and are passed from parent components to child components. They allow components to be dynamic and reusable by accepting different inputs. For example, you can pass a title, image, or list of data as props to render specific content in a child component."
    },
    {
      question: "What is 'state' in React, and how does it differ from props?",
      answer: "State is a built-in object in React that allows components to manage and store dynamic data. Unlike props, which are passed down from parent to child components and are read-only, state is managed internally by the component. A component can change its state over time (e.g., in response to user input) using the `setState` function, which triggers re-rendering. State is local to the component, while props are external and passed from parent components."
    },
    {
      question: "What is the useState hook and how is it used?",
      answer: "The `useState` hook is a React function that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that value. You can call `useState` inside your component to define a state variable. For example:\n\n```jsx\nconst [count, setCount] = useState(0);\n```\nIn this example, `count` is the state variable, and `setCount` is the function used to update it."
    },
    {
      question: "What is the purpose of the useEffect hook in React, and when would you use it?",
      answer: "`useEffect` is a React hook that lets you perform side effects in functional components, such as data fetching, subscribing to events, or manually manipulating the DOM. It takes two arguments: a callback function and an optional array of dependencies. The hook runs the callback function after the component renders, and it can be used to perform cleanup operations if necessary. You would use `useEffect` when you need to synchronize your component with external data or effects."
    }
  ];

  return (
    <div className="faq-section p-5">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      {questions.map((item, index) => (
        <div key={index} className="faq-item border-b py-4">
          <h2 className="text-lg font-semibold">{item.question}</h2>
          <p className="text-gray-700">{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

  