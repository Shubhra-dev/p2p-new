import Heading2 from "../../components/Heading2";
import Heading1 from "../../components/Heading1";
import SmallText from "../../components/SmallText";
import PrimaryButton from "../../components/PrimaryButton";
import { useState } from "react";
import Text from "../../components/Text";
function CreditScoreScreen({ setPage }) {
  const [sliderValue, setSliderValue] = useState(680);
  return (
    <div className="bg-white rotate-[8deg] rounded-[15px] p-[20px]">
      <Text align={`text-center`} color={`accent`} padding={`pb-2`}>
        1/5
      </Text>
      <Heading2 align={`text-center`} font={`font-normal`}>
        What’s your estimated credit score?
      </Heading2>
      <Text align={`text-center`} color={`accent`} padding={`pb-4`}>
        If you don’t know it, give us your best guess.
      </Text>
      <Heading1 align={`text-center`} font={`font-normal`}>
        {sliderValue} - {Number(sliderValue) + 20}
      </Heading1>
      <div className="w-full flex gap-2 items-center py-4">
        <SmallText color={`textColor3`}>600</SmallText>
        <input
          type="range"
          className="w-full h-1"
          max={830}
          min={600}
          defaultValue={680}
          value={sliderValue}
          onChange={(e) => setSliderValue(e.target.value)}
          step={10}
        />
        <SmallText color={`textColor3`}>850</SmallText>
      </div>
      <div className="w-max m-auto pt-4" onClick={() => setPage(2)}>
        <PrimaryButton noIcon={true}>continue</PrimaryButton>
      </div>
    </div>
  );
}

export default CreditScoreScreen;
