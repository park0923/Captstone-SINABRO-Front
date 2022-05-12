import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import SignIn from 'pages/SignIn';
import resetPassword from 'pages/resetPassword';
import SignUp from 'pages/SignUp';
import Introduction from 'pages/Introduction';
import Home_Education from 'pages/Home_Education';
import Notification from 'pages/Notification';
import Home_Class_List from 'pages/Home_Class_List';
import Member_Home_Notice from 'pages/Member_Home_Notice';
import MemberVolunteer from 'pages/MemberVolunteer';
import Member_Home_Introduction from 'pages/Member_Home_Introduction';
import Member_Home_Inspection from 'pages/Member_Home_Inspection';
import Member_Home_WorkHistory from 'pages/Member_Home_WorkHistory';
import MemberHomeDashboard from 'pages/MemberHomeDashboard';
import Calendar from 'pages/Calendar';
import MemberHomeMyPage from 'pages/MemberHomeMyPage';
import MemberHomeEducation from 'pages/MemberHomeEducation';
import MyChart from 'pages/MyChart';
import MyPieChart from 'pages/MyPieChart';
import testpg from 'pages/testpg';
import NotificationPaginations from 'pages/NotificationPaginations';
import NoticePost from 'pages/NoticePost';
import PostView from 'pages/PostView';
import NonmemberPostView from 'pages/NonmemberPostView';
import VolunteerPaginations from 'pages/VolunteerPaginations';
import VolunteerPost from 'pages/VolunteerPost';

class App extends Component {
  render() {
    return (
      <div className="APP">
        <Route exact path="/" component={Home}/>
        <Route path="/user/signin" component={SignIn} />
        <Route path="/user/signup" component={SignUp} />
        <Route path="/resetPassword" component={resetPassword} />
        <Route path="/about" component={About} />        
        <Route path="/Introduction" component={Introduction} />
        <Route path="/Home_Education" component={Home_Education} />
        <Route path="/Notification" component={Notification} />
        <Route path="/Home_Class_List" component={Home_Class_List} />
        <Route path="/Member_Home_Notice" component={Member_Home_Notice} />
        <Route path="/MemberVolunteer" component={MemberVolunteer} />
        <Route path="/Member_Home_Introduction" component={Member_Home_Introduction} />
        <Route path="/Member_Home_Inspection" component={Member_Home_Inspection} />
        <Route path="/Member_Home_WorkHistory" component={Member_Home_WorkHistory} />
        <Route path="/MemberHomeDashboard" component={MemberHomeDashboard} />
        <Route path="/Calendar" component={Calendar} />
        <Route path="/MemberHomeMyPage" component={MemberHomeMyPage} />
        <Route path="/MemberHomeEducation" component={MemberHomeEducation} />
        <Route path="/MyChart" component={MyChart} />
        <Route path="/MyPieChart" component={MyPieChart} />
        <Route path="/testpg" component={testpg} />       
        <Route path="/NotificationPaginations"  component={NotificationPaginations} />
        <Route path="/NoticePost"  component={NoticePost} />
        <Route path="/PostView/:id" component={PostView} />
        <Route path="/NonmemberPostView/:id" component={NonmemberPostView} />
        <Route path="/VolunteerPaginations" component={VolunteerPaginations} />
        <Route path="/VolunteerPost" component={VolunteerPost} />
      </div>
    );
  }
}

export default App;
