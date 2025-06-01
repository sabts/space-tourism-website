import { StyledTabContainer, StyledTabContainerTechnology, StyledTechnologyTab } from "./tab-styles";

const TabsTechnology = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <StyledTabContainerTechnology>
      {tabs.map((tab, index) => (
        <StyledTechnologyTab
          key={tab}
          onClick={() => setActiveTab(index)}
          $isActive={activeTab === index}
        >
          {index + 1}
        </StyledTechnologyTab>
      ))}
    </StyledTabContainerTechnology>
  );
};
export default TabsTechnology;
