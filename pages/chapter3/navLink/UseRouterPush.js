import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function UseRouterPush() {

    const router = useRouter();

    const loggedIn = true;

    /**
     * useEffect를 이용해서 클라이언트에서만 실행되도록 만듬 
     * 로그인이 안된 상태에서는 로그인 페이지로 이동시키는 소스
     * router.push 링크 이동과 같은 방식으로 작동한다
     * 
     */
    useEffect(()=>{
        if(!loggedIn){

            //기본 타입
            router.push('/login');

            //객체 전달 타입
            router.push({
                pathname: '/chapter3/useRpage/[name]',
                    query: {
                        name: 'sick',
                        foo: 'testFoo',
                    }
            })
        }
    },[loggedIn])

    return (
        <div>
            useRouter를 이용해서 링크이동방법입니다.
            router.push에 대한 설명
        </div>
    )
}

export default UseRouterPush;