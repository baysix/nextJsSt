/**
 * useRouter next 기능을 사용해서 getServerSideProps를 사용하지 않고
 * 컴포넌트 내부에서 경로 매개변수를 사용하는 방법입니다.
 */
import { useRouter } from 'next/router';

const useRoutePage = () => {
    const { query } = useRouter();

    return (
        <div>
            <h2>useRouter를 이용한 컴포넌트 안에서 경로매개변수를 사용하는 방법 소스 입니다</h2>
            <p>localhost:3000/chapter3/useRpage/name 입력 페이지 라우팅 기본 기능</p>
            <p>localhost:3000/chapter3/useRpage/name?parma=true 입력 페이지 라우팅 파라미터 기능</p>
            {console.log(query)}
            <p>{query.name}</p>
        </div>
    )
}


export default useRoutePage;