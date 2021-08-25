import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Fallback from './components/Fallback';
import ContactHeader from './components/ContactHeader';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PhoneRing from './components/PhoneRing';
import TrainingEnglish from './features/Training/page/TrainingEnglish/TrainingEnglish';
const Admin = lazy(() => import('./features/Admin'));

const AboutUs = lazy(() => import('./features/AboutUs'));
const NhanSinhIntroduce = lazy(() => import('./features/NhanSinhIntroduce'));
// const Vision = lazy(() => import("./features/AboutUs/page/Vision"));
// const Destination = lazy(() => import("./features/AboutUs/page/Destination"));
// const LeaderDiagram = lazy(() => import("./features/AboutUs/page/LeaderDiagram"));

const Recruit = lazy(() => import('./features/JobAbroad/page/Recruit'));
const Roadmap = lazy(() => import('./features/JobAbroad/page/Roadmap'));
const Activity = lazy(() => import('./features/JobAbroad/page/Activity'));
const Visa462 = lazy(() => import('./features/JobAbroad/page/Visa462'));

const JobAir = lazy(() => import('./features/StartUp'));

const TrainingGerman = lazy(() =>
  import('./features/Training/page/TrainningGerman')
);
const TrainingOnline = lazy(() =>
  import('./features/Training/page/TrainingOnline')
);
const TrainingCourses = lazy(() =>
  import('./features/Training/page/TrainingCourses')
);

const Tech = lazy(() => import('./features/Tech'));
const SmartRooms = lazy(() => import('./features/Tech/SmartRooms'));

const Posts = lazy(() => import('./features/Posts'));
const OfficeRooms = lazy(() => import('./features/Posts/page/OfficeRooms'));
const TravelAbroad2021 = lazy(() =>
  import('./features/Posts/page/TravelAbroad2021')
);

const RecruitmentMain = lazy(() => import('./features/Recruitment'));
// const RegisterPartner = lazy(() =>
//   import('./features/Recruitment/pages/RegisterPartner')
// );

const Contact = lazy(() => import('./features/Contact'));

const Home = lazy(() => import('./features/Home'));

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
          <Route
            path='/gioi-thieu-minh-triet-nhan-sinh'
            component={NhanSinhIntroduce}
          />
          {/* <Route path='/tam-nhin' component={Vision}/>
            <Route path='/su-menh' component={Destination}/>
            <Route path='/so-do-lanh-dao' component={LeaderDiagram}/> */}

          <Route path='/cac-nganh-tuyen-sinh' component={Recruit} />
          <Route path='/lo-trinh' component={Roadmap} />
          <Route path='/hoat-dong-hoc-vien' component={Activity} />

          <Route path='/chuong-tring-visa-462' component={Visa462} />

          <Route path='/du-hoc-nganh-hang-khong' component={JobAir} />

          <Route path='/dao-tao-tieng-duc' component={TrainingGerman} />
          <Route path='/dao-tao-tieng-anh' component={TrainingEnglish} />
          <Route path='/dao-tao-truc-tuyen' component={TrainingOnline} />
          {/* <Route path='/cac-khoa-dao-tao' component={TrainingCourses} /> */}
          <Route path='/tt-phat-trien-nang-luc' component={TrainingCourses} />

          <Route path='/khoa-hoc-cong-nghe' component={Tech} />
          <Route path='/phong-học-thong-minh' component={SmartRooms} />

          <Route path='/tin-tuc' component={Posts} />
          <Route
            path='/van-phong-dai-dien-satsi-tai-Uc'
            component={OfficeRooms}
          />
          <Route
            path='/du-hoc-Uc-2021-cung-Satsi'
            component={TravelAbroad2021}
          />

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
