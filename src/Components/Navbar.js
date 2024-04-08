// import globe from '../Images/Globe.png';

export default function Navbar(){
    return (
        <div className='container_nav--bar'>
        <nav className="nav--bar"> 
            <img src="https://i.pinimg.com/originals/6f/22/15/6f2215fb658f19a9206c22b38b676ee6.gif" alt='Globe'/>
            <img src="https://i.pinimg.com/originals/6f/22/15/6f2215fb658f19a9206c22b38b676ee6.gif" alt='Globe'/>
            <span className='title_content'>My Travel</span> 
            <img src="https://i.pinimg.com/originals/6f/22/15/6f2215fb658f19a9206c22b38b676ee6.gif" alt='Globe'/>
            <img src="https://i.pinimg.com/originals/6f/22/15/6f2215fb658f19a9206c22b38b676ee6.gif" alt='Globe'/>           
        </nav>
        <div className="content_myname">
        <hr className="section--divider_myname" />
        <h1 className="h1_content_myname" style={{ fontSize: '16px' }}>© Mọi bản quyền thuộc về<span><strong> Huỳnh Vĩnh Tiến</strong></span> - 2024 All rights reserved.</h1>
        </div>
        </div>
    );
}