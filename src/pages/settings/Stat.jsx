import axios from "src/utils/axios";
import { useEffect, useState } from "react";
import Header from "src/components/Header";
import StatItem from "src/components/StatItem";


function Stat() {

  const [statList, setStatList] = useState([]);
  const [statTypeList, setStatTypeList] = useState([]);
  const [type, setType] = useState("");

  const handleSelect = async (e) => {
    var code = e.target.value;
    if(code < 40) { 
      setType("");
    } else {
      setType(code - 40);
    }

    const response = await axios.get(`/api/stat/list?statType=${type}`);
    setStatList(response.data);
  }

  useEffect(() => {
    axios.get(`/api/stat/list?statType=${type}`).then((res) => {
      setStatList(res.data);
    })
    axios.get(`/api/common/code?type=4`).then((res) => {
      setStatTypeList(res.data);
    })
  }, [])


  return (
  <>
    <Header />
    <div className="mainContainer">
        <div className="pageTitle">스탯 관리</div>
        <select onChange={handleSelect}>
          <option value={39}>전체</option>
          {statTypeList.map((item) => (
            <option value={item.code} key={item.code}>
              {item.codeName}
            </option>
          ))}
        </select>
        <div className="listContainer">
        {statList && statList.map((statItem, index) => {
            return (
              <StatItem key={index} item={statItem}/>
            )
        })}
      </div>
    </div>
  </>
  );
}

export default Stat;