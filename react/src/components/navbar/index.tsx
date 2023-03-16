import logo from '../../assets/icons/stackx.svg'
import {
    Container
} from './styles'

function Navbar() {
    return(
        <Container>
            <img src={logo} alt="" />
        </Container>
    )
}

export default Navbar;