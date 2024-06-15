import axios from "src/utils/axios";
import { useEffect, useState } from "react";
import Header from "src/components/Header";
import StatItem from "src/components/StatItem";


function Stat() {

  const [statList, setStatList] = useState([]);

  var type = "";

  useEffect(() => {
    axios.get(`/api/stat/list?statType=${type}`).then((res) => {
      console.log(res);
      setStatList(res.data);
    })
  }, [])


  return (
    <div className="mainContainer">
      <Header />
        <div className="listContainer">
        {statList && statList.map((statItem, index) => {
            return (
            <StatItem key={index} item={statItem}/>
            )
        })}
      </div>
    </div>
  );
}

export default Stat;