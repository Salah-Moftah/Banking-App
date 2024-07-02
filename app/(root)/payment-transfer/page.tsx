import HeaderBox from "@/components/HeaderBox"
import PaymentTransferForm from "@/components/PaymentTransferForm"
import { useAcounts } from "@/hooks/useCustomHook"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Horizon - Transfer Funds",
};

const Transfer = async () => {

  const { accountsData } = await useAcounts({});

  return (
    <section className='payment-transfer'>
      <HeaderBox 
        title="Payment Transfer"
        subtext="Please provide any specific details or
        notes related to the payment transfer"
      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  )
}

export default Transfer