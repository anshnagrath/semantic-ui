import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
const App = ()=>{
return (
<div className="ui container comments">
<ApprovalCard>
<CommentDetails avatar={faker.image.avatar()} content="good one" timeAgo="Today at 4:45PM" author="Sam"/>
</ApprovalCard>
<ApprovalCard>
<CommentDetails avatar={faker.image.avatar()} content="nice" timeAgo="Today at 2:00AM" author="Alex"/>
</ApprovalCard>
<ApprovalCard>
<CommentDetails avatar={faker.image.avatar()} content="Hawt" timeAgo="Yesterday at 5:00PM" author="Jane"/>
</ApprovalCard>

</div>
);
} 

ReactDOM.render(<App />, document.querySelector('#root'));


