import HeaderBox from "@/components/HeaderBox";
import RecentTransactions from "@/components/RecentTransactions ";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { useAcounts } from "@/hooks/useCustomHook";

const Home = async ({ searchParams: {id, page} }: SearchParamProps) => {

  const { 
    currentPage,
    account,
    accounts,
    loggedIn,
    accountsData, 
    appwriteItemId 
    } = await useAcounts({id, page});

  if (!accounts) return;
  
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type='greeting' 
          title='Welcome'
          user={loggedIn?.firstName || 'Guest'}
          subtext='Access and manage your account and transaction efficiently.' />
          <TotalBalanceBox 
          accounts={accountsData}
          totalBanks={accounts?.totalBanks}
          totalCurrentBalance={accounts?.totalCurrentBalance} />
        </header>

        <RecentTransactions 
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />

      </div>
      <RightSidebar user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)} />
    </section>
  );
};

export default Home;
