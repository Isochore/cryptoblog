import type { NextPage } from "next";
import ArticlePreview from '../organisms/HomePage';
import ArticleDetail from '../organisms/ArticleDetail';
import { BrowserRouter, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import HomePage from "../organisms/HomePage";


const Body: NextPage = () => {
    return (
    <div className="container">
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/detail" element={<ArticleDetail/>}/>
                {/* <Route path="*" element={<NotFound/>}/> */}
            </Routes>
        </Router>
        <style jsx>{`
            .container {
                background-color: #f9f9f9;
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100%;
                width: 100%;
                color: black;
            }
    `   }</style>
    </div>
    );
};

export default Body;