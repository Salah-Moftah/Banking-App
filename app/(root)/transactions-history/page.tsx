import HeaderBox from '@/components/HeaderBox'
import { Pagination } from '@/components/Pagination';
import TransactionsTable from '@/components/TransactionsTable';
import { useAcounts } from '@/hooks/useCustomHook';
import { formatAmount } from '@/lib/utils';

const TransactionHistory = async ({searchParams: {id, page} }: SearchParamProps) => {
  
  const { 
    account,
    accounts,
    currentPage
    } = await useAcounts({id, page});

  if (!accounts) return;

  const rowsPerPage = 10;
  const totalPages = Math.ceil(account?.transactions.length / rowsPerPage);

  const indexOfLastTransactions = currentPage * rowsPerPage;
  const indexOfFirstTransactions = indexOfLastTransactions - rowsPerPage;

  const currentTransactions = account?.transactions.slice(indexOfFirstTransactions, 
    indexOfLastTransactions);

  return (
    <div className='transactions'>
      <div className='transactions-header'>
        <HeaderBox
          title='Transaction History'
          subtext='See your bank details and transactions.'
        />
      </div>
      <div className='space-y-6'>
        <div className='transactions-account'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-18 font-bold text-white'>{account?.data.name}</h2>
            <p className='text-14 text-blue-25'>
              {account?.data.officialName}
            </p>
            <p className='text-14 font-semibold tracking-[1.1px] text-white'>
            ●●●● ●●●● ●●●● {account?.data.mask}
            </p>
          </div>
          <div className='transactions-account-balance'>
            <p className='text-16'>Current balance</p>
            <p className='text-24 text-center font-bold'>
              {formatAmount(account?.data.currentBalance)}
            </p>
          </div>
        </div>

        <section className='flex w-full flex-col gap-6'>
          <TransactionsTable 
            transactions={currentTransactions}
          />

          {totalPages > 1 && 
            <div className="my-4 w-full">
              <Pagination 
                totalPages={totalPages} 
                page={currentPage} 
              />
            </div>
          }
        </section>
      </div>
    </div>
  )
}

export default TransactionHistory