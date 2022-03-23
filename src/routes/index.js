import { Navigate } from "react-router";
import ArticleContent from "../components/ArticleList/ArticleContent/ArticleContent";
import FirstArticle from "../components/ArticleList/ArticleContent/FirstArticle";

export default [
    {
        path: '/articlecontent',
        element: <ArticleContent />
    },
    {
        path: '/firstarticle',
        element: <FirstArticle />,
        // children: [
        //     {
        //         path: 'article',
        //         element: <Article />
        //     },
        //     {
        //         path: 'review',
        //         element: <Review />
        //     },
        //     {
        //         path: 'random',
        //         element: <Random />
        //     }
        // ]
    },
    {
        path: '/',
        element: <Navigate to="/articlecontent" />
    }
]