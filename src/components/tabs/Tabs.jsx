import { NavLink } from "react-router";
import { StyledTab } from "./tab-styles";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <StyledTab>
      {tabs.map((tab, index) => (
        <li key={tab} onClick={() => setActiveTab(index)}>
          <NavLink>{tab}</NavLink>
        </li>
      ))}
    </StyledTab>
  );
};
export default Tabs;
