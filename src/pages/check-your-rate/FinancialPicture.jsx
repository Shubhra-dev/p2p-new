import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import PrimaryButton from "../../components/PrimaryButton";
import { FaLessThan } from "react-icons/fa6";
import SubHeading from "../../components/SubHeading";
function FinancialPicture({ data, setData, setPage }) {
  return (
    <>
      <SubTitle align={`text-center`} padding={`pb-2`} font={`font-normal`}>
        Tell us about your financial picture
      </SubTitle>
      <SubHeading align={`text-center`} padding={`pb-2`}>
        We may need to confirm this info later so try to be as exact as possible
      </SubHeading>

      <div className="mt-4 mb-3 w-full border pl-2 border-gray-400 flex items-center gap-2">
        <SubHeading color={`textColor3`} padding={`py-0`}>
          ৳
        </SubHeading>
        <input
          type="number"
          name="Annual_income"
          id="annual_income"
          className="p-3 w-full"
          placeholder="Your Annual Income"
          value={data.financialPicture.annualIncome}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              financialPicture: {
                ...prevState.financialPicture,
                annualIncome: e.target.value,
              },
            }))
          }
        />
      </div>
      <div className="mb-3 w-full border pl-2 border-gray-400 flex items-center gap-2">
        <SubHeading color={`textColor3`} padding={`py-0`}>
          ৳
        </SubHeading>
        <input
          type="number"
          name="Additional_income"
          id="additional_income"
          className="p-3 w-full"
          placeholder="Additional Income (optional)"
          value={data.financialPicture.additionalIncome}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              financialPicture: {
                ...prevState.financialPicture,
                additionalIncome: e.target.value,
              },
            }))
          }
        />
      </div>
      <div className="mb-3 w-full border pl-2 border-gray-400 flex items-center gap-2">
        <SubHeading color={`textColor3`} padding={`py-0`}>
          ৳
        </SubHeading>
        <input
          type="number"
          name="Monthly_rate"
          id="monthly_rate"
          className="p-3 w-full"
          placeholder="Monthly Rent or Mortgage Payment"
          value={data.financialPicture.monthlyRate}
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              financialPicture: {
                ...prevState.financialPicture,
                monthlyRate: e.target.value,
              },
            }))
          }
        />
      </div>
      <div className="flex gap-2 items-center justify-between pt-4">
        <div
          className="border border-primary p-2 rounded-md"
          onClick={() => setPage(6)}
        >
          <FaLessThan className="text-primary" />
        </div>
        <div className="w-full" onClick={() => setPage(8)}>
          <PrimaryButton width={`w-full`} noIcon={true}>
            Continue
          </PrimaryButton>
        </div>
      </div>
      <Text align={`text-center`} color={`textColor3`}>
        This will not affect your credit score
      </Text>
    </>
  );
}

export default FinancialPicture;
