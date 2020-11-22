// 이페이지는 공통 메뉴
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu } from 'antd';

const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item><Link href="/"><a>노드버드</a></Link></Menu.Item>
                <Menu.Item><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item><Link href="/signup"><a>회원가입</a></Link></Menu.Item>
            </Menu>
            {children}
        </div>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired, // 여기서 노드는 리액트의 노드임, 화면에 들어가는 모든 것들이 노드(return안)
};

export default AppLayout;