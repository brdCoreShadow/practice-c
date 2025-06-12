import * as SC from "./AppStyled";
import Access from "./components/Access/Access";

import Download from "./components/Download/Download";
import Partners from "./components/Partners/Partners";
import Snippets from "./components/Snippets/Snippets";
import Workflow from "./components/Workflow/Workflow";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";

function App() {
  return (
    <SC.AppStyled>
      <Header />
      <SharedLayout>
        <Snippets />
        <Access />
        <Workflow />
        <Partners />
        <Download />
      </SharedLayout>
      <Footer />
    </SC.AppStyled>
  );
}

export default App;
