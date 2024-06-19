import { Objetivo } from './Objetivo'
import { Aprenda } from './Aprenda'
import { Navbar } from '@/components/Navbar';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Objetivo />
      <Aprenda />
    </>
  );
};
