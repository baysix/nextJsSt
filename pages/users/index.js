import Link from "next/link";

function chapterSiteMap() {
    const ulStyle = {
        paddingLeft: '30px'
    };
    const liStyles = {
        marginBottom : '10px',
    };
    return (
        <div>
            <h2>/pages/users 폴더</h2>
            <p>http://localhost:3000/users</p>
            <p>서버에서 rest API 사용하기 챕터 </p>
            <br />
            <ul style={ulStyle}>
                <li style={liStyles}>
                    - <strong>[username].js 파일</strong>
                    <p>index.js에서 불러온 rest-api를 getServerSideProps 함수를 사용해서 테스트하는 파일 </p>
                </li>
            </ul>
        </div>
    )
}

export default chapterSiteMap;