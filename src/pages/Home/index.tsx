import { Objetivo } from './Objetivo'
import { Aprenda } from './Aprenda'
import { Navbar } from '@/components/Navbar';

export const Home = () => {
  return (
    <>
      <Navbar />
      <Objetivo />
      <Aprenda />
    </>
  );
};
