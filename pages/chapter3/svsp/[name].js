/**
 * Next.js 내장 getServerSideProps함수를 통해 URL 동적 변수 가져오기
 */

export async function getServerSideProps({params}) {
    const {name } = params;
    return {
        props: {
            name,
        },
    };
}

const svspPage = (props) => {
    return (
        <div>
        <h2>{props.name}입니다</h2>
        <p>http://localhost:3000/chapter3/svsp/youngsik 입력 페이지 라우팅 기본 기능</p>
        </div>
       )
}

export default svspPage;