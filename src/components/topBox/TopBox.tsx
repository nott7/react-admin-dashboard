import "./top-box.scss";
import { topDealUsers } from "../../data";

const TopBox = () => {
  return (
    <div className="top-box">
      <h1>Top Deals</h1>
      <ul>
        {topDealUsers.map((user) => (
          <li key={user.id}>
            <div className="user">
              <img src={user.img} alt="user pic" />
              <div className="user-texts">
                <span>{user.username}</span>
                <span>{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopBox;
