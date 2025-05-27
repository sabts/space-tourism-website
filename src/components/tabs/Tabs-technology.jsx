import { StyledCrewTab, StyledTab } from "./tab-styles";

const TabsTechnology = ({ tabs, activeTab, setActiveTab }) => {
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
export default TabsTechnology;
