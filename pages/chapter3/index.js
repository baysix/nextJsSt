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
            <h2>/pages/chapter3 폴더</h2>
            <p>chapter3경로에 있는 모든 폴더에 대한 설명입니다.</p>
            <br />
            <ul style={ulStyle}>
                <li style={liStyles}>
                    - <strong>[date]폴더</strong>
                    <p>폴더경로 매개변수를 사용한 페이지 라우팅 방법</p>
                </li>
                <li style={liStyles}>
                    - <strong>basic 폴더</strong>
                    <p>기본 페이지 라우팅 방법</p>
                </li>
                <li style={liStyles}>
                    - <strong>navLink 폴더</strong>
                    <p>Link, router.push를 이용한 페이지 이동 방법</p>
                </li>
                <li style={liStyles}>
                    - <strong>svsp 폴더</strong>
                    <p>getServerSideProps함수를 이용한 컴포넌트 외부에서 URL 동적 변수 가져오는 방법</p>
                </li>
                <li style={liStyles}>
                    - <strong>useRpage 폴더</strong>
                    <p>useRoutePage를 이용하여 컴포넌트 내부에서 URL 동적 변수 가져오는 방법</p>
                </li>
            </ul>
        </div>
    )
}

export default chapterSiteMap;