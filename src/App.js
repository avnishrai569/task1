import React from 'react';
import './App.css'; 

const Block = ({ content,title }) => (
  <div className="block">
    <div>{title}</div>
    <p>{content}</p>
  </div>
);

const App = () => {
  const blocks = [
    { content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, sapiente, consequuntur impedit voluptas harum quaerat, doloribus unde nemo perspiciatis tenetur praesentium fugit dignissimos.',title: "Title 1"},

    {  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, sapiente, consequuntur impedit voluptas harum quaerat, doloribus unde nemo perspiciatis tenetur praesentium fugit dignissimos. ',title: "Title 2" },
    {  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, sapiente, consequuntur impedit voluptas harum quaerat, doloribus unde nemo perspiciatis tenetur praesentium fugit dignissimos. ',title: "Title 3" },
  ];

  const blockElements = blocks.map((block) => (
    <Block key={block} {...block} />
  ));

  return <div className="app">{blockElements}</div>;
};

export default App;
