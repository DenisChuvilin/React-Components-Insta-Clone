import React, {useState} from 'react';




const CommentInput = props => {
  //set state of newComment
  const [newComment, setNewComment] = useState('');


  // changeComment handler
  const changeComment = (e) => (
    setNewComment(e.target.value)
  )
  // submitComment handler
  const submitComment = (e) => {
    e.preventDefault();
    props.setComments([...props.comments, {username: 'NewUser', text: newComment}])
    setNewComment('');
  
  };
  return (
    <form className="comment-form" onSubmit={submitComment}>
    {console.log(newComment)}
      <input
      name = "NewUser"
        type="text"
        value={newComment}
        placeholder="Add comment... "
        onChange={changeComment}
      />

    </form>
  );
};

export default CommentInput;
