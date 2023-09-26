function UserCard({ name, onDelete }) {
    return (
      <div className="user-card">
        <div className="user-info">
          <h2>{name}</h2>
          <p>{name} ke baare mein kuch additional jaankari yahan dikhayi ja sakti hai.</p>
        </div>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
      </div>
    );
  }
  


  export default UserCard;