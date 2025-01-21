import NavItem from "./NavItem";


const NavMenu = () => {
    const menus = [
        { text: 'Home', to: '/home' },
        { text: 'pemasaran', to: '/pemasaran' },
        { text: 'Contact', to: '/contact' },
        { text: 'bisnis', to: '/bisnis'}
    ];

    return (
        <nav className="w-full px-5  h-auto max-w-[1170px] mx-auto  ">
            <div className="container mx-auto  md:pb-10">
                <div className="w-full h-auto flex mx-auto">

                    {menus.map((menu, index) => (
                        <NavItem key={index} text={menu.text} to={menu.to} /> // Ubah dari textmenu ke text
                    ))}
                </div>

            </div> 
        </nav>
    );
};


export default NavMenu;