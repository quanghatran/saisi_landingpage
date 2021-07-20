import { BrowserRouter , Switch, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';

import Fallback from "./components/Fallback";
import ContactHeader from "./components/ContactHeader";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PhoneRing from "./components/PhoneRing";

const Admin = lazy(() => import("./features/Admin"));


const AboutUs = lazy(() => import("./features/AboutUs"));
// const Vision = lazy(() => import("./features/AboutUs/page/Vision"));
// const Destination = lazy(() => import("./features/AboutUs/page/Destination"));
// const LeaderDiagram = lazy(() => import("./features/AboutUs/page/LeaderDiagram"));

const Recruit = lazy(() => import("./features/JobAbroad/page/Recruit"));
const Roadmap = lazy(() => import("./features/JobAbroad/page/Roadmap"));
const Activity = lazy(() => import("./features/JobAbroad/page/Activity"));

const JobAir = lazy(() => import("./features/StartUp"));

const TrainingGerman = lazy(() => import("./features/Training/page/TrainningGerman"));
const TrainingOnline = lazy(() => import("./features/Training/page/TrainingOnline"));

const Tech = lazy(() => import("./features/Tech"));

const Posts = lazy(() => import("./features/Posts"));

const RecruitmentMain = lazy(() => import('./features/Recruitment'));
// const RegisterPartner = lazy(() =>
//   import('./features/Recruitment/pages/RegisterPartner')
// );

const Contact = lazy(() => import("./features/Contact"));

const Home = lazy(() => import("./features/Home"));

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <BrowserRouter>
        <ContactHeader />
        <Logo />
        <Navbar />

        <Switch>
          <Route exact path='/*admin' component={Admin} />

          <Route path='/ve-satsi' component={AboutUs} />
          {/* <Route path='/tam-nhin' component={Vision}/>
            <Route path='/su-menh' component={Destination}/>
            <Route path='/so-do-lanh-dao' component={LeaderDiagram}/> */}

          <Route path='/cac-nganh-tuyen-sinh' component={Recruit} />
          <Route path='/lo-trinh' component={Roadmap} />
          <Route path='/hoat-dong-hoc-vien' component={Activity} />

          <Route path='/du-hoc-nganh-hang-khong' component={JobAir} />

          <Route path='/dao-tao-tieng-duc' component={TrainingGerman} />
          <Route path='/dao-tao-truc-tuyen' component={TrainingOnline} />

          <Route path='/khoa-hoc-cong-nghe' component={Tech} />

          <Route path='/tin-tuc' component={Posts} />

          <Route path='/tuyen-nhan-su' component={RecruitmentMain} />
          {/* <Route path='/dang-ky-ctv' component={RegisterPartner} /> */}

          <Route path='/lien-he' component={Contact} />

          <Route path='/' component={Home} />
        </Switch>

        <ContactForm />
        <Footer />
        <PhoneRing />
        <ScrollToTop />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
