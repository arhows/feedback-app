import './BlogPost.css';
export default function BlogPost() {
  const title = 'Blog Post';
  const body = 'This is my blog post';
  const comments = [
    { id: 1, text: 'Comment one' },
    { id: 2, text: 'Comment two' },
    { id: 3, text: 'Comment three' },
  ];

  const loading = true;
  if (loading) return <h1>loading....</h1>;

  const showComments = true;

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      {showComments ? (
        <div className="comments">
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        </div>
      ) : (
        <h2>There is not comments here</h2>
      )}
    </div>
  );
}
