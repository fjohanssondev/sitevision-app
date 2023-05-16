import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import type { AppProps } from "../../types/types";
import { arr } from '../../data'

import Category from "../components/Category";
import SubCategory from "../components/SubCategory/SubCategory";

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <Router>
      <div>
        {arr.map((category) => (
          <div key={category.id}>
            <Category category={category} />
          </div>
        ))}
        <Routes>
          <Route path='/' element={<SubCategory />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
