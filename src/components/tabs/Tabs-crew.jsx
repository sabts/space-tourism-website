import { StyledCrewTab, StyledTab } from "./tab-styles";

const TabsCrew = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <StyledTab>
      {tabs.map((tab, index) => (
        <li
          key={tab}
          $isActive={activeTab === index}
          onClick={() => setActiveTab(index)}
        >
          <StyledCrewTab />
        </li>
      ))}
    </StyledTab>
  );
};
export default TabsCrew;
