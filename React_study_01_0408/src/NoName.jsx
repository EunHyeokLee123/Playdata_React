import React from 'react';
import Card from './UI/Card';

const NoName = (props) => {
  console.log('NoName 컴포넌트임');
  console.log(props);

  return (
    <Card className='square'>
      <div>
        {props.children}
        Hello React;
      </div>
    </Card>
  );
};

export default NoName;
