import { Skeleton } from '@mui/material';
import React, {Suspense} from 'react';
import App from "../layout/App";

function Home() {
  return (
    <>
      <Suspense fallback={<Skeleton variant="rectangular" width={500} heigth={200} />}>
        <App />
      </Suspense>
    </>
  );
}

export default Home;
