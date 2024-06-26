import GraphTabs from "graph-tabs";

const tabs = new GraphTabs("prodtab", {
  isChanged: (tabs) => {
    console.log("Изменена активная вкладка:", tabs);
  },
});
