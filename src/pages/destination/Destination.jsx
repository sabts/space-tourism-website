import { useState } from "react";
import Tabs from "../../components/tabs/Tabs";
import { DESTINATION_CONTENT } from "../../constants/destination-content";
import { TABS } from "../../constants/destination-tabs";

const Destination = () => {
  const [activeTab, setActiveTab] = useState(TABS.MOON)
  return <>
<span>{DESTINATION_CONTENT.index} {DESTINATION_CONTENT.MOON.name}</span>
<Tabs tabs={TABS} activeTab={activeTab} setActiveTab={setActiveTab} />
  <div>
        <img
          src={DESTINATION_CONTENT.MOON.img}
          alt={DESTINATION_CONTENT.MOON.name}
        />
        <p>{DESTINATION_CONTENT.MOON.text}</p>
        <p>Distance: {DESTINATION_CONTENT.MOON.distance}</p>
        <p>Travel Time: {DESTINATION_CONTENT.MOON.travelTime}</p>
  </div>
  </>;
};
export default Destination;