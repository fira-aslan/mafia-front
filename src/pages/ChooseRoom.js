import React, { Component } from "react";
import classes from "./ChooseRoom.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

class ChooseRoom extends Component {
  state = {
    rooms: [],
    loading: true,
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:8000/api/rooms");
    if (res.data.status === 200) {
      this.setState({
        rooms: res.data.rooms,
        loading: false,
      });
    }
  }

  render() {
    var count = 0;
    var roomInfo = this.state.rooms.map((item) => {
      console.log(item.id);
      count = count + 1;
      return (
        <div className={classes.record}>
          {" "}
          {count}. {item.room_name}:
          <div className={classes.add}>
            #{item.current_players}/{item.all_players}
          </div>
          <Link to="/game">
            <div className={classes.join}>Join</div>
          </Link>
        </div>
      );
    });

    return (
      <div>
        <div className={classes.heading}>Choose a room</div>
        <div className={classes.container}>
          <div className={classes.desc}>{roomInfo}</div>
          <div className={classes.randshuffle}>
            <button className={classes.shuffle}>Shuffle</button>
            <button className={classes.random}>Random</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChooseRoom;
