function UserCard({ name, onDelete }) {
    return (
      <div className="user-card">
        <div className="user-info">
          <h2>{name}</h2>
          <p>{name} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, tempora!</p>
        </div>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
      </div>
    );
  }
  


  export default UserCard;