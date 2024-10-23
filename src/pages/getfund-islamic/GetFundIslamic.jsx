import Heading1 from "../../components/Heading1";
import MoonStarts from "../../icon/MoonStarts";
import Rocket from "../../icon/Rocket";
import CPU from "../../icon/CPU";
import SectionLayout from "../../ui/SectionLayout";
import FinancialSolutionIslamic from "./FinancialSolutionIslamic";
import GetFundIslamicHero from "./GetFundIslamicHero";
import IconFlexBox from "./IconFlexBox";
import IslamicEligibility from "./IslamicEligibility";

function GetFundIslamic() {
  return (
    <>
      <GetFundIslamicHero />
      <FinancialSolutionIslamic />
      <IslamicEligibility />
      <SectionLayout>
        <Heading1 align={`text-center`} padding={`pb-8`}>
          Here’s why you should finance with FINTECH Islamic
        </Heading1>
        <IconFlexBox
          heading={`We’re Shariah-compliant`}
          bg={`bg-islamic/10`}
          text={`Our financing solutions are regulated and governed by the requirements of Shariah law.`}
        >
          <div className="border-2 rounded-md border-islamic bg-white p-2">
            <MoonStarts />
          </div>
        </IconFlexBox>
        <div className="py-4 w-full flex flex-wrap sm:flex-nowrap items-start gap-6">
          <IconFlexBox
            height={`h-auto sm:h-[250px] tab:h-[200px]`}
            width={`w-full sm:w-[48%]`}
            heading={`We’re fast and simple`}
            text={`Our digitalised application and documentation process accelerates the speed of approval and disbursement of funds.`}
          >
            <div className="border-2 rounded-md border-islamic bg-white p-2">
              <Rocket color={`black`} />
            </div>
          </IconFlexBox>
          <IconFlexBox
            height={`h-auto sm:h-[250px] tab:h-[200px]`}
            width={`w-full sm:w-[48%]`}
            heading={`We’re technology-driven`}
            text={`Our strong data-driven insights generate sophisticated credit scoring ensure that your objective aligns with your business goals.`}
          >
            <div className="border-2 rounded-md border-islamic bg-white p-2">
              <CPU color={`black`} />
            </div>
          </IconFlexBox>
        </div>
        <div className="py-4 w-full flex flex-wrap sm:flex-nowrap items-start gap-6">
          <IconFlexBox
            height={`h-auto sm:h-[250px] tab:h-[200px]`}
            width={`w-full sm:w-[48%]`}
            heading={`We’re fast and simple`}
            text={`Our digitalised application and documentation process accelerates the speed of approval and disbursement of funds.`}
          >
            <div className="border-2 rounded-md border-islamic bg-white p-2">
              <Rocket color={`black`} />
            </div>
          </IconFlexBox>
          <IconFlexBox
            height={`h-auto sm:h-[250px] tab:h-[200px]`}
            width={`w-full sm:w-[48%]`}
            heading={`We’re technology-driven`}
            text={`Our strong data-driven insights generate sophisticated credit scoring ensure that your objective aligns with your business goals.`}
          >
            <div className="border-2 rounded-md border-islamic bg-white p-2">
              <CPU color={`black`} />
            </div>
          </IconFlexBox>
        </div>
      </SectionLayout>
    </>
  );
}

export default GetFundIslamic;
