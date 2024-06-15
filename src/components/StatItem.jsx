import "src/styles/StatItem.scss";

function StatItem(props) {
  
  var item = props.item;

  var desc = item.txt ? item.txt : "스탯 설명";
  var show = item.showYn ? "대표" : "";
  var type;
  switch (item.statType) {
    case 0:
        type = "기본/유동";
        break;

    case 1:
        type = "기본/고정";
        break;

    case 2:
        type = "연계";
        break;
  
    default:
        type = "기본/유동";
        break;
  }

  return (
    <div className="itemBox">
        <div className="itemDesc">
            <span className="desc">{desc}</span>
            <span className="show">{show}</span>
        </div>
        <div className="itemInfo">
            <div className="itemName">
                <span className="name">{item.name}</span>
                <span className="type">{type}</span>
             </div>
            <div className="itemValue">
                <span className="min">최소: {item.minNum}</span> {" / "} 
                <span className="max">최대: {item.maxNum}</span> {" / "}  
                <span className="default">기본: {item.defaultNum}</span> {" / "} 
                <span className="unit">단위: {item.unit}</span>
             </div>
        </div>
    </div>
  );
}

export default StatItem;