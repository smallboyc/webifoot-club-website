import Image from "next/image";
import Tribune from "../../assets/history/tribune.jpg";
import { Title } from "../common/typography";

export default function Header() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute z-10 flex h-full w-full items-center justify-center">
        <span className="flex flex-col items-center">
          <Title color={Title.color.PRIMARY} size={Title.size.EXTRA} weight={Title.weight.BOLD} uppercase>
            Histoire
          </Title>
          <Title
            size={Title.size.XXXLARGE}
            color={Title.color.PRIMARY}
            weight={Title.weight.BOLD}
            align={Title.align.CENTER}
            uppercase
          >
            <span className="outline-blue">Du club</span>
          </Title>
        </span>
      </div>

      <Image src={Tribune} alt="" className="h-full w-full object-cover opacity-60" />
    </div>
  );
}
