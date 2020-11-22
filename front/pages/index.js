// import React from 'react';  next에서는 import react할 필요가 없다. 대신 pages폴더명은 'pages'로만 해야한다.
// pages 폴더 안에 있는 파일들은 각각의 컴포넌트로 넥스트가 알아서 코드스플릿팅 해줌
import  AppLayout from '../components/AppLayout'; 

const Home = () => {
    return (
        <AppLayout>
            <div>Hello, Next!</div>
        </AppLayout>
    );
}

export default Home;