import NavItem from './NavItem';

const Nav = ({ navItems , setSection, section}) => {
  return (
    <nav>
      <ul>
        {navItems.map((navItem, index) => {
           return (
            <NavItem key={index} navItem={navItem} setSection={setSection} section={section}></NavItem>
            //  <li key={navItem}>
            //     <a href={`#${navItem}`} onClick={(e) => setSection(navItem)}>{navItem}</a>
            // </li>
           )
        })}
      </ul>
    </nav>
  );
};

export default Nav;