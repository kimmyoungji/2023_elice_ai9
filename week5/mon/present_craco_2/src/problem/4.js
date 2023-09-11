// App.js
import React from "react";
// Profile 함수 import
import { Profile } from "./components/Profile";

function App() {
    const title = "사용자 프로파일";
    return (
        <div>
            <h1>{title}</h1>
            <Profile />
        </div>
    );
}

export default App;

// components/Profile.js
import React from "react";

// Comment 컴포넌트 import
import { Comment } from "./Comment";
// UserInfo 컴포넌트 import
import { UserInfo } from "./UserInfo";

import "../index.css";

function Profile() {
    const user1 = {
        name: "엘리스 토끼",
        age: "12",
    };
    const text1 = "React는 재밌다!!";

    return (
        <div className="profile">
            <Comment text={text1} />
            <UserInfo user={user1} />
        </div>
    );
}

export { Profile };
