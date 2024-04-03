const NavItem = (props) => {
    const sendSection = (section) => {
        console.log("Setting section to " + section)
        props.setSection(section);
    }

    return (
        <li>
            <a href={`#${props.navItem}`}
                className={props.navItem === props.section ? "active" : ""}
                onClick={(e) => props.setSection(props.navItem)}>
            {props.navItem}
            </a>
        </li>
    )
}

export default NavItem;