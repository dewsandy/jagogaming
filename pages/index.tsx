import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import TransactionsStep from '../components/organisms/TransactionsStep';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Reached from '../components/organisms/Reached';
import Footer from '../components/organisms/Footer';
import Story from '../components/organisms/Story';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionsStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
