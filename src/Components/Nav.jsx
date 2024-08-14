import React from 'react';
import { Navbar, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
    const navigate = useNavigate();
    
    return (
        <Navbar color="light" light expand="md" className="pb-3">
            <Nav className="me-auto" navbar>
                <NavItem className="pl-2">
                    <NavLink href="/allgames" className="text-blue-600 hover:text-purple-700">All Games</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/create" className="text-blue-600 hover:text-purple-700">Collect a Rock</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/mine" className="text-blue-600 hover:text-purple-700">My Rocks</NavLink>
                </NavItem>
                {
                    (localStorage.getItem("rock_token") !== null) ?
                        <NavItem>
                            <Button color="link" className="text-blue-600 hover:text-purple-700"
                                onClick={() => {
                                    localStorage.removeItem("rock_token");
                                    navigate('/login');
                                }}
                            >
                                Logout
                            </Button>
                        </NavItem> :
                        <>
                            <NavItem>
                                <NavLink href="/login" className="text-blue-600 hover:text-purple-700">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/register" className="text-blue-600 hover:text-purple-700">Register</NavLink>
                            </NavItem>
                        </>
                }
            </Nav>
        </Navbar>
    );
};
