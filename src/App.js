// import { BrowserRouter, Routes, Route } from "react-router-dom";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={ require('./Pages/Layout').default() }>
//           <Route index element={ require('./Pages/Home').default() } />
//           <Route path="business/" element={ require('./Pages/Business').default() } />
//           <Route path="business/:businessId" element={ require('./Pages/BusinessDetail').default() } />
//           <Route path="*" element={ require('./Pages/NotFound').default() } />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Business from './Pages/Business';
import BusinessDetail from './Pages/BusinessDetail';

const App = () => {
 return (
    <>
      <Layout/>
      <Routes>
        <Route path="/" element={ require('./Pages/Home').default() } />
        <Route path="/business" element={ <Business /> } />
        <Route path="/business/:businessID" element={ <BusinessDetail /> } />
        <Route path="*" element={ require('./Pages/NotFound').default() } />
      </Routes>
    </>
 );
};

export default App;
