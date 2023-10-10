import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
   
  export function TabsDefault() {
    const data = [
      {
        label: "SPA",
        value: "html",
        desc: 
        <ul >
          <h3 className="text-lg font-bold text-gray-600">Servicios de SPA:</h3>
          <li className="pl-1 m-2">Relajación con vapor</li>
          <li className="pl-1 m-2">Cuidado de la piel</li>
          <li className="pl-1 m-2">Cultura Oriental</li>
          <li className="pl-1 m-2">Masajes individuales y especializados</li>
        </ul>
        ,
      },
      {
        label: "BUSINESS",
        value: "react",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
      {
        label: "FAMILIA",
        value: "vue",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
      {
        label: "WEEKEND",
        value: "angular",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
      {
        label: "WEDDINGS",
        value: "svelte",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
    ];
   
    return (
      <div className="w-full h-[50vh] mt-[12vh] p-3 " >
        <Tabs value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      </div>
    );
  }