import { Tabs } from '@mantine/core';

interface RiskTabsProps {
  children: React.ReactNode;
}

export function RiskTabs({ children }: RiskTabsProps) {
  return (
    <Tabs defaultValue="heatmap">
      <Tabs.List>
        <Tabs.Tab value="heatmap">Тепловая карта</Tabs.Tab>
        <Tabs.Tab value="analytics">Аналитика</Tabs.Tab>
        <Tabs.Tab value="trends">Тренды</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="heatmap" pt="md">
        {children}
      </Tabs.Panel>

      <Tabs.Panel value="analytics" pt="md">
        <div>Контент аналитики будет здесь</div>
      </Tabs.Panel>

      <Tabs.Panel value="trends" pt="md">
        <div>Контент трендов будет здесь</div>
      </Tabs.Panel>
    </Tabs>
  );
}

