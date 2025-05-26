const Tabs = ({tabs, activeTab, setActiveTab}) => {
    return (
         <ul>
      {tabs.map((tab, index) => (
        <li
          key={tab}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </li>
      ))}
    </ul>
    )
}
export default Tabs