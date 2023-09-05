import Link from "next/link";

function NavBar() {
    return (
        /**
         * loclhost:3000/chapter3/navLink
         * Link의 기본적인 기능은 Link에 의해 연결된 페이지는 
         * 모든 데이터를 이미 불러온 상태 입니다.
         */
        <div>
            <Link href='/about'>Home</Link>
            <br />
            <Link href='/about'>About</Link>
            <br />
            <Link href='/about'>Contacts</Link>
            <br />

            {/* preload속성은 모든데이터를 미리 불러오는 기능을 비활성화 시킬수있다 */}
            <Link href='/chapter3/useRpage/aaa' preload={false}>/chapter3/useRpage/name</Link>
            <br />
            
             {/* href를 통해 query 및 pathname을 설정할수 있는 방법 */}
            <Link
                href={{
                    pathname: '/chapter3/useRpage/[name]',
                    query: {
                        name: 'sick',
                        foo: 'testFoo',
                    }
                }}>
                href를 복잡하게 정의해서 보내는 방법링크
            </Link>

        </div>
    )
}

export default NavBar;