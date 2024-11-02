import CorseDetail from "../../screens/CorseDetail";
import Landing from "../../screens/Landing";
import CorseListHolder from "../../components/CorseListHolder";
import NewsListHolder from "../../components/NewsListHolder";

const mainRoutes = [
    { path: "/CorseDetail", element: <CorseDetail /> },
    {path:"/Landing" , element: <Landing /> },
    {path:"/CourseList" , element: <CorseListHolder /> },
    {path:"/NewsList" , element: <NewsListHolder /> }
  
  
  ];

  export default mainRoutes