import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: 'Salah', lastName: 'Moftah', email: 'salahMoftah1814@gmail.com' };
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
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1240.14} />
        </header>

      </div>
      <RightSidebar user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.49}, {currentBalance: 344.49}]} />
    </section>
  );
};

export default Home;
