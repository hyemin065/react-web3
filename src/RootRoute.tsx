import { Link, Route, Routes } from 'react-router-dom';
import Test from './Test';

const RootRoute = () => {
  return (
    <>
      <Routes>
        <Route path="test" element={<Test />} />
      </Routes>
    </>
  );
};

export default RootRoute;
