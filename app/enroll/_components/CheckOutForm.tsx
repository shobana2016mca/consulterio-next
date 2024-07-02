import { FormWrapper } from '@/app/_components/FormWrapper';
import BatchSelection from './BatchSelection';
import PaymentLogo from './PaymentLogo';
import PriceTable from './PriceTable';

export default function CheckOutForm() {
  return (
    <FormWrapper title='Check out'>
      <div
        className={
          'border rounded-lg p-4 bg-white flex flex-col gap-y-8 w-full my-8'
        }>
        <BatchSelection />

        <PriceTable />

        <PaymentLogo />
      </div>
    </FormWrapper>
  );
}
