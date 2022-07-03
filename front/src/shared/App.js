import React, { Component } from "react";
import { Route } from "react-router-dom";
// import Home from "pages/Home";
import About from "pages/About";
import SignIn from "pages/SignIn";
import resetPassword from "pages/resetPassword";
import SignUp from "pages/SignUp";
import Introduction from "pages/Introduction";
import InspectionPaginations from "pages/InspectionPaginations";
import Home_Education from "pages/Home_Education";
import Notification from "pages/Notification";
import Home_Class_List from "pages/Home_Class_List";
import Home_Class_Paginations from "pages/Home_Class_Paginations";
import Member_Home_Notice from "pages/Member_Home_Notice";
import MemberVolunteer from "pages/MemberVolunteer";
import Member_Home_Introduction from "pages/Member_Home_Introduction";
import Member_Home_Inspection from "pages/Member_Home_Inspection";
import Member_Home_WorkHistory from "pages/Member_Home_WorkHistory";
import MemberHomeDashboard from "pages/MemberHomeDashboard";
import Calendar from "pages/Calendar";
import MemberHomeMyPage from "pages/MemberHomeMyPage";
import MemberHomeEducation from "pages/MemberHomeEducation";
import MyChart from "pages/MyChart";
import MyPieChart from "pages/MyPieChart";
import testpg from "pages/testpg";
import NotificationPaginations from "pages/NotificationPaginations";
import None_NotificationPaginations from "pages/None_NotificationPaginations";
import NoticePost from "pages/NoticePost";
import None_NoticePost from "pages/None_NoticePost";
import PostView from "pages/PostView";
import NonmemberPostView from "pages/NonmemberPostView";
import VolunteerPaginations from "pages/VolunteerPaginations";
import VolunteerPost from "pages/VolunteerPost";
import MemberEducation from "pages/MemberEducation";
import Disabled from "pages/Disabled";
import Disabled_file from "pages/Disabled_file";
import Disabled_MyPage from "pages/Disabled_MyPage";
import Disabled_write from "pages/Disabled_write";
import MemberHomeInspectionWorkPage from "pages/MemberHomeInspectionWorkPage"; /*검수 페이지*/
import MemberHomeNoticePage from "pages/MemberHomeNoticePage"; /*공지 상세 내용*/
import MemberHomeTrainingScreen from "pages/MemberHomeTrainingScreen"; /*교육*/
import MemberHomeVolunteerWorkPage from "pages/MemberHomeVolunteerWorkPage"; /*봉사자 작업 페이지*/
import MemberHomeWorkInformation from "pages/MemberHomeWorkInformation"; /**/
import MemberNoticeWrite from "pages/MemberNoticeWrite";
import Notification_page from "pages/Notification_page";
import MemberHomeWorkView from "pages/MemberHomeWorkView";
import WorkHistoryPost from "pages/WorkHistoryPost";
import Disabled_main from "pages/Disabled_main";
import Disabled_MyPage_edit from "pages/Disabled_MyPage_edit";
import SignIn_disabled from "pages/SignIn_disabled";
import SignUp_disabled from "pages/SignUp_disabled";
import MemberHomeMyPage_edit from "pages/MemberHomeMyPage_edit";
import wordtesseract from "pages/wordtesseract";
import Home from "Web/Home";
import TopBar from "Web/TopBar"
import UserDashboard from "Web/UserDashboard";

class App extends Component {
  
  render() {
    return (
      <div className="APP">        
        <Route exact path="/" component={Home} />        
        <Route path="/user/signin" component={SignIn} />
        <Route path="/user/signup" component={SignUp} />
        <Route path="/resetPassword" component={resetPassword} />
        <Route path="/about" component={About} />
        <Route path="/Introduction" component={Introduction} />
        <Route
          path="/InspectionPaginations"
          component={InspectionPaginations}
        />
        <Route path="/Home_Education" component={Home_Education} />
        <Route path="/Notification" component={Notification} />
        <Route path="/Home_Class_List" component={Home_Class_List} />
        <Route
          path="/Home_Class_Paginations"
          component={Home_Class_Paginations}
        />
        <Route path="/Member_Home_Notice" component={Member_Home_Notice} />
        <Route path="/MemberVolunteer" component={MemberVolunteer} />
        <Route
          path="/Member_Home_Introduction"
          component={Member_Home_Introduction}
        />
        <Route
          path="/Member_Home_Inspection"
          component={Member_Home_Inspection}
        />
        <Route
          path="/Member_Home_WorkHistory"
          component={Member_Home_WorkHistory}
        />
        <Route path="/MemberHomeDashboard" component={MemberHomeDashboard} />
        <Route path="/Calendar" component={Calendar} />
        <Route path="/MemberHomeMyPage" component={MemberHomeMyPage} />
        <Route path="/MemberHomeEducation" component={MemberHomeEducation} />
        <Route path="/MyChart" component={MyChart} />
        <Route path="/MyPieChart" component={MyPieChart} />
        <Route path="/testpg" component={testpg} />
        <Route
          path="/NotificationPaginations"
          component={NotificationPaginations}
        />

        <Route
          path="/None_NotificationPaginations"
          component={None_NotificationPaginations}
        />

        <Route path="/NoticePost" component={NoticePost} />

        <Route path="/None_NoticePost" component={None_NoticePost} />

        <Route path="/PostView/:id" component={PostView} />
        <Route path="/NonmemberPostView/:id" component={NonmemberPostView} />
        <Route path="/VolunteerPaginations" component={VolunteerPaginations} />
        <Route path="/VolunteerPost" component={VolunteerPost} />
        <Route path="/MemberEducation" component={MemberEducation} />
        <Route path="/Disabled" component={Disabled} />
        <Route path="/Disabled_file" component={Disabled_file} />
        <Route path="/Disabled_MyPage" component={Disabled_MyPage} />
        <Route path="/Disabled_write" component={Disabled_write} />     
        <Route path="/MemberNoticeWrite" component={MemberNoticeWrite} />
        <Route path="/Notification_page/:id" component={Notification_page} />
        <Route path="/MemberHomeInspectionWorkPage/:id" component={MemberHomeInspectionWorkPage}/> 
        <Route path="/MemberHomeNoticePage/:id" component={MemberHomeNoticePage}/>
        <Route path="/MemberHomeTrainingScreen/:id" component={MemberHomeTrainingScreen}/>
        <Route path="/MemberHomeVolunteerWorkPage/:id" component={MemberHomeVolunteerWorkPage}/>
        <Route path="/MemberHomeWorkInformation/:id" component={MemberHomeWorkInformation}/>
        <Route path="/MemberNoticeWrite" component={MemberNoticeWrite} />
        <Route path="/MemberHomeWorkView/:id" component={MemberHomeWorkView} />
        <Route path="/WorkHistoryPost" component={WorkHistoryPost} />
        <Route path="/Disabled_main" component={Disabled_main} />
        <Route path="/Disabled_MyPage_edit" component={Disabled_MyPage_edit} />
        <Route path="/SignIn_disabled" component={SignIn_disabled} />
        <Route path="/SignUp_disabled" component={SignUp_disabled} />
        <Route path="/MemberHomeMyPage_edit" component={MemberHomeMyPage_edit} />
        <Route path="/wordtesseract" component={wordtesseract} />        
        <Route path="/TopBar" component={TopBar} />
        <Route path="/UserDashboard" component={UserDashboard} />
      </div>
    );
  }
}

export default App;
