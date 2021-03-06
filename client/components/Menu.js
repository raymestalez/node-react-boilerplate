import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Actions */
import { logout } from '../actions/profiles'
import { toggleModal } from '../actions/utils'

class Menu extends Component {
    render() {
        return (
            <Dropdown>
              <div className="handle">
                <FontAwesomeIcon icon={["fas", "bars"]}/>
              </div>
              <div className="dropdown-menu">
                { this.props.profile.plan === 'free' &&
	          <div className="menu-item"
	               onClick={()=> this.props.toggleModal("upgrade")}>
	            <FontAwesomeIcon icon={["fas", "arrow-circle-up"]}/>
	            Upgrade
	          </div> }
                <div className="menu-item"
                     onClick={()=> this.props.toggleModal("settings")}>
                  <FontAwesomeIcon icon={["fas", "cog"]}/>
                  Settings
                </div>
                <div className="menu-item"
                     onClick={()=> this.props.logout(this.props.history)}>
                  <FontAwesomeIcon icon={["fas", "sign-out-alt"]}/>
                  Logout
                </div>
              </div>
            </Dropdown>
        )
    }
}

const Dropdown = styled.div`
position: relative;
float:left;
width: 60px;
color: ${props => props.theme.textColor};

.handle {
  cursor: pointer;
  float:left;
}
&:hover .dropdown-menu {
  display: block;
}
.dropdown-menu {
  display: none;
  position: absolute;
  width: 160px;
  top: 100%;
  left: 0;
  z-index: 1000;
  background: white;
  background: ${props => props.theme.dropdownBackground};
  box-shadow: 0 2px 4px rgba(0,0,0,.175);
  border: ${props => props.theme.border};
  .menu-item {
    padding: 8px;
    display:block;
    cursor:pointer;
    text-decoration:none;
    border-bottom: ${props => props.theme.theme === 'dark' && '1px solid rgba(0,0,0,0.15)'};
    &.active {
      color: white;
    }
    &:hover {
      background:  ${props => props.theme.dropdownHover};;		
    }
    svg {
      margin-right: 8px;
    }
  }		
}
`

export default connect(({profile})=>({profile}), { logout, toggleModal})(Menu)
