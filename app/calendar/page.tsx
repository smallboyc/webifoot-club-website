import ButtonBlue from "@/components/common/button/button-blue";
import FlyOut from "@/components/common/flyout-menu";
import HeaderBis from "@/components/common/header/headerBis";
import CalendarTable from "@/components/common/table/calendar-table";
const Head = {
  name: "Calendrier",
  title: "équipe masculin sénior A",
};

const FlyOutContent = [
  {
    active: "équipe masculin sénior A",
    solutions: [{ value: "équipe féminine sénior A" }, { value: "équipe masculin sénior B" }],
  },
  { active: "2022 / 2023", solutions: [{ value: "2021 / 2022" }, { value: "2020 / 2021" }] },
];

export default function CalendarPage() {
  return (
    <div className="bg-white">
      <div className="max-w-container">
        <HeaderBis data={Head} />
        <div className="flex flex-col gap-5 sm:flex-row sm:px-10">
          {FlyOutContent.map((content) => (
            <FlyOut key={content.active} data={content} />
          ))}
        </div>
        <CalendarTable />
        <div className="flex justify-center">
          <ButtonBlue link="/ranking" data={"Voir le classement"} />
        </div>
      </div>
    </div>
  );
}
