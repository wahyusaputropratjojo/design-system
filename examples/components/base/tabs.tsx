import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/base/tabs";

export function ExampleTabs() {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList>
        <TabsTab value="tab-1">Tab 1</TabsTab>
        <TabsTab value="tab-2">Tab 2</TabsTab>
        <TabsTab value="tab-3">Tab 3</TabsTab>
      </TabsList>
      <TabsPanel className="flex items-center justify-center" value="tab-1">
        <p className="text-paragraph-14">Tab 1 Content</p>
      </TabsPanel>
      <TabsPanel className="flex items-center justify-center" value="tab-2">
        <p className="text-paragraph-14">Tab 2 Content</p>
      </TabsPanel>
      <TabsPanel className="flex items-center justify-center" value="tab-3">
        <p className="text-paragraph-14">Tab 3 Content</p>
      </TabsPanel>
    </Tabs>
  );
}

export function ExampleTabsVertical() {
  return (
    <Tabs defaultValue="tab-1" orientation="vertical">
      <TabsList>
        <TabsTab value="tab-1">Tab 1</TabsTab>
        <TabsTab value="tab-2">Tab 2</TabsTab>
        <TabsTab value="tab-3">Tab 3</TabsTab>
      </TabsList>
      <TabsPanel className="flex items-center justify-center" value="tab-1">
        <p className="text-paragraph-14">Tab 1 Content</p>
      </TabsPanel>
      <TabsPanel className="flex items-center justify-center" value="tab-2">
        <p className="text-paragraph-14">Tab 2 Content</p>
      </TabsPanel>
      <TabsPanel className="flex items-center justify-center" value="tab-3">
        <p className="text-paragraph-14">Tab 3 Content</p>
      </TabsPanel>
    </Tabs>
  );
}
